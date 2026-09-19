import React, { useState } from 'react';
import { Play, Sparkles, Award, Globe, Users, CheckCircle2, X } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconAbout = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const hackathons = [
    { name: 'Hack the North', location: 'Waterloo, Canada', tag: 'Flagship' },
    { name: 'Cal Hacks', location: 'UC Berkeley', tag: 'Collegiate' },
    { name: 'HackMIT', location: 'Cambridge, MA', tag: 'Flagship' },
    { name: 'PennApps', location: 'Univ. of Pennsylvania', tag: 'Original' },
    { name: 'TreeHacks', location: 'Stanford University', tag: 'Innovation' },
    { name: 'HackIllinois', location: 'UIUC Urbana', tag: 'Open Source' },
    { name: 'BostonHacks', location: 'Boston University', tag: 'Community' },
    { name: 'LA Hacks', location: 'UCLA Los Angeles', tag: 'West Coast' },
    { name: 'TartanHacks', location: 'Carnegie Mellon', tag: 'Tech' },
    { name: 'VandyHacks', location: 'Vanderbilt Univ.', tag: 'South' },
  ];

  return (
    <section id="hackcon-about" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="JOIN HUNDREDS OF ORGANIZERS" 
        badge="CAMP COMMUNITY"
      />

      {/* Main Container Card */}
      <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#000]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-[#70D6C7] text-black font-mono font-bold text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE LARGEST GATHERING OF ITS KIND</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black font-sans tracking-tight uppercase leading-tight">
              Where the leaders of tech communities unite in the woods.
            </h3>

            <p className="text-stone-700 font-sans text-base sm:text-lg leading-relaxed">
              Hackcon is Major League Hacking’s annual summer retreat designed exclusively for hackathon organizers, hacker society leads, and developer community pioneers. 
            </p>

            <p className="text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
              Whether you are putting together your school’s very first 60-hacker workshop or scaling an international 1,500-attendee stadium event, you will share unfiltered learnings, master sponsorship pitch decks, and build lifelong friendships around the campfires.
            </p>

            {/* Stat Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#FFF4C2] border-[2px] border-black rounded-2xl p-3 text-center shadow-[3px_3px_0px_0px_#000]">
                <div className="text-2xl sm:text-3xl font-black font-mono text-black">300+</div>
                <div className="text-[11px] sm:text-xs font-bold text-stone-700 font-mono">Organizers</div>
              </div>
              <div className="bg-[#E3F2FD] border-[2px] border-black rounded-2xl p-3 text-center shadow-[3px_3px_0px_0px_#000]">
                <div className="text-2xl sm:text-3xl font-black font-mono text-black">120+</div>
                <div className="text-[11px] sm:text-xs font-bold text-stone-700 font-mono">Universities</div>
              </div>
              <div className="bg-[#E8F5E9] border-[2px] border-black rounded-2xl p-3 text-center shadow-[3px_3px_0px_0px_#000]">
                <div className="text-2xl sm:text-3xl font-black font-mono text-black">3 Days</div>
                <div className="text-[11px] sm:text-xs font-bold text-stone-700 font-mono">Camp Retreat</div>
              </div>
            </div>
          </div>

          {/* Right Video / Camp Teaser Box */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#212121] border-[3px] border-black rounded-2xl sm:rounded-3xl p-4 shadow-[6px_6px_0px_0px_#000] group overflow-hidden">
              {/* Camp Visual Graphic Frame */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-emerald-800 via-teal-900 to-stone-900 border-[2px] border-black flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Background stars / camp glow */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Floating Play Button */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="relative z-10 w-16 h-16 rounded-full bg-[#FFDB43] hover:bg-[#FFE368] border-[2.5px] border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_#000] hover:scale-105 active:scale-95 transition-all"
                  aria-label="Play Camp Teaser Video"
                >
                  <Play className="w-7 h-7 fill-black ml-1" />
                </button>

                <div className="relative z-10 mt-3 text-white font-sans font-bold text-sm tracking-wide">
                  WATCH HACKCON AFTERMOVIE
                </div>
                <div className="relative z-10 text-[11px] font-mono text-emerald-300">
                  3:15 min • S’mores, Talks & Sunshine
                </div>
              </div>

              {/* Tag below video */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-300 px-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Official Recap Video
                </span>
                <span className="text-[#FFDB43] font-bold">CAMP PONTIAC, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathon Communities Ticker / Pill Showcase */}
        <div className="mt-10 pt-8 border-t-[2.5px] border-black/10">
          <div className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest text-center mb-4">
            REPRESENTED BY DIRECTORS & TEAMS FROM LEADING HACKATHONS
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {hackathons.map((hack) => (
              <div
                key={hack.name}
                className="bg-[#FAFAFA] hover:bg-[#FFDB43]/30 border-[1.5px] border-black rounded-xl px-3.5 py-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors flex items-center gap-2"
              >
                <span className="font-bold text-xs text-black font-sans">{hack.name}</span>
                <span className="text-[10px] font-mono text-stone-500 bg-stone-200 px-1.5 py-0.5 rounded border border-black/20">
                  {hack.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative bg-white border-[3px] border-black rounded-3xl p-4 sm:p-6 max-w-2xl w-full shadow-[8px_8px_0px_0px_#FFDB43]">
            <div className="flex items-center justify-between mb-3">
              <div className="font-black font-sans text-lg uppercase flex items-center gap-2">
                <span>🏕️ HACKCON CAMP HIGHLIGHTS</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-lg border-[2px] border-black hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-xl bg-black overflow-hidden border-[2px] border-black flex items-center justify-center text-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
                title="Hackcon Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-3 text-center text-xs font-mono font-bold text-stone-600">
              Camp Pontiac Copake NY • Join 300+ Organizers this Summer!
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HackconAbout;
