import React, { useState } from 'react';
import { Code2, Globe, Layers, Smartphone, Zap, ArrowRight, Bot } from 'lucide-react';
import { eventData } from '../../data/event.js';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Layers: Layers,
  Bot: Bot,
  Smartphone: Smartphone,
  Zap: Zap,
};

export const Topics = () => {
  const topicsList = eventData?.topics || [];
  const [activeTopic, setActiveTopic] = useState(topicsList[0]?.id || 'csharp14');

  return (
    <section id="topics" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Zap className="w-3 h-3" />
            <span>Platform Evolution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-3">
            What's Launching in <span className="text-gradient-magenta">{eventData.launchVersion}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#190649]/75 leading-relaxed">
            From compiler advancements to cloud-native observability and autonomous AI agents, explore the innovations driving modern .NET development.
          </p>
        </div>

        {/* 6-Grid Topic Cards - Balanced sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {topicsList.map((topic) => {
            const IconComponent = iconMap[topic.icon] || Code2;
            const isSelected = activeTopic === topic.id;

            return (
              <div
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`relative group rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'bg-white border-2 border-[#512BD4] shadow-md shadow-[#512BD4]/15 -translate-y-0.5'
                    : 'bg-white/80 backdrop-blur-sm border border-[#DCD5F6]/80 hover:border-[#9780E5] hover:shadow-sm'
                }`}
              >
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105 duration-200"
                    style={{ backgroundColor: topic.color }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] border border-[#DCD5F6]/70">
                    {topic.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold font-display text-[#14053A] group-hover:text-[#512BD4] transition-colors mb-2">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#190649]/75 leading-relaxed mb-4">
                  {topic.description}
                </p>

                {/* Footer link accent */}
                <div className="pt-3 border-t border-[#DCD5F6]/50 flex items-center text-xs font-bold text-[#512BD4] gap-1 group-hover:gap-1.5 transition-all">
                  <span>Explore in .NET 11</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
