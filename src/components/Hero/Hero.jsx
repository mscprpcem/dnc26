import React from 'react';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Hero = () => {
  return (
    <section className="hero-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="md:col-span-7 flex flex-col items-start z-10 text-left">

            {/* Main Headline */}
            <h1 className="hero-title font-black font-display tracking-tight text-[#14053A] mb-3 sm:mb-4">
              .NET Conf <span className="community-event-gradient-text">2026</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#512BD4] tracking-tight mt-1.5 sm:mt-2">
                {eventData.edition}
              </span>
            </h1>

            {/* Subtitle Description - Phase 1 Pre-announcement */}
            <p className="hero-description text-[#190649]/85 font-normal leading-relaxed max-w-xl mb-6">
              Central India's premier community developer conference organized by Microsoft Student Club PRPCEM. Stay tuned — official dates, schedule, Call for Speakers, and registration details will be announced soon!
            </p>

            {/* Action Buttons */}
            <div className="hero-action-buttons flex items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-7">
              <a
                href={eventData.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="dotnet-solid-btn-accent text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-md font-semibold text-center flex items-center justify-center gap-2 transition-all hover:scale-102 active:scale-98"
              >
                <span>MSC PRPCEM Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#overview"
                className="dotnet-outline-btn-accent text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-5 font-semibold flex items-center justify-center gap-2 bg-white/90 shadow-2xs transition-all hover:scale-102 active:scale-98"
              >
                <span>About Event</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Coming Soon Notice Card */}
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#DCD5F6] p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#512BD4] mb-1">
                <Calendar className="w-4 h-4 text-[#512BD4] shrink-0" />
                <span>Annual 2026 Edition · Coming Soon</span>
              </div>
              <p className="text-xs text-[#190649]/75 leading-relaxed">
                Stay tuned for official updates, speaker announcements, and delegate registration!
              </p>
            </div>

          </div>

          {/* Right Column: Hero Mascot */}
          <div className="md:col-span-5 flex items-center justify-center relative hero-mascot-container">
            {/* Mascot Image Frame (Steady, crisp, natural sizing across all breakpoints) */}
            <div className="relative w-full max-w-[220px] xs:max-w-[270px] sm:max-w-[330px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px] select-none">
              <img
                role="presentation"
                src="/conf-hero.svg"
                alt=".NET Launch Mascot — .NET Conf Amravati"
                className="w-full h-auto drop-shadow-xl select-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
