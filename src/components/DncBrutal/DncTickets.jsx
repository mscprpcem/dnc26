import React from 'react';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';

export const DncTickets = ({ onOpenBadge, onOpenRegister }) => {
  const fares = [
    {
      name: 'Early Bird',
      tier: 'Early',
      type: 'Phase 01',
      tagline: 'For fast-action community builders.',
      blurb: 'First access to technical stages (AI, DevOps, Cloud & .NET), hands-on code labs, official delegate kit, and catered lunch.',
      status: 'Register Interest',
      color: 'var(--teal, #00F0FF)',
    },
    {
      name: 'Normal Pass',
      tier: 'Normal',
      type: 'Phase 02',
      tagline: 'Standard conference pass.',
      blurb: 'Full-day summit pass covering Generative AI keynotes, breakout tracks, speaker networking, and participation credentials.',
      status: 'Register Interest',
      color: 'var(--blue, #00B4D8)',
    },
    {
      name: 'Late Bird',
      tier: 'Late',
      type: 'Phase 03',
      tagline: 'Final regular registrations.',
      blurb: 'Released after standard phase closes. Includes full summit access, auditorium seating, and delegate networking lunch.',
      status: 'Register Interest',
      color: 'var(--purple, #512BD4)',
    },
    {
      name: 'Tatkal Pass',
      tier: 'Tatkal',
      type: 'Phase 04',
      tagline: 'Last-minute emergency rush.',
      blurb: 'Limited quota passes opened right before summit day for last-minute attendees and traveling developers.',
      status: 'Register Interest',
      color: 'var(--gold, #FFE89E)',
    },
  ];

  return (
    <section className="section" id="tickets">
      <div className="wrap">
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Delegate Passes · Register Interest
          </p>
          <h2 className="h-sec">
            Delegate Passes &amp;<br />
            Registration.
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Official conference passes, student early-bird pricing, and group packages will be released soon. Register your interest below to receive priority access and early-bird notifications!
          </p>
        </div>

        {/* Fares Grid */}
        <div className="fares" id="fares">
          {fares.map((f) => (
            <div
              key={f.name}
              className="fcard"
              style={{ '--tc': f.color }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="fcard__badge" style={{ color: f.color, borderColor: f.color }}>
                  {f.type}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6380]">
                  {f.tier}
                </span>
              </div>

              <h3 className="fcard__title">
                <span>{f.name}</span>
                <span className="block text-xs font-mono font-medium text-[#4B465C] mt-0.5">
                  {f.tagline}
                </span>
              </h3>

              <div className="fcard__status-box">
                <span className="fcard__status-pill">
                  <span className="fcard__status-dot"></span>
                  Dropping Soon
                </span>
              </div>

              <p className="fcard__desc">{f.blurb}</p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                <button
                  type="button"
                  className="btn btn--primary btn--sm w-full"
                  onClick={onOpenRegister || (() => {})}
                >
                  <span>Register Interest</span>
                  <svg className="btn__arrow" width="14" height="14" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Offer Bar */}
        <div className="offerbar">
          <div className="flex items-center gap-3">
            <span className="offerbar__tag">
              <span>Group Delegation</span>
            </span>
            <p>
              Bringing 10 or more student developers? Contact us directly for bulk institutional discount passes and bus transit support.
            </p>
          </div>
          <a
            className="offerbar__cta"
            href="https://wa.me/919021212807?text=Hi%20MSC%20PRPCEM!%20We're%20a%20group%20of%2010%2B%20planning%20to%20attend%20.NET%20Conf%202026."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Message on WhatsApp</span>
            <svg className="btn__arrow" width="15" height="15" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>

        {/* Custom Attendee Badge Studio Banner */}
        <div
          className="sticker"
          style={{
            marginTop: '2.5rem',
            padding: '1.75rem',
            background: 'rgba(214, 0, 170, 0.08)',
            borderColor: 'var(--magenta)',
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <p className="eyebrow" style={{ color: 'var(--purple)' }}>
                Interactive Badge Studio
              </p>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#120838', marginTop: '.3rem' }}>
                Generate your custom .NET Conf 2026 Attendee Badge!
              </h4>
              <p style={{ color: '#332B4A', fontSize: '.92rem', marginTop: '.3rem' }}>
                Showcase your presence with custom tech badges, .NET Bot mascots, and your personalized avatar to share on LinkedIn &amp; X.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenBadge || (() => {})}
              className="btn btn--gold btn--sm flex-none cursor-pointer"
            >
              <span>Create my badge</span>
              <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncTickets;
