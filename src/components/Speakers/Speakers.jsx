import React from 'react';
import { Tag } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Badge } from '../ui/Badge.jsx';
import { LinkedInIcon, XIcon, GitHubIcon } from '../ui/SocialIcons.jsx';
import { speakersData } from '../../data/speakers.js';

export const Speakers = () => {
  const getTrackBadge = (index) => {
    const tracks = [
      { name: 'Cloud Native', variant: 'blue' },
      { name: 'AI & Copilots', variant: 'purple' },
      { name: 'Performance', variant: 'neutral' },
      { name: 'Serverless', variant: 'blue' },
      { name: 'DevOps & SRE', variant: 'neutral' },
      { name: 'Full-Stack .NET', variant: 'purple' },
    ];
    return tracks[index % tracks.length];
  };

  return (
    <section id="speakers" className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="SPEAKERS"
          title="Meet the people shaping the conversation."
          description="Software engineers from Microsoft, enterprise architects, and Microsoft MVPs delivering deep technical sessions at PRPCEM Amravati."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {speakersData.map((speaker, index) => {
            const track = getTrackBadge(index);
            return (
              <div
                key={speaker.id}
                className="conf-card group overflow-hidden flex flex-col bg-white border border-[#E5E7EB] hover:border-[#512BD4]/40 transition-all duration-200 hover:-translate-y-1 h-full"
              >
                {/* Speaker Photo */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F7F7F8]">
                  <img
                    src={speaker.avatarUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Company Badge Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-xs font-semibold text-[#171717] shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
                    <span>{speaker.organization}</span>
                  </div>

                  {/* Topic Track Tag Overlay */}
                  <div className="absolute top-2.5 right-2.5">
                    <Badge variant={track.variant} size="sm">
                      {track.name}
                    </Badge>
                  </div>
                </div>

                {/* Speaker Body - strict uniform flex layout */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#512BD4] transition-colors leading-snug">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#512BD4] mt-0.5">
                      {speaker.designation}
                    </p>

                    <div className="mt-3 pt-3 border-t border-[#E5E7EB]">
                      <div className="text-[10px] font-mono font-bold text-[#8A8F98] uppercase tracking-wider flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#512BD4]" />
                        <span>SESSION TOPIC</span>
                      </div>
                      <p className="text-xs font-medium text-[#171717] mt-1 leading-snug min-h-[32px]">
                        {speaker.topic}
                      </p>
                    </div>
                  </div>

                  {/* Social Links - aligned at bottom */}
                  {speaker.socials && (
                    <div className="mt-5 pt-3.5 border-t border-[#E5E7EB]/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {speaker.socials.linkedin && (
                          <a
                            href={speaker.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] transition-colors"
                            aria-label={`${speaker.name} LinkedIn`}
                          >
                            <LinkedInIcon className="w-4 h-4" />
                          </a>
                        )}
                        {speaker.socials.x && (
                          <a
                            href={speaker.socials.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] transition-colors"
                            aria-label={`${speaker.name} X Profile`}
                          >
                            <XIcon className="w-4 h-4" />
                          </a>
                        )}
                        {speaker.socials.github && (
                          <a
                            href={speaker.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] transition-colors"
                            aria-label={`${speaker.name} GitHub`}
                          >
                            <GitHubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <span className="text-[10px] font-mono font-semibold text-[#8A8F98] bg-[#F7F7F8] px-2 py-0.5 rounded border border-[#E5E7EB]">
                        Amravati
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Speakers;
