import React from 'react';
import { Sparkles, Layers } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const EditorialSwimlanes = () => {
  return (
    <section id="overview" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Swimlane 1: Flagship Gathering with 3D Standing .NET Bot Mascot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center border-t border-[#DCD5F6]/70 pt-8 sm:pt-12 first:border-t-0 first:pt-0">
          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-center text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#DCD5F6] w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>01 · Flagship Gathering</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] leading-tight mb-4">
              {eventData.editorialSections[0].title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#190649]/80 font-normal leading-relaxed">
              {eventData.editorialSections[0].description}
            </p>
          </div>

          {/* Mascot Column */}
          <div className="md:col-span-5 flex items-center justify-center relative order-1 md:order-2">
            <div className="relative w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] select-none">
              <img
                src="/mascot/bot_frontal.png"
                alt=".NET Bot Mascot — Flagship Conference"
                className="w-full h-auto drop-shadow-md select-none"
              />
            </div>
          </div>
        </div>

        {/* Swimlane 2: Technical Immersion with 3D Jetpack .NET Bot Mascot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center border-t border-[#DCD5F6]/70 pt-8 sm:pt-12">
          {/* Mascot Column */}
          <div className="md:col-span-5 flex items-center justify-center relative order-1">
            <div className="relative w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] select-none">
              <img
                src="/mascot/bot_jetpack.png"
                alt=".NET Bot Mascot with Jetpack — Technical Immersion"
                className="w-full h-auto drop-shadow-md select-none"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-center text-left order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#DCD5F6] w-fit">
              <Layers className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>02 · Technical Immersion</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] leading-tight mb-4">
              {eventData.editorialSections[1].title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#190649]/80 font-normal leading-relaxed">
              {eventData.editorialSections[1].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialSwimlanes;
