import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const DncNavbar = ({ onOpenRegister }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (isSheetOpen) {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.dataset.navScrollY = String(scrollY);

      return () => {
        const savedY = parseInt(document.body.dataset.navScrollY || '0', 10);
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        delete document.body.dataset.navScrollY;
        window.scrollTo(0, savedY);
      };
    }
  }, [isSheetOpen]);

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
          <div className="flex items-center gap-1.5 sm:gap-2 ml-auto lg:ml-0">
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
              <span className="hidden sm:inline">Register Interest</span>
              <span className="sm:hidden">Register</span>
              <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="nav__burger"
              id="burger"
              type="button"
              aria-expanded={isSheetOpen}
              aria-controls="sheet"
              aria-label={isSheetOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsSheetOpen(!isSheetOpen)}
            >
              {isSheetOpen ? (
                <X className="w-5 h-5 text-[#512BD4]" strokeWidth={2.5} />
              ) : (
                <Menu className="w-5 h-5 text-[#512BD4]" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Sheet */}
      <div className={`sheet ${isSheetOpen ? 'is-open' : ''}`} id="sheet" aria-hidden={!isSheetOpen}>
        <div className="sheet__header">
          <div className="flex items-center gap-2">
            <img
              src="/logos/dotnet-logo.jpg"
              alt=".NET Logo"
              className="w-7 h-7 rounded-md object-contain border border-[#512BD4]/30"
            />
            <div className="flex flex-col text-left">
              <span className="font-sans font-black text-sm text-[#120838] leading-tight">
                .NET Conf 2026
              </span>
              <span className="font-mono text-[10px] font-bold text-[#512BD4] tracking-widest uppercase">
                Amravati
              </span>
            </div>
          </div>
          <button
            type="button"
            className="w-9 h-9 rounded-lg bg-[#512BD4]/10 hover:bg-[#512BD4]/20 border border-[#512BD4]/30 text-[#512BD4] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close menu"
            onClick={() => setIsSheetOpen(false)}
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

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
          <p className="eyebrow" style={{ justifyContent: 'center', textAlign: 'center' }}>
            Saturday | 26 December 2026 | P. R. Pote Patil College of Engineering and Management, Amravati
          </p>
        </div>
      </div>
    </>
  );
};

export default DncNavbar;
