import React, { useState } from 'react';
import { Mail, ArrowRight, Copy, Check, Users, MapPin } from 'lucide-react';
import {
  LinkedInIcon,
  LinktreeIcon,
  GitHubIcon,
  YouTubeIcon,
  InstagramIcon,
  WhatsAppIcon,
  XIcon,
} from '../ui/SocialIcons.jsx';
import { eventData } from '../../data/event.js';

export const DncCommunity = () => {
  const [copied, setCopied] = useState(false);

  const channels = [
    {
      name: 'WhatsApp',
      desc: 'Instant Alerts & Community Chat',
      href: eventData.socialLinks.whatsapp,
      icon: WhatsAppIcon,
      iconBg: 'bg-[#25D366] text-white',
    },
    {
      name: 'LinkedIn',
      desc: 'Speaker Decks & Professional News',
      href: eventData.socialLinks.linkedin,
      icon: LinkedInIcon,
      iconBg: 'bg-[#0A66C2] text-white',
    },
    {
      name: 'Instagram',
      desc: 'Campus Life & Live Photo Highlights',
      href: eventData.socialLinks.instagram,
      icon: InstagramIcon,
      iconBg: 'bg-[#E1306C] text-white',
    },
    {
      name: 'YouTube',
      desc: 'Keynote Replays & Workshop Sessions',
      href: eventData.socialLinks.youtube,
      icon: YouTubeIcon,
      iconBg: 'bg-[#FF0000] text-white',
    },
    {
      name: 'GitHub',
      desc: 'Conference Code Repos & Demos',
      href: eventData.socialLinks.github,
      icon: GitHubIcon,
      iconBg: 'bg-black text-white',
    },
    {
      name: 'Linktree',
      desc: 'Direct Access to All Resources',
      href: eventData.socialLinks.linktree,
      icon: LinktreeIcon,
      iconBg: 'bg-[#20D048] text-black',
    },
    {
      name: 'X (Twitter)',
      desc: 'Live Event Updates & Highlights',
      href: 'https://x.com/mscprpcem',
      icon: XIcon,
      iconBg: 'bg-black text-white',
    },
    {
      name: 'Email Support',
      desc: 'Sponsorships & Queries',
      href: `mailto:${eventData.contactEmail}`,
      icon: Mail,
      iconBg: 'bg-[#512BD4] text-white',
      isEmail: true,
    },
  ];

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText('#DNC26');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="community" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">

      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
          <span className="text-black uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#FFEBF7] text-[#D600AA] flex items-center gap-1.5">
          <span>⚡</span>
          <span>AMRAVATI EDITION</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <MapPin className="w-3 h-3 text-[#512BD4]" />
          <span className="text-black uppercase tracking-wider">AMRAVATI, INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-white text-black flex items-center gap-1.5">
          <Users className="w-3 h-3 text-[#512BD4]" />
          <span>MSC PRPCEM</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          DEVELOPERS • COMMUNITY • INNOVATION
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 z-10">
          <span className="bg-[#00E5FF] text-black text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            MSC PRPCEM
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            COMMUNITY CHANNELS
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Main Neo-Brutalist Community Card */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] max-w-5xl mx-auto">
        {/* Header inside card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-200">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-black font-sans uppercase leading-tight">
                FOLLOW &amp; CONNECT
              </h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
                Stay updated with announcements, community activities, technical content and much more.
              </p>
              <span className="text-xs font-mono font-bold text-[#512BD4] block mt-0.5">
                @mscprpcem
              </span>
            </div>
          </div>

          {/* Hashtag badge on right with burst decoration */}
          <div className="relative shrink-0 self-end sm:self-center">
            <div className="flex justify-end gap-1 mb-1 absolute -top-3.5 right-1">
              <span className="w-1 h-2 bg-[#512BD4] rotate-[-25deg] rounded-full inline-block" />
              <span className="w-1 h-2.5 bg-[#512BD4] rounded-full inline-block" />
              <span className="w-1 h-2 bg-[#512BD4] rotate-[25deg] rounded-full inline-block" />
            </div>
            <button
              onClick={handleCopyHashtags}
              className="bg-white hover:bg-[#FAF8FF] text-black font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
              title="Click to copy hashtag"
            >
              <span className="w-5 h-5 rounded-md bg-[#512BD4] text-white flex items-center justify-center text-xs font-black">#</span>
              <span>{copied ? 'COPIED!' : '#DNC26'}</span>
            </button>
          </div>
        </div>

        {/* 8 Social Buttons Grid (2 rows of 4) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="bg-white hover:bg-stone-50 border-[2px] border-black rounded-2xl p-3 sm:p-3.5 shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl border border-black/20 flex items-center justify-center shrink-0 shadow-sm ${ch.iconBg}`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="text-xs sm:text-[13px] font-bold font-sans text-black group-hover:text-[#512BD4] transition-colors truncate block leading-snug">
                      {ch.name}
                    </span>
                    <span className="text-[10px] text-stone-500 font-sans truncate block mt-0.5">
                      {ch.desc}
                    </span>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#FAF9FF] text-stone-500 group-hover:text-[#512BD4] group-hover:bg-[#EEEAFB] flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DncCommunity;
