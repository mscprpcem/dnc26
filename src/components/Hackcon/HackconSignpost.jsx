import React from 'react';

/**
 * Reusable MLH Hackcon Wooden Signpost Section Divider
 * Featuring the iconic golden-yellow board, thick black border,
 * hard neo-brutalist shadow, and dual white wooden mounting stakes with bolt caps.
 */
export const HackconSignpost = ({ 
  title, 
  id, 
  badge = null,
  className = "my-12 sm:my-16" 
}) => {
  return (
    <div id={id} className={`flex flex-col items-center justify-center relative select-none scroll-mt-28 ${className}`}>
      {/* Decorative top stake tips if desired */}
      <div className="relative inline-flex flex-col items-center">
        {/* Main Yellow Signboard */}
        <div className="relative z-10 bg-[#FFDB43] border-[2.5px] border-black rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-3.5 sm:py-4 shadow-[5px_5px_0px_0px_#000000] flex items-center gap-3 transform -rotate-[0.5deg] hover:rotate-0 transition-transform duration-200">
          {badge && (
            <span className="bg-white text-black text-xs font-mono font-bold px-2.5 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              {badge}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-black uppercase font-sans text-center">
            {title}
          </h2>
        </div>

        {/* Dual White Wooden Support Legs / Stakes with Silver Bolt Caps */}
        <div className="w-full max-w-[70%] flex justify-between px-6 -mt-1 z-0">
          {/* Left Leg */}
          <div className="w-3.5 sm:w-4 h-7 sm:h-9 bg-white border-[2.5px] border-black rounded-b-md shadow-[2px_2px_0px_0px_#000000] flex items-end justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#111111] opacity-70"></div>
          </div>
          
          {/* Right Leg */}
          <div className="w-3.5 sm:w-4 h-7 sm:h-9 bg-white border-[2.5px] border-black rounded-b-md shadow-[2px_2px_0px_0px_#000000] flex items-end justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#111111] opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackconSignpost;
