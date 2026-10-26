import React, { useState, useEffect } from 'react';
import './DncBrutalStyles.css';
import DncWarliSprites from './DncWarliSprites.jsx';
import DncNavbar from './DncNavbar.jsx';
import DncHero from './DncHero.jsx';
import DncTicker from './DncTicker.jsx';
import DncEditorialSwimlanes from './DncEditorialSwimlanes.jsx';
import DncTracks from './DncTracks.jsx';
import DncSpeakerWall from './DncSpeakerWall.jsx';
import DncCFP from './DncCFP.jsx';
import DncTickets from './DncTickets.jsx';
import DncExpect from './DncExpect.jsx';
import DncPastHighlights from './DncPastHighlights.jsx';
import DncAgenda from './DncAgenda.jsx';
import DncCommunity from './DncCommunity.jsx';
import DncSponsors from './DncSponsors.jsx';
import DncFAQ from './DncFAQ.jsx';
import DncRegisterCTA from './DncRegisterCTA.jsx';
import DncFooter from './DncFooter.jsx';
import DncAttendeeBadge from './DncAttendeeBadge.jsx';
import DncInterestForm from './DncInterestForm.jsx';
import { ArrowUp, X } from 'lucide-react';

export const DncBrutalPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'badge' | 'register' | null

  useEffect(() => {
    document.title = ".NET Conf 2026 Amravati";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        const modalScroll = document.getElementById('badge-modal-scroll');
        if (modalScroll) modalScroll.scrollTop = 0;
      }, 10);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="dnc-fest-canvas">
      {/* Paper Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Embedded Warli & Tech SVG Sprites System */}
      <DncWarliSprites />

      {/* Floating Navigation */}
      <DncNavbar onOpenRegister={() => setActiveModal('register')} />

      {/* Main Page Flow — Exact Structure and Aesthetics of DevFest Nashik 2026 */}
      <main id="main">
        <span id="top"></span>

        {/* 1. Hero Section with Illustrated Sky, Countdown, and Road to Conf */}
        <DncHero onOpenRegister={() => setActiveModal('register')} />

        {/* 2. Horizontal Infinite Marquee Ticker */}
        <DncTicker />

        {/* 3. About Section with Conversational Prose & The Arc of the Day */}
        <DncEditorialSwimlanes />

        {/* 4. Tracks & Themes Section (Revealing Soon) */}
        <DncTracks />

        {/* 5. Speaker Wall (8-10 Speakers Roster) */}
        <DncSpeakerWall />

        {/* 6. Call For Proposals Banner */}
        <DncCFP />

        {/* 7. Tickets & The Full Thali (Included in Every Pass) */}
        <DncTickets
          onOpenBadge={() => setActiveModal('badge')}
          onOpenRegister={() => setActiveModal('register')}
        />

        {/* 8. What to Expect Feature Cards */}
        <DncExpect />

        {/* 9. Past Conference Retrospective Highlights Film Card */}
        <DncPastHighlights />

        {/* 10. Schedule Agenda Timeline with Confirmed Status Tags */}
        <DncAgenda />

        {/* 11. MSC PRPCEM Community Numbers & Illustrated Art */}
        <DncCommunity />

        {/* 13. Sponsors & Partners Tiered Cards */}
        <DncSponsors />

        {/* 14. Interactive FAQ Accordion */}
        <DncFAQ />

        {/* 15. Final Grand Ticket Call to Action with Dancing Figures */}
        <DncRegisterCTA
          onOpenRegister={() => setActiveModal('register')}
        />
      </main>

      {/* 16. Footer with Skyline Horizon SVG and Links */}
      <DncFooter />

      {/* Floating Action Controls (Bottom Right - Scroll to Top) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 p-3 bg-[#512BD4] hover:bg-[#6139E6] text-white rounded-md border-[2px] border-[#120838] shadow-[3px_3px_0px_#120838] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Interactive Modal: Attendee Badge Studio */}
      {activeModal === 'badge' && (
        <div 
          className="fixed inset-0 z-[300] bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl bg-[#FAF8F5] border-[3px] border-black rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#120838] my-auto max-h-[92vh] flex flex-col overflow-hidden">
            {/* Pinned Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 bg-white border-b-2 border-black flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-black bg-[#FFD13B] text-black px-2 py-0.5 rounded border border-black uppercase shadow-[1px_1px_0px_#000]">
                  OFFICIAL PASS
                </span>
                <h3 className="font-sans font-black text-sm sm:text-base md:text-lg text-[#14053A] uppercase tracking-tight">
                  Attendee Badge Studio
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-xl border-2 border-black bg-white hover:bg-[#FFD13B] text-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center cursor-pointer z-30"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div id="badge-modal-scroll" className="p-3 sm:p-6 overflow-y-auto flex-1">
              <div>
                <DncAttendeeBadge isModal={true} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Modal: Priority Interest Registration Form */}
      {activeModal === 'register' && (
        <div 
          className="fixed inset-0 z-[300] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#FAF8F5] border-[3px] border-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[8px_8px_0px_#120838] my-auto max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 w-9 h-9 rounded-xl border-2 border-black bg-white hover:bg-[#FFD13B] text-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center cursor-pointer z-30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
            <div id="interest-form">
              <DncInterestForm 
                isModal={true} 
                onClose={() => setActiveModal(null)} 
                onOpenBadge={() => setActiveModal('badge')}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DncBrutalPage;
