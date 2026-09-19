import React from 'react';
import { Award, ArrowRight, Clock, MapPin, Layers, Cpu } from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';
import { scrollToSection } from '../../utils/sectionRouter.js';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncKeynote = () => {
  const pillars = [
    {
      title: 'Next-Generation .NET Roadmap (TBA)',
      desc: 'Architecture breakthroughs, runtime innovations, and modern C# performance optimizations.',
    },
    {
      title: 'Applied AI & Copilot Development (TBA)',
      desc: 'Building autonomous agents, vector memory integrations, and intelligent enterprise services.',
    },
    {
      title: 'Cloud Native & Enterprise Systems (TBA)',
      desc: 'Distributed microservices resilience, containerization, and modern deployment architectures.',
    },
  ];

  return (
    <section id="keynote" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="04"
        leftTag="KEYNOTE"
        leftBadgeText="🎙️ HEADLINE TALK"
        leftBadgeColor="bg-[#FFE600] text-black"
        leftSub="AUDITORIUM"
        rightIndex="10:00"
        rightTag="AM IST"
        rightBadgeText="ROADMAP BREAKDOWN"
        rightBadgeColor="bg-[#512BD4] text-white"
        rightSub="IN-PERSON"
      />
      {/* Signpost */}
      <DncSignpost 
        title="HEADLINE KEYNOTE SPOTLIGHT" 
        badge="OPENING KEYNOTE · TBA"
        theme="magenta"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <Award className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Headline Opening Keynote · TBA</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2 sm:mb-3">
            Keynote Speaker Announced Soon
          </h3>

          <p className="text-stone-700 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
            Central India’s premier developer summit will open with an inspiring keynote address on the future of the Microsoft .NET platform. Speaker reveal coming soon!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Keynote Ambassador Mascot Frame */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl bg-[#14053A] border-[2.5px] border-black shadow-[4px_4px_0px_0px_#D600AA] p-5 sm:p-6 flex flex-col justify-between items-center text-center h-full min-h-[380px] sm:min-h-[420px] text-white">
              
              {/* Badges */}
              <div className="w-full flex items-center justify-between pointer-events-none mb-3">
                <div className="px-2.5 py-1 rounded-full bg-[#512BD4] text-white text-[10px] sm:text-[11px] font-mono font-black uppercase border border-black shadow-[1px_1px_0px_0px_#000] flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-amber-300" />
                  <span>Inaugural Keynote</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-white/20 text-white font-mono text-[10px] font-bold uppercase border border-white/20">
                  Speaker TBA
                </div>
              </div>

              {/* Space Explorer Ambassador Mascot */}
              <div className="relative z-10 w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 flex items-center justify-center my-auto py-2">
                <img
                  src="/mascot/dotnetbot-outer-space.svg"
                  alt=".NET Bot Space Explorer — Keynote Ambassador"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] select-none animate-rocket-float"
                />
              </div>

              {/* Overlay Details Card */}
              <div className="w-full bg-white border-[2px] border-black rounded-xl p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_#000] text-[#14053A] text-left">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-black font-sans uppercase truncate text-black">
                    Headline Speaker TBA
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-[#512BD4] bg-[#EEEAFB] border border-[#512BD4]/30 px-2 py-0.5 rounded shrink-0">
                    Announced Soon
                  </span>
                </div>

                <p className="text-[11px] font-bold text-[#512BD4] mb-2 font-mono">
                  Industry Leader / Microsoft MVP
                </p>

                <div className="pt-2 border-t border-black/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-stone-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#512BD4]" />
                    Timing: TBA
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D600AA]" />
                    PRPCEM Campus
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Keynote Roadmap */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Meta Ribbon */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#512BD4] uppercase mb-2">
                <Cpu className="w-3.5 h-3.5 text-[#D600AA]" />
                <span>OPENING KEYNOTE ROADMAP</span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-black font-sans text-[#14053A] uppercase tracking-tight mb-3">
                Building Next-Gen Intelligent Applications with .NET & AI
              </h4>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5">
                {['.NET 11', 'C# 14', 'Semantic Kernel', 'Azure AI', '.NET Aspire', 'Native AOT', 'Cloud Architecture'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-[#FAF8FF] text-[#512BD4] border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Biography Text from Keynote.jsx */}
              <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed mb-4">
                The keynote session will officially inaugurate .NET Conf 2026 Amravati, exploring the full power of modern .NET 11, intelligent copilot architectures, and production cloud services. Full speaker identity and session breakdown will be revealed shortly.
              </p>

              {/* 3 Pillars */}
              <div className="space-y-2.5 mb-5">
                <h5 className="text-xs font-mono font-bold uppercase text-black flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Anticipated Keynote Focus Areas:</span>
                </h5>

                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF8FF] border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]"
                  >
                    <div className="text-xs sm:text-sm font-bold text-[#14053A] mb-0.5 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#512BD4] text-white text-[10px] font-mono font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-sans uppercase">{pillar.title}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-600 font-sans leading-relaxed pl-6">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-3 border-t-[1.5px] border-black/15 flex flex-wrap items-center justify-between gap-3">
              <a
                href="/community"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('/community');
                }}
                className="bg-[#D600AA] hover:bg-[#B50090] text-white font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>FOLLOW FOR KEYNOTE ANNOUNCEMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DncKeynote;
