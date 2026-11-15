import * as THREE from 'three';

/**
 * Procedural Deterministic Random Generator (Mulberry32)
 */
export function hashString(str = '') {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function createRng(seed) {
  let s = seed;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Curated Botanical Palette Archetypes
 */
export const FLOWER_ARCHETYPES = [
  {
    name: 'Cosmic Orchid',
    primary: '#7C3AED',
    secondary: '#DDD6FE',
    accent: '#C084FC',
    core: '#38BDF8',
    stem: '#064E3B',
    spores: '#38BDF8',
    emissive: '#6D28D9',
  },
  {
    name: 'Ethereal Lotus',
    primary: '#EC4899',
    secondary: '#FCE7F3',
    accent: '#F472B6',
    core: '#FBBF24',
    stem: '#047857',
    spores: '#FDE68A',
    emissive: '#DB2777',
  },
  {
    name: 'Solar Chrysanthemum',
    primary: '#F59E0B',
    secondary: '#FEF3C7',
    accent: '#FDE047',
    core: '#EF4444',
    stem: '#0F766E',
    spores: '#F59E0B',
    emissive: '#D97706',
  },
  {
    name: 'Bioluminescent Azure',
    primary: '#0284C7',
    secondary: '#E0F2FE',
    accent: '#38BDF8',
    core: '#10B981',
    stem: '#064E3B',
    spores: '#6EE7B7',
    emissive: '#0369A1',
  },
  {
    name: 'Celestial Dahlia',
    primary: '#E11D48',
    secondary: '#FFE4E6',
    accent: '#FB7185',
    core: '#FDE047',
    stem: '#14532D',
    spores: '#FECDD3',
    emissive: '#BE123C',
  },
  {
    name: 'Emerald Aurora',
    primary: '#059669',
    secondary: '#D1FAE5',
    accent: '#34D399',
    core: '#A78BFA',
    stem: '#064E3B',
    spores: '#C4B5FD',
    emissive: '#047857',
  },
];

/**
 * Generate Deterministic Configuration from Name & Email
 */
export function generateFlowerConfig(name = '', email = '') {
  const normalized = `${name.trim().toLowerCase()}::${email.trim().toLowerCase()}`;
  const seed = hashString(normalized);
  const rng = createRng(seed);

  const archetypeIdx = Math.floor(rng() * FLOWER_ARCHETYPES.length);
  const archetype = FLOWER_ARCHETYPES[archetypeIdx];

  const layerOptions = [
    [5, 8, 13],
    [6, 10, 14],
    [5, 9, 15],
    [7, 11, 16],
  ];
  const layerIdx = Math.floor(rng() * layerOptions.length);
  const petalsPerLayer = layerOptions[layerIdx];

  const stemHeight = 3.8 + rng() * 1.2;
  const petalLength = 1.3 + rng() * 0.4;
  const petalWidth = 0.55 + rng() * 0.2;
  const leafCount = 4 + Math.floor(rng() * 3);
  const stemCurvature = (rng() - 0.5) * 0.7;

  return {
    seed,
    name: name.trim() || 'Innovator',
    email: email.trim(),
    archetype: archetype.name,
    palette: archetype,
    petalsPerLayer,
    stemHeight,
    petalLength,
    petalWidth,
    leafCount,
    stemCurvature,
  };
}

/**
 * Create Realistic Curved 3D Petal Geometry
 */
export function createPetalGeometry(length = 1.4, width = 0.65, cup = 0.25) {
  const geom = new THREE.BufferGeometry();
  const uSteps = 16;
  const vSteps = 10;
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= uSteps; i++) {
    const u = i / uSteps;
    for (let j = 0; j <= vSteps; j++) {
      const v = (j / vSteps) * 2 - 1; // -1 to +1

      // Petal profile taper
      const profile = Math.sin(Math.PI * Math.pow(u, 0.85)) * (1 - 0.25 * u);
      const x = v * width * profile;
      const y = u * length;
      // Cup and longitudinal curl
      const z = cup * (1 - v * v) * Math.sin(Math.PI * u) + 0.15 * Math.pow(u, 2.2);

      positions.push(x, y, z);
      uvs.push((v + 1) * 0.5, u);
    }
  }

  for (let i = 0; i < uSteps; i++) {
    for (let j = 0; j < vSteps; j++) {
      const a = i * (vSteps + 1) + j;
      const b = (i + 1) * (vSteps + 1) + j;
      const c = (i + 1) * (vSteps + 1) + (j + 1);
      const d = i * (vSteps + 1) + (j + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

/**
 * Create Realistic Curved 3D Leaf Geometry
 */
export function createLeafGeometry(length = 1.6, width = 0.55) {
  const geom = new THREE.BufferGeometry();
  const uSteps = 14;
  const vSteps = 8;
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= uSteps; i++) {
    const u = i / uSteps;
    for (let j = 0; j <= vSteps; j++) {
      const v = (j / vSteps) * 2 - 1;

      const profile = Math.sin(Math.PI * u) * (1 - 0.4 * u);
      const x = v * width * profile;
      const y = u * length;
      const z = -0.2 * Math.sin(Math.PI * u) * (1 - v * v) - 0.1 * u * u;

      positions.push(x, y, z);
      uvs.push((v + 1) * 0.5, u);
    }
  }

  for (let i = 0; i < uSteps; i++) {
    for (let j = 0; j < vSteps; j++) {
      const a = i * (vSteps + 1) + j;
      const b = (i + 1) * (vSteps + 1) + j;
      const c = (i + 1) * (vSteps + 1) + (j + 1);
      const d = i * (vSteps + 1) + (j + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

/**
 * Build Full Procedural 3D Plant Graph
 */
export function buildPlantGraph(config) {
  const root = new THREE.Group();
  root.name = 'PlantRoot';

  const { palette, stemHeight, stemCurvature, petalsPerLayer, petalLength, petalWidth, leafCount } = config;

  // 1. Soil Pedestal Base
  const soilGeom = new THREE.CylinderGeometry(2.4, 2.7, 0.4, 32);
  const soilMat = new THREE.MeshStandardMaterial({
    color: 0x050f08,
    roughness: 0.9,
    metalness: 0.1,
  });
  const soilMesh = new THREE.Mesh(soilGeom, soilMat);
  soilMesh.position.y = -0.2;
  soilMesh.receiveShadow = true;
  root.add(soilMesh);

  // 1.1 Soil Glowing Moss Rim
  const rimGeom = new THREE.TorusGeometry(2.42, 0.05, 16, 64);
  const rimMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.stem),
    emissive: new THREE.Color(palette.spores),
    emissiveIntensity: 0.4,
    roughness: 0.5,
  });
  const rimMesh = new THREE.Mesh(rimGeom, rimMat);
  rimMesh.rotation.x = Math.PI / 2;
  rimMesh.position.y = 0.0;
  root.add(rimMesh);

  // 2. Dormant / Glowing Seed
  const seedGeom = new THREE.SphereGeometry(0.18, 24, 24);
  seedGeom.scale(1, 1.45, 1);
  const seedMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    emissive: 0xf59e0b,
    emissiveIntensity: 0.7,
    roughness: 0.2,
    metalness: 0.3,
  });
  const seedMesh = new THREE.Mesh(seedGeom, seedMat);
  seedMesh.position.set(0, 0.22, 0);
  seedMesh.name = 'SeedMesh';
  root.add(seedMesh);

  // 3. Underground Roots System
  const rootsGroup = new THREE.Group();
  rootsGroup.name = 'RootsGroup';
  rootsGroup.visible = false;
  root.add(rootsGroup);

  const rootSplines = [];
  const rootMeshes = [];
  const rootCount = 5;

  for (let i = 0; i < rootCount; i++) {
    const angle = (i / rootCount) * Math.PI * 2;
    const spread = 0.8 + (i % 2) * 0.4;
    const depth = -0.6 - (i % 3) * 0.3;

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.cos(angle) * spread * 0.4, depth * 0.4, Math.sin(angle) * spread * 0.4),
      new THREE.Vector3(Math.cos(angle) * spread, depth, Math.sin(angle) * spread),
    ]);
    rootSplines.push(curve);

    const tubeGeom = new THREE.TubeGeometry(curve, 20, 0.035, 8, false);
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x15803d,
      emissiveIntensity: 0.3,
      roughness: 0.8,
    });
    const mesh = new THREE.Mesh(tubeGeom, rootMat);
    mesh.scale.set(0.001, 0.001, 0.001);
    rootsGroup.add(mesh);
    rootMeshes.push(mesh);
  }

  // 4. Stem Curve
  const p0 = new THREE.Vector3(0, 0, 0);
  const p1 = new THREE.Vector3(stemCurvature * 0.5, stemHeight * 0.35, -stemCurvature * 0.2);
  const p2 = new THREE.Vector3(-stemCurvature * 0.3, stemHeight * 0.7, stemCurvature * 0.4);
  const p3 = new THREE.Vector3(0, stemHeight, 0);
  const stemCurve = new THREE.CatmullRomCurve3([p0, p1, p2, p3]);

  // Stem Container
  const stemGroup = new THREE.Group();
  stemGroup.name = 'StemGroup';
  root.add(stemGroup);

  const stemMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.stem),
    roughness: 0.5,
    metalness: 0.1,
    emissive: new THREE.Color(palette.stem).multiplyScalar(0.2),
  });

  const stemGeom = new THREE.TubeGeometry(stemCurve, 64, 0.075, 12, false);
  const stemMesh = new THREE.Mesh(stemGeom, stemMat);
  stemMesh.castShadow = true;
  stemMesh.name = 'StemMesh';
  stemMesh.scale.set(1, 0.001, 1); // Starts at scale 0
  stemGroup.add(stemMesh);

  // 5. Unfurling Leaves Along Stem
  const leavesGroup = new THREE.Group();
  leavesGroup.name = 'LeavesGroup';
  root.add(leavesGroup);

  const leafMeshes = [];
  const leafGeom = createLeafGeometry(1.2, 0.45);
  const leafMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.stem).offsetHSL(0.05, 0.2, 0.1),
    roughness: 0.4,
    side: THREE.DoubleSide,
    emissive: new THREE.Color(palette.stem).multiplyScalar(0.15),
  });

  for (let i = 0; i < leafCount; i++) {
    const t = 0.25 + (i / leafCount) * 0.5; // Leaf placement ratio along stem
    const point = stemCurve.getPoint(t);
    const tangent = stemCurve.getTangent(t);

    const leafAnchor = new THREE.Group();
    leafAnchor.position.copy(point);
    leafAnchor.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);

    const leafRotator = new THREE.Group();
    const angle = (i * 137.5 * Math.PI) / 180; // Golden angle leaf phyllotaxis
    leafRotator.rotation.y = angle;

    const leafMesh = new THREE.Mesh(leafGeom, leafMat);
    leafMesh.rotation.x = Math.PI / 2.5; // Graceful outward droop
    leafMesh.scale.set(0.001, 0.001, 0.001);
    leafRotator.add(leafMesh);
    leafAnchor.add(leafRotator);

    leavesGroup.add(leafAnchor);
    leafMeshes.push({ mesh: leafMesh, anchor: leafAnchor, t });
  }

  // 6. Flower Head Assembly (Attached to Stem Tip P3)
  const flowerHead = new THREE.Group();
  flowerHead.name = 'FlowerHead';
  flowerHead.position.copy(p3);
  flowerHead.scale.set(0.001, 0.001, 0.001);
  root.add(flowerHead);

  // 6.1 Calyx Base
  const calyxGeom = new THREE.SphereGeometry(0.28, 16, 16);
  calyxGeom.scale(1, 0.6, 1);
  const calyxMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.stem),
    roughness: 0.6,
  });
  const calyx = new THREE.Mesh(calyxGeom, calyxMat);
  calyx.position.y = -0.15;
  flowerHead.add(calyx);

  // 6.2 Glowing Center Stamen / Receptacle
  const coreGeom = new THREE.SphereGeometry(0.35, 24, 24);
  const coreMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.core),
    emissive: new THREE.Color(palette.core),
    emissiveIntensity: 0.75,
    roughness: 0.25,
  });
  const coreMesh = new THREE.Mesh(coreGeom, coreMat);
  flowerHead.add(coreMesh);

  // Inner Light
  const flowerLight = new THREE.PointLight(new THREE.Color(palette.core), 1.6, 6);
  flowerLight.position.set(0, 0.3, 0);
  flowerHead.add(flowerLight);

  // Stamen Filaments (Tiny glowing pins around the center)
  const stamenCount = 20;
  const stamenGeom = new THREE.CylinderGeometry(0.012, 0.012, 0.35, 6);
  const antherGeom = new THREE.SphereGeometry(0.035, 8, 8);
  const stamenMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.core),
    emissive: new THREE.Color(palette.core),
    emissiveIntensity: 0.5,
  });

  for (let s = 0; s < stamenCount; s++) {
    const sAngle = (s / stamenCount) * Math.PI * 2;
    const sDist = 0.22 + (s % 3) * 0.04;
    const sGroup = new THREE.Group();
    sGroup.position.set(Math.cos(sAngle) * sDist, 0.05, Math.sin(sAngle) * sDist);
    sGroup.rotation.z = (Math.random() - 0.5) * 0.3;
    sGroup.rotation.x = (Math.random() - 0.5) * 0.3;

    const stalk = new THREE.Mesh(stamenGeom, stamenMat);
    stalk.position.y = 0.17;
    sGroup.add(stalk);

    const anther = new THREE.Mesh(antherGeom, stamenMat);
    anther.position.y = 0.35;
    sGroup.add(anther);

    flowerHead.add(sGroup);
  }

  // 6.3 Layered Petals
  const petalMeshList = [];
  const whorlCount = petalsPerLayer.length;

  for (let w = 0; w < whorlCount; w++) {
    const count = petalsPerLayer[w];
    const isInner = w === 0;
    const layerScale = 0.75 + (w / whorlCount) * 0.45;
    const pGeom = createPetalGeometry(petalLength * layerScale, petalWidth * layerScale, 0.25 - w * 0.03);

    // Gradient material from primary to secondary
    const petalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(w % 2 === 0 ? palette.primary : palette.accent),
      roughness: 0.38,
      metalness: 0.08,
      side: THREE.DoubleSide,
      emissive: new THREE.Color(palette.emissive),
      emissiveIntensity: 0.18,
    });

    for (let p = 0; p < count; p++) {
      const angle = (p / count) * Math.PI * 2 + (w * Math.PI) / count;
      const petalAnchor = new THREE.Group();
      petalAnchor.rotation.y = angle;

      const petalMesh = new THREE.Mesh(pGeom, petalMat);
      petalMesh.castShadow = true;
      petalMesh.position.y = 0.05 + w * 0.03;
      // Initial closed bud rotation
      const closedRot = 0.15 + (whorlCount - w) * 0.05;
      petalMesh.rotation.x = closedRot; // ~0 radians = upright/closed

      petalAnchor.add(petalMesh);
      flowerHead.add(petalAnchor);

      petalMeshList.push({
        mesh: petalMesh,
        whorlIndex: w,
        maxFlaredAngle: 0.75 + (w / whorlCount) * 0.55, // Radian flare outward
        closedAngle: closedRot,
      });
    }
  }

  // 7. Bioluminescent Glowing Stardust Spores (Particle System)
  const particleCount = 380;
  const particleGeom = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleVelocities = [];

  for (let i = 0; i < particleCount; i++) {
    const r = 0.3 + Math.random() * 2.8;
    const theta = Math.random() * Math.PI * 2;
    const y = 0.5 + Math.random() * (stemHeight + 2);

    particlePositions[i * 3] = Math.cos(theta) * r;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = Math.sin(theta) * r;

    particleVelocities.push({
      speedY: 0.005 + Math.random() * 0.012,
      orbitSpeed: 0.002 + Math.random() * 0.006,
      radius: r,
      angle: theta,
      baseY: y,
    });
  }

  particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  // Circular Glow Texture
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.3, palette.spores);
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const particleTex = new THREE.CanvasTexture(canvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.14,
    map: particleTex,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(particleGeom, particleMat);
  particles.name = 'SporesSystem';
  root.add(particles);

  return {
    root,
    soilMesh,
    seedMesh,
    rootsGroup,
    rootMeshes,
    stemCurve,
    stemMesh,
    leavesGroup,
    leafMeshes,
    flowerHead,
    flowerLight,
    petalMeshList,
    particles,
    particlePositions,
    particleVelocities,
    config,
  };
}

/**
 * Update 3D Growth Stage State
 * @param {Object} graph Object returned by buildPlantGraph
 * @param {number} stage 0 to 11 (corresponds to user experience flow)
 * @param {number} progress 0.0 to 1.0 (sub-stage interpolation)
 * @param {number} time Clock time in seconds for idle breath/particles
 */
export function updatePlantStage(graph, stage, progress = 1.0, time = 0) {
  if (!graph) return;

  const {
    seedMesh,
    rootsGroup,
    rootMeshes,
    stemMesh,
    leafMeshes,
    flowerHead,
    flowerLight,
    petalMeshList,
    particles,
    particlePositions,
    particleVelocities,
    stemCurve,
  } = graph;

  // Gentle seed breath when idle
  if (seedMesh) {
    const pulse = 1 + Math.sin(time * 3) * 0.08;
    seedMesh.scale.set(pulse, 1.45 * pulse, pulse);
  }

  // Stage 0 - 3: Welcome & Registration (Bud / Seed Dormant in Centre)
  if (stage <= 3) {
    if (seedMesh) {
      seedMesh.visible = true;
      seedMesh.position.set(0, 0.22, 0);
    }
    if (rootsGroup) rootsGroup.visible = false;
    if (stemMesh) stemMesh.scale.set(1, 0.0001, 1);
    leafMeshes.forEach((l) => l.mesh.scale.set(0.0001, 0.0001, 0.0001));
    if (flowerHead) flowerHead.scale.set(0.0001, 0.0001, 0.0001);
    if (particles) particles.material.opacity = 0;
    return;
  }

  // Stage 4: Seed Entering Soil
  if (stage === 4) {
    const t = progress; // 0 to 1
    if (seedMesh) {
      seedMesh.visible = true;
      seedMesh.position.y = 0.22 - t * 0.42; // sinks to -0.2
      seedMesh.scale.multiplyScalar(Math.max(0.01, 1 - t * 0.5));
    }
    if (rootsGroup) rootsGroup.visible = false;
    if (stemMesh) stemMesh.scale.set(1, 0.0001, 1);
    return;
  }

  // Stage 5: Roots Developing Underground
  if (stage === 5) {
    if (seedMesh) {
      seedMesh.position.y = -0.2;
      seedMesh.scale.set(0.5, 0.7, 0.5);
    }
    if (rootsGroup) rootsGroup.visible = true;
    const rootScale = Math.min(1, Math.max(0.01, progress));
    rootMeshes.forEach((mesh) => mesh.scale.set(rootScale, rootScale, rootScale));
    if (stemMesh) stemMesh.scale.set(1, 0.0001, 1);
    return;
  }

  // Stage 6: Green Shoot Emerges
  if (stage === 6) {
    if (rootsGroup) rootsGroup.visible = true;
    rootMeshes.forEach((mesh) => mesh.scale.set(1, 1, 1));
    const shootHeight = Math.max(0.001, progress * 0.18);
    if (stemMesh) stemMesh.scale.set(1, shootHeight, 1);
    if (flowerHead) flowerHead.scale.set(0.0001, 0.0001, 0.0001);
    return;
  }

  // Stage 7: Stem Grows Gradually
  if (stage === 7) {
    if (rootsGroup) rootsGroup.visible = true;
    const stemProgress = 0.18 + progress * 0.82; // 0.18 to 1.0
    if (stemMesh) stemMesh.scale.set(1, stemProgress, 1);

    // Leaves begin budding
    leafMeshes.forEach((l) => {
      if (l.t <= stemProgress) {
        const lScale = Math.min(0.4, (stemProgress - l.t) * 1.5);
        l.mesh.scale.set(lScale, lScale, lScale);
      }
    });

    if (flowerHead) flowerHead.scale.set(0.0001, 0.0001, 0.0001);
    return;
  }

  // Stage 8: Leaves Unfold
  if (stage === 8) {
    if (stemMesh) stemMesh.scale.set(1, 1, 1);
    leafMeshes.forEach((l) => {
      const targetScale = 0.4 + progress * 0.6; // 0.4 to 1.0
      l.mesh.scale.set(targetScale, targetScale, targetScale);
      l.mesh.rotation.x = Math.PI / 2.5 + Math.sin(time * 2 + l.t * 5) * 0.05;
    });

    // Bud starts appearing
    if (flowerHead) {
      const budScale = Math.max(0.001, progress * 0.35);
      flowerHead.scale.set(budScale, budScale, budScale);
    }
    return;
  }

  // Stage 9: Flower Bud Develops
  if (stage === 9) {
    if (stemMesh) stemMesh.scale.set(1, 1, 1);
    leafMeshes.forEach((l) => l.mesh.scale.set(1, 1, 1));
    if (flowerHead) {
      const budScale = 0.35 + progress * 0.65; // 0.35 to 1.0
      flowerHead.scale.set(budScale, budScale, budScale);
      // Gentle stem breathing
      flowerHead.position.x = Math.sin(time * 1.2) * 0.04;
    }
    return;
  }

  // Stage 10: Petals Open One by One (The Bloom Cascade)
  if (stage === 10) {
    if (stemMesh) stemMesh.scale.set(1, 1, 1);
    leafMeshes.forEach((l) => l.mesh.scale.set(1, 1, 1));
    if (flowerHead) flowerHead.scale.set(1, 1, 1);

    const bloomProgress = progress; // 0 to 1
    petalMeshList.forEach((p) => {
      // Outermost petals open first, inner petals last
      const whorlDelay = p.whorlIndex * 0.22;
      const whorlProg = Math.max(0, Math.min(1, (bloomProgress - whorlDelay) / (1 - whorlDelay)));
      const smoothFlare = THREE.MathUtils.smoothstep(whorlProg, 0, 1);

      p.mesh.rotation.x = p.closedAngle + (p.maxFlaredAngle - p.closedAngle) * smoothFlare;
    });

    if (particles) {
      particles.material.opacity = progress * 0.6;
    }
    return;
  }

  // Stage 11 & 12: Fully Bloomed with Luminescent Particles
  if (stage >= 11) {
    if (stemMesh) stemMesh.scale.set(1, 1, 1);
    leafMeshes.forEach((l) => {
      l.mesh.scale.set(1, 1, 1);
      l.mesh.rotation.x = Math.PI / 2.5 + Math.sin(time * 1.5 + l.t * 4) * 0.04;
    });

    if (flowerHead) {
      flowerHead.scale.set(1, 1, 1);
      // Continuous organic gentle swaying
      flowerHead.position.x = Math.sin(time * 0.8) * 0.06;
      flowerHead.position.z = Math.cos(time * 0.6) * 0.04;
      flowerHead.rotation.y = Math.sin(time * 0.5) * 0.05;
    }

    // Fully flared petals with subtle breathing wave
    petalMeshList.forEach((p, idx) => {
      const breath = Math.sin(time * 2 + idx * 0.3) * 0.035;
      p.mesh.rotation.x = p.maxFlaredAngle + breath;
    });

    // Inner flower light pulsates
    if (flowerLight) {
      flowerLight.intensity = 1.6 + Math.sin(time * 3) * 0.4;
    }

    // Swirling Bioluminescent Particles
    if (particles && particlePositions && particleVelocities) {
      particles.material.opacity = 0.85;

      const pos = particlePositions;
      for (let i = 0; i < particleVelocities.length; i++) {
        const vel = particleVelocities[i];
        vel.angle += vel.orbitSpeed;
        vel.baseY += vel.speedY;

        if (vel.baseY > graph.config.stemHeight + 3.5) {
          vel.baseY = 0.8;
        }

        pos[i * 3] = Math.cos(vel.angle) * vel.radius;
        pos[i * 3 + 1] = vel.baseY + Math.sin(time * 2 + i) * 0.1;
        pos[i * 3 + 2] = Math.sin(vel.angle) * vel.radius;
      }
      particles.geometry.attributes.position.needsUpdate = true;
    }
  }
}

