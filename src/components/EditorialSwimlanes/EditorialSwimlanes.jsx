import React from 'react';
import { Cpu, Sparkles, CheckCircle2, Code2, Users } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const EditorialSwimlanes = () => {
  const swimlaneVisuals = [
    {
      icon: Cpu,
      iconBg: 'bg-[#512BD4] text-white',
      cardBg: 'from-[#FAF8FF] to-[#EEEAFB] border-[#D8CEF7]',
      textColor: 'text-[#512BD4]',
      badgeColor: 'border-[#D8CEF7]',
      tags: ['.NET 11', 'C# 14', '.NET Aspire', 'Native AOT'],
      bullets: [
        'Native AOT compilation with sub-millisecond cold starts',
        '.NET Aspire distributed orchestration and telemetry',
        'Enterprise microservices with Azure Container Apps',
      ],
    },
    {
      icon: Sparkles,
      iconBg: 'bg-[#00838F] text-white',
      cardBg: 'from-[#E8FAFC] to-[#D5F5F9] border-[#B2EBF2]',
      textColor: 'text-[#00838F]',
      badgeColor: 'border-[#B2EBF2]',
      tags: ['Semantic Kernel', 'Azure OpenAI', 'pgvector', 'SLMs'],
      bullets: [
        'Autonomous multi-agent loops with Microsoft Semantic Kernel',
        'Enterprise RAG patterns with Azure OpenAI & vector databases',
        'Local SLM inference on ONNX Runtime and Ollama',
      ],
    },
    {
      icon: Code2,
      iconBg: 'bg-[#6D28D9] text-white',
      cardBg: 'from-[#F5F3FF] to-[#EDE9FE] border-[#DDD6FE]',
      textColor: 'text-[#6D28D9]',
      badgeColor: 'border-[#DDD6FE]',
      tags: ['VS 2025', 'GitHub Actions', 'Blazor WASM', 'CI/CD'],
      bullets: [
        'Visual Studio 2025 multi-root productivity features',
        'Enterprise CI/CD automation with GitHub Actions',
        'Full-stack interactive web apps with Blazor WebAssembly',
      ],
    },
    {
      icon: Users,
      iconBg: 'bg-[#C2410C] text-white',
      cardBg: 'from-[#FFF7ED] to-[#FFEDD5] border-[#FED7AA]',
      textColor: 'text-[#C2410C]',
      badgeColor: 'border-[#FED7AA]',
      tags: ['Microsoft MVPs', 'PRPCEM', 'Vidarbha', 'Mentorship'],
      bullets: [
        'Keynotes & AMAs from Microsoft MVPs and cloud architects',
        '1-on-1 portfolio & architecture reviews with senior engineers',
        'Regional hackathon project showcase and student awards',
      ],
    },
  ];

  return (
    <section id="overview" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        
        {eventData.editorialSections.map((section, idx) => {
          const visual = swimlaneVisuals[idx] || swimlaneVisuals[0];
          const IconComp = visual.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center border-t border-[#DCD5F6]/70 pt-8 sm:pt-12 first:border-t-0 first:pt-0"
            >
              {/* Content Column */}
              <div className={`md:col-span-7 flex flex-col justify-center text-left ${isEven ? 'order-2 md:order-1' : 'order-2'}`}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#DCD5F6] w-fit">
                  <IconComp className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>{section.tag}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] leading-tight mb-4">
                  {section.title}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-[#190649]/80 font-normal leading-relaxed mb-5">
                  {section.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2">
                  {visual.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#190649]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Card Column */}
              <div className={`md:col-span-5 flex items-center justify-center relative ${isEven ? 'order-1 md:order-2' : 'order-1'}`}>
                <div className={`w-full max-w-[360px] rounded-2xl bg-gradient-to-br ${visual.cardBg} border-2 p-6 shadow-md text-left`}>
                  <div className={`w-12 h-12 rounded-xl ${visual.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#14053A] mb-2 font-display">
                    {section.title}
                  </h3>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 text-[11px] font-mono font-bold ${visual.textColor}`}>
                    {visual.tags.map((t, tIdx) => (
                      <span key={tIdx} className={`bg-white px-2 py-1 rounded border ${visual.badgeColor}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default EditorialSwimlanes;
