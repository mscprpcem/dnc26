import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Building, 
  ExternalLink, 
  Copy, 
  Check, 
  Car 
} from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Venue = () => {
  const [copiedCoords, setCopiedCoords] = useState(false);

  const coordinatesText = '20.9167° N, 77.7289° E';
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('P. R. Pote Patil College of Engineering and Management Amravati')}`;

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

  return (
    <section id="venue" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <MapPin className="w-3 h-3" />
            <span>Campus Venue</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-3">
            PRPCEM Campus, <span className="text-gradient-magenta">Amravati</span>
          </h2>
          <p className="text-sm sm:text-base text-[#190649]/75 leading-relaxed">
            Hosted at the premier technological campus of P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati, Maharashtra.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 dotnet-content-region p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#512BD4]">
                    Official Host Campus
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#14053A] mt-0.5">
                    {eventData.location.venueName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#190649]/80 mt-1.5 leading-relaxed">
                    {eventData.location.address}
                  </p>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 select-none">
                  <img
                    src="/dotnet-bot.svg"
                    alt=".NET Bot Campus Guide"
                    className="w-full h-full object-contain drop-shadow-sm select-none"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#DCD5F6]/60">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#190649]/80">
                  <Building className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#14053A] block">Host Institution</span>
                    <span className="text-xs text-[#5F6368]">{eventData.organizer.institution}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#190649]/80">
                  <Compass className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#14053A] block">Transit</span>
                    <span className="text-xs text-[#5F6368]">15 mins from Amravati Station · 30 mins from Badnera Jn (BD)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#190649]/80">
                  <Navigation className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#14053A] block">Facilities</span>
                    <span className="text-xs text-[#5F6368]">AC auditorium, high-speed Wi-Fi, lab workstations, & audio-visual stage setup.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD5F6]/60 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dotnet-solid-btn-accent text-xs sm:text-sm py-2 px-3.5 flex items-center gap-1.5"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={eventData.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dotnet-outline-btn text-xs sm:text-sm py-2 px-3.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold py-2 px-3 rounded-lg border border-[#DCD5F6] bg-white hover:bg-[#EEEAFB] text-[#512BD4] transition-colors"
                  title="Copy GPS coordinates"
                >
                  {copiedCoords ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy GPS</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#190649]/70 pt-1 font-mono">
                <span>{coordinatesText}</span>
                <a
                  href="https://prpotepatilengg.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#512BD4] hover:underline"
                >
                  Campus Portal ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Card - Clean & Proper Google Maps Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#512BD4]/30 overflow-hidden shadow-xl flex flex-col min-h-[380px] sm:min-h-[440px]">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#FAF8FF] border-b border-[#512BD4]/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#512BD4]" />
                <span className="font-mono text-xs font-bold text-[#14053A]">
                  PRPCEM Campus Map
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-semibold text-[#512BD4] bg-[#EEEAFB] px-2.5 py-0.5 rounded-full border border-[#DCD5F6]">
                  {coordinatesText}
                </span>
                <a
                  href={eventData.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#512BD4] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Map Viewport - Natural, Proper Clarity */}
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

            {/* Bottom Bar */}
            <div className="px-4 py-2.5 bg-[#FAF8FF] border-t border-[#512BD4]/20 flex items-center justify-between text-xs font-mono text-[#5F6368]">
              <span>Pote Estate, Kathora Road, Amravati, Maharashtra 444602</span>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#512BD4] font-bold hover:underline"
              >
                Get Directions ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Venue;


