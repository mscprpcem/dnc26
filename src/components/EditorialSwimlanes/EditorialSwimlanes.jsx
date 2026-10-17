import React from 'react';
import { Cpu, Sparkles, Layers, Cloud, Terminal, ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const EditorialSwimlanes = () => {
  return (
    <section id="overview" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Track 1: Runtime & Cloud Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center border-t border-[#DCD5F6]/70 pt-8 sm:pt-12 first:border-t-0 first:pt-0">
          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-center text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#DCD5F6] w-fit">
              <Cpu className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>{eventData.editorialSections[0].tag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] leading-tight mb-4">
              {eventData.editorialSections[0].title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#190649]/80 font-normal leading-relaxed">
              {eventData.editorialSections[0].description}
            </p>
          </div>

          {/* Visual Column */}
          <div className="md:col-span-5 flex items-center justify-center relative order-1 md:order-2">
            <div className="w-full max-w-[340px] rounded-2xl bg-gradient-to-br from-[#FAF8FF] to-[#EEEAFB] border-2 border-[#D8CEF7] p-6 shadow-md text-left">
              <div className="w-12 h-12 rounded-xl bg-[#512BD4] text-white flex items-center justify-center mb-4 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#14053A] mb-2 font-display">Modern .NET & Cloud</h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Native AOT, memory performance, and distributed systems with Azure & .NET 11.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold text-[#512BD4]">
                <span className="bg-white px-2 py-1 rounded border border-[#D8CEF7]">.NET 11</span>
                <span className="bg-white px-2 py-1 rounded border border-[#D8CEF7]">C# 14</span>
                <span className="bg-white px-2 py-1 rounded border border-[#D8CEF7]">Azure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Track 2: Autonomous AI & Copilots */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center border-t border-[#DCD5F6]/70 pt-8 sm:pt-12">
          {/* Visual Column */}
          <div className="md:col-span-5 flex items-center justify-center relative order-1">
            <div className="w-full max-w-[340px] rounded-2xl bg-gradient-to-br from-[#E8FAFC] to-[#D5F5F9] border-2 border-[#B2EBF2] p-6 shadow-md text-left">
              <div className="w-12 h-12 rounded-xl bg-[#00838F] text-white flex items-center justify-center mb-4 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#14053A] mb-2 font-display">Generative AI & Agents</h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Autonomous multi-agent workflows, vector RAG search, and Semantic Kernel.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold text-[#00838F]">
                <span className="bg-white px-2 py-1 rounded border border-[#B2EBF2]">Semantic Kernel</span>
                <span className="bg-white px-2 py-1 rounded border border-[#B2EBF2]">Azure OpenAI</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-center text-left order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#DCD5F6] w-fit">
              <Layers className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>{eventData.editorialSections[1].tag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] leading-tight mb-4">
              {eventData.editorialSections[1].title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#190649]/80 font-normal leading-relaxed">
              {eventData.editorialSections[1].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialSwimlanes;
