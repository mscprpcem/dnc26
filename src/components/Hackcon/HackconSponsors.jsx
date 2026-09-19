import React from 'react';
import { ArrowUpRight, Sparkles, Handshake } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconSponsors = () => {
  const sponsors = [
    {
      name: 'GitHub',
      role: 'Global Education Partner',
      badge: 'Premier Sponsor',
      color: 'bg-stone-100',
      icon: '🐙'
    },
    {
      name: 'Major League Hacking',
      role: 'Founding Host & Organizer',
      badge: 'Host',
      color: 'bg-[#FFEBEE]',
      icon: '🏛️'
    },
    {
      name: 'Devpost',
      role: 'Official Hackathon Platform',
      badge: 'Platform Partner',
      color: 'bg-[#E0F2F1]',
      icon: '🚀'
    },
    {
      name: 'Brand Makers',
      role: 'Official Swag & Merchandise',
      badge: 'Camp Partner',
      color: 'bg-[#FFF3E0]',
      icon: '👕'
    }
  ];

  return (
    <section id="hackcon-sponsors" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="SPONSORS & PARTNERS" 
        badge="OUR SUPPORTERS"
      />

      <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-base sm:text-lg font-bold font-sans text-stone-800">
            Hackcon is powered by visionary companies dedicated to nurturing student developers, hackathon ecosystems, and open source communities worldwide.
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {sponsors.map((sp) => (
            <div
              key={sp.name}
              className={`${sp.color} border-[2px] border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{sp.icon}</span>
                  <span className="text-[10px] font-mono font-bold uppercase bg-black text-white px-2 py-0.5 rounded">
                    {sp.badge}
                  </span>
                </div>
                <h4 className="font-black font-sans text-lg text-black uppercase">
                  {sp.name}
                </h4>
                <p className="text-xs font-mono text-stone-600 mt-1">
                  {sp.role}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t-[1.5px] border-black/20 text-[11px] font-mono font-bold text-emerald-800 flex items-center gap-1">
                <span>OFFICIAL PARTNER</span>
                <span className="text-emerald-500">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Us Banner */}
        <div className="bg-[#FFF4C2] border-[2px] border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black uppercase mb-1">
              <Handshake className="w-4 h-4" />
              <span>WANT TO ENGAGE TOP STUDENT LEADERS?</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-sans uppercase text-black">
              Sponsor Hackcon XII
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 font-sans max-w-xl">
              Meet 300+ university organizers and club leads who influence thousands of campus developers every semester.
            </p>
          </div>

          <a
            href="mailto:sponsor@mlh.com"
            className="bg-black hover:bg-stone-800 text-[#FFDB43] font-mono font-bold text-xs sm:text-sm uppercase px-5 py-3 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>GET SPONSOR PROSPECTUS</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HackconSponsors;
