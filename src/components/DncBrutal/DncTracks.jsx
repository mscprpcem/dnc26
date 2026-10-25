import React from 'react';

export const DncTracks = () => {
  return (
    <section className="section band--sky tracks" id="tracks" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Conference Tracks
          </p>
          <h2 className="h-sec">
            Tracks &amp; Themes
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Four core tracks spanning Generative AI &amp; Autonomous Agents, GitHub Copilot &amp; DevOps, Microsoft Azure Cloud, and Modern .NET 11.
          </p>
        </div>

        {/* Mission Control Showcase with robots_console.png */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-10">
          <div className="bg-white border-[3px] border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#120838] text-center flex flex-col items-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border-2 border-black bg-[#FAF8FF] text-[#512BD4] shadow-[2px_2px_0px_#120838] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#512BD4]"></span>
              <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">
                Tracks Curating Across 4 Pillars
              </span>
            </div>

            {/* Robots Console Artwork with generous spacing */}
            <div className="w-full max-w-lg my-4 flex items-center justify-center px-4">
              <img
                src="/assets/robots_console.png"
                alt=".NET Bot Mascots at Mission Control Console"
                className="w-full max-h-72 sm:max-h-80 object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-[0_8px_20px_rgba(81,43,212,0.12)]"
                loading="lazy"
              />
            </div>

            {/* Message with balanced typography and margins */}
            <h3 className="font-sans font-black text-xl sm:text-2xl text-[#120838] uppercase mt-4 mb-2.5">
              Multi-Track Agenda In Preparation
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed mb-8">
              Deep dives being curated across <strong>Generative AI &amp; Autonomous Agents</strong>, <strong>GitHub Copilot &amp; DevOps CI/CD</strong>, <strong>Azure Cloud-Native Architecture</strong>, and <strong>Modern .NET 11</strong>. Full schedule dropping soon!
            </p>

            {/* Simple Action */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                className="btn btn--primary cursor-pointer"
                href="#cfp"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('cfp');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Call for Speakers</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncTracks;
