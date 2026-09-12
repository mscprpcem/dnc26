import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { eventData } from '../../data/event.js';

// Streamlined, high-priority navigation links
const primaryNavItems = [
  { label: 'About', href: '#overview' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Keynote', href: '#keynote' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#DCD5F6]/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo & Clean Title */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#512BD4] rounded-lg"
            aria-label=".NET Conf 2026 Amravati"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#512BD4] to-[#D600AA] flex items-center justify-center text-white shadow-xs">
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-tighter">.NET</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-gradient-magenta">
                .NET Conf 2026
              </span>
              <span className="text-[11px] font-semibold text-[#512BD4]">
                Amravati
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {primaryNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs sm:text-sm font-semibold text-[#14053A]/80 hover:text-[#512BD4] hover:bg-[#EEEAFB]/80 px-3 py-1.5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#14053A] hover:bg-[#EEEAFB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#DCD5F6] px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          {primaryNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#14053A] hover:bg-[#EEEAFB] hover:text-[#512BD4] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
