import React from 'react';

/**
 * Warli Tribal Art side gutter decorator elements.
 * Placed in the empty side margins (left and right) flanking each section on wide viewports (xl: and 2xl:).
 */
export const DncSectionFlanks = ({
  leftIndex = '01',
  leftTag = 'SECTION',
  leftBadgeText = '✦ WARLI ART',
  leftBadgeColor = 'bg-[#E5A93C] text-[#180805]',
  leftSub = 'PRPCEM',
  leftRotate = '-rotate-6',
  rightIndex = '2026',
  rightTag = 'CONF',
  rightBadgeText = 'MAHARASHTRA',
  rightBadgeColor = 'bg-[#FAF7F2] text-[#180805]',
  rightSub = 'CENTRAL INDIA',
  rightRotate = 'rotate-6',
}) => {
  return (
    <>
      {/* ================= LEFT SIDE GUTTER ELEMENT ================= */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-20 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        {/* Section Index Marker */}
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="text-[#E5A93C]">{leftIndex}</span>
          <span className="text-[#FAF7F2]/40">//</span>
          <span className="uppercase tracking-wider">{leftTag}</span>
        </div>

        {/* Tilted Warli Badge */}
        {leftBadgeText && (
          <div className={`transform ${leftRotate} px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap ${leftBadgeColor}`}>
            {leftBadgeText}
          </div>
        )}

        {/* Subtitle Stamp */}
        {leftSub && (
          <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
            {leftSub}
          </span>
        )}

        {/* Warli Diamond Motifs */}
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* ================= RIGHT SIDE GUTTER ELEMENT ================= */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-20 2xl:-right-24 top-12 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        {/* Section Right Marker */}
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="text-[#E5A93C]">{rightIndex}</span>
          <span className="text-[#FAF7F2]/40">//</span>
          <span className="uppercase tracking-wider">{rightTag}</span>
        </div>

        {/* Tilted Warli Badge */}
        {rightBadgeText && (
          <div className={`transform ${rightRotate} px-2.5 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap ${rightBadgeColor}`}>
            {rightBadgeText}
          </div>
        )}

        {/* Subtitle Stamp */}
        {rightSub && (
          <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
            {rightSub}
          </span>
        )}

        {/* Warli Diamond Motifs */}
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>
    </>
  );
};

export default DncSectionFlanks;
