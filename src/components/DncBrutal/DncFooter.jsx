import React from 'react';
import { Heart, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { scrollToSection } from '../../utils/sectionRouter.js';

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
          <div className="md:col-span-6 flex flex-col gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#512BD4] border-[1.5px] border-black flex items-center justify-center p-1 shadow-[1.5px_1.5px_0px_0px_#000]">
                <img
                  src="/mascot/bot_head.png"
                  alt=".NET Bot Mascot"
                  className="w-full h-full object-contain select-none"
                />
              </div>
              <span className="text-white font-black text-base sm:text-lg tracking-wider font-sans">
                {eventData.name}
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Central India’s premier developer conference for the Microsoft ecosystem, organized by the Microsoft Student Club at P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>{eventData.organizer.institution}, Amravati</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 text-left">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-3">
              CONFERENCE
            </div>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/about');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  About Overview
                </a>
              </li>
              <li>
                <a
                  href="/highlights"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/highlights');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  2024 Retrospective
                </a>
              </li>
              <li>
                <a
                  href="/keynote"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/keynote');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  Keynote Spotlight
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/schedule');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  Schedule Outline
                </a>
              </li>
              <li>
                <a
                  href="/venue"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/venue');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  PRPCEM Venue
                </a>
              </li>
              <li>
                <a
                  href="/badge"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/badge');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  Badge Studio
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/partners');
                  }}
                  className="hover:text-[#00BDD6] transition-colors cursor-pointer"
                >
                  Partners & Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Host */}
          <div className="md:col-span-3 text-left">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-3">
              COMMUNITY & CONDUCT
            </div>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a
                  href="https://dotnetfoundation.org/about/code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors"
                >
                  Code of Conduct <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${eventData.contactEmail}`}
                  className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors"
                >
                  {eventData.contactEmail} <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mscprpcem.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors"
                >
                  MSC PRPCEM Chapter <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://prpotepatilengg.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00BDD6] flex items-center gap-1 transition-colors"
                >
                  PRPCEM College <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 sm:pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-stone-500">
          <div>
            &copy; {eventData.year} .NET Conf Amravati · PRPCEM. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <img src="/mascot/bot_head.png" alt=".NET Bot" className="w-4 h-4 object-contain inline select-none" />
            <span>Organized with</span>
            <Heart className="w-3.5 h-3.5 text-[#E1306C] fill-[#E1306C]" />
            <span>by Microsoft Student Club PRPCEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
