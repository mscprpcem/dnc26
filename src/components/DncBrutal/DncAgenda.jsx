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
        time: '13:00 – 14:00',
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
        time: '08:30 – 09:00',
        title: 'Day 2 Doors Open · Morning Coffee',
        desc: 'Doors open, morning coffee, and delegate check-in at the foyer.',
        isConfirmed: true,
      },
      {
        time: '09:00 – 09:15',
        title: 'Welcome Note, Ice-breaker & MSC PRPCEM Overview',
        desc: 'Welcome note, interactive community ice-breaker, and MSC PRPCEM overview by speaker Rutuja Ghongade.',
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
        time: '13:00 – 14:00',
        title: 'Delegate Buffet Lunch & Networking',
        desc: 'Catered auditorium lunch and networking discussions at the campus lounge.',
        isConfirmed: true,
      },
      {
        time: '14:00 – 14:20',
        title: 'Sponsored Talk · Packt Team',
        desc: 'Special presentation with the Packt team on developer learning pathways, technical publishing, and activating your 1-year complimentary subscription.',
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
        time: '17:30 – 18:00',
        title: 'Closing Ceremony · Swag & Group Photo',
        desc: 'Certificates of participation, exclusive collectibles, and community group photo.',
        isConfirmed: true,
      },
    ],
  };

  const dayMeta = {
    1: {
      number: '01',
      name: 'Inauguration Day',
      date: 'Saturday, January 2, 2027',
      badge: 'Day 1 · Inauguration',
      tag: 'Inauguration & Keynotes',
      bgColor: '#EDE9FE',
      accentColor: '#512BD4',
      desc: 'Ceremonial grand opening, dignitary addresses, keynote unveils, and community ecosystem kickoff.',
    },
    2: {
      number: '02',
      name: 'Main Conference Day',
      date: 'Sunday, January 3, 2027',
      badge: 'Day 2 · Conference',
      tag: 'Full Technical Summit',
      bgColor: '#E0F2FE',
      accentColor: '#00B4D8',
      desc: 'Deep-dive technical sessions, architecture keynotes, partner tracks, delegate buffet lunch, and grand closing ceremony.',
    },
  };

  const currentItems = scheduleDays[activeDay];
  const currentMeta = dayMeta[activeDay];

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
              Two power-packed days.<br />Inauguration &amp; Conference.
            </h2>
          </div>
          <p className="lede">
            <strong>Day 1 is Inauguration Day</strong> with ceremonial grand openings, dignitary addresses, and keynote kickoff. <strong>Day 2 is Conference Day</strong> packed with deep-dive technical sessions across Generative AI, GitHub Copilot, Azure Cloud, and Modern .NET.
          </p>
        </div>

        {/* Day 1 to 2 Switch Control */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="inline-flex p-1.5 bg-white border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_#120838] select-none">
            <button
              type="button"
              onClick={() => setActiveDay(1)}
              className={`px-3.5 sm:px-6 py-2 rounded-xl font-mono text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 1
                  ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#120838]'
                  : 'bg-transparent text-stone-700 hover:text-black'
              }`}
            >
              <span>Day 1</span>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${activeDay === 1 ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'}`}>
                Inauguration Day
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveDay(2)}
              className={`px-3.5 sm:px-6 py-2 rounded-xl font-mono text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 2
                  ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#120838]'
                  : 'bg-transparent text-stone-700 hover:text-black'
              }`}
            >
              <span>Day 2</span>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${activeDay === 2 ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'}`}>
                Conference Day
              </span>
            </button>
          </div>
        </div>

        {/* Active Day Banner */}
        <div
          className="mb-6 p-4 sm:p-5 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#120838] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 transition-all"
          style={{ background: currentMeta.bgColor }}
        >
          <div className="flex items-center gap-3.5">
            <div
              className="w-12 h-12 rounded-xl border-2 border-black flex flex-col items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]"
              style={{ background: currentMeta.accentColor, color: activeDay === 1 ? '#FFFFFF' : '#120838' }}
            >
              <span className="font-mono text-[9px] font-black leading-none">DAY</span>
              <span className="font-mono text-lg font-black leading-none mt-0.5">{currentMeta.number}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-sans font-black text-lg sm:text-xl text-[#120838] uppercase tracking-tight">
                  Day {activeDay} · {currentMeta.name}
                </h3>
                <span className="font-mono text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-black shadow-[1px_1px_0px_#000] text-stone-800">
                  {currentMeta.date}
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-stone-700 mt-1 leading-snug max-w-2xl">
                {currentMeta.desc}
              </p>
            </div>
          </div>

          <div className="sm:self-center shrink-0">
            <span
              className="inline-block font-mono text-xs font-black uppercase px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]"
              style={{ background: currentMeta.accentColor, color: activeDay === 1 ? '#FFFFFF' : '#120838' }}
            >
              {currentMeta.tag}
            </span>
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
