import React from 'react';
import { Globe, Mail, ArrowUpRight, Users } from 'lucide-react';
import { LinkedInIcon, LinktreeIcon, GitHubIcon, YouTubeIcon, InstagramIcon, WhatsAppIcon, XIcon } from '../ui/SocialIcons.jsx';
import { eventData } from '../../data/event.js';

export const StayConnected = () => {
  const channels = [
    {
      name: 'WhatsApp Community',
      desc: 'Instant Alerts & Community Chat',
      href: eventData.socialLinks.whatsapp,
      icon: WhatsAppIcon,
      iconBg: 'bg-[#25D366] text-white',
      borderHover: 'hover:border-[#25D366] hover:shadow-[#25D366]/20',
    },
    {
      name: 'LinkedIn',
      desc: 'Professional Network & Updates',
      href: eventData.socialLinks.linkedin,
      icon: LinkedInIcon,
      iconBg: 'bg-[#0A66C2] text-white',
      borderHover: 'hover:border-[#0A66C2] hover:shadow-[#0A66C2]/20',
    },
    {
      name: 'Instagram',
      desc: 'Behind the Scenes & Reels',
      href: eventData.socialLinks.instagram,
      icon: InstagramIcon,
      iconBg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white',
      borderHover: 'hover:border-[#E1306C] hover:shadow-[#E1306C]/20',
    },
    {
      name: 'YouTube',
      desc: 'Session Recordings & Live Streams',
      href: eventData.socialLinks.youtube,
      icon: YouTubeIcon,
      iconBg: 'bg-[#FF0000] text-white',
      borderHover: 'hover:border-red-600 hover:shadow-red-600/20',
    },
    {
      name: 'GitHub',
      desc: 'Conference Code & Demos',
      href: eventData.socialLinks.github,
      icon: GitHubIcon,
      iconBg: 'bg-[#181717] text-white',
      borderHover: 'hover:border-slate-800 hover:shadow-slate-800/20',
    },
    {
      name: 'Linktree',
      desc: 'All Resources & Official Links',
      href: eventData.socialLinks.linktree,
      icon: LinktreeIcon,
      iconBg: 'bg-[#20D048] text-[#063311]',
      borderHover: 'hover:border-[#20D048] hover:shadow-[#20D048]/20',
    },
    {
      name: 'X (Twitter)',
      desc: 'Live Tweets & Announcements',
      href: 'https://x.com/mscprpcem',
      icon: XIcon,
      iconBg: 'bg-[#180805] text-[#FAF7F2]',
      borderHover: 'hover:border-black hover:shadow-black/20',
    },
    {
      name: 'Official Email',
      desc: 'Delegate & Speaker Queries',
      href: `mailto:${eventData.contactEmail}`,
      icon: Mail,
      iconBg: 'bg-[#512BD4] text-white',
      borderHover: 'hover:border-[#512BD4] hover:shadow-[#512BD4]/20',
      isEmail: true,
    },
  ];

  return (
    <section id="stay-connected" className="w-full py-12 sm:py-16 text-center scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Community Header Emblem */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#512BD4] text-white flex items-center justify-center shadow-lg shadow-[#512BD4]/25">
            <Users className="w-7 h-7" />
          </div>
        </div>

        {/* Organizer Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border-2 border-[#DCD5F6] shadow-2xs">
          <Globe className="w-3.5 h-3.5 text-[#512BD4]" />
          <span>Microsoft Student Club PRPCEM</span>
        </div>

        {/* Official Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#14053A] tracking-tight mb-2 sm:mb-3">
          Follow & Connect With{' '}
          <span className="community-event-gradient-text">MSC PRPCEM</span>
        </h2>

        <p className="text-sm sm:text-base text-[#14053A]/85 font-medium mb-8 max-w-xl mx-auto leading-relaxed">
          Stay connected with our official channels for updates, announcements, and developer discussions.
        </p>

        {/* Simplified Social Links Grid: Just Logo and Name Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group bg-white rounded-xl p-3.5 sm:p-4 border border-[#DCD5F6] shadow-2xs flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${ch.borderHover}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0 ${ch.iconBg}`}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-sm font-bold font-display text-[#14053A] group-hover:text-[#512BD4] transition-colors truncate">
                    {ch.name}
                  </span>
                  <span className="text-[11px] text-[#190649]/65 font-sans truncate">
                    {ch.desc}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C7BD8]/60 group-hover:text-[#512BD4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto shrink-0" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StayConnected;

