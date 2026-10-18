import React from 'react';
import { Calendar, Clock, Users, Mic, Code2, Utensils, Laptop, Trophy, MapPin, Layers } from 'lucide-react';
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';

export const DncAgenda = () => {
  const scheduleItems = [
    {
      time: '09:00 AM',
      tag: '(TENTATIVE)',
      title: 'Registration & Cultural Welcome',
      desc: 'Check in, collect your Warli attendee badge and connect with delegates.',
      icon: Users,
      iconColor: 'bg-[#38130D] text-[#E5A93C]',
    },
    {
      time: '10:00 AM',
      tag: '(TENTATIVE)',
      title: 'Opening Remarks & Keynote',
      desc: 'Welcome to .NET Conf Amravati and a look at modern .NET 11, AI and cloud.',
      icon: Mic,
      iconColor: 'bg-[#C84832] text-[#FAF7F2]',
    },
    {
      time: '11:00 AM',
      tag: '(TENTATIVE)',
      title: 'Technical Sessions & Deep Dives',
      desc: 'Practical talks across .NET, Azure AI, Blazor and developer tooling.',
      icon: Code2,
      iconColor: 'bg-[#38130D] text-[#FAF7F2]',
    },
    {
      time: '12:30 PM',
      tag: '(TENTATIVE)',
      title: 'Networking & Vidarbha Lunch',
      desc: 'Meet fellow developers, speakers and community members over regional cuisine.',
      icon: Utensils,
      iconColor: 'bg-[#E5A93C] text-[#180805]',
    },
    {
      time: '01:30 PM',
      tag: '(TENTATIVE)',
      title: 'Hands-on Workshops & Demos',
      desc: 'Explore real-world development workflows, Semantic Kernel, and cloud labs.',
      icon: Laptop,
      iconColor: 'bg-[#38130D] text-[#E5A93C]',
    },
    {
      time: '03:30 PM',
      tag: '(TENTATIVE)',
      title: 'Tarpa Community Circle & Closing',
      desc: 'Share ideas, celebrate community projects, and wrap up the conference day.',
      icon: Trophy,
      iconColor: 'bg-[#C84832] text-[#FAF7F2]',
    },
  ];

  return (
    <section id="schedule" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">

      {/* Decorative Warli Glyphs */}
      <div className="absolute top-16 right-16 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-24 right-10 text-[#FAF7F2]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 -left-6 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-20 -right-6 text-[#FAF7F2] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <span className="text-[#E5A93C] font-bold">🌾</span>
          <span>AMRAVATI FLOW</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">CENTRAL INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#180805]" />
          <span>PRPCEM CAMPUS</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          VIDARBHA DEVELOPERS
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase">
            1-DAY CONFERENCE
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            SCHEDULE &amp; TRACKS
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
        </div>
      </div>

      {/* Main Warli Showcase Card */}
      <div className="bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Warli Corner Ornaments */}
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
            <Calendar className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>PROGRAM OVERVIEW • DETAILS COMING SOON</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black font-sans uppercase tracking-tight text-[#FAF7F2] text-center mb-2 leading-tight">
          A DAY OF <span className="text-[#E5A93C]">LEARNING, BUILDING &amp; CONNECTION</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-sm md:text-[14px] text-center max-w-2xl mx-auto leading-relaxed mb-8">
          Explore the proposed outline for the conference day. Session times, speakers, and technical tracks will be confirmed in the official schedule.
        </p>

        {/* Timeline Schedule Container */}
        <div className="border-[2.5px] border-[#FAF7F2] rounded-[24px] bg-[#1E0905] shadow-[6px_6px_0px_0px_#120402] overflow-hidden">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#240B07] border-b border-[#FAF7F2]/20">
            {/* Left Pill Tab Attached to Top-Left */}
            <div className="bg-[#E5A93C] text-[#180805] font-mono font-bold text-[10px] sm:text-xs uppercase px-5 py-2.5 rounded-tl-[21px] rounded-br-2xl flex items-center gap-2 border-r-[2px] border-b-[2px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
              <Calendar className="w-3.5 h-3.5 text-[#180805]" />
              <span>PROPOSED ONE-DAY FLOW • SUBJECT TO CONFIRMATION</span>
            </div>

            {/* Right Status Badges */}
            <div className="flex items-center gap-2 px-4 py-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38130D] text-[#E5A93C] text-[10px] sm:text-[11px] font-mono font-bold border border-[#FAF7F2]/30">
                <Clock className="w-3.5 h-3.5" />
                <span>TIMINGS TBA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38130D] text-[#FAF7F2] text-[10px] sm:text-[11px] font-mono font-bold border border-[#FAF7F2]/30">
                <Users className="w-3.5 h-3.5" />
                <span>SPEAKERS TBA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38130D] text-[#C84832] text-[10px] sm:text-[11px] font-mono font-bold border border-[#FAF7F2]/30">
                <Layers className="w-3.5 h-3.5" />
                <span>TRACKS TBA</span>
              </span>
            </div>
          </div>

          {/* Timeline Rows List */}
          <div className="px-4 sm:px-6 py-2 relative">
            {/* Connected Vertical Timeline Line */}
            <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-8 w-[2px] bg-[#E5A93C]/40 hidden xs:block" />

            <div className="divide-y divide-[#FAF7F2]/10">
              {scheduleItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3.5 sm:py-4 transition-colors hover:bg-[#280D07]/60"
                  >
                    {/* Left: Timeline Dot + Time Pill + Icon + Title/Desc */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                      {/* Node on vertical line */}
                      <div className="w-3.5 h-3.5 rounded-full bg-[#E5A93C] ring-4 ring-[#1E0905] shrink-0 mt-2 sm:mt-0 relative z-10 hidden xs:block" />

                      {/* Time Pill */}
                      <div className="bg-[#280D07] border border-[#FAF7F2]/30 rounded-xl px-3 py-1.5 flex flex-col items-center justify-center shrink-0 min-w-[95px] sm:min-w-[105px]">
                        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-[#E5A93C]">
                          <Clock className="w-3.5 h-3.5 text-[#E5A93C]" />
                          <span>{item.time}</span>
                        </div>
                        <span className="text-[9px] text-[#FAF7F2]/60 font-mono uppercase tracking-tight mt-0.5">
                          {item.tag}
                        </span>
                      </div>

                      {/* Colored Square Icon */}
                      <div className={`w-11 h-11 rounded-2xl ${item.iconColor} border border-[#FAF7F2]/20 flex items-center justify-center shrink-0 shadow-sm`}>
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      {/* Title & Description */}
                      <div className="min-w-0 text-left">
                        <h4 className="text-xs sm:text-sm font-bold font-sans text-[#FAF7F2] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#FAF7F2]/75 font-sans leading-snug mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right: Warli Status Pill */}
                    <div className="shrink-0 self-start sm:self-center pl-14 sm:pl-0">
                      <span className="inline-block text-[11px] font-mono font-bold text-[#E5A93C] bg-[#38130D] px-5 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2]/40 uppercase tracking-wider shadow-sm cursor-default">
                        DRAFT
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncAgenda;
