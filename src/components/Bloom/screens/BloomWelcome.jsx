import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const BloomWelcome = ({ onBegin }) => {
  return (
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-6 sm:p-12 text-center pointer-events-none select-none">
      {/* Top Header Badge */}
      <div className="pointer-events-auto flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md text-emerald-300 font-mono text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>.NET Conf 2026 Amravati · Generative Installation</span>
      </div>

      {/* Main Center Headline */}
      <div className="max-w-3xl space-y-4 my-auto pointer-events-auto">
        <h1 className="bloom-title-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          <span className="bloom-gold-gradient-text block">BLOOM YOUR</span>
          <span className="bloom-emerald-gradient-text block mt-1">FUTURE</span>
        </h1>

        <p className="font-serif italic text-lg sm:text-2xl text-stone-300 font-normal tracking-wide max-w-xl mx-auto drop-shadow-md">
          &ldquo;Every great idea starts with a seed.&rdquo;
        </p>

        <div className="pt-8">
          <button
            type="button"
            onClick={onBegin}
            className="bloom-btn-primary group text-base sm:text-lg px-8 sm:px-10 py-4"
          >
            <span>Begin Your Experience</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom Subtle Brand Footer */}
      <div className="text-stone-400 font-mono text-[11px] tracking-wider uppercase opacity-75">
        Swami Vivekanand Auditorium · Touch or click to start
      </div>
    </div>
  );
};

export default BloomWelcome;

