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
import { LinkedInIcon, WhatsAppIcon, InstagramIcon, TelegramIcon, XIcon } from '../ui/SocialIcons.jsx';
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

const ROLE_PRESETS = [
  'Student Developer',
  'Software Engineer',
  'AI & Autonomous Agent Builder',
  'Cloud & DevOps Architect',
  'GitHub & Open Source Contributor',
  'Community Delegate',
];

export const DncAttendeeBadge = ({ isModal = false }) => {
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
    return `I'm attending .NET Conf 2026 Amravati${roleString}${collegeString}!

Join me for Central India's premier Microsoft ecosystem summit at PRPCEM Campus, Amravati — uniting Generative AI & Autonomous Agents, GitHub Copilot & DevOps, Microsoft Azure Cloud Architecture, and Modern .NET 11.

Generate your official attendee badge here:
https://dnc.mscprpcem.tech

#DotNetConf2026 #DotNetConfAmravati #MSCPRPCEM #GenerativeAI #GitHubCopilot #DevOps #Azure #DotNet #Microsoft`;
  };

  const handleShareWhatsApp = () => {
    const text = getSharePostText();
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const confUrl = 'https://dnc.mscprpcem.tech';
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(confUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareX = () => {
    const text = `I'm attending .NET Conf 2026 Amravati at PRPCEM! 🎉\n\nCentral India's flagship summit uniting Generative AI, GitHub Copilot, Azure Cloud & Modern .NET 11.\n\nGenerate your badge: https://dnc.mscprpcem.tech\n\n#DotNetConf2026 #MSCPRPCEM #Azure #DotNet`;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
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
    const confUrl = 'https://dnc.mscprpcem.tech';
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

  // Canvas helpers for curved text along an arc (for Circular Badge)
  const drawTopArcText = (ctx, text, centerX, centerY, radius, letterSpacingAngle = 0.046) => {
    const chars = text.split('');
    const totalAngle = (chars.length - 1) * letterSpacingAngle;
    chars.forEach((char, i) => {
      const theta = -totalAngle / 2 + i * letterSpacingAngle;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(theta);
      ctx.translate(0, -radius);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  };

  const drawBottomArcText = (ctx, text, centerX, centerY, radius, letterSpacingAngle = 0.042) => {
    const chars = text.split('');
    const totalAngle = (chars.length - 1) * letterSpacingAngle;
    chars.forEach((char, i) => {
      const phi = -totalAngle / 2 + i * letterSpacingAngle;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-phi);
      ctx.translate(0, radius);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
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

  // 1. Download Circular Badge Canvas (1080x1080 High-DPI Crisp Social Format)
  const handleDownloadCircularBadge = async () => {
    setIsDownloading(true);

    if (document.fonts) {
      await document.fonts.ready;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    const centerX = 540;
    const centerY = 540;
    const outerRadius = 460;
    const innerRadius = 360;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Outer drop shadow (Neo-Brutalist offset)
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX + 10, centerY + 10, outerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.restore();

    // Outer ring fill (Microsoft Purple)
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#512BD4';
    ctx.fill();
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Top Arc Text: ★ .NET CONF 2026 · AMRAVATI ★
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 27px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawTopArcText(ctx, '★  .NET CONF 2026 · AMRAVATI  ★', centerX, centerY, 410, 0.048);

    // Bottom Arc Text: ★ PRPCEM CAMPUS · AMRAVATI ★ (Event date removed)
    ctx.fillStyle = '#FFDB43';
    ctx.font = 'bold 24px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawBottomArcText(ctx, '★  PRPCEM CAMPUS · AMRAVATI  ★', centerX, centerY, 410, 0.044);

    // Inner Circle Background & Border
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FAF8FF';
    ctx.fill();
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.clip();

    // Load user portrait & .NET Mascot
    const [userImg, mascotImg] = await Promise.all([
      loadImage(customPhotoUrl),
      loadImage('/mascot/bot_frontal.png'),
    ]);

    // Draw user portrait to fill the whole inner disc space
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
        const mSize = 360;
        ctx.drawImage(mascotImg, centerX - mSize / 2, centerY - mSize / 2 - 30, mSize, mSize);
      }
    }

    // Gradient scrim over lower half for text legibility
    const scrimGrad = ctx.createLinearGradient(centerX, centerY + 20, centerX, centerY + innerRadius);
    scrimGrad.addColorStop(0, 'rgba(20, 5, 58, 0)');
    scrimGrad.addColorStop(0.5, 'rgba(20, 5, 58, 0.7)');
    scrimGrad.addColorStop(1, 'rgba(20, 5, 58, 0.95)');
    ctx.fillStyle = scrimGrad;
    ctx.fillRect(centerX - innerRadius, centerY + 20, innerRadius * 2, innerRadius - 20);

    // Neo-Brutalist Overlay Badge Card for Name, Position & Details
    const badgeW = 480;
    const badgeH = college.trim() ? 175 : 140;
    const badgeX = centerX - badgeW / 2;
    const badgeY = centerY + (innerRadius - badgeH - 24);
    const badgeRadius = 20;

    ctx.save();
    // Drop shadow
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.roundRect(badgeX + 6, badgeY + 6, badgeW, badgeH, badgeRadius);
    ctx.fill();

    // White badge card
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, badgeH, badgeRadius);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Top Delegate Chip
    const delChip = 'OFFICIAL DELEGATE';
    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    const delW = ctx.measureText(delChip).width + 24;
    const delY = badgeY + 12;
    ctx.fillStyle = '#00BDD6';
    ctx.beginPath();
    ctx.roundRect(centerX - delW / 2, delY, delW, 24, 12);
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(delChip, centerX, delY + 12);

    // Attendee Name
    ctx.fillStyle = '#000000';
    ctx.font = '900 32px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const displayName = (name.trim() || 'YOUR NAME').toUpperCase();
    ctx.fillText(displayName, centerX, delY + 44);

    // Role Pill
    const roleText = (role.trim() || 'DELEGATE').toUpperCase();
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    const roleWidth = ctx.measureText(roleText).width + 28;
    const roleY = delY + 68;
    ctx.fillStyle = '#FFDB43';
    ctx.beginPath();
    ctx.roundRect(centerX - roleWidth / 2, roleY, roleWidth, 26, 13);
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'middle';
    ctx.fillText(roleText, centerX, roleY + 13);

    // College / Organization (only if provided)
    if (college.trim()) {
      ctx.fillStyle = '#333333';
      ctx.font = 'bold 16px "Open Sans", sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(college.trim(), centerX, roleY + 36);
    }
    ctx.restore(); // end badge
    ctx.restore(); // end inner circle clip

    // Crisp black border on top of clipped disc
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.restore();

    // Official .NET Mascot Seal (Replacing .NET Verified)
    const sealCenterX = 870;
    const sealCenterY = 870;
    const sealRadius = 115;

    ctx.save();
    ctx.translate(sealCenterX, sealCenterY);
    ctx.rotate(-6 * (Math.PI / 180));

    // Drop shadow
    ctx.beginPath();
    ctx.arc(8, 8, sealRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();

    // Purple circle base
    ctx.beginPath();
    ctx.arc(0, 0, sealRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#512BD4';
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Draw .NET Mascot
    if (mascotImg) {
      const botW = 145;
      const botH = 145;
      ctx.drawImage(mascotImg, -botW / 2, -botH / 2 - 14, botW, botH);
    } else {
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 36px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('.NET BOT', 0, -10);
    }

    // Yellow label chip ".NET BOT"
    const passLabel = '.NET BOT';
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    const pLabelW = ctx.measureText(passLabel).width + 24;
    const pLabelH = 28;
    const pLabelY = sealRadius - 16;

    ctx.fillStyle = '#FFDB43';
    ctx.beginPath();
    ctx.roundRect(-pLabelW / 2, pLabelY - pLabelH / 2, pLabelW, pLabelH, 8);
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(passLabel, 0, pLabelY);

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

    if (document.fonts) {
      await document.fonts.ready;
    }

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

    // Drop Shadow
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX + 12, cardY + 12, cardW, cardH, cardRadius);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.restore();

    // Main Card Background
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
    ctx.fillStyle = '#FAF8FF';
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.clip();

    // Header Banner - Social Media Post Style
    const headerY = cardY;
    const headerH = 190;
    ctx.fillStyle = '#512BD4';
    ctx.fillRect(cardX, headerY, cardW, headerH);

    // Decorative geometric stripes in header
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 5;
    for (let lx = cardX; lx < cardX + cardW + 150; lx += 45) {
      ctx.beginPath();
      ctx.moveTo(lx, headerY + headerH);
      ctx.lineTo(lx - 60, headerY);
      ctx.stroke();
    }

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(cardX, headerY + headerH);
    ctx.lineTo(cardX + cardW, headerY + headerH);
    ctx.stroke();

    // Top Pill: ★ .NET CONF 2026 · AMRAVATI ★
    const pillText = '★  .NET CONF 2026 · AMRAVATI  ★';
    ctx.font = 'bold 21px "JetBrains Mono", monospace';
    const pillW = ctx.measureText(pillText).width + 36;
    const pillY = headerY + 26;
    ctx.fillStyle = '#FFDB43';
    ctx.beginPath();
    ctx.roundRect(centerX - pillW / 2, pillY, pillW, 34, 17);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pillText, centerX, pillY + 17);

    // Headline: "I'M ATTENDING!"
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 48px "Space Grotesk", sans-serif';
    ctx.fillText("I'M ATTENDING!", centerX, headerY + 112);

    // Subtitle: Venue Location (Event date removed)
    ctx.fillStyle = '#00BDD6';
    ctx.font = 'bold 19px "JetBrains Mono", monospace';
    ctx.fillText('★  PRPCEM CAMPUS · AMRAVATI  ★', centerX, headerY + 158);

    // Load user portrait & mascot
    const [userImg, mascotImg] = await Promise.all([
      loadImage(customPhotoUrl),
      loadImage('/mascot/bot_frontal.png')
    ]);

    // Center Portrait Frame - Square with Rounded Corners
    const photoW = 340;
    const photoH = 340;
    const photoX = centerX - photoW / 2;
    const photoY = headerY + headerH + 35;
    const photoRadius = 26;

    // Shadow for portrait
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(photoX + 8, photoY + 8, photoW, photoH, photoRadius);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.restore();

    // Portrait card background & border
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(photoX, photoY, photoW, photoH, photoRadius);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#000000';
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
    const roleText = (role.trim() || 'OFFICIAL DELEGATE').toUpperCase();
    ctx.font = 'bold 20px "JetBrains Mono", monospace';
    const roleWidth = ctx.measureText(roleText).width + 38;
    const roleY = photoY + photoH + 85;
    ctx.fillStyle = '#FFDB43';
    ctx.beginPath();
    ctx.roundRect(centerX - roleWidth / 2, roleY, roleWidth, 38, 19);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.fillText(roleText, centerX, roleY + 19);

    // College / Organization (if entered)
    if (college.trim()) {
      ctx.fillStyle = '#444444';
      ctx.font = 'bold 22px "Open Sans", sans-serif';
      ctx.fillText(college.trim(), centerX, roleY + 68);
    }

    // Footer Bar (Matches preview layout 1:1)
    const footerH = 92;
    const footerY = cardY + cardH - footerH - 42;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(cardX, footerY, cardW, footerH);
    ctx.beginPath();
    ctx.moveTo(cardX, footerY);
    ctx.lineTo(cardX + cardW, footerY);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Left Footer: Hashtag & Website
    ctx.textAlign = 'left';
    ctx.fillStyle = '#512BD4';
    ctx.font = 'bold 22px "JetBrains Mono", monospace';
    ctx.fillText('#DotNetConf2026', cardX + 40, footerY + 38);
    ctx.fillStyle = '#555555';
    ctx.font = 'bold 17px "JetBrains Mono", monospace';
    ctx.fillText('dnc.mscprpcem.tech', cardX + 40, footerY + 68);

    // Right Footer: Mascot Box Stamp & Yellow Pill (Matches preview 1:1)
    const mascotBoxX = cardX + cardW - 145;
    const mascotBoxY = footerY + 14;
    const mascotBoxSize = 64;

    ctx.save();
    // Drop shadow
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.roundRect(mascotBoxX + 4, mascotBoxY + 4, mascotBoxSize, mascotBoxSize, 14);
    ctx.fill();

    // Purple square box
    ctx.fillStyle = '#512BD4';
    ctx.beginPath();
    ctx.roundRect(mascotBoxX, mascotBoxY, mascotBoxSize, mascotBoxSize, 14);
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    if (mascotImg) {
      const pad = 6;
      ctx.drawImage(
        mascotImg,
        mascotBoxX + pad,
        mascotBoxY + pad,
        mascotBoxSize - pad * 2,
        mascotBoxSize - pad * 2
      );
    }

    // Yellow Mascot Tag
    const mTag = '.NET BOT';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    const mTagW = ctx.measureText(mTag).width + 16;
    const mTagX = cardX + cardW - 60;
    ctx.fillStyle = '#FFDB43';
    ctx.beginPath();
    ctx.roundRect(mTagX - mTagW / 2, footerY + 34, mTagW, 24, 6);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(mTag, mTagX, footerY + 46);
    ctx.restore();

    // Bottom Rim Banner (Matches preview 1:1)
    const rimH = 42;
    const rimY = cardY + cardH - rimH;
    ctx.fillStyle = '#14053A';
    ctx.fillRect(cardX, rimY, cardW, rimH);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MICROSOFT STUDENT CLUB · AMRAVATI CHAPTER', centerX, rimY + rimH / 2);

    ctx.restore(); // end card clip

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
    <section id="attendee-badge" className={isModal ? "py-1 px-1 w-full relative" : "py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative"}>
      {!isModal && (
        <>
          <DncSectionFlanks
            leftIndex="07"
            leftTag="BADGE"
            leftBadgeText="I'M ATTENDING!"
            leftBadgeColor="bg-[#512BD4] text-white"
            leftSub="CUSTOM BADGE"
            rightIndex="1080P"
            rightTag="SOCIAL"
            rightBadgeText="SHARE POST"
            rightBadgeColor="bg-[#00BDD6] text-black"
            rightSub="INSTANT DOWNLOAD"
          />
          {/* Signpost Header */}
          <DncSignpost
            title="ATTENDEE BADGE STUDIO"
            badge="GET YOUR BADGE"
            theme="purple"
          />
        </>
      )}

      <div className={isModal ? "bg-white rounded-2xl p-2 sm:p-4 text-left" : "bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-4 sm:p-7 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]"}>

        {/* Intro */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5">
            <Ticket className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Official Conference Delegate Pass</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2">
            Create Your Attendee Badge
          </h3>

          <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
            Choose your badge format (Circular Badge or Square Social Post), upload your picture, enter your details, and download or share your badge directly to social media!
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Form Controls */}
          <div className="lg:col-span-6 bg-[#FAF8FF] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-4 sm:p-6 shadow-[3px_3px_0px_0px_#000] space-y-4 text-left">

            {/* Badge Format Selector: Circular vs Square Social */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-black uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Choose Badge Format</span>
                </span>
                <span className="text-[10px] font-mono text-stone-500 font-normal">Shape</span>
              </label>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setBadgeShape('circular')}
                  className={`py-2.5 px-3 rounded-xl border-[2px] border-black font-mono font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${badgeShape === 'circular'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000] translate-x-[1px] translate-y-[1px]'
                      : 'bg-white text-black hover:bg-stone-100 shadow-[2px_2px_0px_0px_#000]'
                    }`}
                >
                  <Circle className="w-4 h-4" />
                  <span>CIRCULAR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBadgeShape('square')}
                  className={`py-2.5 px-3 rounded-xl border-[2px] border-black font-mono font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${badgeShape === 'square'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000] translate-x-[1px] translate-y-[1px]'
                      : 'bg-white text-black hover:bg-stone-100 shadow-[2px_2px_0px_0px_#000]'
                    }`}
                >
                  <Square className="w-4 h-4" />
                  <span>SQUARE (POST)</span>
                </button>
              </div>
            </div>

            {/* Direct Photo Upload Area */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-black uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Your Photo</span>
                </span>
                {customPhotoUrl && (
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="text-[10.5px] text-red-600 hover:text-red-800 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                    <span>Remove</span>
                  </button>
                )}
              </label>

              {customPhotoUrl ? (
                <div className="flex items-center gap-3.5 p-2.5 bg-white border-[2px] border-black rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <img
                    src={customPhotoUrl}
                    alt="Uploaded preview"
                    className="w-14 h-14 rounded-full object-cover border-[2px] border-black flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-xs">
                      <Check className="w-3.5 h-3.5" />
                      <span>Photo uploaded!</span>
                    </div>
                    <p className="text-[11px] text-stone-500 truncate">Looking great on your badge.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-xs font-mono font-bold bg-[#EEEAFB] text-[#512BD4] px-2.5 py-1.5 rounded-lg border border-black hover:bg-[#512BD4] hover:text-white transition-colors cursor-pointer flex-shrink-0"
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
                  className={`border-[2px] border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${isDragging
                      ? 'border-[#512BD4] bg-[#EEEAFB]'
                      : 'border-black/40 bg-white hover:border-black hover:bg-stone-50'
                    }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#EEEAFB] border-[1.5px] border-black flex items-center justify-center mx-auto mb-2 text-[#512BD4] shadow-[1.5px_1.5px_0px_0px_#000]">
                    <Upload className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-mono font-bold text-black uppercase">
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

            {/* Attendee Name */}
            <div className="space-y-1">
              <label htmlFor="badge-name" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>Your Name</span>
              </label>
              <input
                id="badge-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={26}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-bold text-black bg-white focus:outline-none focus:shadow-[2px_2px_0px_0px_#512BD4]"
              />
            </div>

            {/* Role & Presets */}
            <div className="space-y-1.5">
              <label htmlFor="badge-role" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#00BDD6]" />
                <span>Designation / Role</span>
              </label>
              <input
                id="badge-role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                maxLength={30}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-bold text-black bg-white focus:outline-none focus:shadow-[2px_2px_0px_0px_#00BDD6]"
              />
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {ROLE_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setRole(preset)}
                    className={`text-[10.5px] font-mono px-2 py-0.5 rounded-md border border-black transition-all cursor-pointer ${role === preset
                        ? 'bg-[#512BD4] text-white font-bold shadow-[1px_1px_0px_0px_#000]'
                        : 'bg-white text-stone-700 hover:bg-stone-100'
                      }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* College / Organization (No Set PRPCEM, No placeholder) */}
            <div className="space-y-1">
              <label htmlFor="badge-college" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#D600AA]" />
                <span>College / Organization</span>
              </label>
              <input
                id="badge-college"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                maxLength={35}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-bold text-black bg-white focus:outline-none focus:shadow-[2px_2px_0px_0px_#D600AA]"
              />
            </div>

            {/* Info Badge */}
            <div className="bg-[#EEEAFB] border border-black/20 rounded-xl p-2.5 text-[11px] font-mono text-stone-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#512BD4] flex-shrink-0" />
              <span>Includes official .NET Bot mascot sticker on your badge!</span>
            </div>

          </div>

          {/* Right Column: Badge Preview & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-center">

            {/* 1. Circular Badge Preview */}
            {badgeShape === 'circular' && (
              <div className="relative select-none">

                {/* Outer Circular Container */}
                <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] md:w-[380px] md:h-[380px] rounded-full border-[4px] border-black bg-[#512BD4] shadow-[5px_5px_0px_0px_#000] sm:shadow-[7px_7px_0px_0px_#000] relative overflow-hidden flex items-center justify-center">

                  {/* SVG Circular Text Ring */}
                  <svg viewBox="0 0 400 400" className="w-full h-full absolute inset-0 pointer-events-none">
                    <defs>
                      <path
                        id="badge-top-path"
                        d="M 40,200 A 162,162 0 1,1 360,200"
                        fill="none"
                      />
                      {/* Counter-clockwise path from left to right along bottom so text is upright */}
                      <path
                        id="badge-bottom-path"
                        d="M 40,200 A 168,168 0 0,0 360,200"
                        fill="none"
                      />
                    </defs>

                    {/* Top Curved Text */}
                    <text className="font-mono font-black text-[12px] sm:text-[12.5px] fill-white uppercase tracking-[0.22em]">
                      <textPath href="#badge-top-path" startOffset="50%" textAnchor="middle">
                        ★ .NET CONF 2026 · AMRAVATI ★
                      </textPath>
                    </text>

                    {/* Bottom Curved Text (Upright Left-to-Right - Event date removed) */}
                    <text className="font-mono font-black text-[10.5px] sm:text-[11px] fill-[#FFDB43] uppercase tracking-[0.2em]">
                      <textPath href="#badge-bottom-path" startOffset="50%" textAnchor="middle">
                        ★ PRPCEM CAMPUS · AMRAVATI ★
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner Badge Disc - Whole Center Space as the Image */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    title="Click to upload your photo"
                    className="w-[205px] h-[205px] xs:w-[235px] xs:h-[235px] sm:w-[265px] sm:h-[265px] md:w-[280px] md:h-[280px] rounded-full border-[3px] border-black bg-[#FAF8FF] relative z-10 overflow-hidden cursor-pointer group select-none shadow-[2px_2px_0px_0px_#000]"
                  >
                    {customPhotoUrl ? (
                      <>
                        <img
                          src={customPhotoUrl}
                          alt={name || 'Attendee'}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-20">
                          <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-[#EEEAFB] flex flex-col items-center justify-center text-[#512BD4] p-3">
                        <Camera className="w-7 h-7 mb-1 group-hover:scale-110 transition-transform text-[#512BD4]" />
                        <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-black">
                          Click to Add Photo
                        </span>
                      </div>
                    )}

                    {/* Gradient Scrim for Overlay Badge */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

                    {/* Neo-Brutalist Overlay Badge Card for Name & Position */}
                    <div className="absolute bottom-1.5 inset-x-2 z-20 bg-white border-[2px] border-black shadow-[2px_2px_0px_0px_#000] rounded-xl p-1.5 text-center flex flex-col items-center">
                      <span className="text-[7px] sm:text-[7.5px] font-mono font-black text-black bg-[#00BDD6] px-2 py-0.2 rounded-full border border-black uppercase tracking-wider leading-none mb-0.5">
                        OFFICIAL DELEGATE
                      </span>
                      <h4 className="font-sans font-black text-xs sm:text-[13px] text-black uppercase tracking-tight leading-tight max-w-[190px] truncate">
                        {name.trim() || 'YOUR NAME'}
                      </h4>
                      <div className="mt-0.5 inline-block bg-[#FFDB43] text-black px-2 py-0.2 rounded-full font-mono font-bold text-[8px] sm:text-[8.5px] border border-black uppercase max-w-[180px] truncate">
                        {role.trim() || 'DELEGATE'}
                      </div>
                      {college.trim() && (
                        <p className="font-sans text-[7.5px] sm:text-[8px] text-stone-600 font-semibold max-w-[180px] truncate mt-0.5">
                          {college.trim()}
                        </p>
                      )}
                    </div>
                  </div>

                </div>

                {/* Official .NET Mascot Seal (Replacing .NET Verified) */}
                <div
                  className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#512BD4] text-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000] p-1 flex flex-col items-center justify-center -rotate-6 hover:rotate-0 transition-transform z-30 select-none overflow-visible"
                  title="Official .NET Mascot Seal"
                >
                  <img
                    src="/mascot/bot_frontal.png"
                    alt=".NET Mascot"
                    className="w-13 h-13 sm:w-16 sm:h-16 object-contain filter drop-shadow select-none -mt-2"
                  />
                  <span className="bg-[#FFDB43] text-black font-mono font-black text-[7.5px] sm:text-[8.5px] px-2 py-0.5 rounded border border-black uppercase tracking-wider absolute -bottom-1 shadow-[1px_1px_0px_0px_#000]">
                    .NET BOT
                  </span>
                </div>

              </div>
            )}

            {/* 2. Square Social Badge Preview (Social Media Post Format) */}
            {badgeShape === 'square' && (
              <div className="relative select-none">

                {/* Outer Square Container - Social Media Graphic Post */}
                <div className="w-[280px] h-[350px] xs:w-[310px] xs:h-[375px] sm:w-[360px] sm:h-[425px] md:w-[380px] md:h-[445px] rounded-3xl border-[4px] border-black bg-[#FAF8FF] shadow-[5px_5px_0px_0px_#000] sm:shadow-[7px_7px_0px_0px_#000] relative overflow-hidden flex flex-col justify-between">

                  {/* Header Banner - Social Media Post Style */}
                  <div className="bg-[#512BD4] text-white border-b-[3px] border-black py-2.5 px-3 text-center">
                    <div className="inline-block bg-[#FFDB43] text-black font-mono font-black text-[8px] sm:text-[9px] px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_0px_#000] uppercase mb-1">
                      ★ .NET CONF 2026 · AMRAVATI ★
                    </div>
                    <div className="font-sans font-black text-lg sm:text-xl tracking-tight uppercase text-white leading-tight">
                      I'M ATTENDING!
                    </div>
                    <div className="font-mono font-bold text-[8.5px] sm:text-[9.5px] text-[#00BDD6] tracking-wide mt-0.5 uppercase">
                      ★ PRPCEM CAMPUS · AMRAVATI ★
                    </div>
                  </div>

                  {/* Main Delegate Body */}
                  <div className="flex-1 flex flex-col items-center justify-center p-3 text-center">

                    {/* User Photo Frame: Social Media Rounded-Square Frame */}
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      title="Click to upload your portrait picture"
                      className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl border-[3px] border-black bg-white shadow-[3.5px_3.5px_0px_0px_#000] overflow-hidden relative cursor-pointer group flex items-center justify-center mb-2 transition-transform hover:scale-102"
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
                          <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-black">
                            Add Photo
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h4 className="font-sans font-black text-base sm:text-lg text-[#14053A] uppercase tracking-tight leading-tight max-w-[240px] truncate">
                      {name.trim() || 'YOUR NAME'}
                    </h4>

                    {/* Role Pill */}
                    <div className="mt-1 inline-block bg-[#FFDB43] text-black border border-black px-2.5 py-0.5 rounded-full font-mono font-bold text-[9.5px] sm:text-[10px] shadow-[1px_1px_0px_0px_#000] max-w-[220px] truncate uppercase">
                      {role.trim() || 'DELEGATE'}
                    </div>

                    {/* College (Only if typed) */}
                    {college.trim() && (
                      <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-stone-600 mt-1 max-w-[230px] truncate">
                        {college.trim()}
                      </p>
                    )}
                  </div>

                  {/* Clean Delegate Info & Mascot Stamp (Social Footer) */}
                  <div className="bg-white px-3 py-1.5 flex items-center justify-between border-t-2 border-black/10">
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[8.5px] sm:text-[9.5px] text-[#512BD4] font-black tracking-tight">
                        #DotNetConf2026
                      </span>
                      <span className="font-mono text-[7px] sm:text-[7.5px] text-stone-500 font-bold">
                        dnc.mscprpcem.tech
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-[#512BD4] border-[1.5px] border-black flex items-center justify-center shadow-[1px_1px_0px_0px_#000] select-none p-0.5">
                        <img
                          src="/mascot/bot_frontal.png"
                          alt=".NET Mascot"
                          className="w-full h-full object-contain select-none"
                        />
                      </div>
                      <span className="bg-[#FFDB43] text-black font-mono font-black text-[7.5px] sm:text-[8px] px-1.5 py-0.5 rounded border border-black uppercase">
                        .NET BOT
                      </span>
                    </div>
                  </div>

                  {/* Bottom Rim Banner */}
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
                className="w-full bg-[#00BDD6] hover:bg-[#00A3B8] text-black font-mono font-black text-xs sm:text-sm py-3 px-4 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <Download className="w-4 h-4" />
                <span>
                  {isDownloading
                    ? `SAVING ${badgeShape.toUpperCase()} BADGE...`
                    : `DOWNLOAD ${badgeShape === 'circular' ? 'CIRCULAR' : 'SQUARE'} BADGE (PNG)`}
                </span>
              </button>

              {/* Direct Social Media Sharing Panel */}
              <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-3 shadow-[2.5px_2.5px_0px_0px_#000] space-y-2.5">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-mono font-black text-black uppercase flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-[#512BD4]" />
                    <span>Share On Social Media</span>
                  </span>
                  <span className="text-[10px] font-mono text-stone-500 font-bold">1-Click</span>
                </div>

                {/* Social Share Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="py-2 px-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono font-bold text-[11px] rounded-xl border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Share on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>WhatsApp</span>
                  </button>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    onClick={handleShareLinkedIn}
                    className="py-2 px-1.5 bg-[#0A66C2] hover:bg-[#084e96] text-white font-mono font-bold text-[11px] rounded-xl border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>LinkedIn</span>
                  </button>

                  {/* X (Twitter) */}
                  <button
                    type="button"
                    onClick={handleShareX}
                    className="py-2 px-1.5 bg-black hover:bg-stone-800 text-white font-mono font-bold text-[11px] rounded-xl border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Share on X (Twitter)"
                  >
                    <XIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>X (Twitter)</span>
                  </button>

                  {/* Instagram */}
                  <button
                    type="button"
                    onClick={handleShareInstagram}
                    className="py-2 px-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-mono font-bold text-[11px] rounded-xl border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Share on Instagram (Copies caption & opens Instagram)"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>Instagram</span>
                  </button>

                  {/* Telegram */}
                  <button
                    type="button"
                    onClick={handleShareTelegram}
                    className="py-2 px-1.5 bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-mono font-bold text-[11px] rounded-xl border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer col-span-2 sm:col-span-1"
                    title="Share on Telegram"
                  >
                    <TelegramIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                    <span>Telegram</span>
                  </button>
                </div>

                {/* Copy Text Button */}
                <button
                  type="button"
                  onClick={handleCopyShare}
                  className="w-full py-2 px-3 bg-white hover:bg-stone-50 text-stone-800 font-mono font-bold text-[11px] rounded-xl border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Copy formatted post text to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                      <span className="text-emerald-700">Copied Post Text to Clipboard!</span>
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

export default DncAttendeeBadge;
