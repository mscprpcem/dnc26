import express from 'express';
import db from '../db/index.js';
import queueService from '../services/queueService.js';
import videoService from '../services/videoService.js';

const router = express.Router();

/**
 * POST /api/bloom/register
 * Register attendee, generate flower config, queue async video & email
 */
router.post('/register', async (req, res) => {
  try {
    const { name, email, id, seed, archetype, flowerConfig } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const attendeeId = id || `dnc_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;

    // Save or update attendee in database
    const attendee = await db.createAttendee({
      id: attendeeId,
      name: cleanName,
      email: cleanEmail,
      seed: seed || Date.now(),
      archetype: archetype || 'Cosmic Orchid',
      flowerConfig: flowerConfig || {},
    });

    // Enqueue background video rendering and email delivery asynchronously
    const baseUrl = req.protocol + '://' + req.get('host');
    queueService.enqueue(attendee, baseUrl);

    return res.status(201).json({
      success: true,
      id: attendee.id,
      seed: attendee.seed,
      archetype: attendee.archetype,
      shareUrl: `${baseUrl}/bloom/view/${attendee.id}`,
    });
  } catch (err) {
    console.error('Registration API error:', err);
    return res.status(500).json({ error: 'Internal server error processing registration.' });
  }
});

/**
 * GET /api/bloom/status/:id
 * Check video and email processing status
 */
router.get('/status/:id', async (req, res) => {
  try {
    const attendee = await db.getAttendee(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: 'Attendee creation not found.' });
    }

    return res.json({
      id: attendee.id,
      video_status: attendee.video_status,
      video_url: attendee.video_url,
      email_status: attendee.email_status,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Error querying creation status.' });
  }
});

/**
 * GET /api/bloom/creation/:id
 * Public endpoint for QR code mobile viewer
 */
router.get('/creation/:id', async (req, res) => {
  try {
    const attendee = await db.getAttendee(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: 'Creation not found.' });
    }

    return res.json({
      attendee: {
        id: attendee.id,
        name: attendee.name,
        email: attendee.email,
        seed: attendee.seed,
        archetype: attendee.archetype,
        created_at: attendee.created_at,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: 'Error fetching creation.' });
  }
});

/**
 * GET /api/bloom/video/:id
 * Download or stream attendee MP4 video
 */
router.get('/video/:id', (req, res) => {
  const filePath = videoService.getVideoPath(req.params.id);
  if (filePath) {
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="bloom-future-${req.params.id}.mp4"`
    );
    return res.sendFile(filePath);
  }

  // If video is still rendering or unavailable, send placeholder response
  return res.status(202).json({
    status: 'rendering',
    message: 'Your video is still rendering in the background. Please check back shortly.',
  });
});

export default router;

