import React from 'react';
import { Calendar, Clock, Users, Mic, Code2, Utensils, Laptop, Trophy, MapPin, Layers } from 'lucide-react';

export const DncAgenda = () => {
  const scheduleItems = [
    {
      time: '09:00 AM',
      tag: '(TENTATIVE)',
      title: 'Registration & Welcome',
      desc: 'Check in, collect your badge and connect with attendees.',
      icon: Users,
      iconColor: 'bg-[#EEEAFB] text-[#512BD4]',
    },
    {
      time: '10:00 AM',
      tag: '(TENTATIVE)',
      title: 'Opening Remarks & Keynote',
      desc: 'Welcome to .NET Conf Amravati and a look at modern .NET, AI and cloud.',
      icon: Mic,
      iconColor: 'bg-[#FCE7F3] text-[#D600AA]',
    },
    {
      time: '11:00 AM',
      tag: '(TENTATIVE)',
      title: 'Technical Sessions',
      desc: 'Practical talks across .NET, Azure, AI and developer tooling.',
      icon: Code2,
      iconColor: 'bg-[#E0F7FA] text-[#00838F]',
    },
    {
      time: '12:30 PM',
      tag: '(TENTATIVE)',
      title: 'Networking Lunch',
      desc: 'Meet fellow developers, speakers and community members.',
      icon: Utensils,
      iconColor: 'bg-[#E6FFFA] text-[#0D9488]',
    },
    {
      time: '01:30 PM',
      tag: '(TENTATIVE)',
      title: 'Hands-on Workshops & Demos',
      desc: 'Explore real-world development workflows and emerging technologies.',
      icon: Laptop,
      iconColor: 'bg-[#EEEAFB] text-[#512BD4]',
    },
    {
      time: '03:30 PM',
      tag: '(TENTATIVE)',
      title: 'Community Showcase & Closing',
      desc: 'Share ideas, connect with the community and wrap up the day.',
      icon: Trophy,
      iconColor: 'bg-[#FEF3C7] text-[#D97706]',
    },
  ];

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
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 z-10">
          <span className="bg-[#00E5FF] text-black text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            1-DAY CONFERENCE
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            SCHEDULE & TRACKS
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
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] max-w-5xl mx-auto">
        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-white text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>PROGRAM OVERVIEW • DETAILS COMING SOON</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black font-sans uppercase tracking-tight text-black text-center mb-2 leading-tight">
          A DAY OF <span className="text-[#512BD4]">LEARNING, BUILDING & CONNECTION</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-[14px] text-center max-w-2xl mx-auto leading-relaxed mb-8">
          Explore a draft outline of the conference day. Session times, speakers and technical tracks will be confirmed in the official programme.
        </p>

        {/* Timeline Schedule Container with Clean Flat Rows */}
        <div className="border-[2.5px] border-black rounded-[24px] bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white">
            {/* Left Pill Tab Attached to Top-Left */}
            <div className="bg-[#512BD4] text-white font-mono font-bold text-[10px] sm:text-xs uppercase px-5 py-2.5 rounded-tl-[21px] rounded-br-2xl flex items-center gap-2 border-r-[2px] border-b-[2px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>PROPOSED ONE-DAY FLOW • SUBJECT TO CONFIRMATION</span>
            </div>

            {/* Right Status Badges */}
            <div className="flex items-center gap-2 px-4 py-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[10px] sm:text-[11px] font-mono font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>TIMINGS TBA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#D600AA] text-[10px] sm:text-[11px] font-mono font-bold">
                <Users className="w-3.5 h-3.5" />
                <span>SPEAKERS TBA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F7FA] text-[#00838F] text-[10px] sm:text-[11px] font-mono font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>TRACKS TBA</span>
              </span>
            </div>
          </div>

          {/* Timeline Rows List */}
          <div className="px-4 sm:px-6 py-2 relative">
            {/* Connected Vertical Timeline Line */}
            <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-8 w-[2px] bg-[#512BD4]/40 hidden xs:block" />

            <div className="divide-y divide-stone-100">
              {scheduleItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3.5 sm:py-4 transition-colors hover:bg-stone-50/50"
                  >
                    {/* Left: Timeline Dot + Time Pill + Icon + Title/Desc */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                      {/* Purple Circle Node on vertical line */}
                      <div className="w-3.5 h-3.5 rounded-full bg-[#512BD4] ring-4 ring-white shrink-0 mt-2 sm:mt-0 relative z-10 hidden xs:block" />

                      {/* Time Pill */}
                      <div className="bg-[#FAF9FF] border border-black/15 rounded-xl px-3 py-1.5 flex flex-col items-center justify-center shrink-0 min-w-[95px] sm:min-w-[105px]">
                        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4]">
                          <Clock className="w-3.5 h-3.5 text-[#512BD4]" />
                          <span>{item.time}</span>
                        </div>
                        <span className="text-[9px] text-stone-500 font-mono uppercase tracking-tight mt-0.5">
                          {item.tag}
                        </span>
                      </div>

                      {/* Colored Square Icon */}
                      <div className={`w-11 h-11 rounded-2xl ${item.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      {/* Title & Description */}
                      <div className="min-w-0 text-left">
                        <h4 className="text-xs sm:text-sm font-bold font-sans text-black leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-500 font-sans leading-snug mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right: Purple Border DRAFT Pill */}
                    <div className="shrink-0 self-start sm:self-center pl-14 sm:pl-0">
                      <span className="inline-block text-[11px] font-mono font-bold text-[#512BD4] bg-white px-5 py-1.5 rounded-full border-[1.5px] border-[#512BD4] uppercase tracking-wider shadow-sm hover:bg-[#EEEAFB] cursor-default">
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
