import React from 'react';

/**
 * Neo-Brutalist side gutter decorator elements.
 * Placed in the empty side margins (left and right) flanking each section on wide viewports (xl: and 2xl:).
 */
export const DncSectionFlanks = ({
  leftIndex = '01',
  leftTag = 'SECTION',
  leftBadgeText = '✦ .NET CONF',
  leftBadgeColor = 'bg-[#FFE600] text-black',
  leftSub = 'PRPCEM',
  leftRotate = '-rotate-6',
  rightIndex = '2026',
  rightTag = 'CONF',
  rightBadgeText = 'IN-PERSON',
  rightBadgeColor = 'bg-[#00BDD6] text-black',
  rightSub = 'CENTRAL INDIA',
  rightRotate = 'rotate-6',
}) => {
  return (
    <>
      {/* ================= LEFT SIDE GUTTER ELEMENT ================= */}
      <div 
        aria-hidden="true"
        className="hidden xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        {/* Section Index Marker */}
        <div className="bg-white border-[1.5px] border-black px-2 py-0.5 rounded-md shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1 font-mono text-[10px] font-black text-black">
          <span className="text-[#512BD4]">{leftIndex}</span>
          <span className="text-stone-300">//</span>
          <span className="uppercase tracking-wider">{leftTag}</span>
        </div>

        {/* Tilted Neo-Brutalist Badge */}
        {leftBadgeText && (
          <div className={`transform ${leftRotate} px-2.5 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap ${leftBadgeColor}`}>
            {leftBadgeText}
          </div>
        )}

        {/* Subtitle Stamp */}
        {leftSub && (
          <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
            {leftSub}
          </span>
        )}

        {/* Technical Coordinate Crosshairs */}
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* ================= RIGHT SIDE GUTTER ELEMENT ================= */}
      <div 
        aria-hidden="true"
        className="hidden xl:flex absolute -right-16 2xl:-right-24 top-12 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        {/* Section Right Marker */}
        <div className="bg-white border-[1.5px] border-black px-2 py-0.5 rounded-md shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1 font-mono text-[10px] font-black text-black">
          <span className="text-[#00BDD6]">{rightIndex}</span>
          <span className="text-stone-300">//</span>
          <span className="uppercase tracking-wider">{rightTag}</span>
        </div>

        {/* Tilted Neo-Brutalist Badge */}
        {rightBadgeText && (
          <div className={`transform ${rightRotate} px-2.5 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap ${rightBadgeColor}`}>
            {rightBadgeText}
          </div>
        )}

        {/* Subtitle Stamp */}
        {rightSub && (
          <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
            {rightSub}
          </span>
        )}

        {/* Technical Coordinate Crosshairs */}
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>
    </>
  );
};

export default DncSectionFlanks;
