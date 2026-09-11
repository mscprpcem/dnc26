import React from 'react';

// Official Microsoft 4-color tile logo + Segoe typography
export const MicrosoftLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="10" height="10" fill="#F25022" />
      <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
      <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
      <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
    </svg>
    <span className="font-semibold text-base sm:text-lg text-[#171717] tracking-tight font-sans">
      Microsoft
    </span>
  </div>
);

// Official GitHub Invertocat logo + typography
export const GitHubLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg className="w-6 h-6 shrink-0 text-[#171717]" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
    <span className="font-bold text-base sm:text-lg text-[#171717] tracking-tight font-sans">
      GitHub
    </span>
  </div>
);

// Official PRPCEM Amravati emblem & typography
export const PRPCEMLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="w-7 h-7 rounded-lg bg-[#002B49] text-amber-400 flex items-center justify-center font-bold text-xs shadow-2xs shrink-0 border border-amber-400/40">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-extrabold text-sm sm:text-base text-[#002B49] tracking-tight leading-none">
        PRPCEM
      </span>
      <span className="text-[10px] font-medium text-[#5F6368] leading-tight">
        Amravati Campus
      </span>
    </div>
  </div>
);

// Official Microsoft Student Club PRPCEM Logo
export const MSCPRPCEMLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-[#512BD4] text-white font-bold text-xs shrink-0 shadow-2xs">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#0078D4] ring-2 ring-white" />
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-sm sm:text-base text-[#171717] tracking-tight leading-none">
        MSC PRPCEM
      </span>
      <span className="text-[10px] font-semibold text-[#512BD4] leading-tight">
        Microsoft Student Club
      </span>
    </div>
  </div>
);

// Official KonfHub Brand Logo
export const KonfHubLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <div className="w-7 h-7 rounded-lg bg-[#6B46C1] text-white flex items-center justify-center font-bold text-sm shadow-2xs shrink-0">
      <span className="font-black font-sans text-white text-base">k</span>
    </div>
    <span className="font-extrabold text-base sm:text-lg text-[#171717] tracking-tight">
      Konf<span className="text-[#6B46C1]">Hub</span>
    </span>
  </div>
);

// Official Azure / SohamGlobal Brand Logo
export const SohamGlobalLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="w-7 h-7 rounded-lg bg-[#0078D4] text-white flex items-center justify-center font-bold text-xs shadow-2xs shrink-0">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-sm sm:text-base text-[#171717] tracking-tight leading-none">
        SohamGlobal
      </span>
      <span className="text-[10px] font-medium text-[#0078D4] leading-tight">
        Cloud & Enterprise Partner
      </span>
    </div>
  </div>
);
