import React from 'react';
import { ArrowUpRight, ArrowRight, Megaphone, Users, MapPin } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';

export const DncSponsors = () => {
  const partners = [
    {
      id: 'msft',
      name: 'MICROSOFT',
      role: 'GLOBAL TECHNOLOGY PARTNER',
      roleBg: 'bg-[#38130D] text-[#E5A93C]',
      boxBg: 'bg-[#1E0905]',
      url: 'https://microsoft.com',
      logo: (
        <svg className="w-9 h-9" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" fill="#F25022" />
          <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
          <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
          <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
        </svg>
      ),
    },
    {
      id: 'jetbrains',
      name: 'JETBRAINS',
      role: 'DEVELOPER TOOLS PARTNER',
      roleBg: 'bg-[#38130D] text-[#FAF7F2]',
      boxBg: 'bg-[#1E0905]',
      url: 'https://jetbrains.com',
      logo: (
        <img
          src="/logos/jetbrains-logo.svg"
          alt="JetBrains"
          className="w-9 h-9 object-contain select-none"
        />
      ),
    },
    {
      id: 'prpcem',
      name: 'PRPCEM AMRAVATI',
      role: 'HOST CAMPUS',
      roleBg: 'bg-[#E5A93C] text-[#180805]',
      boxBg: 'bg-[#1E0905]',
      url: 'https://prpotepatilengg.ac.in/',
      logo: (
        <img
          src="/logos/prpcem-logo.jpeg"
          alt="PRPCEM"
          className="w-9 h-9 object-contain select-none rounded"
        />
      ),
    },
    {
      id: 'mscprpcem',
      name: 'MSC PRPCEM',
      role: 'COMMUNITY ORGANIZERS',
      roleBg: 'bg-[#C84832] text-[#FAF7F2]',
      boxBg: 'bg-[#1E0905]',
      url: 'https://www.mscprpcem.tech',
      logo: (
        <img
          src="/logos/mscprpcem-logo.png"
          alt="MSC PRPCEM"
          className="w-9 h-9 object-contain select-none"
        />
      ),
    },
  ];

  return (
    <section id="partners" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">

      {/* Decorative Warli Glyphs */}
      <div className="absolute top-16 right-16 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-24 right-10 text-[#FAF7F2]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 -left-6 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-20 -right-6 text-[#FAF7F2] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <span>🌾</span>
          <span>AMRAVATI ECOSYSTEM</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          COMMUNITY • PARTNERS
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <MapPin className="w-3 h-3 text-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">AMRAVATI, INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <Users className="w-3 h-3 text-[#180805]" />
          <span>COMMUNITY DRIVEN</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          PRPCEM • MSC • GLOBAL
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase">
            ECOSYSTEM
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            PARTNERS &amp; COLLABORATORS
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

      {/* Main Warli Partners Card */}
      <div className="bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] max-w-5xl mx-auto relative overflow-hidden">
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* 4 Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
          {partners.map((p) => (
            <div
              key={p.id}
              className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-3xl p-5 shadow-[4px_4px_0px_0px_#120402] flex flex-col items-center text-center justify-between hover:-translate-y-1 transition-transform group"
            >
              {/* Logo Box */}
              <div className={`w-20 h-20 rounded-3xl ${p.boxBg} border-[1.5px] border-[#FAF7F2]/40 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}>
                {p.logo}
              </div>

              {/* Title */}
              <h4 className="font-black font-sans text-base sm:text-lg text-[#FAF7F2] uppercase leading-tight mb-2">
                {p.name}
              </h4>

              {/* Role Badge */}
              <span className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-[#FAF7F2]/30 mb-4 ${p.roleBg}`}>
                {p.role}
              </span>

              {/* Website Link */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E5A93C] hover:underline cursor-pointer mt-auto pt-2"
              >
                <span>VISIT WEBSITE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="bg-[#1E0905] border-[1.5px] border-[#FAF7F2]/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold font-sans text-[#FAF7F2] leading-snug">
                Interested in supporting the community?
              </h5>
              <p className="text-[11px] sm:text-xs text-[#FAF7F2]/70 font-sans mt-0.5">
                Let&rsquo;s collaborate and celebrate local developers together.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${eventData.contactEmail}?subject=%5BSponsorship%5D%20.NET%20Conf%202026%20Amravati`}
            className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] shadow-[2.5px_2.5px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Contact Sponsorship Team</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncSponsors;
