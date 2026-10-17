import React, { useState, useEffect, useCallback } from 'react';
import { Image, Mic, Laptop, Users, ChevronRight, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { scrollToSection } from '../../utils/sectionRouter.js';

export const DncPastHighlights = () => {
  const { pastEdition } = eventData;
  const gallery = pastEdition.gallery;

  // Segment gallery into 3 active pools
  const pool1 = [
    gallery[1] || { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/P7.jpg', title: 'Keynote Session' },
    gallery[6] || { url: 'https://mscprpcem.blob.core.windows.net/general/event7.jpg', title: 'Speaker Q&A' },
    gallery[0] || { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG_20250111_143135.jpg', title: 'Opening Remarks' },
  ];

  const pool2 = [
    gallery[2] || { url: 'https://dotnetconfamravati.blob.core.windows.net/website-images/IMG_20250109_121040577_HDR.jpg', title: 'Hands-on Labs' },
    gallery[3] || { url: 'https://mscprpcem.blob.core.windows.net/general/event3.jpg', title: 'Interactive Workshop' },
    gallery[5] || { url: 'https://mscprpcem.blob.core.windows.net/general/event10.jpg', title: 'Code Challenge' },
  ];

  const pool3 = [
    gallery[4] || { url: 'https://mscprpcem.blob.core.windows.net/general/event5.jpg', title: 'Campus Moments' },
    gallery[7] || { url: 'https://mscprpcem.blob.core.windows.net/general/event2.jpg', title: 'Community Delegates' },
    gallery[8] || { url: 'https://mscprpcem.blob.core.windows.net/general/event4.jpg', title: 'Organizing Team' },
  ];

  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [idx3, setIdx3] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next1 = useCallback(() => setIdx1((p) => (p + 1) % pool1.length), [pool1.length]);
  const next2 = useCallback(() => setIdx2((p) => (p + 1) % pool2.length), [pool2.length]);
  const next3 = useCallback(() => setIdx3((p) => (p + 1) % pool3.length), [pool3.length]);

  // Automated staggered rotation of images so the gallery visibly moves
  useEffect(() => {
    if (isPaused) return;
    const t1 = setInterval(next1, 3800);
    const t2 = setInterval(next2, 4400);
    const t3 = setInterval(next3, 5000);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, [isPaused, next1, next2, next3]);

  return (
    <section 
      id="highlights" 
      className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-12 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-6 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="text-[#512BD4]">03</span>
          <span className="text-stone-300">//</span>
          <span className="uppercase tracking-wider">RECAP</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#FFEBF7] text-[#D600AA] flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-[#D600AA]" />
          <span>2024 ARCHIVE</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          SOLD OUT SHOW
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
          <span className="text-[#00BDD6]">500+</span>
          <span className="text-stone-300">//</span>
          <span className="uppercase tracking-wider">BUILDERS</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-white text-black flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#512BD4]" />
          <span>VIDARBHA EDITION</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          PRPCEM CAMPUS
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-2.5 sm:gap-3 z-10">
          <span className="bg-[#00BDD6] text-black text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            LAST YEAR'S EDITION
          </span>
          <span className="text-white/60 font-mono text-xs">✦</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            2024 EDITION RECAP
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

      {/* Main Neo-Brutalist Showcase Card (relative z-10 ensures it's above any background rings) */}
      <div className="relative z-10 bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] max-w-5xl mx-auto">
        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#FAF8FF] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            <Image className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>2024 EDITION GALLERY • PRPCEM CAMPUS</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black font-sans uppercase tracking-tight text-black text-center mb-2.5">
          A LOOK BACK AT <span className="text-[#512BD4]">.NET CONF</span> AMRAVATI
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed mb-8">
          Revisit the sessions, hands-on learning and community moments that brought local developers together.
        </p>

        {/* 3 Moving Photo Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Card 1: Keynote & Community */}
          <div>
            <div className="flex justify-center gap-1 mb-1.5">
              <span className="w-1 h-2.5 bg-[#512BD4] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-3 bg-[#512BD4] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#512BD4] rotate-[25deg] rounded-full inline-block" />
            </div>
            <div className="bg-white border-[2px] border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_#000] flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="aspect-16/10 overflow-hidden bg-slate-900 relative">
                {/* Sliding Track for smooth auto-sliding images */}
                <div 
                  className="flex w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${idx1 * 100}%)` }}
                >
                  {pool1.map((item, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 relative">
                      <img
                        src={item.url}
                        alt={item.title || 'Keynote and Community'}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {/* Dots indicator */}
                <div className="absolute bottom-2 left-2 flex gap-1 z-10 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-full">
                  {pool1.map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx1 === i ? 'bg-[#00F0FF] scale-125' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 flex items-center justify-between border-t-[1.5px] border-black bg-white">
                <div className="flex items-center gap-2 font-black font-sans text-xs uppercase text-black">
                  <Mic className="w-4 h-4 text-[#512BD4] shrink-0" />
                  <span>KEYNOTE & COMMUNITY</span>
                </div>
                <button
                  type="button"
                  onClick={next1}
                  className="w-7 h-7 rounded-full bg-[#EEEAFB] hover:bg-[#512BD4] hover:text-white text-[#512BD4] flex items-center justify-center border border-purple-200 shrink-0 transition-colors cursor-pointer"
                  title="Next photo"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Hands-on Learning */}
          <div>
            <div className="flex justify-center gap-1 mb-1.5">
              <span className="w-1 h-2.5 bg-[#00BDD6] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-3 bg-[#00BDD6] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#00BDD6] rotate-[25deg] rounded-full inline-block" />
            </div>
            <div className="bg-white border-[2px] border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_#000] flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="aspect-16/10 overflow-hidden bg-slate-900 relative">
                {/* Sliding Track for smooth auto-sliding images */}
                <div 
                  className="flex w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${idx2 * 100}%)` }}
                >
                  {pool2.map((item, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 relative">
                      <img
                        src={item.url}
                        alt={item.title || 'Hands-on Learning'}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {/* Dots indicator */}
                <div className="absolute bottom-2 left-2 flex gap-1 z-10 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-full">
                  {pool2.map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx2 === i ? 'bg-[#00BDD6] scale-125' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 flex items-center justify-between border-t-[1.5px] border-black bg-white">
                <div className="flex items-center gap-2 font-black font-sans text-xs uppercase text-black">
                  <Laptop className="w-4 h-4 text-[#00BDD6] shrink-0" />
                  <span>HANDS-ON LEARNING</span>
                </div>
                <button
                  type="button"
                  onClick={next2}
                  className="w-7 h-7 rounded-full bg-[#E0F7FA] hover:bg-[#00BDD6] hover:text-black text-[#00838F] flex items-center justify-center border border-cyan-200 shrink-0 transition-colors cursor-pointer"
                  title="Next photo"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Campus Moments */}
          <div>
            <div className="flex justify-center gap-1 mb-1.5">
              <span className="w-1 h-2.5 bg-[#D600AA] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-3 bg-[#D600AA] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#D600AA] rotate-[25deg] rounded-full inline-block" />
            </div>
            <div className="bg-white border-[2px] border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_#000] flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="aspect-16/10 overflow-hidden bg-slate-900 relative">
                {/* Sliding Track for smooth auto-sliding images */}
                <div 
                  className="flex w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${idx3 * 100}%)` }}
                >
                  {pool3.map((item, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 relative">
                      <img
                        src={item.url}
                        alt={item.title || 'Campus Moments'}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {/* Dots indicator */}
                <div className="absolute bottom-2 left-2 flex gap-1 z-10 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-full">
                  {pool3.map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx3 === i ? 'bg-[#D600AA] scale-125' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 flex items-center justify-between border-t-[1.5px] border-black bg-white">
                <div className="flex items-center gap-2 font-black font-sans text-xs uppercase text-black">
                  <Users className="w-4 h-4 text-[#D600AA] shrink-0" />
                  <span>CAMPUS MOMENTS</span>
                </div>
                <button
                  type="button"
                  onClick={next3}
                  className="w-7 h-7 rounded-full bg-[#FCE7F3] hover:bg-[#D600AA] hover:text-white text-[#D600AA] flex items-center justify-center border border-pink-200 shrink-0 transition-colors cursor-pointer"
                  title="Next photo"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Stats & CTA Bar */}
        <div className="bg-[#FAF9FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 shadow-[3px_3px_0px_0px_#000]">
          {/* Left notice */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
              <Image className="w-5 h-5 text-[#512BD4]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black font-sans uppercase text-black block leading-tight">
                PAST EDITION GALLERY • ARCHIVE
              </span>
              <span className="text-[11px] sm:text-xs text-stone-600 font-sans block mt-0.5">
                Explore highlights from previous editions — talks, workshops, community interactions and more.
              </span>
            </div>
          </div>

          {/* Middle: 3 Stats */}
          <div className="flex items-center gap-5 sm:gap-8">
            {/* Stat 1: 500+ Attendees */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] border border-purple-200 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-mono text-black block leading-none">500+</span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">Attendees</span>
              </div>
            </div>

            {/* Stat 2: Expert Speakers */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] border border-purple-200 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-sans text-black block leading-none">Expert</span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">Speakers</span>
              </div>
            </div>

            {/* Stat 3: Hands-on Workshops */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EEEAFB] text-[#512BD4] border border-purple-200 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000]">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-sans text-black block leading-none">Hands-on</span>
                <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">Workshops</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Button */}
          <a
            href="/highlights"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('/highlights');
            }}
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-black text-xs sm:text-sm font-sans uppercase px-6 py-3 rounded-full border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>VIEW GALLERY</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncPastHighlights;
