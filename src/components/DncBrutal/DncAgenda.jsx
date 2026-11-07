import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export const DncAgenda = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: {
      dayLabel: 'Day 1',
      date: 'Saturday, January 2, 2027',
      focus: 'Opening Keynotes, Generative AI, Cloud Architecture & Developer Ecosystem',
      items: [
        {
          time: '08:30',
          title: 'Gates open · Registration & Morning Coffee',
          desc: 'Doors open, badges, delegate kits, and morning coffee at the auditorium foyer.',
          isConfirmed: true,
        },
        {
          time: '09:30',
          title: 'Grand Opening Keynote · The Future of AI & Modern .NET',
          desc: 'Summit opening address, Microsoft ecosystem keynote, and architectural vision for .NET 11 and intelligent cloud applications.',
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
          title: 'Delegate Buffet Lunch & Community Networking',
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
          title: 'Day 1 Closing Keynote · Highlights & Evening Wrap-up',
          desc: 'Day 1 session recap, speaker panel reflections, and preview of Day 2 hands-on workshops.',
          isConfirmed: true,
        },
      ],
    },
    2: {
      dayLabel: 'Day 2',
      date: 'Sunday, January 3, 2027',
      focus: 'Deep-Dive Sessions, GitHub Copilot, Hands-on Demos & Grand Valedictory',
      items: [
        {
          time: '09:00',
          title: 'Day 2 Doors Open · Morning Breakfast & Connect',
          desc: 'Day 2 entry, morning high-tea, and informal discussions with Microsoft MVPs and speakers.',
          isConfirmed: true,
        },
        {
          time: '09:45',
          title: 'Day 2 Keynote · Autonomous Agents & Cloud DevOps',
          desc: 'Deep-dive session into Semantic Kernel agent orchestration, GitHub Actions CI/CD automation, and scalable Azure systems.',
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
          time: '13:00',
          title: 'Delegate Buffet Lunch & Mentor Roundtables',
          desc: 'Catered auditorium lunch, project showcase, and student-mentor networking roundtables.',
          isConfirmed: true,
        },
        {
          time: '-- : --',
          isConfirmed: false,
          barWidth: '68%',
        },
        {
          time: '-- : --',
          isConfirmed: false,
          barWidth: '48%',
        },
        {
          time: '17:00',
          title: 'Grand Valedictory Ceremony · Swag Kit & Community Photo',
          desc: 'Official participation certificates, student awards, exclusive collectibles distribution, and the community group photograph.',
          isConfirmed: true,
        },
      ],
    },
  };

  const currentSchedule = scheduleData[activeDay];

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
            Curated across Generative AI, GitHub Copilot, Azure Cloud, and Modern .NET on the main stage. Check-in, Lunch, and Ceremonies confirmed for both days &mdash; keynote &amp; technical sessions releasing soon.
          </p>
        </div>

        {/* 2-Day Interactive Tab Selector */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <button
            type="button"
            onClick={() => setActiveDay(1)}
            className={`px-5 py-2.5 rounded-xl font-sans font-black text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2.5 ${
              activeDay === 1
                ? 'bg-[#512BD4] text-white border-[2.5px] border-black shadow-[4px_4px_0px_#120838] -translate-y-0.5'
                : 'bg-white text-stone-800 border-[2px] border-black shadow-[2px_2px_0px_#120838] hover:bg-[#FAF8FF]'
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${activeDay === 1 ? 'bg-[#00F0FF]' : 'bg-stone-400'}`}></span>
            <span>Day 1 · Saturday, Jan 2</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveDay(2)}
            className={`px-5 py-2.5 rounded-xl font-sans font-black text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2.5 ${
              activeDay === 2
                ? 'bg-[#512BD4] text-white border-[2.5px] border-black shadow-[4px_4px_0px_#120838] -translate-y-0.5'
                : 'bg-white text-stone-800 border-[2px] border-black shadow-[2px_2px_0px_#120838] hover:bg-[#FAF8FF]'
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${activeDay === 2 ? 'bg-[#E0199E]' : 'bg-stone-400'}`}></span>
            <span>Day 2 · Sunday, Jan 3</span>
          </button>
        </div>

        {/* Day Context Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 bg-[#FAF8FF] border-2 border-black rounded-xl mb-6 shadow-[2px_2px_0px_#120838]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-[#512BD4] text-white">
              {currentSchedule.dayLabel}
            </span>
            <span className="font-sans font-bold text-sm sm:text-base text-[#120838]">
              {currentSchedule.date}
            </span>
          </div>
          <span className="font-sans text-xs sm:text-sm text-stone-600 font-medium">
            {currentSchedule.focus}
          </span>
        </div>

        {/* Timeline Board matching exact design */}
        <div className="timeline-board">
          {currentSchedule.items.map((item, idx) => (
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
