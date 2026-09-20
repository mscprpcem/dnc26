import React, { useEffect } from 'react';
import './DncBrutalStyles.css';
import DncNavbar from './DncNavbar.jsx';
import DncHero from './DncHero.jsx';
import DncEditorialSwimlanes from './DncEditorialSwimlanes.jsx';
import DncPastHighlights from './DncPastHighlights.jsx';
import DncKeynote from './DncKeynote.jsx';
import DncAgenda from './DncAgenda.jsx';
import DncVenue from './DncVenue.jsx';
import DncAttendeeBadge from './DncAttendeeBadge.jsx';
import DncInterestForm from './DncInterestForm.jsx';
import DncSponsors from './DncSponsors.jsx';
import DncCommunity from './DncCommunity.jsx';
import DncFooter from './DncFooter.jsx';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../../utils/sectionRouter.js';

export const DncBrutalPage = ({ onSwitchToHackcon, onSwitchToClassic }) => {
  useEffect(() => {
    document.title = ".NET Conf 2026 Amravati | PRPCEM Campus";
  }, []);

  const scrollToTop = () => {
    scrollToSection('/');
  };

  return (
    <div className="dnc-brutal-canvas min-h-screen font-sans selection:bg-[#512BD4] selection:text-white overflow-x-hidden relative">
      {/* Sticky Header Navigation */}
      <DncNavbar onSwitchToClassic={onSwitchToClassic} />

      {/* Main Content Sections - Exact 1:1 Parity with Normal Mode */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero (.NET Conf 2026 Amravati, 3D Rocket Mascot, Date Pill) */}
        <DncHero />

        {/* Section 2: Editorial Swimlanes (Flagship Gathering & Technical Immersion) */}
        <DncEditorialSwimlanes />

        {/* Section 3: Highlights of Last Year (2024 Retrospective Slideshow & Gallery) */}
        <DncPastHighlights />

        {/* Section 4: Headline Opening Keynote Spotlight (Keynote Ambassador Mascot & Pillars) */}
        <DncKeynote />

        {/* Section 5: 1-Day Conference Schedule & Flow */}
        <DncAgenda />

        {/* Section 6: PRPCEM Campus Venue & Interactive Map */}
        <DncVenue />

        {/* Section 7: I am Attending Badge Generator Studio */}
        <DncAttendeeBadge />

        {/* Section 8: Register Your Interest (Priority Delegate Access) */}
        <DncInterestForm />

        {/* Section 9: Partners & Collaborators */}
        <DncSponsors />

        {/* Section 10: Follow & Connect With MSC PRPCEM (7 Channels & Surfing Mascot) */}
        <DncCommunity />
      </main>

      {/* Footer */}
      <DncFooter onSwitchToClassic={onSwitchToClassic} />

      {/* Floating Action Controls (Bottom Right) */}
      <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 flex flex-col gap-2.5 items-end">
        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 bg-[#512BD4] hover:bg-[#4322B0] text-white rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

export default DncBrutalPage;
