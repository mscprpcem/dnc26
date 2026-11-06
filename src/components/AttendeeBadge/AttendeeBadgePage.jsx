import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Share2,
  Check,
  Calendar,
  MapPin,
} from 'lucide-react';
import DncWarliSprites from '../DncBrutal/DncWarliSprites.jsx';
import DncAttendeeBadge from '../DncBrutal/DncAttendeeBadge.jsx';
import DncFooter from '../DncBrutal/DncFooter.jsx';
import '../DncBrutal/DncBrutalStyles.css';

export const AttendeeBadgePage = ({ onBack }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Attendee Badge Studio | .NET Conf 2026 Amravati";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleBackToHome = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.pushState({}, '', '/');
      window.location.pathname = '/';
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Attendee Badge Studio - .NET Conf 2026 Amravati',
        text: 'Generate and download your official attendee badge for .NET Conf 2026 Amravati!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  return (
    <div className="dnc-fest-canvas min-h-screen text-[#120838] font-sans selection:bg-[#512BD4] selection:text-white flex flex-col justify-between">
      {/* 0. Paper Grain Overlay & Embedded Sprites */}
      <div className="grain-overlay" aria-hidden="true"></div>
      <DncWarliSprites />

      {/* 1. TOP BAR — Clean Back-to-Page Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b-2 border-black/10 px-4 sm:px-6 lg:px-10 py-3">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className="btn btn--gold btn--sm cursor-pointer inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to .NET Conf 2026</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="hidden md:flex items-center gap-2 border-r border-black/15 pr-3 text-xs font-mono font-bold text-stone-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
                January 2–3, 2027
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
                Swami Vivekanand Auditorium, PRPCEM
              </span>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="btn btn--ghost btn--sm cursor-pointer"
              title="Share Badge Studio link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN BADGE STUDIO PAGE CONTENT */}
      <main id="main" className="flex-1">
        <section className="section band--purple" id="badge-studio" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: '4rem' }}>
          <div className="wrap">
            <div className="sechead sechead--center">
              <p className="eyebrow" style={{ justifyContent: 'center' }}>
                Official Delegate Pass · Badge Studio
              </p>
              <h1 className="h-sec">
                Create Your Attendee Badge.
              </h1>
              <p className="lede" style={{ marginInline: 'auto' }}>
                Personalize your official .NET Conf 2026 Amravati pass, upload your portrait, and download your high-resolution badge to share across LinkedIn &amp; X!
              </p>
            </div>

            {/* Themed Studio Container */}
            <div
              className="sticker"
              style={{
                padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                background: '#FFFFFF',
                borderColor: 'var(--border-light)',
                boxShadow: '6px 6px 0 var(--purple)',
                borderRadius: '16px',
              }}
            >
              <DncAttendeeBadge isStandalonePage={true} />
            </div>
          </div>
        </section>
      </main>

      {/* 3. OFFICIAL CONFERENCE FOOTER */}
      <DncFooter />
    </div>
  );
};

export default AttendeeBadgePage;
