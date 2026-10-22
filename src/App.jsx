import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { EditorialSwimlanes } from './components/EditorialSwimlanes/EditorialSwimlanes.jsx';
import { PastHighlights } from './components/PastHighlights/PastHighlights.jsx';
import { Keynote } from './components/Keynote/Keynote.jsx';
import { Agenda } from './components/Agenda/Agenda.jsx';
import { Venue } from './components/Venue/Venue.jsx';
import { AttendeeBadge } from './components/AttendeeBadge/AttendeeBadge.jsx';
import { InterestForm } from './components/InterestForm/InterestForm.jsx';
import { Sponsors } from './components/Sponsors/Sponsors.jsx';
import { StayConnected } from './components/StayConnected/StayConnected.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { DncBrutalPage } from './components/DncBrutal/DncBrutalPage.jsx';
import { CallForSpeakers } from './components/CallForSpeakers/CallForSpeakers.jsx';
import { CodeOfConductPage } from './components/CodeOfConduct/CodeOfConductPage.jsx';
import { SchedulePage } from './components/Schedule/SchedulePage.jsx';
import { NotFoundPage } from './components/NotFound/NotFoundPage.jsx';
import { isKnownRoute, normalizePath, scrollToSection } from './utils/sectionRouter.js';

export const App = () => {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = normalizePath(window.location.pathname);
      
      // If path is not recognized, show the not-found view which displays a mascot message and auto-redirects
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
      if (search.includes('view=brutal') || hash.includes('brutal') || hash.includes('neobrutal')) {
        return 'dnc-brutal';
      }
    }
    // Default view is the Normal / Classic DotNetConf experience
    return 'classic';
  });

  useEffect(() => {
    const checkAndHandleRoute = () => {
      const path = normalizePath(window.location.pathname);
      
      // If path is not recognized, set view to not-found
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
      } else if (search.includes('view=brutal') || hash.includes('brutal') || hash.includes('neobrutal')) {
        setCurrentView('dnc-brutal');
      } else {
        setCurrentView('classic');
      }
    };

    // Run check on mount
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
    window.location.hash = '#brutal';
  };


  const switchToClassic = () => {
    setCurrentView('classic');
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, '', '/');
    }
    if (window.location.hash.includes('brutal') || window.location.hash.includes('code-of-conduct') || window.location.hash.includes('coc') || window.location.hash.includes('schedule')) {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 0. 404 / Not Found Interstitial Page (displayed on random paths before auto-redirecting home)
  if (currentView === 'not-found') {
    return (
      <NotFoundPage 
        onRedirectHome={switchToClassic}
        onNavigateToSection={(target) => {
          switchToClassic();
          setTimeout(() => {
            scrollToSection(target);
          }, 150);
        }}
      />
    );
  }

  // 1. Code of Conduct Page
  if (currentView === 'coc') {
    return <CodeOfConductPage onBack={switchToClassic} />;
  }

  // 2. Standalone Schedule Page
  if (currentView === 'schedule') {
    return <SchedulePage onBack={switchToClassic} />;
  }

  // 3. Neo-brutalist styling edition (accessible via switcher & #brutal)
  if (currentView === 'dnc-brutal') {
    return (
      <DncBrutalPage 
        onSwitchToClassic={switchToClassic}
      />
    );
  }

  // 4. Fallback / Classic layout (accessible via #classic)
  return (
    <div className="overflow-container selection:bg-[#512BD4]/20 selection:text-[#512BD4] relative">
      {/* Authentic DotNetConf Gradient Background Ellipses */}
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-01.svg"
        alt="Background gradient ellipse 1"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-02.svg"
        alt="Background gradient ellipse 2"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-03.svg"
        alt="Background gradient ellipse 3"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-04.svg"
        alt="Background gradient ellipse 4"
      />
      <img
        role="presentation"
        className="bg-gradient-ellipse"
        src="/bg-gradient-ellipse-05.svg"
        alt="Background gradient ellipse 5"
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full flex-1 z-10 pt-20 sm:pt-24 md:pt-28">
        {/* Section 1: Hero (DotNetConf 2026 Amravati, 3D Rocket mascot, Coming Soon) */}
        <Hero />

        {/* Section 2: Technical Editorial Swimlanes (Launch overview & conference highlights) */}
        <EditorialSwimlanes />

        {/* Section 4: Highlights of Last Year (.NET Conf 2024 Amravati Retrospective) */}
        <PastHighlights />

        {/* Section 5: Keynote Speaker Spotlight (Headline Keynote - Announced Soon TBA) */}
        <Keynote />

        {/* Section 6: Call for Proposals (CFP) / Speaker Submissions */}
        <CallForSpeakers />

        {/* Section 7: Conference Schedule & Tracks */}
        <Agenda />

        {/* Section 6: Campus Venue & Google Maps (PRPCEM Campus, Amravati) */}
        <Venue />

        {/* Section 7: I am Attending Badge Generator & Social Sharing */}
        <AttendeeBadge />

        {/* Section 8: Register Your Interest */}
        <InterestForm />

        {/* Section 8: Official Partners & Sponsors with Vector Logos */}
        <Sponsors />

        {/* Section 8: Connect with MSC PRPCEM & WhatsApp Community */}
        <StayConnected />
      </main>

      {/* Footer */}
      <Footer onSwitchToNeoBrutal={switchToDncBrutal} />

    </div>
  );
};

export default App;
