import React, { useState, useEffect, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncPastHighlights = () => {
  const { pastEdition } = eventData;
  const gallery = pastEdition.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  // Autoplay every 5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  const current = gallery[activeIndex];

  return (
    <section id="highlights" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="03"
        leftTag="RECAP"
        leftBadgeText="📸 2024 ARCHIVE"
        leftBadgeColor="bg-[#D600AA] text-white"
        leftSub="SOLD OUT SHOW"
        rightIndex="500+"
        rightTag="BUILDERS"
        rightBadgeText="VIDARBHA EDITION"
        rightBadgeColor="bg-[#E0F7FA] text-[#006064]"
        rightSub="PRPCEM CAMPUS"
      />
      {/* Signpost */}
      <DncSignpost 
        title="2024 RETROSPECTIVE & GALLERY" 
        badge="LAST YEAR'S EDITION"
        theme="cyan"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        {/* Intro matching PastHighlights.jsx */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <Camera className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>2024 Edition Gallery · PRPCEM Campus</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2 sm:mb-3">
            Highlights of Last Year's Edition
          </h3>

          <p className="text-stone-700 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            A visual retrospective of .NET Conf 2024 Amravati — keynote sessions, hands-on workshops, and community celebrations at PRPCEM Campus.
          </p>
        </div>

        {/* Interactive Neo-Brutalist Slideshow Frame */}
        <div
          className="relative bg-slate-950 border-[2.5px] sm:border-[3px] border-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-[5px_5px_0px_0px_#000] aspect-16/10 sm:aspect-16/9 mb-6 sm:mb-8 select-none group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Active Image */}
          <img
            src={current.url}
            alt={current.title}
            className="w-full h-full object-cover select-none transition-opacity duration-300"
          />

          {/* Tag Pill */}
          <div className="absolute top-3.5 left-3.5 bg-black/80 text-white font-mono font-bold text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-lg border border-white/40 uppercase backdrop-blur-md">
            {current.tag}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-3.5 right-3.5 bg-[#512BD4] text-white font-mono font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-lg border border-black shadow-[2px_2px_0px_0px_#000]">
            {activeIndex + 1} / {gallery.length}
          </div>

          {/* Overlay Bottom Caption Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 text-white">
            <h4 className="font-sans font-black text-sm sm:text-lg md:text-xl uppercase tracking-tight">
              {current.title}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl line-clamp-2">
              {current.caption}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-xl bg-white/90 hover:bg-white text-black border-[2px] border-black shadow-[2px_2px_0px_0px_#000] active:scale-95 transition-transform cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-xl bg-[#FFD13B] hover:bg-yellow-300 text-black border-[2px] border-black shadow-[2px_2px_0px_0px_#000] active:scale-95 transition-transform cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Thumbnail Indicator Dots */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full border-[1.5px] border-black transition-all cursor-pointer ${
                activeIndex === idx ? 'w-7 sm:w-8 bg-[#512BD4]' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
            <div className="text-[11px] sm:text-xs font-mono font-bold text-stone-700 mt-0.5 sm:mt-1 uppercase">Community Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncPastHighlights;
