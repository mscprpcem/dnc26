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
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';

export const DncCommunity = () => {
  const [copied, setCopied] = useState(false);

  const channels = [
    {
      name: 'WhatsApp',
      href: eventData.socialLinks.whatsapp,
      icon: WhatsAppIcon,
      iconBg: 'bg-[#25D366] text-white',
    },
    {
      name: 'LinkedIn',
      href: eventData.socialLinks.linkedin,
      icon: LinkedInIcon,
      iconBg: 'bg-[#0A66C2] text-white',
    },
    {
      name: 'Instagram',
      href: eventData.socialLinks.instagram,
      icon: InstagramIcon,
      iconBg: 'bg-[#E1306C] text-white',
    },
    {
      name: 'YouTube',
      href: eventData.socialLinks.youtube,
      icon: YouTubeIcon,
      iconBg: 'bg-[#FF0000] text-white',
    },
    {
      name: 'GitHub',
      href: eventData.socialLinks.github,
      icon: GitHubIcon,
      iconBg: 'bg-[#180805] text-[#FAF7F2]',
    },
    {
      name: 'Linktree',
      href: eventData.socialLinks.linktree,
      icon: LinktreeIcon,
      iconBg: 'bg-[#20D048] text-black',
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/mscprpcem',
      icon: XIcon,
      iconBg: 'bg-[#180805] text-[#FAF7F2]',
    },
    {
      name: 'Email',
      href: `mailto:${eventData.contactEmail}`,
      icon: Mail,
      iconBg: 'bg-[#C84832] text-white',
      isEmail: true,
    },
  ];

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText('#DNC26 #WarliEdition');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="community" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">

      {/* Decorative Warli Glyphs */}
      <div className="absolute top-16 right-16 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-24 right-10 text-[#FAF7F2]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 -left-6 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-20 -right-6 text-[#FAF7F2] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">.NET CONF 2026</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <span>🌾</span>
          <span>TARPA COMMUNITY</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <MapPin className="w-3 h-3 text-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">AMRAVATI, INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <Users className="w-3 h-3 text-[#180805]" />
          <span>MSC PRPCEM</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          DEVELOPERS • INNOVATION
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase">
            MSC PRPCEM
          </span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            COMMUNITY CHANNELS
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
        </div>
      </div>

      {/* Main Warli Community Card */}
      <div className="bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] max-w-5xl mx-auto relative overflow-hidden">
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* Header inside card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#FAF7F2]/20">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#38130D] text-[#E5A93C] border-[1.5px] border-[#FAF7F2] flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#120402] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#FAF7F2] font-sans uppercase leading-tight">
                FOLLOW &amp; CONNECT
              </h3>
              <p className="text-xs text-[#FAF7F2]/75 font-sans mt-0.5">
                Stay updated with announcements, community activities, technical content and much more.
              </p>
              <span className="text-xs font-mono font-bold text-[#E5A93C] block mt-0.5">
                @mscprpcem
              </span>
            </div>
          </div>

          {/* Hashtag badge on right */}
          <div className="relative shrink-0 self-end sm:self-center">
            <button
              onClick={handleCopyHashtags}
              className="bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-[2px] border-[#FAF7F2] shadow-[3px_3px_0px_0px_#120402] flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
              title="Click to copy hashtag"
            >
              <span className="w-5 h-5 rounded-md bg-[#180805] text-[#E5A93C] flex items-center justify-center text-xs font-black">#</span>
              <span>{copied ? 'COPIED!' : '#DNC26'}</span>
            </button>
          </div>
        </div>

        {/* 8 Social Buttons Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="bg-[#1E0905] hover:bg-[#280D07] border-[2px] border-[#FAF7F2] rounded-2xl p-3 sm:p-3.5 shadow-[3px_3px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl border border-[#FAF7F2]/30 flex items-center justify-center shrink-0 shadow-sm ${ch.iconBg}`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold font-sans text-[#FAF7F2] group-hover:text-[#E5A93C] transition-colors truncate">
                    {ch.name}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#38130D] text-[#FAF7F2]/60 group-hover:text-[#180805] group-hover:bg-[#E5A93C] flex items-center justify-center shrink-0 transition-colors">
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
