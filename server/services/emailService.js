import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import db from '../db/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const EMAILS_LOG_DIR = path.join(__dirname, '..', 'data', 'emails');

if (!fs.existsSync(EMAILS_LOG_DIR)) {
  fs.mkdirSync(EMAILS_LOG_DIR, { recursive: true });
}

export const emailService = {
  /**
   * Format Responsive HTML Email Template
   */
  generateEmailHtml(attendee, creationUrl, videoDownloadUrl) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Bloom Your Future Creation</title>
  <style>
    body { margin: 0; padding: 0; background-color: #030705; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F3F4F6; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background: #07120B; border: 1px solid rgba(52, 211, 153, 0.25); border-radius: 16px; padding: 36px 28px; text-align: center; }
    .badge { display: inline-block; padding: 6px 14px; background: rgba(5, 150, 105, 0.2); border: 1px solid rgba(52, 211, 153, 0.4); border-radius: 9999px; color: #6EE7B7; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
    h1 { font-size: 28px; font-weight: 800; color: #FFFFFF; margin: 0 0 12px 0; letter-spacing: 0.5px; }
    .highlight { color: #FBBF24; }
    p { font-size: 15px; line-height: 1.6; color: #D1D5DB; margin: 16px 0; }
    .quote { font-style: italic; color: #A7F3D0; font-size: 16px; margin: 24px 0; border-left: 3px solid #10B981; padding-left: 14px; text-align: left; }
    .btn { display: inline-block; padding: 14px 32px; background: #10B981; color: #022013; font-size: 15px; font-weight: bold; text-decoration: none; border-radius: 9999px; margin: 24px 0 12px 0; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4); }
    .footer { margin-top: 32px; font-size: 12px; color: #6B7280; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="badge">.NET Conf Amravati · Bloom Your Future</div>
      <h1>Hello <span class="highlight">${attendee.name}</span>,</h1>
      <p style="font-size: 18px; color: #A7F3D0; font-weight: 600;">Your digital flower has bloomed!</p>
      <p>Thank you for being part of <strong>.NET Conf Amravati</strong>.</p>
      
      <div class="quote">
        &ldquo;Every great innovation starts with an idea. Keep building, keep learning, and keep growing.&rdquo;
      </div>

      <p>Your personalized <strong>Bloom Your Future</strong> creation is ready to view, share, and download.</p>

      <div>
        <a href="${creationUrl}" class="btn" target="_blank">View Your Creation</a>
      </div>

      <p style="font-size: 12px; color: #9CA3AF; margin-top: 20px;">
        Direct Video Download: <a href="${videoDownloadUrl}" style="color: #6EE7B7;" target="_blank">Download MP4</a>
      </p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: #E5E7EB;">
        <strong>.NET Conf Amravati</strong><br>
        Swami Vivekanand Auditorium, PRPCEM · January 2–3, 2027
      </div>
    </div>

    <div class="footer">
      Organized by Microsoft Student Club PRPCEM Amravati<br>
      Every developer starts with an idea. What you build makes it bloom.
    </div>
  </div>
</body>
</html>
    `;
  },

  /**
   * Send Email to Attendee
   */
  async sendEmail(attendee, baseUrl = 'http://localhost:5173') {
    const creationUrl = `${baseUrl}/bloom/view/${attendee.id}`;
    const videoDownloadUrl = `${baseUrl}/api/bloom/video/${attendee.id}`;
    const htmlContent = this.generateEmailHtml(attendee, creationUrl, videoDownloadUrl);

    // 1. Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'bloom@dotnetconf.in',
            to: attendee.email,
            subject: 'Your Bloom Your Future Experience — .NET Conf Amravati',
            html: htmlContent,
          }),
        });

        if (response.ok) {
          await db.updateEmailStatus(attendee.id, 'sent');
          console.log(`✓ Email sent via Resend to ${attendee.email}`);
          return { success: true, provider: 'resend' };
        }
      } catch (err) {
        console.warn('Resend send failed:', err.message);
      }
    }

    // 2. SendGrid API
    if (process.env.SENDGRID_API_KEY) {
      try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: attendee.email }] }],
            from: { email: process.env.EMAIL_FROM || 'bloom@dotnetconf.in', name: '.NET Conf Amravati' },
            subject: 'Your Bloom Your Future Experience — .NET Conf Amravati',
            content: [{ type: 'text/html', value: htmlContent }],
          }),
        });

        if (response.ok || response.status === 202) {
          await db.updateEmailStatus(attendee.id, 'sent');
          console.log(`✓ Email sent via SendGrid to ${attendee.email}`);
          return { success: true, provider: 'sendgrid' };
        }
      } catch (err) {
        console.warn('SendGrid send failed:', err.message);
      }
    }

    // 3. Local Dev Fallback (Always writes visual HTML preview for verification)
    const emailFilePath = path.join(EMAILS_LOG_DIR, `${attendee.id}.html`);
    fs.writeFileSync(emailFilePath, htmlContent, 'utf8');

    await db.updateEmailStatus(attendee.id, 'sent');
    console.log(`✓ [DEV EMAIL PREVIEW] Saved to file://${emailFilePath.replace(/\\/g, '/')}`);
    return { success: true, provider: 'local_preview', filePath: emailFilePath };
  },
};

export default emailService;

