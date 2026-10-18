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
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    document.title = ".NET Conf 2026 Amravati | Warli Tribal Edition";
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);
          setShowScrollTop(currentY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollToSection('/');
  };

  return (
    <div className="dnc-brutal-canvas min-h-screen font-sans selection:bg-[#E5A93C] selection:text-[#1A0704] overflow-x-hidden relative text-[#FAF7F2]">
      {/* Animated Background Decorative Warli Tarpa Ritual Circles & Sun Rings */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      >
        {/* Ring 1 - Upper Left Tarpa Dance Circle */}
        <div
          className="absolute -left-32 sm:-left-44 top-[8%] w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border-[18px] sm:border-[26px] border-[#FAF7F2]/10 border-dashed bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.14}px) rotate(${scrollY * 0.04}deg)`,
          }}
        />

        {/* Ring 2 - Upper Right Warli Sacred Sun Halo */}
        <div
          className="absolute -right-32 sm:-right-48 top-[24%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full border-[22px] sm:border-[30px] border-[#E5A93C]/12 border-dotted bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(-${scrollY * 0.1}px) rotate(-${scrollY * 0.03}deg)`,
          }}
        />

        {/* Ring 3 - Middle Left Chaukat Orbit */}
        <div
          className="absolute -left-28 sm:-left-40 top-[50%] w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full border-[16px] sm:border-[24px] border-[#FAF7F2]/8 border-dashed bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.05}deg)`,
          }}
        />

        {/* Ring 4 - Lower Right Radial Tarpa Ring */}
        <div
          className="absolute -right-28 sm:-right-44 top-[72%] w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border-[20px] sm:border-[28px] border-[#E5A93C]/10 border-dotted bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(-${scrollY * 0.13}px) rotate(-${scrollY * 0.04}deg)`,
          }}
        />
      </div>

      {/* Sticky Header Navigation */}
      <DncNavbar onSwitchToClassic={onSwitchToClassic} />

      {/* Main Content Sections - Exact 1:1 Parity with Normal Mode */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero (.NET Conf 2026 Amravati, Dev Terminal, Date Pill) */}
        <DncHero />

        {/* Section 2: Conference Pillars & Technical Immersion */}
        <DncEditorialSwimlanes />

        {/* Section 3: Highlights of Last Year (2024 Retrospective Slideshow & Gallery) */}
        <DncPastHighlights />

        {/* Section 4: Headline Opening Keynote Spotlight */}
        <DncKeynote />

        {/* Section 5: Conference Schedule & Tracks Flow */}
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

      {/* Floating Action Controls (Bottom Right - only shown when scrolled) */}
      {showScrollTop && (
        <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 flex flex-col gap-2.5 items-end animate-in fade-in duration-200">
          <button
            onClick={scrollToTop}
            className="p-2.5 sm:p-3 bg-[#38130D] hover:bg-[#4D1C12] text-[#E5A93C] rounded-2xl border-2 border-[#FAF7F2] shadow-[3px_3px_0px_#FAF7F2] hover:shadow-[1px_1px_0px_#FAF7F2] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DncBrutalPage;
