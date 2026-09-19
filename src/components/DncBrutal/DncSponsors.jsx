import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncSponsors = () => {
  const partners = [
    {
      id: 'msft',
      name: 'Microsoft',
      role: 'Global Tech Partner',
      url: 'https://microsoft.com',
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10" height="10" fill="#F25022" />
          <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
          <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
          <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
        </svg>
      ),
    },
    {
      id: 'jetbrains',
      name: 'JetBrains',
      role: 'Developer Tools',
      url: 'https://jetbrains.com',
      logo: (
        <img
          src="/logos/jetbrains-logo.svg"
          alt="JetBrains"
          className="w-8 h-8 object-contain select-none"
        />
      ),
    },
    {
      id: 'prpcem',
      name: 'PRPCEM Amravati',
      role: 'Host Campus',
      url: 'https://prpotepatilengg.ac.in/',
      logo: (
        <img
          src="/logos/prpcem-logo.jpeg"
          alt="PRPCEM"
          className="w-8 h-8 object-contain select-none rounded"
        />
      ),
    },
    {
      id: 'mscprpcem',
      name: 'MSC PRPCEM',
      role: 'Organizers',
      url: 'https://www.mscprpcem.tech',
      logo: (
        <img
          src="/logos/mscprpcem-logo.png"
          alt="MSC PRPCEM"
          className="w-8 h-8 object-contain select-none"
        />
      ),
    },
  ];

  return (
    <section id="partners" className="py-6 sm:py-8 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="09"
        leftTag="PARTNERS"
        leftBadgeText="🤝 TECH TITANS"
        leftBadgeColor="bg-[#E0F7FA] text-[#006064]"
        leftSub="GLOBAL & LOCAL"
        rightIndex="HOST"
        rightTag="CAMPUS"
        rightBadgeText="JETBRAINS & MSFT"
        rightBadgeColor="bg-[#EEEAFB] text-[#512BD4]"
        rightSub="PRPCEM & MSC"
      />
      <DncSignpost 
        title="PARTNERS & COLLABORATORS" 
        badge="ECOSYSTEM"
        theme="cyan"
      />

      <div className="bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#000]">
        
        {/* Clean 4-Partner Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {partners.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF8FF] hover:bg-white border-[2px] border-black rounded-2xl p-4 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1.5px] hover:translate-y-[1.5px] transition-all flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border-[2px] border-black p-2.5 flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000] mb-3 group-hover:rotate-3 transition-transform">
                {p.logo}
              </div>

              <h4 className="font-black font-sans text-base text-black uppercase group-hover:text-[#512BD4] transition-colors leading-tight">
                {p.name}
              </h4>

              <span className="text-[10px] font-mono font-bold text-stone-500 uppercase mt-1 bg-white border border-black/20 px-2 py-0.5 rounded-full">
                {p.role}
              </span>

              <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#512BD4]">
                <span>VISIT</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        {/* Minimal Sponsor Callout */}
        <div className="text-center pt-2 border-t border-black/10">
          <p className="font-mono text-xs text-stone-600">
            Interested in sponsoring?{' '}
            <a
              href={`mailto:${eventData.contactEmail}?subject=%5BSponsorship%5D%20.NET%20Conf%202026%20Amravati`}
              className="font-bold text-[#512BD4] hover:underline cursor-pointer"
            >
              Contact Sponsorship Desk ↗
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default DncSponsors;
