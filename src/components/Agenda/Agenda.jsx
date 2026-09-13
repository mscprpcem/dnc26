import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Layers, Bell } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Agenda = () => {
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
    <section id="schedule" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule & Tracks · Coming Soon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Agenda & Tracks <span className="community-event-gradient-text">To Be Announced (TBA)</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/75 leading-relaxed">
            Specific technical tracks, speaker slots, and session schedules are currently being curated. The high-level 1-day event flow is outlined below.
          </p>
        </div>

        {/* 1-Day Outline Flow Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#DCD5F6] shadow-lg p-5 sm:p-8 md:p-10 mb-8">
          <div className="flex items-center justify-between gap-3 pb-4 mb-6 border-b border-[#DCD5F6]/70">
            <div className="flex items-center gap-2.5">
              <img
                src="/mascot/dotnet-bot-pot.svg"
                alt=".NET Bot Schedule Guide"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain select-none"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#14053A] uppercase tracking-wider block leading-tight">
                  1-Day Flagship Conference Flow
                </span>
                <span className="text-[11px] text-[#512BD4] font-semibold">PRPCEM Campus, Amravati</span>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold">
              Tracks TBA
            </span>
          </div>

          <div className="space-y-4">
            {generalFlow.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-[#FBFBFE] border border-[#DCD5F6]/70 hover:border-[#512BD4]/40 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#512BD4] bg-[#EEEAFB] px-2.5 py-1 rounded-lg shrink-0">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold font-display text-[#14053A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#190649]/70 leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 pl-11 sm:pl-0">
                  <span className="inline-block text-[10px] font-semibold text-[#512BD4] bg-white px-2 py-0.5 rounded border border-[#DCD5F6]">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification CTA */}
        <div className="text-center">
          <p className="text-xs text-[#190649]/75 mb-3">
            Want to receive the full track breakdown and speaker schedule as soon as it launches?
          </p>
          <a
            href="#stay-connected"
            className="dotnet-solid-btn-accent text-xs sm:text-sm py-2 px-5 inline-flex items-center gap-1.5 shadow-xs"
          >
            <span>Follow Community For Track Announcements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Agenda;
