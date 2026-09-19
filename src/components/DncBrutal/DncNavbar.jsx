import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, Rocket } from 'lucide-react';

export const DncNavbar = ({ onSwitchToClassic }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#dnc-about' },
    { label: 'TRACKS', href: '#dnc-tracks' },
    { label: 'HIGHLIGHTS', href: '#dnc-highlights' },
    { label: 'KEYNOTE', href: '#dnc-keynote' },
    { label: 'AGENDA', href: '#dnc-agenda' },
    { label: 'VENUE', href: '#dnc-venue' },
    { label: 'SPONSORS', href: '#dnc-sponsors' },
  ];

  return (
    <header className="sticky top-2 sm:top-3 z-50 px-3 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Top live announcement micro-banner */}
      <div className="mb-2 bg-[#512BD4] text-white border-[2px] border-black rounded-full py-1 px-3 sm:px-4 shadow-[2px_2px_0px_0px_#000] flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold max-w-2xl mx-auto overflow-hidden">
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="flex h-2 w-2 rounded-full bg-[#00BDD6] animate-ping shrink-0"></span>
          <span className="truncate">.NET CONF 2026 AMRAVATI</span>
          <span className="text-white/60 hidden xs:inline">•</span>
          <span className="hidden sm:inline">PRPCEM CAMPUS</span>
        </div>
        <a 
          href="#dnc-interest" 
          className="text-[#00BDD6] hover:underline flex items-center gap-0.5 whitespace-nowrap pl-2 shrink-0"
        >
          PRIORITY PASS <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Neo-Brutalist Navbar Card */}
      <div className="bg-white border-[2.5px] border-black rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#dnc-hero" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#512BD4] border-[2px] border-black flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-[2px_2px_0px_0px_#000] group-hover:rotate-6 transition-transform">
            .NET
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg tracking-wider text-black font-sans leading-none">
              CONF 2026
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-[#512BD4] leading-none mt-0.5">
              AMRAVATI • PRPCEM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-mono text-xs font-bold text-black">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#512BD4] hover:underline underline-offset-4 decoration-2 decoration-[#00BDD6] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Switch to Classic Original Mode */}
          {onSwitchToClassic && (
            <button
              onClick={onSwitchToClassic}
              className="hidden sm:flex items-center gap-1.5 bg-[#FAF8FF] hover:bg-[#EEEAFB] text-[#14053A] font-mono font-bold text-xs px-3 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
              title="Switch to original DotNetConf website mode"
            >
              <span>⚡</span>
              <span>ORIGINAL MODE</span>
            </button>
          )}

          {/* Primary REGISTER INTEREST Button */}
          <a
            href="#dnc-interest"
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white text-[11px] sm:text-xs font-bold font-sans uppercase px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1 whitespace-nowrap"
          >
            <span>REGISTER INTEREST</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] hidden xs:block" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl border-[2px] border-black bg-stone-100 hover:bg-stone-200 text-black shadow-[2px_2px_0px_0px_#000]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white border-[2.5px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-2.5 font-mono text-sm font-bold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-[#EEEAFB] rounded-xl transition-colors text-black border border-transparent hover:border-black/20"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#dnc-interest"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-2.5 bg-[#512BD4] text-white rounded-xl border-[2px] border-black font-bold flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000]"
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
