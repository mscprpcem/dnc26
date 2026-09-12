import React from 'react';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Hero = () => {
  return (
    <section className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Sub-label */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#512BD4] block font-display mb-1">
              {eventData.subname}
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#14053A] leading-[1.1] mb-2 sm:mb-3">
              {eventData.name}
            </h1>

            {/* Subtitle with Coming Soon */}
            <p className="text-sm sm:text-base md:text-lg text-[#190649]/85 font-normal leading-relaxed max-w-xl mb-5 sm:mb-6">
              Central India's premier 1-day tech conference celebrating the official launch of {eventData.launchVersion}, modern C#, Azure Cloud, and Generative AI.{' '}
              <span className="text-gradient-magenta font-bold">
                Date & Schedule Announcement Coming Soon!
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-6 sm:mb-7">
              <a
                href="#keynote"
                className="dotnet-solid-btn-accent text-xs sm:text-sm py-2.5 px-5 shadow-sm font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <span>Keynote Spotlight</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={eventData.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="dotnet-outline-btn-accent text-xs sm:text-sm py-2.5 px-4 font-semibold flex items-center justify-center gap-1.5 w-full sm:w-auto bg-white/80"
              >
                <span>MSC PRPCEM Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Coming Soon Notice Card */}
            <div className="w-full max-w-md bg-white/85 backdrop-blur-md rounded-xl border border-[#DCD5F6]/90 p-3 sm:p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#512BD4] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>Annual 2026 Edition · Coming Soon</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#190649]/75 leading-relaxed">
                Hosted in-person at Swami Vivekananda Auditorium, PRPCEM Campus, with global livestream access. Stay tuned for speaker lineups and badge releases!
              </p>
            </div>

          </div>

          {/* Right Hero Image Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#512BD4]/15 via-[#D600AA]/15 to-[#28C2D1]/15 rounded-full blur-2xl opacity-60 pointer-events-none" />
            
            <div className="relative w-full max-w-[240px] sm:max-w-[290px] md:max-w-[330px] lg:max-w-[370px] animate-float-rocket">
              <img
                role="presentation"
                src="/conf-hero.svg"
                alt=".NET 11 Launch Mascot — .NET Conf Amravati"
                className="w-full h-auto drop-shadow-lg select-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
