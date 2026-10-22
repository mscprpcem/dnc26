/**
 * Sessionize API & Styled HTML Embed Utilities
 * Official MSC PRPCEM Schedule & Speaker Integration for .NET Conf 2026 Amravati
 *
 * Primary Sessionize Event ID: 2dfwfued (with fallback handling for d2wfued)
 */

export const SESSIONIZE_DEFAULT_EVENT_ID = '2dfwfued';

/**
 * Normalizes Sessionize event IDs, handling typos or anagrams gracefully.
 * The active live organizer event key is '2dfwfued'.
 * @param {string} id
 * @returns {string}
 */
export function normalizeSessionizeEventId(id) {
  if (!id) return SESSIONIZE_DEFAULT_EVENT_ID;
  const clean = String(id).trim();
  // Map known organizer alias to the active event id
  if (clean === 'd2wfued') {
    return '2dfwfued';
  }
  return clean;
}

/**
 * Generate full URL for a specific Sessionize view
 * @param {'gridSmart'|'sessions'|'speakers'|'speakerWall'} viewKey 
 * @param {string} eventId 
 * @returns {string}
 */
export function getSessionizeViewUrl(viewKey, eventId = SESSIONIZE_DEFAULT_EVENT_ID) {
  const normalizedId = normalizeSessionizeEventId(eventId);
  const viewMap = {
    gridSmart: 'GridSmart',
    sessions: 'Sessions',
    speakers: 'Speakers',
    speakerWall: 'SpeakerWall',
  };
  const viewName = viewMap[viewKey] || 'GridSmart';
  return `https://sessionize.com/api/v2/${normalizedId}/view/${viewName}`;
}

/**
 * Styled HTML endpoints for .NET Conf 2026 Amravati
 */
export const SESSIONIZE_ENDPOINTS = {
  gridSmart: getSessionizeViewUrl('gridSmart'),
  sessions: getSessionizeViewUrl('sessions'),
  speakers: getSessionizeViewUrl('speakers'),
  speakerWall: getSessionizeViewUrl('speakerWall'),
};

/**
 * View navigation tabs metadata
 */
export const SESSIONIZE_VIEWS = [
  {
    id: 'gridSmart',
    label: 'Schedule Grid',
    endpoint: 'GridSmart',
    description: 'Smart responsive grid view of conference rooms, tracks, and timeline',
  },
  {
    id: 'sessions',
    label: 'Session List',
    endpoint: 'Sessions',
    description: 'Detailed chronological listing of all keynote talks and technical breakouts',
  },
  {
    id: 'speakers',
    label: 'Speakers',
    endpoint: 'Speakers',
    description: 'Directory of keynote speakers, Microsoft MVPs, and community leaders',
  },
  {
    id: 'speakerWall',
    label: 'Speakers Wall',
    endpoint: 'SpeakerWall',
    description: 'Visual speaker photo mosaic and talk overview',
  },
];

/**
 * Direct public Call for Speakers (CFP) URL for .NET Conf 2026 Amravati on Sessionize
 */
export const SESSIONIZE_PUBLIC_URL = 'https://sessionize.com/dnc26/';
export const SESSIONIZE_CFP_URL = 'https://sessionize.com/dnc26/';

/**
 * Generates an isolated HTML document for the iframe embed.
 *
 * Why an iframe?
 * Sessionize's documented Styled HTML embed works by having a `<script>` tag load
 * from `https://sessionize.com/api/v2/{id}/view/{view}` and calling `document.write(...)`
 * to output styles, session DOM, and modal popups. In a modern React Single Page Application (SPA),
 * dynamically executing `document.write` in the parent document either triggers browser security
 * violations or wipes the React virtual DOM tree. Wrapping it in an isolated iframe gives
 * Sessionize an independent document lifecycle where `document.write` executes natively,
 * without conflicts.
 *
 * @param {string} scriptUrl - The Styled HTML endpoint URL
 * @param {string} title - Accessible title for the document
 * @returns {string} HTML document string for iframe srcDoc
 */
export function generateSessionizeEmbedDoc(scriptUrl, title = 'Conference Schedule') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>${escapeHtml(title)}</title>
  
  <!-- Preload branding fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">

  <style>
    /* .NET Conf 2026 Amravati Brand Design Tokens */
    :root {
      --conference-bg: #F0EFFB;
      --conference-primary: #7046C8;
      --conference-secondary: #A99AE8;
      --conference-text: #292735;
      --conference-white: #FFFFFF;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html {
      background-color: transparent;
      color: var(--conference-text, #292735);
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 15px;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      margin: 0;
      padding: 8px 4px 16px 4px;
      background-color: transparent;
      color: var(--conference-text, #292735);
      overflow-x: hidden;
      width: 100%;
    }

    /* Heading typography */
    h1, h2, h3, h4, h5, h6, 
    .sz-session__title, 
    .sz-speaker__name, 
    .sz-day__title {
      font-family: 'Montserrat', 'Inter', system-ui, -apple-system, sans-serif !important;
      font-weight: 700 !important;
      letter-spacing: -0.02em;
    }

    /* Subtle custom link styling */
    a {
      color: var(--conference-primary, #7046C8);
      text-decoration: none;
      transition: color 0.15s ease-in-out;
    }
    a:hover {
      color: #5833A5;
      text-decoration: underline;
    }

    /* Container fluid width for responsiveness */
    .sz-root, #sessionize, .sessionize-wrapper {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 auto;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    /* Responsive mobile scrollbar for wide grid tables */
    .sz-root::-webkit-scrollbar,
    .sessionize-wrapper::-webkit-scrollbar {
      height: 6px;
    }
    .sz-root::-webkit-scrollbar-thumb,
    .sessionize-wrapper::-webkit-scrollbar-thumb {
      background: var(--conference-secondary, #A99AE8);
      border-radius: 9999px;
    }

    /* Card styling subtleties */
    .sz-session {
      border-radius: 12px !important;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .sz-session:hover {
      transform: translateY(-1px);
    }

    /* Modal dialog styling inside iframe */
    .sz-modal-container {
      z-index: 99999 !important;
    }

    /* Accessibility focus indicators */
    button:focus-visible, a:focus-visible, input:focus-visible {
      outline: 2px solid var(--conference-primary, #7046C8) !important;
      outline-offset: 2px !important;
    }
  </style>
</head>
<body>
  <!-- Documented Sessionize Styled HTML Embed Script -->
  <script type="text/javascript" src="${scriptUrl}" onerror="onSessionizeScriptError()"></script>

  <script>
    function onSessionizeScriptError() {
      if (window.parent) {
        window.parent.postMessage({
          type: 'sessionize-status',
          status: 'error',
          url: '${scriptUrl}'
        }, '*');
      }
    }

    function sendHeight() {
      try {
        var body = document.body;
        var html = document.documentElement;
        if (!body) return;
        var height = Math.max(
          body.scrollHeight, body.offsetHeight,
          html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        if (window.parent && height > 0) {
          window.parent.postMessage({
            type: 'sessionize-resize',
            height: height,
            url: '${scriptUrl}'
          }, '*');
        }
      } catch (e) {
        // Silently ignore cross-window communication restrictions
      }
    }

    window.addEventListener('load', function() {
      sendHeight();
      if (window.parent) {
        window.parent.postMessage({
          type: 'sessionize-status',
          status: 'loaded',
          url: '${scriptUrl}'
        }, '*');
      }
    });

    // Automatically detect content changes (e.g. tabs clicked inside Sessionize, modals, etc.)
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      var resizeObserver = new ResizeObserver(function() {
        sendHeight();
      });
      resizeObserver.observe(document.body);
    }

    // Interval checks during initial render
    var pollCount = 0;
    var poller = setInterval(function() {
      sendHeight();
      pollCount++;
      if (pollCount > 12) clearInterval(poller);
    }, 400);
  </script>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Checks whether the Sessionize endpoint contains published data or is in coming soon / unannounced state
 * @param {string} html
 * @returns {boolean}
 */
export function isScheduleEmpty(html) {
  if (!html) return true;
  const lower = html.toLowerCase();
  
  // 1. Direct unannounced notice from Sessionize
  if (lower.includes('no data or schedule not announced') || lower.includes('schedule not announced')) {
    return true;
  }

  // 2. Empty Sessionize content between stylesheet and script tag
  const styleEnd = html.indexOf('</style>');
  const scriptStart = html.indexOf('<script', styleEnd !== -1 ? styleEnd : 0);
  if (styleEnd !== -1 && scriptStart !== -1) {
    const content = html.substring(styleEnd + 8, scriptStart).trim();
    if (content.length === 0) {
      return true;
    }
  }

  // 3. Wall or directory without speaker photos or names
  if (lower.includes('sz-speakers') && !lower.includes('sz-speaker__photo') && !lower.includes('sz-speaker__name')) {
    return true;
  }

  // 4. Positive detection: if session title or speaker names exist, it is NOT empty
  if (lower.includes('sz-session__title') || lower.includes('sz-speaker__name') || lower.includes('sz-session__card')) {
    return false;
  }

  // 5. Fallback: very short template output
  if (html.length < 500 && !lower.includes('sz-session')) {
    return true;
  }

  return false;
}

export const isScheduleTba = isScheduleEmpty;

/**
 * Tests endpoint connectivity with lightweight caching to prevent excessive network requests
 */
const STATUS_CACHE = new Map();
const STATUS_CACHE_TTL = 30 * 1000; // 30 seconds (fast update reflection)

export async function checkEndpointStatus(url, forceRefresh = false) {
  if (forceRefresh) {
    STATUS_CACHE.delete(url);
  }

  const cached = STATUS_CACHE.get(url);
  if (!forceRefresh && cached && Date.now() - cached.timestamp < STATUS_CACHE_TTL) {
    return cached.data;
  }

  try {
    const fetchUrl = `${url}${url.includes('?') ? '&' : '?'}_t=${Date.now()}`;
    const res = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });
    const text = await res.text();
    const isEmpty = isScheduleEmpty(text);
    const result = {
      ok: res.ok,
      status: res.status,
      isEmpty,
      isTba: isEmpty,
      length: text.length,
    };
    STATUS_CACHE.set(url, { timestamp: Date.now(), data: result });
    return result;
  } catch (err) {
    const result = {
      ok: false,
      status: 0,
      isEmpty: true,
      isTba: true,
      error: err.message,
    };
    STATUS_CACHE.set(url, { timestamp: Date.now(), data: result });
    return result;
  }
}
