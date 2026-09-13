import React from 'react';
import { Award, ArrowRight, Clock, MapPin, UserCheck } from 'lucide-react';

const sessionBlocks = [
  {
    id: 'block-1',
    label: 'Morning Technical Block A',
    description: 'Deep-dive developer sessions exploring modern platform architecture and tooling.',
    status: 'Track & Speaker TBA',
  },
  {
    id: 'block-2',
    label: 'Morning Technical Block B',
    description: 'Enterprise cloud services, performance optimizations, and intelligent applications.',
    status: 'Track & Speaker TBA',
  },
  {
    id: 'block-3',
    label: 'Afternoon Technical Block A',
    description: 'Hands-on developer workshops, distributed systems, and real-world code demos.',
    status: 'Track & Speaker TBA',
  },
  {
    id: 'block-4',
    label: 'Afternoon Technical Block B',
    description: 'Practical deployment labs, interactive developer panel, and audience Q&A.',
    status: 'Track & Speaker TBA',
  },
];

export const Speakers = () => {
  return (
    <section id="speakers" className="w-full py-10 sm:py-14 md:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Award className="w-3 h-3" />
            <span>Speaker Lineup & Tracks · Coming Soon</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-2.5">
            Speakers & Tracks <span className="text-gradient-magenta">To Be Announced (TBA)</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#190649]/75 leading-relaxed">
            Speaker selection is currently underway via Call for Speakers. All confirmed speakers, session titles, and technical tracks will be officially announced soon.
          </p>
        </div>

        {/* Announced Soon Session Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {sessionBlocks.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-xs rounded-xl p-5 border border-[#DCD5F6] shadow-xs flex flex-col justify-between hover:border-[#9780E5] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EEEAFB] flex items-center justify-center p-1 border border-[#DCD5F6]/70">
                    <img src="/mascot/bot_head.png" alt=".NET Bot" className="w-6 h-6 object-contain select-none" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-sm font-bold font-display text-[#14053A] mb-2 leading-snug">
                  {item.label}
                </h3>

                <p className="text-xs text-[#190649]/70 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCD5F6]/60">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#190649]/80">
                  <span className="inline-flex items-center gap-1.5 text-[#512BD4]">
                    <span className="w-2 h-2 rounded-full bg-[#D600AA] animate-pulse" />
                    {item.status}
                  </span>
                  <span className="text-gray-400 text-[10px]">PRPCEM</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice banner */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#190649]/75 mb-3">
            Official speaker reveals and track announcements will be published across our community channels.
          </p>
          <a
            href="#stay-connected"
            className="dotnet-solid-btn-accent text-xs py-2 px-5 inline-flex items-center gap-1.5 shadow-xs"
          >
            <span>Follow Community For Speaker Announcements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Speakers;
