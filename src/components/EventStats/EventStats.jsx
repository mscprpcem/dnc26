import React from 'react';
import { Calendar, MapPin, Layers, Users } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { eventData } from '../../data/event.js';

export const EventStats = () => {
  const icons = [
    <Calendar className="w-4 h-4 text-[#512BD4]" />,
    <MapPin className="w-4 h-4 text-[#0078D4]" />,
    <Layers className="w-4 h-4 text-[#512BD4]" />,
    <Users className="w-4 h-4 text-[#0078D4]" />,
  ];

  return (
    <section className="bg-white border-b border-[#E5E7EB] py-8 sm:py-10 shadow-2xs">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
          {eventData.stats.map((item, index) => (
            <div
              key={index}
              className={`py-3 md:py-0 px-4 sm:px-6 flex items-start gap-3.5`}
            >
              <div className="p-2 rounded-lg bg-[#F7F7F8] border border-[#E5E7EB] shrink-0 mt-0.5">
                {icons[index]}
              </div>
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight font-mono leading-none">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#171717] mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#5F6368] mt-0.5">
                  {item.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventStats;
