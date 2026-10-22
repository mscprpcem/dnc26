import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const NotFoundPage = ({ onRedirectHome }) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = 'Page Not Found | .NET Conf 2026';
    }
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      if (onRedirectHome) {
        onRedirectHome();
      } else if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', '/');
        window.location.reload();
      }
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onRedirectHome]);

  const handleRedirect = () => {
    if (onRedirectHome) {
      onRedirectHome();
    } else if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '/');
      window.location.pathname = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-4 selection:bg-[#512BD4]/20 selection:text-[#512BD4] font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl border border-stone-200/80 shadow-md p-8 text-center flex flex-col items-center">
        {/* Simple .NET Bot Mascot */}
        <div className="w-20 h-20 mb-4 flex items-center justify-center">
          <img
            src="/mascot/bot_frontal.png"
            alt=".NET Bot"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 404 Badge */}
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#512BD4] bg-[#EEEAFB] px-3 py-1 rounded-full mb-3">
          404 Error
        </span>

        {/* Heading */}
        <h1 className="text-2xl font-bold font-display text-[#14053A] mb-2">
          Page Not Found
        </h1>

        {/* Description & Countdown */}
        <p className="text-sm text-stone-600 mb-6 leading-relaxed">
          The page you are looking for doesn't exist. Redirecting to home in{' '}
          <span className="font-semibold text-[#512BD4]">{countdown}s</span>...
        </p>

        {/* Action Button */}
        <button
          onClick={handleRedirect}
          className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#512BD4] hover:bg-[#4323B0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>Go to Home</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
