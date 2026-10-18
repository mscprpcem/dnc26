import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Award, Users, Zap, Trophy, Code2, Image as ImageIcon } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { scrollToSection } from '../../utils/sectionRouter.js';
import DncSectionFlanks from './DncSectionFlanks.jsx';
import { 
  WarliDancersRibbon, 
  WarliSawtoothBorder, 
  WarliCornerOrnament, 
  WarliSun, 
  WarliPeacock 
} from '../Warli/WarliMotifs.jsx';

export const DncHero = () => {
  const [activeVisualTab, setActiveVisualTab] = useState('mural'); // 'mural' | 'code'

  return (
    <section id="top" className="relative pt-2 sm:pt-4 pb-4 sm:pb-6 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-24">

      {/* Decorative Warli Diamonds & Dots in side margins */}
      <div className="absolute top-24 left-8 text-[#E5A93C]/40 font-mono text-xl font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 left-16 text-[#FAF7F2]/60 font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-72 left-6 text-[#E5A93C]/30 font-mono text-sm font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute top-20 right-14 text-[#FAF7F2]/40 font-mono text-xl font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-60 right-8 text-[#E5A93C]/50 font-mono text-sm font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute bottom-32 right-12 text-[#FAF7F2]/60 font-mono text-3xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-24 right-4 text-[#E5A93C]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>

      {/* Side spaces gutter badges (Desktop) */}
      <DncSectionFlanks
        leftIndex="01"
        leftTag="WARLI"
        leftBadgeText="🌾 TRIBAL ART EDITION"
        leftBadgeColor="bg-[#E5A93C] text-[#180805]"
        leftSub="AMRAVATI 2026"
        rightIndex=".NET 11"
        rightTag="C# 14"
        rightBadgeText="🚀 PRPCEM CAMPUS"
        rightBadgeColor="bg-[#FAF7F2] text-[#180805]"
        rightSub="MAHARASHTRA"
      />

      {/* Top Floating Badges bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#260C07] text-[#FAF7F2] font-mono font-bold text-[11px] sm:text-xs px-3.5 sm:px-4 py-1.5 rounded-full border-[2px] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402]">
          <span className="w-2 h-2 rounded-full bg-[#E5A93C] shrink-0"></span>
          <span>{eventData.organizer.badge}</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#E5A93C] text-[#180805] font-mono font-bold text-[11px] sm:text-xs px-3.5 sm:px-4 py-1.5 rounded-full border-[2px] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402]">
          <span className="w-2 h-2 rounded-full bg-[#180805] shrink-0"></span>
          <span>{eventData.duration} • WARLI THEME</span>
        </div>
      </div>

      {/* Main Warli Earthen Hero Card */}
      <div className="relative z-10 bg-[#280D07] border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-11 shadow-[8px_8px_0px_0px_#120402] max-w-5xl mx-auto overflow-hidden text-[#FAF7F2]">
        
        {/* Warli Chaukat Corner Ornaments */}
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-3 left-3 opacity-80" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-3 right-3 opacity-80" />
        <WarliCornerOrnament position="bottom-left" fill="#FAF7F2" className="bottom-3 left-3 opacity-80" />
        <WarliCornerOrnament position="bottom-right" fill="#FAF7F2" className="bottom-3 right-3 opacity-80" />

        {/* Decorative corner tag for desktop */}
        <div className="absolute top-0 right-0 bg-[#E5A93C] border-b-[2.5px] border-l-[2.5px] border-[#FAF7F2] font-mono font-black text-xs px-6 py-2 uppercase rounded-bl-2xl rounded-tr-[29px] shadow-[2px_2px_0px_0px_#120402] hidden md:block text-[#180805] tracking-wider">
          WARLI ART • PRPCEM
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-1">
            {/* Edition Pill */}
            <div className="inline-flex items-center gap-2 bg-[#3A140E] border-[1.5px] border-[#FAF7F2] rounded-full px-3.5 py-1.5 mb-4 shadow-[1.5px_1.5px_0px_0px_#120402]">
              <Calendar className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FAF7F2] uppercase tracking-wider">
                {eventData.dateFormatted} • IN-PERSON
              </span>
            </div>

            {/* Block-Aligned Main Headline with Warli Colors */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black font-sans tracking-tight text-[#FAF7F2] leading-[0.98] uppercase mb-4">
              <span className="block text-[#FAF7F2]">.NET CONF</span>
              <span className="block text-[#E5A93C] mt-1 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                2026 AMRAVATI
              </span>
            </h1>

            {/* Warli Theme Tagline */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#E5A93C] uppercase tracking-widest mb-3 bg-[#1D0804] px-3 py-1 rounded-md border border-[#E5A93C]/40">
              <span>✦ INDIGENOUS WARLI ART × MODERN .NET 11 ✦</span>
            </div>

            {/* Description */}
            <p className="text-[#FAF7F2]/85 font-sans text-sm sm:text-base md:text-[16px] font-medium leading-relaxed mb-5 max-w-xl">
              Central India&rsquo;s premier developer event at PRPCEM Amravati, celebrating modern software engineering, Azure Cloud, and Generative AI &mdash; brought alive through the sacred geometric Warli painting heritage of Maharashtra.
            </p>

            {/* College Name & Location Pill */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs font-bold text-[#FAF7F2] font-mono mb-6 bg-[#38130D] border-[2px] border-[#FAF7F2] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[2px_2px_0px_0px_#120402] max-w-full">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A93C] shrink-0" />
              <span className="truncate max-w-[230px] xs:max-w-xs sm:max-w-none">{eventData.organizer.institution}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <a
                href="/register"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('/register');
                }}
                className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-black text-xs sm:text-sm md:text-base font-sans uppercase px-6 py-3.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2.5 text-center cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#180805] shrink-0" />
                <span>REGISTER INTEREST</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </a>

              <a
                href="/badge"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('/badge');
                }}
                className="bg-[#FAF7F2] hover:bg-[#FFFDF9] text-[#180805] font-black text-xs sm:text-sm md:text-base font-sans uppercase px-5 py-3.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#C84832]" />
                <span>WARLI BADGE STUDIO</span>
              </a>
            </div>
          </div>

          {/* Right Column: Warli Mural Showcase & Developer Terminal */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative order-2 lg:order-2 w-full mt-4 lg:mt-0">
            
            {/* View Switcher Tabs */}
            <div className="w-full flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('mural')}
                  className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeVisualTab === 'mural'
                      ? 'bg-[#E5A93C] text-[#180805] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402]'
                      : 'bg-[#38130D] text-[#FAF7F2]/80 border-transparent hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>WARLI MURAL</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('code')}
                  className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeVisualTab === 'code'
                      ? 'bg-[#E5A93C] text-[#180805] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402]'
                      : 'bg-[#38130D] text-[#FAF7F2]/80 border-transparent hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>PROGRAM.CS</span>
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#E5A93C] font-bold">
                {activeVisualTab === 'mural' ? 'TARPA & TECH TREE' : '.NET 11 • C# 14'}
              </span>
            </div>

            {/* TAB 1: Warli Mural Artwork Frame */}
            {activeVisualTab === 'mural' && (
              <div className="w-full bg-[#1E0905] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#120402] relative group">
                <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full overflow-hidden bg-[#2D0F0A]">
                  <img
                    src="/warli/warli_hero_art.jpg"
                    alt="Warli Folk Art .NET Conf 2026 Amravati Mural"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Clay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0905] via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Top Overlay Badge */}
                  <div className="absolute top-3 left-3 bg-[#180805]/90 border border-[#FAF7F2]/60 rounded-full px-3 py-1 backdrop-blur-sm text-[10px] font-mono font-bold text-[#E5A93C] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-pulse" />
                    <span>AUTHENTIC WARLI ART MURAL</span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-2.5 inset-x-3 bg-[#180805]/90 border border-[#FAF7F2]/40 rounded-xl px-3 py-1.5 backdrop-blur-sm flex items-center justify-between text-[10.5px] font-mono text-[#FAF7F2]">
                    <span className="truncate">Tarpa Dance Circle &amp; Tech Banyan Tree</span>
                    <span className="text-[#E5A93C] shrink-0 font-bold ml-2">PRPCEM &times; .NET</span>
                  </div>
                </div>

                {/* Sawtooth Chaukat Border Beneath Image */}
                <WarliSawtoothBorder fill="#FAF7F2" className="bg-[#180805] py-0.5" />
              </div>
            )}

            {/* TAB 2: Developer Terminal (Warli Styled) */}
            {activeVisualTab === 'code' && (
              <div className="w-full bg-[#180805] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#120402] text-[#FAF7F2]">
                {/* Window Header */}
                <div className="bg-[#2D0F0A] border-b-[2px] border-[#FAF7F2]/40 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#C84832] border border-black/30 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#E5A93C] border border-black/30 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/30 inline-block" />
                  </div>
                  <div className="font-mono text-[11px] font-bold text-stone-300 flex items-center gap-1.5">
                    <span className="text-[#E5A93C]">Program.cs</span>
                    <span className="text-stone-500">·</span>
                    <span className="text-[#FAF7F2]">.NET 11</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold bg-[#E5A93C] px-2 py-0.5 rounded text-[#180805]">
                    C# 14
                  </div>
                </div>

                {/* Code Snippet with Warli Theme */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-[#FAF7F2]/90 bg-[#180805]">
                  <p className="text-[#E5A93C]/80">// Central India · Warli Art &times; .NET Conf 2026</p>
                  <p>
                    <span className="text-[#E5A93C] font-bold">var</span> builder =
                  </p>
                  <p>
                    WebApplication.<span className="text-[#FAF7F2] font-bold">CreateBuilder</span>(args);
                  </p>
                  <p className="mt-2 text-[#FAF7F2]/80">
                    builder.Services.<span className="text-[#E5A93C]">AddDotNetConf</span>(cfg =&gt; &#123;
                  </p>
                  <p className="pl-4 text-[#FAF7F2]/80">
                    cfg.Theme = <span className="text-[#E5A93C]">"Warli Tribal Folk Art"</span>;
                  </p>
                  <p className="pl-4 text-[#FAF7F2]/80">
                    cfg.Campus = <span className="text-[#E5A93C]">"PRPCEM Amravati"</span>;
                  </p>
                  <p className="pl-4 text-[#FAF7F2]/80">
                    cfg.Tracks = [<span className="text-[#FAF7F2]">"Cloud"</span>, <span className="text-[#FAF7F2]">"Azure AI"</span>, <span className="text-[#FAF7F2]">"Blazor"</span>];
                  </p>
                  <p className="text-[#FAF7F2]/80">&#125;);</p>
                  <p className="mt-2">
                    <span className="text-[#E5A93C] font-bold">var</span> app = builder.<span className="text-[#FAF7F2] font-bold">Build</span>();
                  </p>
                  <p>
                    <span className="text-[#E5A93C] font-bold">await</span> app.<span className="text-[#FAF7F2] font-bold">RunAsync</span>();
                  </p>
                </div>

                {/* Terminal Output */}
                <div className="bg-[#120402] border-t-[2px] border-[#FAF7F2]/30 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#E5A93C] mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
                      $ dotnet run --project dnc26-warli
                    </span>
                    <span className="text-[#FAF7F2]/60">Build: 0 errors</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#FAF7F2]/10">
                    <span className="bg-[#E5A93C] text-[#180805] text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                      .NET 11
                    </span>
                    <span className="bg-[#FAF7F2] text-[#180805] text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                      C# 14
                    </span>
                    <span className="bg-[#C84832] text-[#FAF7F2] text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                      Azure AI
                    </span>
                    <span className="bg-[#38130D] text-[#E5A93C] text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/40">
                      Warli Edition
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* CONTINUOUS WARLI TARPA DANCERS RIBBON */}
      <div className="max-w-5xl mx-auto mt-4 mb-2 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-2xl py-2 px-3 shadow-[4px_4px_0px_0px_#120402]">
        <div className="flex items-center justify-between px-2 pb-1 border-b border-[#FAF7F2]/20 mb-1">
          <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#E5A93C] uppercase tracking-widest flex items-center gap-1.5">
            <span>🌾 TARPA COMMUNITY DANCE</span>
            <span>·</span>
            <span>UNITED IN CODE &amp; TRADITION</span>
          </span>
          <span className="text-[9px] font-mono text-[#FAF7F2]/60 hidden sm:inline">MAHARASHTRA FOLK ART</span>
        </div>
        <WarliDancersRibbon fill="#FAF7F2" height={44} />
      </div>

      {/* Bottom Announcement & Highlights Card */}
      <div className="mt-3 sm:mt-4 bg-[#260C07] border-[2.5px] border-[#FAF7F2] rounded-3xl p-4 sm:p-6 shadow-[6px_6px_0px_0px_#120402] max-w-5xl mx-auto text-[#FAF7F2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Part: Coming Soon Notice */}
          <div className="lg:col-span-6 flex items-start gap-3.5 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#FAF7F2]/20 pb-4 lg:pb-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#38130D] text-[#E5A93C] border-[2px] border-[#FAF7F2] flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_0px_#120402]">
              <Calendar className="w-5 h-5 text-[#E5A93C]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black font-sans uppercase text-[#E5A93C] leading-tight mb-1">
                .NET CONF 2026 • WARLI EDITION COMING SOON
              </div>
              <p className="text-[11px] sm:text-xs text-[#FAF7F2]/80 font-sans leading-relaxed">
                Official dates, session tracks, and speaker lineups will be announced soon. Register your interest below for <span className="font-bold text-[#E5A93C]">priority delegate updates!</span>
              </p>
            </div>
          </div>

          {/* Right Part: 3 Pillar Badges (Community, Learning, Networking) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-2">
            {/* 1. Community */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#E5A93C] text-[#180805] border-[1.5px] border-[#FAF7F2] flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <Users className="w-4 h-4 text-[#180805]" />
              </div>
              <div>
                <span className="text-xs font-black font-sans text-[#FAF7F2] block leading-none">
                  Community
                </span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-1">
                  Developers · Students · Artists
                </span>
              </div>
            </div>

            {/* 2. Learning */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C84832] text-[#FAF7F2] border-[1.5px] border-[#FAF7F2] flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <Zap className="w-4 h-4 text-[#FAF7F2]" />
              </div>
              <div>
                <span className="text-xs font-black font-sans text-[#FAF7F2] block leading-none">
                  Learning
                </span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-1">
                  .NET 11 · AI · Cloud
                </span>
              </div>
            </div>

            {/* 3. Networking */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF7F2] text-[#180805] border-[1.5px] border-[#FAF7F2] flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <Trophy className="w-4 h-4 text-[#180805]" />
              </div>
              <div>
                <span className="text-xs font-black font-sans text-[#FAF7F2] block leading-none">
                  Culture
                </span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-1">
                  Pride · Ideas · Vidarbha
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
