import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconTestimonials = () => {
  const testimonials = [
    {
      quote: "Hackcon completely transformed our leadership team's mindset. Swapping war stories with organizers from Hack the North and MIT helped us solve our biggest sponsor retention hurdles.",
      name: "Marcus Lin",
      role: "Lead Director",
      hackathon: "BostonHacks",
      year: "Hackcon X & XI Attendee",
      avatar: "🌲",
      accent: "bg-[#FFDB43]"
    },
    {
      quote: "There is nothing in tech quite like sitting around a real campfire talking about distributed judging algorithms with 50 student leads. The community here is unmatched.",
      name: "Amanda Chen",
      role: "Co-President",
      hackathon: "HackDavis",
      year: "Hackcon XI Attendee",
      avatar: "🛶",
      accent: "bg-[#70D6C7]"
    },
    {
      quote: "The workshops on inclusive hacker recruitment gave us real, field-tested playbooks. One year later, our female and first-time hacker participation surged by over 40%.",
      name: "Jason Ramirez",
      role: "Logistics Lead",
      hackathon: "KnightHacks",
      year: "Hackcon IX & XI Attendee",
      avatar: "🔥",
      accent: "bg-[#FF9E79]"
    },
    {
      quote: "I thought Hackcon was just going to be slide decks. Instead, I got hands-on mentoring, pitched partners, and canoed across a mountain lake with people who became my best friends.",
      name: "Elena Rostova",
      role: "Sponsorship Director",
      hackathon: "Cal Hacks",
      year: "Hackcon X Attendee",
      avatar: "🏕️",
      accent: "bg-[#E1BEE7]"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section id="hackcon-testimonials" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="WHAT ATTENDEES SAY" 
        badge="HEAR FROM ALUMNI"
      />

      <div className="bg-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] relative">
        {/* Decorative quotes badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current stroke-black stroke-[1.5]" />
            ))}
            <span className="ml-2 font-mono font-bold text-xs text-black">
              10/10 CAMP EXPERIENCE
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-xl border-[2px] border-black bg-stone-100 hover:bg-stone-200 text-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-xl border-[2px] border-black bg-[#FFDB43] hover:bg-[#FFE368] text-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Quote Box */}
        <div className="min-h-[160px] flex flex-col justify-center">
          <p className="text-lg sm:text-2xl font-bold font-sans text-black leading-relaxed mb-6">
            "{current.quote}"
          </p>

          <div className="flex items-center gap-4 pt-4 border-t-[2px] border-black/10">
            <div className={`w-12 h-12 rounded-2xl ${current.accent} border-[2px] border-black flex items-center justify-center text-2xl shadow-[2px_2px_0px_0px_#000]`}>
              {current.avatar}
            </div>
            <div>
              <div className="font-black font-sans text-base sm:text-lg text-black uppercase leading-tight">
                {current.name}
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-stone-600">
                {current.role}, <span className="text-emerald-800">{current.hackathon}</span>
              </div>
              <div className="text-[11px] font-mono text-stone-500">
                {current.year}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full border-[1.5px] border-black transition-all ${
                currentIndex === index
                  ? 'w-8 bg-[#FFDB43]'
                  : 'w-3 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackconTestimonials;
