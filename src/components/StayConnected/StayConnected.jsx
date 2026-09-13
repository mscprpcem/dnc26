import React from 'react';
import { Globe, Mail, ArrowUpRight, MessageSquare } from 'lucide-react';
import { LinkedInIcon, LinktreeIcon, GitHubIcon, YouTubeIcon, InstagramIcon } from '../ui/SocialIcons.jsx';
import { eventData } from '../../data/event.js';

export const StayConnected = () => {
  const channels = [
    {
      name: 'Official Email',
      handle: 'dotnetconfamt@prpotepatilengg.ac.in',
      href: eventData.socialLinks.email,
      icon: Mail,
      badge: 'Official Contact',
      badgeClass: 'bg-[#512BD4]/10 text-[#512BD4] border-[#512BD4]/30',
      iconBg: 'bg-[#512BD4] text-white shadow-xs',
      borderHover: 'hover:border-[#512BD4] hover:shadow-md hover:shadow-[#512BD4]/15',
      isEmail: true,
    },
    {
      name: 'LinkedIn',
      handle: 'company/mscprpcem',
      href: eventData.socialLinks.linkedin,
      icon: LinkedInIcon,
      badge: 'Professional Network',
      badgeClass: 'bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/30',
      iconBg: 'bg-[#0A66C2] text-white shadow-xs',
      borderHover: 'hover:border-[#0A66C2] hover:shadow-md hover:shadow-[#0A66C2]/15',
    },
    {
      name: 'Linktree Hub',
      handle: 'linktr.ee/mscprpcem',
      href: eventData.socialLinks.linktree,
      icon: LinktreeIcon,
      badge: 'All Community Links',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      iconBg: 'bg-[#20D048] text-[#063311] shadow-xs',
      borderHover: 'hover:border-[#20D048] hover:shadow-md hover:shadow-[#20D048]/15',
    },
    {
      name: 'GitHub',
      handle: 'github.com/mscprpcem',
      href: eventData.socialLinks.github,
      icon: GitHubIcon,
      badge: 'Open Source Repos',
      badgeClass: 'bg-slate-100 text-slate-900 border-slate-300',
      iconBg: 'bg-[#181717] text-white shadow-xs',
      borderHover: 'hover:border-slate-800 hover:shadow-md hover:shadow-slate-800/15',
    },
    {
      name: 'YouTube',
      handle: '@mscprpcem',
      href: eventData.socialLinks.youtube,
      icon: YouTubeIcon,
      badge: 'Sessions & Recaps',
      badgeClass: 'bg-red-50 text-red-700 border-red-200',
      iconBg: 'bg-[#FF0000] text-white shadow-xs',
      borderHover: 'hover:border-red-600 hover:shadow-md hover:shadow-red-600/15',
    },
    {
      name: 'Instagram',
      handle: '@mscprpcem',
      href: eventData.socialLinks.instagram,
      icon: InstagramIcon,
      badge: 'Campus Life & Stories',
      badgeClass: 'bg-pink-50 text-pink-700 border-pink-200',
      iconBg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white shadow-xs',
      borderHover: 'hover:border-[#E1306C] hover:shadow-md hover:shadow-[#E1306C]/15',
    },
  ];

  return (
    <section id="stay-connected" className="w-full py-12 sm:py-16 text-center scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mascot Greeting (Steady, clean, natural size) */}
        <div className="flex justify-center mb-5">
          <div className="relative w-36 sm:w-44 select-none">
            <img
              src="/mascot/dotnet-bot-surfing.png"
              alt=".NET Bot Surfing the Community"
              className="w-full h-auto drop-shadow-md select-none"
            />
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
          Stay connected with our official channels for early speaker announcements, registration drops, workshops, and community updates.
        </p>

        {/* Official Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group bg-white rounded-2xl p-5 border-2 border-[#E2DCF8] shadow-xs flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${ch.borderHover}`}
              >
                {/* Top Row: Brand Icon + Category Badge + Arrow */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shrink-0 ${ch.iconBg}`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className={`text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap ${ch.badgeClass}`}
                    >
                      {ch.badge}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#EEEAFB] group-hover:bg-[#512BD4] group-hover:text-white text-[#512BD4] flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Bottom Info: Channel Title & Handle */}
                <div className="text-left pt-2.5 border-t border-[#F0ECFC]">
                  <span className="text-sm sm:text-base font-bold font-display text-[#14053A] group-hover:text-[#512BD4] transition-colors block leading-snug">
                    {ch.name}
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#512BD4] truncate block mt-0.5 group-hover:underline">
                    {ch.handle}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer info bar */}
        <div className="mt-8 pt-6 border-t border-[#DCD5F6]/70 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#14053A]">
          <span className="text-[#512BD4] font-bold">Official Hashtag:</span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#DCD5F6] shadow-2xs text-[#512BD4] font-mono font-bold">
            #dotnetconfamt
          </span>
          <span className="text-[#14053A]/40 hidden sm:inline">·</span>
          <span>
            Direct queries:{' '}
            <a
              href={`mailto:${eventData.contactEmail}`}
              className="text-[#512BD4] hover:underline font-bold"
            >
              {eventData.contactEmail}
            </a>
          </span>
        </div>

      </div>
    </section>
  );
};

export default StayConnected;

