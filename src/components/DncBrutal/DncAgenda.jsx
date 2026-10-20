import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { SessionizeEmbed } from '../Agenda/SessionizeEmbed.jsx';

export const DncAgenda = () => {
  return (
    <section id="schedule" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">

      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
          <span className="text-black uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#FFEBF7] text-[#D600AA] flex items-center gap-1.5">
          <span className="text-amber-500 font-bold">⚡</span>
          <span>AMRAVATI EDITION</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
          <span className="text-black uppercase tracking-wider">CENTRAL INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-white text-black flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#512BD4]" />
          <span>PRPCEM CAMPUS</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          DEVELOPERS • COMMUNITY • INNOVATION
        </span>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 z-10">
          <span className="bg-[#00E5FF] text-black text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            FULL DAY SCHEDULE
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            CONFERENCE SCHEDULE
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Main Neo-Brutalist Showcase Card */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] w-full max-w-7xl mx-auto">
        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-white text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>ANNUAL 2026 EDITION • SESSIONIZE INTEGRATION</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black font-sans uppercase tracking-tight text-black text-center mb-2 leading-tight">
          CONFERENCE <span className="text-[#512BD4]">SCHEDULE</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-[14px] text-center max-w-2xl mx-auto leading-relaxed mb-6">
          Explore the sessions, meet the speakers, and plan your conference experience.
        </p>

        {/* Live Sessionize Feed Embed */}
        <div>
          <SessionizeEmbed />
        </div>
      </div>
    </section>
  );
};

export default DncAgenda;
