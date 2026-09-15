import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Download,
  Share2,
  Copy,
  Check,
  Sparkles,
  Circle,
  Square,
  Ticket,
  Hexagon,
  CheckCircle2,
  ExternalLink,
  Bot,
  UserCheck,
  Move,
  ZoomIn,
  RotateCw,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { LinkedInIcon, XIcon, WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { BADGE_SHAPES, BADGE_THEMES, renderBadge } from './badgeRenderer.js';
import { eventData } from '../../data/event.js';

// Official .NET Bot Mascot variants
const MASCOT_OPTIONS = [
  {
    id: 'bot_frontal',
    name: 'Classic Bot',
    url: '/mascot/bot_frontal.png',
  },
  {
    id: 'bot_patch',
    name: 'Bot Patch',
    url: '/mascot/dotnet-bot-patch.png',
  },
  {
    id: 'bot_head',
    name: 'Bot Head',
    url: '/mascot/bot_head.png',
  },
  {
    id: 'bot_jetpack',
    name: 'Jetpack Bot',
    url: '/mascot/bot_jetpack.png',
  },
];

const ATTENDEE_ROLES = [
  'Student Developer',
  'Software Engineer',
  'Cloud & AI Enthusiast',
  'Community Contributor',
  'Keynote Speaker',
  'VIP Delegate',
];

const ATTENDEE_TYPES = [
  { id: 'ATTENDEE', label: 'Attendee' },
  { id: 'STUDENT', label: 'Student' },
  { id: 'SPEAKER', label: 'Speaker' },
  { id: 'VIP', label: 'VIP' },
  { id: 'VOLUNTEER', label: 'Volunteer' },
];

export const AttendeeBadge = () => {
  // Attendee Form State
  const [name, setName] = useState('Alex Morgan');
  const [role, setRole] = useState('Student Developer');
  const [institution, setInstitution] = useState('');
  const [attendeeType, setAttendeeType] = useState('ATTENDEE');
  const [isAttending, setIsAttending] = useState(true);

  // Badge Customization State
  const [shape, setShape] = useState(BADGE_SHAPES.CIRCLE);
  const [themeId, setThemeId] = useState('dotnet');
  const [selectedMascotUrl, setSelectedMascotUrl] = useState(MASCOT_OPTIONS[0].url);

  // Image Positioning & Transform Controls (Zoom, Rotation, Pan X/Y)
  const [showAdjustments, setShowAdjustments] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  const handleResetImageTransform = () => {
    setZoom(1);
    setRotation(0);
    setPanX(0);
    setPanY(0);
  };

  const handleSelectMascot = (url) => {
    setSelectedMascotUrl(url);
    handleResetImageTransform();
  };

  // UI state
  const [copiedText, setCopiedText] = useState(false);
  const [copiedImage, setCopiedImage] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'theme'

  // Canvas and image references
  const canvasRef = useRef(null);
  const mascotImageRef = useRef(null);

  // Toast notification helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Preload Mascot Image
  useEffect(() => {
    const img = new Image();
    img.src = selectedMascotUrl;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      mascotImageRef.current = img;
      triggerCanvasRender();
    };
    img.onerror = () => {
      console.warn('Failed to load mascot image, trying fallback');
      const fallback = new Image();
      fallback.src = '/mascot/bot_frontal.png';
      fallback.crossOrigin = 'anonymous';
      fallback.onload = () => {
        mascotImageRef.current = fallback;
        triggerCanvasRender();
      };
    };
  }, [selectedMascotUrl]);

  // Canvas Render trigger
  const triggerCanvasRender = useCallback(() => {
    if (!canvasRef.current) return;

    renderBadge(canvasRef.current, {
      shape,
      themeId,
      name: name.trim() || 'Attendee Name',
      role: role.trim() || 'Community Delegate',
      institution: institution.trim(),
      attendeeType,
      mascotImage: mascotImageRef.current,
      zoom,
      rotation,
      panX,
      panY,
    });
  }, [shape, themeId, name, role, institution, attendeeType, zoom, rotation, panX, panY]);

  useEffect(() => {
    triggerCanvasRender();
  }, [triggerCanvasRender]);

  // Social Post Text Generator
  const getSharePostText = () => {
    const eventUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.mscprpcem.tech';
    return `🚀 I'm attending .NET Conf 2026 Amravati!

Excited to connect with fellow developers, learn modern .NET, Azure Cloud, and Generative AI! 🇮🇳

Get your custom official attendee badge and register here:
${eventUrl}

#DotNetConf #DotNetConf2026 #Microsoft #Cloud #AI #SoftwareEngineering #Amravati`;
  };

  // Download high-resolution PNG
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsDownloading(true);
    try {
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      const safeName = name.trim().toLowerCase().replace(/[^a-z0-9]/g, '-') || 'attendee';
      link.download = `dotnetconf2026-badge-${safeName}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('🎉 Badge downloaded in high resolution! Ready to share!');
    } catch (err) {
      console.error('Download error:', err);
      showToast('Download error. Please right-click or long-press the badge image to save.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Post to LinkedIn
  const handleShareLinkedIn = () => {
    handleDownload();
    const text = getSharePostText();
    navigator.clipboard?.writeText(text).catch(() => {});
    const siteUrl = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://www.mscprpcem.tech');
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}`;

    showToast('📋 Post text copied & badge downloaded! Paste caption and attach your badge on LinkedIn! 🚀');
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  // Post to Twitter / X
  const handleShareTwitter = () => {
    const text = encodeURIComponent(
      `I'm attending .NET Conf 2026 Amravati! 🚀 Connect with me at Central India's premier .NET conference!\n\nGenerate your attendee badge here:`
    );
    const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://www.mscprpcem.tech');
    const hashtags = 'DotNetConf,DotNetConf2026,Amravati,Microsoft';
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  // Share to WhatsApp
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(getSharePostText());
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Web Share API
  const handleNativeShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (navigator.share) {
      try {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File([blob], 'dotnetconf2026-badge.png', { type: 'image/png' });

          const shareData = {
            title: '.NET Conf 2026 Amravati - Official Badge',
            text: getSharePostText(),
            url: window.location.href,
          };

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ ...shareData, files: [file] });
          } else {
            await navigator.share(shareData);
          }
          showToast('Shared successfully!');
        }, 'image/png');
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Share error:', err);
        }
      }
    } else {
      handleCopyText();
    }
  };

  // Copy Image to Clipboard
  const handleCopyImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        if (navigator.clipboard && window.ClipboardItem) {
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          setCopiedImage(true);
          showToast('Badge image copied to clipboard! Paste (Ctrl+V) anywhere.');
          setTimeout(() => setCopiedImage(false), 2500);
        } else {
          handleDownload();
        }
      }, 'image/png');
    } catch (err) {
      console.warn('Clipboard image copy not supported', err);
      handleDownload();
    }
  };

  // Copy Post Caption Text
  const handleCopyText = () => {
    const text = getSharePostText();
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(true);
      showToast('Share text copied! Ready to paste on LinkedIn, Twitter, or WhatsApp.');
      setTimeout(() => setCopiedText(false), 2500);
    });
  };

  return (
    <section id="attendee-badge" className="w-full py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Soft Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-r from-[#512BD4]/8 via-[#D600AA]/5 to-[#28C2D1]/8 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header (Mobile-optimized) */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3 border border-[#DCD5F6] shadow-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#512BD4]" />
            <span>Badge Studio</span>
          </div>

          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-2 sm:mb-3">
            I am Attending <span className="community-event-gradient-text">Badge Generator</span>
          </h2>

          <p className="text-xs sm:text-base text-[#190649]/80 leading-relaxed max-w-2xl mx-auto px-2">
            Get your official <strong>.NET Conf 2026 Amravati</strong> badge featuring the .NET Bot mascot! Adjust the artwork with zoom, rotate, and pan controls, then download and share with your network.
          </p>

          {/* Attending Status Banner */}
          <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 sm:gap-3 p-1 pl-3 sm:pl-4 pr-1.5 sm:pr-2 bg-white/90 backdrop-blur-md rounded-2xl border-2 border-[#DCD5F6] shadow-sm max-w-full">
            <span className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Attending .NET Conf 2026?</span>
            </span>
            <button
              type="button"
              onClick={() => setIsAttending(!isAttending)}
              className={`py-1 sm:py-1.5 px-3 sm:px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isAttending
                  ? 'bg-gradient-to-r from-[#512BD4] to-[#D600AA] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isAttending ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>I'm Attending!</span>
                </>
              ) : (
                <span>Click to Attend</span>
              )}
            </button>
          </div>
        </div>

        {/* Main Grid: Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Interactive Canvas Live Preview */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center lg:sticky lg:top-24 w-full">
            
            {/* Canvas Frame Container (Light Theme & Mobile-fit) */}
            <div className="badge-canvas-wrapper w-full max-w-[440px] sm:max-w-[480px] p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/95 to-[#F9F7FD]/90 backdrop-blur-xl border-2 border-[#DCD5F6] shadow-xl relative group box-border">
              
              {/* Live Badge Preview Canvas */}
              <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-b from-[#FAF8FF] via-white to-[#F2EDFD] border border-[#DCD5F6]/80 shadow-inner aspect-square">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full object-contain select-none transition-transform duration-200 drop-shadow-md"
                  style={{
                    aspectRatio: shape === BADGE_SHAPES.PASS ? '1080 / 1440' : '1 / 1',
                    maxHeight: shape === BADGE_SHAPES.PASS ? '500px' : '420px',
                  }}
                />

                {/* Badge HD Preview watermark */}
                <div className="absolute bottom-2 left-2.5 pointer-events-none opacity-85 text-[9px] sm:text-[10px] font-mono text-[#512BD4] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-[#DCD5F6]/70 shadow-xs">
                  1200x1200 HD Preview
                </div>
              </div>

              {/* Action Toolbar directly below Canvas */}
              <div className="mt-3 sm:mt-4 flex flex-col gap-2">
                
                {/* Primary Download Button */}
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl font-bold font-display text-xs sm:text-sm text-white bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] hover:from-[#4323B0] hover:via-[#681FD8] hover:to-[#B50090] shadow-md shadow-[#512BD4]/25 hover:shadow-lg hover:shadow-[#512BD4]/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Download Badge (High-Res PNG)</span>
                </button>

                {/* Social Share Group (iPhone SE friendly) */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={handleShareLinkedIn}
                    className="py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#0077B5] hover:bg-[#006097] text-white flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                    title="Post on LinkedIn"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>LinkedIn</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareTwitter}
                    className="py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#000000] hover:bg-[#222222] text-white flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                    title="Post on X (Twitter)"
                  >
                    <XIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Post to X</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                    title="Share on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                {/* Secondary Actions: Copy Image & Copy Caption */}
                <div className="flex items-center justify-between gap-1.5 sm:gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={handleCopyImage}
                    className="flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold bg-[#EEEAFB] hover:bg-[#E0D7F9] text-[#512BD4] flex items-center justify-center gap-1 sm:gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedImage ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedImage ? 'Copied!' : 'Copy Image'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyText}
                    className="flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold bg-[#EEEAFB] hover:bg-[#E0D7F9] text-[#512BD4] flex items-center justify-center gap-1 sm:gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedText ? <Check className="w-3 h-3 text-emerald-600" /> : <Share2 className="w-3 h-3" />}
                    <span>{copiedText ? 'Copied!' : 'Copy Text'}</span>
                  </button>

                  {/* Native Share on mobile */}
                  {typeof navigator !== 'undefined' && navigator.share && (
                    <button
                      type="button"
                      onClick={handleNativeShare}
                      className="p-1.5 sm:p-2 rounded-lg text-xs font-semibold bg-white border border-[#DCD5F6] text-[#512BD4] hover:bg-[#EEEAFB] transition-colors cursor-pointer"
                      title="More Sharing Options"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>

              {/* Toast Notification Alert */}
              {toastMessage && (
                <div className="mt-2.5 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{toastMessage}</span>
                </div>
              )}

            </div>

          </div>

          {/* RIGHT COLUMN: Customization Controls & Form Tabs */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 w-full">
            
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border-2 border-[#DCD5F6] p-4 sm:p-7 shadow-sm box-border">
              
              {/* Tab Navigation */}
              <div className="flex items-center gap-2 pb-3.5 mb-4 sm:mb-5 border-b border-[#DCD5F6]/80 overflow-x-auto scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`flex-1 py-2 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5 ${
                    activeTab === 'details'
                      ? 'bg-[#512BD4] text-white shadow-xs'
                      : 'bg-[#EEEAFB] text-[#512BD4] hover:bg-[#E0D7F9]'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>1. Details & Artwork</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('theme')}
                  className={`flex-1 py-2 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5 ${
                    activeTab === 'theme'
                      ? 'bg-[#512BD4] text-white shadow-xs'
                      : 'bg-[#EEEAFB] text-[#512BD4] hover:bg-[#E0D7F9]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>2. Theme & Download</span>
                </button>
              </div>

              {/* TAB 1: Attendee Details, Shape & Image Transform */}
              {activeTab === 'details' && (
                <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-150">
                  
                  {/* Shape Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#512BD4] mb-2">
                      Choose Badge Shape
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      
                      {/* Circular Shape */}
                      <button
                        type="button"
                        onClick={() => setShape(BADGE_SHAPES.CIRCLE)}
                        className={`p-2.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          shape === BADGE_SHAPES.CIRCLE
                            ? 'border-[#512BD4] bg-[#EEEAFB]/90 shadow-sm text-[#512BD4]'
                            : 'border-[#DCD5F6] hover:border-[#9780E5] bg-white text-[#14053A]'
                        }`}
                      >
                        <Circle className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                        <span className="text-xs font-bold">Circular</span>
                        <span className="text-[10px] text-gray-500">Official Seal</span>
                      </button>

                      {/* Rounded Squircle */}
                      <button
                        type="button"
                        onClick={() => setShape(BADGE_SHAPES.ROUNDED)}
                        className={`p-2.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          shape === BADGE_SHAPES.ROUNDED
                            ? 'border-[#512BD4] bg-[#EEEAFB]/90 shadow-sm text-[#512BD4]'
                            : 'border-[#DCD5F6] hover:border-[#9780E5] bg-white text-[#14053A]'
                        }`}
                      >
                        <Square className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] rounded-lg" />
                        <span className="text-xs font-bold">Rounded</span>
                        <span className="text-[10px] text-gray-500">Card Badge</span>
                      </button>

                      {/* Conference Vertical Lanyard Badge */}
                      <button
                        type="button"
                        onClick={() => setShape(BADGE_SHAPES.PASS)}
                        className={`p-2.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          shape === BADGE_SHAPES.PASS
                            ? 'border-[#512BD4] bg-[#EEEAFB]/90 shadow-sm text-[#512BD4]'
                            : 'border-[#DCD5F6] hover:border-[#9780E5] bg-white text-[#14053A]'
                        }`}
                      >
                        <Ticket className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                        <span className="text-xs font-bold">Vertical</span>
                        <span className="text-[10px] text-gray-500">Lanyard Badge</span>
                      </button>

                      {/* Hexagon Sticker */}
                      <button
                        type="button"
                        onClick={() => setShape(BADGE_SHAPES.HEXAGON)}
                        className={`p-2.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          shape === BADGE_SHAPES.HEXAGON
                            ? 'border-[#512BD4] bg-[#EEEAFB]/90 shadow-sm text-[#512BD4]'
                            : 'border-[#DCD5F6] hover:border-[#9780E5] bg-white text-[#14053A]'
                        }`}
                      >
                        <Hexagon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                        <span className="text-xs font-bold">Hexagon</span>
                        <span className="text-[10px] text-gray-500">Dev Sticker</span>
                      </button>

                    </div>
                  </div>

                  {/* Mascot Style Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#512BD4] mb-2">
                      .NET Bot Mascot Artwork
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {MASCOT_OPTIONS.map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => handleSelectMascot(m.url)}
                          className={`p-2 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all cursor-pointer ${
                            selectedMascotUrl === m.url
                              ? 'border-[#512BD4] bg-[#EEEAFB] shadow-xs text-[#512BD4]'
                              : 'border-[#DCD5F6] hover:border-[#9780E5] bg-white text-[#14053A]'
                          }`}
                        >
                          <div className="w-9 h-9 flex items-center justify-center">
                            <img src={m.url} alt={m.name} className="max-w-full max-h-full object-contain" />
                          </div>
                          <span className="text-[11px] font-bold">{m.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mascot Image Positioning & Transform Controls (Hidden by default with > toggle icon) */}
                  <div className="rounded-2xl bg-[#F8F6FE] border border-[#DCD5F6] overflow-hidden transition-all">
                    <button
                      type="button"
                      onClick={() => setShowAdjustments(!showAdjustments)}
                      className="w-full p-3 sm:p-3.5 flex items-center justify-between hover:bg-[#EEEAFB]/70 transition-colors cursor-pointer text-left select-none"
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight
                          className={`w-4 h-4 text-[#512BD4] transition-transform duration-200 shrink-0 ${
                            showAdjustments ? 'rotate-90' : ''
                          }`}
                        />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#512BD4] flex items-center gap-1.5">
                          <Move className="w-3.5 h-3.5" />
                          <span>Adjust Mascot Artwork</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {(zoom !== 1 || rotation !== 0 || panX !== 0 || panY !== 0) && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#512BD4] text-white">
                            Customized
                          </span>
                        )}
                        <span className="text-[11px] font-semibold text-[#512BD4]">
                          {showAdjustments ? 'Hide' : 'Show'}
                        </span>
                      </div>
                    </button>

                    {/* Collapsible Sliders Body */}
                    {showAdjustments && (
                      <div className="p-3.5 sm:p-4 pt-1 sm:pt-1 border-t border-[#DCD5F6]/80 space-y-3.5 animate-in fade-in duration-150">
                        <div className="flex justify-end pt-1">
                          <button
                            type="button"
                            onClick={handleResetImageTransform}
                            className="text-[11px] font-bold text-[#512BD4] hover:text-[#3B1CA7] flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reset Position</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Zoom / Scale */}
                          <div className="bg-white p-2.5 rounded-xl border border-[#DCD5F6]">
                            <div className="flex justify-between items-center text-xs font-semibold text-[#14053A] mb-1.5">
                              <span className="flex items-center gap-1">
                                <ZoomIn className="w-3.5 h-3.5 text-[#512BD4]" />
                                <span>Scale / Zoom</span>
                              </span>
                              <span className="font-mono text-[11px] font-bold text-[#512BD4]">
                                {Math.round(zoom * 100)}%
                              </span>
                            </div>
                            <input
                              type="range"
                              min="0.7"
                              max="2.0"
                              step="0.05"
                              value={zoom}
                              onChange={(e) => setZoom(parseFloat(e.target.value))}
                              className="w-full accent-[#512BD4] cursor-pointer"
                            />
                          </div>

                          {/* Rotation */}
                          <div className="bg-white p-2.5 rounded-xl border border-[#DCD5F6]">
                            <div className="flex justify-between items-center text-xs font-semibold text-[#14053A] mb-1.5">
                              <span className="flex items-center gap-1">
                                <RotateCw className="w-3.5 h-3.5 text-[#512BD4]" />
                                <span>Rotate</span>
                              </span>
                              <span className="font-mono text-[11px] font-bold text-[#512BD4]">
                                {rotation > 0 ? `+${rotation}°` : `${rotation}°`}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="-180"
                              max="180"
                              step="5"
                              value={rotation}
                              onChange={(e) => setRotation(parseInt(e.target.value))}
                              className="w-full accent-[#512BD4] cursor-pointer"
                            />
                          </div>

                          {/* Pan Left / Right (X) */}
                          <div className="bg-white p-2.5 rounded-xl border border-[#DCD5F6]">
                            <div className="flex justify-between items-center text-xs font-semibold text-[#14053A] mb-1.5">
                              <span>Pan Left / Right (X)</span>
                              <span className="font-mono text-[11px] font-bold text-[#512BD4]">
                                {panX > 0 ? `+${panX}px` : `${panX}px`}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="-120"
                              max="120"
                              step="2"
                              value={panX}
                              onChange={(e) => setPanX(parseInt(e.target.value))}
                              className="w-full accent-[#512BD4] cursor-pointer"
                            />
                          </div>

                          {/* Pan Up / Down (Y) */}
                          <div className="bg-white p-2.5 rounded-xl border border-[#DCD5F6]">
                            <div className="flex justify-between items-center text-xs font-semibold text-[#14053A] mb-1.5">
                              <span>Pan Up / Down (Y)</span>
                              <span className="font-mono text-[11px] font-bold text-[#512BD4]">
                                {panY > 0 ? `+${panY}px` : `${panY}px`}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="-120"
                              max="120"
                              step="2"
                              value={panY}
                              onChange={(e) => setPanY(parseInt(e.target.value))}
                              className="w-full accent-[#512BD4] cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Attendee Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Attendee Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      maxLength={32}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border-2 border-[#DCD5F6] focus:border-[#512BD4] focus:outline-none text-xs sm:text-sm font-semibold text-[#14053A] bg-white transition-colors"
                    />
                  </div>

                  {/* Role / Headline */}
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Role / Headline
                    </label>
                    <input
                      type="text"
                      value={role}
                      maxLength={40}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Student Developer / Software Engineer"
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border-2 border-[#DCD5F6] focus:border-[#512BD4] focus:outline-none text-xs sm:text-sm font-semibold text-[#14053A] bg-white transition-colors mb-2"
                    />

                    {/* Quick Role Presets */}
                    <div className="flex flex-wrap gap-1.5">
                      {ATTENDEE_ROLES.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                            role === r
                              ? 'bg-[#512BD4] text-white'
                              : 'bg-[#EEEAFB] text-[#512BD4] hover:bg-[#DCD5F6]'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* College / Organization */}
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      College / Institution Name
                    </label>
                    <input
                      type="text"
                      value={institution}
                      maxLength={48}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Company or College (Optional)"
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border-2 border-[#DCD5F6] focus:border-[#512BD4] focus:outline-none text-xs sm:text-sm font-semibold text-[#14053A] bg-white transition-colors"
                    />
                  </div>

                  {/* Attendee Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Badge Category Tag
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {ATTENDEE_TYPES.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setAttendeeType(t.id)}
                          className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-xl font-bold uppercase transition-all cursor-pointer ${
                            attendeeType === t.id
                              ? 'bg-gradient-to-r from-[#512BD4] to-[#D600AA] text-white shadow-xs'
                              : 'bg-[#EEEAFB] text-[#512BD4] hover:bg-[#DCD5F6]'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: Theme & Download */}
              {activeTab === 'theme' && (
                <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-150">
                  
                  {/* Theme Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#512BD4] mb-2.5">
                      Select Color Theme
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {Object.values(BADGE_THEMES).map((theme) => (
                        <button
                          key={theme.id}
                          type="button"
                          onClick={() => setThemeId(theme.id)}
                          className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all cursor-pointer ${
                            themeId === theme.id
                              ? 'border-[#512BD4] bg-[#EEEAFB] shadow-sm'
                              : 'border-[#DCD5F6] hover:border-[#9780E5] bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-7 h-7 rounded-xl flex items-center justify-center shadow-xs shrink-0"
                              style={{
                                background: `linear-gradient(135deg, ${theme.gradient[0]}, ${theme.gradient[1] || theme.gradient[0]})`,
                              }}
                            />
                            <span className="text-xs font-bold text-[#14053A]">
                              {theme.name}
                            </span>
                          </div>

                          {themeId === theme.id && (
                            <Check className="w-4 h-4 text-[#512BD4]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* HIGH-PRIORITY: Download & Share Action Box */}
                  <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FAF8FF] via-white to-[#F2EDFD] border-2 border-[#DCD5F6] shadow-sm space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#512BD4] to-[#D600AA] text-white flex items-center justify-center shadow-xs shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#14053A] leading-tight">
                          Your Badge is Ready to Claim!
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#190649]/70 leading-normal mt-0.5">
                          Download in high resolution or post directly to LinkedIn, Twitter, and WhatsApp.
                        </p>
                      </div>
                    </div>

                    {/* Prominent Download Button inside Step 2 */}
                    <button
                      type="button"
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl font-bold font-display text-xs sm:text-sm text-white bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] hover:from-[#4323B0] hover:via-[#681FD8] hover:to-[#B50090] shadow-md shadow-[#512BD4]/25 hover:shadow-lg hover:shadow-[#512BD4]/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Download Badge (High-Res PNG)</span>
                    </button>

                    {/* Social Share Grid */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-0.5">
                      <button
                        type="button"
                        onClick={handleShareLinkedIn}
                        className="py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#0077B5] hover:bg-[#006097] text-white flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                        title="Post on LinkedIn"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>LinkedIn</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleShareTwitter}
                        className="py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#000000] hover:bg-[#222222] text-white flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                        title="Post on X (Twitter)"
                      >
                        <XIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Post to X</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleShareWhatsApp}
                        className="py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                        title="Share on WhatsApp"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    {/* Quick copy options */}
                    <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5">
                      <button
                        type="button"
                        onClick={handleCopyImage}
                        className="flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold bg-white hover:bg-[#EEEAFB] text-[#512BD4] border border-[#DCD5F6] flex items-center justify-center gap-1 sm:gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedImage ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedImage ? 'Copied!' : 'Copy Image'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyText}
                        className="flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold bg-white hover:bg-[#EEEAFB] text-[#512BD4] border border-[#DCD5F6] flex items-center justify-center gap-1 sm:gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedText ? <Check className="w-3 h-3 text-emerald-600" /> : <Share2 className="w-3 h-3" />}
                        <span>{copiedText ? 'Copied!' : 'Copy Text'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Conference Credentials */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#EEEAFB]/60 border border-[#DCD5F6]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#512BD4] block mb-1">
                      Official Credentials
                    </span>
                    <ul className="text-xs text-[#14053A]/85 space-y-1 font-medium">
                      <li>• <strong>Conference:</strong> {eventData.name} {eventData.year} · {eventData.edition}</li>
                      <li>• <strong>Organizer:</strong> {eventData.organizer.name}</li>
                      <li>• <strong>Location:</strong> {eventData.location.city}, {eventData.location.state}</li>
                      <li>• <strong>Edition:</strong> Flagship Community Edition</li>
                    </ul>
                  </div>

                </div>
              )}

              {/* Navigation buttons inside Card */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#DCD5F6]/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#512BD4] font-bold">
                  <Bot className="w-4 h-4 shrink-0" />
                  <span className="hidden xs:inline">.NET Bot Official Badge</span>
                  <span className="xs:hidden">Official Badge</span>
                </div>

                <div className="flex items-center gap-2">
                  {activeTab !== 'details' && (
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition-colors"
                    >
                      Back
                    </button>
                  )}

                  {activeTab === 'theme' ? (
                    <button
                      type="button"
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="py-1.5 sm:py-2 px-3.5 sm:px-5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] hover:from-[#4323B0] hover:via-[#681FD8] hover:to-[#B50090] text-white cursor-pointer shadow-md shadow-[#512BD4]/25 hover:shadow-lg hover:shadow-[#512BD4]/40 flex items-center gap-1.5 active:scale-95 transition-all"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Download Badge</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveTab('theme')}
                      className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl text-xs font-bold bg-[#512BD4] hover:bg-[#4122AA] text-white cursor-pointer shadow-xs transition-colors"
                    >
                      Next: Theme & Download
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AttendeeBadge;
