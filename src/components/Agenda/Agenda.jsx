import React, { useState } from 'react';
import { Clock, MapPin, User, Sparkles, Layers, Split, Coffee, Award, Users } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Badge } from '../ui/Badge.jsx';
import { agendaSchedule } from '../../data/agenda.js';

export const Agenda = () => {
  const [selectedTrackFilter, setSelectedTrackFilter] = useState('both'); // 'both' | 'track1' | 'track2'

  const getCategoryBadgeVariant = (category) => {
    switch (category) {
      case '.NET':
      case 'Keynote':
        return 'purple';
      case 'Azure':
      case 'Cloud':
        return 'blue';
      default:
        return 'neutral';
    }
  };

  return (
    <section id="agenda" className="py-20 lg:py-28 bg-[#F7F7F8] border-b border-[#E5E7EB]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label="CONFERENCE AGENDA"
            title="A day built for learning."
            description="Explore our multi-track schedule. Parallel sessions allow you to choose between Core .NET Architecture and AI/Cloud Deep Dives."
            className="mb-0"
          />

          {/* Track View Filter Toggle */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs self-start lg:self-auto shrink-0">
            <button
              onClick={() => setSelectedTrackFilter('both')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedTrackFilter === 'both'
                  ? 'bg-[#512BD4] text-white shadow-xs'
                  : 'text-[#5F6368] hover:text-[#171717]'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Parallel Tracks (Side-by-Side)</span>
            </button>
            <button
              onClick={() => setSelectedTrackFilter('track1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedTrackFilter === 'track1'
                  ? 'bg-[#512BD4] text-white shadow-xs'
                  : 'text-[#5F6368] hover:text-[#171717]'
              }`}
            >
              Track 1 (.NET)
            </button>
            <button
              onClick={() => setSelectedTrackFilter('track2')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedTrackFilter === 'track2'
                  ? 'bg-[#512BD4] text-white shadow-xs'
                  : 'text-[#5F6368] hover:text-[#171717]'
              }`}
            >
              Track 2 (AI & Cloud)
            </button>
          </div>
        </div>

        {/* Track Column Header Guide (Visible in Side-by-Side Mode) */}
        {selectedTrackFilter === 'both' && (
          <div className="hidden lg:grid grid-cols-12 gap-4 mb-4 text-xs font-mono font-bold tracking-wider uppercase">
            <div className="col-span-2 text-[#5F6368] flex items-center gap-1.5 pl-2">
              <Clock className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Time Slot</span>
            </div>
            <div className="col-span-5 p-3 rounded-lg bg-white border border-[#DDD4FA] text-[#512BD4] flex items-center justify-between shadow-2xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#512BD4]" />
                TRACK 1: Cloud & .NET Architecture
              </span>
              <span className="text-[10px] text-[#5F6368] font-sans font-normal">Auditorium</span>
            </div>
            <div className="col-span-5 p-3 rounded-lg bg-white border border-[#C7E0F4] text-[#0078D4] flex items-center justify-between shadow-2xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0078D4]" />
                TRACK 2: AI & Cloud Innovation
              </span>
              <span className="text-[10px] text-[#5F6368] font-sans font-normal">Tech Lab B</span>
            </div>
          </div>
        )}

        {/* Schedule Slots */}
        <div className="space-y-4">
          {agendaSchedule.map((slot) => {
            // Case 1: All-Hands / Single Session (Keynote, Registration, Lunch, Panel, Closing)
            if (!slot.isParallel) {
              const isKeynote = slot.type === 'keynote';
              const isBreak = slot.type === 'break';

              return (
                <div
                  key={slot.id}
                  className={`conf-card p-5 sm:p-6 transition-all duration-200 ${
                    isKeynote
                      ? 'bg-linear-to-r from-white via-[#F5F2FE]/40 to-white border-2 border-[#DDD4FA] shadow-md'
                      : isBreak
                      ? 'bg-[#F7F7F8]/80 border-dashed border-[#D1D5DB]'
                      : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Time & Session Type */}
                    <div className="md:w-48 shrink-0 flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#512BD4] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#512BD4]" />
                        {slot.time}
                      </span>
                      <Badge variant={getCategoryBadgeVariant(slot.session.category)} size="sm">
                        {slot.session.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {isKeynote && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#512BD4] text-white flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            KEYNOTE
                          </span>
                        )}
                        {isBreak && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-amber-100 text-amber-800 flex items-center gap-1">
                            <Coffee className="w-3 h-3" />
                            NETWORKING & LUNCH
                          </span>
                        )}
                        <h3 className="text-base sm:text-lg font-bold text-[#171717] leading-snug">
                          {slot.session.title}
                        </h3>
                      </div>

                      {slot.session.speaker && (
                        <div className="flex items-center gap-1.5 text-xs text-[#5F6368] mt-1.5">
                          <User className="w-3.5 h-3.5 text-[#8A8F98]" />
                          <span className="font-semibold text-[#171717]">
                            {slot.session.speaker}
                          </span>
                          {slot.session.speakerRole && (
                            <span className="text-[#5F6368]">· {slot.session.speakerRole}</span>
                          )}
                        </div>
                      )}

                      {slot.session.description && (
                        <p className="text-xs text-[#5F6368] mt-2 leading-relaxed max-w-3xl">
                          {slot.session.description}
                        </p>
                      )}
                    </div>

                    {/* Room Location */}
                    {slot.session.room && (
                      <div className="md:text-right shrink-0">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#5F6368] bg-[#F7F7F8] px-3 py-1 rounded-md border border-[#E5E7EB]">
                          <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
                          <span>{slot.session.room}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            // Case 2: Parallel Tracks (Displayed Side-by-Side!)
            return (
              <div
                key={slot.id}
                className="conf-card p-5 sm:p-6 bg-white border border-[#E5E7EB] shadow-xs"
              >
                {/* Time Indicator & Slot Banner */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E5E7EB]/80">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#512BD4] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#512BD4]" />
                      {slot.time}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F5F2FE] text-[#512BD4] border border-[#DDD4FA] flex items-center gap-1">
                      <Split className="w-3 h-3" />
                      {slot.slotLabel}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#8A8F98] font-mono">
                    2 Parallel Sessions Active
                  </span>
                </div>

                {/* Side-by-Side Parallel Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Track 1 Session */}
                  {(selectedTrackFilter === 'both' || selectedTrackFilter === 'track1') && (
                    <div
                      className={`p-4 sm:p-5 rounded-xl border transition-all flex flex-col justify-between ${
                        selectedTrackFilter === 'track1'
                          ? 'border-[#512BD4] bg-white ring-2 ring-[#512BD4]/10'
                          : 'border-[#DDD4FA]/80 bg-[#FAF9FE] hover:bg-white hover:border-[#512BD4]'
                      }`}
                    >
                      <div>
                        {/* Track Header */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[11px] font-mono font-bold text-[#512BD4] uppercase tracking-wide flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#512BD4]" />
                            {slot.track1.trackName}
                          </span>
                          <Badge variant={getCategoryBadgeVariant(slot.track1.category)} size="sm">
                            {slot.track1.category}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-[#171717] leading-snug">
                          {slot.track1.title}
                        </h4>

                        {/* Speaker */}
                        <div className="flex items-center gap-1.5 text-xs text-[#5F6368] mt-2">
                          <User className="w-3.5 h-3.5 text-[#512BD4]" />
                          <span className="font-semibold text-[#171717]">
                            {slot.track1.speaker}
                          </span>
                          <span className="text-[#8A8F98]">· {slot.track1.speakerRole}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                          {slot.track1.description}
                        </p>
                      </div>

                      {/* Location Room */}
                      <div className="mt-4 pt-3 border-t border-[#DDD4FA]/60 flex items-center justify-between text-xs text-[#5F6368]">
                        <span className="flex items-center gap-1 text-[11px]">
                          <MapPin className="w-3 h-3 text-[#512BD4]" />
                          {slot.track1.room}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-[#512BD4]">
                          AUDITORIUM
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Track 2 Session */}
                  {(selectedTrackFilter === 'both' || selectedTrackFilter === 'track2') && (
                    <div
                      className={`p-4 sm:p-5 rounded-xl border transition-all flex flex-col justify-between ${
                        selectedTrackFilter === 'track2'
                          ? 'border-[#0078D4] bg-white ring-2 ring-[#0078D4]/10'
                          : 'border-[#C7E0F4]/80 bg-[#F5F9FD] hover:bg-white hover:border-[#0078D4]'
                      }`}
                    >
                      <div>
                        {/* Track Header */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[11px] font-mono font-bold text-[#0078D4] uppercase tracking-wide flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#0078D4]" />
                            {slot.track2.trackName}
                          </span>
                          <Badge variant={getCategoryBadgeVariant(slot.track2.category)} size="sm">
                            {slot.track2.category}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-[#171717] leading-snug">
                          {slot.track2.title}
                        </h4>

                        {/* Speaker */}
                        <div className="flex items-center gap-1.5 text-xs text-[#5F6368] mt-2">
                          <User className="w-3.5 h-3.5 text-[#0078D4]" />
                          <span className="font-semibold text-[#171717]">
                            {slot.track2.speaker}
                          </span>
                          <span className="text-[#8A8F98]">· {slot.track2.speakerRole}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                          {slot.track2.description}
                        </p>
                      </div>

                      {/* Location Room */}
                      <div className="mt-4 pt-3 border-t border-[#C7E0F4]/60 flex items-center justify-between text-xs text-[#5F6368]">
                        <span className="flex items-center gap-1 text-[11px]">
                          <MapPin className="w-3 h-3 text-[#0078D4]" />
                          {slot.track2.room}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-[#0078D4]">
                          TECH LAB B
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Footer Note */}
        <div className="mt-8 text-center text-xs text-[#5F6368]">
          Attendees may freely move between Track 1 (Swami Vivekananda Auditorium) and Track 2 (Tech Lab B) during parallel session intervals.
        </div>
      </Container>
    </section>
  );
};

export default Agenda;
