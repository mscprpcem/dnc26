import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCAL_DB_FILE = path.join(DATA_DIR, 'bloom_records.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let pgPool = null;

// Initialize PostgreSQL if DATABASE_URL is configured
if (process.env.DATABASE_URL) {
  try {
    pgPool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    // Run auto-migrations
    pgPool.query(`
      CREATE TABLE IF NOT EXISTS bloom_attendees (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        seed BIGINT NOT NULL,
        archetype VARCHAR(100) NOT NULL,
        flower_config JSONB,
        status VARCHAR(50) DEFAULT 'registered',
        video_url TEXT,
        video_status VARCHAR(50) DEFAULT 'pending',
        video_error TEXT,
        email_status VARCHAR(50) DEFAULT 'pending',
        email_error TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      CREATE UNIQUE INDEX IF NOT EXISTS idx_bloom_attendees_email ON bloom_attendees(LOWER(email));
    `).then(() => {
      console.log('✓ PostgreSQL connected and bloom_attendees schema verified');
    }).catch((err) => {
      console.warn('PostgreSQL initialization error, falling back to local storage:', err.message);
      pgPool = null;
    });
  } catch (err) {
    console.warn('PostgreSQL connection failed, using local JSON storage:', err.message);
    pgPool = null;
  }
}

// Local Storage Helper
function getLocalRecords() {
  if (!fs.existsSync(LOCAL_DB_FILE)) {
    fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify([], null, 2), 'utf8');
    return [];
  }
  try {
    const raw = fs.readFileSync(LOCAL_DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function saveLocalRecords(records) {
  fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify(records, null, 2), 'utf8');
}

export const db = {
  async createAttendee({ id, name, email, seed, archetype, flowerConfig }) {
    const cleanEmail = email.trim().toLowerCase();
    const now = new Date().toISOString();

    if (pgPool) {
      try {
        const query = `
          INSERT INTO bloom_attendees (id, name, email, seed, archetype, flower_config, status, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, 'registered', $7, $7)
          ON CONFLICT (LOWER(email)) DO UPDATE
          SET name = EXCLUDED.name,
              seed = EXCLUDED.seed,
              archetype = EXCLUDED.archetype,
              flower_config = EXCLUDED.flower_config,
              updated_at = EXCLUDED.updated_at
          RETURNING *;
        `;
        const res = await pgPool.query(query, [id, name, cleanEmail, seed, archetype, JSON.stringify(flowerConfig), now]);
        return res.rows[0];
      } catch (err) {
        console.error('Postgres write error, using local fallback:', err);
      }
    }

    // Local file storage
    const records = getLocalRecords();
    const existingIndex = records.findIndex((r) => r.email.toLowerCase() === cleanEmail);

    const record = {
      id,
      name,
      email: cleanEmail,
      seed,
      archetype,
      flower_config: flowerConfig,
      status: 'registered',
      video_url: null,
      video_status: 'pending',
      video_error: null,
      email_status: 'pending',
      email_error: null,
      created_at: now,
      updated_at: now,
    };

    if (existingIndex >= 0) {
      records[existingIndex] = { ...records[existingIndex], ...record, created_at: records[existingIndex].created_at };
    } else {
      records.unshift(record);
    }

    saveLocalRecords(records);
    return record;
  },

  async getAttendee(id) {
    if (pgPool) {
      try {
        const res = await pgPool.query('SELECT * FROM bloom_attendees WHERE id = $1', [id]);
        if (res.rows.length > 0) return res.rows[0];
      } catch (err) {}
    }

    const records = getLocalRecords();
    return records.find((r) => r.id === id) || null;
  },

  async getAttendeeByEmail(email) {
    const cleanEmail = email.trim().toLowerCase();
    if (pgPool) {
      try {
        const res = await pgPool.query('SELECT * FROM bloom_attendees WHERE LOWER(email) = $1', [cleanEmail]);
        if (res.rows.length > 0) return res.rows[0];
      } catch (err) {}
    }

    const records = getLocalRecords();
    return records.find((r) => r.email.toLowerCase() === cleanEmail) || null;
  },

  async updateVideoStatus(id, videoStatus, videoUrl = null, error = null) {
    const now = new Date().toISOString();
    if (pgPool) {
      try {
        await pgPool.query(
          'UPDATE bloom_attendees SET video_status = $1, video_url = COALESCE($2, video_url), video_error = $3, updated_at = $4 WHERE id = $5',
          [videoStatus, videoUrl, error, now, id]
        );
      } catch (err) {}
    }

    const records = getLocalRecords();
    const item = records.find((r) => r.id === id);
    if (item) {
      item.video_status = videoStatus;
      if (videoUrl) item.video_url = videoUrl;
      item.video_error = error;
      item.updated_at = now;
      saveLocalRecords(records);
    }
  },

  async updateEmailStatus(id, emailStatus, error = null) {
    const now = new Date().toISOString();
    if (pgPool) {
      try {
        await pgPool.query(
          'UPDATE bloom_attendees SET email_status = $1, email_error = $2, updated_at = $3 WHERE id = $4',
          [emailStatus, error, now, id]
        );
      } catch (err) {}
    }

    const records = getLocalRecords();
    const item = records.find((r) => r.id === id);
    if (item) {
      item.email_status = emailStatus;
      item.email_error = error;
      item.updated_at = now;
      saveLocalRecords(records);
    }
  },

  async getAllAttendees() {
    if (pgPool) {
      try {
        const res = await pgPool.query('SELECT * FROM bloom_attendees ORDER BY created_at DESC');
        return res.rows;
      } catch (err) {}
    }
    return getLocalRecords();
  },

  async getStats() {
    const records = await this.getAllAttendees();
    return {
      totalParticipants: records.length,
      animationsCompleted: records.filter((r) => r.status === 'registered' || r.status === 'completed').length,
      videosGenerated: records.filter((r) => r.video_status === 'completed').length,
      emailsSent: records.filter((r) => r.email_status === 'sent').length,
      failedVideos: records.filter((r) => r.video_status === 'failed').length,
      failedEmails: records.filter((r) => r.email_status === 'failed').length,
    };
  },
};

export default db;

