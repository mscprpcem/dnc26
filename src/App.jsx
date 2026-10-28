import React, { useState, useEffect } from 'react';
import { DncBrutalPage } from './components/DncBrutal/DncBrutalPage.jsx';
import { CodeOfConductPage } from './components/CodeOfConduct/CodeOfConductPage.jsx';
import { PrivacyPolicyPage } from './components/PrivacyPolicy/PrivacyPolicyPage.jsx';
import { SchedulePage } from './components/Schedule/SchedulePage.jsx';
import { SponsorshipPage } from './components/Sponsorship/SponsorshipPage.jsx';
import { NotFoundPage } from './components/NotFound/NotFoundPage.jsx';
import { isKnownRoute, normalizePath, scrollToSection } from './utils/sectionRouter.js';

export const App = () => {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = normalizePath(window.location.pathname);
      
      // If path is not recognized, show the not-found view
      if (!isKnownRoute(path)) {
        return 'not-found';
      }

      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (search.includes('view=coc') || hash.includes('coc') || hash.includes('code-of-conduct') || path.includes('code-of-conduct')) {
        return 'coc';
      }
      if (search.includes('view=privacy') || hash.includes('privacy') || path.includes('privacy')) {
        return 'privacy';
      }
      if (search.includes('view=schedule') || hash.includes('schedule-view') || hash.includes('schedule-page') || path === '/schedule-page') {
        return 'schedule';
      }
      if (search.includes('view=sponsorship') || search.includes('view=sponshirp') || hash.includes('sponsorship') || hash.includes('sponshirp') || path === '/sponsorship' || path === '/sponshirp' || path === '/sponsorships') {
        return 'sponsorship';
      }
      return 'dnc-brutal';
    }
    return 'dnc-brutal';
  });

  useEffect(() => {
    const checkAndHandleRoute = () => {
      const path = normalizePath(window.location.pathname);
      
      if (!isKnownRoute(path)) {
        setCurrentView('not-found');
        return;
      }

      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (search.includes('view=coc') || hash.includes('coc') || hash.includes('code-of-conduct') || path.includes('code-of-conduct')) {
        setCurrentView('coc');
      } else if (search.includes('view=privacy') || hash.includes('privacy') || path.includes('privacy')) {
        setCurrentView('privacy');
      } else if (search.includes('view=schedule') || hash.includes('schedule-view') || hash.includes('schedule-page') || path === '/schedule-page') {
        setCurrentView('schedule');
      } else if (search.includes('view=sponsorship') || search.includes('view=sponshirp') || hash.includes('sponsorship') || hash.includes('sponshirp') || path === '/sponsorship' || path === '/sponshirp' || path === '/sponsorships') {
        setCurrentView('sponsorship');
      } else {
        setCurrentView('dnc-brutal');
      }
    };

    checkAndHandleRoute();

    window.addEventListener('hashchange', checkAndHandleRoute);
    window.addEventListener('popstate', checkAndHandleRoute);
    return () => {
      window.removeEventListener('hashchange', checkAndHandleRoute);
      window.removeEventListener('popstate', checkAndHandleRoute);
    };
  }, []);

  const switchToDncBrutal = () => {
    setCurrentView('dnc-brutal');
    window.location.hash = '';
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 0. 404 / Not Found Interstitial Page
  if (currentView === 'not-found') {
    return (
      <NotFoundPage 
        onRedirectHome={switchToDncBrutal}
        onNavigateToSection={(target) => {
          switchToDncBrutal();
          setTimeout(() => {
            scrollToSection(target);
          }, 150);
        }}
      />
    );
  }

  // 1. Code of Conduct Page
  if (currentView === 'coc') {
    return <CodeOfConductPage onBack={switchToDncBrutal} />;
  }

  // 1.1 Privacy Policy Page
  if (currentView === 'privacy') {
    return <PrivacyPolicyPage onBack={switchToDncBrutal} />;
  }

  // 2. Standalone Schedule Page
  if (currentView === 'schedule') {
    return <SchedulePage onBack={switchToDncBrutal} />;
  }

  // 2.1 Standalone Sponsorship & Benefits Page
  if (currentView === 'sponsorship') {
    return <SponsorshipPage onBack={switchToDncBrutal} />;
  }

  // 3. Main Conference DevFest Experience (Permanent Default)
  return <DncBrutalPage />;
};

export default App;
