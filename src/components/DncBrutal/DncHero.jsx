import React from 'react';
import { ArrowUpRight, Calendar, MapPin, Sparkles, Rocket, Code2 } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const DncHero = () => {
  return (
    <section id="dnc-hero" className="relative pt-4 sm:pt-8 pb-10 sm:pb-14 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Top Floating Badges bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border-[1.5px] sm:border-[2px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
          <Rocket className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">MICROSOFT STUDENT CLUB (MSC) PRPCEM</span>
        </div>

        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#E0F7FA] text-[#006064] font-mono font-bold text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border-[1.5px] sm:border-[2px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
          <Sparkles className="w-3.5 h-3.5 text-[#00BDD6] shrink-0" />
          <span>CENTRAL INDIA DEV CON</span>
        </div>
      </div>

      {/* Main Neo-Brutalist Hero Card */}
      <div className="relative bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-12 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] max-w-5xl mx-auto overflow-hidden">
        {/* Decorative corner tag for desktop */}
        <div className="absolute top-0 right-0 bg-[#00BDD6] border-b-[2.5px] border-l-[2.5px] border-black font-mono font-black text-xs px-4 py-1.5 uppercase rounded-bl-2xl shadow-[2px_2px_0px_0px_#000] hidden md:block">
          AMRAVATI • PRPCEM
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Edition Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FAF8FF] border-[1.5px] sm:border-[2px] border-black rounded-full px-3 py-1 mb-3.5 sm:mb-4 shadow-[1.5px_1.5px_0px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-[#512BD4] animate-ping shrink-0"></span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-black uppercase tracking-wider">
                ANNUAL 2026 EDITION • IN-PERSON
              </span>
            </div>

            {/* Block-Aligned Main Headline with tight media query scaling */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black font-sans tracking-tight text-[#14053A] leading-[0.98] uppercase mb-3.5">
              <span className="block">.NET CONF</span>
              <span className="block text-[#512BD4] mt-1 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem]">
                2026 AMRAVATI
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-stone-800 font-sans text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-4">
              Central India's premier annual developer gathering celebrating the broader Microsoft ecosystem — from modern .NET and Azure cloud to Generative AI, C# 14, and developer tooling.
            </p>

            {/* Location with Icon */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#512BD4] font-mono mb-5 sm:mb-6 bg-[#EEEAFB] border-[1.5px] border-black px-3 py-1.5 rounded-xl shadow-[1.5px_1.5px_0px_0px_#000] w-full sm:w-auto">
              <MapPin className="w-4 h-4 text-[#512BD4] shrink-0" />
              <span className="truncate">{eventData.organizer.institution}, Amravati</span>
            </div>

            {/* Neo-brutalist Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-5 sm:mb-6">
              <a
                href="#dnc-interest"
                className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-black text-xs sm:text-sm md:text-base font-sans uppercase px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>REGISTER INTEREST</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
              </a>

              <a
                href="#dnc-tracks"
                className="bg-[#00BDD6] hover:bg-[#00A3B8] text-black font-bold text-xs sm:text-sm md:text-base font-sans uppercase px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>EXPLORE TRACKS</span>
                <Code2 className="w-4 h-4" />
              </a>
            </div>

            {/* Notice Card */}
            <div className="w-full bg-[#FAF8FF] border-[1.5px] sm:border-[2px] border-black rounded-2xl p-3 sm:p-4 shadow-[2.5px_2.5px_0px_0px_#000]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#512BD4] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#512BD4] shrink-0" />
                <span>OFFICIAL DATES & SESSIONS ANNOUNCING SOON</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                Keynote speakers, workshop labs, and delegate passes are being finalized. Register your interest to lock in priority invitations!
              </p>
            </div>
          </div>

          {/* Right Column: 3D Rocket Mascot Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] bg-[#FAF8FF] border-[2.5px] border-black rounded-3xl p-4 sm:p-6 shadow-[4px_4px_0px_0px_#512BD4] sm:shadow-[6px_6px_0px_0px_#512BD4] flex flex-col items-center">
              {/* Mascot image */}
              <div className="relative w-full aspect-square flex items-center justify-center animate-rocket-float">
                <img
                  src="/conf-hero.svg"
                  alt=".NET Conf 2026 Mascot"
                  className="w-full h-full object-contain select-none filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* Floating Tech Chips */}
              <div className="w-full mt-3 sm:mt-4 pt-3 border-t-[1.5px] sm:border-t-[2px] border-black/10 flex flex-wrap items-center justify-center gap-1.5">
                <span className="bg-[#512BD4] text-white text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_0px_#000]">
                  .NET 10 & 11
                </span>
                <span className="bg-[#00BDD6] text-black text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_0px_#000]">
                  C# 14
                </span>
                <span className="bg-[#D600AA] text-white text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_0px_#000]">
                  Azure AI
                </span>
                <span className="bg-[#FFD13B] text-black text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_0px_#000]">
                  Cloud Native
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncHero;
