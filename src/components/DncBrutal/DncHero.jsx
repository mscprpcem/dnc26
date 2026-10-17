import React from 'react';
import { ArrowRight, Calendar, MapPin, Award, Users, Zap, Trophy } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { scrollToSection } from '../../utils/sectionRouter.js';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncHero = () => {
  return (
    <section id="top" className="relative pt-2 sm:pt-4 pb-4 sm:pb-6 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-24">

      {/* Decorative Plus Crosshairs matching user mockup */}
      <div className="absolute top-24 left-8 text-[#512BD4]/40 font-mono text-xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 left-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-72 left-6 text-[#512BD4]/30 font-mono text-sm font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-20 right-14 text-[#512BD4]/40 font-mono text-xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-60 right-8 text-[#512BD4]/30 font-mono text-sm font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-32 right-12 text-[#512BD4] font-mono text-3xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-24 right-4 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <DncSectionFlanks
        leftIndex="01"
        leftTag="HERO"
        leftBadgeText="⚡ ANNUAL EDITION"
        leftBadgeColor="bg-[#FFE600] text-black"
        leftSub="AMRAVATI 2026"
        rightIndex=".NET 11"
        rightTag="C# 14"
        rightBadgeText="🚀 IN-PERSON"
        rightBadgeColor="bg-[#00BDD6] text-black"
        rightSub="PRPCEM CAMPUS"
      />

      {/* Top Floating Badges bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3.5 sm:px-4 py-1.5 rounded-full border-[2px] border-black shadow-[2px_2px_0px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-[#512BD4] shrink-0"></span>
          <span>{eventData.organizer.badge}</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#00BDD6] text-black font-mono font-bold text-[11px] sm:text-xs px-3.5 sm:px-4 py-1.5 rounded-full border-[2px] border-black shadow-[2px_2px_0px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-black shrink-0"></span>
          <span>{eventData.duration}</span>
        </div>
      </div>

      {/* Main Neo-Brutalist Hero Card */}
      <div className="relative z-10 bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] max-w-5xl mx-auto overflow-hidden">
        {/* Decorative corner tag for desktop */}
        <div className="absolute top-0 right-0 bg-[#00BDD6] border-b-[2.5px] border-l-[2.5px] border-black font-mono font-bold text-xs px-6 py-2 uppercase rounded-bl-2xl rounded-tr-[29px] shadow-[2px_2px_0px_0px_#000] hidden md:block text-black tracking-wider">
          AMRAVATI • PRPCEM
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-1">
            {/* Edition Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FAF8FF] border-[2px] border-black rounded-full px-3.5 py-1.5 mb-4 shadow-[1.5px_1.5px_0px_0px_#000]">
              <Calendar className="w-3.5 h-3.5 text-[#512BD4] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-black uppercase tracking-wider">
                {eventData.dateFormatted}
              </span>
            </div>

            {/* Block-Aligned Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black font-sans tracking-tight text-black leading-[0.98] uppercase mb-4">
              <span className="block text-black">.NET CONF</span>
              <span className="block text-[#512BD4] mt-1 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem]">
                2026 AMRAVATI
              </span>
            </h1>

            {/* Exact Description */}
            <p className="text-stone-800 font-sans text-sm sm:text-base md:text-[17px] font-medium leading-relaxed mb-5 max-w-xl">
              Central India's premier developer event for Amravati, celebrating the broader Microsoft ecosystem — from modern .NET and Azure cloud to Generative AI and developer tooling.
            </p>

            {/* College Name & Location Pill - Single Clean Line */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs font-bold text-[#512BD4] font-mono mb-6 bg-white border-[2px] border-black px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[2px_2px_0px_0px_#000] max-w-full">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#512BD4] shrink-0" />
              <span className="whitespace-nowrap">{eventData.organizer.institution}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <a
                href="/register"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('/register');
                }}
                className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-black text-xs sm:text-sm md:text-base font-sans uppercase px-6 py-3.5 rounded-full border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2.5 text-center cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BDD6] shrink-0" />
                <span>REGISTER INTEREST</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </a>

              <a
                href="/badge"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('/badge');
                }}
                className="bg-white hover:bg-[#EEEAFB] text-[#512BD4] font-black text-xs sm:text-sm md:text-base font-sans uppercase px-5 py-3.5 rounded-full border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#512BD4]" />
                <span>GET ATTENDEE BADGE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Developer Terminal & Architecture Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-2 lg:order-2 w-full mt-4 lg:mt-0">
            <div className="w-full bg-[#13063A] border-[2.5px] sm:border-[3px] border-black rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(81,43,212,0.35)] sm:shadow-[6px_6px_0px_0px_#512BD4] text-white">
              {/* Window Header */}
              <div className="bg-[#1C0A52] border-b-[2px] border-black/40 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/30 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/30 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/30 inline-block" />
                </div>
                <div className="font-mono text-[11px] font-bold text-stone-300 flex items-center gap-1.5">
                  <span className="text-[#00BDD6]">Program.cs</span>
                  <span className="text-stone-500">·</span>
                  <span className="text-stone-400">.NET 11</span>
                </div>
                <div className="text-[10px] font-mono font-bold bg-[#512BD4] px-2 py-0.5 rounded border border-white/20 text-white">
                  C# 14
                </div>
              </div>

              {/* Code Snippet matching image */}
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-stone-200">
                <p className="text-stone-500">// Central India · Annual Conference</p>
                <p>
                  <span className="text-[#D600AA] font-bold">var</span> builder =
                </p>
                <p>
                  WebApplication.<span className="text-[#00BDD6]">CreateBuilder</span>(args);
                </p>
                <p className="mt-2 text-stone-300">
                  builder.Services.<span className="text-[#00BDD6]">AddDotNetConf</span>(cfg =&gt; &#123;
                </p>
                <p className="pl-4 text-stone-300">
                  cfg.Campus = <span className="text-[#FFD13B]">"PRPCEM Amravati"</span>;
                </p>
                <p className="pl-4 text-stone-300">
                  cfg.Edition = <span className="text-[#FFD13B]">"2026 In-Person"</span>;
                </p>
                <p className="pl-4 text-stone-300">
                  cfg.Tracks = [<span className="text-[#00BDD6]">"Cloud"</span>, <span className="text-[#00BDD6]">"Azure AI"</span>,
                </p>
                <p className="pl-4 text-stone-300">
                  <span className="text-[#00BDD6]">"Microservices"</span>];
                </p>
                <p className="text-stone-300">&#125;);</p>
                <p className="mt-2">
                  <span className="text-[#D600AA] font-bold">var</span> app = builder.<span className="text-[#00BDD6]">Build</span>();
                </p>
                <p>
                  <span className="text-[#D600AA] font-bold">await</span> app.<span className="text-[#00BDD6]">RunAsync</span>();
                </p>
              </div>

              {/* Terminal Execution Output Card */}
              <div className="bg-[#0B0220] border-t-[2px] border-black/40 p-3.5 sm:p-4">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-emerald-400 mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    $ dotnet run --project dnc26
                  </span>
                  <span className="text-stone-400">Build: 0 errors</span>
                </div>

                {/* Tech Badges matching image */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                  <span className="bg-[#512BD4] text-white text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-black/40">
                    .NET 11
                  </span>
                  <span className="bg-[#00BDD6] text-black text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-black/40">
                    C# 14
                  </span>
                  <span className="bg-[#D600AA] text-white text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-black/40">
                    Azure AI
                  </span>
                  <span className="bg-[#FFD13B] text-black text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-black/40">
                    Cloud Native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Unified Announcement & Highlights Card (matching image below the main card) */}
      <div className="mt-4 sm:mt-6 bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-4 sm:p-6 shadow-[5px_5px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Part: Coming Soon Notice */}
          <div className="lg:col-span-6 flex items-start gap-3.5 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-black/15 pb-4 lg:pb-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EEEAFB] text-[#512BD4] border-[2px] border-black flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_0px_#000]">
              <Calendar className="w-5 h-5 text-[#512BD4]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black font-sans uppercase text-[#14053A] leading-tight mb-1">
                .NET CONF 2026 • COMING SOON
              </div>
              <p className="text-[11px] sm:text-xs text-stone-600 font-sans leading-relaxed">
                Official dates, session tracks, and speaker lineups will be announced soon. Register your interest below for <span className="font-bold text-black">priority delegate updates!</span>
              </p>
            </div>
          </div>

          {/* Right Part: 3 Pillar Badges (Community, Learning, Networking) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-2">
            {/* 1. Community */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#E0F7FA] text-[#00838F] border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
                <Users className="w-4 h-4 text-[#00838F]" />
              </div>
              <div>
                <span className="text-xs font-black font-sans text-black block leading-none">
                  Community
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-1">
                  Developers · Students · Professionals
                </span>
              </div>
            </div>

            {/* 2. Learning */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
                <Zap className="w-4 h-4 text-[#512BD4]" />
              </div>
              <div>
                <span className="text-xs font-black font-sans text-black block leading-none">
                  Learning
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-1">
                  Sessions · Workshops · Keynotes
                </span>
              </div>
            </div>

            {/* 3. Networking */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#F3E8FF] text-[#7E22CE] border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
                <Trophy className="w-4 h-4 text-[#7E22CE]" />
              </div>
              <div>
                <span className="text-xs font-black font-sans text-black block leading-none">
                  Networking
                </span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-1">
                  Ideas · Projects · Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncHero;
