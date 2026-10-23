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
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F0EFFB] text-[#7046C8] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#A99AE8]/40">
            <Mic className="w-3.5 h-3.5" />
            <span>Official Sessionize Integration · Call for Proposals</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#292735] font-montserrat tracking-tight mb-2 leading-tight">
            Call for Speakers Now Open
          </h2>

          <p className="text-xs sm:text-sm text-[#292735]/80 font-inter leading-relaxed">
            All session submissions and speaker profiles are managed through <strong>Sessionize</strong>.
          </p>

          <div className="w-12 h-1 bg-[#7046C8] rounded-full mx-auto mt-3" />
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#A99AE8]/40 shadow-xs overflow-hidden p-5 sm:p-7 md:p-8 mb-8">
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-[#A99AE8]/30">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold text-[#7046C8] uppercase tracking-wider block mb-1">
                Managed on Sessionize
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-[#292735] mb-2">
                Submit Your Session Proposal
              </h3>
              <p className="text-xs sm:text-sm text-[#292735]/75 font-inter leading-relaxed mb-6">
                Submit your talk proposals directly on Sessionize for .NET Conf 2026 Amravati.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={SESSIONIZE_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold font-inter bg-[#7046C8] text-white hover:bg-[#5833A5] transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <Mic className="w-4 h-4" />
                  <span>Submit Talk on Sessionize</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href="#schedule"
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold font-inter bg-[#F0EFFB] text-[#7046C8] border border-[#A99AE8]/40 hover:bg-[#e7e3fa] transition-colors inline-flex items-center gap-2"
                >
                  <span>View Conference Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="w-full lg:w-72 bg-[#F0EFFB]/60 border border-[#A99AE8]/40 rounded-2xl p-5 shrink-0 text-xs font-inter space-y-3">
              <div className="font-bold font-montserrat text-[#292735] text-sm pb-2 border-b border-[#A99AE8]/30">
                CFP Key Information
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#292735]/70">Platform:</span>
                <a 
                  href={SESSIONIZE_PUBLIC_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-[#7046C8] hover:underline flex items-center gap-1"
                >
                  <span>sessionize.com/dnc26</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#292735]/70">Talk Duration:</span>
                <span className="font-semibold text-[#292735]">30–45 mins / 60–90 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#292735]/70">Location:</span>
                <span className="font-semibold text-[#292735]">PRPCEM, Amravati</span>
              </div>
              <div className="pt-2 border-t border-[#A99AE8]/30">
                <button
                  type="button"
                  onClick={() => setShowCocModal(true)}
                  className="text-[11px] text-[#7046C8] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Review Speaker Code of Conduct</span>
                </button>
              </div>
            </div>
          </div>

          {/* Supported Tracks */}
          <div className="pt-8">
            <h4 className="text-sm font-bold font-montserrat text-[#292735] uppercase tracking-wider mb-4">
              Accepted Topics &amp; Tracks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tracks.map((track, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F0EFFB]/30 border border-[#A99AE8]/30">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h5 className="font-bold text-sm text-[#292735] font-montserrat">{track.title}</h5>
                    <span className="text-[10px] font-bold text-[#7046C8] bg-white px-2 py-0.5 rounded border border-[#A99AE8]/30">
                      {track.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#292735]/70 font-inter">{track.desc}</p>
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
