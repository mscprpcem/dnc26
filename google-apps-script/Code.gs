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
const NOTIFICATION_EMAILS = "dotnetconfamt@prpotepatilengg.ac.in, mlsc@prpotepatilengg.ac.in";

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
        event: ".NET Conf 2026 Amravati",
        message: "MSC PRPCEM & .NET Conf 2026 Amravati Webhook backend is active and ready to receive submissions.",
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
      rawType === "CFP_SUBMISSION" ||
      rawType === "CFP" ||
      data.sessionTitle ||
      data.talkTitle ||
      data.sessionFormat ||
      data.topic ||
      data.previousSpeaking
    ) {
      const topic = getVal(data, "topic", "topicDomain", "domain", "subject", "track");
      const sessionTitle = getVal(data, "sessionTitle", "title", "proposedTitle", "session", "talkTitle");
      const sessionFormat = getVal(data, "sessionFormat", "format", "sessionType") || "Session / Workshop";
      const audienceLevel = getVal(data, "audienceLevel", "level", "targetAudience") || "All Levels";
      const location = getVal(data, "location", "city", "address", "country");
      const linkedin = getVal(data, "linkedin", "linkedinUrl", "socialProfile");
      const previousSpeaking = getVal(data, "previousSpeaking", "experience", "pastSessions", "pastTalks");
      const additionalNotes = getVal(data, "additionalNotes", "notes", "message", "abstract");

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
      data.yearOfStudy ||
      data.role ||
      data.interests
    ) {
      const eventTitle = getVal(data, "eventTitle", "eventName", "event", "title") || ".NET Conf 2026 Amravati";
      const eventId = getVal(data, "eventId", "id") || "dotnetconf-2026-amravati";
      const gender = getVal(data, "gender") || "";
      const college = getVal(data, "college", "institution", "collegeName", "organization", "company", "workplace") || "PRPCEM Campus, Amravati";
      const branch = getVal(data, "branch", "department", "branchName") || "";
      
      // Multi-alias role extraction with friendly labels
      const roleMap = {
        "student_prpcem": "Student @ PRPCEM (Host Campus)",
        "student_other": "Student (Other College / University)",
        "developer": "Software Engineer / Full-Stack Developer",
        "ai_engineer": "AI Engineer / ML & LLM Practitioner",
        "devops_cloud": "Cloud Architect / DevOps / SRE",
        "faculty": "Faculty / Educator / Academician",
        "other": "Tech Enthusiast / Open Source Contributor"
      };

      const rawRole = getVal(data, "role", "roleLabel", "designation", "jobTitle", "yearOfStudy", "year");
      const role = data.roleLabel || roleMap[rawRole] || rawRole || "Attendee / Delegate";

      // Formatted topics of interest
      let interests = "";
      if (Array.isArray(data.interests)) {
        interests = data.interests.join(", ");
      } else {
        interests = getVal(data, "interests", "topics", "message", "notes");
      }

      const yearOfStudy = getVal(data, "yearOfStudy", "year", "currentYear") || role;
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

      // Append row to event sheet (preserves alignment with existing 11 columns)
      eventSheet.appendRow([
        participantIndex,
        timestamp,
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(gender || role),
        safeText(college),
        safeText(branch),
        safeText(role || yearOfStudy),
        safeText(rollNo),
        safeText(interests || message)
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
          "Gender / Role",
          "College / Institution",
          "Branch / Department",
          "Year of Study / Designation",
          "Roll No / PRN",
          "Notes / Interests"
        ]
      );

      masterSheet.appendRow([
        timestamp,
        safeText(eventId),
        safeText(eventTitle),
        safeText(fullName),
        safeText(email),
        phoneAsText(phone),
        safeText(gender || role),
        safeText(college),
        safeText(branch),
        safeText(role || yearOfStudy),
        safeText(rollNo),
        safeText(interests || message)
      ]);

      // 4. Send Rich Email Notification
      const emailFields = [
        { label: "Event", value: eventTitle },
        { label: "Full Name", value: fullName },
        { label: "Email", value: email },
        { label: "Phone / WhatsApp", value: phone },
        { label: "Role / Background", value: role },
        { label: "College / Organization", value: college },
        { label: "Topics of Interest", value: interests }
      ];

      if (branch) {
        emailFields.push({ label: "Branch", value: branch });
      }
      if (rollNo) {
        emailFields.push({ label: "Roll No / PRN", value: rollNo });
      }
      if (gender && gender !== "Not Specified") {
        emailFields.push({ label: "Gender", value: gender });
      }
      if (message && message !== interests) {
        emailFields.push({ label: "Notes / Message", value: message });
      }

      sendEmailNotification(
        "🎟️ [New Delegate Interest] " +
          (fullName || "Attendee") +
          " (" + (role || "Delegate") + ") - " +
          eventTitle,
        "New Delegate Interest Registration",
        emailFields,
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
  const cleanPhone = String(phone || "").replace(/\D/g, "");

  if (!cleanEmail && !cleanPhone) {
    return false;
  }

  const numRows = lastRow - startRow + 1;
  const maxCol = Math.max(emailCol, phoneCol || 0);
  const data = sheet.getRange(startRow, 1, numRows, maxCol).getValues();

  for (let i = 0; i < data.length; i++) {
    // 1. Exact email match
    const rowEmail = String(data[i][emailCol - 1] || "").toLowerCase().trim();
    if (cleanEmail && rowEmail && cleanEmail === rowEmail) {
      return true;
    }

    // 2. Normalized 10-digit phone match (handles country codes +91 / 0 gracefully)
    if (phoneCol && cleanPhone && cleanPhone.length >= 10) {
      const rowPhone = String(data[i][phoneCol - 1] || "").replace(/\D/g, "");
      if (rowPhone && rowPhone.length >= 10) {
        if (rowPhone.slice(-10) === cleanPhone.slice(-10)) {
          return true;
        }
      }
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
    var rowsHtml = "";
    var renderedKeys = {};

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
            '<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-weight:700;color:#64748b;font-size:13px;width:160px;vertical-align:top;">' +
            escapeHtml(f.label) +
            '</td>' +
            '<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:600;font-size:13px;vertical-align:top;">' +
            escapeHtml(String(f.value)) +
            '</td>' +
            '</tr>';
        }
      });
    }

    // 2. Extra / Unmapped Form Data Catcher (Ensures NO payload fields are ever lost!)
    if (rawData && typeof rawData === "object") {
      var ignoredKeys = [
        "type", "formtype", "action", "timestamp", "submittedat",
        "visitorid", "sessionid", "device", "screenresolution", "language"
      ];
      var extraHtml = "";

      Object.keys(rawData).forEach(function (key) {
        var val = rawData[key];
        var lowerKey = key.toLowerCase();
        if (
          !ignoredKeys.includes(lowerKey) &&
          !renderedKeys[lowerKey] &&
          val !== null &&
          val !== undefined &&
          String(val).trim() !== ""
        ) {
          extraHtml +=
            '<tr>' +
            '<td style="padding:8px 14px;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:160px;">' +
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

    // Official MSC PRPCEM Standard HTML Email Template
    var htmlBody =
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
      '<html xmlns="http://www.w3.org/1999/xhtml" lang="en">' +
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />' +
      '<title>' + escapeHtml(heading) + '</title>' +
      '</head>' +
      '<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">' +
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f1f5f9;padding:24px 8px;width:100%;table-layout:fixed;box-sizing:border-box;">' +
      '<tr><td align="center" style="padding:0;">' +
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:20px;border:1px solid #e2e8f0;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);table-layout:fixed;box-sizing:border-box;">' +
      
      // Top Navigation Bar (Official Logo + Slogan)
      '<tr><td style="padding:22px 28px 16px 28px;background-color:#ffffff;border-top-left-radius:20px;border-top-right-radius:20px;">' +
      '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
      '<tr>' +
      '<td align="left" valign="middle">' +
      '<a href="https://www.mscprpcem.tech" target="_blank" style="text-decoration:none;display:inline-block;vertical-align:middle;">' +
      '<table border="0" cellpadding="0" cellspacing="0">' +
      '<tr>' +
      '<td valign="middle" style="padding-right:12px;line-height:0;">' +
      '<img src="https://mscprpcem.blob.core.windows.net/email-template/mscprpcemlogo.png" alt="MSC PRPCEM Logo" width="44" height="44" style="display:block;width:44px;height:44px;border:0;" />' +
      '</td>' +
      '<td valign="middle" style="line-height:1;">' +
      '<span style="font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;font-size:20px;font-weight:900;color:#0f172a;letter-spacing:-0.3px;">MSC PRPCEM</span>' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '</a>' +
      '</td>' +
      '<td align="right" valign="middle">' +
      '<a href="https://www.mscprpcem.tech" target="_blank" style="text-decoration:none;display:inline-block;">' +
      '<div style="font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;font-size:16px;font-weight:800;color:#0f172a;letter-spacing:-0.2px;line-height:1.2;">Be a <span style="color:#2563eb;">Force for Good</span>.</div>' +
      '<div style="height:2.5px;width:64px;background:linear-gradient(90deg,#2563eb,#6366f1);margin:3px 0 0 auto;border-radius:2px;"></div>' +
      '</a>' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '</td></tr>' +

      // Hero Banner
      '<tr><td style="padding:0;line-height:0;background-color:#ffffff;">' +
      '<a href="https://www.mscprpcem.tech" target="_blank" style="display:block;text-decoration:none;">' +
      '<img src="https://mscprpcem.blob.core.windows.net/email-template/upper%20banner.png" alt="Microsoft Student Club PRPCEM" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;" />' +
      '</a>' +
      '</td></tr>' +

      // Body Area
      '<tr><td style="padding:28px 32px 24px 32px;background-color:#ffffff;color:#334155;font-size:15px;line-height:1.65;box-sizing:border-box;word-break:break-word;">' +
      '<p style="margin:0 0 18px 0;font-size:19px;font-weight:700;color:#0f172a;line-height:1.3;">' +
      'Hi <span style="color:#2563eb;font-weight:800;">Team .NET Conf &amp; MSC PRPCEM</span>,' +
      '</p>' +
      '<p style="font-size:15px;color:#334155;margin:0 0 16px 0;line-height:1.6;">' +
      'A new response has been received for <strong>' + escapeHtml(heading) + '</strong> via .NET Conf 2026 Amravati.' +
      '</p>' +

      // Submission Details Table
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:20px 0;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;table-layout:fixed;box-sizing:border-box;">' +
      '<tr><td colspan="2" style="padding:10px 14px;background-color:#f1f5f9;border-bottom:1px solid #e2e8f0;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.5px;">' +
      'Submission Details' +
      '</td></tr>' +
      rowsHtml +
      '</table>' +

      // Action Button
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:24px 0;table-layout:fixed;">' +
      '<tr><td align="center">' +
      '<a href="https://www.mscprpcem.tech" target="_blank" style="display:inline-block;background-color:#2563eb;color:#ffffff!important;font-weight:700;font-size:14px;text-decoration:none;padding:13px 32px;border-radius:10px;box-shadow:0 4px 14px rgba(37,99,235,0.3);text-align:center;">' +
      'Access Management Portal &rarr;' +
      '</a>' +
      '</td></tr>' +
      '</table>' +

      // Sign-off
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:32px;border-top:1px solid #f1f5f9;padding-top:22px;table-layout:fixed;">' +
      '<tr>' +
      '<td valign="bottom" align="left" style="text-align:left;vertical-align:bottom;width:62%;">' +
      '<div style="font-size:13px;color:#64748b;font-weight:500;margin-bottom:3px;">Best Regards,</div>' +
      '<div style="font-size:16px;color:#0f172a;font-weight:800;letter-spacing:-0.2px;margin-bottom:6px;">Team MSC PRPCEM</div>' +
      '<div style="height:3px;width:42px;background-color:#2563eb;border-radius:2px;margin-bottom:10px;"></div>' +
      '<div style="font-size:13px;font-weight:700;color:#1e293b;line-height:1.3;">Microsoft Student Club PRPCEM</div>' +
      '<div style="font-size:11px;color:#64748b;margin-top:2px;line-height:1.4;">P. R. Pote (Patil) College of Engineering &amp; Management, Amravati</div>' +
      '</td>' +
      '<td valign="bottom" align="right" style="text-align:right;vertical-align:bottom;width:38%;">' +
      '<img src="https://mscprpcem.blob.core.windows.net/email-template/lower%20banner.png" alt="Be a Force for Good." width="155" style="display:inline-block;max-width:155px;width:100%;height:auto;border:0;" />' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '</td></tr>' +

      // Deep Navy Footer
      '<tr><td style="padding:16px 24px;background-color:#081630;border-bottom-left-radius:20px;border-bottom-right-radius:20px;box-sizing:border-box;">' +
      '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
      '<tr>' +
      '<td align="left" valign="middle" style="line-height:0;">' +
      '<table border="0" cellpadding="0" cellspacing="0">' +
      '<tr>' +
      '<td style="padding-right:10px;line-height:0;"><a href="https://www.instagram.com/mscprpcem/" target="_blank" style="text-decoration:none;"><img src="https://www.mscprpcem.tech/assets/email/icon_instagram.png" width="30" height="30" alt="Instagram" style="display:block;border:0;" /></a></td>' +
      '<td style="padding-right:10px;line-height:0;"><a href="https://www.linkedin.com/company/mscprpcem/" target="_blank" style="text-decoration:none;"><img src="https://www.mscprpcem.tech/assets/email/icon_linkedin.png" width="30" height="30" alt="LinkedIn" style="display:block;border:0;" /></a></td>' +
      '<td style="padding-right:10px;line-height:0;"><a href="https://youtube.com/@mscprpcem" target="_blank" style="text-decoration:none;"><img src="https://www.mscprpcem.tech/assets/email/icon_youtube.png" width="30" height="30" alt="YouTube" style="display:block;border:0;" /></a></td>' +
      '<td style="padding-right:14px;line-height:0;"><a href="https://www.mscprpcem.tech" target="_blank" style="text-decoration:none;"><img src="https://www.mscprpcem.tech/assets/email/icon_website.png" width="30" height="30" alt="Website" style="display:block;border:0;" /></a></td>' +
      '<td style="border-left:1px solid rgba(255,255,255,0.2);height:24px;width:1px;"></td>' +
      '</tr>' +
      '</table>' +
      '</td>' +
      '<td align="right" valign="middle" style="color:#94a3b8;font-size:11px;line-height:1.35;text-align:right;">' +
      '<div style="color:#ffffff;font-weight:700;font-size:11px;">Microsoft Student Club PRPCEM</div>' +
      '<div style="color:#94a3b8;font-size:10px;margin-top:1px;">P. R. Pote (Patil) College of Engineering &amp; Management</div>' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '</td></tr>' +
      '</table>' +
      '</td></tr></table>' +
      '</body></html>';

    // Recipient Resolution
    var userEmail = Session.getActiveUser().getEmail();
    var recipients = NOTIFICATION_EMAILS || userEmail;

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
  const primaryEmail = NOTIFICATION_EMAILS ? NOTIFICATION_EMAILS.split(",")[0].trim() : Session.getActiveUser().getEmail();

  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        type: "EVENT_REGISTRATION",
        eventTitle: ".NET Conf 2026 Amravati",
        eventId: "dotnetconf-2026-amravati",
        fullName: "Test Delegate",
        email: primaryEmail,
        phone: "+91 9876543210",
        role: "developer",
        roleLabel: "Software Engineer / Full-Stack Developer",
        college: "PRPCEM Campus, Amravati",
        interests: "Generative AI & Agents, Modern .NET 11 & C#",
        notes: "Webhook verification test completed successfully."
      })
    }
  };

  const response1 = doPost(fakeEvent);
  Logger.log("First Submission (Expected Success): " + response1.getContent());

  // Test duplicate prevention
  const response2 = doPost(fakeEvent);
  Logger.log("Second Submission (Expected Already Registered): " + response2.getContent());
}