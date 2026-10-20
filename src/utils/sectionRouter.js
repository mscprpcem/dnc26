import { useState, useEffect, useRef, useCallback } from 'react';

export const SECTION_ROUTES = [
  { path: '/', id: 'top', label: 'HOME' },
  { path: '/about', id: 'overview', label: 'ABOUT' },
  { path: '/highlights', id: 'highlights', label: 'HIGHLIGHTS' },
  { path: '/keynote', id: 'keynote', label: 'KEYNOTE' },
  { path: '/cfp', id: 'cfp', label: 'CFP' },
  { path: '/schedule', id: 'schedule', label: 'SCHEDULE' },
  { path: '/venue', id: 'venue', label: 'VENUE' },
  { path: '/badge', id: 'attendee-badge', label: 'BADGE' },
  { path: '/partners', id: 'partners', label: 'PARTNERS' },
  { path: '/register', id: 'register', label: 'REGISTER' },
  { path: '/community', id: 'community', label: 'COMMUNITY' },
];

export const PATH_TO_ID = {
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
  '/collaborators': 'partners',
  '/register': 'register',
  '/register-interest': 'register',
  '/community': 'community',
  '/stay-connected': 'community',
  '/connect': 'community',
  '/code-of-conduct': 'code-of-conduct',
  '/coc': 'code-of-conduct',
};

export const ID_TO_PATH = {
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
  'community': '/community',
  'stay-connected': '/community',
  'code-of-conduct': '/code-of-conduct',
  'coc': '/code-of-conduct',
};

export const normalizePath = (p) => {
  if (!p) return '/';
  const clean = p.replace(/\/+$/, '');
  return clean === '' ? '/' : clean.toLowerCase();
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

/**
 * Hook for managing active section path and URL synchronization
 */
export const useSectionRouter = () => {
  const [activePath, setActivePath] = useState(() => {
    if (typeof window !== 'undefined') {
      const current = normalizePath(window.location.pathname);
      return PATH_TO_ID[current] ? current : '/';
    }
    return '/';
  });

  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef(null);

  // Navigate to target section and update URL
  const navigateTo = useCallback((target) => {
    isNavigatingRef.current = true;
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    let path = '/';
    if (target.startsWith('/')) {
      path = normalizePath(target);
    } else {
      const targetId = target.replace(/^#/, '');
      path = ID_TO_PATH[targetId] || '/';
    }

    setActivePath(path);
    scrollToSection(target, true);

    // Keep scroll spy muted temporarily during smooth scroll transition
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 850);
  }, []);

  // Handle initial page load with URL path + popstate (browser Back/Forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = normalizePath(window.location.pathname);
      const targetId = PATH_TO_ID[path];
      if (targetId) {
        setActivePath(path);
        scrollToSection(path, false);
      }
    };

    window.addEventListener('popstate', handlePopState);

    const handleCustomNav = (e) => {
      if (e?.detail?.path) {
        setActivePath(e.detail.path);
      }
    };
    window.addEventListener('sectionnav', handleCustomNav);

    // Initial page load deep linking (e.g. /about, /schedule, /badge)
    const initialPath = normalizePath(window.location.pathname);
    if (initialPath && initialPath !== '/') {
      setActivePath(initialPath);
      const timer = setTimeout(() => {
        scrollToSection(initialPath, false);
      }, 300);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('popstate', handlePopState);
        window.removeEventListener('sectionnav', handleCustomNav);
      };
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('sectionnav', handleCustomNav);
    };
  }, []);

  // Scroll spy to update active section in navbar and address bar as user scrolls
  useEffect(() => {
    const sectionElements = SECTION_ROUTES.map((route) => {
      const targetId = PATH_TO_ID[route.path] || route.id;
      const el = document.getElementById(targetId) || document.getElementById(route.id);
      return {
        ...route,
        el,
      };
    }).filter((item) => item.el !== null);

    if (sectionElements.length === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (isNavigatingRef.current || ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (isNavigatingRef.current) return;

        const scrollPos = window.scrollY;
        
        // If near top, set to root '/'
        if (scrollPos < 150) {
          if (window.location.pathname !== '/') {
            window.history.replaceState(null, '', '/');
          }
          setActivePath('/');
          return;
        }

        // Find the section that currently aligns best with the header area (top 160px)
        const headerOffset = 160;
        let currentSection = null;

        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const section = sectionElements[i];
          const top = section.el.getBoundingClientRect().top;
          if (top <= headerOffset) {
            currentSection = section;
            break;
          }
        }

        if (currentSection && currentSection.path) {
          setActivePath(currentSection.path);
          if (window.location.pathname !== currentSection.path) {
            window.history.replaceState(null, '', currentSection.path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activePath, navigateTo };
};
