import React from 'react';

export const DncRegisterCTA = ({ onOpenRegister }) => {
  return (
    <section className="section cta-band" id="register">
      <div className="wrap cta-band__inner">
        {/* Soaring Mascot Rocket Visual */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.75rem', marginBottom: '1.75rem' }}>
          <img
            src="/assets/Pastel%20Neon%20Rocket%20with%20Launch%20Plinth.png"
            alt=".NET Conf 2026 Mascot Rocket Launch Plinth"
            style={{
              width: 'min(220px, 60vw)',
              height: 'auto',
              maxHeight: '290px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.35)) drop-shadow(0 0 25px rgba(247, 181, 72, 0.35))',
            }}
          />
        </div>

        <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold, #FFE89E)' }}>
          Saturday | 26 December 2026 | Amravati (Venue Announcing Soon)
        </p>
        <h2>Register interest for .NET Conf 2026.</h2>
        <p className="lede" style={{ color: '#FFFFFF', marginTop: '1rem', textAlign: 'center', maxWidth: '48ch' }}>
          Keynotes, technical sessions, hands-on labs, official .NET Bot swag, and full catering. Register below for early-bird priority access and announcements.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
          <button
            type="button"
            className="btn btn--lg btn--gold cursor-pointer"
            onClick={onOpenRegister || (() => {
              const el = document.getElementById('tickets');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            })}
          >
            <span>Register Interest</span>
            <svg className="btn__arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </button>
          <a
            className="btn btn--lg btn--ghost"
            href="#schedule"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('schedule');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)' }}
          >
            View Full Schedule
          </a>
        </div>

        {/* .NET Bot Mascots & Rocket Strip Banner */}
        <div className="mt-12 flex items-center justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-white/10 px-4 py-2 rounded-md border border-white/20">
            <span className="w-2 h-2 rounded-sm bg-[#00F0FF]"></span>
            <span>.NET 11 Launchpad</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-white/10 px-4 py-2 rounded-md border border-white/20">
            <span className="w-2 h-2 rounded-sm bg-[#FFE89E]"></span>
            <span>Microsoft Student Club PRPCEM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncRegisterCTA;
