import React from 'react';
import { Award, ArrowRight, Clock, MapPin, Layers, Cpu, Sparkles } from 'lucide-react';
import { keynoteSpeaker } from '../../data/speakers.js';

export const Keynote = () => {
  const pillars = keynoteSpeaker.pillars || [
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
    <section id="keynote" className="w-full py-10 sm:py-14 md:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-2 border border-[#DCD5F6]">
            <Award className="w-3.5 h-3.5" />
            <span>Headline Opening Keynote · Main Auditorium</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-[#14053A] mb-2 leading-tight">
            Keynote Address: <span className="community-event-gradient-text">{keynoteSpeaker.topic || 'The Future of .NET & AI'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#190649]/80 leading-relaxed">
            Central India’s premier developer summit opens with an architectural deep dive from our headline keynote speaker.
          </p>
        </div>

        {/* Compact Keynote Showcase Card */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#DCD5F6] shadow-md overflow-hidden p-5 sm:p-7 md:p-8 transition-all">
          {/* Top Multi-Color Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#512BD4] via-[#D600AA] to-[#28C2D1]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* LEFT: Speaker Spotlight Frame */}
            <div className="lg:col-span-5 flex flex-col min-w-0">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#14053A] via-[#2A1065] to-[#14053A] border border-[#DCD5F6] shadow-sm flex-1 min-h-[320px] sm:min-h-[360px] flex flex-col items-center justify-between pt-10 pb-26 px-4 sm:px-6 text-center group">
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-2.5 py-0.5 rounded-full bg-[#512BD4] text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase shadow-xs flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-amber-300" />
                    <span>Inaugural Keynote</span>
                  </div>

                  <div className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    Announced Soon
                  </div>
                </div>

                {/* Center Keynote Visual */}
                <div className="relative z-10 flex flex-col items-center my-auto py-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#512BD4] via-[#D600AA] to-[#00BDD6] p-1 shadow-lg flex items-center justify-center mb-2.5">
                    <div className="w-full h-full rounded-full bg-[#14053A] flex flex-col items-center justify-center">
                      <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 animate-pulse" />
                      <div className="flex items-center gap-1 mt-1.5">
                        <span className="w-1 h-1.5 bg-[#00BDD6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-3 bg-[#D600AA] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-4 bg-[#512BD4] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        <span className="w-1 h-2 bg-[#FFD13B] rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
                      </div>
                    </div>
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-stone-300">
                    AUDITORIUM MAINSTAGE • {keynoteSpeaker.time || 'Schedule TBA'}
                  </div>
                </div>

                {/* Bottom Overlay Glass Banner */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-md text-[#14053A]">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h4 className="text-sm font-black font-display tracking-tight text-[#14053A] truncate">
                      {keynoteSpeaker.name}
                    </h4>
                    <span className="text-[10px] font-bold text-[#512BD4] bg-[#EEEAFB] px-1.5 py-0.5 rounded shrink-0">
                      KEYNOTE
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#512BD4] mb-1.5 text-left truncate">
                    {keynoteSpeaker.designation} · {keynoteSpeaker.organization}
                  </p>

                  <div className="pt-1.5 border-t border-[#DCD5F6]/60 flex items-center justify-between text-[11px] font-medium text-[#190649]/80">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#512BD4]" />
                      {keynoteSpeaker.time || 'Schedule TBA'}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D600AA]" />
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
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#512BD4] uppercase mb-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#D600AA]" />
                  <span>Opening Keynote Roadmap</span>
                </div>

                {/* Main Topic */}
                <h3 className="text-xl sm:text-2xl font-black font-display text-[#14053A] tracking-tight leading-tight mb-2">
                  {keynoteSpeaker.topic}
                </h3>

                {/* Tech Tags Strip */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(keynoteSpeaker.tags || ['.NET 11', 'C# 14', 'Semantic Kernel', 'Azure AI', '.NET Aspire', 'Native AOT', 'Cloud Architecture']).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#EEEAFB] text-[#512BD4] border border-[#DCD5F6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Speaker Biography / Keynote Description */}
                <p className="text-xs sm:text-sm text-[#190649]/80 leading-relaxed mb-4">
                  {keynoteSpeaker.bio || 'The keynote session will officially inaugurate .NET Conf 2026 Amravati. Discover how to architect resilient, high-speed cloud backends with .NET 11 while infusing enterprise AI capabilities using Microsoft Semantic Kernel, local SLMs, and Azure OpenAI.'}
                </p>

                {/* 3 Pillars */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#14053A] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#512BD4]" />
                    <span>Keynote Architectural Pillars:</span>
                  </h4>
                  
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-lg bg-[#FBFBFE] border border-[#DCD5F6]/80 hover:border-[#512BD4]/40 transition-colors"
                    >
                      <div className="text-xs font-bold font-display text-[#14053A] mb-0.5 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[10px] font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-[11px] text-[#190649]/75 leading-relaxed pl-6">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-[#DCD5F6]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href="#schedule"
                  className="dotnet-solid-btn-accent text-xs py-2 px-4 shadow-xs inline-flex items-center justify-center gap-1.5 w-full sm:w-auto"
                >
                  <span>Explore Full Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
