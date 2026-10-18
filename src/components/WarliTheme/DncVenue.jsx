import React from 'react';
import { 
  MapPin, 
  Building2, 
  Building, 
  Users, 
  Info, 
  Map, 
  Star, 
  Cpu, 
  Megaphone, 
  Navigation,
  Compass,
  ExternalLink
} from 'lucide-react';
import { eventData } from '../../data/event.js';
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';

export const DncVenue = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('P. R. Pote Patil College of Engineering and Management Amravati')}`;

  return (
    <section id="venue" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">
      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-bold px-3.5 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#180805]" />
            <span>VENUE &amp; LOCATION</span>
          </span>
          <span className="text-[#FAF7F2]/60 font-mono text-xs">✦</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            MEET US AT PRPCEM, AMRAVATI
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Warli Venue Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch">
        
        {/* ================= LEFT CARD: HOST CAMPUS ================= */}
        <div className="relative lg:col-span-6 bg-[#280D07] border-[2.5px] border-[#FAF7F2] rounded-[28px] p-5 sm:p-7 shadow-[6px_6px_0px_0px_#120402] flex flex-col justify-between text-left overflow-hidden">
          <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
          <div>
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#38130D] text-[#E5A93C] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2]/40 shadow-[1.5px_1.5px_0px_0px_#120402] mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>HOST CAMPUS</span>
            </div>

            {/* Institution Title */}
            <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] mb-2 leading-snug">
              P. R. Pote Patil College of Engineering &amp; Management
            </h3>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-sans mb-5 leading-relaxed">
              Autonomous engineering institution affiliated with SGBAU and accredited NAAC &lsquo;A&rsquo; grade, situated in Amravati, Maharashtra.
            </p>

            {/* Campus Details List */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#FAF7F2]">
                <div className="w-8 h-8 rounded-xl bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#E5A93C] block">Campus Address</span>
                  <span className="text-[#FAF7F2]/80">{eventData.location.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#FAF7F2]">
                <div className="w-8 h-8 rounded-xl bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#E5A93C] block">Transit &amp; Proximity</span>
                  <span className="text-[#FAF7F2]/80">15 mins from Amravati Station · 30 mins from Badnera Jn (BD)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#FAF7F2]">
                <div className="w-8 h-8 rounded-xl bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#E5A93C] block">Facilities</span>
                  <span className="text-[#FAF7F2]/80">Central AC auditorium, gigabit Wi-Fi, lab workstations, &amp; audio-visual stage</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#FAF7F2]">
                <div className="w-8 h-8 rounded-xl bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#E5A93C] block">Event Format</span>
                  <span className="text-[#FAF7F2]/80">In-person Developer Conference (Main Auditorium &amp; AI Labs)</span>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="mt-5 pt-3.5 border-t border-[#FAF7F2]/20 flex flex-wrap items-center gap-2.5">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-mono font-bold text-xs py-2 px-3.5 rounded-xl border-[1.5px] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://prpotepatilengg.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#38130D] hover:bg-[#481910] text-[#FAF7F2] font-mono font-bold text-xs py-2 px-3.5 rounded-xl border-[1.5px] border-[#FAF7F2]/40 shadow-[2px_2px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-1.5"
              >
                <span>Campus Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E5A93C]" />
              </a>
            </div>
          </div>

          {/* Access Details Footer */}
          <div className="mt-4 pt-3.5 border-t border-[#FAF7F2]/20 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#E5A93C] text-[#180805] flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs text-[#FAF7F2]/80 font-sans leading-relaxed">
              <span className="font-bold text-[#FAF7F2]">Access Details : </span>
              <span>Full venue entry pass and parking guidance will be shared with registered delegates.</span>
            </p>
          </div>
        </div>

        {/* ================= RIGHT CARD: CAMPUS LOCATION ================= */}
        <div className="relative lg:col-span-6 bg-[#280D07] border-[2.5px] border-[#FAF7F2] rounded-[28px] p-4 sm:p-5 shadow-[6px_6px_0px_0px_#120402] flex flex-col justify-between overflow-hidden">
          <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />
          
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 bg-[#E5A93C] text-[#180805] font-mono font-bold text-xs px-4 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
              <Map className="w-4 h-4" />
              <span>CAMPUS LOCATION</span>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#E5A93C] hover:underline flex items-center gap-1"
            >
              <span>Get Directions</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Viewport Container */}
          <div className="relative rounded-2xl overflow-hidden border-[2px] border-[#FAF7F2] aspect-16/10 bg-[#1E0905] flex items-center justify-center group shadow-sm">
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
                className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-mono font-black text-xs sm:text-sm uppercase px-5 py-2.5 rounded-full border-[2px] border-[#FAF7F2] shadow-[3px_3px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Map className="w-4 h-4" />
                <span>OPEN IN MAPS &gt;</span>
              </a>
            </div>
          </div>

          {/* Campus Landmarks Box */}
          <div className="bg-[#1E0905] border border-[#FAF7F2]/20 rounded-2xl p-3.5 mt-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#E5A93C] uppercase mb-2">
              <Star className="w-3.5 h-3.5" />
              <span>CAMPUS LANDMARKS</span>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[#FAF7F2]/15 pt-1">
              {/* Landmark 1 */}
              <div className="flex items-center gap-2.5 pr-2">
                <div className="w-8 h-8 rounded-xl bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold font-sans text-[#FAF7F2]">
                  Main Auditorium
                </span>
              </div>

              {/* Landmark 2 */}
              <div className="flex items-center gap-2.5 pl-3">
                <div className="w-8 h-8 rounded-xl bg-[#38130D] text-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
                  <Cpu className="w-4 h-4 text-[#E5A93C]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold font-sans text-[#FAF7F2]">
                  CSE &amp; AI Labs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Announcement Bar */}
      <div className="relative z-10 mt-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-2xl p-3.5 sm:p-4 flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#120402] text-center max-w-5xl mx-auto">
        <div className="w-8 h-8 rounded-xl bg-[#E5A93C] text-[#180805] flex items-center justify-center shrink-0 shadow-sm">
          <Megaphone className="w-4 h-4" />
        </div>
        <p className="text-xs sm:text-sm font-sans font-medium text-[#FAF7F2]">
          <span className="font-bold text-[#E5A93C]">Delegate Notice : </span>
          <span>Campus entry passes and parking information will be issued 48 hours prior to the event.</span>
        </p>
      </div>
    </section>
  );
};

export default DncVenue;
