import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const PastHighlights = () => {
  const { pastEdition } = eventData;
  const gallery = pastEdition.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);

  // Autoplay every 4.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="highlights" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
            <Camera className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>2024 Edition Gallery · PRPCEM Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Highlights of <span className="community-event-gradient-text">Last Year's Edition</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/75 leading-relaxed">
            A visual retrospective of .NET Conf 2024 Amravati — keynote sessions, hands-on workshops, and community celebrations at PRPCEM Campus.
          </p>
        </div>

        {/* Clean, Focused Slideshow Frame */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#DCD5F6] aspect-16/10 sm:aspect-16/9 bg-slate-950 group select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track for smooth carousel transition */}
          <div
            className="flex w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="w-full h-full shrink-0 relative flex items-center justify-center overflow-hidden bg-slate-950"
              >
                {/* Ambient Blurred Background to seamlessly fill different aspect ratios */}
                <img
                  src={item.url}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-40 select-none pointer-events-none"
                />

                {/* Full, Uncropped High-Definition Photo */}
                <img
                  src={item.url}
                  alt={item.title || `Slide ${idx + 1}`}
                  className="relative z-1 max-w-full max-h-full w-auto h-auto object-contain rounded-md drop-shadow-2xl"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />

                {/* Caption Bar */}
                {item.title && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-8 pb-3 sm:pb-4 px-4 sm:px-6 z-2 text-left pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#9780E5] block mb-0.5">
                      {item.tag || '2024 Highlight'}
                    </span>
                    <h3 className="text-white text-xs sm:text-sm md:text-base font-bold drop-shadow-sm truncate">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Left & Right Chevron Navigation Buttons */}
          <div className="absolute inset-y-0 left-3 sm:left-5 flex items-center z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[#14053A] flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95 border border-white/60"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#14053A]" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-3 sm:right-5 flex items-center z-10">
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[#14053A] flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95 border border-white/60"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#14053A]" />
            </button>
          </div>
        </div>

        {/* Clean, Simple Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 bg-[#512BD4]'
                  : 'w-2.5 bg-[#DCD5F6] hover:bg-[#9780E5]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PastHighlights;
