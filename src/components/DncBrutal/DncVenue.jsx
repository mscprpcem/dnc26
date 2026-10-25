import React from 'react';

export const DncVenue = () => {
  return (
    <section className="section band--sky" id="venue">
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">Venue &amp; Campus</p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              PRPCEM Campus,<br />Amravati.
            </h2>
          </div>
          <p className="lede">
            Hosted at <strong>P. R. Pote Patil College of Engineering and Management (PRPCEM)</strong> &mdash; Central India&apos;s premier engineering campus equipped with a world-class multi-tier auditorium and high-speed fiber connectivity.
          </p>
        </div>

        {/* Reveal / Venue Card */}
        <div className="reveal-card">
          <div className="reveal-card__art" style={{ background: 'linear-gradient(135deg, rgba(77, 14, 139, 0.7) 0%, rgba(224, 25, 158, 0.5) 100%)' }}>
            <span className="reveal-card__stamp" style={{ background: 'var(--gold)', color: '#120838' }}>
              Confirmed Venue
            </span>

            {/* Campus & Auditorium Illustration */}
            <div className="flex flex-col items-center justify-center text-center p-6 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/40 shadow-lg">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                PRPCEM Central Auditorium
              </h3>
              <p className="font-mono text-sm text-[#FFE8FC] max-w-sm mb-4">
                Pote Estate, Kathora Road, Amravati, Maharashtra 444602
              </p>
              <a
                href="https://www.google.com/maps/place/P.+R.+Pote+Patil+College+of+Engineering+and+Management,+Amravati"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold btn--sm shadow-md"
              >
                <span>Open in Google Maps</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>

          <div className="reveal-card__panel">
            <p className="eyebrow">Campus facilities</p>

            <h3 className="h-sub" style={{ marginTop: '.8rem', color: '#120838' }}>
              State-of-the-art auditorium &amp; 4 parallel halls.
            </h3>
            <p style={{ color: '#4A3572', marginTop: '.6rem', fontSize: '.95rem', lineHeight: 1.6 }}>
              Air-conditioned amphitheater seating, high-definition laser projection, dedicated break-out code labs, food court, and high-speed Wi-Fi across the venue.
            </p>

            <ul className="vfacts">
              <li>
                <svg width="18" height="18" aria-hidden="true"><use href="#i-cal" /></svg>
                <span className="text-[#120838] font-medium">Saturday, 26 December 2026 | Gates open 08:30 AM</span>
              </li>
              <li>
                <svg width="18" height="18" aria-hidden="true"><use href="#i-pin" /></svg>
                <span className="text-[#120838] font-medium">Kathora Road, Amravati (10 mins from Amravati Rly Station)</span>
              </li>
              <li>
                <svg width="18" height="18" aria-hidden="true"><use href="#i-users" /></svg>
                <span className="text-[#120838] font-medium">Capacity for 600+ delegates · 4 simultaneous tracks</span>
              </li>
            </ul>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                className="btn btn--primary btn--sm"
                href="https://www.google.com/maps/dir//P.+R.+Pote+Patil+College+of+Engineering+and+Management,+Amravati"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get directions</span>
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

export default DncVenue;
