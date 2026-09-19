import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';

export const DncVenue = () => {
  const [activeTab, setActiveTab] = useState('auditorium');

  const venues = {
    auditorium: {
      title: 'PRPCEM Main Auditorium',
      desc: 'A modern, fully air-conditioned auditorium with 600+ tiered seating, stage acoustics, twin laser projectors, and live-streaming infrastructure.',
      icon: '🏛️',
      tag: 'KEYNOTE & MAIN STAGE',
      detail: 'Capacity: 600+ Attendees'
    },
    labs: {
      title: 'Advanced Computing & AI Labs',
      desc: 'High-speed gigabit fiber workstations equipped with modern dev runtimes, VS Code, and cloud access for interactive workshops and live coding tutorials.',
      icon: '💻',
      tag: 'HANDS-ON WORKSHOPS',
      detail: 'High-Speed Cloud Workstations'
    },
    courtyard: {
      title: 'Open-Air Networking Courtyard',
      desc: 'A lush green campus courtyard where attendees connect with Microsoft MVPs, speaker mentors, community leaders, and sponsor booths over refreshments.',
      icon: '☕',
      tag: 'COMMUNITY & TEA BREAKS',
      detail: 'Free Refreshments & Swag Desks'
    },
    travel: {
      title: 'Travel & Campus Connectivity',
      desc: 'Conveniently situated on Kathora Road, Amravati. Direct access from Badnera Railway Junction (12 km) and Dr. Babasaheb Ambedkar Nagpur Airport (150 km).',
      icon: '🚆',
      tag: 'TRANSPORT & DIRECTIONS',
      detail: 'Free On-Campus Delegate Parking'
    }
  };

  const current = venues[activeTab];

  return (
    <section id="dnc-venue" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="WHERE IS .NET CONF?" 
        badge="PRPCEM AMRAVATI"
        theme="cyan"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        {/* Venue Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 sm:pb-8 border-b-[2px] sm:border-b-[2.5px] border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>AMRAVATI, MAHARASHTRA</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight">
              P. R. Pote Patil College of Engg. & Management
            </h3>

            <p className="text-stone-700 font-sans text-xs sm:text-sm md:text-base mt-1.5 max-w-2xl">
              {eventData.location.address}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={eventData.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00BDD6] hover:bg-[#00A3B8] text-black font-mono font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5"
            >
              <Navigation className="w-4 h-4" />
              <span>DIRECTIONS ↗</span>
            </a>

            <a
              href="https://prpotepatilengg.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-100 text-black font-mono font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>COLLEGE SITE ↗</span>
            </a>
          </div>
        </div>

        {/* Interactive Campus Facilities Tabs */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[11px] sm:text-xs font-mono font-black text-stone-500 uppercase tracking-wider">
              CAMPUS HIGHLIGHTS & SPACES
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded border border-[#512BD4]/40">
              PRPCEM Kathora Road
            </span>
          </div>

          {/* Tab buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-5 sm:mb-6">
            <button
              onClick={() => setActiveTab('auditorium')}
              className={`p-2.5 sm:p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
                activeTab === 'auditorium'
                  ? 'bg-[#512BD4] text-white shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>🏛️</span>
              <span>Auditorium</span>
            </button>

            <button
              onClick={() => setActiveTab('labs')}
              className={`p-2.5 sm:p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
                activeTab === 'labs'
                  ? 'bg-[#00BDD6] text-black shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>💻</span>
              <span>Tech Labs</span>
            </button>

            <button
              onClick={() => setActiveTab('courtyard')}
              className={`p-2.5 sm:p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
                activeTab === 'courtyard'
                  ? 'bg-[#D600AA] text-white shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>☕</span>
              <span>Courtyard</span>
            </button>

            <button
              onClick={() => setActiveTab('travel')}
              className={`p-2.5 sm:p-3 rounded-2xl border-[2px] border-black font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
                activeTab === 'travel'
                  ? 'bg-[#FFD13B] text-black shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                  : 'bg-stone-50 hover:bg-stone-100 text-black shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              <span>🚆</span>
              <span>Travel & Parking</span>
            </button>
          </div>

          {/* Active Tab Showcase Box */}
          <div className="bg-[#FAF8FF] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-4 sm:p-6 md:p-8 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl p-2.5 sm:p-3 bg-white border-[2px] border-black rounded-2xl shadow-[2px_2px_0px_0px_#000] shrink-0">
                {current.icon}
              </div>
              <div>
                <div className="inline-block bg-[#14053A] text-white text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded mb-1 uppercase">
                  {current.tag}
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black font-sans text-[#14053A] uppercase">
                  {current.title}
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm md:text-base mt-1 max-w-xl leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="bg-white border-[2px] border-black rounded-xl px-3 py-2 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] shadow-[2px_2px_0px_0px_#000] whitespace-nowrap self-stretch md:self-auto text-center">
              📍 {current.detail}
            </div>
          </div>
        </div>

        {/* Embedded Map Container */}
        <div className="mt-6 sm:mt-8 rounded-2xl overflow-hidden border-[2px] sm:border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] h-56 sm:h-72 md:h-80 w-full relative">
          <iframe
            title="PRPCEM Campus Location Map"
            src={eventData.location.embedMapUrl}
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DncVenue;
