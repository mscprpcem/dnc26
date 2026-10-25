import React from 'react';

export const DncSponsors = () => {
  return (
    <section className="section band--sun" id="sponsors" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">Ecosystem, Tools &amp; Sponsorship</p>
            <h2 className="h-sec">
              Not Just .NET.<br />
              AI, GitHub, Cloud &amp; Tools.
            </h2>
          </div>
          <p className="lede">
            .NET Conf 2026 brings together the entire modern developer stack &mdash; uniting .NET 11, Enterprise AI, Microsoft Azure, and engineering tools.
          </p>
        </div>

        <div className="tiers sticker" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)', marginTop: '2rem' }}>
          {/* 1. TITLE */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFE89E] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  TITLE
                </span>
              </div>
              <b style={{ color: '#120838' }}>Host Institution &amp; Title Partners</b>
              <i></i>
            </div>
            <div className="slots">
              {/* PRPCEM Amravati */}
              <a
                href="https://prpotepatilengg.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#120838]"
                title="PRPCEM Amravati"
                aria-label="PRPCEM Amravati"
              >
                <img
                  src="/logos/prpcem-logo.jpeg"
                  alt="PRPCEM Amravati"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
              </a>

              {/* IBM */}
              <a
                href="https://community.ibm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#120838]"
                title="IBM"
                aria-label="IBM"
              >
                <img
                  src="/logos/User-Groups-page-promo.png"
                  alt="IBM"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
              </a>

              {/* Microsoft */}
              <a
                href="https://www.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile sponsor-tile--wide hover:border-[#00A4EF]"
                title="Microsoft"
                aria-label="Microsoft"
              >
                <img
                  src="/Title%20Sponsor/microsoft.png"
                  alt="Microsoft"
                  className="sponsor-tile-img sponsor-tile-img--wide"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* 2. PLATINUM */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A4EF]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  PLATINUM
                </span>
              </div>
              <b style={{ color: '#120838' }}>Platinum Sponsor</b>
              <i></i>
            </div>
            <div className="slots">
              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Platinum%20Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#00A4EF] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#00A4EF] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Platinum Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Announcing Soon</span>
                </div>
              </a>
            </div>
          </div>

          {/* 3. GOLD */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FEF3C7] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  GOLD
                </span>
              </div>
              <b style={{ color: '#120838' }}>Gold Sponsors</b>
              <i></i>
            </div>
            <div className="slots">
              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Gold%20Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#F59E0B] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#F59E0B] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Gold Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Announcing Soon</span>
                </div>
              </a>
            </div>
          </div>

          {/* 4. SILVER */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#64748B]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  SILVER
                </span>
              </div>
              <b style={{ color: '#120838' }}>Silver Sponsors</b>
              <i></i>
            </div>
            <div className="slots">
              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Silver%20Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#64748B] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#64748B] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Silver Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Announcing Soon</span>
                </div>
              </a>
            </div>
          </div>

          {/* 5. BRONZE */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFEDD5] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  BRONZE
                </span>
              </div>
              <b style={{ color: '#120838' }}>Bronze Sponsors</b>
              <i></i>
            </div>
            <div className="slots">
              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Bronze%20Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#EA580C] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#EA580C] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Bronze Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Announcing Soon</span>
                </div>
              </a>
            </div>
          </div>

          {/* 6. IN-KIND SUPPORT */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#CFFAFE] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  IN-KIND SUPPORT
                </span>
              </div>
              <b style={{ color: '#120838' }}>Tooling, Cloud &amp; Swag Partners</b>
              <i></i>
            </div>
            <div className="slots">
              {/* JetBrains */}
              <a
                href="https://www.jetbrains.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#FE2857]"
                title="JetBrains"
                aria-label="JetBrains"
              >
                <img
                  src="/In%20%20kind%20support/Jetbrains/jetbrains.png"
                  alt="JetBrains"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
              </a>

              {/* Microsoft Azure */}
              <a
                href="https://azure.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile sponsor-tile--wide hover:border-[#0078D4]"
                title="Microsoft Azure"
                aria-label="Microsoft Azure"
              >
                <img
                  src="/In%20%20kind%20support/Microsoft%20Azure/azure.png"
                  alt="Microsoft Azure"
                  className="sponsor-tile-img sponsor-tile-img--wide"
                  loading="lazy"
                />
              </a>

              {/* .xyz */}
              <a
                href="https://gen.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#120838]"
                title=".xyz Domains"
                aria-label=".xyz Domains"
              >
                <img
                  src="/logos/xyz-logo-color.png"
                  alt=".xyz Domains"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
              </a>

              {/* In-Kind Inquiry Slot */}
              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=In-Kind%20Support%20Inquiry%20-%20.NET%20Conf%202026"
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#06B6D4] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#06B6D4] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Partner with In-Kind Support</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Tools, Vouchers &amp; Cloud</span>
                </div>
              </a>
            </div>
          </div>

          {/* 7. COMMUNITY SUPPORT */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FCE7F3] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E0199E]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  COMMUNITY SUPPORT
                </span>
              </div>
              <b style={{ color: '#120838' }}>Community Chapters &amp; Grassroots Partners</b>
              <i></i>
            </div>
            <div className="slots">
              {/* IBM User Group Amravati */}
              <div
                className="sponsor-tile hover:border-[#120838]"
                title="IBM User Group Amravati"
                aria-label="IBM User Group Amravati"
              >
                <img
                  src="/logos/User-Groups-page-promo.png"
                  alt="IBM User Group Amravati"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
              </div>

              {/* Global AI Amravati */}
              <div
                className="sponsor-tile hover:border-[#d5522b]"
                title="Global AI Amravati"
                aria-label="Global AI Amravati"
              >
                <img
                  src="/Community%20Partner/logo.svg"
                  alt="Global AI Amravati"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
              </div>

              {/* Microsoft Student Club PRPCEM */}
              <a
                href="https://www.mscprpcem.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#512BD4]"
                title="Microsoft Student Club PRPCEM"
                aria-label="Microsoft Student Club PRPCEM"
              >
                <img
                  src="/logos/mscprpcem-logo.png"
                  alt="Microsoft Student Club PRPCEM"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
              </a>

              {/* Community Inquiry */}
              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Community%20Partnership%20-%20.NET%20Conf%202026"
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#E0199E] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#E0199E] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Join as Community Partner</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Student Clubs &amp; Dev Chapters</span>
                </div>
              </a>
            </div>
          </div>

          {/* 8. CFP PARTNER */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE9FE] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1BA39C]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  CFP PARTNER
                </span>
              </div>
              <b style={{ color: '#120838' }}>Call for Proposals Platform</b>
              <i></i>
            </div>
            <div className="slots">

              {/* Sessionize */}
              <a
                href="https://sessionize.com/dnc26/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#1BA39C]"
                title="Sessionize"
                aria-label="Sessionize"
              >
                <img
                  src="/CFP%20Partner/sessionize-logo.png"
                  alt="Sessionize"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* CTA Row */}
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderTop: '1px dashed rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
            <p style={{ color: 'var(--text-emphasis)', fontSize: '.95rem' }}>
              Want to sponsor or partner with .NET Conf 2026? Custom sponsorship decks available for campus hiring, technology booths, and workshop stages.
            </p>
            <a
              className="btn btn--primary btn--sm"
              href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
            >
              <span>Download Sponsor Deck</span>
              <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncSponsors;
