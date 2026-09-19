import React from 'react';
import { ArrowUpRight, Handshake } from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';

export const DncSponsors = () => {
  return (
    <section id="dnc-sponsors" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="PARTNERS & SPONSORS" 
        badge="OUR SUPPORTERS"
        theme="cyan"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg font-bold font-sans text-stone-800">
            Backed by leading technology companies and academic institutions committed to empowering student developers and open source ecosystems in Central India.
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
          {/* Microsoft */}
          <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                {/* Microsoft 4-color logo */}
                <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                  <div className="bg-[#F25022]"></div>
                  <div className="bg-[#7FBA00]"></div>
                  <div className="bg-[#00A4EF]"></div>
                  <div className="bg-[#FFB900]"></div>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-[#512BD4] text-white px-2 py-0.5 rounded">
                  Gold Partner
                </span>
              </div>
              <h4 className="font-black font-sans text-base sm:text-lg text-black uppercase">
                Microsoft
              </h4>
              <p className="text-xs font-mono text-stone-600 mt-1">
                Global Technology Partner
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-[1.5px] border-black/20 text-[10px] sm:text-[11px] font-mono font-bold text-[#512BD4] flex items-center gap-1">
              <span>OFFICIAL PARTNER</span>
              <span>✓</span>
            </div>
          </div>

          {/* JetBrains */}
          <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <img
                  src="/logos/jetbrains-logo.svg"
                  alt="JetBrains"
                  className="h-5 sm:h-6 w-auto object-contain"
                />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-black text-white px-2 py-0.5 rounded">
                  Dev Tools
                </span>
              </div>
              <h4 className="font-black font-sans text-base sm:text-lg text-black uppercase">
                JetBrains
              </h4>
              <p className="text-xs font-mono text-stone-600 mt-1">
                Developer Tools Partner
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-[1.5px] border-black/20 text-[10px] sm:text-[11px] font-mono font-bold text-[#512BD4] flex items-center gap-1">
              <span>OFFICIAL PARTNER</span>
              <span>✓</span>
            </div>
          </div>

          {/* PRPCEM */}
          <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <img
                  src="/logos/prpcem-logo.jpeg"
                  alt="PRPCEM"
                  className="h-6 sm:h-7 w-auto object-contain rounded"
                />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-[#00BDD6] text-black px-2 py-0.5 rounded">
                  Host Campus
                </span>
              </div>
              <h4 className="font-black font-sans text-base sm:text-lg text-black uppercase">
                PRPCEM Amravati
              </h4>
              <p className="text-xs font-mono text-stone-600 mt-1">
                Campus & Academic Host
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-[1.5px] border-black/20 text-[10px] sm:text-[11px] font-mono font-bold text-[#512BD4] flex items-center gap-1">
              <span>OFFICIAL PARTNER</span>
              <span>✓</span>
            </div>
          </div>

          {/* MSC PRPCEM */}
          <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <img
                  src="/logos/mscprpcem-logo.png"
                  alt="MSC PRPCEM"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-[#D600AA] text-white px-2 py-0.5 rounded">
                  Organizer
                </span>
              </div>
              <h4 className="font-black font-sans text-base sm:text-lg text-black uppercase">
                MSC PRPCEM
              </h4>
              <p className="text-xs font-mono text-stone-600 mt-1">
                Student Community Chapter
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-[1.5px] border-black/20 text-[10px] sm:text-[11px] font-mono font-bold text-[#512BD4] flex items-center gap-1">
              <span>OFFICIAL CHAPTER</span>
              <span>✓</span>
            </div>
          </div>
        </div>

        {/* Sponsor Us Banner */}
        <div className="bg-[#EEEAFB] border-[2px] border-black rounded-2xl p-4 sm:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] uppercase mb-1">
              <Handshake className="w-3.5 h-3.5" />
              <span>ENGAGE CENTRAL INDIA'S LARGEST STUDENT DEV ECOSYSTEM</span>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-black font-sans uppercase text-black">
              Sponsor .NET Conf 2026 Amravati
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 font-sans max-w-xl mt-0.5">
              Showcase your developer tools, cloud platforms, and hiring opportunities to 500+ top engineering delegates.
            </p>
          </div>

          <a
            href="mailto:dotnetconfamt@prpotepatilengg.ac.in"
            className="w-full sm:w-auto bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap"
          >
            <span>GET SPONSOR PACK</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncSponsors;
