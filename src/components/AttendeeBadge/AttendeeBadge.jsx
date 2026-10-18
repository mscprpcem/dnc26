import React, { useState, useRef } from 'react';
import { 
  Download, 
  Share2, 
  Check, 
  User, 
  Briefcase, 
  Building2, 
  Upload, 
  Camera, 
  X, 
  Sparkles, 
  Ticket,
  Circle,
  Square
} from 'lucide-react';
import { LinkedInIcon, WhatsAppIcon, InstagramIcon, TelegramIcon } from '../ui/SocialIcons.jsx';

const ROLE_PRESETS = [
  'Student Developer',
  'Software Engineer',
  'Cloud & AI Explorer',
  'Community Delegate',
];

export const AttendeeBadge = () => {
  const [badgeShape, setBadgeShape] = useState('circular'); // 'circular' | 'square'
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [college, setCollege] = useState('');
  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const getSharePostText = () => {
    const roleString = role.trim() ? ` as ${role.trim()}` : '';
    const collegeString = college.trim() ? ` from ${college.trim()}` : '';
    return `🚀 I'm attending .NET Conf 2026 Amravati${roleString}${collegeString}!

Join me for the premier Microsoft .NET developer gathering at PRPCEM Campus, Amravati on 20 April 2026.

Get your official attendee badge here:
👉 https://dotnetconf.mscprpcem.tech

#DotNetConf2026 #DotNetConfAmravati #MSCPRPCEM #dotnet #community`;
  };

  const handleShareWhatsApp = () => {
    const text = getSharePostText();
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const confUrl = 'https://dotnetconf.mscprpcem.tech';
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(confUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareInstagram = async () => {
    const text = getSharePostText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
    window.open('https://www.instagram.com', '_blank', 'noopener,noreferrer');
  };

  const handleShareTelegram = () => {
    const text = getSharePostText();
    const confUrl = 'https://dotnetconf.mscprpcem.tech';
    const url = `https://t.me/share/url?url=${encodeURIComponent(confUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyShare = async () => {
    const shareText = getSharePostText();
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const drawArcText = (ctx, text, centerX, centerY, radius, centerAngle, letterSpacingAngle, inward = true) => {
    const chars = text.split('');
    const totalAngle = (chars.length - 1) * letterSpacingAngle;
    let currentAngle = centerAngle - totalAngle / 2;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    chars.forEach((char) => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(currentAngle);
      ctx.translate(0, inward ? -radius : radius);
      if (!inward) {
        ctx.rotate(Math.PI);
      }
      ctx.fillText(char, 0, 0);
      ctx.restore();
      currentAngle += letterSpacingAngle;
    });

    ctx.restore();
  };

  const loadImage = (src) =>
    new Promise((resolve) => {
      if (!src) return resolve(null);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });

  // 1. Download Circular Badge Canvas (900x900)
  const handleDownloadCircularBadge = async () => {
    setIsDownloading(true);
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');

    const centerX = 450;
    const centerY = 450;
    const outerRadius = 410;
    const innerRadius = 320;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gradient outer circle
    const grad = ctx.createLinearGradient(0, 0, 900, 900);
    grad.addColorStop(0, '#512BD4');
    grad.addColorStop(0.5, '#7B2BF9');
    grad.addColorStop(1, '#D600AA');

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.shadowColor = 'rgba(81, 43, 212, 0.35)';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.restore();

    // Concentric border ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius - 10, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.stroke();

    // Top Arc Text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 23px "Space Grotesk", sans-serif';
    drawArcText(ctx, '★  .NET CONF 2026 · AMRAVATI  ★', centerX, centerY, 365, 0, 0.048, true);

    // Bottom Arc Text
    ctx.fillStyle = '#FFDB43';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    drawArcText(ctx, '★  20 APRIL 2026 · PRPCEM CAMPUS  ★', centerX, centerY, 365, 0, 0.044, false);

    // Inner Circle Card
    // Inner Circle Card - Clip to FULL white space for image
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FAF8FF';
    ctx.fill();
    ctx.clip();

    const [userImg, mascotImg] = await Promise.all([
      loadImage(customPhotoUrl),
      loadImage('/mascot/bot_frontal.png')
    ]);

    if (userImg) {
      const scale = Math.max((innerRadius * 2) / userImg.width, (innerRadius * 2) / userImg.height);
      const drawW = userImg.width * scale;
      const drawH = userImg.height * scale;
      const drawX = centerX - drawW / 2;
      const drawY = centerY - drawH / 2;
      ctx.drawImage(userImg, drawX, drawY, drawW, drawH);
    } else {
      ctx.fillStyle = '#EEEAFB';
      ctx.fillRect(centerX - innerRadius, centerY - innerRadius, innerRadius * 2, innerRadius * 2);
      if (mascotImg) {
        const mSize = 340;
        ctx.drawImage(mascotImg, centerX - mSize / 2, centerY - mSize / 2 - 30, mSize, mSize);
      }
    }

    // Bottom gradient overlay on photo
    const scrimGrad = ctx.createLinearGradient(centerX, centerY + 40, centerX, centerY + innerRadius);
    scrimGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    scrimGrad.addColorStop(0.35, 'rgba(15, 5, 35, 0.72)');
    scrimGrad.addColorStop(1, 'rgba(15, 5, 35, 0.95)');
    ctx.fillStyle = scrimGrad;
    ctx.fillRect(centerX - innerRadius, centerY + 40, innerRadius * 2, innerRadius - 40);

    // Delegate Tag at Top of Inner Circle
    const passText = 'OFFICIAL DELEGATE PASS';
    ctx.font = 'bold 15px "Space Grotesk", sans-serif';
    const passWidth = ctx.measureText(passText).width + 36;
    const passY = centerY - innerRadius + 22;
    ctx.fillStyle = '#512BD4';
    ctx.beginPath();
    ctx.roundRect(centerX - passWidth / 2, passY, passWidth, 28, 14);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(passText, centerX, passY + 14);

    // Attendee Name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 38px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const displayName = (name.trim() || 'DELEGATE').toUpperCase();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;
    ctx.fillText(displayName, centerX, centerY + innerRadius - 105);
    ctx.shadowColor = 'transparent';

    // Role Pill
    const roleText = (role.trim() || 'DELEGATE').toUpperCase();
    ctx.font = 'bold 18px "Space Grotesk", sans-serif';
    const roleWidth = ctx.measureText(roleText).width + 36;
    const roleY = centerY + innerRadius - 70;
    ctx.fillStyle = '#FFDB43';
    ctx.beginPath();
    ctx.roundRect(centerX - roleWidth / 2, roleY, roleWidth, 32, 16);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'middle';
    ctx.fillText(roleText, centerX, roleY + 16);

    // College / Organization (only if entered)
    if (college.trim()) {
      ctx.fillStyle = '#00BDD6';
      ctx.font = 'bold 16px "Space Grotesk", sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(college.trim().toUpperCase(), centerX, centerY + innerRadius - 25);
    }

    ctx.restore();

    // Inner Circle Border
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#DCD5F6';
    ctx.stroke();

    // Mascot badge in bottom right corner
    const mascotCenterX = 660;
    const mascotCenterY = 600;
    const mascotRadius = 75;

    ctx.save();
    ctx.beginPath();
    ctx.arc(mascotCenterX, mascotCenterY, mascotRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#512BD4';
    ctx.stroke();

    if (mascotImg) {
      const pad = 12;
      ctx.drawImage(
        mascotImg,
        mascotCenterX - mascotRadius + pad,
        mascotCenterY - mascotRadius + pad,
        (mascotRadius - pad) * 2,
        (mascotRadius - pad) * 2
      );
    }

    const mascotLabel = '.NET BOT';
    ctx.font = 'bold 13px "Space Grotesk", sans-serif';
    const mLabelW = ctx.measureText(mascotLabel).width + 20;
    const mLabelY = mascotCenterY + mascotRadius - 14;
    ctx.fillStyle = '#512BD4';
    ctx.beginPath();
    ctx.roundRect(mascotCenterX - mLabelW / 2, mLabelY, mLabelW, 22, 6);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(mascotLabel, mascotCenterX, mLabelY + 11);
    ctx.restore();

    const link = document.createElement('a');
    link.download = `dnc26-circular-badge-${(name || 'delegate').toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setIsDownloading(false);
  };

  // 2. Download Square Social Badge Canvas (1080x1080 - Social Media Post Format)
  const handleDownloadSquareBadge = async () => {
    setIsDownloading(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    const cardX = 40;
    const cardY = 40;
    const cardW = 1000;
    const cardH = 1000;
    const cardRadius = 36;
    const centerX = 540;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Card background & shadow
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
    ctx.fillStyle = '#FAF8FF';
    ctx.shadowColor = 'rgba(81, 43, 212, 0.25)';
    ctx.shadowBlur = 35;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#DCD5F6';
    ctx.stroke();
    ctx.clip();

    // Header gradient - Social Post Banner
    const headerY = cardY;
    const headerH = 190;
    const headGrad = ctx.createLinearGradient(cardX, headerY, cardX + cardW, headerY + headerH);
    headGrad.addColorStop(0, '#512BD4');
    headGrad.addColorStop(0.5, '#7B2BF9');
    headGrad.addColorStop(1, '#D600AA');
    ctx.fillStyle = headGrad;
    ctx.fillRect(cardX, headerY, cardW, headerH);

    // Top Pill: ★ .NET CONF 2026 · AMRAVATI ★
    const pillText = '★  .NET CONF 2026 · AMRAVATI  ★';
    ctx.font = 'bold 21px "Space Grotesk", sans-serif';
    const pillW = ctx.measureText(pillText).width + 36;
    const pillY = headerY + 26;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.roundRect(centerX - pillW / 2, pillY, pillW, 34, 17);
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pillText, centerX, pillY + 17);

    // Headline: "I'M ATTENDING!"
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 48px "Space Grotesk", sans-serif';
    ctx.fillText("I'M ATTENDING!", centerX, headerY + 112);

    // Date & Venue
    ctx.fillStyle = '#FFDB43';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillText('★  20 APRIL 2026 · PRPCEM CAMPUS  ★', centerX, headerY + 158);

    const [userImg, mascotImg] = await Promise.all([
      loadImage(customPhotoUrl),
      loadImage('/mascot/bot_frontal.png')
    ]);

    // Center Portrait Frame - Rounded Square
    const photoW = 340;
    const photoH = 340;
    const photoX = centerX - photoW / 2;
    const photoY = headerY + headerH + 35;
    const photoRadius = 26;

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(photoX, photoY, photoW, photoH, photoRadius);
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(81, 43, 212, 0.2)';
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#512BD4';
    ctx.stroke();
    ctx.clip();

    if (userImg) {
      const scale = Math.max(photoW / userImg.width, photoH / userImg.height);
      const drawW = userImg.width * scale;
      const drawH = userImg.height * scale;
      const drawX = photoX + (photoW - drawW) / 2;
      const drawY = photoY + (photoH - drawH) / 2;
      ctx.drawImage(userImg, drawX, drawY, drawW, drawH);
    } else {
      ctx.fillStyle = '#EEEAFB';
      ctx.fillRect(photoX, photoY, photoW, photoH);
      ctx.fillStyle = '#512BD4';
      ctx.beginPath();
      ctx.arc(centerX, photoY + photoH * 0.38, 55, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX, photoY + photoH * 0.96, 110, Math.PI, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Attendee Name
    ctx.fillStyle = '#14053A';
    ctx.font = '900 44px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const displayName = (name.trim() || 'DELEGATE').toUpperCase();
    ctx.fillText(displayName, centerX, photoY + photoH + 50);

    // Role Pill
    const roleText = (role.trim() || 'DELEGATE').toUpperCase();
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    const roleWidth = ctx.measureText(roleText).width + 38;
    const roleY = photoY + photoH + 85;
    ctx.fillStyle = '#EEEAFB';
    ctx.beginPath();
    ctx.roundRect(centerX - roleWidth / 2, roleY, roleWidth, 38, 19);
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#512BD4';
    ctx.stroke();
    ctx.fillStyle = '#512BD4';
    ctx.fillText(roleText, centerX, roleY + 19);

    // College / Organization
    let nextY = roleY + 70;
    if (college.trim()) {
      ctx.fillStyle = '#444444';
      ctx.font = 'bold 22px "Open Sans", sans-serif';
      ctx.fillText(college.trim(), centerX, nextY);
      nextY += 36;
    }

    // Stars
    ctx.fillStyle = '#7B2BF9';
    ctx.font = 'bold 18px "Space Grotesk", sans-serif';
    ctx.fillText('★  ★  ★', centerX, nextY);

    // Social Post Info & Hashtags
    const footerInfoY = cardY + cardH - 95;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#512BD4';
    ctx.font = 'bold 18px "Space Grotesk", sans-serif';
    ctx.fillText('#DotNetConf2026 · #DotNetConfAmravati', cardX + 50, footerInfoY);
    ctx.fillStyle = '#666666';
    ctx.font = 'bold 14px "Space Grotesk", sans-serif';
    ctx.fillText('Join me at: dotnetconf.mscprpcem.tech', cardX + 50, footerInfoY + 24);

    // Companion Mascot badge in bottom right corner
    const mascotCenterX = cardX + cardW - 120;
    const mascotCenterY = cardY + cardH - 85;
    const mascotRadius = 50;

    ctx.save();
    ctx.beginPath();
    ctx.arc(mascotCenterX, mascotCenterY, mascotRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#512BD4';
    ctx.stroke();

    if (mascotImg) {
      const pad = 8;
      ctx.drawImage(
        mascotImg,
        mascotCenterX - mascotRadius + pad,
        mascotCenterY - mascotRadius + pad,
        (mascotRadius - pad) * 2,
        (mascotRadius - pad) * 2
      );
    }

    const mascotLabel = '.NET BOT';
    ctx.font = 'bold 11px "Space Grotesk", sans-serif';
    const mLabelW = ctx.measureText(mascotLabel).width + 16;
    const mLabelY = mascotCenterY + mascotRadius - 10;
    ctx.fillStyle = '#512BD4';
    ctx.beginPath();
    ctx.roundRect(mascotCenterX - mLabelW / 2, mLabelY, mLabelW, 18, 5);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(mascotLabel, mascotCenterX, mLabelY + 9);
    ctx.restore();

    // Bottom Rim Bar
    const bottomBarH = 38;
    const bottomBarY = cardY + cardH - bottomBarH;
    ctx.fillStyle = '#14053A';
    ctx.fillRect(cardX, bottomBarY, cardW, bottomBarH);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MICROSOFT STUDENT CLUB · AMRAVATI CHAPTER', centerX, bottomBarY + bottomBarH / 2);

    ctx.restore();

    const link = document.createElement('a');
    link.download = `dnc26-square-badge-${(name || 'delegate').toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setIsDownloading(false);
  };

  const handleDownloadBadge = () => {
    if (badgeShape === 'circular') {
      handleDownloadCircularBadge();
    } else {
      handleDownloadSquareBadge();
    }
  };

  return (
    <section id="attendee-badge" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Ticket className="w-3 h-3" />
            <span>Official Conference Delegate Pass</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-2">
            Create Your Attendee Badge
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/75 leading-relaxed">
            Choose your badge format (Circular Badge or Square Social Post), upload your picture, enter your details, and download or share your badge directly to social media!
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Form Inputs */}
          <div className="lg:col-span-6 dotnet-content-region p-5 sm:p-7 space-y-4 text-left">
            
            {/* Badge Format Selector: Circular vs Square Social */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#14053A] uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Choose Badge Format</span>
                </span>
                <span className="text-[10px] text-stone-500 font-normal">Shape</span>
              </label>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setBadgeShape('circular')}
                  className={`py-2.5 px-3 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    badgeShape === 'circular'
                      ? 'border-[#512BD4] bg-[#512BD4] text-white shadow-xs'
                      : 'border-[#D8CEF7] bg-white text-[#14053A] hover:bg-stone-50'
                  }`}
                >
                  <Circle className="w-4 h-4" />
                  <span>CIRCULAR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBadgeShape('square')}
                  className={`py-2.5 px-3 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    badgeShape === 'square'
                      ? 'border-[#512BD4] bg-[#512BD4] text-white shadow-xs'
                      : 'border-[#D8CEF7] bg-white text-[#14053A] hover:bg-stone-50'
                  }`}
                >
                  <Square className="w-4 h-4" />
                  <span>SQUARE (POST)</span>
                </button>
              </div>
            </div>

            {/* Direct Photo Upload */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#14053A] uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Your Photo</span>
                </span>
                {customPhotoUrl && (
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="text-[10.5px] text-red-600 hover:text-red-800 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                    <span>Remove</span>
                  </button>
                )}
              </label>

              {customPhotoUrl ? (
                <div className="flex items-center gap-3.5 p-2.5 bg-white border border-[#D8CEF7] rounded-xl shadow-xs">
                  <img
                    src={customPhotoUrl}
                    alt="Uploaded preview"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#512BD4] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
                      <Check className="w-3.5 h-3.5" />
                      <span>Photo uploaded!</span>
                    </div>
                    <p className="text-[11px] text-stone-500 truncate">Ready on your badge.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-xs font-semibold bg-[#EEEAFB] text-[#512BD4] px-2.5 py-1.5 rounded-lg border border-[#D8CEF7] hover:bg-[#512BD4] hover:text-white transition-colors cursor-pointer flex-shrink-0"
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
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#512BD4] bg-[#EEEAFB]'
                      : 'border-[#D8CEF7] bg-[#FAF8FF] hover:border-[#512BD4] hover:bg-[#EEEAFB]/40'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#EEEAFB] border border-[#D8CEF7] flex items-center justify-center mx-auto mb-2 text-[#512BD4]">
                    <Upload className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-[#14053A] uppercase">
                    Upload Your Portrait Picture
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
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

            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="classic-badge-name" className="text-xs font-bold text-[#14053A] uppercase flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>Your Name</span>
              </label>
              <input
                id="classic-badge-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={26}
                className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] focus:border-[#512BD4] focus:outline-none text-sm font-semibold text-[#14053A] bg-white transition-colors"
              />
            </div>

            {/* Role & Presets */}
            <div className="space-y-1.5">
              <label htmlFor="classic-badge-role" className="text-xs font-bold text-[#14053A] uppercase flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>Designation / Role</span>
              </label>
              <input
                id="classic-badge-role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                maxLength={30}
                className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] focus:border-[#512BD4] focus:outline-none text-sm font-semibold text-[#14053A] bg-white transition-colors"
              />
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {ROLE_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setRole(preset)}
                    className={`text-[10.5px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                      role === preset
                        ? 'bg-[#512BD4] text-white border-[#512BD4] font-semibold'
                        : 'bg-white text-stone-700 border-[#D8CEF7] hover:bg-[#EEEAFB]'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* College / Organization */}
            <div className="space-y-1">
              <label htmlFor="classic-badge-college" className="text-xs font-bold text-[#14053A] uppercase flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>College / Organization</span>
              </label>
              <input
                id="classic-badge-college"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                maxLength={35}
                className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] focus:border-[#512BD4] focus:outline-none text-sm font-semibold text-[#14053A] bg-white transition-colors"
              />
            </div>

            <div className="bg-[#EEEAFB] border border-[#DCD5F6] rounded-xl p-2.5 text-[11px] text-[#512BD4] font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#512BD4] flex-shrink-0" />
              <span>Features official .NET Bot mascot companion badge!</span>
            </div>

          </div>

          {/* Right Column: Badge Preview & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* 1. Circular Preview */}
            {badgeShape === 'circular' && (
              <div className="relative select-none">
                
                {/* Outer Circular Frame */}
                <div className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[380px] md:h-[380px] rounded-full border-4 border-[#512BD4] bg-gradient-to-br from-[#512BD4] via-[#6C2BD9] to-[#D600AA] shadow-2xl relative overflow-hidden flex items-center justify-center">
                  
                  {/* SVG Text Rings */}
                  <svg viewBox="0 0 400 400" className="w-full h-full absolute inset-0 pointer-events-none">
                    <defs>
                      <path
                        id="classic-top-path"
                        d="M 40,200 A 160,160 0 1,1 360,200"
                        fill="none"
                      />
                      <path
                        id="classic-bottom-path"
                        d="M 360,200 A 160,160 0 0,1 40,200"
                        fill="none"
                      />
                    </defs>

                    <text className="font-sans font-bold text-[12.5px] fill-white uppercase tracking-[0.22em]">
                      <textPath href="#classic-top-path" startOffset="50%" textAnchor="middle">
                        ★ .NET CONF 2026 · AMRAVATI ★
                      </textPath>
                    </text>

                    <text className="font-sans font-bold text-[11px] fill-[#FFDB43] uppercase tracking-[0.2em]">
                      <textPath href="#classic-bottom-path" startOffset="50%" textAnchor="middle">
                        ★ 20 APRIL 2026 · PRPCEM CAMPUS ★
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner Badge Disc - Full Bleed Photo Area */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    title="Click to upload your photo"
                    className="w-[235px] h-[235px] sm:w-[265px] sm:h-[265px] md:w-[280px] md:h-[280px] rounded-full bg-white shadow-inner relative z-10 border border-[#DCD5F6] overflow-hidden cursor-pointer group flex items-center justify-center"
                  >
                    {customPhotoUrl ? (
                      <>
                        <img
                          src={customPhotoUrl}
                          alt={name || 'Attendee'}
                          className="w-full h-full object-cover absolute inset-0 select-none group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-25">
                          <div className="bg-black/80 px-3 py-1.5 rounded-full border border-white/60 font-mono text-[9px] sm:text-[10px] font-bold flex items-center gap-1.5 shadow-md">
                            <Camera className="w-3.5 h-3.5" />
                            <span>Change Photo</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[#FAF8FF] to-[#EEEAFB] flex flex-col items-center justify-center p-4 text-center group-hover:bg-[#EAE4FB] transition-colors">
                        <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-white/95 border-2 border-dashed border-[#512BD4]/50 flex flex-col items-center justify-center mb-1 group-hover:scale-110 group-hover:border-[#512BD4] transition-all shadow-xs">
                          <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-[#512BD4] mb-1" />
                          <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider text-[#512BD4]">
                            Add Photo
                          </span>
                        </div>
                        <span className="text-[7.5px] sm:text-[8.5px] font-mono text-[#512BD4] font-bold uppercase tracking-wide">
                          Upload Portrait
                        </span>
                      </div>
                    )}

                    {/* Delegate Pill at Top */}
                    <div className="absolute top-2.5 sm:top-3.5 inset-x-0 flex justify-center z-20 pointer-events-none">
                      <span className="bg-[#512BD4] text-white font-sans font-bold text-[8px] sm:text-[9px] px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                        OFFICIAL DELEGATE
                      </span>
                    </div>

                    {/* Bottom Info Banner */}
                    <div className="absolute bottom-0 inset-x-0 pt-8 pb-3 px-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col items-center justify-end text-center z-20 pointer-events-none">
                      <h4 className="font-display font-bold text-sm sm:text-base md:text-[17px] text-white uppercase tracking-tight leading-tight max-w-[200px] truncate drop-shadow-md">
                        {name.trim() || 'YOUR NAME'}
                      </h4>

                      <div className="mt-1 inline-block bg-[#FFDB43] text-black border border-black px-2.5 py-0.5 rounded-full font-mono font-bold text-[8.5px] sm:text-[9.5px] shadow-[1px_1px_0px_0px_#000] max-w-[190px] truncate uppercase">
                        {role.trim() || 'DELEGATE'}
                      </div>

                      {college.trim() && (
                        <p className="font-mono text-[8px] sm:text-[9px] font-bold text-[#00BDD6] mt-0.5 max-w-[190px] truncate drop-shadow">
                          {college.trim()}
                        </p>
                      )}
                    </div>
                  </div>

                </div>

                {/* Companion Mascot Badge */}
                <div 
                  className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-3 border-[#512BD4] shadow-xl p-1.5 flex flex-col items-center justify-center -rotate-6 hover:rotate-0 transition-transform z-30 cursor-pointer"
                  title=".NET Bot Official Mascot"
                >
                  <img
                    src="/mascot/bot_frontal.png"
                    alt=".NET Mascot"
                    className="w-full h-full object-contain"
                  />
                  <span className="bg-[#512BD4] text-white font-mono font-bold text-[7.5px] sm:text-[8.5px] px-1.5 py-0.2 rounded uppercase tracking-wider absolute -bottom-1 shadow-xs">
                    .NET BOT
                  </span>
                </div>

              </div>
            )}

            {/* 2. Square Preview (Social Media Post Format) */}
            {badgeShape === 'square' && (
              <div className="relative select-none">
                
                {/* Outer Square Frame */}
                <div className="w-[310px] h-[375px] sm:w-[360px] sm:h-[425px] md:w-[380px] md:h-[445px] rounded-3xl border-2 border-[#DCD5F6] bg-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  
                  {/* Header Banner - Social Post Style */}
                  <div className="bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] text-white py-2.5 px-3 text-center">
                    <div className="inline-block bg-white/20 text-white font-sans font-bold text-[8px] sm:text-[9px] px-2.5 py-0.5 rounded-full border border-white/40 uppercase mb-1">
                      ★ .NET CONF 2026 · AMRAVATI ★
                    </div>
                    <div className="font-sans font-black text-lg sm:text-xl tracking-tight uppercase text-white leading-tight">
                      I'M ATTENDING!
                    </div>
                    <div className="font-sans font-bold text-[8.5px] sm:text-[9.5px] text-[#FFDB43] tracking-wide mt-0.5 uppercase">
                      ★ 20 APRIL 2026 · PRPCEM CAMPUS ★
                    </div>
                  </div>

                  {/* Main Delegate Body */}
                  <div className="flex-1 flex flex-col items-center justify-center p-3 text-center">
                    
                    {/* User Photo Frame: Social Media Rounded-Square Frame */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      title="Click to upload your photo"
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl border-2 border-[#512BD4] bg-white shadow-md shadow-[#512BD4]/15 overflow-hidden relative cursor-pointer group flex items-center justify-center mb-1.5 transition-transform hover:scale-102"
                    >
                      {customPhotoUrl ? (
                        <>
                          <img
                            src={customPhotoUrl}
                            alt={name || 'Attendee'}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                            <Camera className="w-5 h-5" />
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-[#512BD4] p-2">
                          <Camera className="w-7 h-7 mb-1 group-hover:scale-110 transition-transform" />
                          <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#512BD4]">
                            Add Photo
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#14053A] uppercase tracking-tight leading-tight max-w-[240px] truncate">
                      {name.trim() || 'YOUR NAME'}
                    </h4>

                    {/* Role Pill */}
                    <div className="mt-1 inline-block bg-[#EEEAFB] text-[#512BD4] border border-[#DCD5F6] px-2.5 py-0.5 rounded-full font-sans font-bold text-[9.5px] sm:text-[10px] max-w-[220px] truncate uppercase">
                      {role.trim() || 'DELEGATE'}
                    </div>

                    {/* College */}
                    {college.trim() && (
                      <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-[#14053A]/75 mt-1 max-w-[230px] truncate">
                        {college.trim()}
                      </p>
                    )}

                    {/* Stars */}
                    <div className="text-[#512BD4] font-bold text-[10px] mt-0.5 tracking-widest">
                      ★ ★ ★
                    </div>
                  </div>

                  {/* Clean Delegate Info & Mascot Stamp (Social Footer) */}
                  <div className="bg-[#FAF8FF] px-3 py-1.5 flex items-center justify-between border-t border-[#DCD5F6]/60">
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[8.5px] sm:text-[9.5px] text-[#512BD4] font-bold tracking-tight">
                        #DotNetConf2026
                      </span>
                      <span className="font-mono text-[7px] sm:text-[7.5px] text-stone-500 font-medium">
                        dotnetconf.mscprpcem.tech
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#DCD5F6] p-0.5 shadow-xs">
                        <img
                          src="/mascot/bot_frontal.png"
                          alt=".NET Bot"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="bg-[#512BD4] text-white font-mono font-bold text-[7.5px] sm:text-[8px] px-1.5 py-0.5 rounded uppercase">
                        .NET BOT
                      </span>
                    </div>
                  </div>

                  {/* Bottom Rim */}
                  <div className="bg-[#14053A] text-white py-1 px-2 text-center font-mono font-bold text-[8px] sm:text-[9px] uppercase tracking-wider">
                    MICROSOFT STUDENT CLUB · AMRAVATI CHAPTER
                  </div>

                </div>

              </div>
            )}

            {/* Action Buttons: Download & Direct Social Sharing */}
            <div className="w-full max-w-[320px] sm:max-w-[370px] space-y-3 mt-5">
              
              {/* Primary Download Button */}
              <button
                type="button"
                onClick={handleDownloadBadge}
                disabled={isDownloading}
                className="w-full dotnet-solid-btn-accent text-xs sm:text-sm py-3 px-4 rounded-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md shadow-[#512BD4]/25"
              >
                <Download className="w-4 h-4" />
                <span>
                  {isDownloading 
                    ? `Saving ${badgeShape.toUpperCase()} Badge...` 
                    : `Download ${badgeShape === 'circular' ? 'Circular' : 'Square'} Badge (PNG)`}
                </span>
              </button>

              {/* Direct Social Media Sharing Panel */}
              <div className="bg-[#FAF8FF] border border-[#DCD5F6] rounded-2xl p-3 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-sans font-bold text-[#14053A] uppercase flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-[#512BD4]" />
                    <span>Share On Social Media</span>
                  </span>
                  <span className="text-[10px] font-sans text-stone-500 font-semibold">1-Click</span>
                </div>

                {/* Social Share Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="py-2 px-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-bold text-[11px] rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Share on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>WhatsApp</span>
                  </button>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    onClick={handleShareLinkedIn}
                    className="py-2 px-1.5 bg-[#0A66C2] hover:bg-[#084e96] text-white font-sans font-bold text-[11px] rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>LinkedIn</span>
                  </button>

                  {/* X (Twitter) */}
                  <button
                    type="button"
                    onClick={handleShareX}
                    className="py-2 px-1.5 bg-black hover:bg-stone-800 text-white font-sans font-bold text-[11px] rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Post on X (Twitter)"
                  >
                    <XIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>X</span>
                  </button>
                </div>

                {/* Copy Text Button */}
                <button
                  type="button"
                  onClick={handleCopyShare}
                  className="w-full py-2 px-3 bg-white hover:bg-stone-50 text-stone-800 font-sans font-semibold text-[11px] rounded-xl border border-[#DCD5F6] shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Copy formatted post text to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                      <span className="text-emerald-700 font-bold">Copied Post Text to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#512BD4]" />
                      <span>Copy Social Post Text</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AttendeeBadge;
