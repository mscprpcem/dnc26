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

        {/* The four tracks as a full-stack architecture being assembled */}
        <ol className="build">
          <li className="build__step" style={{ '--c': 'var(--blue, #00B4D8)' }}>
            <span className="build__n">01</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--blue)' }}>
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

          <li className="build__op" aria-hidden="true">+</li>

          <li className="build__step" style={{ '--c': 'var(--magenta, #E0199E)' }}>
            <span className="build__n">02</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--magenta)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <b>Semantic AI</b>
            <span>adds intelligence</span>
            <i className="build__out">autonomous agents</i>
          </li>

          <li className="build__op" aria-hidden="true">+</li>

          <li className="build__step" style={{ '--c': 'var(--gold, #FFE89E)' }}>
            <span className="build__n">03</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--gold)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <b>.NET Aspire</b>
            <span>orchestrates cloud</span>
            <i className="build__out">microservices scale</i>
          </li>

          <li className="build__op" aria-hidden="true">+</li>

          <li className="build__step" style={{ '--c': 'var(--teal, #00F0FF)' }}>
            <span className="build__n">04</span>
            <div style={{ width: '48px', height: '48px', marginBottom: '.5rem', color: 'var(--teal)' }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <b>Blazor Web UI</b>
            <span>delivers experience</span>
            <i className="build__out">interactive frontend</i>
          </li>
        </ol>

        <div className="why__result">
          <span className="why__eq" aria-hidden="true">=</span>
          <p>
            These four pillars represent the modern Microsoft developer stack.
            When you master the foundation from Native AOT algorithms to intelligent cloud microservices and reactive Blazor interfaces, you walk away with{' '}
            <em>the complete toolkit to build enterprise-grade, scalable systems.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DncWhyTracks;
