import React, { useEffect } from 'react';
import './DncBrutalStyles.css';
import DncNavbar from './DncNavbar.jsx';
import DncHero from './DncHero.jsx';
import DncTracks from './DncTracks.jsx';
import DncPastHighlights from './DncPastHighlights.jsx';
import DncKeynote from './DncKeynote.jsx';
import DncAgenda from './DncAgenda.jsx';
import DncVenue from './DncVenue.jsx';
import DncInterestForm from './DncInterestForm.jsx';
import DncSponsors from './DncSponsors.jsx';
import DncCommunity from './DncCommunity.jsx';
import DncFooter from './DncFooter.jsx';
import { ArrowUp, Sparkles, Tent } from 'lucide-react';

export const DncBrutalPage = ({ onSwitchToHackcon, onSwitchToClassic }) => {
  useEffect(() => {
    document.title = ".NET Conf 2026 Amravati | PRPCEM Campus";
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="dnc-brutal-canvas min-h-screen font-sans selection:bg-[#512BD4] selection:text-white overflow-x-hidden relative">
      {/* Sticky Header Navigation */}
      <DncNavbar onSwitchToClassic={onSwitchToClassic} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero with 3D Rocket Mascot */}
        <DncHero />

        {/* Section 2: Conference Tracks (AI, Cloud, .NET 10, C# 14) */}
        <DncTracks />

        {/* Section 3: 2024 Retrospective & Photo Highlights */}
        <DncPastHighlights />

        {/* Section 4: Headline Keynote Spotlight */}
        <DncKeynote />

        {/* Section 5: 1-Day Schedule & Agenda */}
        <DncAgenda />

        {/* Section 6: PRPCEM Campus Venue & Interactive Map */}
        <DncVenue />

        {/* Section 7: Register Your Interest (Google Sheets Integration) */}
        <DncInterestForm />

        {/* Section 8: Partners & Sponsors */}
        <DncSponsors />

        {/* Section 9: WhatsApp & Community Connections */}
        <DncCommunity />
      </main>

      {/* Footer */}
      <DncFooter />

      {/* Floating Action Controls (Bottom Right) */}
      <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 flex flex-col gap-2.5 items-end">
        {/* Switch to Original / Classic DNC Mode */}
        {onSwitchToClassic && (
          <button
            onClick={onSwitchToClassic}
            className="group bg-white hover:bg-stone-50 text-[#14053A] font-mono font-black text-[11px] sm:text-xs px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer"
            title="Switch back to original DotNetConf website mode"
          >
            <span className="text-sm sm:text-base group-hover:rotate-12 transition-transform">⚡</span>
            <span>SWITCH TO ORIGINAL MODE</span>
          </button>
        )}

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
