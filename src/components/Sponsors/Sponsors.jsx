import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { sponsorsData } from '../../data/sponsors.js';

export const Sponsors = () => {
  return (
    <section id="partners" className="w-full py-8 sm:py-12 md:py-14 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#DCD5F6]">
            <Handshake className="w-3 h-3" />
            <span>Official Ecosystem Collaborators</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#14053A] mb-1.5">
            Partners &amp; <span className="text-gradient-magenta">Collaborators</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#190649]/75 leading-relaxed">
            Organized in collaboration with global industry leaders, host academic institutions, and student community clubs.
          </p>
        </div>

        {/* Compact 4-Card Grid: Logo only by default, Name on hover, nothing else */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
          {sponsorsData.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/95 backdrop-blur-md rounded-xl border border-[#DCD5F6] hover:border-[#512BD4] h-20 sm:h-22 px-3 sm:px-4 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer overflow-hidden"
              title={partner.name}
            >
              {/* Resting state: Centered Logo ONLY */}
              <div className="flex items-center justify-center w-full h-full p-2 transition-all duration-200 group-hover:opacity-0 group-hover:scale-90">
                <img
                  src={partner.logoUrl}
                  alt={partner.alt || partner.name}
                  style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                  className="select-none pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Hover state: Name ONLY, nothing else */}
              <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-white/95">
                <span className="px-3 py-1 rounded-full bg-[#512BD4] text-white font-display font-bold text-xs sm:text-sm tracking-wide shadow-xs whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Sponsorship CTA Callout Banner */}
        <div className="bg-gradient-to-r from-[#EEEAFB] via-[#FAF8FF] to-[#FCE7F8] border border-[#DCD5F6] rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-xs">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#14053A]">
              Partner with Central India's Premier .NET Conference
            </h4>
            <p className="text-[11px] text-[#190649]/75 mt-0.5">
              Engage 600+ developers, tech leads, and top engineering talent across Vidarbha. Custom booths, keynote sessions, and hiring access.
            </p>
          </div>
          <a
            href={`mailto:${eventData.contactEmail}?subject=%5BSponsorship%5D%20.NET%20Conf%202026%20Amravati`}
            className="dotnet-solid-btn-accent text-xs py-2 px-3.5 rounded-lg shrink-0 inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Request Sponsor Deck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
