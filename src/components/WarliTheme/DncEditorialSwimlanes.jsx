import React from 'react';
import { Box, Bot, Code2, Users, CheckCircle2, Star, Laptop, Play, Layers, MapPin } from 'lucide-react';
import { WarliCornerOrnament, WarliChaukatRibbon } from '../Warli/WarliMotifs.jsx';

export const DncEditorialSwimlanes = () => {
  return (
    <section id="overview" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">

      {/* Decorative Warli Geometric Glyphs */}
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
          <span className="text-[#E5A93C]">02</span>
          <span className="text-[#FAF7F2]/40">//</span>
          <span className="uppercase tracking-wider">TRACKS</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#E5A93C]" />
          <span>CHAUKAT PILLARS</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          ARCHITECTURE • AI • CLOUD
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
          <span className="text-[#FAF7F2] uppercase tracking-wider">WARLI THEME</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#180805]" />
          <span>PRPCEM • AMRAVATI</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Top Floating Badge Pill */}
      <div className="flex justify-center mb-3">
        <div className="inline-flex items-center gap-2 bg-[#280D07] text-[#FAF7F2] font-mono font-bold text-xs px-4 py-1.5 rounded-full border-[2px] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402]">
          <span className="w-2 h-2 rounded-full bg-[#E5A93C] shrink-0" />
          <span>WARLI CHAUKAT TRACKS</span>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] text-center mb-2.5">
        CONFERENCE PILLARS &amp; IMMERSION
      </h2>

      {/* Section Subtitle */}
      <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed mb-6">
        Curated tracks and immersive experiences rooted in .NET 11 and Microsoft technology &mdash; framed with the sacred geometry of Warli art.
      </p>

      {/* Warli Chaukat Divider Ribbon */}
      <div className="max-w-2xl mx-auto mb-8 sm:mb-10 opacity-70">
        <WarliChaukatRibbon fill="#FAF7F2" accent="#E5A93C" />
      </div>

      {/* Main 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
        
        {/* ================= PILLAR 1: .NET & CLOUD ARCHITECTURE ================= */}
        <div className="relative bg-[#280D07] border-[2.5px] border-[#FAF7F2] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#120402] flex flex-col justify-between hover:-translate-y-1 transition-transform overflow-hidden">
          <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-40" />
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#E5A93C] text-[#180805] font-mono font-black text-xs flex items-center justify-center border border-[#FAF7F2]/40 shadow-[1px_1px_0px_0px_#120402]">
                01
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#3A140E] text-[#E5A93C] border border-[#FAF7F2]/40 flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] mb-2.5 leading-snug">
              .NET &amp; CLOUD<br /><span className="text-[#E5A93C]">ARCHITECTURE</span>
            </h3>

            {/* Description */}
            <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Build scalable, resilient, high-performance applications using .NET 11, C# 14, and modern Azure Cloud Native designs.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Modern .NET 11 runtime &amp; C# 14 language innovations</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>.NET Aspire orchestrations &amp; distributed telemetry</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Native AOT compilation &amp; sub-millisecond cold starts</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Resilient microservices with Azure Container Apps</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Minimal APIs &amp; enterprise distributed pipelines</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-[#FAF7F2]/20 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              .NET 11
            </span>
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              C# 14
            </span>
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              .NET Aspire
            </span>
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Native AOT
            </span>
          </div>
        </div>

        {/* ================= PILLAR 2: AI, COPILOTS & INTELLIGENT APPS ================= */}
        <div className="relative bg-[#280D07] border-[2.5px] border-[#FAF7F2] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#120402] flex flex-col justify-between hover:-translate-y-1 transition-transform overflow-hidden">
          <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-40" />
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#FAF7F2] text-[#180805] font-mono font-black text-xs flex items-center justify-center border border-[#FAF7F2]/40 shadow-[1px_1px_0px_0px_#120402]">
                02
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#3A140E] text-[#FAF7F2] border border-[#FAF7F2]/40 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] mb-2.5 leading-snug">
              AI, COPILOTS &amp;<br /><span className="text-[#E5A93C]">INTELLIGENT APPS</span>
            </h3>

            {/* Description */}
            <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Explore how AI transforms development with Semantic Kernel, GitHub Copilots, LLMs, and multi-agent systems.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Autonomous agents with Microsoft Semantic Kernel</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Enterprise RAG with Azure OpenAI &amp; pgvector</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Local SLM execution via Ollama &amp; ONNX Runtime</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>GitHub Copilot agentic extensions in VS 2025</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Responsible AI safety guardrails &amp; token economics</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-[#FAF7F2]/20 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#3A140E] text-[#FAF7F2] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Azure OpenAI
            </span>
            <span className="bg-[#3A140E] text-[#FAF7F2] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Semantic Kernel
            </span>
            <span className="bg-[#3A140E] text-[#FAF7F2] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Copilots
            </span>
            <span className="bg-[#3A140E] text-[#FAF7F2] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              ONNX / SLMs
            </span>
          </div>
        </div>

        {/* ================= PILLAR 3: MODERN DEVELOPER TOOLING ================= */}
        <div className="relative bg-[#280D07] border-[2.5px] border-[#FAF7F2] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#120402] flex flex-col justify-between hover:-translate-y-1 transition-transform overflow-hidden">
          <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-40" />
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#C84832] text-[#FAF7F2] font-mono font-black text-xs flex items-center justify-center border border-[#FAF7F2]/40 shadow-[1px_1px_0px_0px_#120402]">
                03
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#3A140E] text-[#C84832] border border-[#FAF7F2]/40 flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] mb-2.5 leading-snug">
              MODERN<br /><span className="text-[#C84832]">DEVELOPER TOOLING</span>
            </h3>

            {/* Description */}
            <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Boost productivity with next-generation developer tooling, Blazor web assembly, and modern DevOps platforms.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C84832] shrink-0 mt-0.5" />
                <span>Visual Studio 2025 &amp; VS Code multi-root dev mastery</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C84832] shrink-0 mt-0.5" />
                <span>GitHub Actions enterprise CI/CD &amp; automated validation</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C84832] shrink-0 mt-0.5" />
                <span>Blazor full-stack interactive WebAssembly apps</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C84832] shrink-0 mt-0.5" />
                <span>BenchmarkDotNet performance profiling &amp; memory tuning</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#C84832] shrink-0 mt-0.5" />
                <span>Open-source NuGet packaging &amp; community governance</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-[#FAF7F2]/20 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#3A140E] text-[#C84832] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              VS 2025
            </span>
            <span className="bg-[#3A140E] text-[#C84832] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              GitHub Actions
            </span>
            <span className="bg-[#3A140E] text-[#C84832] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Blazor WASM
            </span>
            <span className="bg-[#3A140E] text-[#C84832] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              DevOps
            </span>
          </div>
        </div>

        {/* ================= PILLAR 4: COMMUNITY & FOLK PRIDE ================= */}
        <div className="relative bg-[#280D07] border-[2.5px] border-[#FAF7F2] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#120402] flex flex-col justify-between hover:-translate-y-1 transition-transform overflow-hidden">
          <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-40" />
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#E5A93C] text-[#180805] font-mono font-black text-xs flex items-center justify-center border border-[#FAF7F2]/40 shadow-[1px_1px_0px_0px_#120402]">
                04
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#3A140E] text-[#E5A93C] border border-[#FAF7F2]/40 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] mb-2.5 leading-snug">
              COMMUNITY, CAREER<br /><span className="text-[#E5A93C]">&amp; FOLK PRIDE</span>
            </h3>

            {/* Description */}
            <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Gather in the spirit of the Warli Tarpa dance: student innovators, seasoned architects, and tech leaders uniting as one.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Direct keynotes &amp; AMAs with Microsoft MVPs</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>High-impact panel discussions on 2026 tech hiring</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>1-on-1 architecture reviews with senior engineers</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>PRPCEM &amp; Vidarbha student hackathon showcase</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Lifelong peer network connecting 600+ delegates</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-[#FAF7F2]/20 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Community
            </span>
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Tarpa Spirit
            </span>
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              PRPCEM
            </span>
            <span className="bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/30">
              Mentorship
            </span>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM CARD: BEYOND SESSIONS / IMMERSIVE EXPERIENCES ================= */}
      <div className="bg-[#260C07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-3xl p-3.5 sm:p-4 shadow-[6px_6px_0px_0px_#120402] flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6 text-[#FAF7F2]">
        {/* Left Block */}
        <div className="bg-[#E5A93C] text-[#180805] rounded-2xl px-5 py-4 border-[2px] border-[#FAF7F2] flex items-center gap-3.5 shrink-0 shadow-[2px_2px_0px_0px_#120402]">
          <div className="w-10 h-10 rounded-xl bg-[#180805]/10 border border-[#180805]/20 flex items-center justify-center shrink-0">
            <Star className="w-5 h-5 text-[#180805]" />
          </div>
          <div className="font-sans font-black text-sm sm:text-base uppercase leading-tight tracking-tight">
            <span>BEYOND</span><br />
            <span>SESSIONS</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <span className="text-xs sm:text-sm font-black font-sans uppercase text-[#E5A93C] tracking-wider block">
              IMMERSIVE EXPERIENCES
            </span>
            <span className="text-[11px] sm:text-xs text-[#FAF7F2]/75 font-sans block mt-0.5">
              More than just tech talks &mdash; engage in hands-on workshops, live demos, and collaborative community spaces.
            </span>
          </div>

          {/* 4 Items in a Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-3 pt-3 border-t border-[#FAF7F2]/20">
            {/* 1. Hands-on Workshops */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402]">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Workshops
                </span>
                <span className="text-[10px] text-[#FAF7F2]/65 font-sans block leading-tight">
                  Build with mentors
                </span>
              </div>
            </div>

            {/* 2. Live Demos */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402]">
                <Play className="w-4 h-4 fill-[#FAF7F2]" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Live Demos
                </span>
                <span className="text-[10px] text-[#FAF7F2]/65 font-sans block leading-tight">
                  Real code in action
                </span>
              </div>
            </div>

            {/* 3. Networking Spaces */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Tarpa Circles
                </span>
                <span className="text-[10px] text-[#FAF7F2]/65 font-sans block leading-tight">
                  Connect &amp; network
                </span>
              </div>
            </div>

            {/* 4. Project Showcase */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#C84832] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 shadow-[1px_1px_0px_0px_#120402]">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-[#FAF7F2] block leading-snug">
                  Showcase
                </span>
                <span className="text-[10px] text-[#FAF7F2]/65 font-sans block leading-tight">
                  Student creations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncEditorialSwimlanes;
