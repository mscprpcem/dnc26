import React, { useEffect, useRef } from 'react';

export const BloomFallbackCanvas = ({ flowerConfig, stage = 0, subProgress = 1.0 }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const palette = flowerConfig?.palette || {
      primary: '#EC4899',
      secondary: '#FCE7F3',
      accent: '#F472B6',
      core: '#FBBF24',
      stem: '#10B981',
      spores: '#FDE68A',
    };

    // Particles for 2D Fallback
    const spores = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1 + Math.random() * 2.5,
      vy: 0.3 + Math.random() * 0.8,
      vx: (Math.random() - 0.5) * 0.4,
      alpha: 0.2 + Math.random() * 0.6,
    }));

    let clock = 0;

    const render = () => {
      animRef.current = requestAnimationFrame(render);
      clock += 0.02;

      // Dark Botanical Backdrop
      ctx.fillStyle = '#040906';
      ctx.fillRect(0, 0, width, height);

      // Radial Ambient Center Glow
      const glow = ctx.createRadialGradient(
        width / 2,
        height * 0.45,
        10,
        width / 2,
        height * 0.45,
        width * 0.55
      );
      glow.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
      glow.addColorStop(0.5, 'rgba(124, 58, 237, 0.05)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const groundY = height * 0.78;
      const maxStemHeight = height * 0.45;

      // 1. Soil Pedestal
      ctx.fillStyle = '#091A10';
      ctx.beginPath();
      ctx.ellipse(centerX, groundY + 20, 220, 35, 0, 0, Math.PI * 2);
      ctx.fill();

      // Stage 0-3: Seed Resting on Soil
      if (stage <= 3) {
        ctx.fillStyle = '#F59E0B';
        ctx.shadowColor = '#FBBF24';
        ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.ellipse(centerX, groundY - 10, 10, 16, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Stage 4: Sinking Seed
      if (stage === 4) {
        const yOffset = subProgress * 30;
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.ellipse(centerX, groundY - 10 + yOffset, 8, 12, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Stage 5+: Underground Roots
      if (stage >= 5) {
        ctx.strokeStyle = '#22C55E';
        ctx.lineWidth = 2.5;
        const rootProg = stage === 5 ? subProgress : 1.0;
        for (let i = -2; i <= 2; i++) {
          ctx.beginPath();
          ctx.moveTo(centerX, groundY);
          ctx.quadraticCurveTo(
            centerX + i * 35 * rootProg,
            groundY + 30 * rootProg,
            centerX + i * 65 * rootProg,
            groundY + 60 * rootProg
          );
          ctx.stroke();
        }
      }

      // Stage 6+: Stem Growing Upward
      if (stage >= 6) {
        let currentStemProg = 0.2;
        if (stage === 6) currentStemProg = 0.2 * subProgress;
        else if (stage === 7) currentStemProg = 0.2 + 0.8 * subProgress;
        else currentStemProg = 1.0;

        const currentStemH = maxStemHeight * currentStemProg;
        const tipY = groundY - currentStemH;

        ctx.strokeStyle = palette.stem;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(centerX, groundY);
        ctx.bezierCurveTo(
          centerX - 25,
          groundY - currentStemH * 0.4,
          centerX + 25,
          groundY - currentStemH * 0.7,
          centerX,
          tipY
        );
        ctx.stroke();

        // Stage 8+: Leaves
        if (stage >= 8) {
          const leafProg = stage === 8 ? subProgress : 1.0;
          ctx.fillStyle = '#10B981';
          // Left leaf
          ctx.beginPath();
          ctx.ellipse(
            centerX - 35 * leafProg,
            groundY - currentStemH * 0.45,
            30 * leafProg,
            12 * leafProg,
            -Math.PI / 4,
            0,
            Math.PI * 2
          );
          ctx.fill();
          // Right leaf
          ctx.beginPath();
          ctx.ellipse(
            centerX + 35 * leafProg,
            groundY - currentStemH * 0.6,
            30 * leafProg,
            12 * leafProg,
            Math.PI / 4,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }

        // Stage 9+: Flower Bud & Blooming Petals
        if (stage >= 9) {
          const bloomProg = stage === 9 ? subProgress * 0.35 : stage === 10 ? 0.35 + subProgress * 0.65 : 1.0;
          const petalCount = 12;
          const petalRadius = 65 * bloomProg;

          ctx.save();
          ctx.translate(centerX, tipY);

          for (let p = 0; p < petalCount; p++) {
            const angle = (p / petalCount) * Math.PI * 2 + clock * 0.1;
            ctx.save();
            ctx.rotate(angle);

            ctx.fillStyle = p % 2 === 0 ? palette.primary : palette.accent;
            ctx.shadowColor = palette.emissive;
            ctx.shadowBlur = 12 * bloomProg;

            ctx.beginPath();
            ctx.ellipse(0, -petalRadius * 0.7, 18 * bloomProg, petalRadius * 0.65, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
          }

          // Glowing Stamen Center
          ctx.fillStyle = palette.core;
          ctx.shadowColor = palette.core;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(0, 0, 18 * Math.min(1, bloomProg + 0.3), 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      }

      // Floating Spores
      ctx.fillStyle = palette.spores;
      ctx.shadowColor = palette.spores;
      ctx.shadowBlur = 8;
      spores.forEach((s) => {
        s.y -= s.vy;
        s.x += s.vx;
        if (s.y < 0) s.y = height;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;

        ctx.globalAlpha = s.alpha * (stage >= 10 ? 1 : 0.2);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [flowerConfig, stage, subProgress]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default BloomFallbackCanvas;

