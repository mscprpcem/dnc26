import React, { useState, useEffect } from 'react';
import { Sparkles, Download, Share2, ArrowRight, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { BloomCanvas } from './BloomCanvas.jsx';
import { BloomFallbackCanvas } from './BloomFallbackCanvas.jsx';
import { generateFlowerConfig } from './proceduralFlower.js';
import './bloomStyles.css';

export const BloomShareView = ({ attendeeId, onGoToConf }) => {
  const [attendee, setAttendee] = useState(null);
  const [flowerConfig, setFlowerConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    const fetchAttendeeData = async () => {
      setIsLoading(true);
      try {
        if (attendeeId && attendeeId !== 'demo') {
          const res = await fetch(`/api/bloom/creation/${attendeeId}`);
          if (res.ok) {
            const data = await res.json();
            if (data.attendee) {
              setAttendee(data.attendee);
              const config = generateFlowerConfig(data.attendee.name, data.attendee.email);
              setFlowerConfig(config);
              setIsLoading(false);
              return;
            }
          }
        }
      } catch (err) {
        console.warn('Could not fetch creation from server, rendering local configuration', err);
      }

      // Fallback demo attendee
      const demoAttendee = {
        id: attendeeId || 'demo',
        name: 'Inspiring Developer',
        email: 'developer@dotnetconf.in',
        archetype: 'Cosmic Orchid',
      };
      setAttendee(demoAttendee);
      setFlowerConfig(generateFlowerConfig(demoAttendee.name, demoAttendee.email));
      setIsLoading(false);
    };

    fetchAttendeeData();
  }, [attendeeId]);

  const shareText = `I just bloomed my digital future at .NET Conf 2026 Amravati! 🌸 Every great idea starts with a seed. #dotnetconf #dotnetconfamt`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://dotnetconf.in/bloom';

  const handleShareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    });
  };

  if (isLoading || !flowerConfig) {
    return (
      <div className="bloom-kiosk-root flex items-center justify-center text-emerald-400 font-mono text-sm">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          <span>Blooming flower artwork...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bloom-kiosk-root relative min-h-screen overflow-y-auto">
      <div className="bloom-vignette pointer-events-none" />
      <div className="bloom-glow-radial pointer-events-none" />

      {/* 3D Bloomed Flower Canvas in Background */}
      <BloomCanvas flowerConfig={flowerConfig} stage={11} subProgress={1.0} interactive={true} />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between p-4 sm:p-8 max-w-4xl mx-auto">
        {/* Top Navbar */}
        <header className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              .NET Conf Amravati
            </span>
          </div>

          <button
            type="button"
            onClick={onGoToConf}
            className="bloom-btn-ghost text-xs py-1.5 px-3.5 cursor-pointer"
          >
            <span>Visit Conference Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </header>

        {/* Center Main Card */}
        <main className="my-auto py-8">
          <div className="bloom-glass-card p-6 sm:p-10 space-y-6 max-w-xl mx-auto text-left shadow-2xl">
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 font-bold">
                Bloom Your Future · Digital Artwork
              </span>
              <h1 className="bloom-title-serif text-3xl sm:text-5xl font-black text-white tracking-wide">
                {attendee?.name}
              </h1>
              <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 font-mono text-[11px] text-emerald-300">
                {flowerConfig.archetype}
              </div>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-stone-200 leading-relaxed border-l-2 border-emerald-500/60 pl-3">
              &ldquo;Every developer starts with an idea. What you build makes it bloom.&rdquo;
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`/api/bloom/video/${attendee?.id || 'demo'}`}
                download={`bloom-future-${attendee?.name?.replace(/\s+/g, '-').toLowerCase() || 'creation'}.mp4`}
                className="bloom-btn-primary w-full sm:w-auto text-xs sm:text-sm py-3 px-5 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download MP4 Video</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="bloom-btn-ghost flex-1 py-3 px-4 text-xs font-mono font-bold text-emerald-300 hover:text-white cursor-pointer"
                  title="Share on WhatsApp"
                >
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  className="bloom-btn-ghost flex-1 py-3 px-4 text-xs font-mono font-bold text-sky-300 hover:text-white cursor-pointer"
                  title="Share on X / Twitter"
                >
                  X (Twitter)
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="bloom-btn-ghost py-3 px-3 text-xs font-mono cursor-pointer"
                  title="Copy share link"
                >
                  {copiedShare ? 'Copied!' : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Conference Details Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                January 2–3, 2027
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                PRPCEM Amravati
              </span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center font-mono text-[11px] text-stone-400 tracking-wider uppercase py-4">
          Microsoft Student Club PRPCEM · .NET Conf 2026
        </footer>
      </div>
    </div>
  );
};

export default BloomShareView;

