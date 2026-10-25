import React, { useState, useEffect } from 'react';
import { DncBrutalPage } from './components/DncBrutal/DncBrutalPage.jsx';
import { CodeOfConductPage } from './components/CodeOfConduct/CodeOfConductPage.jsx';
import { SchedulePage } from './components/Schedule/SchedulePage.jsx';
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
      if (search.includes('view=schedule') || hash.includes('schedule-view') || hash.includes('schedule-page') || path === '/schedule-page') {
        return 'schedule';
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
      } else if (search.includes('view=schedule') || hash.includes('schedule-view') || hash.includes('schedule-page') || path === '/schedule-page') {
        setCurrentView('schedule');
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

  // 2. Standalone Schedule Page
  if (currentView === 'schedule') {
    return <SchedulePage onBack={switchToDncBrutal} />;
  }

  // 3. Main Conference DevFest Experience (Permanent Default)
  return <DncBrutalPage />;
};

export default App;
