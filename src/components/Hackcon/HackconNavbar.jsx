import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Compass, Tent, Sparkles } from 'lucide-react';

export const HackconNavbar = ({ onSwitchToDotNetConf }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#hackcon-about' },
    { label: 'WHY ATTEND', href: '#hackcon-why-attend' },
    { label: 'LOCATION', href: '#hackcon-location' },
    { label: 'SPEAKERS', href: '#hackcon-speakers' },
    { label: 'TESTIMONIALS', href: '#hackcon-testimonials' },
    { label: 'FAQS', href: '#hackcon-faqs' },
  ];

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Top micro announcement banner */}
      <div className="mb-2 bg-[#FFDB43] border-[2px] border-black rounded-full py-1 px-4 shadow-[2px_2px_0px_0px_#000] flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold text-black max-w-2xl mx-auto overflow-hidden">
        <div className="flex items-center gap-1.5 truncate">
          <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
          <span>CAMP PONTIAC, NY</span>
          <span className="text-stone-500">•</span>
          <span className="truncate">AUGUST 7-9, 2026 • HACKCON XII</span>
        </div>
        <a 
          href="#hackcon-register" 
          className="underline hover:text-red-700 flex items-center gap-0.5 whitespace-nowrap pl-2"
        >
          EARLY BIRD OPEN <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Neo-Brutalist Navbar Card */}
      <div className="bg-white border-[2.5px] border-black rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hackcon-hero" className="flex items-center gap-2.5 group">
          {/* MLH Logo mark badge */}
          <div className="w-8 h-8 rounded-lg bg-[#E73927] border-[2px] border-black flex items-center justify-center text-white font-black text-xs shadow-[2px_2px_0px_0px_#000] group-hover:rotate-6 transition-transform">
            MLH
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base sm:text-lg tracking-wider text-black font-sans leading-none">
              HACKCON
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 leading-none mt-0.5">
              EST. 2014
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 font-mono text-xs font-bold text-black">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-800 hover:underline underline-offset-4 decoration-2 decoration-[#FFDB43] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Switcher back to DotNetConf */}
          {onSwitchToDotNetConf && (
            <button
              onClick={onSwitchToDotNetConf}
              title="Return to DotNetConf 2026 Website"
              className="hidden sm:flex items-center gap-1.5 bg-[#F0EEF9] hover:bg-[#E4DFF6] text-[#512BD4] text-xs font-mono font-bold px-3 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>DNC26 SITE</span>
            </button>
          )}

          {/* Primary ATTEND Button */}
          <a
            href="#hackcon-register"
            className="bg-[#FFDB43] hover:bg-[#FFE368] text-black text-xs font-bold font-sans uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1"
          >
            <span>ATTEND</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border-[2px] border-black bg-stone-100 hover:bg-stone-200 text-black shadow-[2px_2px_0px_0px_#000]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white border-[2.5px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3 font-mono text-sm font-bold animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-[#FFDB43]/30 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          {onSwitchToDotNetConf && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSwitchToDotNetConf();
              }}
              className="mt-2 w-full py-2 bg-[#F0EEF9] text-[#512BD4] rounded-xl border-[2px] border-black font-bold flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Back to DotNetConf 2026</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default HackconNavbar;
