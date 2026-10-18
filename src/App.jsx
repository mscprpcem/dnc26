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
import { HackconPage } from './components/Hackcon/HackconPage.jsx';
import { DncBrutalPage } from './components/DncBrutal/DncBrutalPage.jsx';
import { Tent, LayoutTemplate } from 'lucide-react';

const WarliThemePage = React.lazy(() => import('./components/WarliTheme/DncBrutalPage.jsx'));

export const App = () => {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (search.includes('view=hackcon') || hash.includes('hackcon')) {
        return 'hackcon';
      }
      if (search.includes('view=warli') || hash.includes('warli')) {
        return 'warli';
      }
      if (search.includes('view=classic') || hash.includes('classic')) {
        return 'classic';
      }
    }
    // Default view is the neo-brutalist DotNetConf landing page with Warli references
    return 'dnc-brutal';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (search.includes('view=hackcon') || hash.includes('hackcon')) {
        setCurrentView('hackcon');
      } else if (search.includes('view=warli') || hash.includes('warli')) {
        setCurrentView('warli');
      } else if (search.includes('view=classic') || hash.includes('classic')) {
        setCurrentView('classic');
      } else {
        setCurrentView('dnc-brutal');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchToHackcon = () => {
    setCurrentView('hackcon');
    window.location.hash = '#hackcon';
  };

  const switchToDncBrutal = () => {
    setCurrentView('dnc-brutal');
    if (window.location.hash.includes('hackcon') || window.location.hash.includes('classic') || window.location.hash.includes('warli')) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const switchToWarli = () => {
    setCurrentView('warli');
    window.location.hash = '#warli';
  };

  const switchToClassic = () => {
    setCurrentView('classic');
    window.location.hash = '#classic';
  };

  // 1. If user requests Hackcon test page:
  if (currentView === 'hackcon') {
    return <HackconPage onSwitchToDotNetConf={switchToDncBrutal} />;
  }

  // 2. Full Warli Painting Theme Edition (Accessible via footer switcher & #warli)
  if (currentView === 'warli') {
    return (
      <React.Suspense fallback={
        <div className="min-h-screen bg-[#38130D] text-[#FAF7F2] flex items-center justify-center font-mono text-sm">
          Loading Warli Edition...
        </div>
      }>
        <WarliThemePage
          onSwitchToDncBrutal={switchToDncBrutal}
          onSwitchToClassic={switchToClassic}
        />
      </React.Suspense>
    );
  }

  // 3. Primary experience: DotNetConf neo-brutal styling with subtle Warli cultural touches
  if (currentView === 'dnc-brutal') {
    return (
      <DncBrutalPage 
        onSwitchToHackcon={switchToHackcon}
        onSwitchToClassic={switchToClassic}
        onSwitchToWarli={switchToWarli}
      />
    );
  }

  // 3. Fallback / Classic layout (accessible via #classic)
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
      <main className="w-full flex-1 z-10 pt-16 sm:pt-18">
        {/* Section 1: Hero (DotNetConf 2026 Amravati, 3D Rocket mascot, Coming Soon) */}
        <Hero />

        {/* Section 2: Technical Editorial Swimlanes (Launch overview & conference highlights) */}
        <EditorialSwimlanes />

        {/* Section 4: Highlights of Last Year (.NET Conf 2024 Amravati Retrospective) */}
        <PastHighlights />

        {/* Section 5: Keynote Speaker Spotlight (Headline Keynote - Announced Soon TBA) */}
        <Keynote />

        {/* Section 6: Conference Schedule & Tracks */}
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
      <Footer onSwitchToNeoBrutal={switchToDncBrutal} onSwitchToWarli={switchToWarli} />

      {/* Floating Mode Switcher to Neo-Brutalist DNC Page */}
      <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50">
        <button
          onClick={switchToDncBrutal}
          className="group bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs sm:text-sm px-4 py-3 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer"
          title="Switch to Neo-Brutalist Mode"
        >
          <span className="text-base group-hover:rotate-12 transition-transform">🎨</span>
          <span>SWITCH TO NEO-BRUTALIST MODE</span>
        </button>
      </div>
    </div>
  );
};

export default App;
