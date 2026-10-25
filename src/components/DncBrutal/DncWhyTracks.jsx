import React from 'react';

export const DncWhyTracks = () => {
  return (
    <section className="section band--paper2 why" id="why-tracks">
      <div className="wrap">
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Why these four pillars
          </p>
          <h2 className="h-sec">
            Take one away,<br />
            and the system doesn&apos;t ship.
          </h2>
        </div>

        {/* The four pillars as a full-stack architecture being assembled */}
        <ol className="build">
          <li className="build__step" style={{ '--c': 'var(--magenta, #E0199E)' }}>
            <span className="build__n">01</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--magenta)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <b>Generative AI</b>
            <span>adds intelligence</span>
            <i className="build__out">autonomous agents</i>
          </li>

          <li className="build__op" aria-hidden="true">+</li>

          <li className="build__step" style={{ '--c': 'var(--blue, #00B4D8)' }}>
            <span className="build__n">02</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--blue)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <b>GitHub &amp; DevOps</b>
            <span>accelerates velocity</span>
            <i className="build__out">Copilot &amp; CI/CD</i>
          </li>

          <li className="build__op" aria-hidden="true">+</li>

          <li className="build__step" style={{ '--c': 'var(--gold, #FFE89E)' }}>
            <span className="build__n">03</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--gold)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <b>Microsoft Azure</b>
            <span>orchestrates scale</span>
            <i className="build__out">cloud-native systems</i>
          </li>

          <li className="build__op" aria-hidden="true">+</li>

          <li className="build__step" style={{ '--c': 'var(--teal, #00F0FF)' }}>
            <span className="build__n">04</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--teal)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <b>.NET 11 Runtime</b>
            <span>powers performance</span>
            <i className="build__out">zero-allocation core</i>
          </li>
        </ol>

        <div className="why__result">
          <span className="why__eq" aria-hidden="true">=</span>
          <p>
            These four pillars represent the entire modern Microsoft developer stack: <strong>Generative AI &amp; LLMs</strong>, <strong>GitHub Copilot &amp; DevOps</strong>, <strong>Azure Cloud Infrastructure</strong>, and <strong>High-Performance .NET</strong>.
            When connected, you walk away with{' '}
            <em>the complete architectural toolkit to build, automate, and ship enterprise-grade intelligent systems.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DncWhyTracks;
