import React from 'react';

/**
 * Reusable DotNetConf Signpost Section Divider
 * Refined color grading and enhanced mobile responsive sizing.
 */
export const DncSignpost = ({ 
  title, 
  id, 
  badge = null,
  theme = "purple", // "purple" | "cyan" | "magenta" | "gold"
  className = "my-10 sm:my-16" 
}) => {
  const themeStyles = {
    purple: {
      bg: "bg-[#512BD4]",
      text: "text-white",
      badgeBg: "bg-[#00BDD6]",
      badgeText: "text-black",
      shadow: "shadow-[4px_4px_0px_0px_#000000] sm:shadow-[5px_5px_0px_0px_#000000]"
    },
    cyan: {
      bg: "bg-[#00BDD6]",
      text: "text-black",
      badgeBg: "bg-[#512BD4]",
      badgeText: "text-white",
      shadow: "shadow-[4px_4px_0px_0px_#000000] sm:shadow-[5px_5px_0px_0px_#000000]"
    },
    magenta: {
      bg: "bg-[#D600AA]",
      text: "text-white",
      badgeBg: "bg-[#FFD13B]",
      badgeText: "text-black",
      shadow: "shadow-[4px_4px_0px_0px_#000000] sm:shadow-[5px_5px_0px_0px_#000000]"
    },
    gold: {
      bg: "bg-[#FFD13B]",
      text: "text-black",
      badgeBg: "bg-[#512BD4]",
      badgeText: "text-white",
      shadow: "shadow-[4px_4px_0px_0px_#000000] sm:shadow-[5px_5px_0px_0px_#000000]"
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.purple;

  return (
    <div id={id} className={`flex flex-col items-center justify-center relative select-none scroll-mt-24 px-2 ${className}`}>
      <div className="relative inline-flex flex-col items-center max-w-full">
        {/* Main Signboard */}
        <div className={`relative z-10 ${currentTheme.bg} ${currentTheme.text} border-[2.5px] border-black rounded-2xl sm:rounded-3xl px-4 sm:px-9 py-2.5 sm:py-3.5 ${currentTheme.shadow} flex flex-wrap items-center justify-center gap-2 sm:gap-3 transform -rotate-[0.5deg] hover:rotate-0 transition-transform duration-200 max-w-[94vw] sm:max-w-none`}>
          {badge && (
            <span className={`${currentTheme.badgeBg} ${currentTheme.badgeText} text-[10px] sm:text-xs font-mono font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0`}>
              {badge}
            </span>
          )}
          <h2 className="text-base sm:text-2xl md:text-3xl font-black tracking-tight uppercase font-sans text-center">
            {title}
          </h2>
        </div>

        {/* Dual Support Stakes with Silver/Dark Bolt Caps */}
        <div className="w-full max-w-[65%] sm:max-w-[70%] flex justify-between px-4 sm:px-6 -mt-1 z-0">
          {/* Left Leg */}
          <div className="w-3 sm:w-4 h-6 sm:h-8 bg-white border-[2px] sm:border-[2.5px] border-black rounded-b-md shadow-[2px_2px_0px_0px_#000000] flex items-end justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#14053A] opacity-70"></div>
          </div>
          
          {/* Right Leg */}
          <div className="w-3 sm:w-4 h-6 sm:h-8 bg-white border-[2px] sm:border-[2.5px] border-black rounded-b-md shadow-[2px_2px_0px_0px_#000000] flex items-end justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#14053A] opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DncSignpost;
