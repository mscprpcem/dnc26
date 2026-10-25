import React from 'react';

export const DncExpect = () => {
  const cards = [
    {
      icon: '#i-mic',
      color: 'rgba(0, 180, 216, 0.25)',
      title: 'Real-world architecture from Microsoft MVPs',
      desc: 'Hear from recognized Microsoft MVPs, cloud architects, and engineering directors sharing battle-tested code patterns, performance benchmarks, and real-world system designs.',
    },
    {
      icon: '#i-chat',
      color: 'rgba(224, 25, 158, 0.25)',
      title: 'Where conversations become collaborations',
      desc: 'Meet over 500+ passionate .NET developers, student builders, and open-source contributors from across Central India. Spark meaningful discussions in the hallway track.',
    },
    {
      icon: '#i-hands',
      color: 'rgba(255, 232, 158, 0.25)',
      title: 'Hands-on code labs & live debugging',
      desc: 'Bring your laptop and code alongside mentors. Build autonomous agents with Semantic Kernel, deploy distributed apps with .NET Aspire, and benchmark Native AOT executables.',
    },
    {
      icon: '#i-gift',
      color: 'rgba(0, 240, 255, 0.25)',
      title: 'Official .NET Bot swag kits & goodies',
      desc: 'Take home limited-edition .NET 11 stickers, collector astronaut bot pins, premium delegate pass lanyards, and enjoy full catered buffet lunch with hi-tea.',
    },
    {
      icon: '#i-spark',
      color: 'rgba(255, 46, 187, 0.25)',
      title: 'Verified credentials & career opportunities',
      desc: 'Earn your official certificate of participation from Microsoft Student Club PRPCEM and connect with top IT companies hiring .NET, Azure, and AI talent.',
    },
  ];

  return (
    <section className="section band--blush" id="expect">
      {/* Decorative stars in lighter theme */}
      <div className="confetti" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', top: '12%', left: '3%', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--coral)', opacity: 0.5 }}></span>
        <span style={{ position: 'absolute', top: '30%', left: '96%', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--blue)', opacity: 0.5 }}></span>
        <span style={{ position: 'absolute', top: '82%', left: '8%', width: '11px', height: '11px', borderRadius: '50%', background: 'var(--teal)', opacity: 0.5 }}></span>
      </div>

      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              Learn. Build.<br />Network. Innovate.
            </h2>
          </div>
          <p className="lede">
            An electrifying day at PRPCEM Campus with the people shaping the future of .NET &mdash; packed with live code, cutting-edge AI, and endless inspiration.
          </p>
        </div>

        <div className="expect__grid">
          {cards.map((c, i) => (
            <article key={i} className="xcard">
              <span className="xcard__ico" style={{ '--c': c.color }}>
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <use href={c.icon} />
                </svg>
              </span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DncExpect;
