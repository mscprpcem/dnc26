import React from 'react';
import {
  Heart,
  MapPin,
  ArrowUpRight,
  Settings,
  Sun,
  Users,
  FileText,
  Mail,
  Building2,
} from 'lucide-react';
import { eventData } from '../../data/event.js';

export const DncFooter = ({ onSwitchToClassic }) => {
  return (
    <footer className="mt-4 sm:mt-6 font-sans select-none relative overflow-hidden bg-[#0C0227]">
      {/* Top Stepped Cyber Ribbon Banner */}
      <div className="relative w-full select-none">
        <div className="w-full bg-[#00F0FF] border-y-[2.5px] border-black py-2.5 sm:py-3 px-4 sm:px-8 flex items-center justify-between text-black relative z-10 shadow-[0_3px_0px_0px_#000]">
          {/* Left slanted slashes */}
          <div className="flex items-center text-[#7C3AED] font-mono font-black text-sm sm:text-base tracking-widest pl-2 sm:pl-4">
            ////
          </div>

          {/* Center announcement text */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-black font-mono font-black text-[11px] sm:text-xs md:text-sm tracking-wider uppercase px-2 text-center">
            <span className="text-[#7C3AED] text-sm font-bold">✦</span>
            <span className="whitespace-nowrap">.NET CONF 2026 AMRAVATI</span>
            <span className="text-black font-black">•</span>
            <span className="whitespace-nowrap">PRPCEM CAMPUS</span>
            <span className="text-black font-black">•</span>
            <span className="whitespace-nowrap">IN-PERSON EDITION</span>
            <span className="text-[#7C3AED] text-sm font-bold">✦</span>
          </div>

          {/* Right slanted slashes */}
          <div className="flex items-center text-[#7C3AED] font-mono font-black text-sm sm:text-base tracking-widest pr-2 sm:pr-4">
            ////
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Col 1: Overview & Campus Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left relative">
            {/* Header: .NET Circle Badge + Title */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#512BD4] border-2 border-[#6D3DF2] shadow-[0_0_24px_rgba(81,43,212,0.45)] flex items-center justify-center text-white font-mono font-black text-xl select-none shrink-0">
                .NET
              </div>
              <div className="flex flex-col">
                <div className="relative inline-flex items-center">
                  <h3 className="text-white font-black text-2xl sm:text-3xl font-sans tracking-tight">
                    .NET Conf
                  </h3>
                  {/* Lilac Radiant burst dashes on top-right */}
                  <span className="absolute -top-2.5 -right-6 text-[#C084FC] pointer-events-none select-none">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="6" y1="6" x2="2" y2="2" />
                      <line x1="12" y1="5" x2="12" y2="1" />
                      <line x1="18" y1="6" x2="22" y2="2" />
                    </svg>
                  </span>
                </div>
                <span className="text-[#A855F7] font-black text-lg sm:text-xl font-mono tracking-wider uppercase mt-0.5">
                  2026 AMRAVATI
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              Central India's premier developer conference for the Microsoft ecosystem, organized by the Microsoft Student Club at P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati.
            </p>

            {/* Location Pill Box */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#140639] border border-purple-800/50 flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.3)] max-w-md">
              <div className="w-8 h-8 rounded-full bg-[#512BD4]/40 border border-[#8B5CF6]/40 flex items-center justify-center shrink-0 text-[#C084FC]">
                <MapPin className="w-4 h-4 fill-[#A855F7] text-[#140639]" />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium leading-snug">
                P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati
              </span>
            </div>

            {/* Slanted cyber purple stripes on bottom-left */}
            <div className="hidden xl:flex flex-col gap-1.5 pointer-events-none select-none opacity-40 mt-1">
              <div className="w-10 h-2 bg-[#512BD4] -rotate-45 rounded-sm" />
              <div className="w-10 h-2 bg-[#512BD4] -rotate-45 rounded-sm" />
            </div>
          </div>

          {/* Col 2: Theme / Mode Switcher (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-left border-t lg:border-t-0 lg:border-l border-purple-900/40 lg:pl-6 pt-6 lg:pt-0">
            {/* Header with Settings Icon Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#512BD4] border border-[#6D3DF2] shadow-[0_0_12px_rgba(81,43,212,0.4)] flex items-center justify-center text-white shrink-0">
                <Settings className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="text-white font-mono font-black text-sm tracking-wider uppercase">
                DESIGN THEME
              </span>
            </div>

            <p className="text-stone-400 text-xs font-mono leading-relaxed mt-1">
              Switch between official presentation modes:
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {/* Normal Mode Button */}
              <button
                type="button"
                onClick={() => onSwitchToClassic && onSwitchToClassic()}
                className="w-full py-3 px-4 rounded-2xl border border-purple-900/60 bg-[#120531] hover:border-purple-600/80 hover:bg-[#190649] transition-all flex items-center justify-between group cursor-pointer text-left"
                title="Switch to Normal (.NET Official) Mode"
              >
                <span className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full border-2 border-[#7C3AED] group-hover:border-[#A855F7] transition-colors flex items-center justify-center" />
                  <span className="text-white font-mono font-bold text-xs sm:text-sm tracking-wider">
                    NORMAL MODE
                  </span>
                </span>
                <span className="bg-[#2A1463] text-[#A78BFA] px-2.5 py-1 rounded-lg text-xs font-mono font-medium">
                  Official
                </span>
              </button>

              {/* Neo-Brutalism Button (Active) */}
              <div className="relative">
                <div
                  className="w-full py-3 px-4 rounded-2xl bg-[#00F0FF] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-between text-black select-none"
                  title="Currently in Neo-Brutalism Mode"
                >
                  <span className="flex items-center gap-2.5">
                    <Sun className="w-5 h-5 text-black stroke-[2.5]" />
                    <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-black">
                      NEO-BRUTALISM
                    </span>
                  </span>
                  <span className="bg-black text-[#00F0FF] px-2.5 py-1 rounded-lg font-mono font-black text-xs tracking-wider">
                    ACTIVE
                  </span>
                </div>

                {/* 3 Cyan radiant burst lines on right side */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 text-[#00F0FF] pointer-events-none select-none hidden sm:block">
                  <svg width="18" height="26" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="2" y1="8" x2="16" y2="4" />
                    <line x1="2" y1="16" x2="20" y2="16" />
                    <line x1="2" y1="24" x2="16" y2="28" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Community & Conduct (4 cols - fits full email on one line) */}
          <div className="lg:col-span-4 flex flex-col gap-3 text-left border-t lg:border-t-0 lg:border-l border-purple-900/40 lg:pl-6 pt-6 lg:pt-0 relative">
            {/* Header with Users Icon Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#512BD4] border border-[#6D3DF2] shadow-[0_0_12px_rgba(81,43,212,0.4)] flex items-center justify-center text-white shrink-0">
                <Users className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="text-white font-mono font-black text-sm tracking-wider uppercase">
                COMMUNITY & CONDUCT
              </span>
            </div>

            <ul className="flex flex-col gap-3.5 font-sans mt-3">
              <li>
                <a
                  href="https://dotnetfoundation.org/about/code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-[#00F0FF] flex items-center justify-between text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] group-hover:text-[#00F0FF] transition-colors shrink-0" />
                    <span>Code of Conduct</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#00F0FF] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${eventData.contactEmail}`}
                  className="text-stone-300 hover:text-[#00F0FF] flex items-center gap-3 text-xs sm:text-[13px] font-medium transition-colors group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] group-hover:text-[#00F0FF] transition-colors shrink-0" />
                  <span className="whitespace-nowrap font-mono">{eventData.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.mscprpcem.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-[#00F0FF] flex items-center justify-between text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] group-hover:text-[#00F0FF] transition-colors shrink-0" />
                    <span>MSC PRPCEM Chapter</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#00F0FF] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://prpotepatilengg.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-[#00F0FF] flex items-center justify-between text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] group-hover:text-[#00F0FF] transition-colors shrink-0" />
                    <span>PRPCEM College</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#00F0FF] transition-colors" />
                </a>
              </li>
            </ul>

            {/* Decorative slanted cyber purple stripes on far right */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col gap-2 pointer-events-none select-none opacity-30">
              <div className="w-14 h-2 bg-[#512BD4] -rotate-45 rounded-sm" />
              <div className="w-14 h-2 bg-[#512BD4] -rotate-45 rounded-sm" />
              <div className="w-14 h-2 bg-[#512BD4] -rotate-45 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Bottom copyright line with dot grids */}
        <div className="border-t border-purple-900/50 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          {/* Left: 4x4 Dot matrix + Copyright */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:grid grid-cols-4 gap-1.5 opacity-60">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-[#7C3AED]" />
              ))}
            </div>
            <span>
              &copy; {eventData.year} .NET Conf Amravati - PRPCEM. All rights reserved.
            </span>
          </div>

          {/* Right: Heart + Organized with + Purple circle + By + 4x4 Dot matrix */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#FF2E74] fill-[#FF2E74]" />
              <span>Organized with</span>
              <span className="w-3.5 h-3.5 rounded-full border-2 border-[#7C3AED] inline-block" />
              <span>by Microsoft Student Club PRPCEM</span>
            </div>
            <div className="hidden sm:grid grid-cols-4 gap-1.5 opacity-60">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-[#7C3AED]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
