import React, { useState } from 'react';

export const DncNavbar = ({ onOpenRegister }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Tickets', href: '#tickets' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Sponsorship', href: '#sponsors' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsSheetOpen(false);
    const target = href.replace('#', '');
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="nav" id="nav">
        <div className="nav__inner">
          {/* Brand Lockup */}
          <a
            className="nav__brand"
            href="#top"
            onClick={(e) => handleLinkClick(e, '#top')}
            aria-label=".NET Conf 2026 Amravati — home"
          >
            <img
              src="/logos/dotnet-logo.jpg"
              alt=".NET Logo"
              className="nav__brand-img"
            />
            <div className="flex flex-col text-left">
              <span className="nav__brand-text leading-tight">
                .NET Conf 2026
              </span>
              <span className="nav__brand-city">
                Amravati
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="nav__link"
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <button
              type="button"
              className="btn btn--primary btn--sm nav__cta cursor-pointer"
              onClick={() => {
                if (onOpenRegister) {
                  onOpenRegister();
                } else {
                  const el = document.getElementById('tickets');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Register Interest</span>
              <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="nav__burger"
              id="burger"
              aria-expanded={isSheetOpen}
              aria-controls="sheet"
              aria-label={isSheetOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsSheetOpen(!isSheetOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Sheet */}
      <div className={`sheet ${isSheetOpen ? 'is-open' : ''}`} id="sheet" aria-hidden={!isSheetOpen}>
        <nav aria-label="Mobile">
          <a className="sheet__link" href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
            <i>01</i> About
          </a>
          <a className="sheet__link" href="#tracks" onClick={(e) => handleLinkClick(e, '#tracks')}>
            <i>02</i> Tracks
          </a>
          <a className="sheet__link" href="#speakers" onClick={(e) => handleLinkClick(e, '#speakers')}>
            <i>03</i> Speakers
          </a>
          <a className="sheet__link" href="#tickets" onClick={(e) => handleLinkClick(e, '#tickets')}>
            <i>04</i> Tickets
          </a>
          <a className="sheet__link" href="#expect" onClick={(e) => handleLinkClick(e, '#expect')}>
            <i>05</i> Experience
          </a>
          <a className="sheet__link" href="#schedule" onClick={(e) => handleLinkClick(e, '#schedule')}>
            <i>06</i> Schedule
          </a>
          <a className="sheet__link" href="#sponsors" onClick={(e) => handleLinkClick(e, '#sponsors')}>
            <i>07</i> Sponsorship
          </a>
          <a className="sheet__link" href="#community" onClick={(e) => handleLinkClick(e, '#community')}>
            <i>08</i> Community
          </a>
          <a className="sheet__link" href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>
            <i>09</i> FAQ
          </a>
        </nav>
        <div className="sheet__foot">
          <button
            type="button"
            className="btn btn--primary btn--lg w-full cursor-pointer"
            onClick={() => {
              setIsSheetOpen(false);
              if (onOpenRegister) {
                onOpenRegister();
              } else {
                const el = document.getElementById('tickets');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Register Interest</span>
            <svg className="btn__arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </button>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Saturday | 26 December 2026 | Amravati
          </p>
        </div>
      </div>
    </>
  );
};

export default DncNavbar;
