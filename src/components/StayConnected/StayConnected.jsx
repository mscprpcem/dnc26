import React from 'react';
import { Globe, Mail } from 'lucide-react';
import { LinkedInIcon, LinktreeIcon, GitHubIcon, YouTubeIcon, InstagramIcon } from '../ui/SocialIcons.jsx';
import { eventData } from '../../data/event.js';

export const StayConnected = () => {
  const channels = [
    {
      name: 'Official Email',
      handle: 'dotnetconfamt@prpotepatilengg.ac.in',
      href: eventData.socialLinks.email,
      icon: Mail,
      hoverClass: 'hover:bg-[#512BD4] hover:text-white',
      badge: 'Official Contact',
      isEmail: true,
    },
    {
      name: 'Linktree Hub',
      handle: 'linktr.ee/mscprpcem',
      href: eventData.socialLinks.linktree,
      icon: LinktreeIcon,
      hoverClass: 'hover:bg-[#43E660] hover:text-[#14053A]',
      badge: 'All Links & Resources',
    },
    {
      name: 'LinkedIn',
      handle: 'mscprpcem',
      href: eventData.socialLinks.linkedin,
      icon: LinkedInIcon,
      hoverClass: 'hover:bg-[#0A66C2] hover:text-white',
      badge: 'Professional Network',
    },
    {
      name: 'GitHub',
      handle: 'mscprpcem',
      href: eventData.socialLinks.github,
      icon: GitHubIcon,
      hoverClass: 'hover:bg-[#24292E] hover:text-white',
      badge: 'Open Source Repos',
    },
    {
      name: 'YouTube',
      handle: '@mscprpcem',
      href: eventData.socialLinks.youtube,
      icon: YouTubeIcon,
      hoverClass: 'hover:bg-[#DC2626] hover:text-white',
      badge: 'Livestream & Keynotes',
    },
    {
      name: 'Instagram',
      handle: '@mscprpcem',
      href: eventData.socialLinks.instagram,
      icon: InstagramIcon,
      hoverClass: 'hover:bg-[#E1306C] hover:text-white',
      badge: 'Campus Life & Stories',
    },
  ];

  return (
    <section id="stay-connected" className="w-full py-12 sm:py-16 text-center scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organizer Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
          <Globe className="w-3.5 h-3.5 text-[#512BD4]" />
          <span>Microsoft Student Club @ PRPCEM</span>
        </div>

        {/* Official Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#14053A] tracking-tight mb-2 sm:mb-3">
          Follow & Connect With{' '}
          <span className="community-event-gradient-text">MSC PRPCEM</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#190649]/80 mb-8 max-w-xl mx-auto leading-relaxed">
          Connect with Microsoft Student Club PRPCEM on Linktree, LinkedIn, GitHub, YouTube, Instagram, and official email for all announcements.
        </p>

        {/* Official Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group bg-white/90 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-[#DCD5F6] shadow-xs flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${ch.hoverClass}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEEAFB] flex items-center justify-center text-[#512BD4] group-hover:bg-white/20 group-hover:text-inherit transition-colors shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-xs font-bold font-display text-[#14053A] group-hover:text-inherit transition-colors">
                      {ch.name}
                    </span>
                    <span className="text-[9px] font-semibold text-[#5F6368] group-hover:text-inherit/80 uppercase tracking-wider block transition-colors shrink-0">
                      {ch.badge}
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#512BD4] group-hover:text-inherit font-medium truncate transition-colors">
                    {ch.handle}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StayConnected;
