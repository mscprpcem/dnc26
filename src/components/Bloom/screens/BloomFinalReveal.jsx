import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { RotateCcw, CheckCircle, ArrowRight, Share2, Sparkles, Video } from 'lucide-react';

export const BloomFinalReveal = ({
  attendee,
  flowerConfig,
  onReplay,
  onContinueToCompletion,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState('');

  // Permanent link for this attendee's creation
  const creationUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/bloom/view/${attendee?.id || 'demo'}`
    : 'https://dotnetconf.in/bloom';

  useEffect(() => {
    QRCode.toDataURL(creationUrl, {
      width: 140,
      margin: 1,
      color: {
        dark: '#02180C',
        light: '#F0FDF4',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR code generation error:', err));
  }, [creationUrl]);

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 pointer-events-none select-none">
      {/* Top Conference Branding */}
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/25 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-bold">
            .NET CONF AMRAVATI
          </span>
        </div>

        <div className="font-mono text-xs text-stone-300/80 uppercase tracking-widest">
          {flowerConfig?.archetype || 'Unique Botanical Artwork'}
        </div>
      </div>

      {/* Center Left/Right Glass Card with Attendee Personalized Title & QR Code */}
      <div className="w-full max-w-4xl mx-auto my-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center pointer-events-auto">
        {/* Left Column: Personalized Text */}
        <div className="md:col-span-7 bloom-glass-card p-6 sm:p-8 space-y-4 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Personalized Creation
            </span>
            <h2 className="bloom-title-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wide">
              {attendee?.name || 'Innovator'}
            </h2>
            <h3 className="font-serif text-lg sm:text-xl font-bold bloom-gold-gradient-text tracking-wider uppercase">
              BLOOM YOUR FUTURE
            </h3>
          </div>

          <p className="font-serif italic text-sm sm:text-base text-stone-200 leading-relaxed border-l-2 border-emerald-500/60 pl-3">
            &ldquo;Every developer starts with an idea. What you build makes it bloom.&rdquo;
          </p>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-200">
            <Video className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Your 1080p personalized video is rendering asynchronously in the background. It will arrive in your inbox at <strong>{attendee?.email}</strong>.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onReplay}
              className="bloom-btn-ghost text-xs sm:text-sm py-2.5 px-4 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-emerald-400" />
              <span>Replay Animation</span>
            </button>

            <button
              type="button"
              onClick={onContinueToCompletion}
              className="bloom-btn-primary text-xs sm:text-sm py-2.5 px-6 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Scan to Access Creation on Mobile */}
        <div className="md:col-span-5 bloom-glass-card p-6 flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
            Scan for Mobile Pass
          </span>

          {qrDataUrl ? (
            <div className="p-2.5 bg-emerald-50 rounded-2xl border-2 border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
              <img
                src={qrDataUrl}
                alt="Scan to access flower creation"
                className="w-32 h-32 rounded-lg"
              />
            </div>
          ) : (
            <div className="w-32 h-32 bg-emerald-950/60 rounded-xl flex items-center justify-center border border-emerald-500/30">
              <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <p className="font-sans text-[11px] text-stone-300 max-w-[200px] leading-tight">
            Scan with your phone to view, download, and share your bloomed flower.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center font-mono text-[11px] text-stone-400 tracking-wider uppercase opacity-75">
        .NET Conf 2026 · Amravati Edition · Laptop Experience Kiosk
      </div>
    </div>
  );
};

export default BloomFinalReveal;

