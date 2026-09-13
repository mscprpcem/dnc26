import React from 'react';

// Official Microsoft 4-color tile logo + Segoe typography
export const MicrosoftLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-white p-1 shadow-2xs border border-[#DCD5F6]/60">
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="10" height="10" fill="#F25022" />
        <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
        <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
        <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-semibold text-sm sm:text-base text-[#14053A] tracking-tight font-sans leading-none">
        Microsoft
      </span>
      <span className="text-[10px] font-medium text-[#5F6368] leading-tight">
        Technology Partner
      </span>
    </div>
  </div>
);

// Official JetBrains Logo from internet
export const JetBrainsLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-black p-0.5 shadow-2xs">
      <img
        src="/logos/jetbrains-logo.svg"
        alt="JetBrains Logo"
        className="w-full h-full object-contain select-none"
      />
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-sm sm:text-base text-[#14053A] tracking-tight font-sans leading-none">
        JetBrains
      </span>
      <span className="text-[10px] font-semibold text-[#FC6741] leading-tight">
        Developer Tools
      </span>
    </div>
  </div>
);

// Official PRPCEM Amravati college emblem from internet
export const PRPCEMLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-white shadow-2xs border border-[#DCD5F6]/60">
      <img
        src="/logos/prpcem-logo.jpeg"
        alt="PRPCEM Amravati Logo"
        className="w-full h-full object-contain select-none"
      />
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-sm sm:text-base text-[#14053A] tracking-tight leading-none">
        PRPCEM
      </span>
      <span className="text-[10px] font-medium text-[#5F6368] leading-tight">
        Amravati Campus
      </span>
    </div>
  </div>
);

// Official Microsoft Student Club PRPCEM Logo from internet
export const MSCPRPCEMLogo = ({ className = 'h-8' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-white shadow-2xs border border-[#DCD5F6]/60">
      <img
        src="/logos/mscprpcem-logo.png"
        alt="Microsoft Student Club PRPCEM Logo"
        className="w-full h-full object-contain select-none"
      />
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-sm sm:text-base text-[#14053A] tracking-tight leading-none">
        MSC PRPCEM
      </span>
      <span className="text-[10px] font-semibold text-[#512BD4] leading-tight">
        Student Club
      </span>
    </div>
  </div>
);


