import React, { useState, useEffect, useCallback } from 'react';
import { Image, Mic, Laptop, Users, ChevronRight, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { eventData } from '../../data/event.js';
import { scrollToSection } from '../../utils/sectionRouter.js';
import { WarliCornerOrnament, WarliSawtoothBorder } from '../Warli/WarliMotifs.jsx';

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
      className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Warli Glyphs */}
      <div className="absolute top-16 right-12 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-24 right-6 text-[#FAF7F2]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 -left-6 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-20 -right-6 text-[#FAF7F2] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="text-[#E5A93C]">03</span>
          <span className="text-[#FAF7F2]/40">//</span>
          <span className="uppercase tracking-wider">RECAP</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-[#E5A93C]" />
          <span>2024 ARCHIVE</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          SOLD OUT SHOW
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
          <span className="text-[#E5A93C]">500+</span>
          <span className="text-[#FAF7F2]/40">//</span>
          <span className="uppercase tracking-wider">DELEGATES</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#180805]" />
          <span>VIDARBHA EDITION</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          PRPCEM CAMPUS
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-2.5 sm:gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase">
            RETROSPECTIVE
          </span>
          <span className="text-[#FAF7F2]/60 font-mono text-xs">✦</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            PREVIOUS EDITION HIGHLIGHTS
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

      {/* Main Warli Showcase Card */}
      <div className="relative z-10 bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] max-w-5xl mx-auto overflow-hidden">
        
        {/* Warli Corner Ornaments */}
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
            <Image className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>COMMUNITY ARCHIVE • PRPCEM CAMPUS, AMRAVATI</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black font-sans uppercase tracking-tight text-[#FAF7F2] text-center mb-2.5">
          A LOOK BACK AT <span className="text-[#E5A93C]">.NET CONF</span> AMRAVATI
        </h2>

        {/* Subtitle */}
        <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed mb-8">
          Revisit the landmark in-person gathering that brought together 500+ student developers, software engineers, Microsoft MVPs, and community innovators at PRPCEM.
        </p>

        {/* 3 Moving Photo Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Card 1: Keynote & Community */}
          <div>
            <div className="flex justify-center gap-1 mb-1.5">
              <span className="w-1 h-2.5 bg-[#E5A93C] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-3 bg-[#E5A93C] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#E5A93C] rotate-[25deg] rounded-full inline-block" />
            </div>
            <div className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#120402] flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="aspect-16/10 overflow-hidden bg-[#2D0F0A] relative">
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
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx1 === i ? 'bg-[#E5A93C] scale-125' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 flex items-center justify-between border-t-[1.5px] border-[#FAF7F2]/30 bg-[#260C07]">
                <div className="flex items-center gap-2 font-black font-sans text-xs uppercase text-[#FAF7F2]">
                  <Mic className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>KEYNOTE &amp; COMMUNITY</span>
                </div>
                <button
                  type="button"
                  onClick={next1}
                  className="w-7 h-7 rounded-full bg-[#38130D] hover:bg-[#E5A93C] hover:text-[#180805] text-[#E5A93C] flex items-center justify-center border border-[#FAF7F2]/30 shrink-0 transition-colors cursor-pointer"
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
              <span className="w-1 h-2.5 bg-[#FAF7F2] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-3 bg-[#FAF7F2] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#FAF7F2] rotate-[25deg] rounded-full inline-block" />
            </div>
            <div className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#120402] flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="aspect-16/10 overflow-hidden bg-[#2D0F0A] relative">
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
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx2 === i ? 'bg-[#E5A93C] scale-125' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 flex items-center justify-between border-t-[1.5px] border-[#FAF7F2]/30 bg-[#260C07]">
                <div className="flex items-center gap-2 font-black font-sans text-xs uppercase text-[#FAF7F2]">
                  <Laptop className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>HANDS-ON LEARNING</span>
                </div>
                <button
                  type="button"
                  onClick={next2}
                  className="w-7 h-7 rounded-full bg-[#38130D] hover:bg-[#E5A93C] hover:text-[#180805] text-[#E5A93C] flex items-center justify-center border border-[#FAF7F2]/30 shrink-0 transition-colors cursor-pointer"
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
              <span className="w-1 h-2.5 bg-[#C84832] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-3 bg-[#C84832] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#C84832] rotate-[25deg] rounded-full inline-block" />
            </div>
            <div className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#120402] flex flex-col group hover:-translate-y-1 transition-transform">
              <div className="aspect-16/10 overflow-hidden bg-[#2D0F0A] relative">
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
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx3 === i ? 'bg-[#E5A93C] scale-125' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 flex items-center justify-between border-t-[1.5px] border-[#FAF7F2]/30 bg-[#260C07]">
                <div className="flex items-center gap-2 font-black font-sans text-xs uppercase text-[#FAF7F2]">
                  <Users className="w-4 h-4 text-[#C84832] shrink-0" />
                  <span>CAMPUS MOMENTS</span>
                </div>
                <button
                  type="button"
                  onClick={next3}
                  className="w-7 h-7 rounded-full bg-[#38130D] hover:bg-[#E5A93C] hover:text-[#180805] text-[#E5A93C] flex items-center justify-center border border-[#FAF7F2]/30 shrink-0 transition-colors cursor-pointer"
                  title="Next photo"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Stats & CTA Bar */}
        <div className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 shadow-[4px_4px_0px_0px_#120402]">
          {/* Left notice */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#38130D] text-[#E5A93C] border-[1.5px] border-[#FAF7F2] flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
              <Image className="w-5 h-5 text-[#E5A93C]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black font-sans uppercase text-[#FAF7F2] block leading-tight">
                PAST EDITION GALLERY • ARCHIVE
              </span>
              <span className="text-[11px] sm:text-xs text-[#FAF7F2]/75 font-sans block mt-0.5">
                Explore highlights from previous editions &mdash; talks, workshops, and community interactions.
              </span>
            </div>
          </div>

          {/* Middle: 4 Stats */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-7">
            {/* Stat 1: 500+ Attendees */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#E5A93C] border border-[#FAF7F2]/30 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-mono text-[#E5A93C] block leading-none">500+</span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">Attendees</span>
              </div>
            </div>

            {/* Stat 2: Expert Speakers */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#E5A93C] border border-[#FAF7F2]/30 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-mono text-[#E5A93C] block leading-none">8+</span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">Speakers</span>
              </div>
            </div>

            {/* Stat 3: Hands-on Workshops */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#C84832] border border-[#FAF7F2]/30 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-mono text-[#FAF7F2] block leading-none">10+</span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">Tech Sessions</span>
              </div>
            </div>

            {/* Stat 4: Colleges */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#38130D] text-[#FAF7F2] border border-[#FAF7F2]/30 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#120402]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black font-mono text-[#FAF7F2] block leading-none">15+</span>
                <span className="text-[10px] text-[#FAF7F2]/70 font-sans block leading-tight mt-0.5">Colleges</span>
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
            className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-black text-xs sm:text-sm font-sans uppercase px-6 py-3 rounded-full border-[2px] border-[#FAF7F2] shadow-[2.5px_2.5px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
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
