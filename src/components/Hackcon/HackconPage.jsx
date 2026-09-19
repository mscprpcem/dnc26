import React, { useEffect } from 'react';
import './HackconStyles.css';
import HackconNavbar from './HackconNavbar.jsx';
import HackconHero from './HackconHero.jsx';
import HackconAbout from './HackconAbout.jsx';
import HackconWhyAttend from './HackconWhyAttend.jsx';
import HackconVenue from './HackconVenue.jsx';
import HackconDualCTA from './HackconDualCTA.jsx';
import HackconTestimonials from './HackconTestimonials.jsx';
import HackconFAQ from './HackconFAQ.jsx';
import HackconSponsors from './HackconSponsors.jsx';
import HackconFooter from './HackconFooter.jsx';
import { ArrowUp, Sparkles } from 'lucide-react';

export const HackconPage = ({ onSwitchToDotNetConf }) => {
  useEffect(() => {
    // Set page title for Hackcon test page
    const originalTitle = document.title;
    document.title = "MLH Hackcon | The Official Conference for Hackathon Organizers";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hackcon-grass-bg min-h-screen font-sans selection:bg-[#FFDB43] selection:text-black overflow-x-hidden relative">
      {/* Sticky Header Navigation */}
      <HackconNavbar onSwitchToDotNetConf={onSwitchToDotNetConf} />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero */}
        <HackconHero />

        {/* Section 2: About & Community Stats */}
        <HackconAbout />

        {/* Section 3: Why Attend */}
        <HackconWhyAttend />

        {/* Section 4: Location / Camp Pontiac */}
        <HackconVenue />

        {/* Section 5: Dual CTA (Register & Speak) */}
        <HackconDualCTA />

        {/* Section 6: Testimonials Carousel */}
        <HackconTestimonials />

        {/* Section 7: FAQs Accordion */}
        <HackconFAQ />

        {/* Section 8: Sponsors & Partners */}
        <HackconSponsors />
      </main>

      {/* Footer */}
      <HackconFooter />

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 items-end">
        {onSwitchToDotNetConf && (
          <button
            onClick={onSwitchToDotNetConf}
            className="bg-[#512BD4] hover:bg-[#4122AA] text-white font-mono font-bold text-xs px-3.5 py-2.5 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1.5"
            title="Switch back to DotNetConf 2026"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SWITCH TO DNC26</span>
          </button>
        )}

        <button
          onClick={scrollToTop}
          className="p-3 bg-[#FFDB43] hover:bg-[#FFE368] text-black rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

export default HackconPage;
