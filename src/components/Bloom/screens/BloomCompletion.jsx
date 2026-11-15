import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, Sparkles, RefreshCw } from 'lucide-react';

export const BloomCompletion = ({
  attendee,
  onResetKiosk,
  idleTimeoutSeconds = 15,
}) => {
  const [timeLeft, setTimeLeft] = useState(idleTimeoutSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onResetKiosk();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onResetKiosk]);

  // Mask email for privacy on shared conference laptop
  const maskEmail = (str = '') => {
    if (!str.includes('@')) return str;
    const [user, domain] = str.split('@');
    if (user.length <= 2) return `${user[0]}***@${domain}`;
    return `${user.slice(0, 2)}***${user.slice(-1)}@${domain}`;
  };

  const timerPercentage = (timeLeft / idleTimeoutSeconds) * 100;

  return (
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-6 sm:p-12 text-center select-none">
      {/* Top Draining Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-950/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-purple-500 transition-all duration-1000 ease-linear"
          style={{ width: `${timerPercentage}%` }}
        />
      </div>

      {/* Conference Tag */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 backdrop-blur-md text-emerald-300 font-mono text-xs tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Bloom Your Future · .NET Conf Amravati</span>
      </div>

      {/* Main Completion Card */}
      <div className="bloom-glass-card max-w-lg p-8 sm:p-12 space-y-6 my-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(52,211,153,0.4)]">
          <CheckCircle2 className="w-9 h-9 text-emerald-400" />
        </div>

        <div className="space-y-2">
          <h2 className="bloom-title-serif text-3xl sm:text-4xl font-black text-white tracking-wide">
            Your flower has bloomed!
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-emerald-300 font-medium">
            Your personalized creation will arrive in your inbox.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs sm:text-sm text-stone-200 font-mono">
          <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Delivering to {maskEmail(attendee?.email)}</span>
        </div>

        <p className="font-sans text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
          Thank you for joining .NET Conf 2026 at PRPCEM Amravati. Keep building, keep learning, and keep growing!
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={onResetKiosk}
            className="bloom-btn-primary w-full py-3.5 text-xs sm:text-sm tracking-wider uppercase cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Ready for Next Attendee ({timeLeft}s)</span>
          </button>
        </div>
      </div>

      {/* Footer Auto-Reset Indicator */}
      <div className="text-stone-400 font-mono text-[11px] tracking-wider uppercase">
        Kiosk automatically resets to protect privacy in {timeLeft} seconds
      </div>
    </div>
  );
};

export default BloomCompletion;

