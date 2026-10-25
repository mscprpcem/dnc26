import React from 'react';
import { Check, Calendar } from 'lucide-react';

export const DncAgenda = () => {
  const scheduleItems = [
    {
      time: '08:30',
      title: 'Check-in · Gates Open, Badge Pickup & Morning Coffee',
      desc: 'Check-in at PRPCEM main foyer, collect your .NET Bot delegate swag kit, and network over hot coffee.',
      isConfirmed: true,
      category: 'Check-in',
    },
    {
      time: '10:00',
      isConfirmed: false,
    },
    {
      time: '11:15',
      isConfirmed: false,
    },
    {
      time: '13:00',
      title: 'Delegate Buffet Lunch & Hallway Discussions',
      desc: 'Full catered lunch at the campus food court. The famous hallway track starts here.',
      isConfirmed: true,
      category: 'Lunch',
    },
    {
      time: '14:15',
      isConfirmed: false,
    },
    {
      time: '16:00',
      isConfirmed: false,
    },
    {
      time: '17:30',
      title: 'Closing Ceremony · Swag Giveaway & Group Photo',
      desc: 'Verified digital credentials, limited-edition astronaut bot collectibles, and the annual community photograph.',
      isConfirmed: true,
      category: 'Closing Ceremony',
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
              One power-packed day.<br />Four parallel tracks.
            </h2>
          </div>
          <p className="lede">
            Check-in, Lunch, and Closing Ceremony are confirmed. Remaining session tracks are releasing soon.
          </p>
        </div>

        <div className="agenda">
          {scheduleItems.map((item, idx) => (
            <div
              key={idx}
              className={`agenda__item group ${
                item.isConfirmed
                  ? 'border-black'
                  : 'border-black hover:border-[#512BD4]'
              }`}
            >
              {/* Left Column: Time */}
              <div className="agenda__time shrink-0 min-w-[95px]">
                {item.isConfirmed ? (
                  <div className="flex flex-col">
                    <span className="font-mono text-base sm:text-lg font-black text-[#512BD4] tracking-tight">
                      {item.time}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                      Confirmed
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="font-mono text-base sm:text-lg font-black text-[#120838] tracking-tight">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-stone-400 tracking-widest mt-0.5">
                      ......
                    </span>
                  </div>
                )}
              </div>

              {/* Middle Column: Details or just ...... */}
              <div className="agenda__body flex-1">
                {item.isConfirmed ? (
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-black/20 uppercase bg-[#DCFCE7] text-[#15803D]">
                        {item.category}
                      </span>
                    </div>
                    <b className="font-sans font-black text-base sm:text-lg text-[#120838] leading-snug">
                      {item.title}
                    </b>
                    <span className="font-sans text-xs sm:text-sm text-stone-600 mt-1 block leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center py-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-[#512BD4] tracking-widest select-none">
                      ......
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Status Tag */}
              <div className="agenda__status shrink-0 mt-2 sm:mt-0">
                {item.isConfirmed ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase px-3 py-1.5 rounded-lg border-2 border-black bg-[#DCFCE7] text-[#15803D] shadow-[2px_2px_0px_#000]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>CONFIRMED</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-3.5 py-1.5 rounded-lg border-2 border-black bg-[#FAF8FF] text-[#512BD4] shadow-[2px_2px_0px_#120838] group-hover:bg-[#FFD13B] group-hover:text-black transition-colors">
                    <span className="w-3.5 h-3.5 border-2 border-[#512BD4] border-t-transparent rounded-full animate-spin shrink-0" />
                    <span>......</span>
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
