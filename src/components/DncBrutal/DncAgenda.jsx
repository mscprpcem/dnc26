import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { agendaSchedule } from '../../data/agenda.js';
import DncSignpost from './DncSignpost.jsx';

export const DncAgenda = () => {
  const [filter, setFilter] = useState('all');

  const filteredSchedule = agendaSchedule.filter((slot) => {
    if (filter === 'all') return true;
    if (filter === 'keynote') return slot.type === 'keynote' || slot.type === 'community' || slot.type === 'closing';
    if (filter === 'cloud') return slot.track1 || slot.session?.category === 'Cloud';
    if (filter === 'ai') return slot.track2 || slot.session?.category === 'AI';
    return true;
  });

  return (
    <section id="dnc-agenda" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="1-DAY SCHEDULE OUTLINE" 
        badge="TIMELINE"
        theme="purple"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b-[2px] sm:border-b-[2.5px] border-black/10">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight">
              Conference Day Schedule
            </h3>
            <p className="text-stone-600 font-sans text-xs sm:text-sm mt-0.5 sm:mt-1">
              P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati
            </p>
          </div>

          {/* Filter Pills with clean mobile scrolling */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 max-w-full no-scrollbar">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl border-[2px] border-black text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black'
              }`}
            >
              ALL SESSIONS
            </button>

            <button
              onClick={() => setFilter('keynote')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl border-[2px] border-black text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                filter === 'keynote'
                  ? 'bg-[#D600AA] text-white shadow-[2px_2px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black'
              }`}
            >
              KEYNOTE
            </button>

            <button
              onClick={() => setFilter('cloud')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl border-[2px] border-black text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                filter === 'cloud'
                  ? 'bg-[#00BDD6] text-black shadow-[2px_2px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black'
              }`}
            >
              CLOUD TRACK
            </button>

            <button
              onClick={() => setFilter('ai')}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl border-[2px] border-black text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                filter === 'ai'
                  ? 'bg-[#FFD13B] text-black shadow-[2px_2px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black'
              }`}
            >
              AI TRACK
            </button>
          </div>
        </div>

        {/* Timeline Slots */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
          {filteredSchedule.map((slot) => {
            // Check if slot has parallel tracks
            if (slot.isParallel) {
              return (
                <div
                  key={slot.id}
                  className="bg-[#FAF9FF] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot.time}</span>
                    <span className="bg-[#EEEAFB] text-[#512BD4] px-2 py-0.5 rounded border border-[#512BD4]/30 uppercase text-[10px]">
                      PARALLEL SESSIONS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Track 1 */}
                    <div className="bg-white border-[2px] border-black rounded-xl p-3.5 sm:p-4 shadow-[2px_2px_0px_0px_#000]">
                      <div className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                        {slot.track1.trackName} • {slot.track1.room}
                      </div>
                      <h4 className="font-black font-sans text-sm sm:text-base text-black mt-1">
                        {slot.track1.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 font-sans">
                        {slot.track1.description}
                      </p>
                    </div>

                    {/* Track 2 */}
                    <div className="bg-white border-[2px] border-black rounded-xl p-3.5 sm:p-4 shadow-[2px_2px_0px_0px_#000]">
                      <div className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                        {slot.track2.trackName} • {slot.track2.room}
                      </div>
                      <h4 className="font-black font-sans text-sm sm:text-base text-black mt-1">
                        {slot.track2.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 font-sans">
                        {slot.track2.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Single Session Slot
            const sess = slot.session;
            return (
              <div
                key={slot.id}
                className="bg-white hover:bg-[#FAF8FF] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-3.5 sm:p-5 shadow-[2.5px_2.5px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Time badge */}
                  <div className="bg-[#EEEAFB] border-[1.5px] sm:border-[2px] border-black rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-center min-w-[85px] sm:min-w-[105px] shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
                    <div className="text-[11px] sm:text-xs font-mono font-black text-[#512BD4]">
                      {slot.time}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-stone-600 uppercase">
                      {sess?.category || 'General'}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-black font-sans text-sm sm:text-base md:text-lg text-[#14053A]">
                      {sess?.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 font-sans max-w-2xl">
                      {sess?.description}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] sm:text-xs font-mono font-bold text-stone-600 bg-stone-100 border border-black/20 px-2.5 sm:px-3 py-1 rounded-lg shrink-0 self-start sm:self-center">
                  📍 {sess?.room}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DncAgenda;
