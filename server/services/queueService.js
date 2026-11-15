import videoService from './videoService.js';
import emailService from './emailService.js';

class BloomJobQueue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  enqueue(attendee, baseUrl = 'http://localhost:5173') {
    this.queue.push({ attendee, baseUrl, attempts: 0 });
    console.log(`[Queue] Enqueued async job for ${attendee.name} (${attendee.id})`);
    this.processNext();
  }

  async processNext() {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;
    const job = this.queue.shift();

    try {
      console.log(`[Queue] Processing background video & email for ${job.attendee.name}...`);

      // 1. Render Video Asynchronously
      await videoService.renderVideo(job.attendee);

      // 2. Send Personalized Email
      await emailService.sendEmail(job.attendee, job.baseUrl);

      console.log(`[Queue] Finished background job for ${job.attendee.name}`);
    } catch (err) {
      console.error(`[Queue] Error processing job for ${job.attendee.id}:`, err);
      job.attempts += 1;
      if (job.attempts < 3) {
        console.log(`[Queue] Re-queuing failed job for ${job.attendee.id} (attempt ${job.attempts}/3)`);
        this.queue.push(job);
      }
    } finally {
      this.isProcessing = false;
      if (this.queue.length > 0) {
        setTimeout(() => this.processNext(), 100);
      }
    }
  }
}

export const queueService = new BloomJobQueue();
export default queueService;

