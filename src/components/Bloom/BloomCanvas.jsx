import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { buildPlantGraph, updatePlantStage } from './proceduralFlower.js';

export const BloomCanvas = ({
  flowerConfig,
  stage = 0,
  subProgress = 1.0,
  interactive = true,
  cameraMode = 'default',
  onSceneReady,
}) => {
  const mountRef = useRef(null);
  const graphRef = useRef(null);
  const animFrameRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  const [hasWebGlError, setHasWebGlError] = useState(false);

  // Mouse Parallax Track
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!interactive) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 0.45;
      mouseRef.current.targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL Context Availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true, // Needed for video frame captures
      });
    } catch (err) {
      console.warn('WebGL not supported or failed to initialize:', err);
      setHasWebGlError(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020804, 0.045);
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.5, 7.5);
    cameraRef.current = camera;

    // Cinematic Botanical Lighting Setup
    // 1. Soft Ambient Sky/Ground
    const hemiLight = new THREE.HemisphereLight(0x1e3a29, 0x030d06, 0.7);
    scene.add(hemiLight);

    // 2. Main Key Sun Light (Warm White)
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.8);
    keyLight.position.set(4, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // 3. Rim Contour Backlight (Glowing Emerald / Violet)
    const rimLight = new THREE.DirectionalLight(
      new THREE.Color(flowerConfig?.palette?.accent || '#34D399'),
      2.0
    );
    rimLight.position.set(-5, 6, -5);
    scene.add(rimLight);

    // 4. Ground Luminescence Fill
    const fillLight = new THREE.PointLight(
      new THREE.Color(flowerConfig?.palette?.core || '#FBBF24'),
      1.2,
      12
    );
    fillLight.position.set(0, -0.1, 2);
    scene.add(fillLight);

    // Build Procedural Plant Graph
    const graph = buildPlantGraph(flowerConfig);
    graphRef.current = graph;
    scene.add(graph.root);

    if (onSceneReady) {
      onSceneReady({ scene, camera, renderer, graph });
    }

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Clock & Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Mouse Parallax Smoothing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Camera Choreography based on Stage
      let targetCamPos = new THREE.Vector3(0, 2.5, 7.5);
      let targetLookAt = new THREE.Vector3(0, 1.8, 0);

      if (stage <= 3) {
        // Welcome / Register / Seed Dormant: Low angle looking at center seed
        targetCamPos.set(0, 1.2, 5.0);
        targetLookAt.set(0, 0.4, 0);
      } else if (stage === 4 || stage === 5) {
        // Seed sinking / Roots: Close to soil
        targetCamPos.set(0, 0.8, 3.8);
        targetLookAt.set(0, -0.1, 0);
      } else if (stage === 6 || stage === 7) {
        // Shoot & Stem rising: Follow the growth upward
        const tipHeight = (flowerConfig.stemHeight || 4.2) * (stage === 6 ? 0.3 : 0.8);
        targetCamPos.set(0, 1.2 + tipHeight * 0.5, 5.8);
        targetLookAt.set(0, tipHeight * 0.7, 0);
      } else if (stage === 8 || stage === 9) {
        // Leaves & Bud: Medium shot focusing on upper stem
        const headY = flowerConfig.stemHeight || 4.2;
        targetCamPos.set(0.6, headY * 0.85, 4.8);
        targetLookAt.set(0, headY, 0);
      } else if (stage >= 10) {
        // Petals Bloom & Final Reveal: Majestic three-quarter angle with gentle slow orbit
        const headY = flowerConfig.stemHeight || 4.2;
        const orbitRadius = 5.2;
        const orbitSpeed = 0.12;
        const orbitAngle = time * orbitSpeed;

        targetCamPos.set(
          Math.sin(orbitAngle) * orbitRadius,
          headY + 0.4,
          Math.cos(orbitAngle) * orbitRadius
        );
        targetLookAt.set(0, headY, 0);
      }

      // Apply Parallax offset
      targetCamPos.x += mouseRef.current.x;
      targetCamPos.y += mouseRef.current.y;

      // Smooth Camera Interpolation
      camera.position.lerp(targetCamPos, 0.04);

      const currentLookAt = new THREE.Vector3(0, 0, -1)
        .applyQuaternion(camera.quaternion)
        .add(camera.position);
      currentLookAt.lerp(targetLookAt, 0.05);
      camera.lookAt(targetLookAt);

      // Update 3D Plant Growth Graph
      if (graphRef.current) {
        updatePlantStage(graphRef.current, stage, subProgress, time);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer?.dispose();
    };
  }, [flowerConfig]);

  // Update stage instantly when props change without recreating whole scene
  useEffect(() => {
    if (graphRef.current) {
      updatePlantStage(graphRef.current, stage, subProgress, 0);
    }
  }, [stage, subProgress]);

  if (hasWebGlError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-emerald-300">
        <p className="font-mono text-xs">
          Hardware acceleration fallback mode active. Rendering graceful botanical canvas.
        </p>
      </div>
    );
  }

  return <div ref={mountRef} className="bloom-webgl-canvas-container" />;
};

export default BloomCanvas;

