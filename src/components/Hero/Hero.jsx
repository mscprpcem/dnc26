import React from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Hero = () => {
  return (
    <section className="hero-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="md:col-span-7 flex flex-col items-start z-10 text-left">

            {/* Main Headline: .NET Conf above, 2026 Amravati below */}
            <h1 className="hero-title font-black font-display tracking-tight text-[#14053A] mb-3 sm:mb-4">
              <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#14053A] tracking-tight">
                .NET Conf
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-1 sm:mt-2">
                <span className="community-event-gradient-text">2026</span>{' '}
                <span className="text-[#512BD4]">Amravati</span>
              </span>
            </h1>

            {/* Description: Annual Dev Event for Amravati focusing on the Microsoft Ecosystem */}
            <p className="hero-description text-[#190649]/85 font-medium leading-relaxed max-w-xl mb-4 text-sm sm:text-base">
              Central India's premier annual developer event for Amravati, celebrating the broader Microsoft ecosystem — from modern .NET and Azure cloud to Generative AI and developer tooling.
            </p>

            {/* College Name & Location */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#512BD4] mb-6">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#512BD4] shrink-0" />
              <span>{eventData.organizer.institution}, Amravati</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-action-buttons flex items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-7">
              <a
                href="#register-interest"
                className="dotnet-solid-btn-accent text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-md font-semibold text-center flex items-center justify-center gap-2 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="dotnet-outline-btn-accent text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-5 font-bold flex items-center justify-center gap-2 bg-white/90 shadow-2xs select-none text-[#512BD4] border border-[#DCD5F6]">
                <Sparkles className="w-4 h-4 text-[#512BD4]" />
                <span>Coming Soon</span>
              </div>
            </div>

            {/* Announcement Notice Card */}
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#DCD5F6] p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#512BD4] mb-1">
                <Calendar className="w-4 h-4 text-[#512BD4] shrink-0" />
                <span>Annual 2026 Edition · Coming Soon</span>
              </div>
              <p className="text-xs text-[#190649]/75 leading-relaxed">
                Official dates, session tracks, and speaker lineups will be announced soon. Register your interest below for priority delegate updates!
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
