import React from 'react';
import { ArrowUpRight, ArrowRight, Megaphone, Users, MapPin } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const DncSponsors = () => {
  const partners = [
    {
      id: 'msft',
      name: 'MICROSOFT',
      role: 'GLOBAL TECHNOLOGY PARTNER',
      roleBg: 'bg-[#E0F2FE] text-[#0284C7]',
      boxBg: 'bg-[#E0F2FE]',
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
      roleBg: 'bg-[#FCE7F3] text-[#D600AA]',
      boxBg: 'bg-[#FCE7F3]',
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
      roleBg: 'bg-[#FEF3C7] text-[#D97706]',
      boxBg: 'bg-[#FEF3C7]',
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
      roleBg: 'bg-[#E0F7FA] text-[#00838F]',
      boxBg: 'bg-[#E0F7FA]',
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
    <section id="partners" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">

      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
          <span className="text-black uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#FFEBF7] text-[#D600AA] flex items-center gap-1.5">
          <span>⚡</span>
          <span>AMRAVATI EDITION</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <MapPin className="w-3 h-3 text-[#512BD4]" />
          <span className="text-black uppercase tracking-wider">AMRAVATI, INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-white text-black flex items-center gap-1.5">
          <Users className="w-3 h-3 text-[#512BD4]" />
          <span>DEVELOPERS &amp; COMMUNITY</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          PRPCEM • MSC • GLOBAL NETWORK
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 z-10">
          <span className="bg-[#00E5FF] text-black text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            ECOSYSTEM
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            PARTNERS &amp; COLLABORATORS
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

      {/* Main Neo-Brutalist Partners Card */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] max-w-5xl mx-auto">
        {/* 4 Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
          {partners.map((p) => (
            <div
              key={p.id}
              className="bg-white border-[2px] border-black rounded-3xl p-5 shadow-[3px_3px_0px_0px_#000] flex flex-col items-center text-center justify-between hover:-translate-y-1 transition-transform group"
            >
              {/* Logo Box */}
              <div className={`w-20 h-20 rounded-3xl ${p.boxBg} border-[1.5px] border-black/15 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}>
                {p.logo}
              </div>

              {/* Title */}
              <h4 className="font-black font-sans text-base sm:text-lg text-black uppercase leading-tight mb-2">
                {p.name}
              </h4>

              {/* Role Badge */}
              <span className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-black/15 mb-4 ${p.roleBg}`}>
                {p.role}
              </span>

              {/* Website Link */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#512BD4] hover:underline cursor-pointer mt-auto pt-2"
              >
                <span>VISIT WEBSITE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="bg-[#FAF9FF] border-[1.5px] border-black/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold font-sans text-black leading-snug">
                Interested in supporting the community?
              </h5>
              <p className="text-[11px] sm:text-xs text-stone-500 font-sans mt-0.5">
                Let's collaborate and create a bigger impact together.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${eventData.contactEmail}?subject=%5BSponsorship%5D%20.NET%20Conf%202026%20Amravati`}
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Contact the Sponsorship Team</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncSponsors;
