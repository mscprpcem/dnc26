import React from 'react';

/**
 * DevFest-inspired Warli SVG Sprites and Icon Definitions
 * Re-themed with the user's color palette:
 * --purple: #512BD4, --blue: #0B6CFF, --magenta: #D600AA,
 * --teal: #28C2D1, --coral: #F65163, --gold: #F7B548
 */
export const DncWarliSprites = () => {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        {/* ============================================================
             FIGURE SYSTEM
             ============================================================ */}

        {/* 01 · Flag bearer with </> banner */}
        <symbol id="f-flag" viewBox="0 0 280 340">
          <path className="fg-line" d="M132 320V40" />
          <circle className="fg-fill" cx="132" cy="34" r="8" />
          <path className="fg-flag" d="M132 52c26-14 52-14 78 0s52 14 66 2v78c-14 12-40 12-66-2s-52-14-78 0z" />
          <path className="fg-thin" d="M166 84l-14 14 14 14M232 84l14 14-14 14M208 78l-16 40" />
          <ellipse className="fg-fill" cx="72" cy="112" rx="25" ry="28" transform="rotate(-18 72 112)" />
          <path className="fg-fill" d="M58 92c-11-6-22 2-20 12s10 13 19 8" />
          <path className="fg-fill" d="M80 136c16 4 24 18 24 36l4 70c0 8-7 12-14 10l-66-26c-8-3-8-10-3-16l55-74Z" />
          <path className="fg-limb" d="M92 150c14 2 28 8 40 16" />
          <path className="fg-limb" d="M84 178c14 4 28 10 40 18" />
          <path className="fg-limb" d="M56 244c-12 18-28 30-46 36" />
          <path className="fg-limb" d="M100 252c2 22-4 42-16 58" />
          <path className="fg-foot" d="M6 328h32M76 332h32" />
        </symbol>

        {/* 05 · Two figures high-fiving */}
        <symbol id="f-highfive" viewBox="0 0 420 340">
          <path className="fg-ray" d="M210 66V44M188 76l-14-16M232 76l14-16M176 96l-20-8M244 96l20-8" />
          <g>
            <ellipse className="fg-fill" cx="106" cy="128" rx="25" ry="28" transform="rotate(18 106 128)" />
            <path className="fg-fill" d="M90 110c-11-6-22 0-22 10s8 14 18 10" />
            <path className="fg-fill" d="M112 156c16 4 24 18 26 36l10 74c1 8-6 12-13 10l-70-24c-8-3-9-10-4-16l51-80Z" />
            <path className="fg-limb" d="M124 168c22 8 44 2 66-18" />
            <path className="fg-limb" d="M104 196c-14 8-28 10-42 6" />
            <path className="fg-limb" d="M76 262c-14 12-30 18-48 16" />
            <path className="fg-limb" d="M124 272c2 22-2 40-12 54" />
            <path className="fg-foot" d="M22 272h-14M104 332h32" />
          </g>
          <g>
            <ellipse className="fg-fill" cx="314" cy="128" rx="25" ry="28" transform="rotate(-18 314 128)" />
            <path className="fg-fill" d="M330 110c11-6 22 0 22 10s-8 14-18 10" />
            <path className="fg-fill" d="M308 156c-16 4-24 18-26 36l-10 74c-1 8 6 12 13 10l70-24c8-3 9-10 4-16l-51-80Z" />
            <path className="fg-limb" d="M296 168c-22 8-44 2-66-18" />
            <path className="fg-limb" d="M316 196c14 10 24 22 28 38" />
            <path className="fg-limb" d="M296 272c-4 22-2 40 8 54" />
            <path className="fg-limb" d="M344 266c10 18 14 38 12 58" />
            <path className="fg-foot" d="M288 332h32M348 332h32" />
          </g>
        </symbol>

        {/* 06 · Two figures carrying a crate */}
        <symbol id="f-carry" viewBox="0 0 420 340">
          <g>
            <ellipse className="fg-fill" cx="112" cy="130" rx="25" ry="28" transform="rotate(10 112 130)" />
            <path className="fg-fill" d="M96 112c-11-7-22-1-22 9s8 15 18 11" />
            <path className="fg-fill" d="M118 158c16 3 25 16 28 34l12 74c1 8-6 12-13 10l-70-22c-8-3-9-10-4-16l47-80Z" />
            <path className="fg-limb" d="M132 178c20 4 36 12 48 24" />
            <path className="fg-limb" d="M124 204c18 6 32 14 44 26" />
            <path className="fg-limb" d="M110 272c-8 20-20 36-36 46" />
            <path className="fg-limb" d="M146 276c4 22 2 40-6 56" />
            <path className="fg-foot" d="M64 332h32M130 332h32" />
          </g>
          <rect className="fg-fill" x="182" y="188" width="56" height="56" rx="6" />
          <path className="fg-hole" d="M182 210h56" />
          <g>
            <ellipse className="fg-fill" cx="308" cy="130" rx="25" ry="28" transform="rotate(-10 308 130)" />
            <path className="fg-fill" d="M326 112c12-4 22 4 20 14s-11 13-20 8" />
            <path className="fg-fill" d="M302 158c-16 3-25 16-28 34l-12 74c-1 8 6 12 13 10l70-22c8-3 9-10 4-16l-47-80Z" />
            <path className="fg-limb" d="M288 178c-20 4-36 12-48 24" />
            <path className="fg-limb" d="M296 204c-18 6-32 14-44 26" />
            <path className="fg-limb" d="M310 272c8 20 20 36 36 46" />
            <path className="fg-limb" d="M274 276c-4 22-2 40 6 56" />
            <path className="fg-foot" d="M324 332h32M258 332h32" />
          </g>
        </symbol>

        {/* 07 · Watering a sprout */}
        <symbol id="f-water" viewBox="0 0 320 340">
          <ellipse className="fg-fill" cx="76" cy="106" rx="25" ry="28" transform="rotate(16 76 106)" />
          <path className="fg-fill" d="M62 86c-11-6-22 1-21 11s9 14 19 9" />
          <path className="fg-fill" d="M84 134c16 4 24 18 25 36l6 78c0 8-6 12-13 10l-66-26c-8-3-8-10-3-16l51-82Z" />
          <path className="fg-limb" d="M96 152c20 8 38 20 52 36" />
          <path className="fg-limb" d="M86 180c20 8 38 20 52 36" />
          <path className="fg-fill" d="M142 184h44c8 0 12 5 12 13v26c0 8-4 13-12 13h-44c-8 0-12-5-12-13v-26c0-8 4-13 12-13Z" />
          <path className="fg-fill" d="M186 190l34-14 6 12-34 16z" />
          <path className="fg-limb" d="M150 176h28" />
          <path className="fg-dots" d="M224 196v6M232 206v6M220 214v6M230 226v6M218 234v6M228 246v6" />
          <g transform="translate(232 236)">
            <path className="fg-stem" d="M28 96V30" />
            <path className="fg-leaf" d="M28 40c0-18-12-30-28-30 0 18 12 30 28 30Z" />
            <path className="fg-leaf" d="M28 56c0-18 12-30 28-30 0 18-12 30-28 30Z" />
            <path className="fg-leaf" d="M28 74c0-16-10-26-24-26 0 16 10 26 24 26Z" />
          </g>
          <path className="fg-limb" d="M66 216c-8 22-10 44-6 66" />
          <path className="fg-limb" d="M104 222c4 24 2 46-6 66" />
          <path className="fg-foot" d="M54 332h34M92 332h34" />
        </symbol>

        {/* 09 · Seated audience row */}
        <symbol id="f-audience" viewBox="0 0 420 190">
          <g>
            <ellipse className="fg-fill" cx="48" cy="56" rx="18" ry="20" />
            <path className="fg-fill" d="M48 80c15 0 24 11 27 27l5 25c1 6-3 10-9 10H25c-6 0-10-4-9-10l5-25c3-16 12-27 27-27Z" />
            <path className="fg-limb2" d="M18 142c12-10 48-10 60 0" />
            <path className="fg-limb2" d="M22 152h52" />
          </g>
          <g>
            <ellipse className="fg-fill" cx="150" cy="48" rx="18" ry="20" />
            <path className="fg-fill" d="M136 30c-9-5-18 1-17 9s7 12 15 8" />
            <path className="fg-fill" d="M150 72c15 0 24 11 27 27l5 25c1 6-3 10-9 10h-46c-6 0-10-4-9-10l5-25c3-16 12-27 27-27Z" />
            <path className="fg-limb2" d="M120 134c12-10 48-10 60 0" />
            <path className="fg-limb2" d="M124 144h52" />
          </g>
          <g>
            <ellipse className="fg-fill" cx="256" cy="54" rx="18" ry="20" />
            <path className="fg-fill" d="M256 78c15 0 24 11 27 27l5 25c1 6-3 10-9 10h-46c-6 0-10-4-9-10l5-25c3-16 12-27 27-27Z" />
            <path className="fg-limb2" d="M272 74c12-12 26-14 38-6" />
            <path className="fg-limb2" d="M226 140c12-10 48-10 60 0" />
            <path className="fg-limb2" d="M230 150h52" />
          </g>
          <g>
            <ellipse className="fg-fill" cx="360" cy="50" rx="18" ry="20" />
            <path className="fg-fill" d="M346 32c-9-5-18 1-17 9s7 12 15 8" />
            <path className="fg-fill" d="M360 74c15 0 24 11 27 27l5 25c1 6-3 10-9 10h-46c-6 0-10-4-9-10l5-25c3-16 12-27 27-27Z" />
            <path className="fg-limb2" d="M330 136c12-10 48-10 60 0" />
            <path className="fg-limb2" d="M334 146h52" />
          </g>
        </symbol>

        {/* 11 · Backpack figure pointing ahead */}
        <symbol id="f-point" viewBox="0 0 300 340">
          <ellipse className="fg-fill" cx="150" cy="92" rx="25" ry="28" transform="rotate(8 150 92)" />
          <path className="fg-fill" d="M134 72c-11-6-22 1-21 11s9 14 19 9" />
          <path className="fg-fill" d="M156 120c16 3 25 16 28 34l12 76c1 8-6 12-13 10l-70-22c-8-3-9-10-4-16l47-82Z" />
          <rect className="fg-fill" x="84" y="132" width="46" height="62" rx="14" />
          <path className="fg-hole" d="M96 146h22" />
          <path className="fg-limb" d="M132 142c-10 6-18 16-22 28" />
          <path className="fg-limb" d="M170 148c22 2 42-4 60-18" />
          <path className="fg-thin" d="M236 122l-8-6M236 130l10-4" />
          <path className="fg-limb" d="M146 240c-14 18-24 38-28 60" />
          <path className="fg-limb" d="M186 244c6 22 6 44 0 66" />
          <path className="fg-foot" d="M106 332h34M178 332h34" />
        </symbol>

        {/* 12 · Two figures in conversation */}
        <symbol id="f-talk" viewBox="0 0 420 340">
          <path className="fg-q" d="M198 150c0-14 10-24 24-24s24 10 24 22c0 14-16 18-20 28l-2 8" />
          <circle className="fg-fill" cx="222" cy="200" r="8" />
          <g>
            <ellipse className="fg-fill" cx="128" cy="132" rx="25" ry="28" transform="rotate(22 128 132)" />
            <path className="fg-fill" d="M110 116c-11-6-22 2-20 12s10 13 19 8" />
            <path className="fg-fill" d="M132 160c16 4 24 18 24 36l4 72c0 8-7 12-14 10l-66-26c-8-3-8-10-3-16l55-76Z" />
            <path className="fg-limb" d="M146 178c18 6 34 16 48 28" />
            <path className="fg-limb" d="M128 208c16 6 30 16 42 28" />
            <path className="fg-limb" d="M96 268c-10 20-24 34-42 42" />
            <path className="fg-limb" d="M140 278c2 22-2 40-12 54" />
            <path className="fg-foot" d="M44 332h32M120 332h32" />
          </g>
          <g>
            <ellipse className="fg-fill" cx="296" cy="118" rx="25" ry="28" transform="rotate(-14 296 118)" />
            <path className="fg-fill" d="M312 100c12-5 22 3 20 13s-11 13-20 8" />
            <path className="fg-fill" d="M288 148c-16 4-24 18-26 36l-8 72c-1 8 6 12 13 10l68-26c8-3 9-10 4-16l-51-76Z" />
            <path className="fg-limb" d="M276 166c-18 8-32 20-42 34" />
            <path className="fg-limb" d="M300 194c16 10 26 24 30 42" />
            <path className="fg-limb" d="M276 272c-6 22-4 42 4 58" />
            <path className="fg-limb" d="M330 266c12 16 18 36 16 58" />
            <path className="fg-foot" d="M268 330h34M338 324h34" />
          </g>
        </symbol>

        {/* ============================================================
             SCENERY & MOTIFS
             ============================================================ */}

        {/* Signpost: LEARN / BUILD / NETWORK / GROW */}
        <symbol id="s-signpost" viewBox="0 0 300 400">
          <path className="fg-post" d="M150 384V26" />
          <circle className="fg-fill" cx="150" cy="22" r="9" />
          <path className="fg-grass" d="M150 384c-14-4-24-14-30-28M150 384c14-4 24-14 30-28M150 384c-6-10-8-22-6-34M150 384c6-10 8-22 6-34" />
          <g transform="rotate(-3 150 78)">
            <path className="fg-signcap" d="M46 52h18v52H46z" fill="var(--blue, #0B6CFF)" />
            <path className="fg-sign" d="M46 52h194l30 26-30 26H46z" />
            <text className="fg-signtext" x="78" y="88">LEARN</text>
          </g>
          <g transform="rotate(2 150 158)">
            <path className="fg-signcap" d="M236 132h18v52h-18z" fill="var(--gold, #F7B548)" />
            <path className="fg-sign" d="M254 132H90l-30 26 30 26h164z" />
            <text className="fg-signtext" x="104" y="168">BUILD</text>
          </g>
          <g transform="rotate(-2 150 238)">
            <path className="fg-signcap" d="M40 212h18v52H40z" fill="var(--coral, #F65163)" />
            <path className="fg-sign" d="M40 212h200l30 26-30 26H40z" />
            <text className="fg-signtext" x="66" y="248">NETWORK</text>
          </g>
          <g transform="rotate(3 150 318)">
            <path className="fg-signcap" d="M242 292h18v52h-18z" fill="var(--teal, #28C2D1)" />
            <path className="fg-sign" d="M260 292H96l-30 26 30 26h164z" />
            <text className="fg-signtext" x="112" y="328">GROW</text>
          </g>
        </symbol>

        {/* Skyline: Landmark Shikhara & Heritage motifs */}
        <symbol id="s-skyline" viewBox="0 0 520 300">
          <path className="fg-flagpole" d="M262 116V40" />
          <path className="fg-saffron" d="M262 44c14-9 28-9 42-2-14 8-28 8-42 2z" />
          <path className="fg-thin" d="M262 116l-12 18h24l-12-18Z" />
          <g className="fg-temple">
            <path d="M240 246V150l22-32 22 32v96" />
            <path d="M244 160h36M242 176h40M240 192h44M238 208h48M236 224h52" />
            <path d="M252 246v-30h20v30" />
            <path d="M200 246v-56h40M324 246v-56h-40" />
            <path d="M206 200h10v46M310 200h10v46" />
            <path d="M160 246v-32l16-16 16 16v32M332 246v-32l16-16 16 16v32" />
            <path d="M120 246v-24h34M366 246v-24h34" />
            <path d="M128 234v12M144 234v12M376 234v12M392 234v12" />
            <path d="M96 246h330" />
          </g>
          <g className="fg-river">
            <path d="M60 264h70M150 264h58M228 264h94M342 264h64M426 264h40" />
            <path d="M84 280h46M150 280h84M254 280h60M334 280h72" />
            <path d="M110 294h56M186 294h78M284 294h50" />
          </g>
        </symbol>

        {/* Hills with sun and birds */}
        <symbol id="s-hills" viewBox="0 0 520 220">
          <circle className="fg-sun-red" cx="120" cy="96" r="44" />
          <path className="fg-hill" d="M0 196c46-52 92-78 138-78s92 26 138 78" />
          <path className="fg-hill" d="M196 196c40-46 80-70 120-70s80 24 120 70" />
          <path className="fg-hill" d="M360 196c30-34 60-52 90-52s50 12 70 34" />
          <g className="fg-bird">
            <path d="M330 52c8-11 16-11 24 0 8-11 16-11 24 0" />
            <path d="M396 88c6-9 13-9 19 0 6-9 13-9 19 0" />
            <path d="M270 96c6-9 13-9 19 0 6-9 13-9 19 0" />
          </g>
        </symbol>

        {/* Foliage tree */}
        <symbol id="s-tree" viewBox="0 0 220 260">
          <path className="fg-line" d="M110 244V150" />
          <path className="fg-fill" d="M110 30c26 0 42 12 48 30 22-2 38 12 38 32 0 18-12 30-28 34 8 14 2 32-16 38-14 5-28 0-36-10-8 10-22 15-36 10-18-6-24-24-16-38-16-4-28-16-28-34 0-20 16-34 38-32 6-18 22-30 48-30Z" />
          <path className="fg-branch" d="M110 156V70M110 116 84 92M110 136l26-24M110 96 92 78M110 108l20-18" />
          <path className="fg-trunkline" d="M84 246h52" />
        </symbol>

        {/* Sapling with Theme-colored leaves */}
        <symbol id="s-sapling" viewBox="0 0 160 200">
          <path className="fg-stem" d="M80 190V64" />
          <path className="fg-leaf" d="M80 84c0-26-18-44-42-44 0 26 18 44 42 44Z" fill="var(--purple, #512BD4)" />
          <path className="fg-leaf2" d="M80 108c0-26 18-44 42-44 0 26-18 44-42 44Z" fill="var(--teal, #28C2D1)" />
          <path className="fg-leaf3" d="M80 134c0-22-16-38-36-38 0 22 16 38 36 38Z" fill="var(--blue, #0B6CFF)" />
          <path className="fg-leaf4" d="M80 62c0-20 14-34 32-34 0 20-14 34-32 34Z" fill="var(--gold, #F7B548)" />
          <path className="fg-trunkline" d="M54 190h52" />
        </symbol>

        {/* Geometric diamond with code marks */}
        <symbol id="s-diamond" viewBox="0 0 200 200">
          <path className="fg-diamond" d="M100 22 178 100 100 178 22 100z" />
          <path className="fg-diamond" d="M100 52 148 100l-48 48-48-48z" />
          <g className="fg-fill">
            <circle cx="100" cy="8" r="5" />
            <circle cx="100" cy="192" r="5" />
            <circle cx="8" cy="100" r="5" />
            <circle cx="192" cy="100" r="5" />
            <circle cx="58" cy="42" r="4" />
            <circle cx="142" cy="42" r="4" />
            <circle cx="58" cy="158" r="4" />
            <circle cx="142" cy="158" r="4" />
          </g>
          <g transform="translate(72 78)">
            <path d="M22 4 6 20l16 16" fill="none" stroke="var(--coral, #F65163)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 4l16 16-16 16" fill="none" stroke="var(--teal, #28C2D1)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 20 6 20" stroke="var(--blue, #0B6CFF)" strokeWidth="9" strokeLinecap="round" />
            <path d="M50 20 34 20" stroke="var(--gold, #F7B548)" strokeWidth="9" strokeLinecap="round" />
          </g>
        </symbol>

        {/* Sun (Gold disc + rays) */}
        <symbol id="i-sun-warli" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="17" fill="var(--gold, #F7B548)" stroke="var(--gold, #F7B548)" strokeWidth="4" />
          <g fill="none" stroke="var(--gold, #F7B548)" strokeWidth="5" strokeLinecap="round">
            <path d="M40 9v9M40 62v9M9 40h9M62 40h9M18 18l6 6M56 56l6 6M62 18l-6 6M24 56l-6 6" />
          </g>
        </symbol>

        {/* Birds */}
        <symbol id="i-birds" viewBox="0 0 120 60">
          <g className="fg-bird" strokeWidth="4">
            <path d="M8 24c8-11 16-11 24 0 8-11 16-11 24 0" />
            <path d="M62 46c6-9 13-9 19 0 6-9 13-9 19 0" />
            <path d="M78 14c6-9 13-9 19 0 6-9 13-9 19 0" />
          </g>
        </symbol>

        {/* Track Icons */}
        <symbol id="i-seed" viewBox="0 0 32 32">
          <path d="M16 29V15" className="w-stroke" />
          <path d="M16 15C16 9 11 4 5 4c0 6 5 11 11 11Z" className="w-stroke" />
          <path d="M16 19c0-5 4-9 9-9 0 5-4 9-9 9Z" className="w-stroke" />
        </symbol>

        <symbol id="i-bloom" viewBox="0 0 32 32">
          <g className="w-stroke">
            <path d="M16 29V15" />
            <path d="M16 24c-3.5 0-6-2.2-6.5-5.5 3.5 0 6 2.2 6.5 5.5Z" />
            <circle cx="16" cy="9.5" r="3" />
            <path d="M16 6.5c1-3.2 4.6-3.4 5.2-.3.5 2.6-2.4 4-4 2M16 6.5c-1-3.2-4.6-3.4-5.2-.3-.5 2.6 2.4 4 4 2" />
            <path d="M19 11.6c3.2 1 3.4 4.6.3 5.2-2.6.5-4-2.4-2-4M13 11.6c-3.2 1-3.4 4.6-.3 5.2 2.6.5 4-2.4 2-4" />
          </g>
        </symbol>

        <symbol id="i-harvest" viewBox="0 0 32 32">
          <g className="w-stroke">
            <path d="M16 29V9" />
            <path d="M16 13c-4 0-6-3-6-6 4 0 6 3 6 6ZM16 13c4 0 6-3 6-6-4 0-6 3-6 6ZM16 20c-4 0-6-3-6-6 4 0 6 3 6 6ZM16 20c4 0 6-3 6-6-4 0-6 3-6 6Z" />
          </g>
        </symbol>

        <symbol id="i-label" viewBox="0 0 32 32">
          <path d="M17.6 3.6H27a1.4 1.4 0 0 1 1.4 1.4v9.4a2 2 0 0 1-.6 1.4L15.4 28.2a2 2 0 0 1-2.8 0L3.8 19.4a2 2 0 0 1 0-2.8L16.2 4.2a2 2 0 0 1 1.4-.6Z" className="w-stroke" />
          <circle cx="22.4" cy="9.6" r="2.2" className="w-stroke" />
        </symbol>

        {/* Feature & UI Icons */}
        <symbol id="i-mic" viewBox="0 0 32 32">
          <g className="w-stroke">
            <rect x="12" y="3" width="8" height="15" rx="4" />
            <path d="M7 14a9 9 0 0 0 18 0M16 23v6M11 29h10" />
          </g>
        </symbol>

        <symbol id="i-chat" viewBox="0 0 32 32">
          <g className="w-stroke">
            <path d="M4 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-6 5V7Z" />
            <path d="M25 11h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-4 4v-4" />
          </g>
        </symbol>

        <symbol id="i-hands" viewBox="0 0 32 32">
          <g className="w-stroke">
            <path d="M3 18l5-5 6 5 4-3 5 5" />
            <path d="M13 13l4-4 5 4 4-3 3 3" />
            <circle cx="9" cy="7" r="3" />
            <circle cx="23" cy="7" r="3" />
            <path d="M3 26h26" />
          </g>
        </symbol>

        <symbol id="i-gift" viewBox="0 0 32 32">
          <g className="w-stroke">
            <rect x="4" y="12" width="24" height="16" rx="2" />
            <path d="M2 12h28v5H2zM16 12v16" />
            <path d="M16 12s-2-8-6-8a3.5 3.5 0 0 0 0 8M16 12s2-8 6-8a3.5 3.5 0 0 1 0 8" />
          </g>
        </symbol>

        <symbol id="i-spark" viewBox="0 0 32 32">
          <g className="w-stroke">
            <path d="M16 3l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" />
            <path d="M26 22l1.5 3.5L31 27l-3.5 1.5L26 32l-1.5-3.5L21 27l3.5-1.5L26 22Z" />
          </g>
        </symbol>

        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M4 12h15m0 0-6-6m6 6-6 6" className="w-stroke" />
        </symbol>

        <symbol id="i-pin" viewBox="0 0 24 24">
          <g className="w-stroke">
            <path d="M12 22s8-7 8-12a8 8 0 1 0-16 0c0 5 8 12 8 12Z" />
            <circle cx="12" cy="10" r="3" />
          </g>
        </symbol>

        <symbol id="i-cal" viewBox="0 0 24 24">
          <g className="w-stroke">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </g>
        </symbol>

        <symbol id="i-bell" viewBox="0 0 24 24">
          <g className="w-stroke">
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </g>
        </symbol>

        <symbol id="i-users" viewBox="0 0 24 24">
          <g className="w-stroke">
            <circle cx="9" cy="8" r="3.5" />
            <path d="M2 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
            <path d="M16 5.5A3.5 3.5 0 0 1 16 12M18 20c0-2.5-.9-4.7-2.4-6.3" />
          </g>
        </symbol>

        {/* Social Icons */}
        <symbol id="s-instagram" viewBox="0 0 24 24">
          <g className="w-stroke">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
          </g>
        </symbol>

        <symbol id="s-x" viewBox="0 0 24 24">
          <path d="M3 3h4.2l5 6.8L17.6 3H21l-7.1 8.5L21.4 21h-4.2l-5.4-7.3L6 21H2.6l7.5-9L3 3Z" fill="currentColor" />
        </symbol>

        <symbol id="s-linkedin" viewBox="0 0 24 24">
          <g className="w-stroke">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
          </g>
        </symbol>

        <symbol id="s-youtube" viewBox="0 0 24 24">
          <g className="w-stroke">
            <rect x="2" y="5" width="20" height="14" rx="4" />
            <path d="M10 9.2l5 2.8-5 2.8V9.2Z" />
          </g>
        </symbol>

        <symbol id="s-whatsapp" viewBox="0 0 24 24">
          <g className="w-stroke">
            <path d="M3 21l1.5-4.4A8.5 8.5 0 1 1 8 20.4L3 21Z" />
            <path d="M9 9c0 4 2 6 6 6 1 0 1-1.5 0-2s-1.5.5-2 0-1.5-1.5-1-2 .5-1 0-2S9 8 9 9Z" />
          </g>
        </symbol>

        <symbol id="s-mail" viewBox="0 0 24 24">
          <g className="w-stroke">
            <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
            <path d="m3 7 9 6 9-6" />
          </g>
        </symbol>

        <symbol id="s-globe" viewBox="0 0 24 24">
          <g className="w-stroke">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
};

export default DncWarliSprites;
