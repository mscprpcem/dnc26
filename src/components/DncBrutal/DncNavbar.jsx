import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useSectionRouter } from '../../utils/sectionRouter.js';

export const DncNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activePath, navigateTo } = useSectionRouter();

  const navLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'HIGHLIGHTS', path: '/highlights' },
    { label: 'KEYNOTE', path: '/keynote' },
    { label: 'SCHEDULE', path: '/schedule' },
    { label: 'VENUE', path: '/venue' },
    { label: 'BADGE', path: '/badge' },
    { label: 'PARTNERS', path: '/partners' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo(path);
  };

  return (
    <header className="sticky top-2 sm:top-3 z-50 px-3 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Warli Earthen Navbar Card */}
      <div className="bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[4px_4px_0px_0px_#120402] flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
          title=".NET Conf 2026 Amravati | Warli Edition"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E5A93C] border-[2px] border-[#FAF7F2] flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#120402] group-hover:rotate-6 transition-transform text-[#180805] font-mono font-black text-xs sm:text-sm tracking-tighter select-none">
            .NET
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg tracking-wider text-[#FAF7F2] font-sans leading-none">
              .NET CONF 2026
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] font-mono font-bold tracking-widest text-[#E5A93C] leading-none mt-0.5">
              WARLI EDITION • AMRAVATI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 font-mono text-xs font-bold">
          {navLinks.map((link) => {
            const isActive = activePath === link.path;
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#E5A93C] text-[#180805] border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]'
                    : 'text-[#FAF7F2]/80 hover:text-[#E5A93C] hover:bg-[#FAF7F2]/10'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          <a
            href="/register"
            onClick={(e) => handleNavClick(e, '/register')}
            className={`text-[11px] sm:text-xs font-bold font-sans uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border-[2px] border-[#FAF7F2] shadow-[2.5px_2.5px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activePath === '/register'
                ? 'bg-[#C84832] text-[#FAF7F2]'
                : 'bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805]'
            }`}
          >
            <span>REGISTER INTEREST</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl border-[2px] border-[#FAF7F2] bg-[#36130D] hover:bg-[#461911] text-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#120402] flex flex-col gap-1.5 font-mono text-sm font-bold animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const isActive = activePath === link.path;
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`py-2 px-3 rounded-xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#E5A93C] text-[#180805] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402]'
                    : 'text-[#FAF7F2] border-transparent hover:bg-[#FAF7F2]/10 hover:border-[#FAF7F2]/30'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/register"
            onClick={(e) => handleNavClick(e, '/register')}
            className={`mt-2 w-full py-2.5 rounded-xl border-[2px] border-[#FAF7F2] font-bold flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#120402] cursor-pointer ${
              activePath === '/register'
                ? 'bg-[#C84832] text-[#FAF7F2]'
                : 'bg-[#E5A93C] text-[#180805]'
            }`}
          >
            <span>REGISTER INTEREST</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default DncNavbar;
