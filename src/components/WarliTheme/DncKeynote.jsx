import React from 'react';
import { Megaphone, Mic, Calendar, Bell, ArrowRight, LayoutGrid, Cpu, Brain, Cloud } from 'lucide-react';
import { scrollToSection } from '../../utils/sectionRouter.js';
import { WarliCornerOrnament, WarliChaukatRibbon } from '../Warli/WarliMotifs.jsx';

export const DncKeynote = () => {
  return (
    <section id="keynote" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">

      {/* Decorative Warli Glyphs */}
      <div className="absolute top-16 right-16 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-24 right-10 text-[#FAF7F2]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 -left-6 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-20 -right-6 text-[#FAF7F2] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="text-[#FAF7F2] uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span>KEYNOTE STAGE</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          DEVELOP • LEARN • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">CENTRAL INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#180805]" />
          <span>COMMUNITY DRIVEN</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          FOR DEVELOPERS
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-2.5 sm:gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase">
            OPENING SESSION
          </span>
          <span className="text-[#FAF7F2]/60 font-mono text-xs">|</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            KEYNOTE SPOTLIGHT
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
        </div>
      </div>

      {/* Main Warli Showcase Card */}
      <div className="bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Warli Corner Ornaments */}
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
            <Megaphone className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>SPEAKER ANNOUNCEMENT • COMING SOON</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black font-sans uppercase tracking-tight text-[#FAF7F2] text-center mb-2.5">
          A LOOK AHEAD AT <span className="text-[#E5A93C]">.NET, AI &amp; CLOUD</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed mb-8">
          Explore the paradigms shaping modern application development across the Microsoft and .NET ecosystem.
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6">
          {/* Left Column: Warli .NET Bot Mascot Spotlight Card */}
          <div className="lg:col-span-6 bg-[#180805] border-[2px] border-[#FAF7F2] rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-[5px_5px_0px_0px_#120402] flex flex-col justify-between min-h-[360px] text-white">
            
            {/* Top Badges Row */}
            <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 bg-[#E5A93C] text-[#180805] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-[#FAF7F2]/50 shadow-[1px_1px_0px_0px_#120402]">
                <Mic className="w-3 h-3 text-[#180805]" />
                <span>OPENING KEYNOTE</span>
              </div>
              <div className="bg-[#2D0F0A] text-[#FAF7F2]/80 font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full border border-[#FAF7F2]/20 uppercase">
                SPEAKER REVEAL SOON
              </div>
            </div>

            {/* Center Warli .NET Bot Graphic */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center p-2">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl border-[2.5px] border-[#FAF7F2] overflow-hidden shadow-[4px_4px_0px_0px_#120402] bg-[#2A0E08] group">
                <img
                  src="/warli/warli_dotnet_bot.jpg"
                  alt="Warli .NET Bot Mascot"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-1 inset-x-1 bg-[#180805]/90 border border-[#FAF7F2]/30 rounded-lg py-1 px-2 text-center">
                  <span className="font-mono text-[9.5px] font-bold text-[#E5A93C] uppercase tracking-wider">
                    WARLI .NET BOT MASCOT
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Coordinate Bar */}
            <div className="relative z-10 pt-2 border-t border-[#FAF7F2]/20 flex items-center justify-between text-[10px] font-mono text-[#FAF7F2]/70 mt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
                <span>MAINSTAGE AUDITORIUM</span>
              </span>
              <span className="text-[#E5A93C]">PRPCEM CAMPUS</span>
            </div>
          </div>

          {/* Right Column: Keynote Themes & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Keynote Themes Ribbon */}
              <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#E5A93C] uppercase mb-2">
                <LayoutGrid className="w-4 h-4 text-[#E5A93C]" />
                <span>HEADLINE KEYNOTE SPOTLIGHT</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] mb-2 leading-snug">
                Building Next-Gen Intelligent Applications with .NET &amp; AI
              </h3>

              {/* Featured Keynote Speaker Info */}
              <div className="flex items-center gap-2.5 mb-3 bg-[#180805] border border-[#FAF7F2]/30 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E5A93C] text-[#180805] font-mono font-black text-xs flex items-center justify-center shrink-0">
                  MVP
                </div>
                <div>
                  <div className="text-xs font-bold font-sans text-[#FAF7F2]">
                    Anuraj P. · Microsoft MVP &amp; Senior Architect
                  </div>
                  <div className="text-[10px] font-mono text-[#FAF7F2]/70">
                    Microsoft Most Valuable Professional · 20+ Years Enterprise Experience
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
                An inspiring keynote deep dive exploring the evolution of .NET 11, C# 14 zero-allocation patterns, autonomous multi-agent systems powered by Semantic Kernel, and resilient cloud-native architectures with .NET Aspire on Azure.
              </p>

              {/* Tech Badges Row */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="bg-[#38130D] text-[#E5A93C] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-[#FAF7F2]/30">
                  .NET 11
                </span>
                <span className="bg-[#38130D] text-[#FAF7F2] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-[#FAF7F2]/30">
                  C# 14
                </span>
                <span className="bg-[#38130D] text-[#E5A93C] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-[#FAF7F2]/30">
                  Semantic Kernel
                </span>
                <span className="bg-[#38130D] text-[#C84832] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-[#FAF7F2]/30">
                  Azure OpenAI
                </span>
                <span className="bg-[#38130D] text-[#FAF7F2] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-[#FAF7F2]/30">
                  .NET Aspire
                </span>
              </div>
            </div>

            {/* 3 Theme Feature Columns */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-[#FAF7F2]/20 mt-auto">
              {/* 1. Runtime Innovations */}
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#38130D] text-[#E5A93C] flex items-center justify-center border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402] mb-1.5">
                  <Cpu className="w-4 h-4 text-[#E5A93C]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Runtime Innovations
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">
                  JIT breakthroughs &amp; memory profiling
                </span>
              </div>

              {/* 2. Autonomous Agents */}
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#38130D] text-[#C84832] flex items-center justify-center border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402] mb-1.5">
                  <Brain className="w-4 h-4 text-[#C84832]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Autonomous Agents
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">
                  Semantic Kernel &amp; tool-calling
                </span>
              </div>

              {/* 3. Cloud Resilience */}
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#38130D] text-[#FAF7F2] flex items-center justify-center border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402] mb-1.5">
                  <Cloud className="w-4 h-4 text-[#FAF7F2]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Cloud Resilience
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">
                  .NET Aspire &amp; Azure microservices
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Bar */}
        <div className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#120402]">
          {/* Left notice */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#38130D] text-[#E5A93C] border-[1.5px] border-[#FAF7F2] flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
              <Calendar className="w-5 h-5 text-[#E5A93C]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black font-sans uppercase text-[#FAF7F2] block leading-tight">
                KEYNOTE DETAILS COMING SOON
              </span>
              <span className="text-[11px] sm:text-xs text-[#FAF7F2]/75 font-sans block mt-0.5">
                Register your interest for speaker lineup announcements.
              </span>
            </div>
          </div>

          {/* Right: CTA Button */}
          <a
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('/register');
            }}
            className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-black text-xs sm:text-sm font-sans uppercase px-6 py-3 rounded-full border-[2px] border-[#FAF7F2] shadow-[2.5px_2.5px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Bell className="w-4 h-4 text-[#180805]" />
            <span>REGISTER INTEREST</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncKeynote;
