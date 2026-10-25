import React from 'react';

export const DncTickets = ({ onOpenBadge, onOpenRegister }) => {
  const fares = [
    {
      name: 'Student Delegate',
      type: 'Super Early Bird',
      tagline: 'Empowering future Microsoft leaders.',
      regular: '₹599',
      price: '₹299',
      discount: '50% off',
      blurb: 'Specially discounted for college students and aspiring developers. Full access to all technical stages, code labs, delegate lunch, and verified certification.',
      status: 'Register Interest',
      isLive: false,
      color: 'var(--teal, #00F0FF)',
    },
    {
      name: 'Professional Developer',
      type: 'Early Bird',
      tagline: 'For practicing engineers & architects.',
      regular: '₹999',
      price: '₹599',
      discount: '40% off',
      blurb: 'Full-day conference pass for software engineers, tech leads, and founders. Includes breakout workshops, technical deep-dives, and speaker networking.',
      status: 'Register Interest',
      isLive: false,
      color: 'var(--blue, #00B4D8)',
    },
    {
      name: 'College Squad / Group',
      type: 'Group Pass',
      tagline: 'Learn together, build together.',
      regular: '₹799',
      price: '₹449',
      discount: 'Group Rate',
      blurb: 'Booking for 5 or more students/developers? Unlock our group rate and travel together with your campus tech club or dev team.',
      status: 'Register Interest',
      isLive: false,
      color: 'var(--magenta, #E0199E)',
    },
    {
      name: 'VIP All-Access Pass',
      type: 'Executive',
      tagline: 'Exclusive networking & Azure swag.',
      regular: '₹1,999',
      price: '₹1,299',
      discount: 'Limited',
      blurb: 'Priority front-row seating, invite to speaker networking dinner, exclusive .NET Bot hoodie & collector swag pack, plus Microsoft Azure cloud credits.',
      status: 'Register Interest',
      isLive: false,
      color: 'var(--gold, #FFE89E)',
    },
  ];

  const swagKitItems = [
    {
      title: 'Access to All Technical Stages',
      desc: 'Seamlessly move between technical sessions, keynotes, live demos, and community breakouts.',
    },
    {
      title: 'Full Delegate Lunch & High Tea',
      desc: 'Catered auditorium lunch and evening networking snacks included with every ticket.',
    },
    {
      title: 'Official .NET Bot Swag Kit',
      desc: 'Exclusive .NET 11 sticker pack, official delegate lanyard, notebook, and collectibles.',
    },
    {
      title: 'Hands-on Code Labs & Breakouts',
      desc: 'Participate in live interactive coding sessions led by Microsoft MVPs and industry leads.',
    },
    {
      title: 'Verified Certificate of Participation',
      desc: 'Digital credential certified and issued by Microsoft Student Club PRPCEM.',
    },
    {
      title: 'Hallway Networking & Hiring Lounge',
      desc: 'Meet fellow developers, hiring partners, and student innovators across Central India.',
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
              </div>

              <h3 className="fcard__title">
                <span>{f.name}</span>
                <span className="block text-xs font-mono font-medium text-[#4B465C] mt-0.5">
                  {f.tagline}
                </span>
              </h3>

              <div className="fcard__price">
                {f.regular && (
                  <span className="text-xs font-mono text-[#6B6380] line-through block font-normal">
                    {f.regular} · {f.discount}
                  </span>
                )}
                <span>{f.price}</span>
              </div>

              <p className="fcard__desc">{f.blurb}</p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                <button
                  type="button"
                  className="btn btn--primary w-full"
                  onClick={onOpenRegister || (() => {})}
                >
                  <span>Register Interest</span>
                  <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
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
              <span>Campus Squad</span>
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
            <svg width="18" height="18" aria-hidden="true">
              <use href="#s-whatsapp" />
            </svg>
            <span>Message on WhatsApp</span>
            <svg className="btn__arrow" width="15" height="15" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>

        {/* The Full Delegate Kit */}
        <div className="thali">
          <div className="thali__head">
            <p className="eyebrow">The complete delegate pass · Included in every ticket</p>
            <h3 className="h-sub" style={{ marginTop: '.4rem', color: '#120838' }}>
              Every delegate receives the full summit experience.
            </h3>
          </div>
          <div className="thali__list">
            {swagKitItems.map((item, idx) => (
              <div key={idx} className="thali__item">
                <span className="thali__item-check">✓</span>
                <div>
                  <b>{item.title}</b>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Attendee Badge Studio Banner */}
          <div
            className="sticker"
            style={{
              marginTop: '2rem',
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
      </div>
    </section>
  );
};

export default DncTickets;
