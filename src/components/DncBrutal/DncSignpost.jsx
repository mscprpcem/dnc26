import React from 'react';

/**
 * Reusable DotNetConf Warli Tribal Art Signpost Section Divider
 * Uses authentic Warli terracotta, rice chalk borders, and turmeric badges.
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
      bg: "bg-[#260C07]",
      text: "text-[#FAF7F2]",
      badgeBg: "bg-[#E5A93C]",
      badgeText: "text-[#180805]",
      border: "border-[#FAF7F2]",
      shadow: "shadow-[4px_4px_0px_0px_#120402] sm:shadow-[5px_5px_0px_0px_#120402]"
    },
    cyan: {
      bg: "bg-[#280D07]",
      text: "text-[#FAF7F2]",
      badgeBg: "bg-[#FAF7F2]",
      badgeText: "text-[#180805]",
      border: "border-[#FAF7F2]",
      shadow: "shadow-[4px_4px_0px_0px_#120402] sm:shadow-[5px_5px_0px_0px_#120402]"
    },
    magenta: {
      bg: "bg-[#38130D]",
      text: "text-[#FAF7F2]",
      badgeBg: "bg-[#C84832]",
      badgeText: "text-[#FAF7F2]",
      border: "border-[#FAF7F2]",
      shadow: "shadow-[4px_4px_0px_0px_#120402] sm:shadow-[5px_5px_0px_0px_#120402]"
    },
    gold: {
      bg: "bg-[#E5A93C]",
      text: "text-[#180805]",
      badgeBg: "bg-[#260C07]",
      badgeText: "text-[#FAF7F2]",
      border: "border-[#FAF7F2]",
      shadow: "shadow-[4px_4px_0px_0px_#120402] sm:shadow-[5px_5px_0px_0px_#120402]"
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.purple;

  return (
    <div id={id} className={`flex flex-col items-center justify-center relative select-none scroll-mt-24 px-2 ${className}`}>
      <div className="relative inline-flex flex-col items-center max-w-full">
        {/* Main Signboard */}
        <div className={`relative z-10 ${currentTheme.bg} ${currentTheme.text} border-[2.5px] border-[#FAF7F2] rounded-2xl sm:rounded-3xl px-4 sm:px-9 py-2.5 sm:py-3.5 ${currentTheme.shadow} flex flex-wrap items-center justify-center gap-2 sm:gap-3 transform -rotate-[0.5deg] hover:rotate-0 transition-transform duration-200 max-w-[94vw] sm:max-w-none`}>
          {badge && (
            <span className={`${currentTheme.badgeBg} ${currentTheme.badgeText} text-[10px] sm:text-xs font-mono font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402] shrink-0 uppercase`}>
              {badge}
            </span>
          )}
          <h2 className="text-base sm:text-2xl md:text-3xl font-black tracking-tight uppercase font-sans text-center">
            {title}
          </h2>
        </div>

        {/* Dual Support Stakes */}
        <div className="w-full max-w-[65%] sm:max-w-[70%] flex justify-between px-4 sm:px-6 -mt-1 z-0">
          {/* Left Leg */}
          <div className="w-3 sm:w-4 h-6 sm:h-8 bg-[#260C07] border-[2px] sm:border-[2.5px] border-[#FAF7F2] rounded-b-md shadow-[2px_2px_0px_0px_#120402] flex items-end justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
          
          {/* Right Leg */}
          <div className="w-3 sm:w-4 h-6 sm:h-8 bg-[#260C07] border-[2px] sm:border-[2.5px] border-[#FAF7F2] rounded-b-md shadow-[2px_2px_0px_0px_#120402] flex items-end justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DncSignpost;
