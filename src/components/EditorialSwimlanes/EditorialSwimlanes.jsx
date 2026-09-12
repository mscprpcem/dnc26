import React from 'react';
import { eventData } from '../../data/event.js';

export const EditorialSwimlanes = () => {
  return (
    <section id="overview" className="w-full py-8 sm:py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 md:space-y-16">
        {eventData.editorialSections.map((section) => (
          <div
            key={section.id}
            className="text-swimlane border-t border-[#DCD5F6]/70 pt-8 sm:pt-10 md:pt-12 first:border-t-0 first:pt-0"
          >
            {/* Left Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] leading-snug">
              {section.title}
            </h2>

            {/* Right Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#190649]/80 font-normal leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
