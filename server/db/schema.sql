-- ============================================================
-- BLOOM YOUR FUTURE — .NET CONF AMRAVATI
-- PostgreSQL Database Schema & Migrations
-- ============================================================

CREATE TABLE IF NOT EXISTS bloom_attendees (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    seed BIGINT NOT NULL,
    archetype VARCHAR(100) NOT NULL,
    flower_config JSONB,
    status VARCHAR(50) DEFAULT 'registered',
    video_url TEXT,
    video_status VARCHAR(50) DEFAULT 'pending', -- pending, rendering, completed, failed
    video_error TEXT,
    email_status VARCHAR(50) DEFAULT 'pending', -- pending, sent, failed
    email_error TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Unique index to prevent duplicate submissions per attendee email
CREATE UNIQUE INDEX IF NOT EXISTS idx_bloom_attendees_email ON bloom_attendees(LOWER(email));
CREATE INDEX IF NOT EXISTS idx_bloom_attendees_created_at ON bloom_attendees(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bloom_attendees_video_status ON bloom_attendees(video_status);
CREATE INDEX IF NOT EXISTS idx_bloom_attendees_email_status ON bloom_attendees(email_status);

