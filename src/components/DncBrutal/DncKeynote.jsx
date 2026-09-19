import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';

export const DncKeynote = () => {
  return (
    <section id="dnc-keynote" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="HEADLINE KEYNOTE SPOTLIGHT" 
        badge="FEATURED ADDRESS"
        theme="magenta"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
        {/* Floating badge */}
        <div className="absolute top-4 right-4 bg-[#D600AA] text-white font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] hidden sm:block">
          MAIN STAGE • INAUGURAL SESSION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Speaker Silhouette Frame */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#FDF0FA] border-[2.5px] sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#D600AA] sm:shadow-[6px_6px_0px_0px_#D600AA] flex flex-col items-center justify-center p-4 sm:p-6 text-center group">
              {/* Silhouette Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D600AA] border-[2px] border-black flex items-center justify-center text-white text-3xl sm:text-4xl shadow-[2.5px_2.5px_0px_0px_#000] mb-2.5 sm:mb-3">
                🎙️
              </div>
              <div className="font-black font-sans text-xs sm:text-sm uppercase text-black">
                Headline Speaker
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#D600AA] mt-0.5">
                Announced Soon
              </div>
            </div>
          </div>

          {/* Session Details */}
          <div className="md:col-span-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE OPENING TECHNICAL ADDRESS</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2.5 sm:mb-3">
              Building Next-Gen Intelligent Applications with .NET & AI
            </h3>

            <p className="text-stone-800 font-sans text-sm sm:text-base leading-relaxed mb-4">
              The flagship technical roadmap exploring modern .NET runtime capabilities, intelligent cloud copilot architectures, and production developer tools across the global Microsoft developer ecosystem.
            </p>

            {/* Session Highlights */}
            <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
              <span className="bg-[#FAF8FF] border-[1.5px] border-black rounded-xl px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] shadow-[1.5px_1.5px_0px_0px_#000]">
                ⏱️ 60 MIN DEEP DIVE
              </span>
              <span className="bg-[#FAF8FF] border-[1.5px] border-black rounded-xl px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] shadow-[1.5px_1.5px_0px_0px_#000]">
                📍 PRPCEM MAIN AUDITORIUM
              </span>
              <span className="bg-[#FAF8FF] border-[1.5px] border-black rounded-xl px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] shadow-[1.5px_1.5px_0px_0px_#000]">
                🔴 LIVE CODING & ARCHITECTURE
              </span>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="#dnc-interest"
                className="w-full sm:w-auto bg-[#D600AA] hover:bg-[#B50090] text-white font-mono font-bold text-xs uppercase px-5 py-2.5 sm:py-3 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <span>GET KEYNOTE PASS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in"
                className="w-full sm:w-auto bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs uppercase px-4 py-2.5 sm:py-3 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <span>NOMINATE A SPEAKER ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncKeynote;
