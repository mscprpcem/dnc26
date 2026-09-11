import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { LinkedInIcon, XIcon, GitHubIcon, YouTubeIcon } from '../ui/SocialIcons.jsx';
import { navigationItems, eventData } from '../../data/event.js';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] pt-16 pb-12 text-sm text-[#5F6368]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E5E7EB]">
          {/* Left: Brand, Location & Description */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#512BD4] text-white font-bold text-xs shadow-2xs font-mono">
                .NET
              </div>
              <span className="text-lg font-bold text-[#171717] tracking-tight">
                {eventData.name}
              </span>
            </div>

            <div className="text-xs font-semibold text-[#512BD4] mt-1">
              Amravati, Maharashtra, India
            </div>

            <p className="mt-3 text-xs text-[#5F6368] leading-relaxed max-w-sm">
              Central India's flagship community developer conference, organized by the Microsoft Student Club (MSC) at P. R. Pote Patil College of Engineering and Management (PRPCEM).
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href={eventData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={eventData.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors"
                aria-label="X Twitter"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href={eventData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={eventData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#5F6368] hover:text-[#512BD4] hover:bg-[#F7F7F8] border border-[#E5E7EB] transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center: Conference Navigation */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-3 font-mono">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#5F6368] hover:text-[#512BD4] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Community & Host links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-3 font-mono">
              Organizer
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href={eventData.organizer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#171717] hover:text-[#512BD4] flex items-center gap-1 transition-colors"
                >
                  <span>Microsoft Student Club PRPCEM</span>
                  <ExternalLink className="w-3 h-3 text-[#8A8F98]" />
                </a>
                <p className="text-[11px] text-[#8A8F98] mt-0.5">
                  1st Microsoft Student Club in Vidarbha
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://prpcem.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#171717] hover:text-[#512BD4] flex items-center gap-1 transition-colors"
                >
                  <span>PRPCEM Amravati</span>
                  <ExternalLink className="w-3 h-3 text-[#8A8F98]" />
                </a>
                <p className="text-[11px] text-[#8A8F98] mt-0.5">
                  Pote Patil Educational Hub
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8F98]">
          <p>© 2026 .NET Conf 2026. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Organized by</span>
            <span className="font-semibold text-[#171717]">MSC PRPCEM Community</span>
            <span>· Amravati, Maharashtra</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
