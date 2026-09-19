import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Building, 
  ExternalLink, 
  Copy, 
  Check, 
  Car,
  Maximize2
} from 'lucide-react';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncVenue = () => {
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [selectedPoiIndex, setSelectedPoiIndex] = useState(0);

  const coordinatesText = '20.9167° N, 77.7289° E';
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('P. R. Pote Patil College of Engineering and Management Amravati')}`;

  const campusPOIs = [
    {
      id: 'auditorium',
      name: 'Swami Vivekananda Hall',
      label: 'Main Stage',
      badge: 'HALL A',
      note: '500+ seat AC Auditorium with dual LED presentation walls & media stage.'
    },
    {
      id: 'labs',
      name: 'CSE & AI Workstation Labs',
      label: 'Tech Labs',
      badge: 'DEV LABS',
      note: 'High-speed gigabit Wi-Fi, dual display workstations & power hubs.'
    },
    {
      id: 'gate',
      name: 'Main Campus Gate 1',
      label: 'Kathora Rd Entry',
      badge: 'GATE 1',
      note: 'Visitor parking, security desk, and delegate badge verification point.'
    },
    {
      id: 'networking',
      name: 'Open Networking Courtyard',
      label: 'Social Yard',
      badge: 'CANTEEN',
      note: 'Lunch pavilion, sponsor swag kiosks, coffee bar & community photo booths.'
    }
  ];

  const handleCopyCoords = async () => {
    try {
      await navigator.clipboard.writeText(coordinatesText);
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2200);
    } catch {
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2200);
    }
  };

  const activePoi = campusPOIs[selectedPoiIndex];

  return (
    <section id="venue" className="py-6 sm:py-10 md:py-14 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="06"
        leftTag="VENUE"
        leftBadgeText="📍 PRPCEM CAMPUS"
        leftBadgeColor="bg-[#E8F5E9] text-[#1B5E20]"
        leftSub="POTE ESTATE, AMRAVATI"
        rightIndex="20.93°"
        rightTag="77.75°"
        rightBadgeText="AUDITORIUM & LABS"
        rightBadgeColor="bg-[#FFF9C4] text-[#F57F17]"
        rightSub="MAIN CAMPUS"
      />
      {/* Signpost */}
      <DncSignpost 
        title="CAMPUS VENUE & LOCATION" 
        badge="PRPCEM AMRAVATI"
        theme="cyan"
      />

      <div className="venue-main-card bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-4 sm:p-7 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Campus Venue</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2 sm:mb-3">
            PRPCEM Campus, Amravati
          </h3>

          <p className="text-stone-700 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
            Hosted at the premier technological campus of P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati, Maharashtra.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="venue-grid-layout grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column: Campus Details Card */}
          <div className="venue-left-col lg:col-span-5 bg-[#FAF8FF] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-4 sm:p-6 shadow-[3px_3px_0px_0px_#000] flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#512BD4]">
                    Official Host Campus
                  </span>
                  <h4 className="text-base sm:text-lg font-black font-sans text-[#14053A] mt-0.5 leading-snug">
                    {eventData.location.venueName}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 font-sans mt-1 leading-relaxed">
                    {eventData.location.address}
                  </p>
                </div>
                <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 select-none">
                  <img
                    src="/dotnet-bot.svg"
                    alt=".NET Bot Campus Guide"
                    className="w-full h-full object-contain filter drop-shadow-sm select-none"
                  />
                </div>
              </div>

              {/* Campus Details List */}
              <div className="space-y-2.5 pt-3 border-t-[1.5px] border-black/15">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <Building className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-black block font-sans text-xs sm:text-sm">Host Institution</span>
                    <span className="text-[11px] sm:text-xs text-stone-600 font-sans">{eventData.organizer.institution}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <Compass className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-black block font-sans text-xs sm:text-sm">Transit & Proximity</span>
                    <span className="text-[11px] sm:text-xs text-stone-600 font-sans">15 mins from Amravati Station · 30 mins from Badnera Jn (BD)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <Navigation className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-black block font-sans text-xs sm:text-sm">Auditorium & Facilities</span>
                    <span className="text-[11px] sm:text-xs text-stone-600 font-sans">Central AC amphitheater, gigabit Wi-Fi, lab workstations, & live stream stage.</span>
                  </div>
                </div>
              </div>

              {/* Active POI Highlight Note */}
              <div className="bg-[#EEEAFB] border-[1.5px] border-[#512BD4]/40 rounded-xl p-3 text-left">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-mono font-black text-[#512BD4] tracking-wide uppercase">
                    📍 {activePoi.badge} · {activePoi.name}
                  </span>
                  <span className="text-[9px] font-mono font-bold bg-[#512BD4] text-white px-1.5 py-0.5 rounded">
                    CAMPUS POI
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-stone-800 leading-snug">
                  {activePoi.note}
                </p>
              </div>
            </div>

            {/* Left Card Action Bar */}
            <div className="mt-4 pt-3.5 border-t-[1.5px] border-black/15 space-y-2">
              <div className="venue-action-group flex flex-wrap items-center gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00BDD6] hover:bg-[#00A3B8] text-black font-mono font-bold text-xs px-3.5 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>DIRECTIONS</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={eventData.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-stone-100 text-black font-mono font-bold text-xs px-3.5 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5"
                >
                  <span>MAPS ↗</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="bg-[#FFDB43] hover:bg-[#F2CE38] text-black font-mono font-bold text-xs px-3 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5"
                  title="Copy GPS coordinates"
                >
                  {copiedCoords ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY GPS</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-stone-600 pt-1">
                <span>{coordinatesText}</span>
                <a
                  href="https://prpotepatilengg.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#512BD4] hover:underline font-bold"
                >
                  prpotepatilengg.ac.in ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Pure Neo-Brutalist Map Card */}
          <div className="venue-right-col lg:col-span-7 brutal-map-card">
            
            {/* Neo-Brutalist Map Top Header */}
            <div className="brutal-map-header">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white border-[2px] border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
                  <MapPin className="w-4 h-4 text-[#512BD4]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black/70 block leading-none">
                    LOCATION NAVIGATOR
                  </span>
                  <h4 className="font-sans font-black text-xs sm:text-sm text-black uppercase tracking-tight mt-0.5 leading-none">
                    PRPCEM Campus Map
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold bg-white text-black px-2.5 py-1 rounded-lg border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] hidden xs:inline-block">
                  📍 {coordinatesText}
                </span>
                <a
                  href={eventData.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-map-btn bg-[#00BDD6] hover:bg-[#00A3B8] text-black"
                >
                  <span>FULL MAP</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Campus POI Selector Strip (Neo-Brutalist Buttons) */}
            <div className="brutal-poi-strip bg-[#FAF8FF] border-b-[2px] border-black px-3.5 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="font-mono text-[10px] font-black text-[#512BD4] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                LANDMARKS:
              </span>
              {campusPOIs.map((poi, idx) => (
                <button
                  key={poi.id}
                  type="button"
                  onClick={() => setSelectedPoiIndex(idx)}
                  className={`brutal-poi-chip ${
                    selectedPoiIndex === idx
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000]'
                      : 'bg-white text-black hover:bg-stone-100 shadow-[1px_1px_0px_0px_#000]'
                  }`}
                >
                  {poi.badge}: {poi.name}
                </button>
              ))}
            </div>

            {/* Map Viewport - Clean, Proper, Unaltered Google Maps Clarity */}
            <div className="brutal-map-viewport relative flex-1 w-full min-h-[300px] sm:min-h-[360px] md:min-h-[400px] bg-stone-100 overflow-hidden">
              <iframe
                title="PRPCEM Amravati Campus Map"
                src={eventData.location.embedMapUrl}
                className="w-full h-full min-h-[300px] sm:min-h-[360px] md:min-h-[400px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Neo-Brutalist Map Bottom Footer */}
            <div className="brutal-map-footer">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-800">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black" />
                <span>Selected: {activePoi.name}</span>
              </div>

              <div className="brutal-map-footer-actions flex items-center gap-2 flex-wrap">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-map-btn bg-[#00BDD6] hover:bg-[#00A3B8]"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>DIRECTIONS</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="brutal-map-btn bg-[#FFDB43] hover:bg-[#F2CE38]"
                >
                  {copiedCoords ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY GPS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DncVenue;


