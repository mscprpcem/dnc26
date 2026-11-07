import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export const DncAgenda = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleDays = {
    1: [
      {
        time: '08:30',
        title: 'Gates open · Registration & Morning Coffee',
        desc: 'Doors open, badges, and delegate check-in at the foyer.',
        isConfirmed: true,
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '76%',
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '54%',
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '82%',
      },
      {
        time: '13:00',
        title: 'Delegate Buffet Lunch & Networking',
        desc: 'Catered auditorium lunch and networking discussions at the campus lounge.',
        isConfirmed: true,
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '66%',
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '50%',
      },
      {
        time: '17:30',
        title: 'Day 1 Closing · Wrap-up & Networking',
        desc: 'Day 1 session recap, community discussions, and preview for Day 2.',
        isConfirmed: true,
      },
    ],
    2: [
      {
        time: '09:00',
        title: 'Day 2 Doors Open · Morning Coffee',
        desc: 'Doors open, morning coffee, and delegate check-in at the foyer.',
        isConfirmed: true,
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '72%',
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '58%',
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '80%',
      },
      {
        time: '13:00',
        title: 'Delegate Buffet Lunch & Networking',
        desc: 'Catered auditorium lunch and networking discussions at the campus lounge.',
        isConfirmed: true,
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '64%',
      },
      {
        time: '-- : --',
        isConfirmed: false,
        barWidth: '52%',
      },
      {
        time: '17:00',
        title: 'Closing Ceremony · Swag & Group Photo',
        desc: 'Certificates of participation, exclusive collectibles, and community group photo.',
        isConfirmed: true,
      },
    ],
  };

  const currentItems = scheduleDays[activeDay];

  return (
    <section className="section band--paper2" id="schedule" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">
              <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Schedule &amp; Agenda · 2-Day Timeline</span>
            </p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              Two power-packed days.<br />Single-stage summit.
            </h2>
          </div>
          <p className="lede">
            Curated across Generative AI, GitHub Copilot, Azure Cloud, and Modern .NET on the main stage. Check-in, Lunch, and Closing Ceremony confirmed &mdash; keynote &amp; technical sessions releasing soon.
          </p>
        </div>

        {/* Day 1 to 2 Switch Control */}
        <div className="mb-6">
          <div className="inline-flex p-1.5 bg-white border-[2.5px] border-black rounded-full shadow-[4px_4px_0px_#120838] select-none">
            <button
              type="button"
              onClick={() => setActiveDay(1)}
              className={`px-6 sm:px-8 py-2 rounded-full font-mono text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeDay === 1
                  ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#120838]'
                  : 'bg-transparent text-stone-700 hover:text-black'
              }`}
            >
              Day 1
            </button>
            <button
              type="button"
              onClick={() => setActiveDay(2)}
              className={`px-6 sm:px-8 py-2 rounded-full font-mono text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeDay === 2
                  ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#120838]'
                  : 'bg-transparent text-stone-700 hover:text-black'
              }`}
            >
              Day 2
            </button>
          </div>
        </div>

        {/* Timeline Board */}
        <div className="timeline-board">
          {currentItems.map((item, idx) => (
            <div key={idx} className="timeline-row">
              {/* Left Column: Time */}
              <div className={`timeline-time ${!item.isConfirmed ? 'is-placeholder' : ''}`}>
                {item.time}
              </div>

              {/* Middle Column: Details or Skeleton Bar */}
              <div className="timeline-content">
                {item.isConfirmed ? (
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                ) : (
                  <div className="py-2">
                    <span
                      className="timeline-bar"
                      style={{ width: item.barWidth }}
                    />
                  </div>
                )}
              </div>

              {/* Right Column: Pill Badge */}
              <div className="timeline-badge">
                {item.isConfirmed ? (
                  <span className="timeline-badge--confirmed">
                    CONFIRMED
                  </span>
                ) : (
                  <span className="timeline-badge--aging">
                    AGING
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DncAgenda;
