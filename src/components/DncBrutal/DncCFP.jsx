import React, { useState } from 'react';
import { 
  Mic, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  HelpCircle
} from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';
import { SESSIONIZE_PUBLIC_URL } from '../../utils/sessionizeApi.js';
import CodeOfConductModal from '../CodeOfConduct/CodeOfConductModal.jsx';

export const DncCFP = () => {
  const [showCocModal, setShowCocModal] = useState(false);

  const tracks = [
    { title: '.NET 11 & C# 14', desc: 'Runtime performance, Native AOT, and C# 14 language innovations.' },
    { title: 'Generative AI & Semantic Kernel', desc: 'Agents, local SLMs, RAG, and Azure OpenAI micro-copilots.' },
    { title: 'Cloud-Native & Distributed Systems', desc: '.NET Aspire, Docker, Kubernetes, and Azure container apps.' },
    { title: 'Full-Stack Blazor & WebAssembly', desc: 'High-speed interactive web solutions and Minimal APIs.' },
  ];

  return (
    <section id="cfp" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Signpost */}
      <DncSignpost
        title="CALL FOR SPEAKERS"
        badge="SESSIONIZE PORTAL"
        theme="purple"
      />

      {/* Main Brutal Card */}
      <div className="bg-white border-[2.5px] sm:border-[3.5px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#000] sm:shadow-[7px_7px_0px_0px_#000] mb-8">
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b-[2px] border-black/15">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black rounded-full px-3 py-0.5 text-[11px] font-mono font-bold uppercase shadow-[1px_1px_0px_0px_#000] mb-3">
              <img src="/mascot/bot_head.png" alt=".NET Bot" className="w-3.5 h-3.5 object-contain select-none" />
              <span>OFFICIAL SESSIONIZE SUBMISSION PORTAL</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans text-black uppercase tracking-tight mb-2 leading-tight">
              Submit Your Session on Sessionize
            </h3>

            <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed mb-6">
              All speaker submissions and proposals for <strong>.NET Conf 2026 Amravati</strong> are managed exclusively on Sessionize. Approved talks automatically appear in the live conference schedule grid.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SESSIONIZE_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs sm:text-sm px-5 py-3 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mic className="w-4 h-4 stroke-[2.5]" />
                <span>APPLY TO SPEAK ON SESSIONIZE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#schedule"
                className="bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW SCHEDULE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Side Info Box */}
          <div className="w-full lg:w-72 bg-[#F6F0FE] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] font-mono text-xs space-y-2.5">
            <div className="font-black text-black uppercase pb-2 border-b-[1.5px] border-black/20 text-xs">
              CFP GUIDELINES
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Platform:</span>
              <span className="font-bold text-[#512BD4]">Sessionize</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Talks:</span>
              <span className="font-bold text-black">30-45 mins</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Workshops:</span>
              <span className="font-bold text-black">60-90 mins</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Venue:</span>
              <span className="font-bold text-black">PRPCEM Campus</span>
            </div>
            <div className="pt-2 border-t-[1.5px] border-black/20">
              <button
                type="button"
                onClick={() => setShowCocModal(true)}
                className="text-[11px] font-bold text-[#512BD4] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                <span>Speaker Code of Conduct</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="pt-6">
          <div className="font-mono font-black text-xs text-black uppercase tracking-wider mb-3">
            TECHNICAL BREAKOUT TRACKS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tracks.map((t, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#FAF8FF] border-[1.5px] border-black">
                <div className="font-sans font-black text-xs sm:text-sm text-black mb-1">{t.title}</div>
                <div className="font-sans text-xs text-stone-600">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {showCocModal && (
        <CodeOfConductModal onClose={() => setShowCocModal(false)} />
      )}
    </section>
  );
};

export default DncCFP;
