import React, { useState } from 'react';
import { Gift, Download, Check, Image as ImageIcon, Award, Palette, Layers } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const VirtualSwag = () => {
  const [downloadedIndex, setDownloadedIndex] = useState(null);

  const handleDownload = (index) => {
    setDownloadedIndex(index);
    setTimeout(() => {
      setDownloadedIndex(null);
    }, 2500);
  };

  return (
    <section id="swag" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Gift className="w-3 h-3" />
            <span>Digital Goodies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-3">
            Virtual <span className="community-event-gradient-text">Swag Bag</span>
          </h2>
          <p className="text-sm sm:text-base text-[#190649]/75 leading-relaxed">
            Free digital perks for our developer community! Claim custom wallpapers, badges, developer editor themes, and community assets.
          </p>
        </div>

        {/* Swag Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {eventData.swagItems.map((item, idx) => {
            const isDownloaded = downloadedIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white/85 backdrop-blur-md rounded-2xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex flex-col justify-between hover:border-[#9780E5] transition-all duration-200"
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3 shadow-xs"
                    style={{ backgroundColor: item.color }}
                  >
                    {idx === 0 && <Award className="w-5 h-5" />}
                    {idx === 1 && <ImageIcon className="w-5 h-5" />}
                    {idx === 2 && <Palette className="w-5 h-5" />}
                    {idx === 3 && <Layers className="w-5 h-5" />}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#512BD4] block mb-0.5">
                    {item.type}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-display text-[#14053A] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#190649]/75 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload(idx)}
                  className={`w-full py-2 px-3 rounded-lg font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isDownloaded
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-[#EEEAFB] text-[#512BD4] hover:bg-[#512BD4] hover:text-white border border-[#DCD5F6]'
                  }`}
                >
                  {isDownloaded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Ready in Downloads!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Get Free Perk</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
