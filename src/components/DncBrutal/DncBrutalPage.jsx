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
import DncExperienceZones from './DncExperienceZones.jsx';
import DncPastHighlights from './DncPastHighlights.jsx';
import DncAgenda from './DncAgenda.jsx';
import DncCommunity from './DncCommunity.jsx';
import DncSponsors from './DncSponsors.jsx';
import DncFAQ from './DncFAQ.jsx';
import DncRegisterCTA from './DncRegisterCTA.jsx';
import DncFooter from './DncFooter.jsx';
import DncAttendeeBadge from './DncAttendeeBadge.jsx';
import KonfhubCheckoutModal from './KonfhubCheckoutModal.jsx';
import { ArrowUp } from 'lucide-react';
import { scrollToSection, normalizePath } from '../../utils/sectionRouter.js';

export const DncBrutalPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCheckoutTicket, setSelectedCheckoutTicket] = useState(null);
  const [activeModal, setActiveModal] = useState(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (search.includes('modal=checkout') || search.includes('modal=tickets')) return 'checkout';
      if (search.includes('modal=register') || hash.includes('register')) return 'checkout';
    }
    return null;
  }); // 'register' | 'checkout' | null

  useEffect(() => {
    document.title = ".NET Conf 2026 Amravati";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // If arriving directly with a section URL (e.g. /about, /speakers, /tickets, /badge, /sponsors)
    const initialPath = normalizePath(window.location.pathname);
    if (initialPath !== '/' && initialPath !== '') {
      const timer1 = setTimeout(() => {
        scrollToSection(initialPath, false);
      }, 100);
      const timer2 = setTimeout(() => {
        scrollToSection(initialPath, false);
      }, 450);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = normalizePath(window.location.pathname);
      scrollToSection(currentPath, false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    if (activeModal) {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.dataset.modalScrollY = String(scrollY);
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        const modalScroll = document.getElementById('badge-modal-scroll');
        if (modalScroll) modalScroll.scrollTop = 0;
      }, 10);
    } else {
      const savedY = parseInt(document.body.dataset.modalScrollY || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      delete document.body.dataset.modalScrollY;
      window.scrollTo(0, savedY);
    }
    return () => {
      const savedY = parseInt(document.body.dataset.modalScrollY || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      delete document.body.dataset.modalScrollY;
      window.scrollTo(0, savedY);
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
      <DncNavbar onOpenRegister={() => setActiveModal('checkout')} />

      {/* Main Page Flow — Exact Structure and Aesthetics of DevFest Nashik 2026 */}
      <main id="main">
        {/* 1. Hero Section with Illustrated Sky, Countdown, and Road to Conf */}
        <DncHero onOpenRegister={() => setActiveModal('checkout')} />

        {/* 2. Horizontal Infinite Marquee Ticker */}
        <DncTicker />

        {/* 3. About Section with Conversational Prose & The Arc of the Day */}
        <DncEditorialSwimlanes />

        {/* 4. Themes & Key Pillars Section */}
        <DncTracks />

        {/* 5. Speaker Wall (8-10 Speakers Roster) */}
        <DncSpeakerWall />

        {/* 6. Call For Proposals Banner */}
        <DncCFP />

        {/* 7. Tickets & The Full Thali (Included in Every Pass) */}
        <DncTickets
          onOpenBadge={() => {
            scrollToSection('/badge', true);
          }}
          onOpenRegister={() => setActiveModal('checkout')}
          onOpenCheckout={(ticketId) => {
            setSelectedCheckoutTicket(ticketId);
            setActiveModal('checkout');
          }}
        />

        {/* 8. What to Expect Feature Cards */}
        <DncExpect />

        {/* 8.5. Campus Experience Zones & Interactive Booths */}
        <DncExperienceZones />

        {/* 9. Past Conference Retrospective Highlights Film Card */}
        <DncPastHighlights />

        {/* 10. Schedule Agenda Timeline with Confirmed Status Tags */}
        <DncAgenda />

        {/* 11. MSC PRPCEM Community Numbers & Illustrated Art */}
        <DncCommunity />

        {/* 12. Official Attendee Badge Studio (Embedded in System) */}
        <DncAttendeeBadge isModal={false} />

        {/* 13. Sponsors & Partners Tiered Cards */}
        <DncSponsors />

        {/* 14. Interactive FAQ Accordion */}
        <DncFAQ />

        {/* 15. Final Grand Ticket Call to Action with Dancing Figures */}
        <DncRegisterCTA
          onOpenRegister={() => setActiveModal('checkout')}
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

      {/* KonfHub Seamless In-Site Ticket Checkout Modal */}
      <KonfhubCheckoutModal
        isOpen={activeModal === 'checkout'}
        onClose={() => {
          setActiveModal(null);
          setSelectedCheckoutTicket(null);
        }}
        selectedTicketId={selectedCheckoutTicket}
      />
    </div>
  );
};

export default DncBrutalPage;
