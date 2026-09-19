import { useState, useEffect, useRef, useCallback } from 'react';

export const SECTION_ROUTES = [
  { path: '/', id: 'top', label: 'HOME' },
  { path: '/about', id: 'overview', label: 'ABOUT' },
  { path: '/highlights', id: 'highlights', label: 'HIGHLIGHTS' },
  { path: '/keynote', id: 'keynote', label: 'KEYNOTE' },
  { path: '/schedule', id: 'schedule', label: 'SCHEDULE' },
  { path: '/venue', id: 'venue', label: 'VENUE' },
  { path: '/badge', id: 'attendee-badge', label: 'BADGE' },
  { path: '/partners', id: 'partners', label: 'PARTNERS' },
  { path: '/register', id: 'register-interest', label: 'REGISTER' },
  { path: '/community', id: 'stay-connected', label: 'COMMUNITY' },
];

export const PATH_TO_ID = {
  '/': 'top',
  '/home': 'top',
  '/about': 'overview',
  '/overview': 'overview',
  '/highlights': 'highlights',
  '/keynote': 'keynote',
  '/schedule': 'schedule',
  '/agenda': 'schedule',
  '/venue': 'venue',
  '/location': 'venue',
  '/badge': 'attendee-badge',
  '/attendee-badge': 'attendee-badge',
  '/partners': 'partners',
  '/sponsors': 'partners',
  '/register': 'register-interest',
  '/register-interest': 'register-interest',
  '/community': 'stay-connected',
  '/connect': 'stay-connected',
};

export const ID_TO_PATH = {
  'top': '/',
  'overview': '/about',
  'highlights': '/highlights',
  'keynote': '/keynote',
  'schedule': '/schedule',
  'venue': '/venue',
  'attendee-badge': '/badge',
  'partners': '/partners',
  'register-interest': '/register',
  'stay-connected': '/community',
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
      targetId = PATH_TO_ID[path] || 'top';
    } else {
      targetId = target.replace(/^#/, '');
      path = ID_TO_PATH[targetId] || `/${targetId}`;
    }
  }

  // Handle smooth scroll
  if (targetId === 'top' || path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
      const targetId = PATH_TO_ID[initialPath];
      if (targetId) {
        setActivePath(initialPath);
        const timer = setTimeout(() => {
          scrollToSection(initialPath, false);
        }, 200);
        return () => {
          clearTimeout(timer);
          window.removeEventListener('popstate', handlePopState);
          window.removeEventListener('sectionnav', handleCustomNav);
        };
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('sectionnav', handleCustomNav);
    };
  }, []);

  // Scroll spy to update active section in navbar and address bar as user scrolls
  useEffect(() => {
    const sectionElements = SECTION_ROUTES.map((route) => ({
      ...route,
      el: document.getElementById(route.id),
    })).filter((item) => item.el !== null);

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
