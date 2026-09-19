import React from 'react';
import { Cpu, Cloud, Zap } from 'lucide-react';
import DncSignpost from './DncSignpost.jsx';

export const DncTracks = () => {
  return (
    <section id="dnc-tracks" className="py-6 sm:py-10 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="CONFERENCE TRACKS" 
        badge="CURATED SESSIONS"
        theme="purple"
      />

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Track 1: Generative AI & Semantic Kernel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Main Card (Soft Lavender Tint #F6F0FE) */}
          <div className="md:col-span-7 bg-[#F6F0FE] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#512BD4] text-white border-[2px] border-black rounded-full px-3 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase shadow-[1.5px_1.5px_0px_0px_#000] mb-3 sm:mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>TRACK 01 • INTELLIGENT SYSTEMS</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2.5 sm:mb-3">
                Generative AI, Copilots & Semantic Kernel
              </h3>
              <p className="text-stone-800 font-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Explore how enterprise developers and student engineers are orchestrating autonomous agents, RAG (Retrieval-Augmented Generation) pipelines, and local SLMs using Microsoft Semantic Kernel in modern C#.
              </p>
              <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
                Learn to integrate Azure OpenAI, vector databases, and multi-modal models directly into your enterprise solutions without third-party python microservices.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t-[1.5px] sm:border-t-[2px] border-black/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#512BD4]">
              <span>SEMANTIC KERNEL</span>
              <span>AZURE OPENAI</span>
              <span>LOCAL SLMS</span>
            </div>
          </div>

          {/* Graphic Side Card */}
          <div className="md:col-span-5 bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#512BD4] border-[2px] sm:border-[2.5px] border-black flex items-center justify-center text-3xl sm:text-4xl shadow-[3px_3px_0px_0px_#000] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h4 className="text-lg sm:text-xl font-black font-sans text-black uppercase mb-1">
              AI In Production
            </h4>
            <p className="text-stone-600 text-xs font-sans max-w-xs mb-3 sm:mb-4">
              "Build intelligent copilot features into your existing C# codebases with zero friction."
            </p>
            <div className="bg-[#EEEAFB] border-[1.5px] sm:border-[2px] border-black rounded-xl px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#512BD4] shadow-[1.5px_1.5px_0px_0px_#000]">
              Hands-On Architecture
            </div>
          </div>
        </div>

        {/* Track 2: Cloud Native & Azure (Inverted Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Graphic Side Card */}
          <div className="order-2 md:order-1 md:col-span-5 bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00BDD6] border-[2px] sm:border-[2.5px] border-black flex items-center justify-center text-3xl sm:text-4xl shadow-[3px_3px_0px_0px_#000] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              ☁️
            </div>
            <h4 className="text-lg sm:text-xl font-black font-sans text-black uppercase mb-1">
              Cloud-Scale Systems
            </h4>
            <div className="flex flex-col gap-2 w-full max-w-xs mt-2 text-left">
              <div className="bg-[#E8FAFC] border-[1.5px] border-black rounded-lg p-2 text-[11px] sm:text-xs font-mono flex items-center justify-between">
                <span>⚡ ASP.NET Minimal APIs</span>
                <span className="text-[#00838F] font-bold">FAST</span>
              </div>
              <div className="bg-[#E8FAFC] border-[1.5px] border-black rounded-lg p-2 text-[11px] sm:text-xs font-mono flex items-center justify-between">
                <span>📦 Azure Container Apps</span>
                <span className="text-[#00838F] font-bold">SERVERLESS</span>
              </div>
              <div className="bg-[#E8FAFC] border-[1.5px] border-black rounded-lg p-2 text-[11px] sm:text-xs font-mono flex items-center justify-between">
                <span>🔄 gRPC Microservices</span>
                <span className="text-[#00838F] font-bold">STREAMING</span>
              </div>
            </div>
          </div>

          {/* Main Card (Soft Cyan Tint #E8FAFC) */}
          <div className="order-1 md:order-2 md:col-span-7 bg-[#E8FAFC] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#00BDD6] text-black border-[2px] border-black rounded-full px-3 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase shadow-[1.5px_1.5px_0px_0px_#000] mb-3 sm:mb-4">
                <Cloud className="w-3.5 h-3.5" />
                <span>TRACK 02 • CLOUD INFRASTRUCTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2.5 sm:mb-3">
                Modern Cloud Systems with ASP.NET Core & Azure
              </h3>
              <p className="text-stone-800 font-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Master resilient distributed architecture with Azure services, Redis distributed caching, RabbitMQ message buses, and Docker containerized deployments.
              </p>
              <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
                Discover how top engineering teams architect high-concurrency systems handling millions of transactions with 99.99% uptime.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t-[1.5px] sm:border-t-[2px] border-black/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#00838F]">
              <span>CONTAINER APPS</span>
              <span>DAPR RUNTIME</span>
              <span>DISTRIBUTED SYSTEMS</span>
            </div>
          </div>
        </div>

        {/* Track 3: Modern .NET 10 & C# 14 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Main Card (Soft Magenta Tint #FDF0FA) */}
          <div className="md:col-span-7 bg-[#FDF0FA] border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#D600AA] text-white border-[2px] border-black rounded-full px-3 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase shadow-[1.5px_1.5px_0px_0px_#000] mb-3 sm:mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>TRACK 03 • RUNTIME & PERFORMANCE</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2.5 sm:mb-3">
                High-Performance .NET 10 & C# 14
              </h3>
              <p className="text-stone-800 font-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Deep dive into Ahead-of-Time (Native AOT) compilation, memory efficiency, SIMD vectorization, collection expressions, and zero-allocation patterns that make .NET one of the fastest web engines in TechEmpower benchmarks.
              </p>
              <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
                Get up to speed with modern C# compiler innovations that help you write safer, more expressive, and lightning-fast software.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t-[1.5px] sm:border-t-[2px] border-black/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#D600AA]">
              <span>NATIVE AOT</span>
              <span>ZERO-ALLOCATION</span>
              <span>C# 14 COMPILER</span>
            </div>
          </div>

          {/* Graphic Side Card */}
          <div className="md:col-span-5 bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D600AA] border-[2px] sm:border-[2.5px] border-black flex items-center justify-center text-3xl sm:text-4xl shadow-[3px_3px_0px_0px_#000] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h4 className="text-lg sm:text-xl font-black font-sans text-black uppercase mb-1">
              Pure Speed
            </h4>
            <p className="text-stone-600 text-xs font-sans max-w-xs mb-3 sm:mb-4">
              Native executables starting in milliseconds with fraction of the memory footprint.
            </p>
            <div className="bg-[#FDF0FA] border-[1.5px] sm:border-[2px] border-black rounded-xl px-3 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#D600AA] shadow-[1.5px_1.5px_0px_0px_#000]">
              Benchmark Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncTracks;
