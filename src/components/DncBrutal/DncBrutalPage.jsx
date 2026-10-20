import React, { useEffect } from 'react';
import './DncBrutalStyles.css';
import DncNavbar from './DncNavbar.jsx';
import DncHero from './DncHero.jsx';
import DncEditorialSwimlanes from './DncEditorialSwimlanes.jsx';
import DncPastHighlights from './DncPastHighlights.jsx';
import DncKeynote from './DncKeynote.jsx';
import DncCFP from './DncCFP.jsx';
import DncAgenda from './DncAgenda.jsx';
import DncVenue from './DncVenue.jsx';
import DncAttendeeBadge from './DncAttendeeBadge.jsx';
import DncInterestForm from './DncInterestForm.jsx';
import DncSponsors from './DncSponsors.jsx';
import DncCommunity from './DncCommunity.jsx';
import DncFooter from './DncFooter.jsx';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../../utils/sectionRouter.js';

export const DncBrutalPage = ({ onSwitchToClassic }) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    document.title = ".NET Conf 2026 Amravati | PRPCEM Campus";
    
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
    <div className="dnc-brutal-canvas min-h-screen font-sans selection:bg-[#512BD4] selection:text-white overflow-x-hidden relative">
      {/* Animated Background Decorative Hollow Rings with Scroll Parallax */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      >
        {/* Ring 1 - Upper Left */}
        <div
          className="absolute -left-32 sm:-left-44 top-[10%] w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full border-[28px] sm:border-[38px] border-[#8B5CF6]/20 bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.14}px) rotate(${scrollY * 0.04}deg)`,
          }}
        />

        {/* Ring 2 - Upper Right */}
        <div
          className="absolute -right-32 sm:-right-48 top-[28%] w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border-[32px] sm:border-[44px] border-[#8B5CF6]/20 bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(-${scrollY * 0.1}px) rotate(-${scrollY * 0.03}deg)`,
          }}
        />

        {/* Ring 3 - Middle Left */}
        <div
          className="absolute -left-28 sm:-left-40 top-[52%] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full border-[26px] sm:border-[36px] border-[#8B5CF6]/18 bg-transparent transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.05}deg)`,
          }}
        />

        {/* Ring 4 - Lower Right */}
        <div
          className="absolute -right-28 sm:-right-44 top-[74%] w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border-[30px] sm:border-[40px] border-[#8B5CF6]/18 bg-transparent transition-transform duration-75 ease-out"
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

        {/* Section 5: Call for Proposals (CFP) / Speaker Submissions */}
        <DncCFP />

        {/* Section 6: Conference Schedule & Tracks Flow */}
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
            className="p-2.5 sm:p-3 bg-[#512BD4] hover:bg-[#4322B0] text-white rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
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
