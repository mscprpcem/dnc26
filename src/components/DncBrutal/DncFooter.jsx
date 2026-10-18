import React from 'react';
import {
  Heart,
  MapPin,
  ArrowUpRight,
  Settings,
  Sparkles,
  Users,
  FileText,
  Mail,
  Building2,
} from 'lucide-react';
import { eventData } from '../../data/event.js';
import { WarliDancersRibbon, WarliSawtoothBorder, WarliSun } from '../Warli/WarliMotifs.jsx';

export const DncFooter = ({ onSwitchToClassic }) => {
  return (
    <footer className="mt-8 sm:mt-12 font-sans select-none relative overflow-hidden bg-[#160604] border-t-2 border-[#FAF7F2]/40 text-[#FAF7F2]">
      {/* Top Warli Sawtooth Fringe */}
      <WarliSawtoothBorder fill="#FAF7F2" className="bg-[#160604]" />

      {/* Top Tarpa Dance Ribbon Banner */}
      <div className="relative w-full select-none bg-[#240B06] border-y-2 border-[#FAF7F2]/40">
        <div className="py-2.5 sm:py-3 px-4 sm:px-8 flex items-center justify-between text-[#FAF7F2]">
          {/* Left Chaukat Marks */}
          <div className="flex items-center text-[#E5A93C] font-mono font-black text-sm sm:text-base tracking-widest pl-2 sm:pl-4">
            ❖❖❖
          </div>

          {/* Center Announcement Text */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#FAF7F2] font-mono font-black text-[11px] sm:text-xs md:text-sm tracking-wider uppercase px-2 text-center">
            <span className="text-[#E5A93C] text-sm font-bold">✦</span>
            <span className="whitespace-nowrap">.NET CONF 2026 AMRAVATI</span>
            <span className="text-[#E5A93C] font-black">•</span>
            <span className="whitespace-nowrap">PRPCEM CAMPUS</span>
            <span className="text-[#E5A93C] font-black">•</span>
            <span className="whitespace-nowrap">WARLI FOLK ART EDITION</span>
            <span className="text-[#E5A93C] text-sm font-bold">✦</span>
          </div>

          {/* Right Chaukat Marks */}
          <div className="flex items-center text-[#E5A93C] font-mono font-black text-sm sm:text-base tracking-widest pr-2 sm:pr-4">
            ❖❖❖
          </div>
        </div>
      </div>

      {/* Moving Tarpa Dancers Strip */}
      <div className="border-b border-[#FAF7F2]/20 bg-[#1D0805]">
        <WarliDancersRibbon fill="#FAF7F2" height={36} className="py-1 opacity-80" />
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Col 1: Overview & Campus Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left relative">
            {/* Header: Warli .NET Badge + Title */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#38130D] border-2 border-[#FAF7F2] shadow-[3px_3px_0px_#FAF7F2] flex items-center justify-center text-[#E5A93C] font-mono font-black text-xl select-none shrink-0">
                .NET
              </div>
              <div className="flex flex-col">
                <div className="relative inline-flex items-center gap-2">
                  <h3 className="text-[#FAF7F2] font-black text-2xl sm:text-3xl font-sans tracking-tight">
                    .NET Conf
                  </h3>
                  <WarliSun size={24} fill="#FAF7F2" accent="#E5A93C" />
                </div>
                <span className="text-[#E5A93C] font-black text-lg sm:text-xl font-mono tracking-wider uppercase mt-0.5">
                  2026 AMRAVATI
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-[#E2D6CB] text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              Central India's premier developer conference for the Microsoft ecosystem, celebrating the convergence of modern cloud engineering with Maharashtra's sacred Warli tribal heritage. Hosted by Microsoft Student Club at PRPCEM, Amravati.
            </p>

            {/* Location Pill Box */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#240B06] border-2 border-[#FAF7F2]/40 flex items-center gap-3 shadow-[3px_3px_0px_#FAF7F2] max-w-md">
              <div className="w-8 h-8 rounded-full bg-[#38130D] border border-[#E5A93C] flex items-center justify-center shrink-0 text-[#E5A93C]">
                <MapPin className="w-4 h-4 fill-[#E5A93C] text-[#240B06]" />
              </div>
              <span className="text-[#FAF7F2] text-xs sm:text-sm font-medium leading-snug">
                P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati, Maharashtra
              </span>
            </div>

            {/* Folk Art Attribution Note */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#CBB9AA] mt-1">
              <span className="text-[#E5A93C]">✦</span>
              <span>Indigenous Tarpa circle & geometric Chaukat motifs</span>
            </div>
          </div>

          {/* Col 2: Theme / Mode Switcher (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-left border-t lg:border-t-0 lg:border-l border-[#FAF7F2]/20 lg:pl-6 pt-6 lg:pt-0">
            {/* Header with Settings Icon Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#38130D] border-2 border-[#FAF7F2] shadow-[2px_2px_0px_#FAF7F2] flex items-center justify-center text-[#E5A93C] shrink-0">
                <Settings className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-[#FAF7F2] font-mono font-black text-sm tracking-wider uppercase">
                EXPERIENCE THEME
              </span>
            </div>

            <p className="text-[#CBB9AA] text-xs font-mono leading-relaxed mt-1">
              Current presentation mode celebrating regional tribal art:
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {/* Warli Folk Art Mode (Active) */}
              <div className="relative">
                <div
                  className="w-full py-3 px-4 rounded-2xl bg-[#E5A93C] border-2 border-[#FAF7F2] shadow-[3px_3px_0px_#FAF7F2] flex items-center justify-between text-[#1A0704] select-none"
                  title="Currently in Warli Tribal Folk Art Theme"
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-[#1A0704] stroke-[2.5]" />
                    <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-[#1A0704]">
                      WARLI TRIBAL
                    </span>
                  </span>
                  <span className="bg-[#1A0704] text-[#E5A93C] px-2.5 py-1 rounded-lg font-mono font-black text-xs tracking-wider border border-[#FAF7F2]/40">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Normal / Classic Mode Button */}
              <button
                type="button"
                onClick={() => onSwitchToClassic && onSwitchToClassic()}
                className="w-full py-3 px-4 rounded-2xl border-2 border-[#FAF7F2]/40 bg-[#240B06] hover:border-[#E5A93C] hover:bg-[#38130D] transition-all flex items-center justify-between group cursor-pointer text-left"
                title="Switch to Normal (.NET Official) Mode"
              >
                <span className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full border-2 border-[#CBB9AA] group-hover:border-[#E5A93C] transition-colors flex items-center justify-center" />
                  <span className="text-[#FAF7F2] font-mono font-bold text-xs sm:text-sm tracking-wider">
                    CLASSIC MODE
                  </span>
                </span>
                <span className="bg-[#38130D] text-[#CBB9AA] px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-[#FAF7F2]/20">
                  Standard
                </span>
              </button>
            </div>
          </div>

          {/* Col 3: Community & Conduct (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 text-left border-t lg:border-t-0 lg:border-l border-[#FAF7F2]/20 lg:pl-6 pt-6 lg:pt-0 relative">
            {/* Header with Users Icon Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#38130D] border-2 border-[#FAF7F2] shadow-[2px_2px_0px_#FAF7F2] flex items-center justify-center text-[#E5A93C] shrink-0">
                <Users className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-[#FAF7F2] font-mono font-black text-sm tracking-wider uppercase">
                COMMUNITY & CONDUCT
              </span>
            </div>

            <ul className="flex flex-col gap-3.5 font-sans mt-3">
              <li>
                <a
                  href="https://dotnetfoundation.org/about/code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2D6CB] hover:text-[#E5A93C] flex items-center justify-between text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5A93C] group-hover:scale-110 transition-transform shrink-0" />
                    <span>Code of Conduct</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CBB9AA] group-hover:text-[#E5A93C] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${eventData.contactEmail}`}
                  className="text-[#E2D6CB] hover:text-[#E5A93C] flex items-center gap-3 text-xs sm:text-[13px] font-medium transition-colors group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5A93C] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="whitespace-nowrap font-mono">{eventData.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.mscprpcem.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2D6CB] hover:text-[#E5A93C] flex items-center justify-between text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5A93C] group-hover:scale-110 transition-transform shrink-0" />
                    <span>MSC PRPCEM Chapter</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CBB9AA] group-hover:text-[#E5A93C] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://prpotepatilengg.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2D6CB] hover:text-[#E5A93C] flex items-center justify-between text-xs sm:text-sm font-medium transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5A93C] group-hover:scale-110 transition-transform shrink-0" />
                    <span>PRPCEM College</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CBB9AA] group-hover:text-[#E5A93C] transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Warli Chaukat Separator */}
        <div className="border-t-2 border-[#FAF7F2]/30 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#CBB9AA]">
          {/* Left: Warli Diamond Stippling + Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-[#E5A93C] text-sm">❖</span>
            <span>
              &copy; {eventData.year} .NET Conf Amravati — PRPCEM. All rights reserved.
            </span>
          </div>

          {/* Right: Heart + Organized with Warli tribal spirit */}
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#E5A93C] fill-[#E5A93C]" />
            <span>Organized with Warli folk spirit by Microsoft Student Club PRPCEM</span>
            <span className="text-[#E5A93C] text-sm">❖</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
