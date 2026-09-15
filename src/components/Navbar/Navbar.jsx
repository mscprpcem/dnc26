import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { eventData } from '../../data/event.js';

// Streamlined, high-priority navigation links with clean path routing
const primaryNavItems = [
  { label: 'About', path: '/about', targetId: 'overview' },
  { label: 'Highlights', path: '/highlights', targetId: 'highlights' },
  { label: 'Keynote', path: '/keynote', targetId: 'keynote' },
  { label: 'Schedule', path: '/schedule', targetId: 'schedule' },
  { label: 'Venue', path: '/venue', targetId: 'venue' },
  { label: 'Badge', path: '/badge', targetId: 'attendee-badge' },
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

  // Handle URL path changes on initial load and browser back/forward
  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      const matchedItem = primaryNavItems.find(
        (item) => item.path === currentPath || (item.path === '/interest' && currentPath === '/register')
      );
      if (matchedItem) {
        setTimeout(() => {
          const el = document.getElementById(matchedItem.targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateToSection = (path, targetId) => {
    if (path === '/' || !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', path);
    }
  };

  const handleNavClick = (e, path, targetId) => {
    e.preventDefault();
    navigateToSection(path, targetId);
  };

  return (
    <header
      id="top"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#DCD5F6]/80 shadow-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo & Clean Title */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/', null)}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#512BD4] rounded-lg"
            aria-label=".NET Conf 2026 Amravati"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              <img
                src="/mascot/bot_head.png"
                alt=".NET Bot Mascot"
                className="w-full h-full object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6 select-none"
              />
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
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path, item.targetId)}
                className="text-xs sm:text-sm font-semibold text-[#14053A]/80 hover:text-[#512BD4] hover:bg-[#EEEAFB]/80 px-3 py-1.5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Upgraded Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/interest"
              onClick={(e) => handleNavClick(e, '/interest', 'register-interest')}
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-display text-white bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] hover:from-[#4323B0] hover:via-[#681FD8] hover:to-[#B50090] shadow-md shadow-[#512BD4]/25 hover:shadow-lg hover:shadow-[#512BD4]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer overflow-hidden border border-white/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Register Interest</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
            </a>
          </div>

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
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#DCD5F6] px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {primaryNavItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, item.path, item.targetId);
                }}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#14053A] hover:bg-[#EEEAFB] hover:text-[#512BD4] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#DCD5F6]/60">
            <a
              href="/interest"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleNavClick(e, '/interest', 'register-interest');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] flex items-center justify-center gap-2 shadow-md shadow-[#512BD4]/20 border border-white/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Register Interest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
