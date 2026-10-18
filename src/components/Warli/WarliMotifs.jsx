import React from 'react';

/**
 * Authentic Warli Tribal Art SVG Components & Patterns
 * Warli art uses basic geometric shapes: circles (sun/moon), triangles (mountains/pointed trees/torso),
 * and squares (sacred enclosure / chaukat). White rice-paste (#FAF7F2) on earthen terracotta (#3E1812).
 */

// Continuous Repeating Warli Tarpa Dancers Ribbon
export const WarliDancersRibbon = ({ className = '', height = 48, fill = '#FAF7F2' }) => {
  return (
    <div className={`w-full overflow-hidden flex items-center select-none py-1 ${className}`}>
      <div className="flex shrink-0 animate-marquee items-center gap-6">
        {[...Array(12)].map((_, idx) => (
          <WarliDancerGroup key={idx} fill={fill} />
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-6" aria-hidden="true">
        {[...Array(12)].map((_, idx) => (
          <WarliDancerGroup key={`repeat-${idx}`} fill={fill} />
        ))}
      </div>
    </div>
  );
};

// 4 Linked Warli Dancers + Tarpa Musician Group
export const WarliDancerGroup = ({ fill = '#FAF7F2' }) => {
  return (
    <svg width="180" height="42" viewBox="0 0 180 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      {/* Tarpa Player (Musician on left) */}
      <g transform="translate(10, 2)">
        {/* Head */}
        <circle cx="10" cy="6" r="3.5" fill={fill} />
        {/* Head ornament */}
        <path d="M10 2.5 L12 0" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
        {/* Body (Two inverted triangles) */}
        <polygon points="10,9.5 4,18 16,18" fill={fill} />
        <polygon points="10,26.5 4,18 16,18" fill={fill} />
        {/* Legs in stance */}
        <path d="M8 26.5 L5 36 L2 38" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 26.5 L15 36 L18 38" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Tarpa Horn Pipe */}
        <path d="M10 11 C18 10 24 5 28 3 C29 2 31 4 30 7 C26 15 16 18 13 18" stroke={fill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="29" cy="4" rx="2" ry="3" fill={fill} />
        {/* Musician Arms holding Tarpa */}
        <path d="M7 14 L12 13 L18 12" stroke={fill} strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* Dancer 1 */}
      <g transform="translate(48, 2)">
        <circle cx="10" cy="6" r="3.5" fill={fill} />
        <polygon points="10,9.5 5,18 15,18" fill={fill} />
        <polygon points="10,26.5 5,18 15,18" fill={fill} />
        <path d="M8 26.5 L4 34 L1 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 26.5 L16 34 L19 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        {/* Joined Arms */}
        <path d="M-6 18 L6 13 L10 17 L14 13 L26 18" stroke={fill} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Dancer 2 */}
      <g transform="translate(80, 2)">
        <circle cx="10" cy="6" r="3.5" fill={fill} />
        <polygon points="10,9.5 5,18 15,18" fill={fill} />
        <polygon points="10,26.5 5,18 15,18" fill={fill} />
        <path d="M8 26.5 L6 34 L3 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 26.5 L14 34 L17 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M-6 18 L6 13 L10 17 L14 13 L26 18" stroke={fill} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Dancer 3 */}
      <g transform="translate(112, 2)">
        <circle cx="10" cy="6" r="3.5" fill={fill} />
        <polygon points="10,9.5 5,18 15,18" fill={fill} />
        <polygon points="10,26.5 5,18 15,18" fill={fill} />
        <path d="M8 26.5 L4 34 L1 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 26.5 L16 34 L19 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M-6 18 L6 13 L10 17 L14 13 L26 18" stroke={fill} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Dancer 4 */}
      <g transform="translate(144, 2)">
        <circle cx="10" cy="6" r="3.5" fill={fill} />
        <polygon points="10,9.5 5,18 15,18" fill={fill} />
        <polygon points="10,26.5 5,18 15,18" fill={fill} />
        <path d="M8 26.5 L6 34 L3 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 26.5 L14 34 L17 37" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <path d="M-6 18 L6 13 L10 17 L14 13 L24 18" stroke={fill} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

// Warli Triangular Sawtooth Border (Chaukat Frame)
export const WarliSawtoothBorder = ({ className = '', fill = '#FAF7F2', flip = false }) => {
  return (
    <div className={`w-full overflow-hidden flex select-none h-3 sm:h-3.5 ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg className="w-full h-full" preserveAspectRatio="repeat-x" viewBox="0 0 240 14" fill="none">
        <pattern id="warli-sawtooth" width="24" height="14" patternUnits="userSpaceOnUse">
          <polygon points="0,14 12,2 24,14" fill={fill} />
          <circle cx="12" cy="11" r="1.5" fill="#3E1812" />
        </pattern>
        <rect width="100%" height="14" fill="url(#warli-sawtooth)" />
      </svg>
    </div>
  );
};

// Warli Diamond & Dot Chaukat Ribbon
export const WarliChaukatRibbon = ({ className = '', fill = '#FAF7F2', accent = '#E5A93C' }) => {
  return (
    <div className={`w-full overflow-hidden select-none h-4 sm:h-5 ${className}`}>
      <svg className="w-full h-full" preserveAspectRatio="repeat-x" viewBox="0 0 320 18" fill="none">
        <pattern id="warli-chaukat" width="32" height="18" patternUnits="userSpaceOnUse">
          {/* Top and bottom guide lines */}
          <line x1="0" y1="1" x2="32" y2="1" stroke={fill} strokeWidth="1" strokeDasharray="2 2" />
          <line x1="0" y1="17" x2="32" y2="17" stroke={fill} strokeWidth="1" strokeDasharray="2 2" />
          {/* Central diamond */}
          <polygon points="16,3 24,9 16,15 8,9" fill={fill} />
          <circle cx="16" cy="9" r="2" fill={accent} />
          {/* Dots on flanks */}
          <circle cx="4" cy="9" r="1.5" fill={fill} />
          <circle cx="28" cy="9" r="1.5" fill={fill} />
        </pattern>
        <rect width="100%" height="18" fill="url(#warli-chaukat)" />
      </svg>
    </div>
  );
};

// Warli Sacred Sun Motif (Circle surrounded by triangular rays and concentric stippling)
export const WarliSun = ({ size = 64, fill = '#FAF7F2', accent = '#E5A93C', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      {/* Central Sun Circle */}
      <circle cx="50" cy="50" r="18" fill={accent} />
      <circle cx="50" cy="50" r="14" fill="#3E1812" />
      <circle cx="50" cy="50" r="8" fill={fill} />

      {/* Dotted Inner Ring */}
      <circle cx="50" cy="50" r="23" stroke={fill} strokeWidth="1.5" strokeDasharray="3 3" />

      {/* 16 Triangular Rays */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <polygon points="50,18 47,25 53,25" fill={fill} />
            <circle cx="50" cy="14" r="1.5" fill={accent} />
          </g>
        );
      })}
    </svg>
  );
};

// Warli Tree of Life & Tech Knowledge (Branching geometric tree with code brackets)
export const WarliTree = ({ size = 96, fill = '#FAF7F2', accent = '#E5A93C', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      {/* Tree Trunk */}
      <path d="M50 95 L50 40" stroke={fill} strokeWidth="4" strokeLinecap="round" />
      <path d="M42 95 L50 75 L58 95" stroke={fill} strokeWidth="3" strokeLinecap="round" />
      
      {/* Branches */}
      <path d="M50 70 L30 55" stroke={fill} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 70 L70 55" stroke={fill} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50 L25 35" stroke={fill} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50 L75 35" stroke={fill} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 40 L50 15" stroke={fill} strokeWidth="3" strokeLinecap="round" />

      {/* Triangular Leaves / Tech Brackets */}
      {/* Top crown */}
      <polygon points="50,10 42,22 58,22" fill={accent} />
      <polygon points="50,22 38,34 62,34" fill={fill} />
      
      {/* Left foliage */}
      <polygon points="25,30 18,40 32,40" fill={accent} />
      <polygon points="30,50 22,60 38,60" fill={fill} />

      {/* Right foliage */}
      <polygon points="75,30 68,40 82,40" fill={accent} />
      <polygon points="70,50 62,60 78,60" fill={fill} />

      {/* Tech Code Glyphs hanging on Tree: < /> and { } */}
      <text x="18" y="26" fill={fill} fontSize="9" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
      <text x="72" y="26" fill={fill} fontSize="9" fontFamily="monospace" fontWeight="bold">&#123;&#125;</text>
      <text x="46" y="88" fill={accent} fontSize="8" fontFamily="monospace" fontWeight="bold">C#</text>
    </svg>
  );
};

// Warli Peacock Symbol of Maharashtra
export const WarliPeacock = ({ size = 72, fill = '#FAF7F2', accent = '#E5A93C', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className={className}>
      {/* Legs */}
      <path d="M42 68 L42 80 L38 83" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path d="M48 68 L48 80 L52 83" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      
      {/* Body: Two inverted triangles */}
      <polygon points="45,45 35,58 55,58" fill={fill} />
      <polygon points="45,68 35,58 55,58" fill={fill} />

      {/* Long graceful neck */}
      <path d="M45 45 C45 35 48 30 52 25" stroke={fill} strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Head */}
      <circle cx="53" cy="23" r="3.5" fill={fill} />
      {/* Beak */}
      <polygon points="56,23 60,25 56,26" fill={accent} />
      {/* Crest (Kalgi) */}
      <path d="M53 20 L51 14" stroke={fill} strokeWidth="1.5" />
      <circle cx="51" cy="13" r="1.5" fill={accent} />
      <path d="M54 20 L55 14" stroke={fill} strokeWidth="1.5" />
      <circle cx="55" cy="13" r="1.5" fill={accent} />
      <path d="M52 20 L48 16" stroke={fill} strokeWidth="1.5" />
      <circle cx="47" cy="15" r="1.5" fill={accent} />

      {/* Fan Tail: Arching rays of feathers */}
      {[...Array(7)].map((_, i) => {
        const angle = -150 + i * 18;
        const rad = (angle * Math.PI) / 180;
        const x2 = 35 + Math.cos(rad) * 26;
        const y2 = 56 + Math.sin(rad) * 26;
        return (
          <g key={i}>
            <line x1="35" y1="56" x2={x2} y2={y2} stroke={fill} strokeWidth="1.8" strokeLinecap="round" />
            <circle cx={x2} cy={y2} r="2.5" fill={accent} />
            <circle cx={x2} cy={y2} r="1.2" fill="#3E1812" />
          </g>
        );
      })}
    </svg>
  );
};

// Warli Chaukat Corner Ornament for Cards
export const WarliCornerOrnament = ({ className = '', fill = '#FAF7F2', position = 'top-left' }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position] || '';

  return (
    <svg 
      width="36" 
      height="36" 
      viewBox="0 0 36 36" 
      fill="none" 
      className={`absolute pointer-events-none ${rotation} ${className}`}
    >
      <path d="M2 34 L2 2 L34 2" stroke={fill} strokeWidth="2.5" fill="none" />
      {/* Corner Triangles */}
      <polygon points="4,4 12,4 4,12" fill={fill} />
      <polygon points="14,4 20,4 14,10" fill={fill} />
      <polygon points="4,14 4,20 10,14" fill={fill} />
      <circle cx="8" cy="8" r="1.5" fill="#E5A93C" />
    </svg>
  );
};

export default {
  WarliDancersRibbon,
  WarliDancerGroup,
  WarliSawtoothBorder,
  WarliChaukatRibbon,
  WarliSun,
  WarliTree,
  WarliPeacock,
  WarliCornerOrnament,
};
