import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';
import { scrollToSection } from '../../utils/sectionRouter.js';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncAgenda = () => {
  const generalFlow = [
    {
      time: '09:00 AM',
      title: 'Attendee Check-In & Welcome Coffee',
      desc: 'Credential pickup, conference kits, and morning networking at PRPCEM Main Atrium.',
      status: 'Confirmed Flow',
    },
    {
      time: '10:00 AM',
      title: 'Inaugural Ceremony & Opening Keynote',
      desc: 'Official welcome remarks by MSC PRPCEM dignitaries and headline keynote address.',
      status: 'Speaker & Topic TBA',
    },
    {
      time: '11:30 AM',
      title: 'Technical Deep-Dive Track Sessions',
      desc: 'Parallel breakout sessions covering modern .NET, cloud architectures, and AI engineering.',
      status: 'Tracks Coming Soon',
    },
    {
      time: '01:00 PM',
      title: 'Networking Luncheon & Project Expo',
      desc: 'Complimentary lunch buffet, student project showcase, and mentor networking.',
      status: 'Confirmed Flow',
    },
    {
      time: '02:00 PM',
      title: 'Afternoon Technical Sessions & Hands-on Labs',
      desc: 'Specialized developer workshops, code walkthroughs, and practical labs.',
      status: 'Tracks Coming Soon',
    },
    {
      time: '04:00 PM',
      title: 'Community Panel, Awards & Valedictory',
      desc: 'Industry panel discussion, live quiz prizes, recognition, and official group photo.',
      status: 'Confirmed Flow',
    },
  ];

  return (
    <section id="schedule" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="05"
        leftTag="TRACKS"
        leftBadgeText="⏰ 1-DAY FLOW"
        leftBadgeColor="bg-[#00BDD6] text-black"
        leftSub="TIMINGS CONFIRMED"
        rightIndex="6+"
        rightTag="SESSIONS"
        rightBadgeText="HANDS-ON & LABS"
        rightBadgeColor="bg-[#EEEAFB] text-[#512BD4]"
        rightSub="FULL PROGRAM"
      />
      {/* Signpost */}
      <DncSignpost 
        title="SCHEDULE & TRACKS (TBA)" 
        badge="1-DAY OUTLINE FLOW"
        theme="purple"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Schedule & Tracks · Coming Soon</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2 sm:mb-3 leading-tight">
            Agenda & Tracks To Be Announced (TBA)
          </h3>

          <p className="text-stone-700 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
            Specific technical tracks, speaker slots, and session schedules are currently being curated. The high-level 1-day event flow is outlined below.
          </p>
        </div>

        {/* 1-Day Outline Flow Card with Pot Mascot */}
        <div className="bg-[#FAF8FF] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-[3px_3px_0px_0px_#000]">
          
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 mb-4 border-b-[1.5px] border-black/15">
            <div className="flex items-center gap-2.5">
              <img
                src="/mascot/dotnet-bot-pot.svg"
                alt=".NET Bot Schedule Guide"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none"
              />
              <div>
                <span className="text-xs sm:text-sm font-black font-sans uppercase text-[#14053A] block leading-tight">
                  1-Day Flagship Conference Flow
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#512BD4] font-mono font-bold block">
                  PRPCEM Campus, Amravati
                </span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black text-[10px] sm:text-[11px] font-mono font-bold shadow-[1px_1px_0px_0px_#000]">
              Tracks TBA
            </span>
          </div>

          {/* Timeline Slots */}
          <div className="space-y-3">
            {generalFlow.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white border-[1.5px] sm:border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] bg-[#EEEAFB] border border-black/30 px-2.5 py-1 rounded-lg shrink-0">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </span>
                  <div className="min-w-0 text-left">
                    <h4 className="text-xs sm:text-sm font-bold font-sans text-[#14053A] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-600 font-sans leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold text-[#512BD4] bg-[#FAF8FF] px-2.5 py-1 rounded-lg border border-black/30 shadow-[1px_1px_0px_0px_#000] whitespace-nowrap">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification CTA */}
        <div className="text-center px-2">
          <p className="text-xs sm:text-sm text-stone-700 font-sans mb-3">
            Want to receive the full track breakdown and speaker schedule as soon as it launches?
          </p>
          <a
            href="/community"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('/community');
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
          >
            <span>FOLLOW COMMUNITY FOR TRACK ANNOUNCEMENTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default DncAgenda;
