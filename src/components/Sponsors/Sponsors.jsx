import React from 'react';
import { Handshake } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Sponsors = () => {
  const partners = [
    {
      id: 'msft',
      name: 'Microsoft',
      subtitle: 'Technology Partner',
      roleBadge: 'Global Partner',
      badgeClass: 'text-[#512BD4] bg-[#EEEAFB] border-[#DCD5F6]/80',
      hoverBorder: 'hover:border-[#512BD4]',
      url: 'https://microsoft.com',
      logo: (
        <svg className="w-6 h-6 shrink-0" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" fill="#F25022" />
          <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
          <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
          <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
        </svg>
      ),
      logoBg: 'bg-white border-[#DCD5F6]/70',
    },
    {
      id: 'jetbrains',
      name: 'JetBrains',
      subtitle: 'Developer Tools',
      roleBadge: 'Tools Partner',
      badgeClass: 'text-[#FC6741] bg-orange-50 border-orange-200',
      hoverBorder: 'hover:border-[#FC6741]',
      url: 'https://jetbrains.com',
      logo: (
        <img
          src="/logos/jetbrains-logo.svg"
          alt="JetBrains Official Logo"
          className="w-full h-full object-contain select-none"
        />
      ),
      logoBg: 'bg-black border-black',
    },
    {
      id: 'prpcem',
      name: 'PRPCEM Amravati',
      subtitle: 'P. R. Pote Patil College',
      roleBadge: 'Campus Host',
      badgeClass: 'text-[#002B49] bg-blue-50 border-blue-200',
      hoverBorder: 'hover:border-[#002B49]',
      url: 'https://prpotepatilengg.ac.in/',
      logo: (
        <img
          src="/logos/prpcem-logo.jpeg"
          alt="PRPCEM College Official Emblem"
          className="w-full h-full object-contain select-none"
        />
      ),
      logoBg: 'bg-white border-[#DCD5F6]/70',
    },
    {
      id: 'mscprpcem',
      name: 'MSC PRPCEM',
      subtitle: 'Student Tech Community',
      roleBadge: 'Organizing Chapter',
      badgeClass: 'text-[#512BD4] bg-[#EEEAFB] border-[#DCD5F6]/80',
      hoverBorder: 'hover:border-[#512BD4]',
      url: 'https://www.mscprpcem.tech',
      logo: (
        <img
          src="/logos/mscprpcem-logo.png"
          alt="Microsoft Student Club PRPCEM Official Logo"
          className="w-full h-full object-contain select-none"
        />
      ),
      logoBg: 'bg-white border-[#DCD5F6]/70',
    },
  ];

  return (
    <section id="partners" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Handshake className="w-3 h-3" />
            <span>Official Ecosystem Collaborators</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-2.5">
            Partners & <span className="text-gradient-magenta">Collaborators</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#190649]/75 leading-relaxed">
            Organized in collaboration with global industry leaders, host academic institutions, and student community chapters.
          </p>
        </div>

        {/* Clean, Symmetrical 4-Card Grid with Precise Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white/95 backdrop-blur-xs rounded-2xl border border-[#DCD5F6] p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 group ${partner.hoverBorder} min-h-[135px]`}
            >
              {/* Top Row: Logo + Category Role Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className={`w-11 h-11 rounded-xl p-1 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden border ${partner.logoBg}`}>
                  {partner.logo}
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${partner.badgeClass}`}>
                  {partner.roleBadge}
                </span>
              </div>

              {/* Bottom Row: Full Brand Name + Category Subtitle */}
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm sm:text-base text-[#14053A] tracking-tight leading-snug">
                  {partner.name}
                </span>
                <span className="text-xs text-[#5F6368] leading-tight mt-0.5">
                  {partner.subtitle}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Community Chapter Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs text-[#190649]/70">
            Interested in supporting .NET Conf 2026 Amravati as an enterprise sponsor or community partner? Contact <a href={`mailto:${eventData.contactEmail}`} className="text-[#512BD4] font-bold underline">{eventData.contactEmail}</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
