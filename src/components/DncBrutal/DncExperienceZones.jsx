import React, { useState } from 'react';
import { Network, Users, Gamepad2, BookOpen, RotateCw } from 'lucide-react';

const experienceZones = [
  {
    id: 'tcp-handshake',
    name: 'TCP HANDSHAKE',
    category: 'Networking Zone',
    icon: Network,
    themeColor: '#0284C7',
    accentBg: '#E0F2FE',
    accentBorder: '#0284C7',
    badgeText: '#0369A1',
    cardBackBg: '#F0F9FF',
    description: 'Networking zone for attendees and developers to connect and collaborate.',
  },
  {
    id: 'peer-to-peer',
    name: 'PEER TO PEER',
    category: 'Community Zone',
    icon: Users,
    themeColor: '#16A34A',
    accentBg: '#DCFCE7',
    accentBorder: '#16A34A',
    badgeText: '#15803D',
    cardBackBg: '#F0FDF4',
    description: 'Community zone to connect with community members and peers.',
  },
  {
    id: 'respawn-point',
    name: 'RESPAWN POINT',
    category: 'Gaming Zone',
    icon: Gamepad2,
    themeColor: '#D600AA',
    accentBg: '#FCE7F3',
    accentBorder: '#D600AA',
    badgeText: '#BE185D',
    cardBackBg: '#FDF2F8',
    description: 'Gaming zone to relax, play games, and take a break.',
  },
  {
    id: 'stack-trace',
    name: 'STACK TRACE',
    category: 'Knowledge Zone',
    icon: BookOpen,
    themeColor: '#D97706',
    accentBg: '#FEF3C7',
    accentBorder: '#D97706',
    badgeText: '#B45309',
    cardBackBg: '#FFFDF5',
    description: 'Packt team booth for knowledge zone.',
  },
];

export const DncExperienceZones = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section band--paper2" id="zones" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        {/* Section Header */}
        <div className="sechead">
          <p className="eyebrow">
            <span className="w-2.5 h-2.5 rounded-full bg-[#512BD4] inline-block mr-1.5"></span>
            <span>Campus Experience Zones</span>
          </p>
          <h2 className="h-sec" style={{ marginBottom: 0 }}>
            The 4 Interactive Zones.<br />Flip to Explore.
          </h2>
        </div>

        {/* 4 Flip Cards Grid */}
        <div className="zones-grid" aria-label="Campus Experience Flip Cards">
          {experienceZones.map((zone) => {
            const IconComponent = zone.icon;
            const isFlipped = !!flippedCards[zone.id];

            return (
              <div
                key={zone.id}
                className={`zone-flip ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleCard(zone.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(zone.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${zone.name} - ${zone.category}. Click or hover to flip.`}
              >
                <div className="zone-flip__inner">
                  {/* FRONT FACE: Logo & Zone Title Only */}
                  <div className="zone-flip__front">
                    {/* Centered Logo Emblem */}
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-black flex items-center justify-center mb-4 transition-transform duration-300"
                      style={{
                        background: zone.accentBg,
                        borderColor: '#000000',
                        boxShadow: `3px 3px 0px ${zone.themeColor}`,
                      }}
                    >
                      <IconComponent
                        className="w-10 h-10 sm:w-12 sm:h-12"
                        style={{ color: zone.themeColor }}
                        strokeWidth={2.2}
                      />
                    </div>

                    {/* Zone Name */}
                    <h3 className="font-sans font-black text-lg sm:text-xl text-[#120838] tracking-tight mb-2">
                      {zone.name}
                    </h3>

                    {/* Flip Cue */}
                    <div className="mt-auto pt-2 flex items-center gap-1.5 text-stone-400 font-mono text-[11px]">
                      <RotateCw className="w-3 h-3 text-[#512BD4]" />
                      <span>Flip for info</span>
                    </div>
                  </div>

                  {/* BACK FACE: Short Description Only */}
                  <div
                    className="zone-flip__back"
                    style={{ background: zone.cardBackBg }}
                  >
                    {/* Zone Category Pill */}
                    <span
                      className="font-mono text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-black/30 mb-3"
                      style={{
                        background: zone.accentBg,
                        color: zone.badgeText,
                      }}
                    >
                      {zone.category}
                    </span>

                    {/* Zone Name on Back */}
                    <h4 className="font-sans font-black text-base text-[#120838] tracking-tight mb-2.5">
                      {zone.name}
                    </h4>

                    {/* Short Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-stone-700 leading-relaxed font-medium">
                      {zone.description}
                    </p>

                    {/* Flip Back Cue */}
                    <div className="mt-auto pt-3 flex items-center gap-1.5 text-stone-400 font-mono text-[10px]">
                      <RotateCw className="w-3 h-3" />
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DncExperienceZones;
