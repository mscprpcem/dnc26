# .NET Conf 2026 Amravati — Design System Documentation (`design.md`)

> **Event**: .NET Conf 2026 Amravati  
> **Dates**: January 2–3, 2027 (Saturday & Sunday)  
> **Host**: Microsoft Student Club · PRPCEM (P. R. Pote Patil College of Engineering and Management, Amravati)  
> **Primary Contact**: 9359982959  
> **Official Web**: `dnc.mscprpcem.tech`  

---

## 1. Overview & Visual Identity

The design system for **.NET Conf 2026 Amravati** (`DncBrutal`) is a modern **Neo-Brutalist Light Theme** crafted specifically for a premier developer conference. It unites the official Microsoft .NET ecosystem visual identity with bold developer aesthetic patterns:

1. **Light Cosmic Surface**: Crisp white (`#FFFFFF`) and delicate violet/lavender tint washes (`#F8F9FE`, `#F6F3FC`, `#EDE5FF`) with a microscopic paper grain overlay (`.grain-overlay`).
2. **Hard-Edge Neo-Brutalist Shadows**: High-contrast, zero-blur offset drop shadows (e.g. `4px 4px 0px #512BD4`, `6px 6px 0px #120838`, or `shadow-[6px_6px_0px_#000]`) rather than diffuse blur shadows.
3. **Structured Ink Lines**: Distinctive 2px–3px borders (`border-[2.5px] border-black` or `border: 2px solid rgba(81, 43, 212, 0.2)`).
4. **Micro-Interactions**: Tactile button presses that translate `-2px, -2px` on hover and pop outward with expanding color-shifting shadows.
5. **Cultural Fusion**: Traditional Indian Warli folk art geometry integrated alongside futuristic robots, rockets, and technical code stamps.

---

## 2. Design Tokens & Color Palette

### 2.1 Core Brand Colors

| Token | Hex Value | Role / Usage |
|---|---|---|
| `--purple` | `#512BD4` | **Primary Brand Color** (.NET Purple). Used for headers, primary buttons, borders, key badges, and signature shadows. |
| `--purple-light` | `#7B5CE5` | Gradient midtones, secondary capsule fills. |
| `--magenta` | `#D600AA` | **Action & Accent Fuchsia**. Used for button shadows, hover states, and gradient highlights. |
| `--magenta-bright` | `#F21CC6` | High-visibility laser accents and glow points. |
| `--blue` | `#0B6CFF` | **Vivid Tech Blue** (Azure / Cloud accent). Used in gradient titles, speed capsules, and links. |
| `--blue-robot` | `#3D8BFF` | 3D Robot mascot accents. |
| `--teal` | `#28C2D1` | **Cyan / Copilot Teal**. Status indicators, live badges, and technical highlights. |
| `--coral` | `#F65163` | Alert badges, countdown highlights, confetti points. |
| `--gold` | `#F7B548` | **Warm Gold / Saffron Accent**. Secondary CTA buttons (`btn--gold`), VIP badges, and special announcements. |
| `--gold-glow` | `#E5A030` | Hover glow for gold surfaces. |

### 2.2 Neutral & Typography Colors

| Token | Hex Value | Role / Usage |
|---|---|---|
| `--text-primary` | `#120838` | WCAG AAA deep dark violet. Used for all primary headlines, titles, and card text. |
| `--text-secondary` | `#332B4A` | Secondary text, lede paragraphs, descriptions. |
| `--text-muted` | `#5C5577` | Captions, metadata, venue details, and footer notes. |
| `--text-white` | `#FFFFFF` | Text on dark buttons, badges, and gradient banners. |
| `--ink` | `#120838` | Brutalist border/drawing ink color. |

### 2.3 Surface & Canvas Tokens

| Token | Value | Description |
|---|---|---|
| `--bg-space` | `#F8F9FE` | Page background base. |
| `--paper` | `#FFFFFF` | Pure white card surface. |
| `--paper-2` | `#F6F3FC` | Soft lavender wash for alternating sections (`band--paper2`). |
| `--paper-3` | `#EEE7FB` | Pill backgrounds, input control wrappers. |
| `--paper-sky` | `#F0F6FF` | Sky blue tinted section background. |
| `--paper-blush` | `#FFF0F6` | Warm pink tinted section background. |
| `--border-light` | `rgba(81, 43, 212, 0.16)` | Subtle purple card border. |
| `--border-dark` | `#512BD4` | Strong purple accent border. |

### 2.4 Official 5-Color Ecosystem Accent Bar

The signature 5-color bar appears across headers and badges to represent the 5 pillars of the Microsoft developer ecosystem:
1. `#512BD4` — Modern .NET 11
2. `#0B6CFF` — Microsoft Azure Cloud
3. `#28C2D1` — GitHub Copilot & AI Agents
4. `#D600AA` — Visual Studio & Developer Tools
5. `#F7B548` — Open Source Community & Students

### 2.5 Gradients

```css
/* Official .NET Conf 2026 Title Gradient */
--gradient-title: linear-gradient(110deg, #512BD4 0%, #D600AA 45%, #0B6CFF 90%);

/* Diagonal Speed Capsule 1 (Upper) */
--gradient-capsule-1: linear-gradient(180deg, #512BD4 0%, #0B6CFF 100%);

/* Diagonal Speed Capsule 2 (Lower) */
--gradient-capsule-2: linear-gradient(180deg, #7B5CE5 0%, #D600AA 100%);

/* Hero Atmosphere */
--gradient-space: linear-gradient(180deg, #FFFFFF 0%, #F5F0FF 60%, #EDE5FF 100%);
```

---

## 3. Typography Hierarchy

The project loads Google Fonts via `index.html`:
- **`Outfit`** (`font-display`): Modern geometric display typeface for large headlines, section numbers, titles, and button text.
- **`Space Grotesk`**: Alternate brutalist display font for card titles and signpost badges.
- **`Inter`** (`font-body`): High-legibility neutral sans-serif for body copy, paragraphs, and descriptions.
- **`JetBrains Mono`** (`font-mono`): Monospaced technical font for eyebrows, badges, chips, code snippets, timestamps, and metadata.

### Typography Scale

| Element | Font Family | Weight | Size (Desktop) | Spacing / Style |
|---|---|---|---|---|
| Hero Title | `Outfit` / `Space Grotesk` | 800 | 4.5rem–6.2rem | `-0.03em` tracking |
| Section Header (`h-sec`) | `Outfit` | 700 | 2.5rem–3.4rem | Line-height: 1.1 |
| Card Title | `Outfit` | 800 | 1.25rem–1.5rem | High contrast |
| Eyebrow Stamp | `JetBrains Mono` | 700 | 0.78rem (12px) | `0.22em` uppercase with horizontal line rule |
| Body / Paragraphs | `Inter` | 400–500 | 1rem (16px) | Line-height: 1.7, color `#332B4A` |
| Technical Badge | `JetBrains Mono` | 800–900 | 0.68rem–0.75rem | Uppercase with 1.5px border |

---

## 4. Neo-Brutalist Border & Shadow System

The design system rejects fuzzy blur shadows in favor of crisp **zero-blur offset shadows**:

### Shadow Rules

```css
/* Token Definitions */
--sh-1: 4px 4px 0 var(--purple);       /* Default card/button shadow */
--sh-2: 6px 6px 0 var(--purple);       /* Hover expanded shadow */
--sh-3: 8px 8px 0 var(--magenta);      /* Emphasis / hero cards */
--sh-gold: 5px 5px 0 var(--gold);      /* Gold CTA shadow */

/* Brutalist Component Classes (Tailwind) */
shadow-[4px_4px_0px_#000000]          /* Signposts & badges */
shadow-[6px_6px_0px_#120838]          /* Attendee Badge & ticket cards */
shadow-[8px_8px_0px_#120838]          /* Modal container & hero showcase */
```

### Corner Radii

- Small components / chips: `4px` (`--r-sm`) or `6px` (`--r-md`)
- Interactive cards (`fcard`, `tcard`): `6px`–`12px`
- Brutalist containers & Badges: `16px` (`rounded-2xl`) to `24px` (`rounded-3xl`)

---

## 5. Component Patterns

### 5.1 Buttons

- **Primary Button (`.btn--primary`)**:
  - Background: `#512BD4` (.NET Purple)
  - Text: `#FFFFFF`
  - Border: `2px solid #6C42FA`
  - Shadow: `4px 4px 0px #D600AA` (Magenta offset)
  - Hover: `transform: translate(-2px, -2px); shadow: 6px 6px 0px #F7B548;`
- **Gold Button (`.btn--gold`)**:
  - Background: `#F7B548` (Gold)
  - Text: `#120838` (Deep navy)
  - Border: `2px solid #FFD480`
  - Shadow: `4px 4px 0px #512BD4` (Purple offset)
  - Hover: `transform: translate(-2px, -2px); shadow: 6px 6px 0px #0B6CFF;`

### 5.2 Section Signposts (`DncSignpost`)

Section titles use a physical road-sign motif:
- Tilted signboard (`transform -rotate-[0.5deg]` that straightens on hover).
- Dual support stakes with bolt caps.
- High-contrast color themes (`purple`, `cyan`, `magenta`, `gold`).

### 5.3 Section Flanks (`DncSectionFlanks`)

Side gutters feature stamped metadata:
- Left: Section index number (e.g. `07`), uppercase tag, tilted pill badge.
- Right: Resolution/Format (e.g. `1080P`), pass type, secondary badge.

---

## 6. Attendee Badge Specification

The **Attendee Badge Studio** is an official delegate asset generator embedded in the site at section `#attendee-badge` and accessible on its dedicated route `/badge`.

### 6.1 Core Badge Specifications

| Property | Value | Notes |
|---|---|---|
| **Aspect Ratio** | `1:1` Square | Required for LinkedIn, X (Twitter), and Instagram profile/feed sharing. |
| **Canvas Export Size** | `1080 × 1080 px` | Ultra HD PNG render. |
| **Card Frame** | `rounded-3xl border-[3px] border-[#120838]` | Signature brutalist framing with `shadow-[6px_6px_0px_#512BD4]`. |
| **Background** | Subtle vertical gradient `#FFFFFF` → `#F5F0FF` | Clean, crisp, professional delegate pass aesthetic. |

### 6.2 Visual Elements & Geometry

1. **Top Brand Lockup**:
   - Host identity: **`Microsoft Student Club`** rendered in bold full text. **Must NEVER be truncated with an ellipsis!** Do not add `· PRPCEM` on the badge face.
   - **No redundant icons**: The `.NET` icon / badge is excluded because the `.NET Conf` title is already prominent directly below it. Aligned directly to `leftX`.
2. **Event Headline**:
   - Line 1: `.NET Conf` in deep navy `#120838`.
   - Line 2: `2026` in gradient text (`#512BD4` → `#D600AA` → `#0B6CFF`) alongside `Amravati` in `#512BD4`.
   - 5-Color Ecosystem Accent Bar: 5 horizontal rounded segments (`#512BD4`, `#0B6CFF`, `#28C2D1`, `#D600AA`, `#F7B548`).
3. **"I'M ATTENDING" Badge**:
   - Pill in `.NET Purple` (`#512BD4`) with crisp magenta offset shadow (`2px 2px 0px #D600AA`) and white uppercase typography.
4. **Attendee Details**:
   - **Name**: Large bold title (`#120838`, up to 26 characters).
   - **Role / Designation**: Bold subtitle in `.NET Purple` (`#512BD4`).
   - **College / Organization**: Secondary label in `#5C5577`.
5. **Right-Side Speed Capsules**:
   - Two angled capsules rotated at `30°`.
   - Upper capsule: `.NET Purple (#512BD4) → Vivid Blue (#0B6CFF)`.
   - Lower capsule: `Purple Light (#7B5CE5) → Magenta (#D600AA)`.
6. **Avatar / Mascot Nestling**:
   - The photo or 3D robot mascot sits **harmoniously nestled between the two speed capsules**.
   - **NO rectangular frames or circular borders around the photo.**
   - Photo blends into the card background using a smooth bottom alpha gradient dissolve (`linear-gradient(to bottom, black 60%, transparent 100%)`).
   - If no custom photo is uploaded, the official front-facing .NET Bot (`/mascot/bot_frontal.png`) renders cleanly.
   - **NO obstructing shields, extra logos, or clutter over the photo area.**
7. **Date & Venue Lockup (Bottom Left)**:
   - Date: `January 2–3, 2027` (bold navy).
   - Venue: `Swami Vivekanand Auditorium, PRPCEM` (muted purple).
8. **Bottom Accent Bar**:
   - A multi-color gradient hairline rule along the bottom rim (`#512BD4 → #D600AA → #0B6CFF`).

---

## 7. Strict Constraints for Developers & AI Agents

When working on this codebase, **always obey the following rules**:

1. **Event Dates are Fixed**: strictly **January 2–3, 2027** (Saturday & Sunday). The conference brand is `.NET Conf 2026 Amravati`.
2. **Venue is Fixed**: Swami Vivekanand Auditorium, P. R. Pote Patil College of Engineering and Management (PRPCEM), Kathora Road, Amravati.
3. **Single Stage Summit**: The conference is single-stage in the main auditorium (do not add multi-track / parallel tracks references).
4. **Community Identity**: Microsoft Student Club (MSC PRPCEM). Group contact: `9359982959`.
5. **Badge Format**: Strictly **Square (1:1)**. Do not re-introduce circular badge toggles.
6. **No Clutter on Badge**: Do NOT add hashtags (e.g. `#DotNetConf`), website links (`dnc.mscprpcem.tech`), or social share cards directly on the badge face. Keep the badge clean, editorial, and prestigious.
7. **No Modal Popup for Badge**: The Attendee Badge Studio must remain embedded within the main landing page flow (`#attendee-badge`) as well as available on the dedicated route `/badge`.
8. **Photo Blending**: Attendee photos must always use soft bottom gradient transparency rather than boxed rectangular or circular avatar frames.
9. **Zero Truncation**: Ensure all strings (especially "Microsoft Student Club") have sufficient flex/grid space so they are never clipped on mobile screens.
10. **No Redundant Promo Banners**: Do not add repetitive "Interactive Badge Studio" callout boxes inside the Tickets or Registration section since the full interactive studio is already embedded at Section 12 (`#attendee-badge`).

---

## 8. Recent Polish & System Adjustments

1. **Navbar & Brand Lockup**:
   - The `.NET` square logo badge has been removed from the navbar brand lockup; it now renders clean, crisp text: **.NET Conf 2026** and **Amravati**.
   - The `Badge` link is removed from the navbar navigation links (`navLinks`).
   - The redundant callout banner in `DncTickets.jsx` has been removed; the interactive studio is anchored at Section 12 (`#attendee-badge`) and on `/badge`.

2. **Sponsor Tiers & Interactive Tooltips**:
   - Title Partner: **PRPCEM Amravati** is the sole Title Partner & Host Institution for now (Microsoft and IBM removed from Title Partner).
   - Microsoft Azure remains active under In-Kind & Platform Partners.
   - Interactive Hover Tooltips: Every sponsor tile features a high-contrast Neo-Brutalist floating tooltip (`.sponsor-tooltip`) displaying their exact partner name on cursor hover.

3. **Single-Stage & Venue Standardization**:
   - All references to "Breakout tracks" eliminated in favor of "Technical Lab Classrooms", "Masterclass Sessions", and "Keynote Auditorium Stage".
   - Venue string is 100% consistent across all pages: **Swami Vivekanand Auditorium, PRPCEM** (Kathora Road, Amravati).

---

*Authored for .NET Conf 2026 Amravati engineering team & autonomous coding assistants.*

