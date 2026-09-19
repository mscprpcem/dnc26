import React from 'react';
import { Heart, Sparkles, Compass, Tent, ArrowUpRight } from 'lucide-react';

export const HackconFooter = () => {
  return (
    <footer className="mt-16 bg-[#181818] border-t-[3px] border-black text-stone-300 font-sans">
      {/* Decorative firefly / camp banner */}
      <div className="bg-[#242424] border-b-[2px] border-black/40 py-3 px-4 text-center text-xs font-mono font-bold text-yellow-300 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
        <span>CAMP HACKCON XII • AUGUST 7-9, 2026 • CAMP PONTIAC, COPAKE NY</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Col 1: MLH Mission */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#E73927] border-[1.5px] border-black flex items-center justify-center text-white font-black text-xs">
                MLH
              </div>
              <span className="text-white font-black text-lg tracking-wider">
                MAJOR LEAGUE HACKING
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Major League Hacking is the official student hackathon league. Each year, we power over 300 weekend-long invention competitions that inspire innovation, cultivate community, and teach computer science skills to more than 100,000 students around the world.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-mono font-bold text-stone-400">Questions?</span>
              <a 
                href="mailto:hi@mlh.com" 
                className="text-[#FFDB43] hover:underline text-xs font-mono font-bold"
              >
                hi@mlh.com
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-3">
              CAMP RESOURCES
            </div>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a href="#hackcon-about" className="hover:text-[#FFDB43] transition-colors">
                  About Hackcon
                </a>
              </li>
              <li>
                <a href="#hackcon-why-attend" className="hover:text-[#FFDB43] transition-colors">
                  Why Attend
                </a>
              </li>
              <li>
                <a href="#hackcon-location" className="hover:text-[#FFDB43] transition-colors">
                  Camp Pontiac Location
                </a>
              </li>
              <li>
                <a href="#hackcon-faqs" className="hover:text-[#FFDB43] transition-colors">
                  Attendee FAQ
                </a>
              </li>
              <li>
                <a href="https://mlh.io/code-of-conduct" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDB43] flex items-center gap-1 transition-colors">
                  Code of Conduct <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community Programs */}
          <div className="md:col-span-3">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-3">
              MLH ECOSYSTEM
            </div>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a href="https://mlh.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDB43] flex items-center gap-1 transition-colors">
                  Major League Hacking <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://fellowship.mlh.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDB43] flex items-center gap-1 transition-colors">
                  MLH Fellowship <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://organizer.mlh.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDB43] flex items-center gap-1 transition-colors">
                  Organizer Playbook <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://discord.mlh.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDB43] flex items-center gap-1 transition-colors">
                  MLH Hacker Discord <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} Major League Hacking, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for hacker communities worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HackconFooter;
