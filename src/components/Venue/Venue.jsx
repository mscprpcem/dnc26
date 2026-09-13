import React from 'react';
import { MapPin, Navigation, Compass, Building, ExternalLink } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Venue = () => {
  return (
    <section id="venue" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
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

        {/* 2-Column Grid */}
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

            <div className="mt-6 pt-4 border-t border-[#DCD5F6]/60 flex flex-wrap items-center gap-3">
              <a
                href={eventData.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dotnet-solid-btn-accent text-xs sm:text-sm py-2 px-4"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://prpotepatilengg.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#512BD4] hover:underline"
              >
                PRPCEM Campus Portal
              </a>
            </div>
          </div>

          {/* Right Map Embed Card: Retro Mode Terminal GPS */}
          <div className="lg:col-span-7 bg-[#100926] rounded-2xl border-2 border-[#512BD4]/40 overflow-hidden shadow-xl flex flex-col min-h-[340px] sm:min-h-[380px] relative">
            {/* Retro Terminal Top Bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#180D38] border-b border-[#512BD4]/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-xs inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-xs inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-xs inline-block" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-[#E2DCF8] tracking-wider ml-1.5 hidden xs:inline">
                  SYS_NAV // PRPCEM_AMRAVATI
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>20.9167° N, 77.7289° E</span>
              </div>
            </div>

            {/* Retro Map Viewport */}
            <div className="relative flex-1 w-full h-full min-h-[280px] sm:min-h-[320px] bg-black">
              <iframe
                title="PRPCEM Amravati Campus Map"
                src={eventData.location.embedMapUrl}
                className="w-full h-full min-h-[280px] sm:min-h-[320px] border-0"
                style={{ filter: 'contrast(1.06) saturate(1.12)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Retro Terminal Footer Info */}
            <div className="px-3.5 py-1.5 bg-[#180D38] border-t border-[#512BD4]/30 flex items-center justify-between text-[10px] font-mono text-[#A89FD6]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
                RADAR: PRPCEM CAMPUS LOCK
              </span>
              <span className="hidden sm:inline text-emerald-400/90 font-semibold">
                ALT: 343M · ZONE: IN-MH
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
