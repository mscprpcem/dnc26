import React from 'react';

export const DncSpeakerWall = () => {
  const speakerCards = [
    { id: 1, no: '01', color: '#512BD4', gradient: 'linear-gradient(180deg, #EDE9FE 0%, #DDD6FE 100%)' },
    { id: 2, no: '02', color: '#00B4D8', gradient: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%)' },
    { id: 3, no: '03', color: '#E0199E', gradient: 'linear-gradient(180deg, #FCE7F3 0%, #FBCFE8 100%)' },
    { id: 4, no: '04', color: '#D97706', gradient: 'linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)' },
    { id: 5, no: '05', color: '#0284C7', gradient: 'linear-gradient(180deg, #CFFAFE 0%, #A5F3FC 100%)' },
    { id: 6, no: '06', color: '#16A34A', gradient: 'linear-gradient(180deg, #DCFCE7 0%, #BBF7D0 100%)' },
    { id: 7, no: '07', color: '#7C3AED', gradient: 'linear-gradient(180deg, #F3E8FF 0%, #E9D5FF 100%)' },
    { id: 8, no: '08', color: '#D600AA', gradient: 'linear-gradient(180deg, #FDF4FF 0%, #F0ABFC 100%)' },
  ];

  return (
    <section className="section band--mint" id="speakers" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        {/* Section Header */}
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            <span>Speaker Wall</span>
          </p>
          <h2 className="h-sec">
            Speaker Lineup
          </h2>
        </div>

        {/* 8-Card Speaker Wall Grid — 4 in a row with BIG Bot Head */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {speakerCards.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#120838] hover:shadow-[6px_6px_0px_#512BD4] hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden text-center"
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-black uppercase px-2.5 py-0.5 rounded-md border border-black/25 bg-[#FAF8FF] text-[#512BD4]">
                  Speaker #{speaker.no}
                </span>
                <span className="font-mono text-xs font-bold text-stone-500">
                  TBA
                </span>
              </div>

              {/* Big Bot Head Showcase Container */}
              <div
                className="relative w-full h-48 sm:h-52 rounded-xl border-2 border-black flex items-center justify-center p-2 mb-3.5 overflow-hidden group-hover:border-[#512BD4] transition-colors"
                style={{ background: speaker.gradient }}
              >
                <img
                  src="/assets/dotnet-bot-head.png"
                  alt=".NET Bot Speaker Mascot"
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Clean Speaker Metadata */}
              <div className="pt-1 pb-1">
                <h3 className="font-sans font-black text-lg text-[#120838] leading-snug">
                  Speaker To Be Announced
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* And many more normal text */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="font-sans font-bold text-base sm:text-lg text-stone-700">
            ...and many more
          </p>
        </div>
      </div>
    </section>
  );
};

export default DncSpeakerWall;
