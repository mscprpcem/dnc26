import React, { useState } from 'react';
import { 
  Mic, 
  ArrowRight, 
  ExternalLink, 
  HelpCircle
} from 'lucide-react';
import { SESSIONIZE_PUBLIC_URL } from '../../utils/sessionizeApi.js';
import CodeOfConductModal from '../CodeOfConduct/CodeOfConductModal.jsx';

export const CallForSpeakers = () => {
  const [showCocModal, setShowCocModal] = useState(false);

  const tracks = [
    {
      title: '.NET 11 & Modern C# 14',
      desc: 'Deep-dive into new language features, runtime performance, and Native AOT.',
      badge: 'Architecture',
    },
    {
      title: 'Generative AI & Semantic Kernel',
      desc: 'Building autonomous agents, local SLMs, and Azure OpenAI enterprise copilots.',
      badge: 'AI & Copilots',
    },
    {
      title: 'Cloud-Native & Distributed Systems',
      desc: 'Microservices with .NET Aspire, Docker containers, and Azure Kubernetes (AKS).',
      badge: 'Cloud Native',
    },
    {
      title: 'Full-Stack Blazor & Minimal APIs',
      desc: 'High-speed interactive web applications, WebAssembly, and modern API design.',
      badge: 'Web & APIs',
    },
  ];

  return (
    <section id="cfp" className="w-full py-10 sm:py-12 md:py-14 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEEAFB] text-[#512BD4] text-xs font-mono font-bold uppercase tracking-wider mb-2 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            <Mic className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Official Sessionize Integration · Call for Proposals</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black font-sans uppercase tracking-tight mb-2 leading-tight">
            Call for Speakers <span className="text-[#512BD4]">Now Open</span>
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            All session submissions and speaker profiles are managed through <strong>Sessionize</strong>.
          </p>

          <div className="w-12 h-1 bg-[#512BD4] rounded-full mx-auto mt-3" />
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl border-[2.5px] sm:border-[3px] border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden p-5 sm:p-7 md:p-8 mb-8">
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b-[2px] border-black">
            <div className="max-w-xl text-left">
              <span className="text-[11px] font-mono font-bold text-[#512BD4] uppercase tracking-wider block mb-1">
                Managed on Sessionize
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans uppercase text-black mb-2">
                Submit Your Session Proposal
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-6">
                Submit your talk proposals directly on Sessionize for .NET Conf 2026 Amravati.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={SESSIONIZE_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-black uppercase bg-[#512BD4] text-white hover:bg-[#4322B0] border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mic className="w-4 h-4" />
                  <span>Submit Talk on Sessionize</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href="#schedule"
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase bg-[#FAF8FF] text-[#512BD4] border-[2px] border-black hover:bg-[#EEEAFB] shadow-[2px_2px_0px_0px_#000] transition-colors inline-flex items-center gap-2"
                >
                  <span>View Conference Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="w-full lg:w-72 bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-5 shrink-0 text-xs font-sans space-y-3 shadow-[3px_3px_0px_0px_#000] text-left">
              <div className="font-black font-sans uppercase text-black text-sm pb-2 border-b-[1.5px] border-black">
                CFP Key Information
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-600 font-mono">Platform:</span>
                <a 
                  href={SESSIONIZE_PUBLIC_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-[#512BD4] hover:underline flex items-center gap-1"
                >
                  <span>sessionize.com/dnc26</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-600 font-mono">Talk Duration:</span>
                <span className="font-bold text-black">30–45 / 60–90 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-600 font-mono">Location:</span>
                <span className="font-bold text-black">PRPCEM, Amravati</span>
              </div>
              <div className="pt-2 border-t-[1.5px] border-black">
                <button
                  type="button"
                  onClick={() => setShowCocModal(true)}
                  className="text-[11px] font-mono font-bold text-[#512BD4] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Review Speaker Code of Conduct</span>
                </button>
              </div>
            </div>
          </div>

          {/* Supported Tracks */}
          <div className="pt-8 text-left">
            <h4 className="text-sm font-black font-sans uppercase tracking-wider text-black mb-4">
              Accepted Topics &amp; Tracks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tracks.map((track, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#FAF8FF] border-[2px] border-black shadow-[2px_2px_0px_0px_#000]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h5 className="font-black text-sm text-black font-sans uppercase">{track.title}</h5>
                    <span className="text-[10px] font-mono font-bold text-[#512BD4] bg-white px-2 py-0.5 rounded-md border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000]">
                      {track.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">{track.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Code of Conduct Modal */}
      {showCocModal && (
        <CodeOfConductModal onClose={() => setShowCocModal(false)} />
      )}
    </section>
  );
};

export default CallForSpeakers;
