import React from 'react';
import { Calendar } from 'lucide-react';

export const DncAgenda = () => {
  const scheduleItems = [
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
      title: 'Delegate Buffet Lunch & Hallway Track',
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
      title: 'Closing Ceremony · Swag & Group Photo',
      desc: "Certificates of participation, exclusive collectibles, and community group photo.",
      isConfirmed: true,
    },
  ];

  return (
    <section className="section band--paper2" id="schedule" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">
              <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Schedule &amp; Agenda · Tracks Timeline</span>
            </p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              One power-packed day.<br />Four ecosystem tracks.
            </h2>
          </div>
          <p className="lede">
            Curated across Generative AI, GitHub Copilot &amp; DevOps, Azure Cloud, and Modern .NET. Check-in, Lunch, and Closing Ceremony confirmed &mdash; session breakouts releasing soon.
          </p>
        </div>

        {/* Timeline Board matching exact design */}
        <div className="timeline-board">
          {scheduleItems.map((item, idx) => (
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
