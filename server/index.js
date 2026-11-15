import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bloomRoutes from './routes/bloomRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Static storage for rendered videos
const videosDir = path.join(__dirname, 'data', 'videos');
app.use('/videos', express.static(videosDir));

// Routes
app.use('/api/bloom', bloomRoutes);
app.use('/api/bloom/admin', adminRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Bloom Your Future API',
    conference: '.NET Conf 2026 Amravati',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🌸 Bloom Your Future API running on http://localhost:${PORT}`);
  console.log(`🌿 Kiosk endpoints: /api/bloom/register`);
  console.log(`🔐 Admin endpoints: /api/bloom/admin/stats`);
});

export default app;

