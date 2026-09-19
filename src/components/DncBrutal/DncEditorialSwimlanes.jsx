import React from 'react';
import { Sparkles, Layers } from 'lucide-react';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncEditorialSwimlanes = () => {
  return (
    <section id="overview" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="02"
        leftTag="OVERVIEW"
        leftBadgeText="✦ DUAL TRACKS"
        leftBadgeColor="bg-[#EEEAFB] text-[#512BD4]"
        leftSub="ARCHITECTURE"
        rightIndex="MSC"
        rightTag="PRPCEM"
        rightBadgeText="ENTERPRISE & AI"
        rightBadgeColor="bg-[#FFEBF7] text-[#D600AA]"
        rightSub="CENTRAL INDIA"
      />
      {/* Signpost Divider */}
      <DncSignpost 
        title="LAUNCH OVERVIEW & HIGHLIGHTS" 
        badge="TECHNICAL SWIMLANES"
        theme="purple"
      />

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Swimlane 1: Flagship Gathering */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Content Column */}
          <div className="md:col-span-7 bg-[#F6F0FE] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between order-2 md:order-1">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#512BD4] text-white border-[2px] border-black rounded-full px-3 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase shadow-[1.5px_1.5px_0px_0px_#000] mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>01 · Flagship Gathering</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2.5 sm:mb-3">
                {eventData.editorialSections[0].title}
              </h3>

              <p className="text-stone-800 font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                {eventData.editorialSections[0].description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t-[1.5px] sm:border-t-[2px] border-black/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#512BD4]">
              <span>.NET 11 & C# 14</span>
              <span>AZURE CLOUD</span>
              <span>MICROSOFT MVPS</span>
            </div>
          </div>

          {/* Mascot Column */}
          <div className="md:col-span-5 bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group order-1 md:order-2">
            <div className="relative w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[290px] select-none py-2">
              <img
                src="/mascot/bot_frontal.png"
                alt=".NET Bot Mascot — Flagship Conference"
                className="w-full h-auto drop-shadow-md select-none group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="bg-[#EEEAFB] border-[1.5px] sm:border-[2px] border-black rounded-xl px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] shadow-[1.5px_1.5px_0px_0px_#000] mt-2">
              Flagship Gathering
            </div>
          </div>
        </div>

        {/* Swimlane 2: Technical Immersion */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Mascot Column */}
          <div className="order-1 md:col-span-5 bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="relative w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[290px] select-none py-2">
              <img
                src="/mascot/bot_jetpack.png"
                alt=".NET Bot Mascot with Jetpack — Technical Immersion"
                className="w-full h-auto drop-shadow-md select-none group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="bg-[#E8FAFC] border-[1.5px] sm:border-[2px] border-black rounded-xl px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#00838F] shadow-[1.5px_1.5px_0px_0px_#000] mt-2">
              Jetpack Explorer
            </div>
          </div>

          {/* Content Column */}
          <div className="order-2 md:col-span-7 bg-[#E8FAFC] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#00BDD6] text-black border-[2px] border-black rounded-full px-3 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase shadow-[1.5px_1.5px_0px_0px_#000] mb-3 sm:mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>02 · Technical Immersion</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2.5 sm:mb-3">
                {eventData.editorialSections[1].title}
              </h3>

              <p className="text-stone-800 font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                {eventData.editorialSections[1].description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t-[1.5px] sm:border-t-[2px] border-black/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#00838F]">
              <span>HANDS-ON LABS</span>
              <span>PARALLEL TRACKS</span>
              <span>INTERACTIVE SESSIONS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncEditorialSwimlanes;
