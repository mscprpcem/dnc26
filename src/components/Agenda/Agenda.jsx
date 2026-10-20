import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Layers, Filter, Users, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { agendaSchedule } from '../../data/agenda.js';

export const Agenda = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: `All Sessions (${agendaSchedule.length})` },
    { id: 'track1', label: 'Track 1: Cloud & .NET' },
    { id: 'track2', label: 'Track 2: AI & Copilots' },
    { id: 'general', label: 'Keynote & General' },
  ];

  const filteredSchedule = agendaSchedule.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'track1') return item.isParallel || item.type === 'keynote';
    if (activeFilter === 'track2') return item.isParallel || item.type === 'keynote';
    if (activeFilter === 'general') return !item.isParallel;
    return true;
  });

  return (
    <section id="schedule" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Full-Day Schedule · 2 Dual Parallel Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Conference Agenda &amp; <span className="community-event-gradient-text">Technical Tracks</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/75 leading-relaxed">
            10 curated sessions featuring Microsoft MVPs and senior engineers covering .NET 11, Semantic Kernel, Azure OpenAI, .NET Aspire, and Native AOT.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-bold text-[#512BD4] uppercase flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeFilter === btn.id
                  ? 'bg-[#512BD4] text-white border-[#512BD4] shadow-sm'
                  : 'bg-white text-[#190649]/80 border-[#DCD5F6] hover:border-[#512BD4] hover:text-[#512BD4]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Conference Outline Flow Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#DCD5F6] shadow-lg p-3.5 xs:p-5 sm:p-8 md:p-10 mb-8 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 mb-6 border-b border-[#DCD5F6]/70 min-w-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[#512BD4] text-white flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-[#14053A] uppercase tracking-wider block leading-tight truncate">
                  Confirmed Full-Day Flow &amp; Parallel Breakouts
                </span>
                <span className="text-[11px] text-[#512BD4] font-semibold block truncate">PRPCEM Campus, Amravati · 09:00 AM - 05:30 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold">
                10 Sessions
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#E8F8F5] text-[#0E7A66] text-[11px] font-bold">
                2 Tracks
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {filteredSchedule.map((item) => {
              if (item.isParallel) {
                const showTrack1 = activeFilter === 'all' || activeFilter === 'track1';
                const showTrack2 = activeFilter === 'all' || activeFilter === 'track2';

                return (
                  <div key={item.id} className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFE] border-2 border-[#DCD5F6]">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCD5F6]/70 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#512BD4] px-3 py-1 rounded-lg">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                        <span className="text-xs font-bold text-[#14053A] uppercase">
                          {item.slotLabel || 'Parallel Technical Breakouts'}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#512BD4] bg-[#EEEAFB] px-2.5 py-0.5 rounded-full">
                        Choose Your Track
                      </span>
                    </div>

                    <div className={`grid grid-cols-1 ${showTrack1 && showTrack2 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                      {/* Track 1 Card */}
                      {showTrack1 && (
                        <div className="p-4 rounded-xl bg-white border border-[#512BD4]/30 shadow-xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#EEEAFB] text-[#512BD4]">
                                {item.track1.trackName}
                              </span>
                              <span className="text-[11px] text-[#190649]/60 flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#512BD4]" /> {item.track1.room}
                              </span>
                            </div>
                            <h4 className="font-bold text-sm sm:text-base text-[#14053A] mb-1">
                              {item.track1.title}
                            </h4>
                            <p className="text-xs text-[#512BD4] font-semibold mb-2">
                              Speaker: {item.track1.speaker} {item.track1.speakerRole ? `(${item.track1.speakerRole})` : ''}
                            </p>
                            <p className="text-xs text-[#190649]/70 leading-relaxed mb-3">
                              {item.track1.description || item.track1.desc}
                            </p>
                          </div>
                          <span className="inline-block self-start text-[10px] font-bold px-2 py-0.5 rounded bg-[#F4F2FC] text-[#512BD4]">
                            {item.track1.category}
                          </span>
                        </div>
                      )}

                      {/* Track 2 Card */}
                      {showTrack2 && (
                        <div className="p-4 rounded-xl bg-white border border-[#0E7A66]/30 shadow-xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#E8F8F5] text-[#0E7A66]">
                                {item.track2.trackName}
                              </span>
                              <span className="text-[11px] text-[#190649]/60 flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#0E7A66]" /> {item.track2.room}
                              </span>
                            </div>
                            <h4 className="font-bold text-sm sm:text-base text-[#14053A] mb-1">
                              {item.track2.title}
                            </h4>
                            <p className="text-xs text-[#0E7A66] font-semibold mb-2">
                              Speaker: {item.track2.speaker} {item.track2.speakerRole ? `(${item.track2.speakerRole})` : ''}
                            </p>
                            <p className="text-xs text-[#190649]/70 leading-relaxed mb-3">
                              {item.track2.description || item.track2.desc}
                            </p>
                          </div>
                          <span className="inline-block self-start text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F8F5] text-[#0E7A66]">
                            {item.track2.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              // Keynote or General Slot
              const sess = item.session || {};
              const category = sess.category || item.category || 'General';
              const speaker = sess.speaker || item.speaker;
              const speakerRole = sess.speakerRole || item.speakerRole;
              const room = sess.room || item.room || 'PRPCEM Main Hall';
              const title = sess.title || item.title;
              const description = sess.description || sess.desc || item.description || item.desc;

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-[#FBFBFE] border border-[#DCD5F6]/70 hover:border-[#512BD4]/40 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3 min-w-0">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#512BD4] bg-[#EEEAFB] px-3 py-1.5 rounded-lg shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#EEEAFB] text-[#512BD4]">
                          {category}
                        </span>
                        {speaker && (
                          <span className="text-xs text-[#512BD4] font-bold">
                            By {speaker} {speakerRole ? `(${speakerRole})` : ''}
                          </span>
                        )}
                        <span className="text-[11px] text-[#190649]/60">
                          • {room}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#14053A] leading-snug">
                        {title}
                      </h4>
                      {description && (
                        <p className="text-[11px] sm:text-xs text-[#190649]/70 leading-snug mt-0.5">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 self-start sm:self-center pl-0 sm:pl-2">
                    <span className="inline-block text-[10px] font-bold text-[#512BD4] bg-white px-2.5 py-1 rounded border border-[#DCD5F6] whitespace-nowrap">
                      {room}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Link CTA */}
        <div className="text-center px-2">
          <p className="text-xs text-[#190649]/75 mb-3">
            Want to participate or present at upcoming editions?
          </p>
          <a
            href="#register"
            className="dotnet-solid-btn-accent text-xs sm:text-sm py-2.5 px-4 sm:px-6 inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Register Delegate Interest</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Agenda;
