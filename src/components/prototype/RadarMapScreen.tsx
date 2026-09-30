import React, { useState } from 'react';
import {
  Shield,
  Radio,
  Layers,
  Plus,
  Minus,
  Footprints,
  AlertTriangle,
  CheckCircle,
  Navigation,
  Droplets,
  CloudRain,
  Flame,
  Wind,
  Mountain,
} from 'lucide-react';

export const RadarMapScreen: React.FC = () => {
  const [selectedHazard, setSelectedHazard] = useState<string>('Flood');
  const [destinationSet, setDestinationSet] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  return (
    <div className="flex flex-col h-full bg-[#f4f6f4] text-slate-800 text-[11px] overflow-y-auto select-none font-sans scrollbar-none">
      {/* 1. Top Header: Risk Status & GPS */}
      <div className="p-3 bg-white border-b border-slate-200/90 shadow-xs shrink-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-500/40 flex items-center justify-center text-[#085437] font-black text-sm shrink-0 mt-0.5 shadow-xs">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold tracking-wider text-[#085437] text-[11px]">
                <span>RISK GREEN</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 font-bold">DEVICE GPS</span>
              </div>
              <p className="text-[10px] text-slate-600 line-clamp-2 leading-tight mt-0.5 font-medium">
                No active hazard covers your location. Nearest watched area is Puri Cyclone Landfall Watch — Odisha about 365.2 km away. No evacuation needed.
              </p>
            </div>
          </div>
          <div className="text-red-600 shrink-0 p-1">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Telemetry Filter Chips */}
        <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-0.5 scrollbar-none text-[9px] font-medium">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300/80 shrink-0 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            DATA: CACHED • MOCK ON
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
            Fires
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#085437] border border-emerald-300 shrink-0 font-bold">
            Alerts
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#085437] border border-emerald-300 shrink-0 font-bold">
            My Risk
          </span>
        </div>

        {/* Hazard Selector Pills */}
        <div className="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1 scrollbar-none text-[9px]">
          <button className="px-2 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-300 flex items-center gap-1 shrink-0 font-semibold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Earthquake
          </button>
          <button
            onClick={() => setSelectedHazard('Flood')}
            className={`px-2 py-1 rounded-md flex items-center gap-1 shrink-0 font-bold transition-all shadow-2xs ${
              selectedHazard === 'Flood'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-300'
            }`}
          >
            <Droplets className="w-2.5 h-2.5" />
            Flood
          </button>
          <button
            onClick={() => setSelectedHazard('Heavy Rainfall')}
            className={`px-2 py-1 rounded-md flex items-center gap-1 shrink-0 font-bold transition-all shadow-2xs ${
              selectedHazard === 'Heavy Rainfall'
                ? 'bg-cyan-700 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-300'
            }`}
          >
            <CloudRain className="w-2.5 h-2.5" />
            Heavy Rainfall
          </button>
          <button className="px-2 py-1 rounded-md bg-white text-slate-700 border border-slate-300 flex items-center gap-1 shrink-0 font-semibold">
            <Mountain className="w-2.5 h-2.5 text-amber-700" />
            Landslide
          </button>
          <button className="px-2 py-1 rounded-md bg-purple-50 text-purple-900 border border-purple-300 flex items-center gap-1 shrink-0 font-semibold">
            <Wind className="w-2.5 h-2.5 text-purple-600" />
            Cyclone
          </button>
        </div>
      </div>

      {/* 2. Map Canvas (OSMDroid Simulation matching the app) */}
      <div className="relative h-44 w-full bg-[#e8eee9] overflow-hidden shrink-0 border-b border-slate-200">
        {/* Realistic OpenStreetMap Style Vector Map */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Grid Base */}
          <defs>
            <pattern id="osm-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#0000000a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="#edf3ee" />
          <rect width="100%" height="100%" fill="url(#osm-grid)" />

          {/* Forest & Terrain Shading */}
          <path
            d="M 0,20 Q 80,5 140,35 T 280,20 T 360,60 L 360,0 L 0,0 Z"
            fill="#dcfce7"
            opacity="0.8"
          />
          <path
            d="M 50,120 Q 120,90 200,130 T 360,110 L 360,180 L 0,180 Z"
            fill="#e2e8f0"
            opacity="0.6"
          />

          {/* Rivers & Water (Periyar Catchment style) */}
          <path
            d="M -10,35 Q 70,65 130,45 T 250,75 T 370,55"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="8"
            strokeOpacity="0.75"
          />
          <path
            d="M 130,45 Q 160,95 210,120 T 290,165"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="4"
            strokeOpacity="0.8"
          />

          {/* Road Network (State Highways & Local Links) */}
          <path
            d="M 40,-10 Q 90,80 160,110 T 290,140"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="5"
          />
          <path
            d="M 40,-10 Q 90,80 160,110 T 290,140"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <path
            d="M 120,0 L 150,80 L 220,110 L 280,180"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeOpacity="0.8"
          />

          {/* Active Hazard Polygon (Flood zone in watched sector) */}
          <polygon
            points="180,25 240,38 275,85 215,82 170,48"
            fill="rgba(239, 68, 68, 0.2)"
            stroke="#dc2626"
            strokeWidth="1.8"
            strokeDasharray="4 2"
          />

          {/* User Location Pulse (Safe) */}
          <circle cx="110" cy="95" r="16" fill="rgba(8, 84, 55, 0.2)" className="animate-ping" />
          <circle cx="110" cy="95" r="7" fill="#085437" stroke="#ffffff" strokeWidth="2" />
          <text x="122" y="99" fill="#085437" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            YOU (Safe)
          </text>

          {/* Evacuation Route Line when destination is selected */}
          {destinationSet && (
            <path
              d="M 110,95 Q 150,110 220,120 T 310,135"
              fill="none"
              stroke="#059669"
              strokeWidth="4"
              strokeDasharray="6 3"
              className="animate-pulse"
            />
          )}

          {/* Hazard Marker */}
          <circle cx="225" cy="55" r="5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
          <text x="200" y="44" fill="#b91c1c" fontSize="8" fontWeight="bold">
            Puri Watch (365 km)
          </text>
        </svg>

        {/* Floating Map Controls */}
        <div className="absolute right-2.5 top-2.5 flex flex-col gap-1.5 shadow-md">
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.6))}
            aria-label="Zoom in"
            className="w-7 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-black hover:bg-slate-50 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
            aria-label="Zoom out"
            className="w-7 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-black hover:bg-slate-50 transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            aria-label="Map layers"
            className="w-7 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-black hover:bg-slate-50 transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* OSM Attribution Bar */}
        <div className="absolute bottom-1 left-2 text-[8px] font-mono text-slate-600 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded border border-slate-200">
          India • osmdroid / OpenStreetMap / OSRM
        </div>
      </div>

      {/* 3. Bottom Sheet: "WHAT SHOULD I DO?" (Matching Screenshot) */}
      <div className="p-3 bg-white flex-1 flex flex-col space-y-3">
        {/* Handle */}
        <div className="w-8 h-1 rounded-full bg-slate-300 mx-auto -mt-1" />

        {/* Section Headline */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-slate-500 font-extrabold">
            <span>⬡</span>
            <span>WHAT SHOULD I DO?</span>
          </div>
          <p className="text-[12px] font-black text-[#085437] tracking-tight mt-0.5">
            NO TRAVEL RESTRICTION — STAY ALERT
          </p>
          <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed font-normal">
            No active hazard covers your location. Nearest watched area is Puri Cyclone Landfall Watch — Odisha about 365.2 km away. No evacuation needed. Avoid flooded roads and monitor updates.
          </p>
        </div>

        {/* 4. Safe Zones Section */}
        <div className="space-y-2 pt-1 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-slate-700 tracking-wider">
              SAFE ZONES — TAP TO ROUTE
            </span>
            <Footprints className="w-3.5 h-3.5 text-slate-500" />
          </div>

          {/* Warning Banner */}
          <div className="px-2.5 py-1.5 rounded-lg bg-amber-50 border border-amber-300/80 text-amber-900 text-[9px] font-bold flex items-center gap-1.5 shadow-2xs">
            <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
            <span>NO FEASIBLE SHELTER — all in danger / full</span>
          </div>

          {/* Safe Zone Card 1 */}
          <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-start justify-between gap-1">
              <div>
                <p className="font-extrabold text-[11px] text-slate-900">
                  Dibrugarh University Relief Hall
                </p>
                <p className="text-[9px] text-slate-500">
                  Dibrugarh, Assam — ~8.6 km from flood pocket
                </p>
              </div>
              <span className="text-[8px] font-extrabold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200 shrink-0">
                ▲ Unreachable
              </span>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-700 font-mono">
              <span className="font-semibold">1629.1 km • ~20111 min walk</span>
              <span className="text-[#085437] font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                OPEN
              </span>
            </div>

            {/* Capacity Progress Bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[8px] text-slate-500">
                <span>Occupancy</span>
                <span className="font-bold text-slate-700">36% full • 320/500 spots free</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#085437] rounded-full w-[36%]" />
              </div>
            </div>

            <p className="text-[8px] text-slate-500 border-t border-slate-100 pt-1 leading-tight">
              Water • Food • Power • Medical • Sanitation • Women & children
            </p>

            <button
              onClick={() => setDestinationSet(!destinationSet)}
              className={`w-full py-2 rounded-lg font-black text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 ${
                destinationSet
                  ? 'bg-[#085437] text-white ring-2 ring-emerald-400'
                  : 'bg-[#006847] hover:bg-[#085437] text-white'
              }`}
            >
              <Navigation className="w-3 h-3 fill-white" />
              <span>{destinationSet ? 'Destination Set (Route Locked)' : 'Set as destination'}</span>
            </button>
          </div>

          {/* Safe Zone Card 2 (Idukki Pilot) */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-800">Idukki Bypass Relief Hall</span>
              <span className="text-[8px] text-red-600 font-bold bg-red-50 px-1 py-0.5 rounded">
                ▲ Unreachable
              </span>
            </div>
            <p className="text-[9px] text-slate-500">Kizhakkethala, Idukki, Kerala</p>
            <p className="text-[9px] text-slate-600 font-mono">
              1093.1 km • 25% full (225/300 free)
            </p>
          </div>
        </div>

        {/* 5. Live WX Weather Bar */}
        <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-[9px] font-mono text-slate-700 flex items-center justify-between">
          <span className="font-extrabold text-[#085437]">LIVE WX</span>
          <span>TEMP 32.1°C</span>
          <span>RAIN 0.1 mm/h</span>
          <span>WIND 8 km/h</span>
          <span className="text-cyan-700 font-bold">Cooling</span>
        </div>
      </div>
    </div>
  );
};
