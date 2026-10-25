import React from 'react';

export const DncEditorialSwimlanes = () => {
  return (
    <section className="section band--sun" id="about">
      {/* Subtle organic confetti dots in user theme colors */}
      <div className="confetti" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', top: '9%', left: '4%', width: '13px', height: '13px', borderRadius: '50%', background: 'var(--blue, #00B4D8)', opacity: 0.6 }}></span>
        <span style={{ position: 'absolute', top: '22%', left: '92%', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--teal, #00F0FF)', opacity: 0.5 }}></span>
        <span style={{ position: 'absolute', top: '74%', left: '6%', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--magenta, #E0199E)', opacity: 0.6 }}></span>
        <span style={{ position: 'absolute', top: '86%', left: '95%', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--gold, #FFE89E)', opacity: 0.5 }}></span>
      </div>

      <div className="wrap about__grid">
        {/* Left Column: Festival Narrative */}
        <div>
          <p className="eyebrow">About .NET Conf 2026</p>
          <h2 className="h-sec">
            Where code powers the<br />
            intelligent cloud.
          </h2>

          <div className="prose">
            <p>Welcome to <strong>.NET Conf 2026 Amravati</strong> — Central India&apos;s premier annual Microsoft developer summit hosted by Microsoft Student Club in Amravati.</p>
            <p>
              This edition celebrates the launch of <strong>.NET 11</strong> and brings together student builders, engineering pioneers, Microsoft MVPs, and cloud architects from across Maharashtra.
            </p>
            <p>
              From zero-allocation C# 14 algorithms to autonomous multi-agent systems with Semantic Kernel and Azure OpenAI, .NET Conf is where ideas transform into production software.
            </p>
          </div>

          <ul className="needs">
            <li>
              <span className="needs__n">01</span>
              <span className="needs__t">Master <strong>.NET 11 Runtime &amp; Native AOT.</strong></span>
            </li>
            <li>
              <span className="needs__n">02</span>
              <span className="needs__t">Build autonomous AI with <strong>Semantic Kernel &amp; Azure OpenAI.</strong></span>
            </li>
            <li>
              <span className="needs__n">03</span>
              <span className="needs__t">Orchestrate cloud-native microservices with <strong>.NET Aspire.</strong></span>
            </li>
            <li>
              <span className="needs__n">04</span>
              <span className="needs__t">Craft modern interactive web apps with <strong>Blazor &amp; Web API.</strong></span>
            </li>
          </ul>

          <div className="prose">
            <p>
              Whether you are an undergraduate exploring your first C# project or an experienced architect managing distributed enterprise clusters &mdash;
              <br />
              <strong>.NET Conf 2026 has a front-row seat for you.</strong>
            </p>
            <p>
              Learn directly from leaders, get hands-on in code labs, and connect with peers building tomorrow&apos;s tech. <span className="u-mark">Join the movement.</span>
            </p>
          </div>

          <div className="quote">
            .NET Conf 2026 — Connect. Learn. Build. Grow.
          </div>

          {/* Official Mascot Showcase Badge */}
          <div className="sticker" style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem 1.25rem' }}>
            <img
              src="/assets/dotnetconf-bots-rocket-angled.png"
              alt=".NET Conf 2026 Mascot Rocket with .NET Bots"
              style={{ width: '100px', height: 'auto', flexShrink: 0, filter: 'drop-shadow(0 6px 14px rgba(81, 43, 212, 0.22))' }}
            />
            <div>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--purple)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                OFFICIAL 2026 SUMMIT CREW
              </p>
              <p style={{ fontWeight: 800, fontSize: '0.92rem', color: '#120838', margin: 0, lineHeight: 1.35 }}>
                Accelerating Maharashtra&apos;s developer ecosystem into the intelligent cloud era.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Arc of the Day Sticker Card */}
        <div className="sticker" style={{ padding: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
          <p className="eyebrow">The arc of the day</p>
          <div className="arc" style={{ marginTop: '1.25rem' }}>
            <div className="arc__step" style={{ '--c': 'var(--blue, #00B4D8)' }}>
              <span className="arc__ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
              <span>
                <span className="arc__t">01 · Keynote &amp; .NET 11 Launchpad</span>
                <span className="arc__d">Opening keynote exploring the latest innovations in .NET 11, C# 14, and Microsoft Cloud AI ecosystem.</span>
              </span>
            </div>

            <div className="arc__step" style={{ '--c': 'var(--magenta, #E0199E)' }}>
              <span className="arc__ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
              </span>
              <span>
                <span className="arc__t">02 · Deep-Dive Technical Sessions</span>
                <span className="arc__d">Engaging technical stages with live coding, architectural breakdowns, and real-world system designs.</span>
              </span>
            </div>

            <div className="arc__step" style={{ '--c': 'var(--gold, #FFE89E)' }}>
              <span className="arc__ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </span>
              <span>
                <span className="arc__t">03 · Hands-On Labs &amp; MVP Panels</span>
                <span className="arc__d">Build live with Microsoft MVPs, get code reviewed, and discuss cloud solutions directly.</span>
              </span>
            </div>

            <div className="arc__step" style={{ '--c': 'var(--teal, #00F0FF)' }}>
              <span className="arc__ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              <span>
                <span className="arc__t">04 · Networking, Swag &amp; Community</span>
                <span className="arc__d">Official .NET Bot swag kits, verified certificates, delegate lunch, and lifelong connections.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncEditorialSwimlanes;
