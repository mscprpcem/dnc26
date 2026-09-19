import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
      {/* Main Neo-Brutalist Navbar Card */}
      <div className="bg-white border-[2.5px] border-black rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
          title=".NET Conf 2026 Amravati"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#512BD4] border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] group-hover:rotate-6 transition-transform p-1">
            <img
              src="/mascot/bot_head.png"
              alt=".NET Bot Mascot"
              className="w-full h-full object-contain select-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg tracking-wider text-black font-sans leading-none">
              .NET CONF 2026
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-[#512BD4] leading-none mt-0.5">
              AMRAVATI • PRPCEM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 font-mono text-xs font-bold text-black">
          {navLinks.map((link) => {
            const isActive = activePath === link.path;
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#512BD4] text-white border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]'
                    : 'text-black hover:text-[#512BD4] hover:bg-[#EEEAFB]/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Primary REGISTER INTEREST Button */}
          <a
            href="/register"
            onClick={(e) => handleNavClick(e, '/register')}
            className={`text-[11px] sm:text-xs font-bold font-sans uppercase px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              activePath === '/register'
                ? 'bg-[#00BDD6] text-black'
                : 'bg-[#512BD4] hover:bg-[#4322B0] text-white'
            }`}
          >
            <span>REGISTER INTEREST</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] hidden xs:block" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl border-[2px] border-black bg-stone-100 hover:bg-stone-200 text-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white border-[2.5px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-1.5 font-mono text-sm font-bold animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const isActive = activePath === link.path;
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`py-2 px-3 rounded-xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#512BD4] text-white border-black shadow-[2px_2px_0px_0px_#000]'
                    : 'text-black border-transparent hover:bg-[#EEEAFB] hover:border-black/20'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/register"
            onClick={(e) => handleNavClick(e, '/register')}
            className={`mt-2 w-full py-2.5 rounded-xl border-[2px] border-black font-bold flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000] cursor-pointer ${
              activePath === '/register'
                ? 'bg-[#00BDD6] text-black'
                : 'bg-[#512BD4] text-white'
            }`}
          >
            <span>REGISTER INTEREST</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default DncNavbar;
