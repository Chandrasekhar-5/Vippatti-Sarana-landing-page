import React, { useState } from 'react';
import {
  Shield,
  Radio,
  Layers,
  Plus,
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

  return (
    <div className="flex flex-col h-full bg-[#0a0d14] text-white text-[11px] overflow-y-auto select-none font-sans scrollbar-none">
      {/* 1. Header: Risk Status & GPS */}
      <div className="p-3 bg-[#0d121c] border-b border-zinc-800/80 shrink-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-black text-xs shrink-0 mt-0.5">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-emerald-400 text-[11px]">
                <span>RISK GREEN</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300 font-semibold">DEVICE GPS</span>
              </div>
              <p className="text-[10px] text-zinc-400 line-clamp-2 leading-tight mt-0.5">
                No active hazard covers your location. Nearest watched area is Puri Cyclone Landfall Watch — Odisha about 365.2 km away. No evacuation needed.
              </p>
            </div>
          </div>
          <div className="text-red-500 shrink-0 p-1">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Telemetry Filter Chips */}
        <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-0.5 scrollbar-none text-[9px] font-medium">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            DATA: CACHED • MOCK ON
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 shrink-0">
            Fires
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0 font-semibold">
            Alerts
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0 font-semibold">
            My Risk
          </span>
        </div>

        {/* Hazard Selector Pills */}
        <div className="flex items-center gap-1 mt-2 overflow-x-auto pb-1 scrollbar-none text-[9px]">
          <button className="px-2 py-1 rounded bg-zinc-800/80 text-amber-300 border border-amber-500/30 flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Earthquake
          </button>
          <button
            onClick={() => setSelectedHazard('Flood')}
            className={`px-2 py-1 rounded flex items-center gap-1 shrink-0 font-semibold transition-colors ${
              selectedHazard === 'Flood'
                ? 'bg-blue-600/30 text-blue-300 border border-blue-400'
                : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700'
            }`}
          >
            <Droplets className="w-2.5 h-2.5 text-blue-400" />
            Flood
          </button>
          <button
            onClick={() => setSelectedHazard('Heavy Rainfall')}
            className={`px-2 py-1 rounded flex items-center gap-1 shrink-0 font-semibold transition-colors ${
              selectedHazard === 'Heavy Rainfall'
                ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-400'
                : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700'
            }`}
          >
            <CloudRain className="w-2.5 h-2.5 text-cyan-400" />
            Heavy Rainfall
          </button>
          <button className="px-2 py-1 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700 flex items-center gap-1 shrink-0">
            <Mountain className="w-2.5 h-2.5 text-yellow-600" />
            Landslide
          </button>
          <button className="px-2 py-1 rounded bg-zinc-800/80 text-purple-300 border border-purple-500/30 flex items-center gap-1 shrink-0">
            <Wind className="w-2.5 h-2.5 text-purple-400" />
            Cyclone
          </button>
        </div>
      </div>

      {/* 2. Map Canvas (OSMDroid Simulation) */}
      <div className="relative h-44 w-full bg-[#111822] overflow-hidden shrink-0 border-b border-zinc-800">
        {/* Vector Road and Terrain Map Graphics */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Grid Base */}
          <defs>
            <pattern id="radar-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ffffff08" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="#0e141e" />
          <rect width="100%" height="100%" fill="url(#radar-grid)" />

          {/* Topographic Contours / River */}
          <path
            d="M -10,30 Q 70,60 130,40 T 260,70 T 360,50"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="7"
            strokeOpacity="0.4"
          />
          <path
            d="M 40,-10 Q 90,80 160,110 T 290,140"
            fill="none"
            stroke="#334155"
            strokeWidth="3"
            strokeDasharray="4 2"
          />
          <path
            d="M 120,0 L 150,80 L 220,110 L 280,180"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
          />

          {/* Active Hazard Polygon (Flood zone in Assam/Odisha) */}
          <polygon
            points="180,25 240,40 270,90 210,80 170,50"
            fill="rgba(239, 68, 68, 0.25)"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />

          {/* User Location Pulse (Safe) */}
          <circle cx="110" cy="95" r="16" fill="rgba(0, 230, 118, 0.15)" className="animate-ping" />
          <circle cx="110" cy="95" r="7" fill="#00e676" stroke="#ffffff" strokeWidth="1.5" />
          <text x="122" y="99" fill="#00e676" fontSize="9" fontWeight="bold" fontFamily="monospace">
            YOU (Safe)
          </text>

          {/* Hazard Marker */}
          <circle cx="225" cy="55" r="5" fill="#ef4444" />
          <text x="210" y="44" fill="#fca5a5" fontSize="8" fontWeight="bold">
            Puri Watch
          </text>
        </svg>

        {/* Floating Map Controls */}
        <div className="absolute right-2.5 top-2.5 flex flex-col gap-1.5">
          <button className="w-7 h-7 rounded-md bg-[#131a26]/90 border border-zinc-700/80 flex items-center justify-center text-zinc-300 hover:text-white shadow-md">
            <Layers className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-md bg-[#131a26]/90 border border-zinc-700/80 flex items-center justify-center text-zinc-300 hover:text-white shadow-md">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* OSM Attribution Bar */}
        <div className="absolute bottom-1 left-2 text-[8px] font-mono text-zinc-500 bg-black/60 px-1.5 py-0.5 rounded">
          India • osmdroid / OpenStreetMap / OSRM
        </div>
      </div>

      {/* 3. Bottom Sheet: "WHAT SHOULD I DO?" */}
      <div className="p-3 bg-[#0d121c] flex-1 flex flex-col space-y-3">
        {/* Handle */}
        <div className="w-8 h-1 rounded-full bg-zinc-700 mx-auto -mt-1" />

        {/* Section Headline */}
        <div>
          <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-zinc-400 font-bold">
            <span>⬡</span>
            <span>WHAT SHOULD I DO?</span>
          </div>
          <p className="text-[13px] font-black text-[#00E676] tracking-tight mt-0.5">
            NO TRAVEL RESTRICTION — STAY ALERT
          </p>
          <p className="text-[10px] text-zinc-300 mt-0.5 leading-relaxed">
            No active hazard covers your location. Nearest watched area is Puri Cyclone Landfall Watch — Odisha about 365.2 km away. No evacuation needed. Avoid flooded roads and monitor updates.
          </p>
        </div>

        {/* 4. Safe Zones Section */}
        <div className="space-y-2 pt-1 border-t border-zinc-800/80">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
              SAFE ZONES — TAP TO ROUTE
            </span>
            <Footprints className="w-3.5 h-3.5 text-zinc-400" />
          </div>

          {/* Warning Banner */}
          <div className="px-2.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[9px] font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
            <span>NO FEASIBLE SHELTER — all in danger / full</span>
          </div>

          {/* Safe Zone Card 1 */}
          <div className="p-2.5 rounded-lg bg-[#141a27] border border-zinc-800 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-bold text-[11px] text-white">Dibrugarh University Relief Hall</p>
                <p className="text-[9px] text-zinc-400">Dibrugarh, Assam — ~8.6 km from flood pocket</p>
              </div>
              <span className="text-[8px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                ▲ Unreachable
              </span>
            </div>

            <div className="flex items-center justify-between text-[9px] text-zinc-300 font-mono">
              <span>1629.1 km • ~20111 min walk</span>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded">
                OPEN
              </span>
            </div>

            <div className="flex items-center justify-between text-[8px] text-zinc-400">
              <span>36% full • 320/500 spots free</span>
            </div>

            <p className="text-[8px] text-zinc-400 font-sans border-t border-zinc-800/60 pt-1">
              Water • Food • Power • Medical • Sanitation • Women & children
            </p>

            <button
              onClick={() => setDestinationSet(!destinationSet)}
              className="w-full py-1.5 rounded-md bg-[#00E676] hover:bg-[#00c853] text-black font-extrabold text-[10px] flex items-center justify-center gap-1.5 shadow transition-colors"
            >
              <Navigation className="w-3 h-3 fill-black" />
              <span>{destinationSet ? 'Destination Set (Route Locked)' : 'Set as destination'}</span>
            </button>
          </div>

          {/* Safe Zone Card 2 */}
          <div className="p-2 rounded-lg bg-[#111622] border border-zinc-800/80 text-[10px]">
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-300">Idukki Bypass Relief Hall</span>
              <span className="text-[8px] text-red-400 font-semibold">▲ Unreachable</span>
            </div>
            <p className="text-[9px] text-zinc-500">Kizhakkethala, Idukki, Kerala</p>
            <p className="text-[9px] text-zinc-400 font-mono mt-0.5">
              1093.1 km • 25% full (225/300 free)
            </p>
          </div>
        </div>

        {/* 5. Live WX Weather Bar */}
        <div className="p-2 rounded-lg bg-[#0e131d] border border-zinc-800/80 text-[9px] font-mono text-zinc-300 flex items-center justify-between">
          <span className="font-bold text-emerald-400">LIVE WX</span>
          <span>TEMP 32.1°C</span>
          <span>RAIN 0.1 mm/h</span>
          <span>WIND 8 km/h</span>
          <span className="text-cyan-400">Cooling</span>
        </div>
      </div>
    </div>
  );
};
