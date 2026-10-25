import React, { useEffect } from 'react';
import { ArrowRight, Home } from 'lucide-react';

export const NotFoundPage = ({ onRedirectHome }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = 'Page Not Found | .NET Conf 2026 Amravati';
    }
  }, []);

  const handleRedirect = () => {
    if (onRedirectHome) {
      onRedirectHome();
    } else if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '/');
      window.location.pathname = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4 selection:bg-[#512BD4] selection:text-white font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-7 sm:p-9 text-center flex flex-col items-center">
        
        {/* Simple .NET Bot Mascot Avatar */}
        <div className="w-24 h-24 mb-5 rounded-2xl bg-[#EEEAFB] border-[2.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
          <img
            src="/mascot/bot_frontal.png"
            alt=".NET Bot"
            className="w-16 h-16 object-contain drop-shadow-sm select-none"
          />
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFD13B] text-black text-xs font-mono font-black uppercase tracking-wider mb-3 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
          <span>404 · PAGE NOT FOUND</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-black mb-2">
          Lost in Space?
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm text-stone-600 font-sans mb-6 leading-relaxed max-w-xs">
          The page you are looking for doesn't exist or has been moved to a new track on the road to .NET Conf 2026.
        </p>

        {/* Action Button */}
        <button
          onClick={handleRedirect}
          className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-mono font-black uppercase text-white bg-[#512BD4] hover:bg-[#4322B0] border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4 stroke-[2.5]" />
          <span>BACK TO SUMMIT HOME</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
