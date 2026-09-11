import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { Button } from '../ui/Button.jsx';
import { LinkedInIcon, XIcon, GitHubIcon } from '../ui/SocialIcons.jsx';
import { keynoteSpeaker } from '../../data/speakers.js';

export const Keynote = () => {
  const highlights = [
    '.NET 9 & .NET 10 architectural roadmap, runtime optimizations, and benchmarks',
    'Developing intelligent AI Copilots with Microsoft Semantic Kernel & C#',
    'Real-world cloud-native migration strategies using Azure Container Apps & Aspire',
  ];

  return (
    <section id="keynote" className="py-16 sm:py-20 lg:py-24 bg-[#F7F7F8] border-b border-[#E5E7EB]">
      <Container>
        {/* Keynote Card with subtle purple accent border */}
        <div className="relative rounded-2xl bg-white border border-[#DDD4FA] shadow-lg overflow-hidden p-5 sm:p-8 lg:p-10">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-[#512BD4] via-[#7B59EC] to-[#0078D4]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: Large Professional Speaker Image */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-square max-w-md mx-auto lg:max-w-none bg-[#F7F7F8] border border-[#E5E7EB] shadow-xs group">
                <img
                  src={keynoteSpeaker.avatarUrl}
                  alt={keynoteSpeaker.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#512BD4] text-white text-xs font-semibold tracking-wider uppercase font-mono shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Keynote Speaker
                </div>
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-xs font-medium text-[#171717] flex items-center justify-between shadow-xs">
                  <span className="font-semibold">{keynoteSpeaker.name}</span>
                  <span className="text-[#512BD4] font-mono text-[11px] font-bold">Microsoft MVP</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Keynote Details */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#512BD4] uppercase mb-2">
                <Award className="w-4 h-4 text-[#512BD4]" />
                <span>CONFERENCE OPENING KEYNOTE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
                {keynoteSpeaker.topic}
              </h2>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5F6368]">
                <span className="text-base font-bold text-[#171717]">
                  {keynoteSpeaker.name}
                </span>
                <span className="text-[#E5E7EB]">·</span>
                <span className="font-semibold text-[#512BD4]">
                  {keynoteSpeaker.designation}
                </span>
                <span className="text-[#E5E7EB]">·</span>
                <span>{keynoteSpeaker.organization}</span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#5F6368] leading-relaxed">
                {keynoteSpeaker.bio}
              </p>

              {/* Keynote Highlights Checklist */}
              <div className="mt-5 space-y-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Speaker Actions & Socials - Perfectly Aligned */}
              <div className="mt-6 pt-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#agenda"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  View in Agenda
                </Button>

                {keynoteSpeaker.socials && (
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs text-[#8A8F98] mr-1 hidden sm:inline">Connect:</span>
                    {keynoteSpeaker.socials.linkedin && (
                      <a
                        href={keynoteSpeaker.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors flex items-center justify-center"
                        aria-label={`${keynoteSpeaker.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                    )}
                    {keynoteSpeaker.socials.x && (
                      <a
                        href={keynoteSpeaker.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors flex items-center justify-center"
                        aria-label={`${keynoteSpeaker.name} X Profile`}
                      >
                        <XIcon className="w-4 h-4" />
                      </a>
                    )}
                    {keynoteSpeaker.socials.github && (
                      <a
                        href={keynoteSpeaker.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors flex items-center justify-center"
                        aria-label={`${keynoteSpeaker.name} GitHub`}
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Keynote;
