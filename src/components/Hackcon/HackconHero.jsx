import React from 'react';
import { ArrowUpRight, Calendar, MapPin, Sparkles, Flame, Tent, Trees, Users, Heart } from 'lucide-react';

export const HackconHero = () => {
  return (
    <section id="hackcon-hero" className="relative pt-6 sm:pt-10 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Decorative Camp Scene Illustration (Pixel trees, Campfire, Tent, Bus, Mascot Avatars) */}
      <div className="w-full relative min-h-[140px] sm:min-h-[180px] flex items-end justify-between px-2 sm:px-8 mb-4 pointer-events-none select-none overflow-hidden">
        {/* Left Side: Pine Trees & Camp Tent */}
        <div className="flex items-end gap-2 sm:gap-4">
          {/* Pine Trees Cluster */}
          <div className="relative flex items-end">
            <svg className="w-12 h-20 sm:w-16 sm:h-28 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" viewBox="0 0 60 100" fill="none">
              {/* Trunk */}
              <rect x="25" y="70" width="10" height="25" fill="#5D3A1A" stroke="#000" strokeWidth="2" />
              {/* Foliage Layers */}
              <polygon points="30,10 50,40 10,40" fill="#2E6B47" stroke="#000" strokeWidth="2.5" />
              <polygon points="30,30 55,60 5,60" fill="#387F55" stroke="#000" strokeWidth="2.5" />
              <polygon points="30,48 58,78 2,78" fill="#449765" stroke="#000" strokeWidth="2.5" />
            </svg>
            <svg className="w-10 h-16 sm:w-12 sm:h-22 -ml-3 sm:-ml-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" viewBox="0 0 60 100" fill="none">
              <rect x="25" y="70" width="10" height="25" fill="#5D3A1A" stroke="#000" strokeWidth="2" />
              <polygon points="30,15 48,42 12,42" fill="#2E6B47" stroke="#000" strokeWidth="2.5" />
              <polygon points="30,32 52,58 8,58" fill="#387F55" stroke="#000" strokeWidth="2.5" />
              <polygon points="30,48 56,76 4,76" fill="#449765" stroke="#000" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Canvas A-Frame Camp Tent */}
          <div className="hidden sm:block relative">
            <svg className="w-20 h-16 sm:w-24 sm:h-20 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.9)]" viewBox="0 0 100 80" fill="none">
              {/* Tent Wall */}
              <polygon points="50,10 90,70 10,70" fill="#2979FF" stroke="#000" strokeWidth="2.5" />
              {/* Tent Doorway Flap */}
              <polygon points="50,10 65,70 35,70" fill="#FFDB43" stroke="#000" strokeWidth="2" />
              <polygon points="50,22 60,70 40,70" fill="#111111" />
              {/* Pegs */}
              <line x1="10" y1="70" x2="3" y2="76" stroke="#000" strokeWidth="2.5" />
              <line x1="90" y1="70" x2="97" y2="76" stroke="#000" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Fox Scout Mascot */}
          <div className="hidden md:flex flex-col items-center bg-[#FF8A50] border-[2px] border-black rounded-full p-2 shadow-[2px_2px_0px_0px_#000] transform -rotate-6">
            <span className="text-2xl" role="img" aria-label="Fox mascot">🦊</span>
          </div>
        </div>

        {/* Center: Flickering Campfire */}
        <div className="relative flex flex-col items-center pb-2">
          {/* Flame */}
          <div className="relative animate-flicker">
            <div className="w-8 h-10 sm:w-10 sm:h-12 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-t-full rounded-b-lg border-[2px] border-black shadow-[0_0_15px_rgba(255,219,67,0.8)] flex items-center justify-center">
              <div className="w-3 h-5 bg-yellow-100 rounded-full"></div>
            </div>
          </div>
          {/* Firewood Logs */}
          <div className="flex items-center -mt-2">
            <div className="w-8 h-3 bg-[#6D4C41] border-[1.5px] border-black rounded-full transform -rotate-12"></div>
            <div className="w-8 h-3 bg-[#5D4037] border-[1.5px] border-black rounded-full transform rotate-12 -ml-3"></div>
          </div>
          <span className="text-[10px] font-mono font-bold text-yellow-200 mt-1 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-full">
            CAMPFIRE
          </span>
        </div>

        {/* Right Side: Yellow Camper Bus & Pine Trees */}
        <div className="flex items-end gap-2 sm:gap-4">
          {/* Bear Mascot */}
          <div className="hidden md:flex flex-col items-center bg-[#D7CCC8] border-[2px] border-black rounded-full p-2 shadow-[2px_2px_0px_0px_#000] transform rotate-6">
            <span className="text-2xl" role="img" aria-label="Bear mascot">🐻</span>
          </div>

          {/* Yellow Camp Bus */}
          <div className="relative">
            <svg className="w-24 h-14 sm:w-32 sm:h-18 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.9)]" viewBox="0 0 140 70" fill="none">
              {/* Bus body */}
              <rect x="10" y="15" width="115" height="38" rx="8" fill="#FFDB43" stroke="#000" strokeWidth="2.5" />
              {/* Stripe */}
              <rect x="10" y="36" width="115" height="5" fill="#111111" />
              {/* Windows */}
              <rect x="22" y="20" width="18" height="12" rx="2" fill="#E0F7FA" stroke="#000" strokeWidth="1.5" />
              <rect x="46" y="20" width="18" height="12" rx="2" fill="#E0F7FA" stroke="#000" strokeWidth="1.5" />
              <rect x="70" y="20" width="18" height="12" rx="2" fill="#E0F7FA" stroke="#000" strokeWidth="1.5" />
              <rect x="94" y="20" width="22" height="16" rx="2" fill="#E0F7FA" stroke="#000" strokeWidth="1.5" />
              {/* Wheels */}
              <circle cx="35" cy="53" r="10" fill="#212121" stroke="#000" strokeWidth="2" />
              <circle cx="35" cy="53" r="4" fill="#EEEEEE" />
              <circle cx="100" cy="53" r="10" fill="#212121" stroke="#000" strokeWidth="2" />
              <circle cx="100" cy="53" r="4" fill="#EEEEEE" />
            </svg>
          </div>

          {/* Right Spruce Tree */}
          <svg className="hidden sm:block w-12 h-22 sm:w-14 sm:h-26 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" viewBox="0 0 60 100" fill="none">
            <rect x="25" y="70" width="10" height="25" fill="#5D3A1A" stroke="#000" strokeWidth="2" />
            <polygon points="30,10 50,40 10,40" fill="#2E6B47" stroke="#000" strokeWidth="2.5" />
            <polygon points="30,30 55,60 5,60" fill="#387F55" stroke="#000" strokeWidth="2.5" />
            <polygon points="30,48 58,78 2,78" fill="#449765" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="relative bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#000000] text-center max-w-3xl mx-auto">
        {/* Floating Decorative Badges */}
        <div className="absolute -top-4 -left-3 sm:-left-6 bg-[#70D6C7] text-black text-xs font-mono font-bold px-3 py-1.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] transform -rotate-6 hidden sm:flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CABINS & MEALS INCLUDED</span>
        </div>

        <div className="absolute -top-4 -right-3 sm:-right-6 bg-[#FF9E79] text-black text-xs font-mono font-bold px-3 py-1.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] transform rotate-6 hidden sm:flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" />
          <span>300+ ORGANIZERS</span>
        </div>

        {/* Presenter pill */}
        <div className="inline-flex items-center gap-2 bg-stone-100 border-[2px] border-black rounded-full px-4 py-1.5 mb-5 shadow-[2px_2px_0px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span className="text-xs font-mono font-black text-stone-900 tracking-wider uppercase">
            MAJOR LEAGUE HACKING PRESENTS
          </span>
        </div>

        {/* Hero Title with playful typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black font-sans leading-none uppercase mb-4">
          MLH HACKCON
        </h1>

        {/* Subheading / Tagline */}
        <p className="text-lg sm:text-xl font-bold text-stone-800 max-w-xl mx-auto leading-snug mb-6">
          The official summer conference for hackathon organizers, hacker community leaders, and student tech directors.
        </p>

        {/* Info pills (Date, Location, Format) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <div className="flex items-center gap-1.5 bg-[#FFDB43] text-black border-[2px] border-black rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-mono font-bold shadow-[2px_2px_0px_0px_#000]">
            <Calendar className="w-4 h-4" />
            <span>AUGUST 7-9, 2026</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#70D6C7] text-black border-[2px] border-black rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-mono font-bold shadow-[2px_2px_0px_0px_#000]">
            <MapPin className="w-4 h-4" />
            <span>CAMP PONTIAC • COPAKE, NY</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#FF9E79] text-black border-[2px] border-black rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-mono font-bold shadow-[2px_2px_0px_0px_#000]">
            <Tent className="w-4 h-4" />
            <span>SUMMER CAMP RETREAT</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#hackcon-register"
            className="w-full sm:w-auto bg-[#FFDB43] hover:bg-[#FFE368] text-black font-black text-sm sm:text-base font-sans uppercase px-8 py-3.5 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-2"
          >
            <span>ATTEND HACKCON</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </a>

          <a
            href="#hackcon-why-attend"
            className="w-full sm:w-auto bg-white hover:bg-stone-50 text-black font-bold text-sm sm:text-base font-sans uppercase px-6 py-3.5 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-2"
          >
            <span>EXPLORE THE CAMP</span>
            <Trees className="w-4 h-4" />
          </a>
        </div>

        {/* Micro reassurance banner */}
        <div className="mt-8 pt-6 border-t-[2px] border-black/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-bold text-stone-600">
          <span className="flex items-center gap-1">
            <span className="text-emerald-600">✓</span> Lodging Provided
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-600">✓</span> All Meals Included
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-600">✓</span> Travel Bus from NYC
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-600">✓</span> 30+ Workshops & Talks
          </span>
        </div>
      </div>
    </section>
  );
};

export default HackconHero;
