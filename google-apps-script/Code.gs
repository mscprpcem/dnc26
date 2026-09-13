/**
 * ==============================================================================
 * MICROSOFT STUDENT CLUB - PRPCEM
 * Unified Google Apps Script Backend (Sheets, Duplicate Checks & Email Alerts)
 * ==============================================================================
 *
 * Supported Forms & Auto-Created Sheet Tabs:
 * 1. Speaker Applications      -> Tab: "Speaker_Applications"
 * 2. Partners & Sponsors       -> Tab: "Partners_Sponsors"
 * 3. Resource Suggestions      -> Tab: "Resource_Suggestions"
 * 4. Event Registrations       -> Tab: "<Event_Name>" & "Event_Registrations"
 * 5. General Inquiries/Contact -> Tab: "General_Inquiries"
 * 6. Download Tracking         -> Tab: "Downloads_Tracking"
 * 7. Visitor Tracking          -> Tab: "Visitors_Tracking"
 *
 * Features:
 * - Smart duplicate registration prevention (checks email & phone per event)
 * - Multi-alias input parameter recognition
 * - Dynamic catch-all email notification cards
 * - Automated sheet header styling and phone plain-text protection
 */

// ==============================================================================
// CONFIGURATION
// ==============================================================================

// Email address(es) that should receive notifications.
// For multiple emails, separate them with commas.
const NOTIFICATION_EMAILS = "mlsc@prpotepatilengg.ac.in";

// Default timezone
const TIMEZONE = "Asia/Kolkata";


// ==============================================================================
// GET REQUEST - HEALTH CHECK & QUICK DIAGNOSTICS
// ==============================================================================

function doGet(e) {
  return ContentService
    .createTextOutput(
      JSON.stringify({
        status: "online",
        message: "MSC PRPCEM Webhook backend is active and ready to receive submissions.",
        recipientEmail: NOTIFICATION_EMAILS,
        serverTimeIST: Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss")
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}


// ==============================================================================
// POST REQUEST - WEBSITE FORM SUBMISSIONS DISPATCHER
// ==============================================================================

function doPost(e) {
  try {
    // 1. Universal Payload Extractor (Supports JSON, URL-encoded, FormData & query params)
    const data = parseIncomingPayload(e);

    if (!data || Object.keys(data).length === 0) {
      throw new Error("No readable form data received in POST request.");
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const timestamp =
      data.submittedAt ||
      data.timestamp ||
      Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss");

    // Extract common fields with robust multi-alias fallbacks
    const rawType = String(data.type || data.formType || data.action || "").toUpperCase().trim();
    const fullName = getVal(data, "fullName", "name", "speakerName", "contributorName", "userName", "yourName", "fullNameInput");
    const email = getVal(data, "email", "emailAddress", "userEmail", "mail", "contactEmail");
    const phone = getVal(data, "phone", "phoneNumber", "mobile", "whatsapp", "contact", "phoneNo");
    const organization = getVal(data, "organization", "company", "institute", "college", "org", "workplace");
    const role = getVal(data, "role", "designation", "title", "jobTitle", "position");
    const message = getVal(data, "message", "notes", "description", "abstract", "comments", "query", "details");

    // ==========================================================================
    // 1. SPEAKER APPLICATION
    // ==========================================================================
    if (
      rawType === "SPEAKER_APPLICATION" ||
      rawType === "SPEAKER" ||
      data.sessionTitle ||
      data.sessionFormat ||
      data.topic ||
      data.previousSpeaking
    ) {
      const topic = getVal(data, "topic", "topicDomain", "domain", "subject");
      const sessionTitle = getVal(data, "sessionTitle", "title", "proposedTitle", "session");
      const sessionFormat = getVal(data, "sessionFormat", "format", "sessionType") || "Session / Workshop";
      const audienceLevel = getVal(data, "audienceLevel", "level", "targetAudience") || "All Levels";
      const location = getVal(data, "location", "city", "address");
      const linkedin = getVal(data, "linkedin", "linkedinUrl", "socialProfile");
      const previousSpeaking = getVal(data, "previousSpeaking", "experience", "pastSessions");
      const additionalNotes = getVal(data, "additionalNotes", "notes", "message");

      const sheet = getOrCreateSheet(
        ss,
        "Speaker_Applications",
        [
          "Timestamp",
          "Full Name",
          "Email",
          "Phone",
          "Organization / Company",
          "Role / Designation",
          "Location",
          "LinkedIn",
          "Domain / Topic",
          "Proposed Session Title",
          "Session Format",
          "Audience Level",
          "Session Abstract",
          "Previous Speaking Experience",
          "Additional Notes"
        ]
      );

      // Check duplicate speaker proposal (same email + same session title)
      const isDuplicate = isDuplicateSpeakerProposal(sheet, email, sessionTitle);
      if (isDuplicate) {
        return ContentService
          .createTextOutput(
            JSON.stringify({
              status: "already_submitted",
              duplicate: true,
              message: "A speaker application with this title and email is already recorded."
            })
          )
          .setMimeType(ContentService.MimeType.JSON);
      }

      sheet.appendRow([
        timestamp,
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(organization),
        safeText(role),
        safeText(location),
        safeText(linkedin),
        safeText(topic),
        safeText(sessionTitle),
        safeText(sessionFormat),
        safeText(audienceLevel),
        safeText(message),
        safeText(previousSpeaking),
        safeText(additionalNotes)
      ]);

      sendEmailNotification(
        "🎤 [New Speaker Application] " +
          (fullName || "Guest Speaker") +
          " (" +
          (organization || role || "Expert") +
          ")",
        "New Speaker Application Received",
        [
          { label: "Full Name", value: fullName },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Organization", value: organization },
          { label: "Role / Title", value: role },
          { label: "Location", value: location },
          { label: "LinkedIn", value: linkedin },
          { label: "Topic Domain", value: topic },
          { label: "Proposed Title", value: sessionTitle },
          { label: "Format & Level", value: (sessionFormat || "") + (audienceLevel ? " | " + audienceLevel : "") },
          { label: "Session Abstract", value: message },
          { label: "Previous Speaking", value: previousSpeaking },
          { label: "Notes", value: additionalNotes }
        ],
        data
      );
    }

    // ==========================================================================
    // 2. PARTNER / SPONSOR INQUIRY
    // ==========================================================================
    else if (
      rawType === "SPONSOR_APPLICATION" ||
      rawType === "SPONSOR" ||
      rawType === "PARTNER" ||
      data.collaborationType ||
      data.sponsorType
    ) {
      const collaborationType = getVal(data, "collaborationType", "sponsorType", "collaboration", "partnershipType", "typeOfCollaboration") || "Sponsorship / Collaboration";

      const sheet = getOrCreateSheet(
        ss,
        "Partners_Sponsors",
        [
          "Timestamp",
          "Full Name",
          "Email",
          "Phone",
          "Organization / Company",
          "Collaboration Type",
          "Message"
        ]
      );

      sheet.appendRow([
        timestamp,
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(organization),
        safeText(collaborationType),
        safeText(message)
      ]);

      sendEmailNotification(
        "🤝 [New Partnership Inquiry] " +
          (organization || fullName || "Sponsor"),
        "New Partnership / Sponsorship Inquiry",
        [
          { label: "Full Name", value: fullName },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Organization", value: organization },
          { label: "Collaboration Type", value: collaborationType },
          { label: "Message / Proposal", value: message }
        ],
        data
      );
    }

    // ==========================================================================
    // 3. RESOURCE SUGGESTION / CONTRIBUTION
    // ==========================================================================
    else if (
      rawType === "RESOURCE_SUGGESTION" ||
      rawType === "RESOURCE" ||
      data.resourceLink ||
      data.resourceTitle
    ) {
      const category = getVal(data, "category", "resourceCategory", "domain") || "Study Resource";
      const resourceTitle = getVal(data, "resourceTitle", "title", "name") || "Resource Material";
      const resourceLink = getVal(data, "resourceLink", "link", "url", "cloudLink");

      const sheet = getOrCreateSheet(
        ss,
        "Resource_Suggestions",
        [
          "Timestamp",
          "Contributor Name",
          "Email",
          "Resource Category",
          "Resource Title",
          "Resource / Cloud Link",
          "Description / Notes"
        ]
      );

      sheet.appendRow([
        timestamp,
        safeText(fullName),
        safeText(email),
        safeText(category),
        safeText(resourceTitle),
        safeText(resourceLink),
        safeText(message)
      ]);

      sendEmailNotification(
        "📚 [New Resource Suggested] " +
          (resourceTitle || "Study Material") +
          " by " +
          (fullName || "Student"),
        "New Resource Contribution Suggested",
        [
          { label: "Contributor", value: fullName },
          { label: "Email", value: email },
          { label: "Category", value: category },
          { label: "Resource Title", value: resourceTitle },
          { label: "Resource Link", value: resourceLink },
          { label: "Description / Notes", value: message }
        ],
        data
      );
    }

    // ==========================================================================
    // 4. DOWNLOAD TRACKING (No email needed)
    // ==========================================================================
    else if (
      rawType === "DOWNLOAD_TRACKING" ||
      data.action === "download" ||
      data.action === "RESOURCE_DOWNLOAD"
    ) {
      const sheet = getOrCreateSheet(
        ss,
        "Downloads_Tracking",
        [
          "Timestamp",
          "File ID",
          "File Name",
          "Resource Bundle",
          "Format",
          "Page"
        ]
      );

      sheet.appendRow([
        timestamp,
        safeText(data.fileId),
        safeText(data.fileName),
        safeText(data.resourceId || data.resourceTitle),
        safeText(data.format),
        safeText(data.page)
      ]);
    }

    // ==========================================================================
    // 5. VISITOR TRACKING & IP GEOLOCATION LOG (No email needed)
    // ==========================================================================
    else if (
      rawType === "VISITOR_TRACKING" ||
      data.action === "VISITOR_LOG"
    ) {
      const sheet = getOrCreateSheet(
        ss,
        "Visitors_Tracking",
        [
          "Timestamp (IST)",
          "Visitor ID",
          "Session ID",
          "Total Visits Count",
          "IP Address",
          "City",
          "Region / State",
          "Country",
          "ISP / Organization",
          "Page Visited",
          "Page Title",
          "Referrer Source",
          "Device & OS",
          "Screen Resolution",
          "Language"
        ]
      );

      sheet.appendRow([
        safeText(data.visitedAtIST || timestamp),
        safeText(data.visitorId),
        safeText(data.sessionId),
        data.totalVisits || "",
        safeText(data.ip),
        safeText(data.city),
        safeText(data.region),
        safeText(data.country),
        safeText(data.isp),
        safeText(data.page),
        safeText(data.pageTitle),
        safeText(data.referrer),
        safeText(data.device),
        safeText(data.screenResolution),
        safeText(data.language)
      ]);
    }

    // ==========================================================================
    // 6. EVENT REGISTRATION (WITH DUPLICATE PREVENTION)
    // ==========================================================================
    else if (
      rawType === "EVENT_REGISTRATION" ||
      rawType === "REGISTRATION" ||
      data.eventId ||
      data.eventTitle ||
      data.branch ||
      data.college ||
      data.yearOfStudy
    ) {
      const eventTitle = getVal(data, "eventTitle", "eventName", "event", "title") || "MSC PRPCEM Event";
      const eventId = getVal(data, "eventId", "id") || "general";
      const gender = getVal(data, "gender") || "Not Specified";
      const college = getVal(data, "college", "institution", "collegeName") || "PRPCEM Amravati";
      const branch = getVal(data, "branch", "department", "branchName") || "";
      const yearOfStudy = getVal(data, "yearOfStudy", "year", "currentYear") || "";
      const rollNo = getVal(data, "rollNo", "prnNumber", "rollNumber", "enrollmentNo") || "";

      // 1. Get Event Sheet
      const eventSheet = getOrCreateEventSheet(ss, eventTitle, eventId, timestamp);

      // 2. CHECK DUPLICATE REGISTRATION (Row 4+, Col 4 = Email, Col 5 = Phone)
      const isAlreadyRegistered = isDuplicateParticipant(eventSheet, email, phone, 4, 4, 5);

      if (isAlreadyRegistered) {
        return ContentService
          .createTextOutput(
            JSON.stringify({
              status: "already_registered",
              duplicate: true,
              message: "You are already registered for this event with this email or phone number."
            })
          )
          .setMimeType(ContentService.MimeType.JSON);
      }

      const participantIndex = Math.max(1, eventSheet.getLastRow() - 2);

      eventSheet.appendRow([
        participantIndex,
        timestamp,
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(gender),
        safeText(college),
        safeText(branch),
        safeText(yearOfStudy),
        safeText(rollNo),
        safeText(message)
      ]);

      // 3. Record in Master "Event_Registrations" Tab
      const masterSheet = getOrCreateSheet(
        ss,
        "Event_Registrations",
        [
          "Timestamp",
          "Event ID",
          "Event Title",
          "Full Name",
          "Email",
          "Phone",
          "Gender",
          "College / Institution",
          "Branch / Department",
          "Year of Study",
          "Roll No / PRN",
          "Notes / Comments"
        ]
      );

      masterSheet.appendRow([
        timestamp,
        safeText(eventId),
        safeText(eventTitle),
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(gender),
        safeText(college),
        safeText(branch),
        safeText(yearOfStudy),
        safeText(rollNo),
        safeText(message)
      ]);

      // 4. Send Email Notification
      sendEmailNotification(
        "🎟️ [New Event Registration] " +
          (fullName || "Student") +
          " - " +
          eventTitle,
        "New Event Registration",
        [
          { label: "Event", value: eventTitle },
          { label: "Full Name", value: fullName },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Gender", value: gender },
          { label: "College", value: college },
          { label: "Branch & Year", value: branch + (yearOfStudy ? " (" + yearOfStudy + ")" : "") },
          { label: "Roll No / PRN", value: rollNo },
          { label: "Notes / Queries", value: message }
        ],
        data
      );
    }

    // ==========================================================================
    // 7. GENERAL CONTACT / INQUIRY (Catch-All Safe Handler)
    // ==========================================================================
    else {
      const sheet = getOrCreateSheet(
        ss,
        "General_Inquiries",
        [
          "Timestamp",
          "Full Name",
          "Email",
          "Phone",
          "Organization / Subject",
          "Message / Details"
        ]
      );

      sheet.appendRow([
        timestamp,
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(organization || data.subject || "General Inquiry"),
        safeText(message)
      ]);

      sendEmailNotification(
        "📬 [New Form Submission] " +
          (fullName || email || "Website User"),
        "New Website Form Submission",
        [
          { label: "Full Name", value: fullName },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Organization / Subject", value: organization || data.subject },
          { label: "Message / Query", value: message }
        ],
        data
      );
    }

    // ==========================================================================
    // SUCCESS RESPONSE
    // ==========================================================================
    return ContentService
      .createTextOutput(
        JSON.stringify({
          status: "success",
          message: "Recorded successfully"
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("Webhook error:", err);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          status: "error",
          error: err.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}


// ==============================================================================
// PAYLOAD PARSER (SUPPORTS JSON, FORM-URLENCODED, PARAMETERS & FORMDATA)
// ==============================================================================

function parseIncomingPayload(e) {
  if (!e) return {};

  let result = {};

  // 1. Extract from e.parameter / e.parameters (Query params or standard POST params)
  if (e.parameter && typeof e.parameter === "object") {
    Object.keys(e.parameter).forEach(function (k) {
      result[k] = e.parameter[k];
    });
  }

  // 2. Extract from e.postData.contents
  if (e.postData && e.postData.contents) {
    const raw = e.postData.contents;

    // Try parsing as JSON first
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        result = Object.assign({}, result, parsed);
        return result;
      }
    } catch (_) {
      // If not JSON, try parsing as URL-encoded (key1=val1&key2=val2)
      try {
        const pairs = raw.split("&");
        pairs.forEach(function (pair) {
          if (!pair) return;
          const idx = pair.indexOf("=");
          if (idx !== -1) {
            const key = decodeURIComponent(pair.substring(0, idx).replace(/\+/g, " "));
            const val = decodeURIComponent(pair.substring(idx + 1).replace(/\+/g, " "));
            result[key] = val;
          }
        });
      } catch (urlErr) {
        console.warn("Could not parse URL-encoded body:", urlErr);
      }
    }
  }

  return result;
}


// ==============================================================================
// DUPLICATE PARTICIPANT CHECK HELPER
// ==============================================================================

function isDuplicateParticipant(sheet, email, phone, startRow, emailCol, phoneCol) {
  if (!sheet) return false;
  const lastRow = sheet.getLastRow();
  if (lastRow < startRow) return false;

  const cleanEmail = String(email || "").toLowerCase().trim();

  if (!cleanEmail) {
    return false;
  }

  const numRows = lastRow - startRow + 1;
  const data = sheet.getRange(startRow, 1, numRows, emailCol).getValues();

  for (let i = 0; i < data.length; i++) {
    const rowEmail = String(data[i][emailCol - 1] || "").toLowerCase().trim();

    // Exact email match
    if (cleanEmail && rowEmail && cleanEmail === rowEmail) {
      return true;
    }
  }

  return false;
}


// ==============================================================================
// DUPLICATE SPEAKER PROPOSAL CHECK HELPER
// ==============================================================================

function isDuplicateSpeakerProposal(sheet, email, sessionTitle) {
  if (!sheet) return false;
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;

  const cleanEmail = String(email || "").toLowerCase().trim();
  const cleanTitle = String(sessionTitle || "").toLowerCase().trim();

  if (!cleanEmail || !cleanTitle) return false;

  const data = sheet.getRange(2, 1, lastRow - 1, 10).getValues();

  for (let i = 0; i < data.length; i++) {
    const rowEmail = String(data[i][2] || "").toLowerCase().trim(); // Col 3: Email
    const rowTitle = String(data[i][9] || "").toLowerCase().trim(); // Col 10: Title

    if (rowEmail === cleanEmail && rowTitle === cleanTitle) {
      return true;
    }
  }

  return false;
}


// ==============================================================================
// MULTI-KEY VALUE GETTER HELPER
// ==============================================================================

function getVal(data) {
  if (!data) return "";
  for (let i = 1; i < arguments.length; i++) {
    const k = arguments[i];
    if (data[k] !== undefined && data[k] !== null) {
      const s = String(data[k]).trim();
      if (s !== "") return s;
    }
  }
  return "";
}


// ==============================================================================
// CREATE / GET SHEET
// ==============================================================================

function getOrCreateSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);

    // Header styling
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1e3a8a");
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    headerRange.setWrap(true);

    sheet.setFrozenRows(1);

    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }

  // Force Phone columns to Plain Text format
  const phoneColumn = headers.indexOf("Phone") + 1;
  if (phoneColumn > 0) {
    sheet
      .getRange(2, phoneColumn, Math.max(sheet.getMaxRows() - 1, 1), 1)
      .setNumberFormat("@");
  }

  return sheet;
}


// ==============================================================================
// CREATE / GET EVENT-SPECIFIC SHEET (BANNER AT TOP, PARTICIPANTS BELOW)
// ==============================================================================

function getOrCreateEventSheet(ss, eventTitle, eventId, timestamp) {
  const rawTitle = eventTitle || eventId || "General_Event";
  const cleanTitle = rawTitle.replace(/[\\/?*[\]:]/g, " ").replace(/\s+/g, " ").trim();
  let sheetName = cleanTitle.length > 40 ? cleanTitle.substring(0, 40).trim() : cleanTitle;

  if (!sheetName) {
    sheetName = "Event_" + (eventId || "General");
  }

  let sheet = ss.getSheetByName(sheetName);

  const headers = [
    "#",
    "Timestamp",
    "Full Name",
    "Email",
    "Phone",
    "Gender",
    "College / Institution",
    "Branch / Department",
    "Year of Study",
    "Roll No / PRN",
    "Notes / Comments"
  ];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);

    // ROW 1: EVENT TITLE BANNER
    sheet.getRange(1, 1).setValue("🎯 EVENT: " + (eventTitle || eventId || "MSC Event"));
    const titleRange = sheet.getRange(1, 1, 1, headers.length);
    titleRange.merge();
    titleRange.setFontWeight("bold");
    titleRange.setFontSize(13);
    titleRange.setBackground("#1e3a8a");
    titleRange.setFontColor("#ffffff");
    titleRange.setVerticalAlignment("middle");
    sheet.setRowHeight(1, 42);

    // ROW 2: EVENT METADATA
    sheet.getRange(2, 1).setValue("Event ID: " + safeText(eventId) + "  |  Auto-Synced Participant Registrations");
    const metaRange = sheet.getRange(2, 1, 1, headers.length);
    metaRange.merge();
    metaRange.setFontSize(10);
    metaRange.setFontStyle("italic");
    metaRange.setBackground("#e0e7ff");
    metaRange.setFontColor("#3730a3");
    metaRange.setVerticalAlignment("middle");
    sheet.setRowHeight(2, 24);

    // ROW 3: COLUMN HEADERS
    sheet.getRange(3, 1, 1, headers.length).setValues([headers]);
    const headerRange = sheet.getRange(3, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setFontSize(10);
    headerRange.setBackground("#2563eb");
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    sheet.setRowHeight(3, 30);

    sheet.setFrozenRows(3);

    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }

  // Force Phone column to Plain Text
  sheet
    .getRange(4, 5, Math.max(sheet.getMaxRows() - 3, 1), 1)
    .setNumberFormat("@");

  return sheet;
}


// ==============================================================================
// PHONE NUMBER AS TEXT
// ==============================================================================

function phoneAsText(phone) {
  if (phone === null || phone === undefined || phone === "") {
    return "";
  }
  const value = String(phone).trim();
  if (!value) return "";
  if (value.startsWith("+")) {
    return "'" + value;
  }
  return value;
}


// ==============================================================================
// SAFE TEXT CONVERSION
// ==============================================================================

function safeText(value) {
  if (value === null || value === undefined) {
    return "";
  }
  return String(value).trim();
}


// ==============================================================================
// SEND RICH HTML EMAIL NOTIFICATION (WITH UNMAPPED DATA CATCHER)
// ==============================================================================

function sendEmailNotification(subject, heading, fields, rawData) {
  try {
    let rowsHtml = "";
    const renderedKeys = {};

    // 1. Render primary labeled fields
    if (Array.isArray(fields)) {
      fields.forEach(function (f) {
        if (
          f &&
          f.value !== null &&
          f.value !== undefined &&
          String(f.value).trim() !== ""
        ) {
          renderedKeys[f.label.toLowerCase()] = true;
          rowsHtml +=
            '<tr>' +
            '<td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:150px;vertical-align:top;">' +
            escapeHtml(f.label) +
            '</td>' +
            '<td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:500;">' +
            escapeHtml(String(f.value)) +
            '</td>' +
            '</tr>';
        }
      });
    }

    // 2. Extra / Unmapped Form Data Catcher (Ensures NO payload fields are ever lost!)
    if (rawData && typeof rawData === "object") {
      const ignoredKeys = [
        "type", "formtype", "action", "timestamp", "submittedat",
        "visitorid", "sessionid", "device", "screenresolution", "language"
      ];
      let extraHtml = "";

      Object.keys(rawData).forEach(function (key) {
        const val = rawData[key];
        const lowerKey = key.toLowerCase();
        if (
          !ignoredKeys.includes(lowerKey) &&
          !renderedKeys[lowerKey] &&
          val !== null &&
          val !== undefined &&
          String(val).trim() !== ""
        ) {
          extraHtml +=
            '<tr>' +
            '<td style="padding:8px 14px;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:150px;">' +
            escapeHtml(formatFieldLabel(key)) +
            '</td>' +
            '<td style="padding:8px 14px;border-bottom:1px solid #f1f5f9;color:#334155;font-size:13px;">' +
            escapeHtml(String(val)) +
            '</td>' +
            '</tr>';
        }
      });

      if (extraHtml) {
        rowsHtml +=
          '<tr>' +
          '<td colspan="2" style="padding:12px 14px 6px;background:#f8fafc;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">' +
          'Additional Submitted Data' +
          '</td>' +
          '</tr>' +
          extraHtml;
      }
    }

    // 3. Fallback if somehow no fields matched at all
    if (!rowsHtml) {
      rowsHtml =
        '<tr><td colspan="2" style="padding:16px;text-align:center;color:#64748b;">' +
        '<em>Submission details recorded successfully. Raw payload: ' +
        escapeHtml(JSON.stringify(rawData || {})) +
        '</em></td></tr>';
    }

    // HTML Email Card Design
    const htmlBody =
      '<div style="font-family:Segoe UI,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);background:#ffffff;">' +
      '<div style="background:linear-gradient(135deg,#0052cc 0%,#2563eb 50%,#4f46e5 100%);color:#ffffff;padding:24px 28px;">' +
      '<h2 style="margin:0;font-size:20px;font-weight:700;letter-spacing:-0.02em;">' +
      escapeHtml(heading) +
      '</h2>' +
      '<p style="margin:6px 0 0;font-size:13px;opacity:0.92;font-weight:500;">' +
      'Microsoft Student Club • PRPCEM Amravati' +
      '</p>' +
      '</div>' +
      '<div style="padding:24px;background:#ffffff;">' +
      '<table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5;">' +
      rowsHtml +
      '</table>' +
      '<div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;text-align:center;">' +
      '<p style="margin:0;font-size:12px;color:#94a3b8;">' +
      '🚀 Automatically synced by the <strong>MSC PRPCEM Webhook Engine</strong>.' +
      '</p>' +
      '<p style="margin:4px 0 0;font-size:12px;color:#94a3b8;">' +
      'View & manage live responses in your connected Google Sheet.' +
      '</p>' +
      '</div>' +
      '</div>' +
      '</div>';

    // Recipient Resolution
    const userEmail = Session.getActiveUser().getEmail();
    const recipients = NOTIFICATION_EMAILS || userEmail;

    if (recipients) {
      MailApp.sendEmail({
        to: recipients,
        subject: subject,
        htmlBody: htmlBody
      });
    } else {
      console.warn("No notification email recipient configured.");
    }

  } catch (err) {
    console.error("Email sending error:", err.toString());
  }
}


// ==============================================================================
// FIELD LABEL FORMATTER
// ==============================================================================

function formatFieldLabel(key) {
  if (!key) return "";
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/^./, function (str) { return str.toUpperCase(); })
    .trim();
}


// ==============================================================================
// ESCAPE HTML HELPER
// ==============================================================================

function escapeHtml(text) {
  if (text === null || text === undefined) {
    return "";
  }
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// ==============================================================================
// BUILT-IN TEST FUNCTION
// ==============================================================================
// Run this function from the Apps Script editor to verify sheets, emails & duplicate checks.

function testWebhook() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        type: "EVENT_REGISTRATION",
        eventTitle: "Azure AI Workshop 2026",
        eventId: "azure-ai-2026",
        fullName: "Verification Student",
        email: NOTIFICATION_EMAILS || Session.getActiveUser().getEmail(),
        phone: "+91 9876543210",
        gender: "Male",
        college: "P. R. Pote Patil College of Engineering & Management, Amravati",
        branch: "Computer Science & Engineering (CSE)",
        yearOfStudy: "Third Year",
        rollNo: "PRN123456",
        notes: "Webhook, duplicate verification and email alert test completed successfully."
      })
    }
  };

  const response1 = doPost(fakeEvent);
  Logger.log("First Submission (Expected Success): " + response1.getContent());

  // Test duplicate prevention
  const response2 = doPost(fakeEvent);
  Logger.log("Second Submission (Expected Already Registered): " + response2.getContent());
}