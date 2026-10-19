import React from 'react';
import { Megaphone, Mic, Calendar, Bell, ArrowRight, LayoutGrid, Cpu, Brain, Cloud, Code2 } from 'lucide-react';
import { scrollToSection } from '../../utils/sectionRouter.js';

export const DncKeynote = () => {
  return (
    <section id="keynote" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">

      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="text-black uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#FFEBF7] text-[#D600AA] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D600AA]" />
          <span>AMRAVATI EDITION</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          DEVELOP • LEARN • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-black uppercase tracking-wider">CENTRAL INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#FFEBF7] text-[#D600AA] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D600AA]" />
          <span>COMMUNITY DRIVEN</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          FOR DEVELOPERS
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-[#4A15D1] via-[#8518C6] to-[#E5008E] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-2.5 sm:gap-3 z-10">
          <span className="bg-[#FFE600] text-black text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            OPENING SESSION
          </span>
          <span className="text-white/60 font-mono text-xs">|</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            KEYNOTE SPOTLIGHT
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Main Neo-Brutalist Showcase Card */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] w-full max-w-7xl mx-auto">
        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#FAF8FF] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            <Megaphone className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>SPEAKER ANNOUNCEMENT • COMING SOON</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black font-sans uppercase tracking-tight text-black text-center mb-2.5">
          A LOOK AHEAD AT <span className="text-[#512BD4]">.NET, AI & CLOUD</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed mb-8">
          Explore the ideas shaping modern application development across the Microsoft ecosystem.
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6">
          {/* Left Column: Isometric Developer Illustration Card */}
          <div className="lg:col-span-6 bg-[#0B0220] border-[2px] border-black rounded-2xl p-5 relative overflow-hidden shadow-[4px_4px_0px_0px_#512BD4] flex flex-col justify-between min-h-[360px] text-white">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#512BD4]/30 blur-3xl pointer-events-none" />
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#00BDD6]/20 blur-2xl pointer-events-none" />

            {/* Top Badges Row */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 bg-[#512BD4] text-white font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-white/20 shadow-[1px_1px_0px_0px_#000]">
                <Mic className="w-3 h-3 text-white" />
                <span>OPENING KEYNOTE</span>
              </div>
              <div className="bg-[#1C0A52]/80 text-stone-300 font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full border border-white/10 uppercase">
                SPEAKER TO BE ANNOUNCED
              </div>
            </div>

            {/* Center Isometric Composition Graphic */}
            <div className="relative z-10 py-6 my-auto flex items-center justify-center">
              <div className="relative w-full max-w-[340px] h-[200px] flex items-center justify-center">
                {/* Circuit Grid Background Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 340 200">
                  <path d="M 40 100 L 120 100 L 150 140 L 220 140" stroke="#00BDD6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                  <path d="M 200 40 L 200 80 L 170 110" stroke="#D600AA" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                  <path d="M 280 120 L 220 120 L 190 145" stroke="#512BD4" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                </svg>

                {/* Left: Floating Code Window */}
                <div className="absolute left-2 top-8 w-24 bg-[#140634] border border-white/20 rounded-lg p-2 shadow-lg backdrop-blur-sm -rotate-6">
                  <div className="flex gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 bg-pink-500/70 rounded w-3/4" />
                    <div className="h-1 bg-cyan-400/70 rounded w-1/2" />
                    <div className="h-1 bg-purple-400/70 rounded w-5/6" />
                  </div>
                </div>

                {/* Left Lower: Code < /> Icon Badge */}
                <div className="absolute left-6 bottom-4 w-12 h-12 rounded-xl bg-gradient-to-tr from-[#512BD4] to-[#7B2CBF] border border-white/30 flex items-center justify-center shadow-[0_0_15px_rgba(81,43,212,0.6)] rotate-3">
                  <Code2 className="w-6 h-6 text-white stroke-[2.5]" />
                </div>

                {/* Center: Glowing 3D Pedestal with .NET cube */}
                <div className="relative flex flex-col items-center">
                  {/* Floating Azure Cloud Icon Above Pedestal */}
                  <div className="mb-2 w-16 h-10 rounded-2xl bg-gradient-to-r from-[#0078D4] to-[#00BDD6] border border-white/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,189,214,0.6)] animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="text-white font-mono font-black text-sm tracking-tight flex items-center gap-1">
                      <Cloud className="w-4 h-4 fill-white" />
                      <span>A</span>
                    </span>
                  </div>

                  {/* 3D Isometric .NET Cube on Pedestal */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-[#512BD4] to-[#3B158B] border-[2px] border-[#00BDD6] shadow-[0_0_35px_rgba(81,43,212,0.9)] flex items-center justify-center text-center relative">
                    <div className="absolute inset-1 rounded-xl bg-[#512BD4] flex items-center justify-center border border-white/30">
                      <span className="text-white font-black font-sans text-xl tracking-tight">.NET</span>
                    </div>
                  </div>

                  {/* Pedestal Base Shadow */}
                  <div className="w-28 h-6 rounded-full bg-black/60 blur-sm mt-1" />
                </div>

                {/* Right: Floating Glowing Brain AI Card */}
                <div className="absolute right-6 top-8 w-14 h-14 rounded-2xl bg-[#1D0847] border-[1.5px] border-[#D600AA] shadow-[0_0_20px_rgba(214,0,170,0.7)] flex items-center justify-center rotate-6">
                  <Brain className="w-8 h-8 text-[#E056FD] stroke-[2]" />
                </div>

                {/* Right Lower: Database Cylinder */}
                <div className="absolute right-6 bottom-4 w-12 h-14 flex flex-col items-center justify-center">
                  <div className="w-10 h-3 rounded-full bg-indigo-500 border border-white/30" />
                  <div className="w-10 h-7 bg-indigo-700/80 border-x border-white/30 -mt-1.5 flex flex-col justify-around py-0.5">
                    <div className="w-full h-px bg-white/30" />
                    <div className="w-full h-px bg-white/30" />
                  </div>
                  <div className="w-10 h-3 rounded-full bg-indigo-600 border border-white/30 -mt-1.5" />
                </div>
              </div>
            </div>

            {/* Bottom Tech Coordinate Bar */}
            <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>MAINSTAGE AUDITORIUM</span>
              </span>
              <span className="text-[#00BDD6]">PRPCEM CAMPUS</span>
            </div>
          </div>

          {/* Right Column: Keynote Themes & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Keynote Themes Ribbon */}
              <div className="flex items-center gap-2 font-mono font-bold text-xs text-[#512BD4] uppercase mb-2">
                <LayoutGrid className="w-4 h-4 text-[#D600AA]" />
                <span>HEADLINE KEYNOTE SPOTLIGHT</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black mb-2 leading-snug">
                Building Next-Gen Intelligent Applications with .NET &amp; AI
              </h3>

              {/* Featured Keynote Speaker Info */}
              <div className="flex items-center gap-2.5 mb-3 bg-[#FAF8FF] border border-black/20 rounded-xl p-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#512BD4] text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                  MVP
                </div>
                <div>
                  <div className="text-xs font-bold font-sans text-black">
                    Anuraj P. · Microsoft MVP &amp; Senior Architect
                  </div>
                  <div className="text-[10px] font-mono text-stone-500">
                    Microsoft Most Valuable Professional · 20+ Years Enterprise Experience
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-700 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
                An inspiring keynote deep dive exploring the evolution of .NET 11, C# 14 zero-allocation patterns, autonomous multi-agent systems powered by Semantic Kernel, and resilient cloud-native architectures with .NET Aspire on Azure.
              </p>

              {/* Tech Badges Row */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-purple-200">
                  .NET 11
                </span>
                <span className="bg-[#E0F7FA] text-[#00838F] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-cyan-200">
                  C# 14
                </span>
                <span className="bg-[#FCE7F3] text-[#D600AA] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-pink-200">
                  Semantic Kernel
                </span>
                <span className="bg-[#E8F0FE] text-[#1D4ED8] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-blue-200">
                  Azure OpenAI
                </span>
                <span className="bg-[#E6FFFA] text-[#0D9488] font-mono font-bold text-[10px] sm:text-[11px] px-3 py-1 rounded-full border border-teal-200">
                  .NET Aspire
                </span>
              </div>
            </div>

            {/* 3 Theme Feature Columns */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-stone-200 mt-auto">
              {/* 1. Runtime Innovations */}
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center border border-purple-200 shadow-[1px_1px_0px_0px_#000] mb-1.5">
                  <Cpu className="w-4 h-4 text-[#512BD4]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-sans text-black block leading-snug">
                  Runtime Innovations
                </span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">
                  JIT breakthroughs &amp; memory profiling
                </span>
              </div>

              {/* 2. Autonomous Agents */}
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#FCE7F3] text-[#D600AA] flex items-center justify-center border border-pink-200 shadow-[1px_1px_0px_0px_#000] mb-1.5">
                  <Brain className="w-4 h-4 text-[#D600AA]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-sans text-black block leading-snug">
                  Autonomous Agents
                </span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">
                  Semantic Kernel &amp; tool-calling
                </span>
              </div>

              {/* 3. Cloud Resilience */}
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#E0F7FA] text-[#00BDD6] flex items-center justify-center border border-cyan-200 shadow-[1px_1px_0px_0px_#000] mb-1.5">
                  <Cloud className="w-4 h-4 text-[#00BDD6]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold font-sans text-black block leading-snug">
                  Cloud Resilience
                </span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">
                  .NET Aspire &amp; Azure microservices
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Bar */}
        <div className="bg-[#FAF9FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[3px_3px_0px_0px_#000]">
          {/* Left notice */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
              <Calendar className="w-5 h-5 text-[#512BD4]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black font-sans uppercase text-black block leading-tight">
                KEYNOTE DETAILS COMING SOON
              </span>
              <span className="text-[11px] sm:text-xs text-stone-600 font-sans block mt-0.5">
                Register your interest for event updates.
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
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-black text-xs sm:text-sm font-sans uppercase px-6 py-3 rounded-full border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Bell className="w-4 h-4 text-white" />
            <span>REGISTER INTEREST</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncKeynote;
