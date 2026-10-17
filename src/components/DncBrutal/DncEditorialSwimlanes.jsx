import React from 'react';
import { Box, Bot, Code2, Users, CheckCircle2, Star, Laptop, Play, Layers, MapPin } from 'lucide-react';

export const DncEditorialSwimlanes = () => {
  return (
    <section id="overview" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">

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
          <span className="text-[#512BD4]">02</span>
          <span className="text-stone-300">//</span>
          <span className="uppercase tracking-wider">OVERVIEW</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-white text-[#512BD4] flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#512BD4]" />
          <span>CONFERENCE PILLARS</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          'ARCHITECTURE • AI • CLOUD
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
          <span className="text-black uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#EEEAFB] text-[#512BD4] flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#512BD4]" />
          <span>AMRAVATI • PRPCEM</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Top Floating Badge Pill */}
      <div className="flex justify-center mb-3">
        <div className="inline-flex items-center gap-2 bg-white text-black font-mono font-bold text-xs px-4 py-1.5 rounded-full border-[2px] border-black shadow-[2px_2px_0px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-[#512BD4] shrink-0" />
          <span>TECHNICAL TRACKS</span>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight text-black text-center mb-2.5">
        CONFERENCE PILLARS & IMMERSION
      </h2>

      {/* Section Subtitle */}
      <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
        Curated tracks and immersive experiences to help you learn, build, connect and grow with the .NET and Microsoft ecosystem.
      </p>

      {/* Main 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
        {/* ================= PILLAR 1: .NET & CLOUD ARCHITECTURE ================= */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#512BD4] flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#EEEAFB] text-[#512BD4] font-mono font-black text-xs flex items-center justify-center border border-purple-200">
                01
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-black mb-2.5 leading-snug">
              .NET & CLOUD<br />ARCHITECTURE
            </h3>

            {/* Description */}
            <p className="text-stone-700 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Build scalable, secure and high-performance applications using .NET 11, C# 14 and modern cloud architectures.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                <span>Modern .NET 11 & C# 14 features</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                <span>Cloud-native application design</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                <span>Microservices & distributed systems</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                <span>Containerization with Azure</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                <span>Performance, scalability & security</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#F3E8FF] text-[#512BD4] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-purple-200">
              .NET 11
            </span>
            <span className="bg-[#F3E8FF] text-[#512BD4] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-purple-200">
              C# 14
            </span>
            <span className="bg-[#F3E8FF] text-[#512BD4] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-purple-200">
              Azure
            </span>
            <span className="bg-[#F3E8FF] text-[#512BD4] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-purple-200">
              Cloud Native
            </span>
          </div>
        </div>

        {/* ================= PILLAR 2: AI, COPILOTS & INTELLIGENT APPS ================= */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#00BDD6] flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#E0F7FA] text-[#00838F] font-mono font-black text-xs flex items-center justify-center border border-cyan-200">
                02
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#E0F7FA] text-[#00838F] flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-black mb-2.5 leading-snug">
              AI, COPILOTS &<br />INTELLIGENT APPS
            </h3>

            {/* Description */}
            <p className="text-stone-700 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Explore how AI is transforming development with Copilots, LLMs and intelligent agents. Learn, build and integrate AI into real-world apps.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                <span>Build with GitHub Copilot & Azure AI</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                <span>Integrate LLMs and RAG patterns</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                <span>Develop autonomous agents</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                <span>Vector search and embeddings</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                <span>Responsible and secure AI adoption</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#E0F7FA] text-[#00838F] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-cyan-200">
              Azure AI
            </span>
            <span className="bg-[#E0F7FA] text-[#00838F] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-cyan-200">
              Copilots
            </span>
            <span className="bg-[#E0F7FA] text-[#00838F] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-cyan-200">
              RAG
            </span>
            <span className="bg-[#E0F7FA] text-[#00838F] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-cyan-200">
              Agents
            </span>
          </div>
        </div>

        {/* ================= PILLAR 3: MODERN DEVELOPER TOOLING ================= */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#D600AA] flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#FCE7F3] text-[#D600AA] font-mono font-black text-xs flex items-center justify-center border border-pink-200">
                03
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#FCE7F3] text-[#D600AA] flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-black mb-2.5 leading-snug">
              MODERN<br />DEVELOPER TOOLING
            </h3>

            {/* Description */}
            <p className="text-stone-700 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Boost productivity with the latest developer tools, platforms and practices across the Microsoft ecosystem.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D600AA] shrink-0 mt-0.5" />
                <span>Visual Studio & VS Code productivity</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D600AA] shrink-0 mt-0.5" />
                <span>DevOps & CI/CD with GitHub</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D600AA] shrink-0 mt-0.5" />
                <span>Testing, debugging and best practices</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D600AA] shrink-0 mt-0.5" />
                <span>Open source contributions</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D600AA] shrink-0 mt-0.5" />
                <span>Modern frontend integration (Blazor)</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#FCE7F3] text-[#D600AA] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-pink-200">
              Visual Studio
            </span>
            <span className="bg-[#FCE7F3] text-[#D600AA] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-pink-200">
              GitHub
            </span>
            <span className="bg-[#FCE7F3] text-[#D600AA] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-pink-200">
              DevOps
            </span>
            <span className="bg-[#FCE7F3] text-[#D600AA] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-pink-200">
              Blazor
            </span>
          </div>
        </div>

        {/* ================= PILLAR 4: COMMUNITY, CAREER & INNOVATION ================= */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#10B981] flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-7 rounded-md bg-[#D1FAE5] text-[#059669] font-mono font-black text-xs flex items-center justify-center border border-emerald-200">
                04
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-black mb-2.5 leading-snug">
              COMMUNITY,<br />CAREER & INNOVATION
            </h3>

            {/* Description */}
            <p className="text-stone-700 font-sans text-xs sm:text-[13px] leading-relaxed mb-4">
              Engage with the community, learn from industry experts and get insights on career growth, open source and emerging tech trends.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Keynotes from industry leaders</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Panel discussions and fireside chats</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Career guidance and learning paths</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Networking with peers and experts</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-sans text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Innovation showcase and projects</span>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5 mt-auto">
            <span className="bg-[#D1FAE5] text-[#059669] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-200">
              Career
            </span>
            <span className="bg-[#D1FAE5] text-[#059669] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-200">
              Community
            </span>
            <span className="bg-[#D1FAE5] text-[#059669] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-200">
              Open Source
            </span>
            <span className="bg-[#D1FAE5] text-[#059669] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-200">
              Innovation
            </span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM CARD: BEYOND SESSIONS / IMMERSIVE EXPERIENCES ================= */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-3 sm:p-4 shadow-[5px_5px_0px_0px_#000] flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6">
        {/* Left Solid Purple Block */}
        <div className="bg-[#512BD4] text-white rounded-2xl px-5 py-4 border-[2px] border-black flex items-center gap-3.5 shrink-0 shadow-[2px_2px_0px_0px_#000]">
          <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div className="font-sans font-black text-sm sm:text-base uppercase leading-tight tracking-tight">
            <span>BEYOND</span><br />
            <span>SESSIONS</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Header */}
          <div>
            <span className="text-xs sm:text-sm font-black font-sans uppercase text-black tracking-wider block">
              IMMERSIVE EXPERIENCES
            </span>
            <span className="text-[11px] sm:text-xs text-stone-500 font-sans block mt-0.5">
              More than just talks. Experience .NET Conf through hands-on learning, collaboration and real-world engagement.
            </span>
          </div>

          {/* 4 Items in a Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-3 pt-3 border-t border-stone-200">
            {/* 1. Hands-on Workshops */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200 shadow-[1px_1px_0px_0px_#000]">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-black block leading-snug">
                  Hands-on Workshops
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight">
                  Build and learn with experts
                </span>
              </div>
            </div>

            {/* 2. Live Demos */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200 shadow-[1px_1px_0px_0px_#000]">
                <Play className="w-4 h-4 fill-[#512BD4]" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-black block leading-snug">
                  Live Demos
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight">
                  See real-world solutions in action
                </span>
              </div>
            </div>

            {/* 3. Networking Spaces */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200 shadow-[1px_1px_0px_0px_#000]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-black block leading-snug">
                  Networking Spaces
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight">
                  Connect with developers, mentors and industry experts
                </span>
              </div>
            </div>

            {/* 4. Project Showcase */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200 shadow-[1px_1px_0px_0px_#000]">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold font-sans text-black block leading-snug">
                  Project Showcase
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight">
                  Explore innovative ideas from the community
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
