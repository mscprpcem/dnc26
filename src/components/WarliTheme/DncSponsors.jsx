import React from 'react';
import { ArrowRight, Megaphone, Handshake } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { sponsorsData } from '../../data/sponsors.js';
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';

export const DncSponsors = () => {
  return (
    <section id="partners" className="py-5 sm:py-8 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 text-[#FAF7F2]">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
        <div className="bg-[#260C07] text-[#FAF7F2] px-3.5 py-0.5 rounded-full border-[2px] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402] inline-flex items-center gap-1.5 mb-2">
          <Handshake className="w-3.5 h-3.5 text-[#E5A93C]" />
          <span className="font-mono font-black text-[11px] sm:text-xs uppercase tracking-wider text-[#E5A93C]">
            ECOSYSTEM COLLABORATORS
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#FAF7F2]">
          PARTNERS &amp; COLLABORATORS
        </h2>
        <p className="text-xs sm:text-sm text-[#FAF7F2]/80 max-w-lg mt-1 font-sans">
          Organized in collaboration with global industry leaders, host academic institutions, and student community chapters.
        </p>
      </div>

      {/* Main Warli Container */}
      <div className="bg-[#280D07] border-[2px] border-[#FAF7F2] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#120402] relative overflow-hidden w-full">
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-1.5 left-1.5 opacity-40 scale-75" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-1.5 right-1.5 opacity-40 scale-75" />

        {/* Compact 4-Partner Grid: Logo only by default, Name on hover, nothing else */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3.5 sm:mb-4">
          {sponsorsData.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#FAF7F2] border-[2px] border-[#180805] rounded-xl h-20 sm:h-22 px-3 sm:px-4 flex items-center justify-center shadow-[2.5px_2.5px_0px_0px_#120402] hover:shadow-[3.5px_3.5px_0px_0px_#E5A93C] hover:border-[#E5A93C] hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer overflow-hidden"
              title={p.name}
            >
              {/* Resting state: Logo ONLY */}
              <div className="flex items-center justify-center w-full h-full p-2 transition-all duration-200 group-hover:opacity-0 group-hover:scale-90">
                <img
                  src={p.logoUrl}
                  alt={p.alt || p.name}
                  style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                  className="select-none pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Hover state: Name ONLY, nothing else */}
              <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-[#FAF7F2]">
                <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#180805] font-mono font-black text-xs sm:text-sm uppercase tracking-wider border-[1.5px] border-[#180805] shadow-[1.5px_1.5px_0px_0px_#120402] whitespace-nowrap">
                  {p.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="bg-[#1E0905] border-[1.5px] border-[#FAF7F2]/30 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
              <Megaphone className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold font-sans text-[#FAF7F2] leading-snug">
                Interested in partnering with .NET Conf Amravati 2026?
              </h5>
              <p className="text-[11px] text-[#FAF7F2]/70 font-sans mt-0.5">
                Reach 600+ developers, tech leads, and university talent across Vidarbha. Custom booths, keynote slots &amp; hiring access.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${eventData.contactEmail}?subject=%5BSponsorship%5D%20.NET%20Conf%202026%20Amravati`}
            className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-mono font-bold text-xs uppercase px-3.5 py-2 rounded-lg border-[1.5px] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5 shrink-0 cursor-pointer whitespace-nowrap"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default DncSponsors;
