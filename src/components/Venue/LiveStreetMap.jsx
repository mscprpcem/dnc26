import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Navigation, 
  Layers, 
  RotateCw, 
  Compass, 
  MapPin, 
  ExternalLink, 
  Radio, 
  Car, 
  Maximize2, 
  Play, 
  Pause,
  Eye
} from 'lucide-react';
import { eventData } from '../../data/event.js';

// Exact PRPCEM Campus Coordinates (Kathora Road, Amravati)
const PRPCEM_COORDS = [20.9878, 77.7574];
const KATHORA_APPROACH_ROUTE = [
  [20.9370, 77.7580], // Central Bus Stand / City approach
  [20.9520, 77.7570], // Kathora Naka Junction
  [20.9700, 77.7568], // Kathora Road Central
  [20.9850, 77.7565], // PRPCEM Gate Turn
  [20.9878, 77.7574], // PRPCEM Main Auditorium & Reception
];

// Map Tile Styles
const TILE_STYLES = {
  streetmap: {
    name: 'OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },
  voyager: {
    name: 'Carto Voyager',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 20,
  },
  satellite: {
    name: 'Satellite Aerial',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye',
    maxZoom: 18,
  },
  dark: {
    name: 'Cyber Dark',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 20,
  },
};

export const LiveStreetMap = ({ 
  isBrutal = false,
  className = '',
  height = '420px'
}) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const routePolylineRef = useRef(null);
  const routeGlowRef = useRef(null);
  const movingMarkerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [activeTileStyle, setActiveTileStyle] = useState('streetmap');
  const [isRadarActive, setIsRadarActive] = useState(true);
  const [isRouteFlowActive, setIsRouteFlowActive] = useState(true);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(16);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('P. R. Pote Patil College of Engineering and Management Amravati')}`;

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent re-initialization if already created
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: PRPCEM_COORDS,
      zoom: 16,
      zoomControl: false,
      scrollWheelZoom: false, // Prevent page scrolling trap
      attributionControl: false, // Clean custom attribution
    });

    mapInstanceRef.current = map;

    // 1. Add Default Tile Layer (OpenStreetMap)
    const initialStyle = TILE_STYLES[activeTileStyle] || TILE_STYLES.streetmap;
    tileLayerRef.current = L.tileLayer(initialStyle.url, {
      attribution: initialStyle.attribution,
      maxZoom: initialStyle.maxZoom,
      subdomains: 'abc',
    }).addTo(map);

    // 2. Custom Animated PRPCEM Campus Beacon Marker
    const beaconIcon = L.divIcon({
      className: 'live-campus-beacon-wrapper',
      html: `
        <div class="relative flex items-center justify-center">
          <!-- Animated Radar Sonar Rings -->
          <div class="absolute w-16 h-16 rounded-full bg-[#512BD4]/20 animate-ping opacity-75"></div>
          <div class="absolute w-10 h-10 rounded-full bg-[#7046C8]/30 animate-pulse"></div>
          
          <!-- Core Venue Pin -->
          <div class="relative z-10 w-9 h-9 rounded-2xl bg-[#512BD4] text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>

          <!-- Pulsing Live Tag -->
          <div class="absolute -top-7 whitespace-nowrap bg-[#14053A] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-md border border-[#A99AE8]/40 flex items-center gap-1 select-none pointer-events-none">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>PRPCEM CAMPUS</span>
          </div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    const marker = L.marker(PRPCEM_COORDS, { icon: beaconIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: Inter, sans-serif; padding: 4px; min-width: 210px;">
        <div style="display: inline-block; background: #EEEAFB; color: #512BD4; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 9999px; margin-bottom: 4px;">
          Official Venue
        </div>
        <h4 style="font-weight: 800; font-size: 13px; color: #14053A; margin: 0 0 4px 0;">
          PRPCEM Campus, Amravati
        </h4>
        <p style="font-size: 11px; color: #555; margin: 0 0 8px 0; line-height: 1.4;">
          Pote Estate, Kathora Road, Amravati &bull; Central Auditorium &amp; AI Research Labs
        </p>
        <a href="${directionsUrl}" target="_blank" rel="noreferrer" style="display: inline-block; background: #512BD4; color: white; font-size: 11px; font-weight: 600; text-decoration: none; padding: 4px 10px; border-radius: 8px;">
          Get Live Directions &rarr;
        </a>
      </div>
    `);

    // 3. Approach Route Polylines (Kathora Road Corridor)
    // Background Glow
    routeGlowRef.current = L.polyline(KATHORA_APPROACH_ROUTE, {
      color: '#A99AE8',
      weight: 8,
      opacity: 0.45,
      lineCap: 'round',
    }).addTo(map);

    // Flowing Animated Dash Line
    routePolylineRef.current = L.polyline(KATHORA_APPROACH_ROUTE, {
      color: '#512BD4',
      weight: 4,
      dashArray: '8, 12',
      opacity: 0.95,
      className: 'live-route-flow',
    }).addTo(map);

    // 4. Moving Transit Vehicle / Live Delegate Flow Particle
    const carIcon = L.divIcon({
      className: 'live-shuttle-marker',
      html: `
        <div class="w-6 h-6 rounded-full bg-white text-[#512BD4] flex items-center justify-center shadow-md border border-[#512BD4]/40 animate-pulse">
          <svg class="w-3.5 h-3.5 text-[#512BD4]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    movingMarkerRef.current = L.marker(KATHORA_APPROACH_ROUTE[0], { icon: carIcon }).addTo(map);

    // Animate moving particle along route
    let progress = 0;
    const animateRoute = () => {
      progress += 0.0025;
      if (progress > 1) progress = 0;

      const totalSegments = KATHORA_APPROACH_ROUTE.length - 1;
      const segmentFloat = progress * totalSegments;
      const segmentIndex = Math.min(Math.floor(segmentFloat), totalSegments - 1);
      const segmentProgress = segmentFloat - segmentIndex;

      const p1 = KATHORA_APPROACH_ROUTE[segmentIndex];
      const p2 = KATHORA_APPROACH_ROUTE[segmentIndex + 1];

      const lat = p1[0] + (p2[0] - p1[0]) * segmentProgress;
      const lng = p1[1] + (p2[1] - p1[1]) * segmentProgress;

      if (movingMarkerRef.current) {
        movingMarkerRef.current.setLatLng([lat, lng]);
      }

      animationFrameRef.current = requestAnimationFrame(animateRoute);
    };

    animationFrameRef.current = requestAnimationFrame(animateRoute);

    // Update zoom state
    map.on('zoomend', () => {
      setCurrentZoom(map.getZoom());
    });

    // Invalidate size on load to ensure seamless rendering
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Handle Tile Style Change
  const switchTileStyle = (styleKey) => {
    setActiveTileStyle(styleKey);
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const newStyle = TILE_STYLES[styleKey] || TILE_STYLES.streetmap;
    tileLayerRef.current = L.tileLayer(newStyle.url, {
      attribution: newStyle.attribution,
      maxZoom: newStyle.maxZoom,
      subdomains: 'abc',
    }).addTo(map);
  };

  // Smooth Fly-to Venue Action
  const handleFlyToVenue = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    map.flyTo(PRPCEM_COORDS, 16, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  };

  // Zoom In / Out Helpers
  const handleZoomIn = () => {
    const map = mapInstanceRef.current;
    if (map) map.zoomIn();
  };

  const handleZoomOut = () => {
    const map = mapInstanceRef.current;
    if (map) map.zoomOut();
  };

  // Smooth Cinematic Tour
  const handleToggleTour = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (isTourPlaying) {
      setIsTourPlaying(false);
      handleFlyToVenue();
      return;
    }

    setIsTourPlaying(true);
    // Stage 1: Amravati City Overview
    map.flyTo([20.9400, 77.7550], 14, { duration: 1.8 });

    setTimeout(() => {
      if (!mapInstanceRef.current) return;
      // Stage 2: Kathora Road Approach
      mapInstanceRef.current.flyTo([20.9700, 77.7568], 15, { duration: 2 });
    }, 2200);

    setTimeout(() => {
      if (!mapInstanceRef.current) return;
      // Stage 3: Direct Campus Center View
      mapInstanceRef.current.flyTo(PRPCEM_COORDS, 17, { duration: 2.2 });
      setIsTourPlaying(false);
    }, 4600);
  };

  // Toggle Route Flow Visibility
  const toggleRouteFlow = () => {
    const nextState = !isRouteFlowActive;
    setIsRouteFlowActive(nextState);
    if (routePolylineRef.current && routeGlowRef.current) {
      if (nextState) {
        routePolylineRef.current.setStyle({ opacity: 0.95 });
        routeGlowRef.current.setStyle({ opacity: 0.45 });
        if (movingMarkerRef.current) movingMarkerRef.current.setOpacity(1);
      } else {
        routePolylineRef.current.setStyle({ opacity: 0 });
        routeGlowRef.current.setStyle({ opacity: 0 });
        if (movingMarkerRef.current) movingMarkerRef.current.setOpacity(0);
      }
    }
  };

  return (
    <div 
      className={`relative w-full overflow-hidden select-none ${
        isBrutal 
          ? 'border-[2px] border-black rounded-2xl shadow-sm' 
          : 'rounded-2xl border-2 border-[#512BD4]/30 shadow-xl'
      } ${className}`}
      style={{ height }}
    >
      {/* 1. Leaflet Live OpenStreetMap Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full z-0 bg-[#E8E6F5]"
        tabIndex={0}
        aria-label="Interactive Live StreetMap of PRPCEM Amravati"
      />

      {/* 2. Live Rotating Radar Scan Cone Overlay (Toggleable) */}
      {isRadarActive && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
          style={{ mixBlendMode: activeTileStyle === 'dark' ? 'screen' : 'multiply' }}
        >
          {/* 360-Degree Animated Radar Cone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none live-radar-beam" />
          
          {/* Subtle Radar Crosshairs & Distance Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#512BD4]/20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#512BD4]/15 pointer-events-none" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#512BD4]/10 pointer-events-none" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#512BD4]/10 pointer-events-none" />
        </div>
      )}

      {/* 3. Top HUD Status Bar (Live Telemetry Badge & Layer Selector) */}
      <div className="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        
        {/* Left: Live Beacon Indicator */}
        <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#512BD4]/25 shadow-sm text-xs font-mono">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-[#14053A] text-[11px] uppercase tracking-wide">
            LIVE STREETMAP
          </span>
          <span className="hidden sm:inline text-stone-400">|</span>
          <span className="hidden sm:inline text-[11px] text-[#512BD4] font-semibold">
            20.9878° N, 77.7574° E
          </span>
        </div>

        {/* Right: Map Style Pills */}
        <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-xl bg-white/95 backdrop-blur-md border border-[#512BD4]/25 shadow-sm">
          {Object.entries(TILE_STYLES).map(([key, style]) => {
            const isActive = activeTileStyle === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => switchTileStyle(key)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#512BD4] text-white shadow-2xs' 
                    : 'text-[#190649]/70 hover:text-[#512BD4] hover:bg-[#EEEAFB]'
                }`}
                title={`Switch to ${style.name}`}
              >
                {style.name.split(' ')[0]}
              </button>
            );
          })}
        </div>

      </div>

      {/* 4. Bottom-Left Live Controls (Radar Toggle, Route Flow, Auto-Tour) */}
      <div className="absolute bottom-3 left-3 z-20 flex flex-wrap items-center gap-1.5 pointer-events-auto">
        {/* Radar Toggle */}
        <button
          type="button"
          onClick={() => setIsRadarActive((prev) => !prev)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold transition-all backdrop-blur-md border shadow-sm cursor-pointer ${
            isRadarActive 
              ? 'bg-[#512BD4] text-white border-[#512BD4]' 
              : 'bg-white/90 text-stone-700 border-stone-200 hover:bg-white'
          }`}
          title="Toggle live radar sweep animation"
        >
          <Radio className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Radar</span>
          <span>{isRadarActive ? 'ON' : 'OFF'}</span>
        </button>

        {/* Route Flow Toggle */}
        <button
          type="button"
          onClick={toggleRouteFlow}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold transition-all backdrop-blur-md border shadow-sm cursor-pointer ${
            isRouteFlowActive 
              ? 'bg-[#512BD4] text-white border-[#512BD4]' 
              : 'bg-white/90 text-stone-700 border-stone-200 hover:bg-white'
          }`}
          title="Toggle live approach route traffic flow"
        >
          <Car className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Route</span>
          <span>{isRouteFlowActive ? 'FLOWING' : 'OFF'}</span>
        </button>

        {/* Cinematic Auto-Tour */}
        <button
          type="button"
          onClick={handleToggleTour}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold bg-white/90 hover:bg-white text-[#512BD4] border border-[#512BD4]/30 shadow-sm backdrop-blur-md transition-all cursor-pointer"
          title="Take an automated fly-through tour of PRPCEM campus"
        >
          {isTourPlaying ? <Pause className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isTourPlaying ? 'Touring...' : 'Tour'}</span>
        </button>
      </div>

      {/* 5. Bottom-Right Navigation Actions (Recenter & Open Directions) */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 pointer-events-auto">
        {/* Zoom Controls */}
        <div className="hidden sm:flex flex-col rounded-xl bg-white/95 backdrop-blur-md border border-[#512BD4]/25 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={handleZoomIn}
            className="w-7 h-7 flex items-center justify-center text-[#14053A] hover:bg-[#EEEAFB] text-xs font-bold border-b border-stone-200 cursor-pointer"
            title="Zoom In"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="w-7 h-7 flex items-center justify-center text-[#14053A] hover:bg-[#EEEAFB] text-xs font-bold cursor-pointer"
            title="Zoom Out"
          >
            &minus;
          </button>
        </div>

        {/* Fly to Venue / Recenter */}
        <button
          type="button"
          onClick={handleFlyToVenue}
          className="w-8 h-8 rounded-xl bg-white/95 text-[#512BD4] hover:bg-[#EEEAFB] border border-[#512BD4]/30 flex items-center justify-center shadow-sm backdrop-blur-md transition-all cursor-pointer"
          title="Recenter camera on PRPCEM Campus"
        >
          <Navigation className="w-4 h-4" />
        </button>

        {/* Open Direct Google Maps */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#512BD4] text-white hover:bg-[#4122AA] text-[11px] font-mono font-bold shadow-md transition-all cursor-pointer"
          title="Open in Google Maps for live turn-by-turn navigation"
        >
          <span>Directions</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
};

export default LiveStreetMap;
