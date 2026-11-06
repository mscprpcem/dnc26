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
  Ticket,
  Sparkles,
} from 'lucide-react';

export const DncAttendeeBadge = ({ isModal = false, isStandalonePage = false }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [college, setCollege] = useState('');
  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileInputRef = useRef(null);

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

  // ─── Theme Tokens (Official .NET Conf 2026 Amravati DncBrutal Palette) ───
  const T = {
    purple: '#512BD4',       // Primary .NET Brand Purple
    purpleLight: '#7B5CE5',  // Gradient midtone
    magenta: '#D600AA',      // Action / Accent Fuchsia
    blue: '#0B6CFF',         // Vivid Azure Blue
    teal: '#28C2D1',         // Copilot Teal
    gold: '#F7B548',         // Warm Gold / Saffron
    ink: '#120838',          // Deep Dark Violet text
    textSecondary: '#332B4A',
    textMuted: '#5C5577',
    fontDisplay: '"Outfit", "Space Grotesk", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", monospace',
  };

  // ─── Render 1080×1080 Canvas Badge (Official .NET Conf 2026 Neo-Brutalist Theme) ───
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
    const cardRadius = 36;

    ctx.clearRect(0, 0, S, S);

    // 1. Neo-Brutalist Offset Drop Shadow (Dark Violet / Ink offset)
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX + 12, cardY + 12, cardW, cardH, cardRadius);
    ctx.fillStyle = T.ink;
    ctx.fill();
    ctx.restore();

    // 2. Main Card Background & Black Border
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
    
    // Subtle gradient background
    const bgGrad = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH);
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(0.65, '#FAF8FF');
    bgGrad.addColorStop(1, '#F5F0FF');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Crisp Neo-Brutalist Black Border
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.clip(); // All subsequent elements clip inside the rounded card!

    // 3. Right-Side Angled Speed Capsules (Framing the Photo / Mascot)
    // Capsule 1 (Upper-Right): .NET Purple -> Azure Blue (Peeks out above photo)
    ctx.save();
    ctx.translate(860, 300);
    ctx.rotate((34 * Math.PI) / 180);
    const grad1 = ctx.createLinearGradient(0, -280, 0, 280);
    grad1.addColorStop(0, T.purple);
    grad1.addColorStop(1, T.blue);
    ctx.fillStyle = grad1;
    ctx.beginPath();
    ctx.roundRect(-65, -280, 130, 560, 65);
    ctx.fill();
    ctx.restore();

    // Capsule 2 (Lower-Right): Purple Light -> Fuchsia Magenta (Peeks out below photo, parallel)
    ctx.save();
    ctx.translate(680, 720);
    ctx.rotate((34 * Math.PI) / 180);
    const grad2 = ctx.createLinearGradient(0, -250, 0, 250);
    grad2.addColorStop(0, T.purpleLight);
    grad2.addColorStop(1, T.magenta);
    ctx.fillStyle = grad2;
    ctx.beginPath();
    ctx.roundRect(-60, -250, 120, 500, 60);
    ctx.fill();
    ctx.restore();

    // 4. Load User Portrait & .NET Bot Mascot
    const [userImg, mascotImg] = await Promise.all([
      loadImage(customPhotoUrl),
      loadImage('/mascot/bot_frontal.png'),
    ]);

    // 5. Draw Attendee Portrait / Mascot (Nestled Seamlessly Between the Capsules!)
    if (userImg) {
      const photoW = 500;
      const photoH = 720;
      const photoX = 500;
      const photoY = 320;

      // Offscreen canvas for soft bottom alpha gradient dissolve (NO box / NO rectangle!)
      const photoCanvas = document.createElement('canvas');
      photoCanvas.width = photoW;
      photoCanvas.height = photoH;
      const pCtx = photoCanvas.getContext('2d');

      const scale = Math.max(photoW / userImg.width, photoH / userImg.height);
      const dw = userImg.width * scale;
      const dh = userImg.height * scale;
      const dx = (photoW - dw) / 2;

      pCtx.drawImage(userImg, dx, 0, dw, dh);

      // Smooth alpha fade dissolve starting at 62% height
      pCtx.globalCompositeOperation = 'destination-in';
      const fadeGrad = pCtx.createLinearGradient(0, photoH * 0.62, 0, photoH);
      fadeGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
      fadeGrad.addColorStop(0.85, 'rgba(0, 0, 0, 0.25)');
      fadeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = fadeGrad;
      pCtx.fillRect(0, 0, photoW, photoH);

      ctx.drawImage(photoCanvas, photoX, photoY);
    } else if (mascotImg) {
      // Draw official front-facing .NET Bot proudly nestled between capsules
      const mW = 420;
      const mH = 420;
      const mX = 540;
      const mY = 510;
      ctx.save();
      ctx.shadowColor = 'rgba(18, 8, 56, 0.25)';
      ctx.shadowBlur = 28;
      ctx.shadowOffsetY = 14;
      ctx.drawImage(mascotImg, mX, mY, mW, mH);
      ctx.restore();
    }

    // 6. Left Column Content Layout
    const leftX = cardX + 64;
    const contentMaxW = 450;

    // ── 6.1 Top Brand Lockup: Host Organization (No redundant icon, name is already there) ──
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = T.purple;
    ctx.font = `800 24px ${T.fontDisplay}`;
    ctx.fillText('Microsoft Student Club', leftX, cardY + 95);

    // ── 6.2 Event Headline: .NET Conf 2026 Amravati ──
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = T.ink;
    ctx.font = `900 70px ${T.fontDisplay}`;
    ctx.fillText('.NET Conf', leftX, cardY + 185);

    // "2026" with gradient text
    const yearText = '2026';
    ctx.font = `900 64px ${T.fontDisplay}`;
    const yearW = ctx.measureText(yearText).width;
    const yearGrad = ctx.createLinearGradient(leftX, 0, leftX + yearW, 0);
    yearGrad.addColorStop(0, T.purple);
    yearGrad.addColorStop(0.5, T.magenta);
    yearGrad.addColorStop(1, T.blue);
    ctx.fillStyle = yearGrad;
    ctx.fillText(yearText, leftX, cardY + 256);

    // "Amravati" in .NET Purple
    ctx.fillStyle = T.purple;
    ctx.font = `900 48px ${T.fontDisplay}`;
    ctx.fillText('Amravati', leftX + yearW + 18, cardY + 256);

    // ── 6.3 Official 5-Color Ecosystem Accent Bar ──
    const barY = cardY + 284;
    const barColors = [T.purple, T.blue, T.teal, T.magenta, T.gold];
    barColors.forEach((color, idx) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(leftX + idx * 28, barY, 22, 6, 3);
      ctx.fill();
    });

    // ── 6.4 "I'M ATTENDING" Badge Pill (Theme .NET Purple with Magenta Offset) ──
    const pillY = cardY + 375;
    const pillText = "I'M ATTENDING";
    ctx.font = `900 22px ${T.fontDisplay}`;
    const pillTextW = ctx.measureText(pillText).width;
    const pillW = pillTextW + 46;
    const pillH = 48;

    // Magenta offset shadow
    ctx.fillStyle = T.magenta;
    ctx.beginPath();
    ctx.roundRect(leftX + 3, pillY + 3, pillW, pillH, pillH / 2);
    ctx.fill();

    // Pill body
    ctx.fillStyle = T.purple;
    ctx.beginPath();
    ctx.roundRect(leftX, pillY, pillW, pillH, pillH / 2);
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pillText, leftX + pillW / 2, pillY + pillH / 2);

    // ── 6.5 Attendee Name ──
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = T.ink;
    const attendeeName = name.trim() || 'Attendee Name';
    let safeName = attendeeName;
    ctx.font = `900 52px ${T.fontDisplay}`;
    if (ctx.measureText(safeName).width > contentMaxW) {
      ctx.font = `900 42px ${T.fontDisplay}`;
    }
    if (ctx.measureText(safeName).width > contentMaxW) {
      safeName = safeName.slice(0, 18) + '...';
    }
    ctx.fillText(safeName, leftX, pillY + 120);

    // ── 6.6 Role / Designation (.NET Purple Accent) ──
    ctx.fillStyle = T.purple;
    ctx.font = `800 26px ${T.fontDisplay}`;
    const attendeeRole = role.trim() || 'Software Engineer / Student Delegate';
    let safeRole = attendeeRole;
    if (ctx.measureText(safeRole).width > contentMaxW) {
      safeRole = safeRole.slice(0, 32) + '...';
    }
    ctx.fillText(safeRole, leftX, pillY + 164);

    // ── 6.7 College / Organization ──
    ctx.fillStyle = T.textMuted;
    ctx.font = `600 22px ${T.fontBody}`;
    const attendeeCollege = college.trim() || 'PRPCEM Campus, Amravati';
    let safeCollege = attendeeCollege;
    if (ctx.measureText(safeCollege).width > contentMaxW) {
      safeCollege = safeCollege.slice(0, 34) + '...';
    }
    ctx.fillText(safeCollege, leftX, pillY + 204);

    // ── 6.8 Date & Venue (Bottom-Left) ──
    const dateY = cardY + cardH - 105;
    ctx.fillStyle = T.ink;
    ctx.font = `900 32px ${T.fontDisplay}`;
    ctx.fillText('January 2–3, 2027', leftX, dateY);

    ctx.fillStyle = T.textMuted;
    ctx.font = `700 23px ${T.fontDisplay}`;
    ctx.fillText('Swami Vivekanand Auditorium, PRPCEM', leftX, dateY + 40);

    // ── 6.9 Bottom Multi-Color Accent Bar ──
    const lineY = cardY + cardH - 14;
    const lineGrad = ctx.createLinearGradient(cardX, 0, cardX + cardW, 0);
    lineGrad.addColorStop(0, T.purple);
    lineGrad.addColorStop(0.3, T.magenta);
    lineGrad.addColorStop(0.6, T.blue);
    lineGrad.addColorStop(1, T.teal);
    ctx.fillStyle = lineGrad;
    ctx.fillRect(cardX, lineY, cardW, 6);

    ctx.restore(); // end card clip
    return canvas;
  };

  const handleDownloadBadge = async () => {
    try {
      setIsDownloading(true);
      const canvas = await renderSquareCanvas();

      const link = document.createElement('a');
      link.download = `dnc26-attendee-badge-${(name || 'delegate').toLowerCase().replace(/\s+/g, '-')}.png`;
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

      {/* Left Column: Form Controls (Styled with theme tokens) */}
      <div className="lg:col-span-6 bg-white border-2 border-[rgba(81,43,212,0.2)] rounded-2xl p-5 sm:p-7 shadow-[4px_4px_0px_0px_#512BD4] space-y-5 text-left">

        <div className="flex items-center gap-2 pb-2 border-b border-[rgba(81,43,212,0.12)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#512BD4]"></span>
          <h4 className="font-[Outfit,sans-serif] font-black text-sm sm:text-base text-[#120838] uppercase tracking-wider">
            Delegate Details
          </h4>
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
                <span>Remove Photo</span>
              </button>
            )}
          </label>

          {customPhotoUrl ? (
            <div className="flex items-center gap-3.5 p-3 bg-[#FAF8FF] border-2 border-[rgba(81,43,212,0.2)] rounded-xl shadow-[2px_2px_0px_0px_#512BD4]">
              <img
                src={customPhotoUrl}
                alt="Uploaded preview"
                className="w-14 h-14 rounded-xl object-cover border-2 border-[rgba(81,43,212,0.3)] flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-xs">
                  <Check className="w-3.5 h-3.5" />
                  <span>Photo Uploaded</span>
                </div>
                <p className="text-[11px] text-[#5C5577] truncate mt-0.5">
                  Blended seamlessly between speed capsules.
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
              className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${isDragging
                  ? 'border-[#512BD4] bg-[#EEE7FB]'
                  : 'border-[rgba(81,43,212,0.3)] bg-[#FAF8FF] hover:border-[#512BD4] hover:bg-[#F6F3FC]'
                }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#EEE7FB] border border-[rgba(81,43,212,0.2)] flex items-center justify-center mx-auto mb-2.5 text-[#512BD4] shadow-[2px_2px_0px_0px_#512BD4]">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono font-bold text-[#120838] uppercase">
                Upload Your Portrait Picture
              </p>
              <p className="text-[11px] text-[#5C5577] mt-1">
                Click to browse or drag & drop (JPG, PNG, WebP)
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

        {/* Attendee Name */}
        <div className="space-y-1.5">
          <label htmlFor="badge-name" className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Full Name</span>
          </label>
          <input
            id="badge-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={26}
            className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[rgba(81,43,212,0.2)] text-sm font-[Inter,sans-serif] font-bold text-[#120838] bg-white focus:outline-none focus:border-[#512BD4] focus:shadow-[3px_3px_0px_0px_#512BD4] transition-all"
          />
        </div>

        {/* Role / Designation */}
        <div className="space-y-1.5">
          <label htmlFor="badge-role" className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#D600AA]" />
            <span>Role / Designation</span>
          </label>
          <input
            id="badge-role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            maxLength={30}
            className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[rgba(81,43,212,0.2)] text-sm font-[Inter,sans-serif] font-bold text-[#120838] bg-white focus:outline-none focus:border-[#D600AA] focus:shadow-[3px_3px_0px_0px_#D600AA] transition-all"
          />
        </div>

        {/* College / Organization */}
        <div className="space-y-1.5">
          <label htmlFor="badge-college" className="text-xs font-mono font-bold text-[#120838] uppercase flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#0B6CFF]" />
            <span>College / Organization</span>
          </label>
          <input
            id="badge-college"
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            maxLength={35}
            className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[rgba(81,43,212,0.2)] text-sm font-[Inter,sans-serif] font-bold text-[#120838] bg-white focus:outline-none focus:border-[#0B6CFF] focus:shadow-[3px_3px_0px_0px_#0B6CFF] transition-all"
          />
        </div>

      </div>

      {/* Right Column: Square Badge Preview & Action Button */}
      <div className="lg:col-span-6 flex flex-col items-center">

        <div className="w-full flex items-center gap-2 pb-2 mb-4 border-b border-[rgba(81,43,212,0.12)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0B6CFF]"></span>
          <h4 className="font-[Outfit,sans-serif] font-black text-sm sm:text-base text-[#120838] uppercase tracking-wider">
            Badge Preview
          </h4>
        </div>

        {/* Square Social Badge Preview (1:1 Aspect Ratio) */}
        <div className="relative select-none flex justify-center w-full">

          {/* Outer 1:1 Square Card (Signature Neo-Brutalist Frame) */}
          <div className={isModal
            ? "w-[300px] xs:w-[330px] sm:w-[370px] aspect-square rounded-3xl border-[3px] border-black bg-gradient-to-b from-white via-[#FAF8FF] to-[#F5F0FF] shadow-[6px_6px_0px_0px_#120838] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-left"
            : "w-[320px] xs:w-[360px] sm:w-[410px] aspect-square rounded-3xl border-[3px] border-black bg-gradient-to-b from-white via-[#FAF8FF] to-[#F5F0FF] shadow-[6px_6px_0px_0px_#120838] relative overflow-hidden flex flex-col justify-between p-5 sm:p-7 text-left"
          }>

            {/* Right-Side Angled Speed Capsules (Framing the Photo / Mascot) */}
            {/* Upper Capsule: peeks out above right shoulder */}
            <div className="absolute right-3 sm:right-6 top-3 sm:top-5 w-12 sm:w-16 h-48 sm:h-60 rounded-full bg-gradient-to-b from-[#512BD4] to-[#0B6CFF] rotate-[34deg] pointer-events-none select-none opacity-95"></div>
            {/* Lower Capsule: peeks out below left side, parallel */}
            <div className="absolute right-14 sm:right-20 bottom-3 sm:bottom-5 w-11 sm:w-15 h-44 sm:h-54 rounded-full bg-gradient-to-b from-[#7B5CE5] to-[#D600AA] rotate-[34deg] pointer-events-none select-none opacity-95"></div>

            {/* Top Row: Brand Lockup (Host Club Name — No redundant icon) */}
            <div className="relative z-10 w-full mb-1 sm:mb-1.5 flex items-center">
              <span className="font-sans font-extrabold text-xs sm:text-sm text-[#512BD4] tracking-wide whitespace-nowrap overflow-visible">
                Microsoft Student Club
              </span>
            </div>

            {/* Event Title: .NET Conf 2026 Amravati */}
            <div className="relative z-10 max-w-[54%]">
              <h3 className="font-sans font-black text-lg sm:text-2xl md:text-3xl text-[#120838] leading-tight">
                .NET Conf
              </h3>
              <div className="flex items-baseline gap-1.5">
                <span className="font-sans font-black text-base sm:text-xl md:text-2xl leading-tight bg-gradient-to-r from-[#512BD4] via-[#D600AA] to-[#0B6CFF] bg-clip-text text-transparent">
                  2026
                </span>
                <span className="font-sans font-black text-sm sm:text-lg md:text-xl text-[#512BD4] leading-tight">
                  Amravati
                </span>
              </div>

              {/* Official 5-Color .NET Ecosystem Accent Bar */}
              <div className="flex items-center gap-1 my-1 sm:my-1.5">
                <span className="w-2.5 sm:w-3.5 h-1 rounded-full bg-[#512BD4]"></span>
                <span className="w-2.5 sm:w-3.5 h-1 rounded-full bg-[#0B6CFF]"></span>
                <span className="w-2.5 sm:w-3.5 h-1 rounded-full bg-[#28C2D1]"></span>
                <span className="w-2.5 sm:w-3.5 h-1 rounded-full bg-[#D600AA]"></span>
                <span className="w-2.5 sm:w-3.5 h-1 rounded-full bg-[#F7B548]"></span>
              </div>
            </div>

            {/* Middle Row: "I'M ATTENDING" Pill & Attendee Info */}
            <div className="relative z-10 my-auto max-w-[54%] pr-1">
              <div className="inline-block bg-[#512BD4] text-white font-sans font-black text-[9px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#D600AA] border border-black mb-1 sm:mb-1.5 select-none tracking-wide">
                I'M ATTENDING
              </div>

              <h2 className="font-sans font-black text-sm sm:text-lg md:text-xl text-[#120838] leading-tight tracking-tight break-words">
                {name.trim() || 'Attendee Name'}
              </h2>

              <p className="font-sans text-[10.5px] sm:text-xs font-bold text-[#512BD4] leading-snug mt-0.5 break-words">
                {role.trim() || 'Software Engineer / Student Delegate'}
              </p>

              <p className="font-sans text-[9.5px] sm:text-[11px] text-[#5C5577] leading-snug break-words">
                {college.trim() || 'PRPCEM Amravati'}
              </p>
            </div>

            {/* Right-Side Attendee Portrait (NESTLED PROUDLY IN BETWEEN THE TWO CAPSULES) */}
            <div className="absolute right-0 sm:right-2 bottom-0 w-36 xs:w-42 sm:w-48 h-48 sm:h-56 z-20 flex items-end justify-center select-none pointer-events-none">
              {customPhotoUrl ? (
                <div className="relative w-full h-full flex items-end justify-center">
                  <img
                    src={customPhotoUrl}
                    alt={name || 'Attendee'}
                    className="w-full h-full object-cover object-top"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
                    }}
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-end pb-1">
                  <img
                    src="/mascot/bot_frontal.png"
                    alt=".NET Bot Mascot"
                    className="w-28 xs:w-32 sm:w-40 h-28 xs:h-32 sm:h-40 object-contain filter drop-shadow-[0_12px_16px_rgba(18,8,56,0.3)]"
                  />
                </div>
              )}
            </div>

            {/* Bottom Row: Date & Venue */}
            <div className="relative z-10 pt-1">
              <p className="font-sans font-black text-xs sm:text-sm md:text-base text-[#120838] leading-tight">
                January 2–3, 2027
              </p>
              <p className="font-sans font-semibold text-[10px] sm:text-[11px] md:text-xs text-[#5C5577] leading-tight mt-0.5">
                Swami Vivekanand Auditorium, PRPCEM
              </p>
            </div>

            {/* Bottom Multi-Color Accent Hairline */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#512BD4] via-[#D600AA] to-[#0B6CFF]"></div>

          </div>

        </div>

        {/* Action Button: Download Attendee Badge */}
        <div className="w-full max-w-[320px] sm:max-w-[410px] mt-6">
          <button
            type="button"
            onClick={handleDownloadBadge}
            disabled={isDownloading}
            className="btn btn--primary btn--lg w-full cursor-pointer flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>
              {isDownloading ? 'DOWNLOADING...' : 'DOWNLOAD'}
            </span>
          </button>
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

  // Default: Embedded in main landing page flow at #attendee-badge (matching Tracks, Speakers, CFP, Tickets)
  return (
    <section className="section band--purple" id="attendee-badge" style={{ scrollMarginTop: '80px' }}>
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
