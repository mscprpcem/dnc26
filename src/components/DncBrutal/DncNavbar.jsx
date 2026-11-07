import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const DncNavbar = ({ onOpenRegister }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (isSheetOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsSheetOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
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
            className="nav__brand shrink-0"
            href="#top"
            onClick={(e) => handleLinkClick(e, '#top')}
            aria-label=".NET Conf 2026 Amravati — home"
          >
            <div className="flex flex-col text-left">
              <span className="nav__brand-text text-sm sm:text-base leading-tight">
                .NET Conf 2026
              </span>
              <span className="nav__brand-city text-[9px] sm:text-[10px]">
                Amravati
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex nav__links" aria-label="Primary">
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
          <div className="flex items-center gap-1.5 sm:gap-2.5 ml-auto lg:ml-0 shrink-0">
            {/* CTA & Actions — Hidden on phone screen per design request, accessible via burger menu */}
            <button
              type="button"
              className="btn btn--primary btn--sm nav__cta hidden sm:inline-flex shrink-0 cursor-pointer"
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
              <svg className="btn__arrow shrink-0" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="nav__burger shrink-0"
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
        <nav aria-label="Mobile Navigation" className="sheet__nav flex flex-col">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              className="sheet__link"
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              <i>0{idx + 1}</i> <span>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="sheet__foot">
          <button
            type="button"
            className="btn btn--primary btn--lg w-full cursor-pointer mb-2"
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
            <svg className="btn__arrow" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </button>
          <p className="eyebrow" style={{ justifyContent: 'center', textAlign: 'center' }}>
            Saturday &amp; Sunday | 2–3 January 2027 | Swami Vivekanand Auditorium, PRPCEM, Amravati
          </p>
        </div>
      </div>
    </>
  );
};

export default DncNavbar;
