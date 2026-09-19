import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Bus, Home, Waves, SunMedium, Flame, Info } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconVenue = () => {
  const [activeTab, setActiveTab] = useState('cabins');

  const amenities = {
    cabins: {
      title: 'Cozy Camp Cabins',
      desc: 'Sleep in authentic wooden bunkhouses nestled under towering pine trees. Each cabin is equipped with electricity, bunk beds, and nearby modern renovated bathroom facilities with hot showers.',
      icon: '🪵',
      tag: 'LODGING INCLUDED',
      stats: 'Bunks for all 300+ attendees'
    },
    waterfront: {
      title: 'Private Lake & Boathouse',
      desc: 'Take a break between workshops to canoe across the private spring-fed lake, kayak with friends, or relax on the sunny beach dock under the Berkshire summer sun.',
      icon: '🛶',
      tag: 'WATER ACTIVITIES',
      stats: 'Canoes, kayaks & life vests on site'
    },
    amphitheater: {
      title: 'The Great Rec Hall & Pavilion',
      desc: 'High-ceiling open-air halls and indoor theater spaces equipped with full audio/visual setups for keynotes, workshops, lightning talks, and hacker debates.',
      icon: '🎙️',
      tag: 'SESSION SPACES',
      stats: 'Air-conditioned main auditorium'
    },
    campfire: {
      title: 'The Council Ring Campfire',
      desc: 'Every evening culminates at the grand council fire ring. Roasting marshmallows, singing camp songs, unvarnished story sharing, and watching fireflies sparkle above the canopy.',
      icon: '🔥',
      tag: 'NIGHTLY SOCIALS',
      stats: 'Unlimited s’mores & hot cocoa'
    }
  };

  const current = amenities[activeTab];

  return (
    <section id="hackcon-location" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="WHERE IS HACKCON?" 
        badge="CAMP PONTIAC, NY"
      />

      <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
        {/* Main venue headline info */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b-[2.5px] border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFDB43] text-black font-mono font-bold text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>COPAKE, NEW YORK</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-black font-sans uppercase tracking-tight">
              Camp Pontiac in Upstate New York
            </h3>
            <p className="text-stone-700 font-sans text-sm sm:text-base mt-2 max-w-2xl">
              Tucked away in the foothills of the scenic Berkshire Mountains, Camp Pontiac spans over 150 private wooded acres with a crystal-clear spring lake, state-of-the-art facilities, and historic camp charm.
            </p>
          </div>

          {/* Location Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://maps.google.com/?q=Camp+Pontiac+Copake+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#70D6C7] hover:bg-[#86E4D6] text-black font-mono font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1.5"
            >
              <Navigation className="w-4 h-4" />
              <span>DIRECTIONS ↗</span>
            </a>

            <a
              href="https://camppontiac.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-100 text-black font-mono font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>CAMP SITE ↗</span>
            </a>
          </div>
        </div>

        {/* Interactive Camp Ground Tabs */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-black text-stone-500 uppercase tracking-wider">
              EXPLORE CAMP AMENITIES
            </span>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-400">
              All Included with Your Ticket
            </span>
          </div>

          {/* Tab buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            <button
              onClick={() => setActiveTab('cabins')}
              className={`p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                activeTab === 'cabins'
                  ? 'bg-[#FFDB43] shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>🪵</span>
              <span>Cabins</span>
            </button>

            <button
              onClick={() => setActiveTab('waterfront')}
              className={`p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                activeTab === 'waterfront'
                  ? 'bg-[#70D6C7] shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>🛶</span>
              <span>Lake & Dock</span>
            </button>

            <button
              onClick={() => setActiveTab('amphitheater')}
              className={`p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                activeTab === 'amphitheater'
                  ? 'bg-[#FF9E79] shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>🎙️</span>
              <span>Session Halls</span>
            </button>

            <button
              onClick={() => setActiveTab('campfire')}
              className={`p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                activeTab === 'campfire'
                  ? 'bg-[#E1BEE7] shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>🔥</span>
              <span>Campfire Ring</span>
            </button>
          </div>

          {/* Active Tab Showcase Box */}
          <div className="bg-[#FAF9F5] border-[2.5px] border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl p-3 bg-white border-[2px] border-black rounded-2xl shadow-[2px_2px_0px_0px_#000]">
                {current.icon}
              </div>
              <div>
                <div className="inline-block bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded mb-1.5 uppercase">
                  {current.tag}
                </div>
                <h4 className="text-xl sm:text-2xl font-black font-sans text-black uppercase">
                  {current.title}
                </h4>
                <p className="text-stone-700 text-sm sm:text-base mt-1 max-w-xl">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="bg-white border-[2px] border-black rounded-xl p-3 text-xs font-mono font-bold text-black shadow-[2px_2px_0px_0px_#000] whitespace-nowrap self-stretch md:self-auto text-center">
              ⭐ {current.stats}
            </div>
          </div>
        </div>

        {/* Travel & Bus Banner */}
        <div className="mt-8 bg-[#E3F2FD] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white border-[2px] border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
            <Bus className="w-5 h-5 text-blue-700" />
          </div>
          <div className="text-xs sm:text-sm font-sans text-stone-800">
            <span className="font-bold font-mono uppercase text-black block sm:inline mr-2">
              🚌 NYC CHARTER BUS AVAILABLE:
            </span>
            MLH arranges direct roundtrip coach shuttles from Midtown Manhattan (Grand Central area) directly to the Camp Pontiac gates on Friday morning, returning Sunday afternoon.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackconVenue;
