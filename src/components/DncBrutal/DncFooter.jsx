import React from 'react';
import { Heart, Sparkles, ArrowUpRight } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const DncFooter = () => {
  return (
    <footer className="mt-12 sm:mt-16 bg-[#10092A] border-t-[3px] border-black text-stone-300 font-sans">
      {/* Top Banner */}
      <div className="bg-[#190649] border-b-[2px] border-black py-2.5 sm:py-3 px-4 text-center text-[10px] sm:text-xs font-mono font-bold text-[#00BDD6] flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00BDD6] shrink-0" />
        <span className="truncate">.NET CONF 2026 AMRAVATI • PRPCEM CAMPUS • IN-PERSON EDITION</span>
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00BDD6] shrink-0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 sm:mb-10">
          {/* Col 1: Overview */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#512BD4] border-[1.5px] border-black flex items-center justify-center text-white font-black text-xs shadow-[1.5px_1.5px_0px_0px_#000]">
                .NET
              </div>
              <span className="text-white font-black text-base sm:text-lg tracking-wider font-sans">
                .NET CONF 2026 AMRAVATI
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Central India’s flagship developer conference for the Microsoft ecosystem, organized by the Microsoft Student Club at P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono font-bold text-stone-400">Questions?</span>
              <a 
                href={`mailto:${eventData.contactEmail}`} 
                className="text-[#00BDD6] hover:underline text-xs font-mono font-bold truncate"
              >
                {eventData.contactEmail}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-3">
              CONFERENCE
            </div>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a href="#dnc-hero" className="hover:text-[#00BDD6] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#dnc-tracks" className="hover:text-[#00BDD6] transition-colors">
                  Session Tracks
                </a>
              </li>
              <li>
                <a href="#dnc-highlights" className="hover:text-[#00BDD6] transition-colors">
                  2024 Retrospective
                </a>
              </li>
              <li>
                <a href="#dnc-keynote" className="hover:text-[#00BDD6] transition-colors">
                  Keynote Spotlight
                </a>
              </li>
              <li>
                <a href="#dnc-agenda" className="hover:text-[#00BDD6] transition-colors">
                  Schedule Outline
                </a>
              </li>
              <li>
                <a href="#dnc-venue" className="hover:text-[#00BDD6] transition-colors">
                  PRPCEM Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Host */}
          <div className="md:col-span-3">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-3">
              COMMUNITY & HOST
            </div>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors">
                  MSC PRPCEM Website <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://prpotepatilengg.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors">
                  PRPCEM College <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors">
                  WhatsApp Community <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://dotnet.microsoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors">
                  Official .NET Portal <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 sm:pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} Microsoft Student Club (MSC), PRPCEM. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Organized with</span>
            <Heart className="w-3.5 h-3.5 text-[#D600AA] fill-current" />
            <span>for Amravati’s Developer Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
