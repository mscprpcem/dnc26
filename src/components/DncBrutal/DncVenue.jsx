import React from 'react';
import { MapPin, Building2, Building, Users, Info, Map, Star, Cpu, Megaphone, Navigation } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const DncVenue = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('P. R. Pote Patil College of Engineering and Management Amravati')}`;

  return (
    <section id="venue" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">
      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 z-10">
          <span className="bg-[#FFD13B] text-black text-[10px] sm:text-xs font-mono font-bold px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>VENUE & LOCATION</span>
          </span>
          <span className="text-white/60 font-mono text-xs">✦</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            MEET US AT PRPCEM, AMRAVATI
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Neo-Brutalist Venue Grid (relative z-10) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch">
        {/* ================= LEFT CARD: HOST CAMPUS ================= */}
        <div className="lg:col-span-6 bg-white border-[2.5px] border-black rounded-[28px] p-5 sm:p-7 shadow-[5px_5px_0px_0px_#000] flex flex-col justify-between text-left">
          <div>
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-4">
              <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>HOST CAMPUS</span>
            </div>

            {/* Institution Title */}
            <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black mb-3 leading-snug">
              P. R. Pote Patil College of Engineering &amp; Management
            </h3>

            {/* Campus Facilities Overview (Clean, No Cartoon SVGs or Animation Icons) */}
            <div className="bg-[#FAF9FF] border-[2px] border-black rounded-2xl p-4 mb-4 shadow-[2px_2px_0px_0px_#000]">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#512BD4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-black uppercase">
                      Central Main Auditorium
                    </h4>
                    <p className="text-xs text-stone-600 font-sans mt-0.5">
                      Air-conditioned 800+ tiered seating arena with 4K projection &amp; surround acoustics for keynote sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-black/10">
                  <div className="w-7 h-7 rounded-lg bg-[#00BDD6] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-black uppercase">
                      Advanced CSE &amp; AI Labs
                    </h4>
                    <p className="text-xs text-stone-600 font-sans mt-0.5">
                      Dedicated high-speed development rigs and break-out workshop bays for live coding sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 text-xs sm:text-sm font-sans text-stone-800">
                <div className="w-8 h-8 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-black">Address : </span>
                  <span className="text-stone-700">{eventData.location.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-stone-800">
                <div className="w-8 h-8 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-black">City : </span>
                  <span className="text-stone-700">Amravati, Maharashtra</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-stone-800">
                <div className="w-8 h-8 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-black">Event Format : </span>
                  <span className="text-stone-700">In-person</span>
                </div>
              </div>
            </div>
          </div>

          {/* Access Details Footer */}
          <div className="mt-5 pt-4 border-t border-stone-200 flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#512BD4] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="text-xs text-stone-700 font-sans leading-relaxed">
              <span className="font-bold text-black">Access Details : </span>
              <span>Full venue and entry instructions will be shared with registered attendees.</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CARD: CAMPUS LOCATION ================= */}
        <div className="lg:col-span-6 bg-white border-[2.5px] border-black rounded-[28px] p-4 sm:p-5 shadow-[5px_5px_0px_0px_#000] flex flex-col justify-between relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 bg-[#FFD13B] text-black font-mono font-bold text-xs px-4 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              <Map className="w-4 h-4" />
              <span>CAMPUS LOCATION</span>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#512BD4] hover:underline flex items-center gap-1"
            >
              <span>Get Directions</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Viewport Container */}
          <div className="relative rounded-2xl overflow-hidden border-[2px] border-black aspect-16/10 bg-[#EDF8F2] flex items-center justify-center group shadow-sm">
            {/* Live Interactive Google Map */}
            <iframe
              src={eventData.location.embedMapUrl}
              title="PRPCEM Campus Live Map"
              className="w-full h-full border-0 select-auto"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating OPEN IN MAPS Button */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs sm:text-sm uppercase px-5 py-2.5 rounded-full border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Map className="w-4 h-4" />
                <span>OPEN IN MAPS &gt;</span>
              </a>
            </div>
          </div>

          {/* Campus Landmarks Box */}
          <div className="bg-[#FAF9FF] border border-black/15 rounded-2xl p-3.5 mt-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#512BD4] uppercase mb-2">
              <Star className="w-3.5 h-3.5" />
              <span>CAMPUS LANDMARKS</span>
            </div>

            <div className="grid grid-cols-2 divide-x divide-stone-200 pt-1">
              {/* Landmark 1 */}
              <div className="flex items-center gap-2.5 pr-2">
                <div className="w-8 h-8 rounded-xl bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold font-sans text-black">
                  Main Auditorium
                </span>
              </div>

              {/* Landmark 2 */}
              <div className="flex items-center gap-2.5 pl-3">
                <div className="w-8 h-8 rounded-xl bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold font-sans text-black">
                  CSE &amp; AI Labs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Announcement Bar */}
      <div className="relative z-10 mt-6 bg-[#FAF9FF] border-[2px] border-black rounded-2xl p-3.5 sm:p-4 flex items-center justify-center gap-3 shadow-[3px_3px_0px_0px_#000] text-center max-w-5xl mx-auto">
        <div className="w-8 h-8 rounded-xl bg-[#512BD4] text-white flex items-center justify-center shrink-0 shadow-sm">
          <Megaphone className="w-4 h-4" />
        </div>
        <p className="text-xs sm:text-sm font-sans font-medium text-stone-800">
          <span className="font-bold text-black">Delegate Notice : </span>
          <span>Campus entry passes and parking information will be issued 48 hours prior to the event.</span>
        </p>
      </div>
    </section>
  );
};

export default DncVenue;
