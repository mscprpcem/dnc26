import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const DncSpeakerWall = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakerCards = [
    {
      id: 1,
      no: '01',
      isConfirmed: true,
      name: 'Mayank Raj',
      role: 'Staff Engineer, Infrastructure',
      company: 'Stripe',
      image: '/speakers/mayank-raj.jpg',
      bio: [
        "I’m a Staff Engineer on Stripe’s Infrastructure team. My work spans distributed systems, security, and data platforms. I care about how systems behave under load, what happens when they fail, and whether the next engineer can understand the decisions behind them.",
        "Previously, I worked on security and cryptography at Salesforce and led a team of engineers building data and machine learning systems at Cactus Labs.",
        "I speak about infrastructure, cloud security, and practical AI. My talks use concrete examples to explain what happens beneath the abstractions, where the trade-offs sit, and what you can apply to your own systems.",
        "I’m also an OpenAI Codex Ambassador and AWS Community Builder. Outside engineering, I play the violin, trek, and tinker with drones.",
      ],
    },
    { id: 2, no: '02', isConfirmed: false, color: '#00B4D8', gradient: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%)' },
    { id: 3, no: '03', isConfirmed: false, color: '#E0199E', gradient: 'linear-gradient(180deg, #FCE7F3 0%, #FBCFE8 100%)' },
    { id: 4, no: '04', isConfirmed: false, color: '#D97706', gradient: 'linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)' },
    { id: 5, no: '05', isConfirmed: false, color: '#0284C7', gradient: 'linear-gradient(180deg, #CFFAFE 0%, #A5F3FC 100%)' },
    { id: 6, no: '06', isConfirmed: false, color: '#16A34A', gradient: 'linear-gradient(180deg, #DCFCE7 0%, #BBF7D0 100%)' },
    { id: 7, no: '07', isConfirmed: false, color: '#7C3AED', gradient: 'linear-gradient(180deg, #F3E8FF 0%, #E9D5FF 100%)' },
    { id: 8, no: '08', isConfirmed: false, color: '#D600AA', gradient: 'linear-gradient(180deg, #FDF4FF 0%, #F0ABFC 100%)' },
  ];

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedSpeaker) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedSpeaker(null);
      };
      const origOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = origOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedSpeaker]);

  return (
    <section
      className="section band--mint"
      id="speakers"
      style={{
        scrollMarginTop: '80px',
        zIndex: selectedSpeaker ? 10001 : undefined,
        position: 'relative',
      }}
    >
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

        {/* 8-Card Speaker Wall Grid — 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {speakerCards.map((speaker) => (
            <div
              key={speaker.id}
              onClick={speaker.isConfirmed ? () => setSelectedSpeaker(speaker) : undefined}
              role={speaker.isConfirmed ? 'button' : undefined}
              tabIndex={speaker.isConfirmed ? 0 : undefined}
              onKeyDown={speaker.isConfirmed ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSpeaker(speaker);
                }
              } : undefined}
              className={`group relative bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#120838] hover:shadow-[6px_6px_0px_#512BD4] hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden text-center select-none ${
                speaker.isConfirmed ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#512BD4]' : ''
              }`}
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-black uppercase px-2.5 py-0.5 rounded-md border border-black/25 bg-[#FAF8FF] text-[#512BD4]">
                  Speaker #{speaker.no}
                </span>
                {!speaker.isConfirmed && (
                  <span className="font-mono text-xs font-bold text-stone-500">
                    TBA
                  </span>
                )}
              </div>

              {/* Showcase Container: Photo for Confirmed, Mascot for TBA */}
              {speaker.isConfirmed ? (
                <div className="relative w-full h-48 sm:h-52 rounded-xl border-2 border-black mb-3.5 overflow-hidden group-hover:border-[#512BD4] transition-colors bg-stone-100">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="relative w-full h-48 sm:h-52 rounded-xl border-2 border-black flex items-center justify-center p-2 mb-3.5 overflow-hidden group-hover:border-[#512BD4] transition-colors"
                  style={{ background: speaker.gradient }}
                >
                  <img
                    src="/assets/dotnet-bot-head.png"
                    alt=".NET Bot Speaker Mascot"
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Clean Speaker Metadata */}
              <div className="pt-1 pb-1">
                {speaker.isConfirmed ? (
                  <>
                    <h3 className="font-sans font-black text-lg text-[#120838] leading-snug">
                      {speaker.name}
                    </h3>
                    <p className="font-sans font-bold text-xs text-stone-700 mt-1.5 leading-snug">
                      Staff Engineer, Infrastructure,{' '}
                      <span style={{ color: '#635BFF' }} className="font-black">
                        Stripe
                      </span>
                    </p>
                  </>
                ) : (
                  <h3 className="font-sans font-black text-lg text-[#120838] leading-snug">
                    Speaker To Be Announced
                  </h3>
                )}
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

      {/* Speaker Bio Modal with Responsive Media Queries */}
      {selectedSpeaker && (
        <div
          className="speaker-modal-overlay"
          onClick={() => setSelectedSpeaker(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="speaker-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedSpeaker(null)}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FFE4E6] hover:bg-[#FECDD3] text-black border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black cursor-pointer transition-transform hover:scale-105 active:scale-95 z-20"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>

            {/* Header Section */}
            <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-5 mb-3 sm:mb-4 shrink-0 pr-8">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl sm:rounded-2xl border-2 sm:border-[2.5px] border-black overflow-hidden shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] flex-shrink-0 bg-stone-100">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 text-left min-w-0">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#FAF8FF] border border-black/25 text-[#512BD4] font-mono text-[10px] sm:text-xs font-black uppercase mb-1">
                  Speaker #{selectedSpeaker.no}
                </span>

                <h3 className="font-sans font-black text-lg sm:text-2xl md:text-3xl text-[#120838] uppercase tracking-tight leading-tight truncate">
                  {selectedSpeaker.name}
                </h3>

                <p className="font-sans font-bold text-xs sm:text-sm text-stone-700 mt-1 leading-snug">
                  Staff Engineer, Infrastructure,{' '}
                  <span style={{ color: '#635BFF' }} className="font-black">
                    Stripe
                  </span>
                </p>
              </div>
            </div>

            <div className="border-t-2 border-black/10 my-2 sm:my-3 shrink-0" />

            {/* Biography (Scrollable) */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-2 text-stone-800 font-sans space-y-3 text-xs sm:text-sm md:text-[15px] leading-relaxed custom-modal-scrollbar">
              {selectedSpeaker.bio?.map((paragraph, idx) => (
                <p key={idx} className="text-stone-700 font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Bottom Bar */}
            <div className="pt-3 sm:pt-4 border-t-2 border-black flex items-center justify-end shrink-0 mt-3">
              <button
                type="button"
                onClick={() => setSelectedSpeaker(null)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl font-mono text-xs font-black uppercase bg-[#512BD4] text-white border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#4322B0] transition-all cursor-pointer text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DncSpeakerWall;
