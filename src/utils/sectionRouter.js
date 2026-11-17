const PATH_TO_ID = {
  '/': 'top',
  '/home': 'top',
  '/top': 'top',
  '/about': 'overview',
  '/overview': 'overview',
  '/highlights': 'highlights',
  '/recap': 'highlights',
  '/gallery': 'highlights',
  '/keynote': 'keynote',
  '/cfp': 'cfp',
  '/call-for-proposals': 'cfp',
  '/call-for-speakers': 'cfp',
  '/speakers': 'cfp',
  '/schedule': 'schedule',
  '/agenda': 'schedule',
  '/tracks': 'schedule',
  '/venue': 'venue',
  '/location': 'venue',
  '/map': 'venue',
  '/badge': 'attendee-badge',
  '/attendee-badge': 'attendee-badge',
  '/partners': 'partners',
  '/sponsors': 'partners',
  '/sponsorship': 'sponsorship-page',
  '/sponshirp': 'sponsorship-page',
  '/sponsorships': 'sponsorship-page',
  '/collaborators': 'partners',
  '/register': 'register',
  '/register-interest': 'register',
  '/interest': 'register',
  '/community': 'community',
  '/stay-connected': 'community',
  '/connect': 'community',
  '/code-of-conduct': 'code-of-conduct',
  '/coc': 'code-of-conduct',
  '/privacy': 'privacy-policy',
  '/privacy-policy': 'privacy-policy',
  '/policy': 'privacy-policy',
  '/schedule-page': 'schedule-page',
  '/gridsmart': 'schedule',
  '/grid': 'schedule',
  '/sessions': 'schedule',
  '/speakerwall': 'schedule',
  '/sessionize': 'schedule',
  '/brutal': 'top',
};

const ID_TO_PATH = {
  'top': '/',
  'overview': '/about',
  'highlights': '/highlights',
  'keynote': '/keynote',
  'cfp': '/cfp',
  'call-for-speakers': '/cfp',
  'speakers': '/cfp',
  'schedule': '/schedule',
  'venue': '/venue',
  'attendee-badge': '/badge',
  'badge': '/badge',
  'partners': '/partners',
  'register': '/register',
  'register-interest': '/register',
  'interest': '/interest',
  'community': '/community',
  'stay-connected': '/community',
  'code-of-conduct': '/code-of-conduct',
  'coc': '/code-of-conduct',
  'privacy-policy': '/privacy-policy',
  'privacy': '/privacy-policy',
  'sponsorship-page': '/sponsorship',
  'sponsorship': '/sponsorship',
  'sponshirp': '/sponsorship',
};

export const normalizePath = (p) => {
  if (!p) return '/';
  const clean = p.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean.toLowerCase();
};

export const isKnownRoute = (p) => {
  if (!p) return true;
  const clean = normalizePath(p);
  if (clean === '/' || clean === '') return true;
  if (PATH_TO_ID[clean]) return true;
  // Ignore static assets / files that have extensions (e.g. .html, .ics, .png, etc.)
  if (/\.[a-z0-9]+$/i.test(clean)) return true;
  return false;
};

export const scrollToSection = (target, updateHistory = true) => {
  if (typeof window === 'undefined') return;

  let path = '/';
  let targetId = 'top';

  if (typeof target === 'string') {
    if (target.startsWith('/')) {
      path = normalizePath(target);
      targetId = PATH_TO_ID[path] || path.replace(/^\//, '');
    } else {
      targetId = target.replace(/^#/, '');
      path = ID_TO_PATH[targetId] || `/${targetId}`;
    }
  }

  if (targetId === 'code-of-conduct' || path === '/code-of-conduct' || targetId === 'coc') {
    window.location.hash = '#code-of-conduct';
    return;
  }

  if (targetId === 'sponsorship-page' || targetId === 'sponsorship' || path === '/sponsorship' || path === '/sponshirp' || path === '/sponsorships') {
    if (window.location.pathname !== '/sponsorship') {
      window.history.pushState({ path: '/sponsorship', sectionId: 'sponsorship-page' }, '', '/sponsorship');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Handle smooth scroll
  if (targetId === 'top' || path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Multi-candidate search to guarantee finding the target section in both Brutal and Classic modes
    const candidateIds = [
      targetId,
      path.replace(/^\//, ''),
      targetId.replace(/-/g, ''),
    ];
    if (targetId === 'cfp' || targetId === 'speakers' || targetId === 'call-for-speakers') {
      candidateIds.push('cfp', 'speakers', 'call-for-speakers');
    }
    if (targetId === 'register' || targetId === 'register-interest') {
      candidateIds.push('register', 'register-interest');
    }
    if (targetId === 'community' || targetId === 'stay-connected') {
      candidateIds.push('community', 'stay-connected');
    }
    if (targetId === 'attendee-badge' || targetId === 'badge') {
      candidateIds.push('attendee-badge', 'badge');
    }
    if (targetId === 'overview' || targetId === 'about') {
      candidateIds.push('overview', 'about');
    }
    if (targetId === 'schedule' || targetId === 'agenda') {
      candidateIds.push('schedule', 'agenda');
    }

    let el = null;
    for (const cid of candidateIds) {
      el = document.getElementById(cid);
      if (el) break;
    }

    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  // Update browser history
  if (updateHistory) {
    if (window.location.pathname !== path) {
      window.history.pushState({ path, sectionId: targetId }, '', path);
    }
    window.dispatchEvent(new CustomEvent('sectionnav', { detail: { path } }));
  }
};
