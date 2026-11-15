import React, { useState, useEffect, useRef } from 'react';
import { Hand, Sparkles } from 'lucide-react';

const STAGE_LABELS = {
  3: 'Dormant Seed Ready',
  4: 'Entering Fertile Soil...',
  5: 'Roots Spreading Underground...',
  6: 'Green Shoot Emerging...',
  7: 'Stem Rising Toward the Light...',
  8: 'Leaves Unfolding in Harmony...',
  9: 'Flower Bud Swelling with Life...',
  10: 'Petals Blooming One by One...',
  11: 'Full Bloom & Radiant Spores',
};

export const BloomPlanting = ({
  attendee,
  flowerConfig,
  currentStage,
  subProgress,
  onTriggerPlant,
  onBloomComplete,
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSeedClick = () => {
    if (hasInteracted || currentStage > 3) return;
    setHasInteracted(true);
    if (onTriggerPlant) onTriggerPlant();
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-12 pointer-events-none select-none">
      {/* Top Header: Attendee Personalization Subtly Visible */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col text-left">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-emerald-400/80">
            Digital Seed Planted For
          </span>
          <span className="font-serif text-lg sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
            {attendee?.name || 'Innovator'}
          </span>
        </div>

        {/* Live Botanical Stage Indicator */}
        <div className="bloom-stage-pill shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>{STAGE_LABELS[currentStage] || 'Generative Bloom'}</span>
        </div>
      </div>

      {/* Center Interactive Seed Tap Prompt (Only during Stage 3 before tap) */}
      {currentStage === 3 && (
        <div className="pointer-events-auto flex flex-col items-center justify-center my-auto space-y-5 animate-fade-in">
          <button
            type="button"
            onClick={handleSeedClick}
            className="bloom-seed-trigger cursor-pointer group"
            title="Touch or click to plant"
          >
            <Hand className="w-8 h-8 text-amber-950 transition-transform duration-300 group-hover:scale-110 animate-bounce" />
          </button>

          <div className="text-center space-y-1">
            <p className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-lg">
              Touch the Seed to Plant
            </p>
            <p className="font-sans text-xs sm:text-sm text-emerald-300/80 font-medium tracking-wide">
              Initiate your unique procedural growth sequence
            </p>
          </div>
        </div>
      )}

      {/* Bottom Subtle Tagline */}
      <div className="w-full text-center text-stone-400 font-mono text-[11px] tracking-wider uppercase opacity-60">
        .NET Conf Amravati · Procedural Botanical Engine
      </div>
    </div>
  );
};

export default BloomPlanting;

