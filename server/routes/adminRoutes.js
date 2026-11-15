import express from 'express';
import db from '../db/index.js';
import queueService from '../services/queueService.js';

const router = express.Router();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'dotnetconf2026';

// Middleware to verify admin authentication
function requireAdminAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized. Admin token required.' });
  }
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token || (token !== 'admin_session_token' && token !== 'local_dev_token' && token !== ADMIN_PASSWORD)) {
    return res.status(401).json({ error: 'Invalid or expired admin session.' });
  }
  next();
}

/**
 * POST /api/bloom/admin/login
 */
router.post('/login', (req, res) => {
  const { password } = req.body;
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid admin credentials.' });
  }

  return res.json({
    success: true,
    token: 'admin_session_token',
    message: 'Authenticated successfully.',
  });
});

/**
 * GET /api/bloom/admin/stats
 */
router.get('/stats', requireAdminAuth, async (req, res) => {
  try {
    const stats = await db.getStats();
    return res.json(stats);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to query statistics.' });
  }
});

/**
 * GET /api/bloom/admin/participants
 */
router.get('/participants', requireAdminAuth, async (req, res) => {
  try {
    const participants = await db.getAllAttendees();
    return res.json({ participants });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to retrieve participants.' });
  }
});

/**
 * POST /api/bloom/admin/retry-video/:id
 */
router.post('/retry-video/:id', requireAdminAuth, async (req, res) => {
  try {
    const attendee = await db.getAttendee(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: 'Attendee not found.' });
    }

    const baseUrl = req.protocol + '://' + req.get('host');
    queueService.enqueue(attendee, baseUrl);
    return res.json({ success: true, message: 'Video generation re-queued.' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to re-queue video generation.' });
  }
});

/**
 * POST /api/bloom/admin/retry-email/:id
 */
router.post('/retry-email/:id', requireAdminAuth, async (req, res) => {
  try {
    const attendee = await db.getAttendee(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: 'Attendee not found.' });
    }

    const baseUrl = req.protocol + '://' + req.get('host');
    queueService.enqueue(attendee, baseUrl);
    return res.json({ success: true, message: 'Email delivery re-queued.' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to re-queue email delivery.' });
  }
});

/**
 * GET /api/bloom/admin/export-csv
 */
router.get('/export-csv', requireAdminAuth, async (req, res) => {
  try {
    const participants = await db.getAllAttendees();
    const headers = ['ID', 'Name', 'Email', 'Archetype', 'Video Status', 'Email Status', 'Registered At'];
    const rows = participants.map((p) => [
      p.id,
      `"${p.name.replace(/"/g, '""')}"`,
      p.email,
      p.archetype || 'Custom',
      p.video_status,
      p.email_status,
      p.created_at,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="bloom-attendees-${new Date().toISOString().slice(0, 10)}.csv"`
    );
    return res.send(csvContent);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to generate CSV export.' });
  }
});

export default router;

