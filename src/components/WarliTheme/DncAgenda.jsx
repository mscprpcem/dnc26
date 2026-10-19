import React, { useState } from 'react';
import { Calendar, Clock, Users, Mic, Code2, Utensils, Laptop, Trophy, MapPin, Layers, Sparkles, Filter } from 'lucide-react';
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';
import { agendaSchedule } from '../../data/agenda.js';

export const DncAgenda = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: `ALL SESSIONS (${agendaSchedule.length})` },
    { id: 'track1', label: 'TRACK 1: CLOUD & .NET' },
    { id: 'track2', label: 'TRACK 2: AI & COPILOTS' },
    { id: 'general', label: 'KEYNOTE & GENERAL' },
  ];

  const filteredSchedule = agendaSchedule.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'track1') return item.type === 'parallel' || item.track1;
    if (activeFilter === 'track2') return item.type === 'parallel' || item.track2;
    if (activeFilter === 'general') return item.type !== 'parallel';
    return true;
  });

  return (
    <section id="schedule" className="py-6 sm:py-10 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">
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
            FULL DAY SCHEDULE
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            2 DUAL PARALLEL TRACKS
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
      <div className="bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] w-full max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Warli Corner Ornaments */}
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
            <Calendar className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>SATURDAY • 10 LIVE SESSIONS • AUDITORIUM &amp; TECH LAB</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black font-sans uppercase tracking-tight text-[#FAF7F2] text-center mb-2 leading-tight">
          A DAY OF <span className="text-[#E5A93C]">LEARNING, CODE &amp; COMMUNITY</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-sm md:text-[14px] text-center max-w-2xl mx-auto leading-relaxed mb-6">
          From Microsoft MVP keynotes on .NET 11 and Semantic Kernel to deep-dive workshops on .NET Aspire, Native AOT, and AI agent architectures.
        </p>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="font-mono text-xs font-bold text-[#E5A93C] uppercase flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> FILTER:
          </span>
          {filterButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-xl border-2 transition-all ${
                activeFilter === btn.id
                  ? 'bg-[#E5A93C] text-[#180805] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#FAF7F2]'
                  : 'bg-[#1E0905] text-[#FAF7F2]/80 border-[#FAF7F2]/30 hover:border-[#E5A93C] hover:text-[#E5A93C]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Timeline Schedule Container */}
        <div className="border-[2.5px] border-[#FAF7F2] rounded-[24px] bg-[#1E0905] shadow-[6px_6px_0px_0px_#120402] overflow-hidden">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#240B07] border-b border-[#FAF7F2]/20 px-4 py-3">
            <div className="bg-[#E5A93C] text-[#180805] font-mono font-bold text-[10px] sm:text-xs uppercase px-4 py-1.5 rounded-xl border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#180805]" />
              <span>CONFIRMED TIMELINE • 09:00 AM - 05:30 PM IST</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38130D] text-[#E5A93C] text-[10px] sm:text-[11px] font-mono font-bold border border-[#FAF7F2]/30">
                <Clock className="w-3.5 h-3.5" />
                <span>8.5 HOURS</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38130D] text-[#FAF7F2] text-[10px] sm:text-[11px] font-mono font-bold border border-[#FAF7F2]/30">
                <Users className="w-3.5 h-3.5" />
                <span>12+ EXPERTS</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38130D] text-[#C84832] text-[10px] sm:text-[11px] font-mono font-bold border border-[#FAF7F2]/30">
                <Layers className="w-3.5 h-3.5" />
                <span>2 TRACKS</span>
              </span>
            </div>
          </div>

          {/* Timeline Rows List */}
          <div className="p-3 sm:p-5 space-y-4">
            {filteredSchedule.map((item) => {
              if (item.type === 'parallel') {
                return (
                  <div key={item.id} className="bg-[#280D07] border-[2px] border-[#FAF7F2]/60 rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#120402]">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#FAF7F2]/20 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#E5A93C] text-[#180805] font-mono font-black text-xs px-3 py-1 rounded-lg border border-[#FAF7F2]">
                          {item.time}
                        </span>
                        <span className="font-mono text-xs text-[#FAF7F2]/80 uppercase">
                          PARALLEL BREAKOUT SESSIONS
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#E5A93C] bg-[#38130D] px-2.5 py-0.5 rounded border border-[#FAF7F2]/30">
                        CHOOSE YOUR TRACK
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Track 1 */}
                      <div className="bg-[#1A0603] border-2 border-[#E5A93C]/50 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#E5A93C] text-[#180805]">
                              {item.track1.trackName}
                            </span>
                            <span className="font-mono text-[10px] text-[#FAF7F2]/70 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#E5A93C]" /> {item.track1.room}
                            </span>
                          </div>
                          <h4 className="font-sans font-bold text-sm sm:text-base text-[#FAF7F2] mb-1">
                            {item.track1.title}
                          </h4>
                          <p className="font-mono text-xs text-[#E5A93C] font-semibold mb-2">
                            Speaker: {item.track1.speaker}
                          </p>
                          <p className="font-sans text-xs text-[#FAF7F2]/80 leading-relaxed mb-3">
                            {item.track1.desc}
                          </p>
                        </div>
                        <span className="inline-block self-start font-mono text-[10px] px-2 py-0.5 rounded bg-[#38130D] text-[#E5A93C] border border-[#FAF7F2]/20">
                          {item.track1.category}
                        </span>
                      </div>

                      {/* Track 2 */}
                      <div className="bg-[#1A0603] border-2 border-[#C84832]/60 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#C84832] text-[#FAF7F2]">
                              {item.track2.trackName}
                            </span>
                            <span className="font-mono text-[10px] text-[#FAF7F2]/70 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#E5A93C]" /> {item.track2.room}
                            </span>
                          </div>
                          <h4 className="font-sans font-bold text-sm sm:text-base text-[#FAF7F2] mb-1">
                            {item.track2.title}
                          </h4>
                          <p className="font-mono text-xs text-[#E5A93C] font-semibold mb-2">
                            Speaker: {item.track2.speaker}
                          </p>
                          <p className="font-sans text-xs text-[#FAF7F2]/80 leading-relaxed mb-3">
                            {item.track2.desc}
                          </p>
                        </div>
                        <span className="inline-block self-start font-mono text-[10px] px-2 py-0.5 rounded bg-[#38130D] text-[#E5A93C] border border-[#FAF7F2]/20">
                          {item.track2.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }

              // General/Keynote Slot
              return (
                <div
                  key={item.id}
                  className="bg-[#240B07] border-2 border-[#FAF7F2]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-[#E5A93C]"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                    <div className="bg-[#1E0905] border border-[#FAF7F2]/30 rounded-xl px-3 py-2 flex flex-col items-center justify-center shrink-0 min-w-[95px]">
                      <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#E5A93C]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>
                      <span className="text-[9px] text-[#FAF7F2]/60 font-mono uppercase tracking-tight mt-0.5">
                        {item.room}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#38130D] text-[#E5A93C] border border-[#FAF7F2]/20">
                          {item.category}
                        </span>
                        {item.speaker && (
                          <span className="font-mono text-xs text-[#E5A93C] font-bold">
                            By {item.speaker}
                          </span>
                        )}
                      </div>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#FAF7F2] leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-[#FAF7F2]/75 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 self-start sm:self-center pl-12 sm:pl-0">
                    <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold text-[#180805] bg-[#E5A93C] px-3 py-1 rounded-full border border-[#FAF7F2] uppercase shadow-sm">
                      AUDITORIUM
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncAgenda;
