import React from 'react';
import { ArrowRight, Mic } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const CallForSpeakers = () => {
  return (
    <section id="cfp" className="w-full py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dotnet-content-region p-6 sm:p-8 md:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
                <Mic className="w-3 h-3" />
                <span>Speaker Submissions · Coming Soon</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight leading-snug">
                <span className="community-event-gradient-text">
                  Call For Speakers — Coming Soon
                </span>
              </h2>
            </div>

            {/* Right Copy & Button */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <p className="text-sm sm:text-base text-[#190649]/80 leading-relaxed">
                Have a .NET, Azure, C#, or AI breakthrough to share with the developer community? Official speaker submissions and CFP guidelines for .NET Conf 2026 Amravati will be announced soon.
              </p>
              <a
                href="#stay-connected"
                className="dotnet-solid-btn-accent shrink-0 text-xs sm:text-sm py-2.5 px-5 shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Stay Tuned For CFP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
