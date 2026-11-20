import React, { useState, useRef } from 'react';
import {
  Download,
  Check,
  User,
  Briefcase,
  Building2,
  Upload,
  Camera,
  X,
  Calendar,
  MapPin,
  RotateCcw,
  Globe,
} from 'lucide-react';

export const DncAttendeeBadge = ({ isModal = false, isStandalonePage = false }) => {
  // Official defaults: bot head as default picture, blank input fields (no hardcoded attendee name)
  const defaultBotHead = '/mascot/bot_head.png';

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileInputRef = useRef(null);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Full Name is mandatory';
    if (!role.trim()) errors.role = 'Role / Designation is mandatory';
    if (!company.trim()) errors.company = 'Organization is mandatory';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPG, PNG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCustomPhotoUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    handleFileSelect(file);
  };

  const handleRemovePhoto = () => {
    setCustomPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClearInputs = () => {
    setName('');
    setRole('');
    setCompany('');
    setCustomPhotoUrl(null);
    setFormErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Safe helper to load image (never enforces crossOrigin on data URIs)
  const loadImage = (src) =>
    new Promise((resolve) => {
      if (!src) return resolve(null);
      const img = new Image();
      if (!src.startsWith('data:')) {
        img.crossOrigin = 'anonymous';
      }
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });

  // SVG Data URI helper for Canvas rendering
  const loadSvg = (svgStr) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
    });
  };

  // ─── Theme Colors matching reference badge ───
  const T = {
    purple: '#512BD4',        // .NET brand purple
    purpleDark: '#1F0E64',    // Frame stroke & header dark violet
    ink: '#0E0329',           // Extra bold dark title
    textSlate: '#334155',     // Organization text
    textMuted: '#475569',     // Icons & captions
    borderLine: '#CBD5E1',    // Dividers
    fontDisplay: '"Outfit", "Space Grotesk", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
  };

  // ─── Render 1080×1080 Canvas Badge (Exact Match with Motion Trails & Bot Head) ───
  const renderSquareCanvas = async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }

    const S = 1080;
    const canvas = document.createElement('canvas');
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext('2d');

    // Outer margin & card geometry
    const cardX = 40;
    const cardY = 40;
    const cardW = S - 80; // 1000px
    const cardH = S - 80; // 1000px
    const cardRadius = 38;

    ctx.clearRect(0, 0, S, S);

    // 1. Soft Ambient Outer Glow
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
    ctx.shadowColor = 'rgba(31, 14, 100, 0.16)';
    ctx.shadowBlur = 32;
    ctx.shadowOffsetY = 16;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();

    // 2. Main Card Background & Rounded Clip
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);

    // Smooth soft gradient (white to faint lavender on bottom/right)
    const bgGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(0.55, '#FFFFFF');
    bgGrad.addColorStop(1, '#F3EEFC');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Clip all subsequent drawing inside the rounded card!
    ctx.clip();

    // 2.1 Ethereal decorative curves on right/top-right
    ctx.save();
    const curveGrad = ctx.createRadialGradient(cardX + cardW, cardY, 80, cardX + cardW, cardY, 600);
    curveGrad.addColorStop(0, 'rgba(81, 43, 212, 0.12)');
    curveGrad.addColorStop(0.5, 'rgba(81, 43, 212, 0.04)');
    curveGrad.addColorStop(1, 'rgba(81, 43, 212, 0)');
    ctx.fillStyle = curveGrad;
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.restore();

    // 3. Load External Assets (Rocket, Shield Logo, User Photo / Bot Head, SVG Icons)
    const buildingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`;
    const calendarSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#120838" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`;
    const mapPinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#512BD4" stroke="#512BD4" stroke-width="1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3" fill="#FFFFFF"/></svg>`;
    const globeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#512BD4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;

    const photoSrcToLoad = customPhotoUrl || defaultBotHead;

    const [rocketImg, shieldLogoImg, portraitImg, iconBuilding, iconCalendar, iconMapPin, iconGlobe] = await Promise.all([
      loadImage('/assets/dotnetconf-bots-rocket-angled.png'),
      loadImage('/logos/mscprpcem-logo.png'),
      loadImage(photoSrcToLoad),
      loadSvg(buildingSvg),
      loadSvg(calendarSvg),
      loadSvg(mapPinSvg),
      loadSvg(globeSvg),
    ]);

    const leftX = cardX + 64; // 104px inside card

    // 4. Top-Left Brand Header
    // 4.1 "Microsoft Student Club"
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = T.purpleDark;
    ctx.font = `700 25px ${T.fontDisplay}`;
    ctx.fillText('Microsoft Student Club', leftX, cardY + 74);

    // 4.2 ".NET Conf"
    ctx.fillStyle = T.ink;
    ctx.font = `900 76px ${T.fontDisplay}`;
    ctx.fillText('.NET Conf', leftX, cardY + 152);

    // 4.3 "2026 Amravati"
    ctx.fillStyle = T.purple;
    ctx.font = `900 66px ${T.fontDisplay}`;
    ctx.fillText('2026 Amravati', leftX, cardY + 224);

    // 4.4 Decorative Tech Circuit Line (under "2026 Amravati")
    const circuitY = cardY + 258;
    ctx.save();
    ctx.strokeStyle = T.purple;
    ctx.fillStyle = T.purple;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Left dot
    ctx.beginPath();
    ctx.arc(leftX + 4, circuitY, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Circuit path with step up
    ctx.beginPath();
    ctx.moveTo(leftX + 6, circuitY);
    ctx.lineTo(leftX + 140, circuitY);
    ctx.lineTo(leftX + 155, circuitY - 10);
    ctx.lineTo(leftX + 255, circuitY - 10);
    ctx.stroke();

    // Right dot
    ctx.beginPath();
    ctx.arc(leftX + 259, circuitY - 10, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 5. Top-Right MSC PRPCEM Shield Logo
    if (shieldLogoImg) {
      const sW = 142;
      const sH = (shieldLogoImg.height / shieldLogoImg.width) * sW;
      const sX = cardX + cardW - sW - 52;
      const sY = cardY + 44;
      ctx.drawImage(shieldLogoImg, sX, sY, sW, sH);
    }

    // 6. "I'M ATTENDING" Capsule Pill
    const pillY = cardY + 294;
    const pillW = 252;
    const pillH = 58;
    const pillR = 29;

    ctx.save();
    ctx.shadowColor = 'rgba(81, 43, 212, 0.42)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 8;

    const pillGrad = ctx.createLinearGradient(leftX, 0, leftX + pillW, 0);
    pillGrad.addColorStop(0, '#6318E8');
    pillGrad.addColorStop(0.5, '#4F1CE4');
    pillGrad.addColorStop(1, '#3B15D6');
    ctx.fillStyle = pillGrad;
    ctx.beginPath();
    ctx.roundRect(leftX, pillY, pillW, pillH, pillR);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 22px ${T.fontDisplay}`;
    ctx.fillText("I'M ATTENDING", leftX + pillW / 2, pillY + pillH / 2);
    ctx.restore();

    // 7. Middle Row: Attendee Photo & Details (Harmonious proportions)
    const midY = 428;
    const photoW = 246;
    const photoH = 256;
    const photoR = 26;

    // 7.1 Photo Outer Border (Purple with subtle gap)
    ctx.save();
    ctx.strokeStyle = T.purple;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(leftX, midY, photoW, photoH, photoR);
    ctx.stroke();
    ctx.restore();

    // 7.2 Draw Attendee Photo or Default Bot Head
    if (portraitImg) {
      ctx.save();
      const inX = leftX + 4;
      const inY = midY + 4;
      const inW = photoW - 8;
      const inH = photoH - 8;
      const inR = photoR - 4;

      ctx.beginPath();
      ctx.roundRect(inX, inY, inW, inH, inR);
      ctx.clip();

      if (customPhotoUrl) {
        // User uploaded photo: scale to fill (cover)
        const scale = Math.max(inW / portraitImg.width, inH / portraitImg.height);
        const dw = portraitImg.width * scale;
        const dh = portraitImg.height * scale;
        const dx = inX + (inW - dw) / 2;
        const dy = inY + (inH - dh) / 2;
        ctx.drawImage(portraitImg, dx, dy, dw, dh);
      } else {
        // Default Bot Head: soft background fill and centered contain
        ctx.fillStyle = '#F3EEFC';
        ctx.fillRect(inX, inY, inW, inH);

        const pad = 22;
        const dw = inW - pad * 2;
        const dh = inH - pad * 2;
        const scale = Math.min(dw / portraitImg.width, dh / portraitImg.height);
        const nw = portraitImg.width * scale;
        const nh = portraitImg.height * scale;
        const dx = inX + (inW - nw) / 2;
        const dy = inY + (inH - nh) / 2;
        ctx.drawImage(portraitImg, dx, dy, nw, nh);
      }
      ctx.restore();
    }

    // 7.3 Vertical Divider Line between photo and text
    const dividerX = leftX + photoW + 28;
    ctx.save();
    ctx.strokeStyle = T.borderLine;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(dividerX, midY + 12);
    ctx.lineTo(dividerX, midY + photoH - 12);
    ctx.stroke();
    ctx.restore();

    // 8. Bottom-Right 3D Rocket with .NET Bots (Official DNC illustration)
    // Anchors the bottom-right corner solidly with proper bottom margin
    if (rocketImg) {
      const rW = 520;
      const rH = (rocketImg.height / rocketImg.width) * rW;
      const rX = cardX + cardW - rW - 12;
      const rY = cardY + cardH - rH - 24;
      ctx.drawImage(rocketImg, rX, rY, rW, rH);
    }

    // 9. Attendee Information Details (Drawn in front of all background art)
    const textX = dividerX + 32;
    const maxTextWidth = cardX + cardW - textX - 36;

    if (name.trim()) {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = T.ink;
      let nameFontSize = 44;
      ctx.font = `900 ${nameFontSize}px ${T.fontDisplay}`;
      while (ctx.measureText(name.trim()).width > maxTextWidth && nameFontSize > 22) {
        nameFontSize -= 2;
        ctx.font = `900 ${nameFontSize}px ${T.fontDisplay}`;
      }
      ctx.fillText(name.trim(), textX, midY + 72, maxTextWidth);
    }

    if (role.trim()) {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = T.purple;
      let roleFontSize = 28;
      ctx.font = `700 ${roleFontSize}px ${T.fontDisplay}`;
      while (ctx.measureText(role.trim()).width > maxTextWidth && roleFontSize > 16) {
        roleFontSize -= 2;
        ctx.font = `700 ${roleFontSize}px ${T.fontDisplay}`;
      }
      ctx.fillText(role.trim(), textX, midY + (name.trim() ? 136 : 72), maxTextWidth);
    }

    if (company.trim()) {
      const rowCompanyY = midY + (name.trim() && role.trim() ? 202 : (name.trim() || role.trim() ? 136 : 72));
      if (iconBuilding) {
        ctx.drawImage(iconBuilding, textX, rowCompanyY - 22, 28, 28);
      }
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = T.textSlate;
      let compFontSize = 24;
      ctx.font = `600 ${compFontSize}px ${T.fontBody}`;
      const compMaxWidth = maxTextWidth - 40;
      while (ctx.measureText(company.trim()).width > compMaxWidth && compFontSize > 15) {
        compFontSize -= 2;
        ctx.font = `600 ${compFontSize}px ${T.fontBody}`;
      }
      ctx.fillText(company.trim(), textX + 38, rowCompanyY, compMaxWidth);
    }

    // 10. Horizontal Divider Line (below attendee section)
    const hLineY = midY + photoH + 32;
    ctx.save();
    ctx.strokeStyle = T.borderLine;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(leftX, hLineY);
    ctx.lineTo(leftX + 470, hLineY);
    ctx.stroke();
    ctx.restore();

    // 11. Bottom-Left Section: Date, Venue & Event Portal Link (Cohesive vertical rhythm)
    const botY = 782;

    // Date
    if (iconCalendar) {
      ctx.drawImage(iconCalendar, leftX, botY - 28, 34, 34);
    }
    ctx.fillStyle = T.ink;
    ctx.font = `800 32px ${T.fontDisplay}`;
    ctx.fillText('January 2–3, 2027', leftX + 48, botY);

    // Venue
    const venueY = 848;
    if (iconMapPin) {
      ctx.drawImage(iconMapPin, leftX + 1, venueY - 28, 32, 36);
    }
    ctx.fillStyle = T.ink;
    ctx.font = `700 25px ${T.fontDisplay}`;
    ctx.fillText('Swami Vivekanand', leftX + 48, venueY - 4);
    ctx.fillText('Auditorium, PRPCEM', leftX + 48, venueY + 30);

    // Event Portal URL Link (dnc.mscprpcem.tech)
    const webY = 948;
    if (iconGlobe) {
      ctx.drawImage(iconGlobe, leftX + 1, webY - 26, 32, 32);
    }
    ctx.fillStyle = T.purple;
    ctx.font = `800 26px ${T.fontDisplay}`;
    ctx.fillText('dnc.mscprpcem.tech', leftX + 48, webY);

    // 12. Crisp Outer Card Border (Deep Violet / Indigo)
    ctx.restore(); // restore clip
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
    ctx.lineWidth = 4;
    ctx.strokeStyle = T.purpleDark;
    ctx.stroke();
    ctx.restore();

    return canvas;
  };

  const handleDownloadBadge = async () => {
    // Enforce mandatory fields before download
    if (!validateForm()) {
      return;
    }

    try {
      setIsDownloading(true);
      const canvas = await renderSquareCanvas();

      const link = document.createElement('a');
      link.download = `dnc26-badge-${name.trim().toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  // The inner studio 2-column layout (form + preview)
  const renderStudioContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

      {/* Left Column: Form Controls */}
      <div className="lg:col-span-5 bg-white border-2 border-[rgba(81,43,212,0.2)] rounded-2xl p-5 sm:p-7 shadow-[4px_4px_0px_0px_#512BD4] space-y-4 text-left">

        <div className="flex items-center justify-between pb-2 border-b border-[rgba(81,43,212,0.12)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#512BD4]"></span>
            <h4 className="font-[Outfit,sans-serif] font-black text-sm sm:text-base text-[#120838] uppercase tracking-wider">
              Delegate Details
            </h4>
          </div>
          {(name || role || company || customPhotoUrl) && (
            <button
              type="button"
              onClick={handleClearInputs}
              className="text-[11px] font-mono font-bold text-[#F65163] hover:text-red-800 flex items-center gap-1 cursor-pointer transition-colors"
              title="Clear all fields"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>

        {/* Direct Photo Upload Area */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Portrait Picture</span>
            </span>
            {customPhotoUrl && (
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="text-[11px] text-[#F65163] hover:text-red-800 font-bold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Reset to Bot Head</span>
              </button>
            )}
          </label>

          {customPhotoUrl ? (
            <div className="flex items-center gap-3.5 p-3 bg-[#FAF8FF] border-2 border-[rgba(81,43,212,0.2)] rounded-xl shadow-[2px_2px_0px_0px_#512BD4]">
              <img
                src={customPhotoUrl}
                alt="Uploaded preview"
                className="w-14 h-14 rounded-xl object-cover border-2 border-[#512BD4] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-xs">
                  <Check className="w-3.5 h-3.5" />
                  <span>Custom Photo Added</span>
                </div>
                <p className="text-[11px] text-[#5C5577] truncate mt-0.5">
                  Replaces the default .NET Bot Head.
                </p>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-xs font-mono font-bold bg-[#EEE7FB] text-[#512BD4] px-3 py-1.5 rounded-lg border border-[rgba(81,43,212,0.25)] hover:bg-[#512BD4] hover:text-white transition-colors cursor-pointer flex-shrink-0"
              >
                Change
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${isDragging
                  ? 'border-[#512BD4] bg-[#EEE7FB]'
                  : 'border-[rgba(81,43,212,0.3)] bg-[#FAF8FF] hover:border-[#512BD4] hover:bg-[#F6F3FC]'
                }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEE7FB] border border-[rgba(81,43,212,0.2)] flex items-center justify-center mx-auto mb-2 text-[#512BD4] shadow-[2px_2px_0px_0px_#512BD4]">
                <Upload className="w-4 h-4" />
              </div>
              <p className="text-xs font-mono font-bold text-[#120838] uppercase">
                Upload Your Portrait Picture
              </p>
              <p className="text-[11px] text-[#5C5577] mt-0.5">
                Default: .NET Bot Head &bull; Click to upload JPG, PNG, WebP
              </p>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>

        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="badge-name" className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Full Name</span>
              <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>
          <input
            id="badge-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (formErrors.name) setFormErrors((p) => ({ ...p, name: null }));
            }}
            placeholder="Full Name"
            maxLength={26}
            className={`w-full px-3.5 py-2 rounded-xl border-2 text-sm font-[Inter,sans-serif] font-bold text-[#120838] bg-white focus:outline-none transition-all ${
              formErrors.name
                ? 'border-rose-500 focus:border-rose-600 focus:shadow-[3px_3px_0px_0px_#E11D48]'
                : 'border-[rgba(81,43,212,0.2)] focus:border-[#512BD4] focus:shadow-[3px_3px_0px_0px_#512BD4]'
            }`}
          />
          {formErrors.name && (
            <p className="text-[11px] font-mono font-bold text-rose-600 mt-0.5">
              {formErrors.name}
            </p>
          )}
        </div>

        {/* Role / Designation */}
        <div className="space-y-1">
          <label htmlFor="badge-role" className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#512BD4]" />
              <span>Role / Designation</span>
              <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>
          <input
            id="badge-role"
            type="text"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              if (formErrors.role) setFormErrors((p) => ({ ...p, role: null }));
            }}
            placeholder="Role / Designation"
            maxLength={32}
            className={`w-full px-3.5 py-2 rounded-xl border-2 text-sm font-[Inter,sans-serif] font-bold text-[#120838] bg-white focus:outline-none transition-all ${
              formErrors.role
                ? 'border-rose-500 focus:border-rose-600 focus:shadow-[3px_3px_0px_0px_#E11D48]'
                : 'border-[rgba(81,43,212,0.2)] focus:border-[#512BD4] focus:shadow-[3px_3px_0px_0px_#512BD4]'
            }`}
          />
          {formErrors.role && (
            <p className="text-[11px] font-mono font-bold text-rose-600 mt-0.5">
              {formErrors.role}
            </p>
          )}
        </div>

        {/* Organization */}
        <div className="space-y-1">
          <label htmlFor="badge-company" className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#475569]" />
              <span>Organization</span>
              <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>
          <input
            id="badge-company"
            type="text"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              if (formErrors.company) setFormErrors((p) => ({ ...p, company: null }));
            }}
            placeholder="Organization"
            maxLength={40}
            className={`w-full px-3.5 py-2 rounded-xl border-2 text-sm font-[Inter,sans-serif] font-bold text-[#120838] bg-white focus:outline-none transition-all ${
              formErrors.company
                ? 'border-rose-500 focus:border-rose-600 focus:shadow-[3px_3px_0px_0px_#E11D48]'
                : 'border-[rgba(81,43,212,0.2)] focus:border-[#512BD4] focus:shadow-[3px_3px_0px_0px_#512BD4]'
            }`}
          />
          {formErrors.company && (
            <p className="text-[11px] font-mono font-bold text-rose-600 mt-0.5">
              {formErrors.company}
            </p>
          )}
        </div>

      </div>

      {/* Right Column: Square Badge Preview & Action Button */}
      <div className="lg:col-span-7 flex flex-col items-center">

        <div className="w-full flex items-center justify-between pb-2 mb-4 border-b border-[rgba(81,43,212,0.12)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#512BD4]"></span>
            <h4 className="font-[Outfit,sans-serif] font-black text-sm sm:text-base text-[#120838] uppercase tracking-wider">
              Live Badge Preview
            </h4>
          </div>
          <span className="text-[11px] font-mono text-stone-500 font-bold">1:1 HD Square</span>
        </div>

        {/* Square Social Badge Preview (Exact Match to Reference Card) */}
        <div className="relative select-none flex justify-center w-full">

          {/* Outer Card with Rounded Deep Violet Border (Exact Match to Reference Card) */}
          <div className="w-full max-w-[480px] aspect-square rounded-[22px] xs:rounded-[28px] sm:rounded-[36px] border-[3px] sm:border-[3.5px] border-[#1F0E64] bg-white relative overflow-hidden flex flex-col justify-between p-4 xs:p-5 sm:p-6 md:p-7 text-left shadow-[0_16px_36px_-12px_rgba(31,14,100,0.22)] select-none">

            {/* Ambient subtle gradient & soft curved background accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F2EDFD] pointer-events-none"></div>
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/40 to-indigo-100/20 blur-2xl pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-gradient-to-tl from-purple-200/30 via-violet-100/20 to-transparent blur-3xl pointer-events-none"></div>

            {/* Group 1: Top Brand Header + "I'M ATTENDING" Capsule Pill */}
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between w-full">
                {/* Left Brand Header */}
                <div>
                  <p className="font-sans font-bold text-[10.5px] xs:text-xs sm:text-sm text-[#1F0E64] leading-tight">
                    Microsoft Student Club
                  </p>
                  <h2 className="font-sans font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#0E0329] leading-tight mt-0.5 sm:mt-1">
                    .NET Conf
                  </h2>
                  <div className="font-sans font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#512BD4] leading-tight">
                    2026 Amravati
                  </div>

                  {/* Decorative Tech Circuit Line */}
                  <div className="mt-1 xs:mt-1.5 sm:mt-2">
                    <svg className="w-36 xs:w-44 sm:w-56 h-2.5 sm:h-3.5" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="11" r="3.5" fill="#512BD4" />
                      <path d="M7 11H120L132 5H233" stroke="#512BD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="236" cy="5" r="3.5" fill="#512BD4" />
                    </svg>
                  </div>
                </div>

                {/* Right: Official MSC PRPCEM Shield Logo */}
                <div className="w-12 xs:w-14 sm:w-20 md:w-24 shrink-0 -mt-1 sm:mt-0">
                  <img
                    src="/logos/mscprpcem-logo.png"
                    alt="MSC-PRPCEM Shield"
                    className="w-full h-auto object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>

              {/* "I'M ATTENDING" Badge Capsule */}
              <div className="mt-1.5 xs:mt-2 sm:mt-2.5">
                <div className="inline-flex items-center justify-center px-3.5 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#6318E8] via-[#4F1CE4] to-[#3B15D6] text-white font-sans font-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wider shadow-[0_8px_16px_rgba(81,43,212,0.35)] select-none">
                  I'M ATTENDING
                </div>
              </div>
            </div>

            {/* Group 2: Middle Row (Attendee Photo & Details) + Anchored Horizontal Divider */}
            <div className="relative z-20 w-full my-auto py-0.5">
              <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-4.5">
                {/* Photo Container with Double Border */}
                <div className="p-1 sm:p-1.5 rounded-[14px] xs:rounded-[18px] sm:rounded-[22px] border-2 border-[#512BD4] bg-white shadow-sm shrink-0">
                  <div className="w-14 h-14 xs:w-18 xs:h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-[11px] xs:rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#F3EEFC] flex items-center justify-center">
                    {customPhotoUrl ? (
                      <img
                        src={customPhotoUrl}
                        alt={name || 'Attendee'}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <img
                        src={defaultBotHead}
                        alt=".NET Bot Head"
                        className="w-full h-full object-contain p-1.5 sm:p-2 filter drop-shadow-sm"
                      />
                    )}
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1.5px] h-14 xs:h-18 sm:h-24 md:h-28 bg-[#CBD5E1] shrink-0"></div>

                {/* Attendee Details: Embedded dynamically as user fills in, guaranteed on top of all art */}
                <div className="flex flex-col justify-center min-w-0 flex-1 pr-1 z-20">
                  {name.trim() && (
                    <h3 className="font-sans font-black text-xs xs:text-sm sm:text-lg md:text-xl text-[#0E0329] leading-tight truncate">
                      {name.trim()}
                    </h3>
                  )}
                  {role.trim() && (
                    <p className="font-sans font-bold text-[10px] xs:text-xs sm:text-sm md:text-base text-[#512BD4] leading-snug mt-0.5 truncate">
                      {role.trim()}
                    </p>
                  )}
                  {company.trim() && (
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#334155] font-medium mt-0.5 sm:mt-1 truncate">
                      <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#475569] shrink-0" />
                      <span className="truncate">{company.trim()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Horizontal Divider Line: directly anchored below photo and text */}
              <div className="w-[55%] h-[1.5px] bg-[#CBD5E1] mt-2 xs:mt-2.5 sm:mt-3"></div>
            </div>

            {/* Group 3: Bottom Row (Date, Venue & Event Link + Bottom-Right 3D Rocket) */}
            <div className="relative z-10 flex items-end justify-between w-full">
              {/* Left: Date & Venue & Event Link */}
              <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 max-w-[58%] pl-0.5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#120838] shrink-0" />
                  <span className="font-sans font-black text-[10.5px] xs:text-xs sm:text-sm md:text-base text-[#0E0329] leading-tight">
                    January 2–3, 2027
                  </span>
                </div>

                <div className="flex items-start gap-1.5 sm:gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#512BD4] fill-[#512BD4] shrink-0 mt-0.5" />
                  <p className="font-sans font-bold text-[9.5px] xs:text-[10.5px] sm:text-xs md:text-sm text-[#0E0329] leading-tight">
                    Swami Vivekanand<br />Auditorium, PRPCEM
                  </p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#512BD4] shrink-0" />
                  <a
                    href="https://dnc.mscprpcem.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-black text-[9.5px] xs:text-[10.5px] sm:text-xs md:text-sm text-[#512BD4] hover:underline leading-tight tracking-tight cursor-pointer"
                  >
                    dnc.mscprpcem.tech
                  </a>
                </div>
              </div>

              {/* Right: 3D Rocket with .NET Bots (Official DNC Illustration) */}
              <div className="absolute right-0 bottom-0 w-28 xs:w-36 sm:w-44 md:w-54 h-20 xs:h-26 sm:h-32 md:h-40 pointer-events-none select-none flex items-end justify-end z-10">
                <img
                  src="/assets/dotnetconf-bots-rocket-angled.png"
                  alt=".NET Conf Rocket"
                  className="w-full h-full object-contain object-bottom-right"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Action Button: Download Attendee Badge */}
        <div className="w-full max-w-[480px] mt-6">
          {Object.keys(formErrors).length > 0 && (
            <p className="text-xs font-mono font-bold text-rose-600 text-center mb-2.5 bg-rose-50 border border-rose-200 py-1.5 px-3 rounded-lg">
              Please fill in all mandatory fields (*) before downloading.
            </p>
          )}
          <button
            type="button"
            onClick={handleDownloadBadge}
            disabled={isDownloading}
            className="btn btn--primary btn--lg w-full cursor-pointer flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>
              {isDownloading ? 'GENERATING 1080×1080 HD BADGE...' : 'DOWNLOAD BADGE (HD)'}
            </span>
          </button>

          <div className="mt-3 text-center">
            <a
              href="https://dnc.mscprpcem.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#512BD4] hover:text-[#3B15D6] hover:underline transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Official Portal: dnc.mscprpcem.tech</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );

  // If inside modal
  if (isModal) {
    return (
      <div className="p-1 w-full relative text-left">
        {renderStudioContent()}
      </div>
    );
  }

  // If inside standalone page (/badge)
  if (isStandalonePage) {
    return (
      <div className="w-full">
        {renderStudioContent()}
      </div>
    );
  }

  // Default: Embedded in main landing page flow at #badge and #attendee-badge
  return (
    <section className="section band--purple relative" id="badge" data-section="badge" style={{ scrollMarginTop: '80px' }}>
      <span id="attendee-badge" style={{ display: 'block', position: 'absolute', top: '-80px', visibility: 'hidden' }} aria-hidden="true" />
      <div className="wrap">
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Official Delegate Pass · Badge Studio
          </p>
          <h2 className="h-sec">
            Create Your<br />Attendee Badge.
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Personalize your official .NET Conf 2026 Amravati delegate pass, upload your portrait, and download your high-resolution 1080×1080 HD square badge to share on LinkedIn &amp; X!
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
          {renderStudioContent()}
        </div>
      </div>
    </section>
  );
};

export default DncAttendeeBadge;
