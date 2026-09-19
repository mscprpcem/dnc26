import React from 'react';
import { Calendar } from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';

export const DncPastHighlights = () => {
  const highlights = [
    {
      img: '/past-edition/dnc24-auditorium-keynote.jpg',
      caption: 'Packed PRPCEM Main Auditorium',
      tag: 'Keynote Session',
      rotate: 'sm:-rotate-1',
    },
    {
      img: '/past-edition/dnc24-technical-speaker.jpg',
      caption: 'Industry Architects & Speakers',
      tag: 'Technical Talks',
      rotate: 'sm:rotate-1',
    },
    {
      img: '/past-edition/dnc24-hands-on-lab.jpg',
      caption: 'Live Hands-On Coding Labs',
      tag: 'Workshops',
      rotate: 'sm:-rotate-1',
    },
    {
      img: '/past-edition/dnc24-closing-awards.jpg',
      caption: 'Community Awards & Celebrations',
      tag: 'Closing Ceremony',
      rotate: 'sm:rotate-1',
    },
  ];

  return (
    <section id="dnc-highlights" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="2024 RETROSPECTIVE" 
        badge="LAST YEAR'S HIGHLIGHTS"
        theme="cyan"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>20 APRIL 2024 • INAUGURAL EDITION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2 sm:mb-3">
            Central India’s Landmark Developer Gathering
          </h3>

          <p className="text-stone-700 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            The inaugural .NET Conf Amravati set a benchmark for regional developer conferences. 500+ passionate students, faculty, and working professionals gathered at PRPCEM for an exhilarating day of deep technical dives and community networking.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-[#EEEAFB] border-[2px] border-black rounded-2xl p-3 sm:p-4 text-center shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#512BD4]">500+</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-stone-700 mt-0.5 sm:mt-1 uppercase">Attendees</div>
          </div>

          <div className="bg-[#E0F7FA] border-[2px] border-black rounded-2xl p-3 sm:p-4 text-center shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#006064]">12+</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-stone-700 mt-0.5 sm:mt-1 uppercase">Speakers</div>
          </div>

          <div className="bg-[#FCE7F8] border-[2px] border-black rounded-2xl p-3 sm:p-4 text-center shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#D600AA]">15+</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-stone-700 mt-0.5 sm:mt-1 uppercase">Colleges</div>
          </div>

          <div className="bg-[#FFF9E6] border-[2px] border-black rounded-2xl p-3 sm:p-4 text-center shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-black">100%</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-stone-700 mt-0.5 sm:mt-1 uppercase">Free & Open</div>
          </div>
        </div>

        {/* Polaroid Photo Cards Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#FAFAFA] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-2.5 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:scale-[1.02] transition-all transform ${item.rotate} flex flex-col`}
            >
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border-[1.5px] border-black mb-2 sm:mb-3 bg-stone-200">
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-white/40 uppercase">
                  {item.tag}
                </span>
              </div>
              <div className="text-xs font-sans font-bold text-black px-1 pb-1">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Community Testimonial Highlight */}
        <div className="mt-8 sm:mt-10 bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-4 sm:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#512BD4] text-white border-[2px] border-black flex items-center justify-center text-xl sm:text-2xl shadow-[2px_2px_0px_0px_#000] shrink-0">
              🎤
            </div>
            <div>
              <p className="text-xs sm:text-sm font-sans font-bold text-stone-900 leading-snug">
                "The energy and passion of Amravati's student developer community was unforgettable. 2026 is going to be even bigger!"
              </p>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#512BD4] font-bold mt-1">
                — MSC PRPCEM Organizing Committee
              </div>
            </div>
          </div>

          <a
            href="#dnc-interest"
            className="w-full sm:w-auto text-center bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-bold text-xs uppercase px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap"
          >
            BE PART OF 2026 ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncPastHighlights;
