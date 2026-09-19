import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
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
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncCommunity = () => {
  const [copied, setCopied] = useState(false);

  const channels = [
    {
      name: 'WhatsApp',
      href: eventData.socialLinks.whatsapp,
      icon: WhatsAppIcon,
      iconBg: 'bg-[#25D366] text-black',
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
      iconBg: 'bg-black text-white',
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
      iconBg: 'bg-black text-white',
    },
    {
      name: 'Email',
      href: `mailto:${eventData.contactEmail}`,
      icon: Mail,
      iconBg: 'bg-[#512BD4] text-white',
      isEmail: true,
    },
  ];

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText('#DotNetConfAmravati #DNC26 #MSCPRPCEM');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="stay-connected" className="py-6 sm:py-8 px-3 sm:px-6 max-w-6xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="10"
        leftTag="CONNECT"
        leftBadgeText="💬 1,500+ DEVS"
        leftBadgeColor="bg-[#D600AA] text-white"
        leftSub="ACTIVE HUBS"
        rightIndex="#DNC26"
        rightTag="HASHTAG"
        rightBadgeText="MSC PRPCEM"
        rightBadgeColor="bg-[#512BD4] text-white"
        rightSub="OFFICIAL DESK"
      />
      <DncSignpost 
        title="COMMUNITY CHANNELS" 
        badge="MSC PRPCEM"
        theme="purple"
      />

      <div className="bg-white border-[2.5px] border-black rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#000]">
        
        {/* Compact Header */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8FF] border-[1.5px] border-black p-1 flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <img
                src="/mascot/dotnet-bot-surfing.png"
                alt=".NET Bot"
                className="w-full h-full object-contain select-none"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-black font-sans uppercase leading-none">
                Follow & Connect
              </h3>
              <span className="text-xs font-mono font-bold text-[#512BD4]">
                @mscprpcem
              </span>
            </div>
          </div>

          <button
            onClick={handleCopyHashtags}
            className="bg-[#FAF8FF] hover:bg-white text-black font-mono font-bold text-[11px] px-3 py-1.5 rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[0.5px] hover:translate-y-[0.5px] transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                <span className="text-emerald-700 font-bold">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>#DNC26</span>
              </>
            )}
          </button>
        </div>

        {/* 8 Clean Branded Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="bg-[#FAF8FF] hover:bg-white border-[2px] border-black rounded-xl p-2.5 shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg border border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000] ${ch.iconBg}`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold font-sans text-black group-hover:text-[#512BD4] transition-colors truncate">
                    {ch.name}
                  </span>
                </div>

                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-black shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DncCommunity;
