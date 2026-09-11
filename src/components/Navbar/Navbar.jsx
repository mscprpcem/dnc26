import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { navigationItems, eventData } from '../../data/event.js';
import { Container } from '../ui/Container.jsx';
import { Button } from '../ui/Button.jsx';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB]'
          : 'bg-white border-b border-[#E5E7EB]/80'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Title */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[#512BD4] rounded-lg p-1"
            aria-label=".NET Conf 2026 Home"
          >
            {/* .NET Inspired Logo Mark */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#512BD4] text-white font-bold text-xs shadow-xs tracking-tight transition-transform group-hover:scale-105">
              <span className="font-mono text-[13px] tracking-tighter">.NET</span>
              {/* Subtle top-right accent dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#0078D4] ring-2 ring-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-[#171717] group-hover:text-[#512BD4] transition-colors leading-none">
                  {eventData.name}
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#F5F2FE] text-[#512BD4] border border-[#DDD4FA]">
                  Amravati
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#5F6368] mt-1 leading-none">
                {eventData.organizer.name} · PRPCEM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#5F6368] hover:text-[#171717] hover:bg-[#F7F7F8] px-3 py-1.5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={eventData.organizer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#5F6368] hover:text-[#512BD4] inline-flex items-center gap-1 transition-colors px-2 py-1"
            >
              <span>MSC PRPCEM</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <Button
              variant="primary"
              size="sm"
              href={eventData.registrationUrl}
              target="_blank"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              href={eventData.registrationUrl}
              target="_blank"
              className="text-xs px-2.5 py-1.5"
            >
              Register
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#171717] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#512BD4]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#171717]" />
              ) : (
                <Menu className="w-5 h-5 text-[#171717]" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-18 bg-white/98 backdrop-blur-lg border-b border-[#E5E7EB] shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-150">
          <Container className="py-6">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[#171717] hover:bg-[#F7F7F8] hover:text-[#512BD4] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8F98]" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#E5E7EB] flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  href={eventData.registrationUrl}
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Register Now
                </Button>
                <div className="text-center text-xs text-[#5F6368] pt-1">
                  {eventData.organizer.institution} · Amravati, Maharashtra
                </div>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
