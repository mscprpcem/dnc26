import React from 'react';
import { ArrowUpRight, Globe, Sparkles } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';

export const DncCommunity = () => {
  return (
    <section id="dnc-community" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="JOIN THE COMMUNITY" 
        badge="MSC PRPCEM"
        theme="purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* WhatsApp Card */}
        <div className="bg-[#E8F5E9] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#25D366] text-black font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full uppercase mb-3 sm:mb-4 shadow-[1.5px_1.5px_0px_0px_#000]">
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>OFFICIAL WHATSAPP GROUP</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black font-sans uppercase tracking-tight mb-2">
              Connect on WhatsApp
            </h3>

            <p className="text-stone-800 font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
              Join 1,000+ student developers, alumni, and tech enthusiasts across Amravati and Vidarbha. Get instant announcements, workshop reminders, and job opportunities.
            </p>
          </div>

          <a
            href={eventData.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-mono font-bold text-xs sm:text-sm uppercase py-3 sm:py-3.5 px-5 rounded-2xl border-[2px] sm:border-[2.5px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
          >
            <span>JOIN WHATSAPP COMMUNITY</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>

        {/* Chapter Channels Card */}
        <div className="bg-[#EEEAFB] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#512BD4] text-white font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full uppercase mb-3 sm:mb-4 shadow-[1.5px_1.5px_0px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER SOCIALS</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black font-sans uppercase tracking-tight mb-2">
              Follow MSC PRPCEM
            </h3>

            <p className="text-stone-800 font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
              Stay in the loop with open source codebases, technical write-ups, speaker spotlight releases, and event photo drops across all our active platforms.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            <a
              href={eventData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs py-2.5 sm:py-3 px-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] flex flex-col items-center justify-center gap-1 text-center"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
              <span className="text-[11px] sm:text-xs">LinkedIn</span>
            </a>

            <a
              href={eventData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs py-2.5 sm:py-3 px-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] flex flex-col items-center justify-center gap-1 text-center"
            >
              <GitHubIcon className="w-4 h-4 text-black" />
              <span className="text-[11px] sm:text-xs">GitHub</span>
            </a>

            <a
              href={eventData.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs py-2.5 sm:py-3 px-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] flex flex-col items-center justify-center gap-1 text-center"
            >
              <Globe className="w-4 h-4 text-[#512BD4]" />
              <span className="text-[11px] sm:text-xs">Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncCommunity;
