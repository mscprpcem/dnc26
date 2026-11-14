# .NET Conf 2026 Amravati — Comprehensive Website Audit & Readiness Report

**Generated:** November 14, 2026  
**Repository:** [mscprpcem/dnc26](https://github.com/mscprpcem/dnc26)  
**Host Organization:** Microsoft Student Club PRPCEM & Global AI Amravati  
**Primary Domain:** `https://dnc.mscprpcem.tech`  

---

## Executive Summary

The **.NET Conf 2026 Amravati** web portal is built on a high-energy **Neo-Brutalist Light Theme** with crisp 2px–3px solid black borders, Warli folk-art cultural motifs, responsive typography, and dedicated sub-pages for Sponsorship, Attendee Badge Generation, Sessionize Schedule, and Community Policies.

The codebase is clean, builds in **<500ms** via Vite, and has zero broken local image paths or syntax errors. However, this deep audit has identified **several key inconsistencies, outdated dates, and missing configurations** that require attention before public promotion and ticket drops.

---

## 1. Critical Discrepancies & Things Missing

### 1.1 Outdated Event Date in Sponsorship FAQ (High Priority)
* **File:** `src/components/Sponsorship/SponsorshipPage.jsx` (Line ~510)
* **Issue:** The FAQ states:
  > *"To guarantee inclusion on printed conference collaterals... sponsorship agreements should be confirmed at least 4 weeks prior to the event date (**November 28, 2026**)."*
* **Impact:** The confirmed summit date across the entire website (Hero countdown, schema markup, Schedule, Attendee Badge, and FAQ) is **Saturday & Sunday, January 2–3, 2027**. Stating "November 28, 2026" confuses prospective enterprise sponsors about the actual event deadline.
* **Recommended Fix:** Update the date to **December 4, 2026** (4 weeks prior to January 2–3, 2027) or state **"4 weeks prior to the conference dates (January 2–3, 2027)"**.

---

### 1.2 Delegate Count Discrepancy (500+ vs 600+)
* **Files:**
  - `src/components/DncBrutal/DncTicker.jsx` (Line ~12): `500+ Engineers at PRPCEM Amravati`
  - `src/components/DncBrutal/DncExpect.jsx` (Line ~15): `Meet over 500+ passionate engineers...`
* **Issue:** Everywhere else across the platform (Hero lede, `src/data/event.js`, `SponsorshipPage.jsx`, and JSON-LD structured data), the attendance figure is stated as **600+ Delegates / Tech Developers**.
* **Recommended Fix:** Change `500+` to `600+` in both components for brand consistency.

---

### 1.3 Leftover Reference Copy in Experience Zones
* **File:** `src/components/DncBrutal/DncExperienceZones.jsx` (Line ~51)
* **Issue:** Under the `STACK TRACE` Knowledge Zone card:
  > `description: 'Packt team booth for knowledge zone.'`
* **Impact:** Packt is not in the confirmed sponsor roster (the sponsors are Microsoft, PRPCEM, JetBrains, Azure, .xyz, Sessionize, Databricks UG, OpenSearch UG, and IBM UG). This is leftover draft copy from an earlier template.
* **Recommended Fix:** Update description to:
  > `description: 'Interactive developer book and knowledge zone featuring modern .NET, cloud architecture, and AI engineering resources.'`

---

### 1.4 Missing Routes in `public/sitemap.xml`
* **File:** `public/sitemap.xml`
* **Issue:** Currently, `sitemap.xml` only lists 4 URLs:
  - `https://dnc.mscprpcem.tech/`
  - `https://dnc.mscprpcem.tech/schedule-page`
  - `https://dnc.mscprpcem.tech/code-of-conduct`
  - `https://dnc.mscprpcem.tech/sponsorship`
* **Missing from Sitemap:**
  - `https://dnc.mscprpcem.tech/badge` (Attendee Badge Studio — primary viral sharing feature)
  - `https://dnc.mscprpcem.tech/privacy-policy` (Mandatory compliance page)
  - `https://dnc.mscprpcem.tech/schedule` (Standard canonical route for schedule)
* **Recommended Fix:** Add the missing three URLs to `public/sitemap.xml` with appropriate priority tags (`0.8` for `/badge` and `/schedule`, `0.5` for `/privacy-policy`).

---

### 1.5 Webhook Production Fallback in `webhookApi.js`
* **File:** `src/utils/webhookApi.js` (Line ~4–6)
* **Issue:**
  ```javascript
  export const DEFAULT_WEBHOOK_URL = "";
  ```
  The webhook URL is only read from `.env` (`VITE_WEBHOOK_URL`). If the application is built on CI/CD (GitHub Actions, Azure Static Web Apps, or Netlify) without the environment variable explicitly defined in the pipeline settings, `getWebhookUrl()` returns `""`. In that case, submissions are only saved to client-side `localStorage` and never reach the Google Sheet.
* **Recommended Fix:** Hardcode the fallback Google Apps Script URL directly into `DEFAULT_WEBHOOK_URL` as a safeguard:
  `"https://script.google.com/macros/s/AKfycbzwznl8Md1aTVfT1rZsRx2YnfNrcBC7TXAH6V_arhmOqKNiyXRCJEZphk5m6Xor0eXPAg/exec"`.

---

### 1.6 Webmanifest PWA Icon Resolution
* **File:** `public/site.webmanifest` (Line ~9–22)
* **Issue:** The manifest uses `/favicon.png` (a 32×32 / small image) for both the `192x192` and `512x512` icons:
  ```json
  { "src": "/favicon.png", "sizes": "192x192" },
  { "src": "/favicon.png", "sizes": "512x512" }
  ```
* **Recommended Fix:** Change the 512×512 icon source to `/mascot/dotnet-bot-emoticon-512.png`, which already exists in your `public/` directory and is high-resolution.

---

## 2. Route & Architecture Audit

| Route / View | Status | Title Tag | Back Navigation | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `/` (Landing Page) | ✅ Operational | `.NET Conf 2026 Amravati` | Floating Scroll-to-Top | 17 sections, Warli animations, countdown active |
| `/sponsorship` | ✅ Operational | `Sponsorship Tiers & Benefits \| .NET Conf 2026 Amravati` | `Back to .NET Conf 2026` button | ₹2L/1L/50k/25k tiers, 15 deliverables, custom select |
| `/schedule` / `/schedule-page` | ✅ Operational | `Conference Schedule \| .NET Conf 2026 Amravati` | `BACK TO SUMMIT` button | Sessionize iframe integration with tabs |
| `/badge` / `/attendee-badge` | ✅ Operational | `Attendee Badge Studio \| .NET Conf 2026 Amravati` | `Back to .NET Conf 2026` button | HTML5 1080×1080 canvas download & sharing |
| `/code-of-conduct` | ✅ Operational | `Code of Conduct \| .NET Conf 2026 Amravati` | `Back to .NET Conf 2026` button | Print button, anchor side-nav, reporting channels |
| `/privacy-policy` | ✅ Operational | `Privacy Policy \| .NET Conf 2026 Amravati` | `Back to .NET Conf 2026` button | Print button, DPDP compliance references |
| `/*` (404 Fallback) | ✅ Operational | `Page Not Found \| .NET Conf 2026 Amravati` | `BACK TO SUMMIT HOME` button | Custom brutalist illustration & redirect |

---

## 3. Prioritized Action Plan

| Priority | Task | File(s) | Status |
| :---: | :--- | :--- | :---: |
| **P1** | Fix outdated date in Sponsorship FAQ (`November 28, 2026` ➔ `December 4, 2026`) | `src/components/Sponsorship/SponsorshipPage.jsx` | ✅ Resolved |
| **P1** | Add fallback URL to `DEFAULT_WEBHOOK_URL` in `webhookApi.js` | `src/utils/webhookApi.js` | ✅ Resolved |
| **P2** | Fix Knowledge Zone leftover copy (`Packt team booth`) | `src/components/DncBrutal/DncExperienceZones.jsx` | ✅ Resolved |
| **P2** | Align delegate stats (`500+` ➔ `600+`) in Ticker and Expect sections | `DncTicker.jsx`, `DncExpect.jsx` | ✅ Resolved |
| **P2** | Add `/badge`, `/schedule`, and `/privacy-policy` to `sitemap.xml` | `public/sitemap.xml` | ✅ Resolved |
| **P3** | Update 512×512 PWA icon in `site.webmanifest` | `public/site.webmanifest` | ✅ Resolved |

