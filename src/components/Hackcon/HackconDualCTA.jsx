import React from 'react';
import { ArrowUpRight, Ticket, Mic, CheckCircle, Sparkles } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconDualCTA = () => {
  return (
    <section id="hackcon-register" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="JOIN US AT CAMP" 
        badge="GET INVOLVED"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ticket / Attend Card (Yellow #FFDB43) */}
        <div className="bg-[#FFDB43] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between relative overflow-hidden">
          {/* Top Badge */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-black text-white font-mono font-bold text-xs px-3 py-1 rounded-full uppercase mb-4">
              <Ticket className="w-3.5 h-3.5 text-[#FFDB43]" />
              <span>REGISTRATION IS OPEN</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-black font-sans uppercase tracking-tight mb-3">
              Ready to Join the Camp?
            </h3>

            <p className="text-stone-900 font-sans text-sm sm:text-base mb-6 leading-relaxed">
              Grab your bunk before cabin capacity fills up! Every Hackcon pass is completely all-inclusive so you never have to pull out your wallet at camp.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-2.5 mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <CheckCircle className="w-4 h-4 fill-black text-[#FFDB43] shrink-0" />
                <span>2 Nights Cabin Lodging at Camp Pontiac</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <CheckCircle className="w-4 h-4 fill-black text-[#FFDB43] shrink-0" />
                <span>All Meals, Snacks, Campfire S’mores & Coffee</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <CheckCircle className="w-4 h-4 fill-black text-[#FFDB43] shrink-0" />
                <span>Full Access to 30+ Workshops & Unconference</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <CheckCircle className="w-4 h-4 fill-black text-[#FFDB43] shrink-0" />
                <span>Exclusive Limited-Edition Hackcon Swag Pack</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10">
            <a
              href="https://hackcon.mlh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-stone-50 text-black font-black text-base uppercase py-3.5 px-6 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
            >
              <span>REGISTER FOR HACKCON</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </a>
            <div className="mt-2 text-center text-[11px] font-mono font-bold text-black/70">
              * Student travel scholarships available upon application
            </div>
          </div>
        </div>

        {/* Speak / Call for Speakers Card (Mint #70D6C7) */}
        <div className="bg-[#70D6C7] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-black text-white font-mono font-bold text-xs px-3 py-1 rounded-full uppercase mb-4">
              <Mic className="w-3.5 h-3.5 text-[#70D6C7]" />
              <span>CALL FOR SPEAKERS</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-black font-sans uppercase tracking-tight mb-3">
              Share Your Knowledge
            </h3>

            <p className="text-stone-900 font-sans text-sm sm:text-base mb-6 leading-relaxed">
              Hackcon is by organizers, for organizers. If you’ve solved a tricky hurdle, built a clever hackathon tool, or spearheaded a unique community initiative, we want to hear from you!
            </p>

            {/* Topic ideas */}
            <div className="flex flex-col gap-2.5 mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono flex items-center justify-center shrink-0">1</span>
                <span>Fundraising, Pitch Decks & Corporate Relations</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono flex items-center justify-center shrink-0">2</span>
                <span>Judging Platforms, Live Streaming & Tech Stacks</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono flex items-center justify-center shrink-0">3</span>
                <span>Diversity, Mental Health & Hacker Well-being</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono flex items-center justify-center shrink-0">4</span>
                <span>First-time speakers welcomed & mentored by MLH</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <a
              href="https://hackcon.mlh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-stone-50 text-black font-black text-base uppercase py-3.5 px-6 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
            >
              <span>APPLY TO SPEAK</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </a>
            <div className="mt-2 text-center text-[11px] font-mono font-bold text-black/70">
              * All accepted speakers receive complimentary conference admission
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackconDualCTA;
