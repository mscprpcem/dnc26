import React, { useState, useEffect } from 'react';

export const DncHero = ({ onOpenRegister }) => {
  // Target conference date: December 26, 2026 09:00:00 IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-26T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="top">
      {/* Background Cosmic Ambient Glow */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__disc"></div>
      </div>

      <div className="wrap hero__inner">

        {/* Main Title Lockup */}
        <div className="hero__lockup">
          <h1 className="hero__title">
            <span className="hero__title-net">.NET Conf</span>{' '}
            <span className="hero__title-gradient">2026</span>{' '}
            <span className="hero__title-city">Amravati</span>
          </h1>
          <p className="hero__subtitle">
            Deep-dive into <strong>.NET 11</strong>, <strong>C# 14</strong>, <strong>Semantic Kernel</strong>, <strong>Azure OpenAI</strong>, <strong>.NET Aspire</strong>, and <strong>Native AOT</strong> with Microsoft MVPs and cloud leaders in Amravati.
          </p>
        </div>

        {/* Date & Day Bar */}
        <div className="hero__date">
          <span className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            December 26, 2026
          </span>
          <span className="hero__date-divider" aria-hidden="true">|</span>
          <span className="hero__date-day">Saturday</span>
          <span className="hero__date-divider" aria-hidden="true">|</span>
          <span className="hero__date-venue-soon">Venue Announcing Soon</span>
        </div>

        {/* Live Countdown Timer */}
        <div className="countdown" role="timer" aria-label="Time until .NET Conf 2026">
          <div className="countdown__cell">
            <span className="countdown__n">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="countdown__l">Days</span>
          </div>
          <div className="countdown__cell">
            <span className="countdown__n">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown__l">Hours</span>
          </div>
          <div className="countdown__cell">
            <span className="countdown__n">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown__l">Minutes</span>
          </div>
          <div className="countdown__cell">
            <span className="countdown__n">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown__l">Seconds</span>
          </div>
        </div>

        {/* Dual Primary CTA Buttons (Interchanged above Rocket) */}
        <div className="hero__cta">
          <button
            type="button"
            className="btn btn--primary btn--lg cursor-pointer"
            onClick={onOpenRegister || ((e) => handleSmoothScroll(e, 'tickets'))}
          >
            <span>Register Interest</span>
            <svg className="btn__arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </button>
          <a
            className="btn btn--gold btn--lg"
            href="https://sessionize.com/dnc26/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Call for Speakers</span>
            <svg className="btn__arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>

        {/* 3D Rocket Showcase with .NET Bot & Purple Bot */}
        <div className="hero__rocket-showcase" aria-label=".NET Conf 2026 Mascot Rocket">
          <div className="hero__rocket-card" style={{ transform: 'none', animation: 'none', transition: 'none' }}>
            <img
              src="/assets/dotnetconf-bots-rocket-horizontal.png"
              alt=".NET Conf 2026 Mascot Rocket with .NET Bots"
              className="hero__rocket-img"
              loading="eager"
              style={{ transform: 'none', animation: 'none', transition: 'none' }}
            />
          </div>
        </div>

        {/* Road to .NET Conf: The Journey */}
        <div className="road" aria-label="Road to .NET Conf 2026">
          <ol className="road__rail">
            <li className="road__stop is-done">
              <span className="road__node" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <b>Tickets on sale</b>
              <span>Super Early Bird passes live. Limited delegate seats.</span>
              <a href="#tickets" onClick={(e) => handleSmoothScroll(e, 'tickets')}>See passes →</a>
            </li>
            <li className="road__stop is-next">
              <span className="road__node" aria-hidden="true">
                <svg viewBox="0 0 32 32"><use href="#i-mic" /></svg>
              </span>
              <b>Call for speakers</b>
              <span>Open now on Sessionize. Any track, any level.</span>
              <a href="https://sessionize.com/dnc26/" target="_blank" rel="noopener noreferrer">Submit proposal →</a>
            </li>
            <li className="road__stop">
              <span className="road__node" aria-hidden="true">
                <svg viewBox="0 0 24 24"><use href="#i-pin" /></svg>
              </span>
              <b>Venue Announcing Soon</b>
              <span>Amravati, Maharashtra. Exact campus venue details releasing soon.</span>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About the summit →</a>
            </li>
            <li className="road__stop is-end">
              <span className="road__node" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
              <b>26 December 2026</b>
              <span>Conference day. Deep-dive sessions, keynotes, and community labs.</span>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>Explore themes →</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DncHero;
