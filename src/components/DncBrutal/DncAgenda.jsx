import React, { useState } from 'react';
import { Calendar, Clock, Users, Mic, Code2, Utensils, Laptop, Trophy, MapPin, Layers, Bot, Cloud, CheckCircle2, ChevronRight } from 'lucide-react';
import { agendaSchedule } from '../../data/agenda.js';

export const DncAgenda = () => {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'track1' | 'track2' | 'general'

  const filteredSlots = agendaSchedule.filter((slot) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'track1') return slot.isParallel || slot.type === 'keynote';
    if (activeFilter === 'track2') return slot.isParallel || slot.type === 'keynote';
    if (activeFilter === 'general') return !slot.isParallel;
    return true;
  });

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
            FULL DAY SCHEDULE
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            CONFERENCE AGENDA &amp; BREAKOUT TRACKS
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
            <span>ANNUAL 2026 EDITION • PARALLEL SESSIONS AT PRPCEM</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black font-sans uppercase tracking-tight text-black text-center mb-2 leading-tight">
          A DAY OF <span className="text-[#512BD4]">INNOVATION, CLOUD &amp; AI</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-[14px] text-center max-w-2xl mx-auto leading-relaxed mb-6">
          Featuring dual parallel breakout tracks: Track 1 for Cloud Architecture &amp; High-Performance .NET, and Track 2 for Generative AI, Copilots &amp; Intelligent Workflows.
        </p>

        {/* Interactive Track Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-[2px] border-black transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-stone-50 shadow-[1px_1px_0px_0px_#000]'
            }`}
          >
            ALL SESSIONS (10)
          </button>
          <button
            onClick={() => setActiveFilter('track1')}
            className={`font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-[2px] border-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'track1'
                ? 'bg-[#00BDD6] text-black shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-stone-50 shadow-[1px_1px_0px_0px_#000]'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>TRACK 1: CLOUD &amp; .NET</span>
          </button>
          <button
            onClick={() => setActiveFilter('track2')}
            className={`font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-[2px] border-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'track2'
                ? 'bg-[#D600AA] text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-stone-50 shadow-[1px_1px_0px_0px_#000]'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>TRACK 2: AI &amp; COPILOTS</span>
          </button>
          <button
            onClick={() => setActiveFilter('general')}
            className={`font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-[2px] border-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'general'
                ? 'bg-[#FFE600] text-black shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-stone-50 shadow-[1px_1px_0px_0px_#000]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>KEYNOTE &amp; COMMUNITY</span>
          </button>
        </div>

        {/* Timeline Schedule Container */}
        <div className="space-y-4">
          {filteredSlots.map((slot) => {
            // Case 1: Non-parallel general or keynote session
            if (!slot.isParallel) {
              const sess = slot.session;
              const isKeynote = slot.type === 'keynote';
              const isBreak = slot.type === 'break';
              const isClosing = slot.type === 'closing';

              return (
                <div
                  key={slot.id}
                  className={`border-[2.5px] border-black rounded-2xl p-4 sm:p-5 transition-all ${
                    isKeynote
                      ? 'bg-[#F9F5FF] shadow-[4px_4px_0px_0px_#512BD4]'
                      : isBreak
                      ? 'bg-[#FFFBEB] shadow-[3px_3px_0px_0px_#D97706]'
                      : isClosing
                      ? 'bg-[#F0FDF4] shadow-[3px_3px_0px_0px_#16A34A]'
                      : 'bg-white shadow-[3px_3px_0px_0px_#000]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="bg-black text-white font-mono font-bold text-xs px-3 py-1 rounded-lg">
                        {slot.time}
                      </span>
                      <span className="bg-white border border-black/30 text-black font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#512BD4]" />
                        <span>{sess.room}</span>
                      </span>
                      {isKeynote && (
                        <span className="bg-[#512BD4] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                          ★ HEADLINE KEYNOTE
                        </span>
                      )}
                      {isBreak && (
                        <span className="bg-[#F59E0B] text-black font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                          ☕ REFRESHMENTS &amp; NETWORKING
                        </span>
                      )}
                      {isClosing && (
                        <span className="bg-[#10B981] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                          🏆 CEREMONY &amp; AWARDS
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-stone-600 sm:text-right">
                      {sess.speaker}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight text-black mb-1.5">
                    {sess.title}
                  </h3>
                  <p className="text-stone-700 font-sans text-xs sm:text-[13px] leading-relaxed">
                    {sess.description}
                  </p>
                </div>
              );
            }

            // Case 2: Parallel Breakout Tracks
            const showTrack1 = activeFilter === 'all' || activeFilter === 'track1';
            const showTrack2 = activeFilter === 'all' || activeFilter === 'track2';

            return (
              <div
                key={slot.id}
                className="border-[2.5px] border-black rounded-2xl p-4 sm:p-5 bg-white shadow-[4px_4px_0px_0px_#000]"
              >
                {/* Time & Slot Banner */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#512BD4] text-white font-mono font-bold text-xs px-3 py-1 rounded-lg">
                      {slot.time}
                    </span>
                    <span className="font-mono font-bold text-xs uppercase text-stone-700">
                      {slot.slotLabel}
                    </span>
                  </div>
                  <span className="bg-[#EEEAFB] text-[#512BD4] font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-purple-200">
                    PARALLEL BREAKOUT
                  </span>
                </div>

                {/* Dual Track Cards Grid */}
                <div className={`grid grid-cols-1 ${showTrack1 && showTrack2 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-3.5`}>
                  {/* Track 1 Card */}
                  {showTrack1 && (
                    <div className="bg-[#F0FBFC] border-[2px] border-black rounded-xl p-4 flex flex-col justify-between shadow-[2px_2px_0px_0px_#000]">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="bg-[#00BDD6] text-black font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
                            <Cloud className="w-3 h-3" />
                            <span>Track 1 · Cloud &amp; .NET</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold text-stone-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#00838F]" />
                            <span>{slot.track1.room}</span>
                          </span>
                        </div>
                        <h4 className="font-black font-sans text-sm sm:text-base text-black uppercase leading-snug mb-1.5">
                          {slot.track1.title}
                        </h4>
                        <p className="text-stone-700 font-sans text-xs leading-relaxed mb-3">
                          {slot.track1.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-stone-600">
                        <span className="font-bold text-[#00838F]">{slot.track1.category}</span>
                        <span>{slot.track1.speaker}</span>
                      </div>
                    </div>
                  )}

                  {/* Track 2 Card */}
                  {showTrack2 && (
                    <div className="bg-[#FDF2F8] border-[2px] border-black rounded-xl p-4 flex flex-col justify-between shadow-[2px_2px_0px_0px_#000]">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="bg-[#D600AA] text-white font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
                            <Bot className="w-3 h-3" />
                            <span>Track 2 · AI &amp; Innovation</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold text-stone-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#D600AA]" />
                            <span>{slot.track2.room}</span>
                          </span>
                        </div>
                        <h4 className="font-black font-sans text-sm sm:text-base text-black uppercase leading-snug mb-1.5">
                          {slot.track2.title}
                        </h4>
                        <p className="text-stone-700 font-sans text-xs leading-relaxed mb-3">
                          {slot.track2.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-stone-600">
                        <span className="font-bold text-[#D600AA]">{slot.track2.category}</span>
                        <span>{slot.track2.speaker}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Bottom Note */}
        <div className="mt-6 bg-[#FAF9FF] border-[1.5px] border-black/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#512BD4] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-xs text-stone-700 font-sans">
              <span className="font-bold text-black">Delegate Note: </span>
              All attendees have full freedom to move between Track 1 and Track 2 breakout halls based on topic interest.
            </p>
          </div>
          <span className="bg-white border border-black/30 text-[#512BD4] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xs shrink-0">
            PRPCEM AMRAVATI
          </span>
        </div>
      </div>
    </section>
  );
};

export default DncAgenda;
