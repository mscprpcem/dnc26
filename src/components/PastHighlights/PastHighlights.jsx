import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera, Play, Pause, MapPin, Mail } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const PastHighlights = () => {
  const { pastEdition } = eventData;
  const gallery = pastEdition.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  // Auto-advance slideshow when isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, gallery.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="highlights" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
            <Camera className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>2024 Edition Gallery · PRPCEM Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Highlights of <span className="community-event-gradient-text">Last Year's Edition</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/75 leading-relaxed">
            A visual retrospective of .NET Conf 2024 Amravati — keynote sessions, hands-on workshops, and community celebration at Swami Vivekananda Auditorium.
          </p>
        </div>

        {/* Slideshow Showcase Container */}
        <div
          className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#DCD5F6] shadow-xl overflow-hidden p-4 sm:p-6 md:p-8 transition-all"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Top Multi-Color Accent Gradient Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#512BD4] via-[#D600AA] to-[#28C2D1]" />

          {/* Main Slideshow Frame */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#DCD5F6] aspect-16/10 sm:aspect-16/9 bg-slate-950 group">
            <img
              key={activeIndex}
              src={gallery[activeIndex].url}
              alt={gallery[activeIndex].title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-102"
            />
            
            {/* Ambient Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14053A]/90 via-[#14053A]/25 to-transparent pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-[#512BD4] text-white text-[11px] sm:text-xs font-bold shadow-md">
                {gallery[activeIndex].tag}
              </span>

              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-2.5 py-1 rounded-full bg-white/90 hover:bg-white text-[#14053A] text-[10px] font-bold shadow-md flex items-center gap-1 transition-all cursor-pointer"
                  title={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause className="w-3 h-3 text-[#512BD4]" /> : <Play className="w-3 h-3 text-[#512BD4]" />}
                  <span className="hidden sm:inline">{isPlaying ? 'Autoplay' : 'Paused'}</span>
                </button>

                <span className="px-3 py-1 rounded-full bg-white/90 text-[#14053A] text-[11px] font-bold shadow-md flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-[#512BD4]" />
                  <span>{activeIndex + 1} / {gallery.length}</span>
                </span>
              </div>
            </div>

            {/* Left & Right Navigation Chevrons */}
            <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-[#14053A] flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center">
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-[#14053A] flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold font-display text-[#14053A]">
                    {gallery[activeIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mt-0.5">
                    {gallery[activeIndex].caption}
                  </p>
                </div>
                <div className="shrink-0 text-[10px] sm:text-xs font-semibold text-[#512BD4] bg-[#EEEAFB] px-2.5 py-1 rounded-md self-start sm:self-center border border-[#DCD5F6]">
                  20 April 2024 · PRPCEM Campus
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5 mb-3">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 bg-[#512BD4]'
                    : 'w-2 bg-[#DCD5F6] hover:bg-[#9780E5]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Clickable Thumbnail Filmstrip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-3">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`group relative rounded-xl overflow-hidden aspect-16/10 border-2 transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'border-[#512BD4] ring-2 ring-[#512BD4]/30 shadow-md scale-102'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-[#9780E5]'
                }`}
                aria-label={`View ${img.title}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#14053A]/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white truncate px-1 py-0.5 rounded bg-black/60 backdrop-blur-xs">
                  {img.tag}
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Inquiries Bar */}
          <div className="mt-6 pt-4 border-t border-[#DCD5F6]/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5F6368]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Swami Vivekananda Auditorium, PRPCEM Campus, Amravati</span>
            </div>
            <a
              href={`mailto:${eventData.contactEmail}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#512BD4] hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{eventData.contactEmail}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PastHighlights;
