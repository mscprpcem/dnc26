import React from 'react';
import { Award, ArrowRight, Clock, MapPin, Layers, Cpu, UserCheck, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Keynote = () => {
  const pillars = [
    {
      title: 'Next-Generation .NET 11 & C# 14 Innovations',
      desc: 'Architecture breakthroughs, Native AOT sub-millisecond cold starts, ref struct safety, and memory-efficient runtime pipelines.',
    },
    {
      title: 'Applied AI & Autonomous Agents (Semantic Kernel)',
      desc: 'Orchestrating autonomous multi-agent loops, enterprise vector memory retrieval, and local SLM inference on ONNX Runtime.',
    },
    {
      title: 'Cloud-Native Resilience with .NET Aspire & Azure',
      desc: 'Configuring distributed OpenTelemetry tracing, containerized microservices orchestration, and production health observability.',
    },
  ];

  return (
    <section id="keynote" className="w-full py-14 sm:py-20 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
            <Award className="w-3.5 h-3.5" />
            <span>Headline Opening Keynote · Main Auditorium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Keynote Address: <span className="community-event-gradient-text">The Future of .NET &amp; AI</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/80 leading-relaxed">
            Central India’s premier developer summit opens with an architectural deep dive from an industry Microsoft MVP and veteran enterprise architect.
          </p>
        </div>

        {/* Spacious Keynote Showcase Card */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border-2 border-[#DCD5F6] shadow-xl overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 transition-all">
          {/* Top Multi-Color Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#512BD4] via-[#D600AA] to-[#28C2D1]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
            
            {/* LEFT: Speaker Spotlight Frame */}
            <div className="lg:col-span-5 flex flex-col min-w-0">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#14053A] via-[#2A1065] to-[#14053A] border border-[#DCD5F6] shadow-md flex-1 min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col items-center justify-start pt-14 pb-36 sm:pb-38 px-4 sm:px-6 text-center group">
                
                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <div className="px-2.5 sm:px-3 py-1 rounded-full bg-[#512BD4] text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span>Inaugural Keynote</span>
                  </div>

                  <div className="px-2 sm:px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    Microsoft MVP
                  </div>
                </div>

                {/* Center Keynote Visual */}
                <div className="relative z-10 flex flex-col items-center my-auto py-6">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#512BD4] via-[#D600AA] to-[#00BDD6] p-1 shadow-xl flex items-center justify-center mb-3">
                    <div className="w-full h-full rounded-full bg-[#14053A] flex flex-col items-center justify-center">
                      <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 animate-pulse" />
                      <div className="flex items-center gap-1 mt-2">
                        <span className="w-1 h-2 bg-[#00BDD6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-4 bg-[#D600AA] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-5 bg-[#512BD4] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        <span className="w-1 h-3 bg-[#FFD13B] rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-stone-300">
                    AUDITORIUM MAINSTAGE • 10:00 AM
                  </div>
                </div>

                {/* Bottom Overlay Glass Banner */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-lg text-[#14053A]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm sm:text-base font-black font-display tracking-tight text-[#14053A] truncate">
                      Headline Keynote Speaker
                    </h4>
                    <span className="text-[10px] font-bold text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded shrink-0">
                      KEYNOTE
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#512BD4] mb-2 text-left">
                    Microsoft MVP · To Be Announced Soon
                  </p>

                  <div className="pt-2 border-t border-[#DCD5F6]/60 flex items-center justify-between text-[11px] font-medium text-[#190649]/80">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#512BD4]" />
                      10:00 AM - 10:50 AM
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D600AA]" />
                      PRPCEM Auditorium
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: Keynote Deep Dive Technical Roadmap */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              
              <div>
                {/* Meta Ribbon */}
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#512BD4] uppercase mb-2">
                  <Cpu className="w-3.5 h-3.5 text-[#D600AA]" />
                  <span>Opening Keynote Roadmap</span>
                </div>

                {/* Main Topic */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-[#14053A] tracking-tight leading-tight mb-3">
                  Building Next-Gen Intelligent Applications with .NET &amp; AI
                </h3>

                {/* Tech Tags Strip */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {['.NET 11', 'C# 14', 'Semantic Kernel', 'Azure AI', '.NET Aspire', 'Native AOT', 'Cloud Architecture'].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#EEEAFB] text-[#512BD4] border border-[#DCD5F6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Speaker Biography / Keynote Description */}
                <p className="text-xs sm:text-sm text-[#190649]/80 leading-relaxed mb-6">
                  The keynote session will officially inaugurate .NET Conf 2026 Amravati. Discover how to architect resilient, high-speed cloud backends with .NET 11 while infusing enterprise AI capabilities using Microsoft Semantic Kernel, local SLMs, and Azure OpenAI.
                </p>

                {/* 3 Pillars */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#14053A] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#512BD4]" />
                    <span>Keynote Architectural Pillars:</span>
                  </h4>
                  
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#FBFBFE] border border-[#DCD5F6]/80 hover:border-[#512BD4]/40 transition-colors"
                    >
                      <div className="text-xs sm:text-sm font-bold font-display text-[#14053A] mb-1 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[10px] font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#190649]/75 leading-relaxed pl-7">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#DCD5F6]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href="#schedule"
                  className="dotnet-solid-btn-accent text-xs sm:text-sm py-2.5 px-5 shadow-xs inline-flex items-center justify-center gap-1.5 w-full sm:w-auto"
                >
                  <span>Explore Full Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Keynote;
