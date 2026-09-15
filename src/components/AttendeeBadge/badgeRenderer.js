/**
 * Badge Canvas Renderer for .NET Conf 2026 Amravati
 * Premium Light Theme with Interactive Mascot Transforms (Zoom, Rotation, Pan X/Y)
 */

export const BADGE_SHAPES = {
  CIRCLE: 'circle',
  ROUNDED: 'rounded',
  PASS: 'pass',
  HEXAGON: 'hexagon',
};

export const BADGE_THEMES = {
  dotnet: {
    id: 'dotnet',
    name: '.NET Flagship',
    primary: '#512BD4',
    secondary: '#7B2BF9',
    accent: '#D600AA',
    darkText: '#14053A',
    mutedText: '#4D3E74',
    surface: '#FFFFFF',
    light: '#FAF8FF',
    border: '#DCD5F6',
    gradient: ['#512BD4', '#7B2BF9', '#D600AA'],
    tagBg: '#512BD4',
    tagText: '#FFFFFF',
  },
  azure: {
    id: 'azure',
    name: 'Azure Cloud',
    primary: '#0078D4',
    secondary: '#00A4EF',
    accent: '#28C2D1',
    darkText: '#002B49',
    mutedText: '#3B6079',
    surface: '#FFFFFF',
    light: '#F4FAFE',
    border: '#BFE4FC',
    gradient: ['#0078D4', '#00A4EF', '#28C2D1'],
    tagBg: '#0078D4',
    tagText: '#FFFFFF',
  },
  sunset: {
    id: 'sunset',
    name: 'Flamingo Sunset',
    primary: '#F65163',
    secondary: '#FF7A00',
    accent: '#FFB800',
    darkText: '#3D1308',
    mutedText: '#774133',
    surface: '#FFFFFF',
    light: '#FFF9F6',
    border: '#FED9C9',
    gradient: ['#F65163', '#FF7A00', '#FFB800'],
    tagBg: '#F65163',
    tagText: '#FFFFFF',
  },
  emerald: {
    id: 'emerald',
    name: 'Mint Aurora',
    primary: '#059669',
    secondary: '#10B981',
    accent: '#065F46',
    darkText: '#062B1D',
    mutedText: '#3B6352',
    surface: '#FFFFFF',
    light: '#F0FDF4',
    border: '#A7F3D0',
    gradient: ['#065F46', '#059669', '#10B981'],
    tagBg: '#059669',
    tagText: '#FFFFFF',
  },
};

// Helper to draw a rounded rectangle
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, width, height, radius);
  } else {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }
}

// Helper to draw a hexagon path
function drawHexagon(ctx, x, y, size) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

/**
 * Draw the official .NET mascot inside a given bounding box with Zoom, Rotation, Pan X & Pan Y
 */
function drawMascot(ctx, mascotImg, centerX, centerY, maxDimension, zoom = 1, panX = 0, panY = 0, rotation = 0) {
  if (!mascotImg || !mascotImg.complete || mascotImg.naturalWidth === 0) {
    ctx.save();
    ctx.fillStyle = '#512BD4';
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxDimension * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${Math.floor(maxDimension * 0.25)}px "Space Grotesk", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('.NET', centerX, centerY);
    ctx.restore();
    return;
  }

  const imgW = mascotImg.naturalWidth;
  const imgH = mascotImg.naturalHeight;
  const baseScale = Math.min((maxDimension * 0.95) / imgW, (maxDimension * 0.95) / imgH);
  const drawW = imgW * baseScale * zoom;
  const drawH = imgH * baseScale * zoom;

  ctx.save();
  ctx.translate(centerX + panX, centerY + panY);
  if (rotation !== 0) {
    ctx.rotate((rotation * Math.PI) / 180);
  }
  ctx.drawImage(mascotImg, -drawW / 2, -drawH / 2, drawW, drawH);
  ctx.restore();
}

/**
 * Render Attendee Badge onto target Canvas in Professional Light Theme
 */
export async function renderBadge(canvas, options) {
  if (!canvas) return;

  const {
    shape = BADGE_SHAPES.CIRCLE,
    themeId = 'dotnet',
    name = 'Alex Morgan',
    role = 'Student Developer',
    institution = '',
    attendeeType = 'ATTENDEE',
    mascotImage = null,
    zoom = 1,
    rotation = 0,
    panX = 0,
    panY = 0,
  } = options;

  const theme = BADGE_THEMES[themeId] || BADGE_THEMES.dotnet;
  const isPass = shape === BADGE_SHAPES.PASS;

  const width = isPass ? 1080 : 1200;
  const height = isPass ? 1440 : 1200;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  const renderOpts = {
    name,
    role,
    institution,
    attendeeType,
    mascotImage,
    zoom,
    rotation,
    panX,
    panY,
  };

  if (shape === BADGE_SHAPES.CIRCLE) {
    renderCircleBadge(ctx, width, height, theme, renderOpts);
  } else if (shape === BADGE_SHAPES.ROUNDED) {
    renderRoundedBadge(ctx, width, height, theme, renderOpts);
  } else if (shape === BADGE_SHAPES.PASS) {
    renderPassBadge(ctx, width, height, theme, renderOpts);
  } else if (shape === BADGE_SHAPES.HEXAGON) {
    renderHexagonBadge(ctx, width, height, theme, renderOpts);
  }
}

/* =========================================================================
   1. CIRCULAR / ROUND BADGE (Light & Professional)
   ========================================================================= */
function renderCircleBadge(ctx, width, height, theme, options) {
  const { name, role, institution, attendeeType, mascotImage, zoom = 1, rotation = 0, panX = 0, panY = 0 } = options;
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = 560;
  const mascotRadius = 250;
  const mascotCenterY = centerY - 55;

  // 1. Crisp White Base with subtle gradient
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
  const bgGrad = ctx.createRadialGradient(centerX, centerY - 100, 80, centerX, centerY, outerRadius);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(0.75, '#FCFAFF');
  bgGrad.addColorStop(1, '#F3EFFF');
  ctx.fillStyle = bgGrad;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.15)';
  ctx.shadowBlur = 40;
  ctx.fill();

  // Subtle concentric accent rings
  ctx.strokeStyle = 'rgba(81, 43, 212, 0.06)';
  ctx.lineWidth = 2;
  for (let r = 240; r <= outerRadius - 40; r += 70) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // 2. Vibrant Outer Gradient Ring
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius - 16, 0, Math.PI * 2);
  const ringGrad = ctx.createLinearGradient(centerX - outerRadius, centerY - outerRadius, centerX + outerRadius, centerY + outerRadius);
  ringGrad.addColorStop(0, theme.primary);
  ringGrad.addColorStop(0.5, theme.secondary);
  ringGrad.addColorStop(1, theme.accent);
  ctx.lineWidth = 14;
  ctx.strokeStyle = ringGrad;
  ctx.stroke();

  // Interior guide ring
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius - 32, 0, Math.PI * 2);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(81, 43, 212, 0.2)';
  ctx.stroke();
  ctx.restore();

  // 3. HORIZONTAL TOP BANNER: "★ I'M ATTENDING · .NET CONF 2026 ★" (High-Contrast & Readable)
  ctx.save();
  const topRibbonW = 680;
  const topRibbonH = 56;
  const topRibbonX = centerX - topRibbonW / 2;
  const topRibbonY = centerY - outerRadius + 85;
  drawRoundedRect(ctx, topRibbonX, topRibbonY, topRibbonW, topRibbonH, 28);
  const topRibbonGrad = ctx.createLinearGradient(topRibbonX, topRibbonY, topRibbonX + topRibbonW, topRibbonY);
  topRibbonGrad.addColorStop(0, theme.primary);
  topRibbonGrad.addColorStop(0.5, theme.secondary);
  topRibbonGrad.addColorStop(1, theme.accent);
  ctx.fillStyle = topRibbonGrad;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.3)';
  ctx.shadowBlur = 18;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#FFFFFF';
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText("★ I'M ATTENDING · .NET CONF 2026 ★", centerX, topRibbonY + topRibbonH / 2);
  ctx.restore();

  // 4. Mascot Stage Frame (Elevated light circular pedestal)
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, mascotCenterY, mascotRadius + 10, 0, Math.PI * 2);
  const stageBorder = ctx.createLinearGradient(centerX - mascotRadius, mascotCenterY - mascotRadius, centerX + mascotRadius, mascotCenterY + mascotRadius);
  stageBorder.addColorStop(0, theme.primary);
  stageBorder.addColorStop(0.5, theme.secondary);
  stageBorder.addColorStop(1, theme.accent);
  ctx.fillStyle = stageBorder;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.2)';
  ctx.shadowBlur = 20;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(centerX, mascotCenterY, mascotRadius, 0, Math.PI * 2);
  const innerStage = ctx.createRadialGradient(centerX, mascotCenterY - 40, 20, centerX, mascotCenterY, mascotRadius);
  innerStage.addColorStop(0, '#FFFFFF');
  innerStage.addColorStop(1, '#F8F6FE');
  ctx.fillStyle = innerStage;
  ctx.fill();
  ctx.restore();

  // 5. Draw Official .NET Bot Mascot (Clipped to circular pedestal with user transforms)
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, mascotCenterY, mascotRadius, 0, Math.PI * 2);
  ctx.clip();
  drawMascot(ctx, mascotImage, centerX, mascotCenterY - 5, mascotRadius * 1.85, zoom, panX, panY, rotation);
  ctx.restore();

  // 6. Attendee Category Pill Badge
  ctx.save();
  const pillText = attendeeType.toUpperCase();
  ctx.font = 'bold 22px "Space Grotesk", sans-serif';
  const pillW = Math.max(220, ctx.measureText(pillText).width + 60);
  const pillH = 44;
  const pillX = centerX - pillW / 2;
  const pillY = mascotCenterY + mascotRadius - 22;
  drawRoundedRect(ctx, pillX, pillY, pillW, pillH, 22);
  const pillGrad = ctx.createLinearGradient(pillX, pillY, pillX + pillW, pillY);
  pillGrad.addColorStop(0, theme.primary);
  pillGrad.addColorStop(1, theme.secondary);
  ctx.fillStyle = pillGrad;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.3)';
  ctx.shadowBlur = 14;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#FFFFFF';
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`✦ ${pillText} ✦`, centerX, pillY + pillH / 2);
  ctx.restore();

  // 7. Attendee Information (Clean & Centered)
  ctx.save();
  const nameY = centerY + 325;
  ctx.textAlign = 'center';

  // Name
  ctx.fillStyle = theme.darkText;
  ctx.font = 'bold 52px "Space Grotesk", sans-serif';
  ctx.textBaseline = 'middle';
  const maxNameWidth = 850;
  ctx.fillText(truncateText(ctx, name || 'Delegate Name', maxNameWidth), centerX, nameY);

  // Role
  ctx.fillStyle = theme.primary;
  ctx.font = '600 28px "Open Sans", sans-serif';
  ctx.fillText(truncateText(ctx, role || 'Software Developer', maxNameWidth), centerX, nameY + 52);

  // Institution / Organization (rendered only if provided)
  if (institution && institution.trim()) {
    ctx.fillStyle = theme.mutedText;
    ctx.font = '500 23px "Open Sans", sans-serif';
    ctx.fillText(truncateText(ctx, institution.trim(), maxNameWidth), centerX, nameY + 94);
  }
  ctx.restore();

  // 8. Clean Bottom Strip
  ctx.save();
  ctx.fillStyle = theme.primary;
  ctx.font = 'bold 24px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  drawCurvedText(ctx, "★ .NET CONF 2026 ★", centerX, centerY, outerRadius - 40, Math.PI / 2, true);
  ctx.restore();
}

/* =========================================================================
   2. ROUNDED CARD / SQUIRCLE BADGE (Professional Card)
   ========================================================================= */
function renderRoundedBadge(ctx, width, height, theme, options) {
  const { name, role, institution, attendeeType, mascotImage, zoom = 1, rotation = 0, panX = 0, panY = 0 } = options;
  const pad = 60;
  const cardW = width - pad * 2;
  const cardH = height - pad * 2;
  const radius = 60;

  // 1. Soft Card Elevation Shadow
  ctx.save();
  drawRoundedRect(ctx, pad, pad, cardW, cardH, radius);
  ctx.shadowColor = 'rgba(81, 43, 212, 0.14)';
  ctx.shadowBlur = 45;
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.restore();

  // 2. Card Background Fill
  ctx.save();
  drawRoundedRect(ctx, pad, pad, cardW, cardH, radius);
  ctx.clip();

  const bgGrad = ctx.createLinearGradient(pad, pad, width - pad, height - pad);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(0.6, '#FAF8FF');
  bgGrad.addColorStop(1, '#F3EEFF');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(pad, pad, cardW, cardH);

  // Soft geometric lattice
  ctx.strokeStyle = 'rgba(81, 43, 212, 0.04)';
  ctx.lineWidth = 1.5;
  const gridSize = 50;
  for (let x = pad; x < width - pad; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, height - pad);
    ctx.stroke();
  }
  for (let y = pad; y < height - pad; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  // Soft ambient color glows
  const gradBlob1 = ctx.createRadialGradient(width - pad - 100, pad + 100, 10, width - pad - 100, pad + 100, 400);
  gradBlob1.addColorStop(0, hexToRgba(theme.secondary, 0.1));
  gradBlob1.addColorStop(1, 'transparent');
  ctx.fillStyle = gradBlob1;
  ctx.fillRect(pad, pad, cardW, cardH);

  const gradBlob2 = ctx.createRadialGradient(pad + 150, height - pad - 150, 10, pad + 150, height - pad - 150, 400);
  gradBlob2.addColorStop(0, hexToRgba(theme.primary, 0.1));
  gradBlob2.addColorStop(1, 'transparent');
  ctx.fillStyle = gradBlob2;
  ctx.fillRect(pad, pad, cardW, cardH);

  // 3. Top Header: .NET Conf 2026 & "I'M ATTENDING"
  const headerY = pad + 65;

  ctx.fillStyle = theme.darkText;
  ctx.font = 'bold 44px "Space Grotesk", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('.NET Conf 2026', pad + 50, headerY + 15);

  ctx.fillStyle = theme.primary;
  ctx.font = 'bold 24px "Space Grotesk", sans-serif';
  ctx.fillText('AMRAVATI', pad + 50, headerY + 54);

  // "I'M ATTENDING" Badge Tag
  const tagW = 260;
  const tagH = 48;
  const tagX = width - pad - 50 - tagW;
  const tagY = headerY;
  drawRoundedRect(ctx, tagX, tagY, tagW, tagH, 24);
  const tagGrad = ctx.createLinearGradient(tagX, tagY, tagX + tagW, tagY);
  tagGrad.addColorStop(0, theme.primary);
  tagGrad.addColorStop(1, theme.secondary);
  ctx.fillStyle = tagGrad;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.25)';
  ctx.shadowBlur = 12;
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 20px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText("★ I'M ATTENDING", tagX + tagW / 2, tagY + tagH / 2);

  // 4. Center Stage Frame with Mascot
  const stageW = 440;
  const stageH = 410;
  const stageX = (width - stageW) / 2;
  const stageY = pad + 185;
  const stageR = 36;

  // Outer stage border glow
  ctx.save();
  drawRoundedRect(ctx, stageX - 6, stageY - 6, stageW + 12, stageH + 12, stageR + 4);
  const stageBorderGrad = ctx.createLinearGradient(stageX, stageY, stageX + stageW, stageY + stageH);
  stageBorderGrad.addColorStop(0, theme.secondary);
  stageBorderGrad.addColorStop(0.5, theme.primary);
  stageBorderGrad.addColorStop(1, theme.accent);
  ctx.fillStyle = stageBorderGrad;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.2)';
  ctx.shadowBlur = 25;
  ctx.fill();

  drawRoundedRect(ctx, stageX, stageY, stageW, stageH, stageR);
  const stageFill = ctx.createLinearGradient(stageX, stageY, stageX, stageY + stageH);
  stageFill.addColorStop(0, '#FFFFFF');
  stageFill.addColorStop(1, '#F9F7FE');
  ctx.fillStyle = stageFill;
  ctx.fill();
  ctx.restore();

  // Draw Mascot inside stage clipped with user transforms
  ctx.save();
  drawRoundedRect(ctx, stageX, stageY, stageW, stageH, stageR);
  ctx.clip();
  drawMascot(ctx, mascotImage, width / 2, stageY + stageH / 2 - 5, stageW * 0.95, zoom, panX, panY, rotation);
  ctx.restore();

  // Attendee Category Pill on bottom of stage
  const rolePillW = 230;
  const rolePillH = 42;
  const rolePillX = (width - rolePillW) / 2;
  const rolePillY = stageY + stageH - 21;
  drawRoundedRect(ctx, rolePillX, rolePillY, rolePillW, rolePillH, 21);
  ctx.fillStyle = theme.primary;
  ctx.shadowColor = 'rgba(0,0,0,0.15)';
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#FFFFFF';
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 20px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(attendeeType.toUpperCase(), width / 2, rolePillY + rolePillH / 2);

  // 5. Attendee Information (Centered)
  const infoY = stageY + stageH + 65;
  ctx.textAlign = 'center';

  ctx.fillStyle = theme.darkText;
  ctx.font = 'bold 52px "Space Grotesk", sans-serif';
  ctx.fillText(truncateText(ctx, name || 'Delegate Name', 900), width / 2, infoY);

  ctx.fillStyle = theme.primary;
  ctx.font = '600 28px "Open Sans", sans-serif';
  ctx.fillText(truncateText(ctx, role || 'Software Developer', 900), width / 2, infoY + 52);

  if (institution && institution.trim()) {
    ctx.fillStyle = theme.mutedText;
    ctx.font = '500 23px "Open Sans", sans-serif';
    ctx.fillText(truncateText(ctx, institution.trim(), 900), width / 2, infoY + 94);
  }

  // 6. Professional Conference Footer
  const footerY = height - pad - 80;
  ctx.strokeStyle = '#DCD5F6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad + 50, footerY - 18);
  ctx.lineTo(width - pad - 50, footerY - 18);
  ctx.stroke();

  // Left: Conference Brand
  ctx.fillStyle = theme.primary;
  ctx.font = 'bold 22px "Space Grotesk", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('.NET CONF 2026', pad + 50, footerY + 28);

  // Right: Location
  ctx.fillStyle = theme.mutedText;
  ctx.font = 'bold 20px "Space Grotesk", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('AMRAVATI', width - pad - 50, footerY + 28);

  ctx.restore();

  // Card Outer Border Stroke
  ctx.save();
  drawRoundedRect(ctx, pad, pad, cardW, cardH, radius);
  const borderGrad = ctx.createLinearGradient(pad, pad, width - pad, height - pad);
  borderGrad.addColorStop(0, theme.border);
  borderGrad.addColorStop(0.5, theme.primary);
  borderGrad.addColorStop(1, theme.secondary);
  ctx.lineWidth = 8;
  ctx.strokeStyle = borderGrad;
  ctx.stroke();
  ctx.restore();
}

/* =========================================================================
   3. CONFERENCE VERTICAL LANYARD BADGE (Vertical 1080x1440)
   ========================================================================= */
function renderPassBadge(ctx, width, height, theme, options) {
  const { name, role, institution, attendeeType, mascotImage, zoom = 1, rotation = 0, panX = 0, panY = 0 } = options;
  const padX = 70;
  const padY = 50;
  const cardW = width - padX * 2;
  const cardH = height - padY * 2;
  const radius = 48;

  const slotW = 140;
  const slotH = 22;
  const slotX = width / 2 - slotW / 2;
  const slotY = padY + 30;

  // 1. Card Base Background
  ctx.save();
  drawRoundedRect(ctx, padX, padY, cardW, cardH, radius);
  ctx.shadowColor = 'rgba(81, 43, 212, 0.16)';
  ctx.shadowBlur = 45;
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.restore();

  ctx.save();
  drawRoundedRect(ctx, padX, padY, cardW, cardH, radius);
  ctx.clip();

  const cardBg = ctx.createLinearGradient(padX, padY, width - padX, height - padY);
  cardBg.addColorStop(0, '#FFFFFF');
  cardBg.addColorStop(1, '#F8F6FE');
  ctx.fillStyle = cardBg;
  ctx.fillRect(padX, padY, cardW, cardH);

  // Top Lanyard slot cutout
  ctx.save();
  drawRoundedRect(ctx, slotX, slotY, slotW, slotH, 11);
  ctx.fillStyle = '#EEEAFB';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#DCD5F6';
  ctx.stroke();
  ctx.restore();

  // 2. Top Header Brand Block
  const headerH = 270;
  const headerY = padY + 80;
  const headGrad = ctx.createLinearGradient(padX, headerY, width - padX, headerY + headerH);
  headGrad.addColorStop(0, theme.primary);
  headGrad.addColorStop(0.5, theme.secondary);
  headGrad.addColorStop(1, theme.accent);
  ctx.fillStyle = headGrad;
  ctx.fillRect(padX, headerY, cardW, headerH);

  // Shimmer lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(padX, headerY + headerH);
  ctx.lineTo(padX + 250, headerY);
  ctx.moveTo(padX + 150, headerY + headerH);
  ctx.lineTo(padX + 400, headerY);
  ctx.stroke();

  // Conference Title & Venue (Zero PRPCEM mention)
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 54px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('.NET Conf 2026', width / 2, headerY + 85);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px "Space Grotesk", sans-serif';
  ctx.fillText('AMRAVATI', width / 2, headerY + 135);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = '600 20px "Open Sans", sans-serif';
  ctx.fillText('Central India · Flagship Edition', width / 2, headerY + 175);

  // Ribbon banner: "★ OFFICIAL ATTENDEE BADGE ★"
  const ribW = cardW;
  const ribH = 50;
  const ribY = headerY + headerH - ribH;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(padX, ribY, ribW, ribH);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 22px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`★ OFFICIAL ${attendeeType.toUpperCase()} BADGE ★`, width / 2, ribY + ribH / 2);

  // 3. Center Mascot Box
  const stageSize = 430;
  const stageX = width / 2 - stageSize / 2;
  const stageY = headerY + headerH + 45;
  const stageR = 32;

  ctx.save();
  drawRoundedRect(ctx, stageX, stageY, stageSize, stageSize, stageR);
  ctx.shadowColor = 'rgba(81, 43, 212, 0.18)';
  ctx.shadowBlur = 25;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = theme.primary;
  ctx.stroke();
  ctx.restore();

  // Draw Mascot inside stage clipped with user transforms
  ctx.save();
  drawRoundedRect(ctx, stageX, stageY, stageSize, stageSize, stageR);
  ctx.clip();
  drawMascot(ctx, mascotImage, width / 2, stageY + stageSize / 2, stageSize * 0.92, zoom, panX, panY, rotation);
  ctx.restore();

  // 4. Attendee Details (Centered)
  const infoY = stageY + stageSize + 65;
  ctx.textAlign = 'center';

  ctx.fillStyle = theme.darkText;
  ctx.font = 'bold 52px "Space Grotesk", sans-serif';
  ctx.fillText(truncateText(ctx, name || 'Delegate Name', 850), width / 2, infoY);

  ctx.fillStyle = theme.primary;
  ctx.font = '600 30px "Open Sans", sans-serif';
  ctx.fillText(truncateText(ctx, role || 'Student Developer', 850), width / 2, infoY + 54);

  if (institution && institution.trim()) {
    ctx.fillStyle = theme.mutedText;
    ctx.font = '500 24px "Open Sans", sans-serif';
    ctx.fillText(truncateText(ctx, institution.trim(), 850), width / 2, infoY + 98);
  }

  // 5. Professional Footer Strip
  const footerH = 110;
  const footerY = height - padY - footerH;

  ctx.fillStyle = '#EEEAFB';
  ctx.fillRect(padX, footerY, cardW, footerH);

  ctx.strokeStyle = '#DCD5F6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padX, footerY);
  ctx.lineTo(width - padX, footerY);
  ctx.stroke();

  // Left conference brand
  ctx.fillStyle = theme.primary;
  ctx.font = 'bold 22px "Space Grotesk", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('.NET CONF 2026', padX + 50, footerY + 62);

  // Right location
  ctx.fillStyle = theme.mutedText;
  ctx.font = 'bold 20px "Space Grotesk", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('AMRAVATI', width - padX - 50, footerY + 62);

  ctx.restore();

  // Card Outer Border
  ctx.save();
  drawRoundedRect(ctx, padX, padY, cardW, cardH, radius);
  ctx.lineWidth = 8;
  ctx.strokeStyle = theme.primary;
  ctx.stroke();
  ctx.restore();
}

/* =========================================================================
   4. HEXAGON STICKER BADGE (Light & Professional)
   ========================================================================= */
function renderHexagonBadge(ctx, width, height, theme, options) {
  const { name, role, institution, attendeeType, mascotImage, zoom = 1, rotation = 0, panX = 0, panY = 0 } = options;
  const centerX = width / 2;
  const centerY = height / 2;
  const hexSize = 530;

  // 1. Crisp White Base Hexagon
  ctx.save();
  drawHexagon(ctx, centerX, centerY, hexSize);
  const hexBg = ctx.createRadialGradient(centerX, centerY - 100, 50, centerX, centerY, hexSize);
  hexBg.addColorStop(0, '#FFFFFF');
  hexBg.addColorStop(0.75, '#FAF8FF');
  hexBg.addColorStop(1, '#F3EEFF');
  ctx.fillStyle = hexBg;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.16)';
  ctx.shadowBlur = 45;
  ctx.fill();
  ctx.restore();

  // Hexagon gradient borders
  ctx.save();
  drawHexagon(ctx, centerX, centerY, hexSize);
  const hexBorderGrad = ctx.createLinearGradient(centerX - hexSize, centerY - hexSize, centerX + hexSize, centerY + hexSize);
  hexBorderGrad.addColorStop(0, theme.primary);
  hexBorderGrad.addColorStop(0.5, theme.secondary);
  hexBorderGrad.addColorStop(1, theme.accent);
  ctx.lineWidth = 16;
  ctx.strokeStyle = hexBorderGrad;
  ctx.stroke();
  ctx.restore();

  // Inner guide line
  ctx.save();
  drawHexagon(ctx, centerX, centerY, hexSize - 25);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(81, 43, 212, 0.15)';
  ctx.stroke();
  ctx.restore();

  // 2. Top Header
  ctx.save();
  ctx.fillStyle = theme.darkText;
  ctx.font = 'bold 44px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('.NET CONF 2026', centerX, centerY - 380);

  ctx.fillStyle = theme.primary;
  ctx.font = 'bold 24px "Space Grotesk", sans-serif';
  ctx.fillText('AMRAVATI · I\'M ATTENDING', centerX, centerY - 335);
  ctx.restore();

  // 3. Center Circular Mascot Stage
  const stageRadius = 220;
  const stageCenterY = centerY - 65;

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, stageCenterY, stageRadius + 8, 0, Math.PI * 2);
  ctx.fillStyle = theme.secondary;
  ctx.shadowColor = 'rgba(81, 43, 212, 0.25)';
  ctx.shadowBlur = 20;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(centerX, stageCenterY, stageRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.restore();

  // Draw Mascot inside circular stage clipped with user transforms
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, stageCenterY, stageRadius, 0, Math.PI * 2);
  ctx.clip();
  drawMascot(ctx, mascotImage, centerX, stageCenterY, stageRadius * 1.8, zoom, panX, panY, rotation);
  ctx.restore();

  // 4. Attendee Type Pill
  ctx.save();
  const pillW = 220;
  const pillH = 42;
  const pillX = centerX - pillW / 2;
  const pillY = stageCenterY + stageRadius - 21;
  drawRoundedRect(ctx, pillX, pillY, pillW, pillH, 21);
  ctx.fillStyle = theme.primary;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#FFFFFF';
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 20px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(attendeeType.toUpperCase(), centerX, pillY + pillH / 2);
  ctx.restore();

  // 5. Name & Details (Centered)
  const infoY = centerY + 240;
  ctx.save();
  ctx.textAlign = 'center';

  ctx.fillStyle = theme.darkText;
  ctx.font = 'bold 50px "Space Grotesk", sans-serif';
  ctx.fillText(truncateText(ctx, name || 'Delegate Name', 800), centerX, infoY);

  ctx.fillStyle = theme.primary;
  ctx.font = '600 28px "Open Sans", sans-serif';
  ctx.fillText(truncateText(ctx, role || 'Student Developer', 800), centerX, infoY + 48);

  if (institution && institution.trim()) {
    ctx.fillStyle = theme.mutedText;
    ctx.font = '500 22px "Open Sans", sans-serif';
    ctx.fillText(truncateText(ctx, institution.trim(), 800), centerX, infoY + 90);
  }
  ctx.restore();
}

/* =========================================================================
   UTILITIES
   ========================================================================= */

function truncateText(ctx, text, maxWidth) {
  if (!text) return '';
  if (ctx.measureText(text).width <= maxWidth) return text;
  let truncated = text;
  while (truncated.length > 0 && ctx.measureText(truncated + '...').width > maxWidth) {
    truncated = truncated.slice(0, -1);
  }
  return truncated + '...';
}

function drawCurvedText(ctx, text, centerX, centerY, radius, startAngle, reverse = false) {
  ctx.save();
  ctx.translate(centerX, centerY);
  const totalAngle = (ctx.measureText(text).width / radius) * 1.05;
  let currentAngle = startAngle - totalAngle / 2;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charWidth = ctx.measureText(char).width;
    const charAngle = charWidth / radius;

    ctx.save();
    const angle = currentAngle + charAngle / 2;
    ctx.rotate(angle);
    ctx.translate(0, reverse ? radius : -radius);
    if (reverse) ctx.rotate(Math.PI);
    ctx.fillText(char, 0, 0);
    ctx.restore();

    currentAngle += charAngle;
  }
  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
