import React, { useState } from 'react';
import { 
  Network, 
  Users, 
  Gamepad2, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Gift, 
  Trophy, 
  CheckCircle2,
  Compass,
  Layers,
  Terminal
} from 'lucide-react';

export const DncExperienceZones = () => {
  // Default to 'stack-trace' so Packt knowledge zone is highlighted upfront
  const [selectedZone, setSelectedZone] = useState('stack-trace');

  const zonesData = {
    'stack-trace': {
      id: 'stack-trace',
      name: 'STACK TRACE',
      badge: 'Knowledge Zone · Powered by Packt',
      category: 'Knowledge Hub',
      subtitle: 'The Developer Knowledge Engine · Deep Tech Books & Architecture',
      location: 'Central Foyer · Main Auditorium Entrance',
      coordinates: 'BAY D · KNOWLEDGE HUB',
      icon: BookOpen,
      themeColor: '#D97706',
      accentBg: '#FEF3C7',
      accentBorder: '#D97706',
      badgeText: '#B45309',
      tagline: 'Exclusive Packt Team Booth with Tech Books, Chapter Giveaways & Author Connects',
      leadDescription:
        'Hosted by the official Packt publishing team. Browse cutting-edge engineering books, deep-dive manuals covering .NET 11 and C# 14, and participate in exclusive delegate book giveaways.',
      features: [
        {
          title: 'Flagship Tech Library & Inspection Copies',
          desc: 'Explore physical copies of world-class titles covering .NET 11, C# 14, Azure OpenAI, Semantic Kernel, and Cloud-Native Microservices.',
          icon: BookOpen,
        },
        {
          title: 'Exclusive Delegate Perks & Discounts',
          desc: 'Complimentary chapter downloads, exclusive 30% attendee discount coupons on all Packt titles, and official Packt stickers.',
          icon: Gift,
        },
        {
          title: 'Daily Tech Trivia & Book Giveaways',
          desc: 'Win physical copies of best-selling .NET and AI architecture books during scheduled lightning trivia rounds across both days.',
          icon: Trophy,
        },
        {
          title: 'Author & MVP Meetups',
          desc: 'Live book signings, architectural Q&A, and direct conversations with published tech authors and Microsoft MVPs.',
          icon: Sparkles,
        },
      ],
      terminalSnippet: 'packt@dnc26:~/stack-trace $ ./inspect-library --all\n> 100+ Books Available | 4 Author Signings | Packt Swag Ready',
    },

    'tcp-handshake': {
      id: 'tcp-handshake',
      name: 'TCP HANDSHAKE',
      badge: 'Networking Zone',
      category: 'Networking Lounge',
      subtitle: 'High-Bandwidth Developer Connections & Hallway Track',
      location: 'North Atrium · Coffee Lounge',
      coordinates: 'BAY A · NETWORKING',
      icon: Network,
      themeColor: '#0284C7',
      accentBg: '#E0F2FE',
      accentBorder: '#0284C7',
      badgeText: '#0369A1',
      tagline: 'Connect, Collaborate, and Turn Ideas into Real Software Ventures',
      leadDescription:
        'Dedicated hallway lounge to strike up collaborations, find your next co-founder, and exchange ideas with 600+ developers, Microsoft MVPs, and engineering leads.',
      features: [
        {
          title: 'Hallway Track Discussion Pods',
          desc: 'Comfortable discussion tables designed for startup founders, cloud architects, and student builders to brainstorm.',
          icon: Network,
        },
        {
          title: 'High-Tea & Coffee Bar',
          desc: 'Continuous refreshments and premium coffee to keep your energy high between keynotes and technical sessions.',
          icon: Sparkles,
        },
        {
          title: 'Hiring & Career Connections',
          desc: 'Direct interaction with tech companies recruiting AI, Cloud, DevOps, and Full-Stack software engineering talent.',
          icon: CheckCircle2,
        },
        {
          title: 'Unconference Peer Circles',
          desc: 'Spontaneous roundtable discussions on production architecture, system resilience, and real-world software bugs.',
          icon: Users,
        },
      ],
      terminalSnippet: 'netstat -an | grep ESTABLISHED\n> Handshake ACK: 600+ Active Connections in North Atrium Lounge',
    },

    'peer-to-peer': {
      id: 'peer-to-peer',
      name: 'PEER TO PEER',
      badge: 'Community Zone',
      category: 'Community Commons',
      subtitle: 'Decentralized Community Hub for Student Clubs & Open Source',
      location: 'East Wing · Terrace Promenade',
      coordinates: 'BAY B · COMMUNITY',
      icon: Users,
      themeColor: '#16A34A',
      accentBg: '#DCFCE7',
      accentBorder: '#16A34A',
      badgeText: '#15803D',
      tagline: 'Where Student Clubs, Open-Source Contributors & Devs Collaborate',
      leadDescription:
        'Where student developer clubs, open-source contributors, and community leaders connect without central authority. Share GitHub repos, mentor, and build together.',
      features: [
        {
          title: 'Student Delegation Hub',
          desc: 'Meet campus delegations, club leads, and youth developers from engineering colleges across Maharashtra.',
          icon: Users,
        },
        {
          title: 'Open-Source Showcase & Code Demos',
          desc: 'Demo your student projects, hackathon prototypes, and community open-source GitHub repositories on display screens.',
          icon: Layers,
        },
        {
          title: 'Peer Mentorship & Guidance',
          desc: 'Direct advice on GitHub contributions, resume building, and tech careers from senior MSC PRPCEM alumni.',
          icon: Compass,
        },
        {
          title: 'Community Sticker & Swag Swap',
          desc: 'Bring your club stickers, custom laptop pins, and chapter collectibles to trade with fellow community builders.',
          icon: Gift,
        },
      ],
      terminalSnippet: 'git remote add upstream peer-to-peer/network\n> Connected to 20+ University Clubs & 500+ Student Builders',
    },

    'respawn-point': {
      id: 'respawn-point',
      name: 'RESPAWN POINT',
      badge: 'Gaming Zone',
      category: 'Gaming Arena',
      subtitle: 'Play, Compete & Recharge Between Keynotes',
      location: 'West Arcade · Recreation Pavilion',
      coordinates: 'BAY C · GAMING',
      icon: Gamepad2,
      themeColor: '#D600AA',
      accentBg: '#FCE7F3',
      accentBorder: '#D600AA',
      badgeText: '#9D174D',
      tagline: 'Level Up in Console Showdowns, Dev Speed-Runs & Code Quizzes',
      leadDescription:
        'Unwind between technical keynotes. High-energy developer challenges, console showdowns, retro mini-tournaments, and interactive speed-coding games.',
      features: [
        {
          title: 'Console Showdowns & Big Screen Gaming',
          desc: 'Fast-paced multiplayer racing and fighting games on high-refresh-rate displays for delegates to compete.',
          icon: Gamepad2,
        },
        {
          title: 'Speed-Coding & Algo Duels',
          desc: '5-minute timed algorithmic sprint duels with live audience cheering and instant leaderboard updates.',
          icon: Terminal,
        },
        {
          title: 'Retro Arcade Corner',
          desc: 'Classic arcade games and mechanical keyboards for a nostalgic sensory break between deep technical sessions.',
          icon: Sparkles,
        },
        {
          title: 'Daily High-Score Trophies',
          desc: 'Top players on the daily Respawn leaderboard take home exclusive .NET Conf gaming collectibles and prizes.',
          icon: Trophy,
        },
      ],
      terminalSnippet: 'player.respawn(hp=100, stamina=MAX);\n> Game On: High-Score Tournament Active in West Arcade Pavilion',
    },
  };

  const current = zonesData[selectedZone];
  const CurrentIcon = current.icon;

  return (
    <section className="section band--sun" id="zones" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        {/* Section Header */}
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">
              <Compass className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Campus Experience · Floor Map</span>
            </p>
            <h2 className="h-sec" style={{ marginBottom: 0 }}>
              Campus Experience Map.<br />Interactive Booth Zones.
            </h2>
          </div>
          <p className="lede">
            Forget boring &ldquo;Booth 1&rdquo; or &ldquo;Booth 2&rdquo;. Explore our four curated technical experience zones across the Swami Vivekanand Auditorium campus &mdash; designed for knowledge, networking, community, and gaming.
          </p>
        </div>

        {/* Quick-Switch Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          {Object.values(zonesData).map((zone) => {
            const isSelected = selectedZone === zone.id;
            const Icon = zone.icon;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setSelectedZone(zone.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-[#120838] text-white border-[2.5px] border-black shadow-[3.5px_3.5px_0px_#512BD4] -translate-y-0.5'
                    : 'bg-white text-stone-800 border-[2px] border-black shadow-[2px_2px_0px_#120838] hover:bg-[#FAF8FF]'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: zone.themeColor }}
                />
                <Icon className="w-4 h-4 shrink-0" style={{ color: isSelected ? '#00F0FF' : zone.themeColor }} />
                <span>{zone.name}</span>
                {zone.id === 'stack-trace' && (
                  <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] border border-black/20 ml-1">
                    Packt
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Two-Column Interactive Map + Zone Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Illustrated Floorplan Map Blueprint (5 Cols) */}
          <div className="lg:col-span-5 bg-[#120838] border-[3px] border-black rounded-3xl p-5 sm:p-6 text-white shadow-[6px_6px_0px_#512BD4] relative overflow-hidden">
            {/* Background Blueprint Grid Lines */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Top Map Card Bar */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/15 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-white">
                  Campus Floorplan Blueprint
                </span>
              </div>
              <span className="font-mono text-[11px] text-white/60">
                PRPCEM · Ground Floor
              </span>
            </div>

            {/* Interactive SVG Floor Map */}
            <div className="relative w-full aspect-[4/3] bg-[#0E0628] border-2 border-white/20 rounded-2xl p-3 flex flex-col justify-between overflow-hidden">
              
              {/* North: TCP Handshake Bay */}
              <div
                onClick={() => setSelectedZone('tcp-handshake')}
                className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  selectedZone === 'tcp-handshake'
                    ? 'bg-[#0284C7]/30 border-[#00B4D8] shadow-[0_0_15px_rgba(0,180,216,0.4)] scale-[1.02]'
                    : 'bg-white/5 border-white/15 hover:border-white/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B4D8]" />
                  <span className="font-mono text-xs font-black text-white">BAY A · TCP HANDSHAKE</span>
                </div>
                <span className="text-[10px] font-mono text-[#00B4D8] font-bold">Networking</span>
              </div>

              {/* Center: Main Stage & Central Atrium */}
              <div className="grid grid-cols-2 gap-2 my-2">
                {/* West: Respawn Point */}
                <div
                  onClick={() => setSelectedZone('respawn-point')}
                  className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    selectedZone === 'respawn-point'
                      ? 'bg-[#D600AA]/30 border-[#E0199E] shadow-[0_0_15px_rgba(224,25,158,0.4)] scale-[1.02]'
                      : 'bg-white/5 border-white/15 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E0199E]" />
                    <span className="font-mono text-[11px] font-black text-white">BAY C · RESPAWN</span>
                  </div>
                  <Gamepad2 className="w-5 h-5 text-[#E0199E] my-1" />
                  <span className="text-[10px] font-mono text-[#E0199E] font-bold">Gaming Arena</span>
                </div>

                {/* East: Peer to Peer */}
                <div
                  onClick={() => setSelectedZone('peer-to-peer')}
                  className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    selectedZone === 'peer-to-peer'
                      ? 'bg-[#16A34A]/30 border-[#16A34A] shadow-[0_0_15px_rgba(22,163,74,0.4)] scale-[1.02]'
                      : 'bg-white/5 border-white/15 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                    <span className="font-mono text-[11px] font-black text-white">BAY B · P2P</span>
                  </div>
                  <Users className="w-5 h-5 text-[#16A34A] my-1" />
                  <span className="text-[10px] font-mono text-[#16A34A] font-bold">Community</span>
                </div>
              </div>

              {/* South Central: STACK TRACE (Packt Knowledge Hub) */}
              <div
                onClick={() => setSelectedZone('stack-trace')}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  selectedZone === 'stack-trace'
                    ? 'bg-[#D97706]/35 border-[#FFD13B] shadow-[0_0_18px_rgba(255,209,59,0.5)] scale-[1.02]'
                    : 'bg-white/5 border-white/15 hover:border-white/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD13B] animate-pulse" />
                  <div>
                    <span className="font-mono text-xs font-black text-white block leading-tight">
                      BAY D · STACK TRACE
                    </span>
                    <span className="text-[10px] font-sans text-stone-300">
                      Packt Team Knowledge Booth
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase font-black px-2 py-0.5 rounded bg-[#FFD13B] text-black">
                  Packt Booth ★
                </span>
              </div>
            </div>

            {/* Map Legend Footer */}
            <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/75">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                Swami Vivekanand Auditorium Foyer
              </span>
              <span className="text-[#00F0FF] font-bold">Click map bays to inspect</span>
            </div>
          </div>

          {/* Right Column: Rich Zone Inspector (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#120838] transition-all">
            
            {/* Inspector Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-black" style={{ background: current.accentBg }}>
                <CurrentIcon className="w-4 h-4" style={{ color: current.themeColor }} />
                <span className="font-mono text-xs font-black uppercase" style={{ color: current.badgeText }}>
                  {current.badge}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-stone-500">
                {current.coordinates}
              </span>
            </div>

            {/* Zone Title & Tagline */}
            <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-[#120838] uppercase tracking-tight leading-none mb-1">
              {current.name}
            </h3>
            <p className="font-sans font-bold text-sm sm:text-base text-stone-600 mb-3">
              {current.subtitle}
            </p>
            <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
              {current.leadDescription}
            </p>

            {/* Mini Terminal / Shell Snippet */}
            <div className="bg-[#120838] border-2 border-black rounded-xl p-3 mb-6 font-mono text-xs text-white/90 shadow-[3px_3px_0px_#120838]">
              <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-white/15 text-white/50 text-[10px]">
                <Terminal className="w-3 h-3 text-[#00F0FF]" />
                <span>zone-manifest --status live</span>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-[#00F0FF]">
                {current.terminalSnippet}
              </pre>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
              {current.features.map((feat, i) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border-2 border-black/80 bg-[#FAF8FF] hover:bg-white hover:shadow-[3px_3px_0px_#120838] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-2.5 mb-1.5">
                      <div
                        className="w-7 h-7 rounded-lg border border-black/60 flex items-center justify-center shrink-0"
                        style={{ background: current.accentBg }}
                      >
                        <FeatIcon className="w-3.5 h-3.5" style={{ color: current.themeColor }} />
                      </div>
                      <h4 className="font-sans font-black text-xs sm:text-sm text-[#120838] leading-snug">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-stone-600 leading-relaxed pl-9.5">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location Banner Footer */}
            <div className="p-3 bg-stone-50 border-2 border-dashed border-stone-300 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-stone-700">
                <MapPin className="w-4 h-4 text-[#512BD4]" />
                <strong>Location:</strong> {current.location}
              </span>
              <span className="font-black uppercase text-[#512BD4]">
                Open Both Days
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DncExperienceZones;
