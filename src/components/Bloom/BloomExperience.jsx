import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, Minimize2, Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { BloomCanvas } from './BloomCanvas.jsx';
import { BloomFallbackCanvas } from './BloomFallbackCanvas.jsx';
import { generateFlowerConfig } from './proceduralFlower.js';
import { bloomAudio } from './bloomAudio.js';
import { BloomWelcome } from './screens/BloomWelcome.jsx';
import { BloomRegister } from './screens/BloomRegister.jsx';
import { BloomPlanting } from './screens/BloomPlanting.jsx';
import { BloomFinalReveal } from './screens/BloomFinalReveal.jsx';
import { BloomCompletion } from './screens/BloomCompletion.jsx';
import './bloomStyles.css';

export const BloomExperience = ({ onExitToConference }) => {
  // Screen Flow: 'welcome' | 'register' | 'planting' | 'reveal' | 'completion'
  const [screen, setScreen] = useState('welcome');

  // Botanical Stage: 0 to 11
  const [stage, setStage] = useState(0);
  const [subProgress, setSubProgress] = useState(1.0);

  // Attendee Data
  const [attendee, setAttendee] = useState(null);
  const [flowerConfig, setFlowerConfig] = useState(() =>
    generateFlowerConfig('Guest Innovator', 'guest@dotnetconf.in')
  );

  // App State & Kiosk Modes
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [useFallbackCanvas, setUseFallbackCanvas] = useState(false);

  // Inactivity Safety Timer
  const inactivityTimerRef = useRef(null);
  const growthAnimRef = useRef(null);

  // Reset all state for the next attendee
  const handleResetKiosk = useCallback(() => {
    if (growthAnimRef.current) cancelAnimationFrame(growthAnimRef.current);
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);

    setAttendee(null);
    setFlowerConfig(generateFlowerConfig('Guest Innovator', 'guest@dotnetconf.in'));
    setStage(0);
    setSubProgress(1.0);
    setIsSubmitting(false);
    setErrorMessage('');
    setScreen('welcome');
  }, []);

  // Track Inactivity for unattended laptops
  const resetInactivityTimer = useCallback(
    (seconds = 90) => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (screen === 'welcome') return;

      inactivityTimerRef.current = setTimeout(() => {
        handleResetKiosk();
      }, seconds * 1000);
    },
    [screen, handleResetKiosk]
  );

  useEffect(() => {
    const handleUserActivity = () => {
      if (screen === 'register' || screen === 'reveal') {
        resetInactivityTimer(120);
      }
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [screen, resetInactivityTimer]);

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  const toggleSound = () => {
    const muted = bloomAudio.toggleMute();
    setIsMuted(muted);
  };

  // Step 1 -> Step 2
  const handleBegin = () => {
    bloomAudio.init();
    setStage(1);
    setScreen('register');
    resetInactivityTimer(90);
  };

  // Step 2 Registration Submit
  const handleRegisterSubmit = async ({ name, email }) => {
    setIsSubmitting(true);
    setErrorMessage('');

    const config = generateFlowerConfig(name, email);
    setFlowerConfig(config);

    const fallbackId = `dnc_${config.seed}_${Date.now().toString(36)}`;
    const newAttendee = {
      id: fallbackId,
      name,
      email,
      seed: config.seed,
      archetype: config.archetype,
      flowerConfig: config,
    };

    try {
      // Attempt backend REST API registration
      const res = await fetch('/api/bloom/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAttendee),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.id) newAttendee.id = data.id;
      }
    } catch (err) {
      console.warn('Backend offline or unreachable, running in autonomous local mode:', err);
    }

    setAttendee(newAttendee);
    setIsSubmitting(false);

    // Transition to Screen 3: Seed in centre
    setStage(3);
    setScreen('planting');
  };

  // Step 3: Trigger Growth Sequence on Seed Tap
  const handleTriggerPlant = () => {
    bloomAudio.playSeedPlunge();

    // Sequence timing table (stage, duration in ms)
    const sequence = [
      { stage: 4, duration: 1200 }, // Sinking into soil
      { stage: 5, duration: 1800, audio: () => bloomAudio.playPetalChime(0) }, // Roots
      { stage: 6, duration: 1500, audio: () => bloomAudio.playPetalChime(1) }, // Shoot
      { stage: 7, duration: 2400, audio: () => bloomAudio.playPetalChime(2) }, // Stem
      { stage: 8, duration: 1800, audio: () => bloomAudio.playPetalChime(3) }, // Leaves
      { stage: 9, duration: 1600, audio: () => bloomAudio.playPetalChime(4) }, // Bud
      { stage: 10, duration: 3200, audio: () => bloomAudio.playPetalChime(5) }, // Bloom Petals
      { stage: 11, duration: 1800, audio: () => bloomAudio.playFullBloomChime() }, // Full bloom
    ];

    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex >= sequence.length) {
        // Growth complete -> Transition to Screen 4 Final Reveal
        setTimeout(() => {
          setStage(11);
          setScreen('reveal');
          resetInactivityTimer(120);
        }, 1200);
        return;
      }

      const currentStep = sequence[stepIndex];
      setStage(currentStep.stage);
      if (currentStep.audio) currentStep.audio();

      const startTime = performance.now();
      const stepDuration = currentStep.duration;

      const animateSubProgress = (now) => {
        const elapsed = now - startTime;
        const p = Math.min(1.0, elapsed / stepDuration);
        setSubProgress(p);

        if (p < 1.0) {
          growthAnimRef.current = requestAnimationFrame(animateSubProgress);
        } else {
          stepIndex++;
          runStep();
        }
      };

      growthAnimRef.current = requestAnimationFrame(animateSubProgress);
    };

    runStep();
  };

  // Replay animation from Final Reveal
  const handleReplay = () => {
    setStage(3);
    setScreen('planting');
    setTimeout(() => {
      handleTriggerPlant();
    }, 400);
  };

  return (
    <div className="bloom-kiosk-root select-none">
      {/* 1. Subtle Radial Glow & Cinematic Vignette */}
      <div className="bloom-vignette" />
      <div className="bloom-glow-radial" />

      {/* 2. Three.js 3D WebGL Canvas or 2D Graceful Fallback */}
      {!useFallbackCanvas ? (
        <BloomCanvas
          flowerConfig={flowerConfig}
          stage={stage}
          subProgress={subProgress}
          interactive={screen !== 'planting'}
        />
      ) : (
        <BloomFallbackCanvas
          flowerConfig={flowerConfig}
          stage={stage}
          subProgress={subProgress}
        />
      )}

      {/* 3. Top Kiosk Control Bar */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          onClick={toggleSound}
          className="p-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-300 hover:text-white hover:bg-emerald-900/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title={isMuted ? 'Unmute Experience Audio' : 'Mute Experience Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-300 hover:text-white hover:bg-emerald-900/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Kiosk Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {onExitToConference && (
          <button
            type="button"
            onClick={onExitToConference}
            className="p-2.5 rounded-full bg-stone-900/60 border border-stone-700/40 text-stone-300 hover:text-white hover:bg-stone-800/80 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            title="Return to Main Conference Site"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 4. Active Screen Component Flow */}
      {screen === 'welcome' && <BloomWelcome onBegin={handleBegin} />}

      {screen === 'register' && (
        <BloomRegister
          onSubmit={handleRegisterSubmit}
          onBack={() => {
            setStage(0);
            setScreen('welcome');
          }}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
        />
      )}

      {screen === 'planting' && (
        <BloomPlanting
          attendee={attendee}
          flowerConfig={flowerConfig}
          currentStage={stage}
          subProgress={subProgress}
          onTriggerPlant={handleTriggerPlant}
        />
      )}

      {screen === 'reveal' && (
        <BloomFinalReveal
          attendee={attendee}
          flowerConfig={flowerConfig}
          onReplay={handleReplay}
          onContinueToCompletion={() => setScreen('completion')}
        />
      )}

      {screen === 'completion' && (
        <BloomCompletion
          attendee={attendee}
          onResetKiosk={handleResetKiosk}
          idleTimeoutSeconds={15}
        />
      )}
    </div>
  );
};

export default BloomExperience;

