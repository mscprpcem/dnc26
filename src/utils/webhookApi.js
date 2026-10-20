// Unified Google Apps Script Webhook Integration for .NET Conf 2026 Amravati
// Submits delegate interest directly to Google Sheets via Code.gs

export const DEFAULT_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzcLQL-AyGgcXPGGTev_dh-pLIYVXpSWlfXdU_tcXxgFnnPWzeSnNJhg8je_SCCTjMY/exec";

/**
 * Get active Webhook URL (checks VITE_WEBHOOK_URL env, then fallback to default)
 * @returns {string}
 */
export function getWebhookUrl() {
  const envUrl = import.meta.env && import.meta.env.VITE_WEBHOOK_URL;
  if (envUrl && typeof envUrl === "string" && envUrl.trim() !== "") {
    return envUrl.trim();
  }
  return DEFAULT_WEBHOOK_URL;
}

/**
 * Send Expression of Interest submission to Google Apps Script Webhook (Code.gs)
 * Updates the "DotNetConf_2026_Amravati" and "Event_Registrations" tabs in Google Sheets
 * @param {Object} formData
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendInterestSubmission(formData) {
  const webhookUrl = getWebhookUrl();
  const timestamp = new Date().toISOString();
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const payload = {
    type: "EVENT_REGISTRATION",
    eventId: "dotnetconf-2026-amravati",
    eventTitle: ".NET Conf 2026 Amravati",
    fullName: formData.fullName || "",
    email: formData.email || "",
    phone: formData.phone || "",
    college: formData.college || "",
    branch: formData.branch || "",
    yearOfStudy: formData.yearOfStudy || formData.role || "",
    rollNo: formData.rollNo || "",
    message: formData.interests || formData.message || "Expressed Interest in .NET Conf 2026 Amravati",
    timestamp,
    submittedAt,
  };

  // 1. Local backup in browser storage
  try {
    const storageKey = "dnc26_interest_submissions";
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    localStorage.setItem(storageKey, JSON.stringify([payload, ...existing]));
  } catch (err) {
    console.warn("Could not save local submission backup:", err);
  }

  // 2. Dispatch to Google Apps Script Webhook
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      return {
        success: true,
        message: "Your interest in .NET Conf 2026 Amravati has been successfully recorded!",
      };
    } catch (err) {
      console.warn("Webhook dispatch error:", err);
    }
  }

  return {
    success: true,
    message: "Your interest has been recorded!",
  };
}

/**
 * Send Call for Proposals (CFP) submission
 * Stores locally in localStorage and forwards to Google Apps Script webhook
 * @param {Object} cfpData
 * @returns {Promise<{success: boolean, message: string, proposalId: string}>}
 */
export async function sendCfpSubmission(cfpData) {
  const webhookUrl = getWebhookUrl();
  const timestamp = new Date().toISOString();
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const proposalId = `DNC26-CFP-${Math.floor(1000 + Math.random() * 9000)}`;

  const payload = {
    type: "CFP_SUBMISSION",
    proposalId,
    eventId: "dotnetconf-2026-amravati",
    eventTitle: ".NET Conf 2026 Amravati",
    // Speaker Info
    fullName: cfpData.fullName || "",
    email: cfpData.email || "",
    phone: cfpData.phone || "",
    jobTitle: cfpData.jobTitle || "",
    company: cfpData.company || "",
    city: cfpData.city || "",
    country: cfpData.country || "",
    bio: cfpData.bio || "",
    hasHeadshot: Boolean(cfpData.headshotUrl),
    // Socials
    linkedin: cfpData.linkedin || "",
    github: cfpData.github || "",
    twitter: cfpData.twitter || "",
    website: cfpData.website || "",
    pastTalks: cfpData.pastTalks || "",
    // Proposal
    format: cfpData.format || "Talk",
    track: cfpData.track || "",
    level: cfpData.level || "Intermediate",
    talkTitle: cfpData.talkTitle || "",
    abstract: cfpData.abstract || "",
    takeaways: cfpData.takeaways || "",
    prerequisites: cfpData.prerequisites || "",
    presentedBefore: cfpData.presentedBefore || "No - Brand new talk",
    agreedToCodeOfConduct: Boolean(cfpData.agreedToCodeOfConduct),
    timestamp,
    submittedAt,
  };

  // 1. Local storage backup
  try {
    const storageKey = "dnc26_cfp_submissions";
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    localStorage.setItem(storageKey, JSON.stringify([payload, ...existing]));
  } catch (err) {
    console.warn("Could not save local CFP backup:", err);
  }

  // 2. Dispatch to webhook if available
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Webhook dispatch error for CFP:", err);
    }
  }

  return {
    success: true,
    proposalId,
    message: "Your proposal for .NET Conf 2026 Amravati has been submitted successfully!",
  };
}

