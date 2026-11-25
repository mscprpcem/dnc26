/**
 * ==============================================================================
 * .NET CONF 2026 AMRAVATI — SPONSORSHIP INQUIRY BACKEND (Google Apps Script)
 * ==============================================================================
 *
 * This Google Apps Script powers the Direct Sponsorship Inquiry form on the
 * .NET Conf 2026 Amravati website (P. R. Pote Patil College of Engineering & Management).
 *
 * What this script does:
 * 1. Automatically creates and styles a "Sponsorship_Inquiries" tab in Google Sheets.
 * 2. Records incoming inquiries with timestamp, company name, contact, email, phone, tier, and notes.
 * 3. Sends an immediate email alert to the Sponsorship Committee (dotnetconfamt@prpotepatilengg.ac.in).
 * 4. Sends a warm, branded confirmation email to the sponsor.
 * 5. Returns a JSON success status back to the React website.
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Sheet (or create a new one: sheets.new).
 * 2. Click "Extensions" -> "Apps Script".
 * 3. Delete any default code in Code.gs, paste this entire file, and click "Save" (Ctrl+S).
 * 4. Click "Deploy" -> "New deployment".
 * 5. Click the gear icon (Select type) -> "Web app".
 * 6. Set Description: ".NET Conf 2026 Sponsorship Webhook".
 * 7. Set "Execute as": "Me" (your Google account).
 * 8. Set "Who has access": "Anyone" (allows website form submissions).
 * 9. Click "Deploy", authorize access with your Google account.
 * 10. Copy the "Web app URL" and paste it in your `.env` file as:
 *     VITE_SPONSORSHIP_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 * ==============================================================================
 */

// CONFIGURATION
const COMMITTEE_EMAILS = "dotnetconfamt@prpotepatilengg.ac.in, mlsc@prpotepatilengg.ac.in";
const TIMEZONE = "Asia/Kolkata";
const EVENT_NAME = ".NET Conf 2026 Amravati";
const VENUE_NAME = "PRPCEM Campus, Amravati";
const WEBSITE_URL = "https://dnc.mscprpcem.tech";

/**
 * GET Request — Quick health check to test if deployment is live
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      service: "Sponsorship Inquiries Webhook",
      event: EVENT_NAME,
      timestampIST: Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss"),
      recipientEmails: COMMITTEE_EMAILS
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * POST Request — Receives website sponsorship form submissions
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // Acquire lock for 10 seconds to prevent concurrent write collisions
    lock.waitLock(10000);

    const data = parsePayload(e);
    if (!data || Object.keys(data).length === 0) {
      throw new Error("No data received in POST request.");
    }

    const timestamp = Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss");

    // Extract fields with multiple alias fallbacks
    const company = getVal(data, "companyName", "organization", "company", "org") || "N/A";
    const contact = getVal(data, "contactName", "fullName", "name", "contactPerson") || "N/A";
    const email = getVal(data, "workEmail", "email", "emailAddress", "mail") || "N/A";
    const phone = getVal(data, "phone", "phoneNumber", "mobile", "whatsapp") || "N/A";
    const tier = getVal(data, "tier", "selectedTier", "package", "collaborationType") || "General Partnership Inquiry";
    const notes = getVal(data, "inquiryNotes", "message", "notes", "requirements") || "Prospectus & invoicing requested";

    // Open active spreadsheet and access / create the Sponsorship sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSponsorshipSheet(ss);

    // Append inquiry row
    sheet.appendRow([
      timestamp,
      company,
      contact,
      email,
      phoneAsText(phone),
      tier,
      notes,
      "New Inquiry",
      ""
    ]);

    // Send instant alert email to the committee
    sendCommitteeNotification(timestamp, company, contact, email, phone, tier, notes);

    // Send professional confirmation acknowledgment to the sponsor
    if (email && email.indexOf("@") !== -1) {
      sendSponsorConfirmation(company, contact, email, tier);
    }

    // Return success response to the frontend
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Sponsorship inquiry recorded successfully. Committee has been notified.",
        timestamp: timestamp
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("Error in doPost:", err.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: err.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Access or create the "Sponsorship_Inquiries" sheet tab with styled headers
 */
function getOrCreateSponsorshipSheet(ss) {
  const sheetName = "Sponsorship_Inquiries";
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);

    const headers = [
      "Timestamp (IST)",
      "Company / Organization",
      "Contact Person",
      "Work Email",
      "Phone",
      "Package / Tier Selected",
      "Requirements & Notes",
      "Status",
      "Assigned Committee Member"
    ];

    sheet.appendRow(headers);

    // Header styling: Navy background with bold white text
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Arial");
    headerRange.setFontSize(10);
    headerRange.setWrap(true);

    sheet.setFrozenRows(1);

    // Set initial column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 200); // Company
    sheet.setColumnWidth(3, 170); // Contact Person
    sheet.setColumnWidth(4, 220); // Email
    sheet.setColumnWidth(5, 140); // Phone
    sheet.setColumnWidth(6, 220); // Tier
    sheet.setColumnWidth(7, 300); // Notes
    sheet.setColumnWidth(8, 120); // Status
    sheet.setColumnWidth(9, 180); // Assigned
  }

  return sheet;
}

/**
 * Sends rich HTML email notification to the organizers
 */
function sendCommitteeNotification(timestamp, company, contact, email, phone, tier, notes) {
  const subject = "🤝 [Sponsorship Inquiry] " + company + " (" + tier + ")";

  const htmlBody =
    '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 2px solid #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 4px 4px 0px #0f172a;">' +
      '<div style="background: #512BD4; padding: 20px 24px; color: #ffffff;">' +
        '<span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px;">New Sponsorship Lead</span>' +
        '<h2 style="margin: 10px 0 0 0; font-size: 20px; font-weight: 800; color: #ffffff;">' + company + '</h2>' +
        '<p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Interested in: <strong>' + tier + '</strong></p>' +
      '</div>' +
      '<div style="padding: 24px;">' +
        '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
          '<tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Contact Person:</td><td style="padding: 8px 0; font-weight: 700; color: #0f172a;">' + contact + '</td></tr>' +
          '<tr><td style="padding: 8px 0; color: #64748b;">Work Email:</td><td style="padding: 8px 0; font-weight: 700;"><a href="mailto:' + email + '" style="color: #512BD4; text-decoration: none;">' + email + '</a></td></tr>' +
          '<tr><td style="padding: 8px 0; color: #64748b;">Phone:</td><td style="padding: 8px 0; font-weight: 700; color: #0f172a;">' + phone + '</td></tr>' +
          '<tr><td style="padding: 8px 0; color: #64748b;">Package:</td><td style="padding: 8px 0; font-weight: 700; color: #512BD4;">' + tier + '</td></tr>' +
          '<tr><td style="padding: 8px 0; color: #64748b;">Received At:</td><td style="padding: 8px 0; color: #64748b;">' + timestamp + '</td></tr>' +
        '</table>' +
        '<div style="margin-top: 16px; padding: 14px; background: #f8fafc; border-left: 4px solid #512BD4; border-radius: 6px;">' +
          '<div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Requirements / Message:</div>' +
          '<div style="font-size: 13px; color: #334155; line-height: 1.5;">' + (notes || "No additional notes provided.") + '</div>' +
        '</div>' +
        '<div style="margin-top: 24px; text-align: center;">' +
          '<a href="mailto:' + email + '?subject=Re:%20' + encodeURIComponent('.NET Conf 2026 Sponsorship Partnership - ' + company) + '" style="display: inline-block; background: #512BD4; color: #ffffff; padding: 10px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 13px;">Reply to Sponsor Directly &rarr;</a>' +
        '</div>' +
      '</div>' +
      '<div style="background: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">' +
        '.NET Conf 2026 Amravati &bull; Microsoft Student Club PRPCEM' +
      '</div>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: COMMITTEE_EMAILS,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: email
    });
  } catch (err) {
    console.error("Failed to send committee email:", err.toString());
  }
}

/**
 * Sends a warm, professional confirmation email to the sponsor
 */
function sendSponsorConfirmation(company, contact, email, tier) {
  const subject = "Thank you for partnering with " + EVENT_NAME + " (" + company + ")";

  const htmlBody =
    '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 2px solid #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 4px 4px 0px #0f172a;">' +
      '<div style="background: #512BD4; padding: 24px; color: #ffffff; text-align: center;">' +
        '<h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">' + EVENT_NAME + '</h1>' +
        '<p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Central India\'s Premier Microsoft Developer Summit</p>' +
      '</div>' +
      '<div style="padding: 24px;">' +
        '<p style="font-size: 15px; color: #0f172a; margin-top: 0;">Dear <strong>' + contact + '</strong>,</p>' +
        '<p style="font-size: 14px; color: #334155; line-height: 1.6;">' +
          'Thank you for your interest in partnering with <strong>' + EVENT_NAME + '</strong> on behalf of <strong>' + company + '</strong>! We have received your inquiry for the <strong>' + tier + '</strong> package.' +
        '</p>' +
        '<p style="font-size: 14px; color: #334155; line-height: 1.6;">' +
          'Our sponsorship conveners and faculty committee at P. R. Pote Patil College of Engineering and Management (PRPCEM) are reviewing your request. We will connect with you within <strong>24 business hours</strong> with the formal sponsorship prospectus, MoU agreement, and GST tax invoice details.' +
        '</p>' +
        '<div style="margin: 20px 0; padding: 14px 18px; background: #faf5ff; border: 1.5px solid #d8b4fe; border-radius: 8px;">' +
          '<div style="font-size: 12px; font-weight: 700; color: #6b21a8; margin-bottom: 4px;">Event Overview:</div>' +
          '<div style="font-size: 13px; color: #4c1d95;">' +
            '&bull; <strong>Dates:</strong> January 2–3, 2027<br />' +
            '&bull; <strong>Venue:</strong> Swami Vivekanand Auditorium, PRPCEM Amravati<br />' +
            '&bull; <strong>Expected Audience:</strong> 1,000+ delegates (Engineers, Founders, Tech Leads, Students)' +
          '</div>' +
        '</div>' +
        '<p style="font-size: 13px; color: #64748b; line-height: 1.5;">' +
          'If you have urgent questions or need custom allocations, feel free to write to us directly at <a href="mailto:dotnetconfamt@prpotepatilengg.ac.in" style="color: #512BD4; font-weight: 700;">dotnetconfamt@prpotepatilengg.ac.in</a>.' +
        '</p>' +
        '<div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #0f172a;">' +
          'Warm Regards,<br />' +
          '<strong>Sponsorship Desk &amp; Conveners</strong><br />' +
          'Microsoft Student Club PRPCEM &bull; ' + EVENT_NAME + '<br />' +
          '<span style="font-size: 12px; color: #64748b;">P. R. Pote (Patil) College of Engineering &amp; Management, Amravati</span>' +
        '</div>' +
      '</div>' +
      '<div style="background: #081630; padding: 14px 24px; text-align: center; color: #94a3b8; font-size: 11px;">' +
        '<a href="' + WEBSITE_URL + '" style="color: #ffffff; text-decoration: none; font-weight: 700;">' + WEBSITE_URL.replace("https://", "") + '</a> &bull; Be a force for good.' +
      '</div>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      htmlBody: htmlBody,
      name: ".NET Conf 2026 Sponsorship Committee",
      replyTo: "dotnetconfamt@prpotepatilengg.ac.in"
    });
  } catch (err) {
    console.error("Failed to send sponsor confirmation email:", err.toString());
  }
}

/**
 * Universal payload parser supporting JSON, URL-encoded FormData, and URL parameters
 */
function parsePayload(e) {
  if (!e) return {};

  let data = {};

  // 1. Check raw postData contents (JSON or URL-encoded)
  if (e.postData && e.postData.contents) {
    const raw = e.postData.contents.trim();
    if (raw.startsWith("{") && raw.endsWith("}")) {
      try {
        data = JSON.parse(raw);
      } catch (jsonErr) {
        console.warn("JSON parse error:", jsonErr.toString());
      }
    } else {
      // URL-encoded string parse
      data = parseUrlEncoded(raw);
    }
  }

  // 2. Check e.parameter
  if (e.parameter) {
    for (let key in e.parameter) {
      if (!data[key]) {
        data[key] = e.parameter[key];
      }
    }
  }

  return data;
}

function parseUrlEncoded(str) {
  const obj = {};
  if (!str) return obj;
  const pairs = str.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const parts = pairs[i].split("=");
    if (parts.length === 2) {
      const k = decodeURIComponent(parts[0].replace(/\+/g, " "));
      const v = decodeURIComponent(parts[1].replace(/\+/g, " "));
      obj[k] = v;
    }
  }
  return obj;
}

function getVal(data, ...keys) {
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (data[k] !== undefined && data[k] !== null && String(data[k]).trim() !== "") {
      return String(data[k]).trim();
    }
  }
  return "";
}

function phoneAsText(phone) {
  if (!phone || phone === "N/A") return "N/A";
  const clean = String(phone).trim();
  // Prefix single quote so Google Sheets treats +91 and leading 0 as text, not formula
  return clean.startsWith("'") ? clean : "'" + clean;
}

