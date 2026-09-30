import React, { useState } from 'react';
import {
  Flame,
  Sun,
  HardDrive,
  Droplets,
  Mountain,
  Zap,
  ChevronRight,
  Shield,
  Flashlight,
  Volume2,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

export const SurvivalManualScreen: React.FC = () => {
  const [offlineCached, setOfflineCached] = useState<boolean>(true);
  const [activeHazard, setActiveHazard] = useState<string>('Flood');
  const [activePhase, setActivePhase] = useState<'BEFORE' | 'DURING' | 'AFTER'>('DURING');
  const [flashlightOn, setFlashlightOn] = useState<boolean>(false);
  const [sirenOn, setSirenOn] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-full bg-[#f4f6f4] text-slate-800 text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. App Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center text-red-600 shadow-xs">
            <Flame className="w-4 h-4 fill-red-600" />
          </div>
          <div>
            <h3 className="font-black text-xs text-slate-900 tracking-tight">
              SURVIVAL MANUAL
            </h3>
            <p className="text-[9px] text-slate-500 font-medium">
              Be informed. Be prepared. Be safe.
            </p>
          </div>
        </div>

        <button
          aria-label="Theme mode"
          className="p-1.5 text-slate-500 hover:text-slate-800 bg-white border border-slate-200 rounded-lg shadow-2xs"
        >
          <Sun className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Offline Manual Cache Card (Matching Screenshot) */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shadow-2xs">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <p className="font-extrabold text-[10px] text-slate-900 tracking-wide uppercase">
              OFFLINE MANUAL CACHE
            </p>
            <p className="text-[8px] text-slate-500">
              All instructions available without network
            </p>
          </div>
        </div>

        {/* Forest / Mint Green Toggle Switch */}
        <button
          onClick={() => setOfflineCached(!offlineCached)}
          className={`w-11 h-6 rounded-full p-0.5 transition-colors relative shadow-inner ${
            offlineCached ? 'bg-[#085437]' : 'bg-slate-300'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
              offlineCached ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* 3. Hazard Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[9px] font-medium">
        <button
          onClick={() => setActiveHazard('Flood')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 font-bold transition-all ${
            activeHazard === 'Flood'
              ? 'bg-[#085437] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          <Droplets className="w-2.5 h-2.5" />
          <span>Flood</span>
        </button>

        <button
          onClick={() => setActiveHazard('Landslide')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 transition-all ${
            activeHazard === 'Landslide'
              ? 'bg-[#085437] text-white font-bold shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          <Mountain className="w-2.5 h-2.5 text-amber-600" />
          <span>Landslide</span>
        </button>

        <button
          onClick={() => setActiveHazard('Earthquake')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 transition-all ${
            activeHazard === 'Earthquake'
              ? 'bg-[#085437] text-white font-bold shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          <Zap className="w-2.5 h-2.5 text-amber-500" />
          <span>Earthquake</span>
        </button>

        <button
          onClick={() => setActiveHazard('Cyclone')}
          className="px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 bg-white text-slate-700 border border-slate-200"
        >
          <span>Cyclone</span>
        </button>
      </div>

      {/* 4. Phase Tabs (BEFORE / DURING / AFTER) */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-slate-200/80 rounded-xl text-[9px] font-extrabold text-center">
        {(['BEFORE', 'DURING', 'AFTER'] as const).map((phase) => (
          <button
            key={phase}
            onClick={() => setActivePhase(phase)}
            className={`py-1.5 rounded-lg transition-all ${
              activePhase === phase
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {phase}
          </button>
        ))}
      </div>

      {/* 5. Critical Actions Card */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
        <div className="flex items-center gap-1.5 text-red-700 font-extrabold text-[10px]">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>CRITICAL ACTIONS: {activePhase} {activeHazard.toUpperCase()}</span>
        </div>

        <div className="space-y-1.5 text-[9px] text-slate-700 leading-snug">
          <div className="flex items-start gap-2 p-1.5 rounded-lg bg-red-50/70 border border-red-100">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1 shrink-0" />
            <span>
              <strong>Never drive or wade through floodwaters:</strong> 15 cm of flowing water can sweep an adult off balance; 30 cm can float passenger vehicles.
            </span>
          </div>

          <div className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
            <CheckCircle2 className="w-3 h-3 text-[#085437] mt-0.5 shrink-0" />
            <span>
              Move quickly to designated relief hall or higher elevation terrain. Do not shelter in closed attics without roof hatch.
            </span>
          </div>

          <div className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
            <CheckCircle2 className="w-3 h-3 text-[#085437] mt-0.5 shrink-0" />
            <span>
              Cut main electrical breaker and shut off LPG cylinder valves before leaving your dwelling.
            </span>
          </div>

          <div className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
            <CheckCircle2 className="w-3 h-3 text-[#085437] mt-0.5 shrink-0" />
            <span>
              Keep waterproof survival pack ready: 3 days drinking water, dry food, battery torch, whistle, first-aid kit, and essential medications.
            </span>
          </div>
        </div>
      </div>

      {/* 6. Emergency Hardware Utilities Card */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
        <span className="text-[9px] uppercase font-extrabold tracking-wider text-slate-500">
          HARDWARE UTILITIES
        </span>

        <div className="grid grid-cols-2 gap-2">
          {/* Flashlight Trigger */}
          <button
            onClick={() => setFlashlightOn(!flashlightOn)}
            className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
              flashlightOn
                ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-300'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Flashlight className={`w-4 h-4 ${flashlightOn ? 'fill-slate-950 animate-pulse' : ''}`} />
            <span className="font-extrabold text-[9px]">
              {flashlightOn ? 'LIGHT ON' : 'FLASHLIGHT'}
            </span>
          </button>

          {/* Emergency Siren Trigger */}
          <button
            onClick={() => setSirenOn(!sirenOn)}
            className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
              sirenOn
                ? 'bg-red-600 text-white border-red-700 shadow-md ring-2 ring-red-400 animate-pulse'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span className="font-extrabold text-[9px]">
              {sirenOn ? 'SIREN SOUNDING' : 'EMERGENCY SIREN'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
