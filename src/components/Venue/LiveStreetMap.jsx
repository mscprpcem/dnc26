import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, ExternalLink, Plus, Minus, MapPin } from 'lucide-react';

// Exact PRPCEM Campus Coordinates (Kathora Road, Amravati)
const PRPCEM_COORDS = [20.9878, 77.7574];

// Map Tile Styles - 100% Open, Free, No API Key Required
const TILE_STYLES = {
  streetmap: {
    name: 'OpenStreetMap',
    label: 'Street',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
    maxZoom: 19,
    subdomains: 'abc',
  },
  humanitarian: {
    name: 'Humanitarian',
    label: 'Warm',
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> &bull; HOT',
    maxZoom: 19,
    subdomains: 'abc',
  },
  satellite: {
    name: 'Satellite Aerial',
    label: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics',
    maxZoom: 18,
    subdomains: '',
  },
  terrain: {
    name: 'Topographic Terrain',
    label: 'Terrain',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Style &copy; OpenTopoMap',
    maxZoom: 17,
    subdomains: 'abc',
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
  const [activeTileStyle, setActiveTileStyle] = useState('streetmap');

  const directionsUrl = 'https://www.google.com/maps/dir//P.+R.+Pote+Patil+College+of+Engineering+and+Management+Amravati';

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: PRPCEM_COORDS,
      zoom: 16,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    // Add Tile Layer
    const initialStyle = TILE_STYLES[activeTileStyle] || TILE_STYLES.streetmap;
    tileLayerRef.current = L.tileLayer(initialStyle.url, {
      attribution: initialStyle.attribution,
      maxZoom: initialStyle.maxZoom,
      subdomains: initialStyle.subdomains || 'abc',
    }).addTo(map);

    // Custom Clean PRPCEM Campus Pin
    const pinIcon = L.divIcon({
      className: 'venue-marker-pin',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;">
          <div style="position: absolute; width: 36px; height: 36px; border-radius: 50%; background: rgba(81, 43, 212, 0.22); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
          <div style="position: relative; z-index: 10; width: 32px; height: 32px; border-radius: 10px; background: #512BD4; color: white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(81, 43, 212, 0.35); border: 2.5px solid #ffffff; cursor: pointer;">
            <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });

    const marker = L.marker(PRPCEM_COORDS, { icon: pinIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: Inter, sans-serif; padding: 6px 4px; min-width: 220px;">
        <div style="display: inline-block; background: #EEEAFB; color: #512BD4; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 9999px; margin-bottom: 6px;">
          Official Venue
        </div>
        <h4 style="font-weight: 800; font-size: 13px; color: #14053A; margin: 0 0 4px 0; line-height: 1.3;">
          PRPCEM Campus, Amravati
        </h4>
        <p style="font-size: 11px; color: #555; margin: 0 0 10px 0; line-height: 1.4;">
          Pote Estate, Kathora Road, Amravati
        </p>
        <a href="${directionsUrl}" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 4px; background: #512BD4; color: #ffffff; font-size: 11px; font-weight: 600; text-decoration: none; padding: 6px 12px; border-radius: 8px;">
          <span>Get Directions</span> &rarr;
        </a>
      </div>
    `);

    // Invalidate size on load to guarantee smooth rendering
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 150);

    return () => {
      clearTimeout(timer);
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
      subdomains: newStyle.subdomains || 'abc',
    }).addTo(map);
  };

  const handleFlyToVenue = () => {
    const map = mapInstanceRef.current;
    if (!map) return;
    map.flyTo(PRPCEM_COORDS, 16, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomOut();
  };

  return (
    <div 
      className={`relative w-full overflow-hidden select-none ${
        isBrutal 
          ? 'border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]' 
          : 'rounded-2xl border-2 border-[#512BD4]/30 shadow-xl'
      } ${className}`}
      style={{ height }}
    >
      {/* 1. Leaflet Map Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full z-0 bg-[#E8E6F5]"
        tabIndex={0}
        aria-label="Interactive Map of PRPCEM Amravati"
      />

      {/* 2. Top HUD Bar (Location label and Basemap selector) */}
      <div className="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        
        {/* Left: Venue Location Chip */}
        <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#512BD4]/20 shadow-sm text-xs font-mono">
          <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
          <span className="font-bold text-[#14053A] text-[11px] uppercase tracking-wide">
            PRPCEM CAMPUS
          </span>
          <span className="hidden sm:inline text-stone-300">|</span>
          <span className="hidden sm:inline text-[11px] text-[#512BD4] font-semibold">
            Amravati
          </span>
        </div>

        {/* Right: Map Style Pills */}
        <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-xl bg-white/95 backdrop-blur-md border border-[#512BD4]/20 shadow-sm">
          {Object.entries(TILE_STYLES).map(([key, style]) => {
            const isActive = activeTileStyle === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => switchTileStyle(key)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#512BD4] text-white shadow-xs' 
                    : 'text-[#190649]/70 hover:text-[#512BD4] hover:bg-[#EEEAFB]'
                }`}
                title={`Switch to ${style.name}`}
              >
                {style.label || style.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom Controls (Zoom In/Out, Recenter & Directions) */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 pointer-events-auto">
        {/* Zoom Controls */}
        <div className="flex flex-col rounded-xl bg-white/95 backdrop-blur-md border border-[#512BD4]/20 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={handleZoomIn}
            className="w-8 h-8 flex items-center justify-center text-[#14053A] hover:bg-[#EEEAFB] border-b border-stone-200 cursor-pointer transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="w-8 h-8 flex items-center justify-center text-[#14053A] hover:bg-[#EEEAFB] cursor-pointer transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Recenter Button */}
        <button
          type="button"
          onClick={handleFlyToVenue}
          className="w-8 h-8 rounded-xl bg-white/95 text-[#512BD4] hover:bg-[#EEEAFB] border border-[#512BD4]/20 flex items-center justify-center shadow-sm backdrop-blur-md transition-colors cursor-pointer"
          title="Recenter map on PRPCEM Campus"
          aria-label="Recenter map"
        >
          <Navigation className="w-4 h-4" />
        </button>

        {/* Directions Link */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#512BD4] hover:bg-[#4122AA] text-white text-[11px] font-mono font-bold shadow-md transition-colors cursor-pointer"
          title="Open in Google Maps for turn-by-turn directions"
        >
          <span>Directions</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default LiveStreetMap;
