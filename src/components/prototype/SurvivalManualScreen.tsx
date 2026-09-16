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
} from 'lucide-react';

export const SurvivalManualScreen: React.FC = () => {
  const [offlineCached, setOfflineCached] = useState<boolean>(true);
  const [activeHazard, setActiveHazard] = useState<string>('Flood');
  const [activePhase, setActivePhase] = useState<'BEFORE' | 'DURING' | 'AFTER'>('DURING');
  const [flashlightOn, setFlashlightOn] = useState<boolean>(false);
  const [sirenOn, setSirenOn] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-full bg-[#0a0d14] text-white text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center text-red-500">
            <Flame className="w-4 h-4 fill-red-500" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white tracking-tight">
              SURVIVAL MANUAL
            </h3>
            <p className="text-[9px] text-zinc-400">
              Be informed. Be prepared. Be safe.
            </p>
          </div>
        </div>

        <button className="p-1 text-zinc-400 hover:text-white rounded">
          <Sun className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Offline Manual Cache Card */}
      <div className="p-3 rounded-2xl bg-[#111722] border border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
            <HardDrive className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-bold text-[10px] text-white tracking-wide uppercase">
              OFFLINE MANUAL CACHE
            </p>
            <p className="text-[8px] text-zinc-400">
              All instructions available without network
            </p>
          </div>
        </div>

        {/* Mint Green Toggle Switch */}
        <button
          onClick={() => setOfflineCached(!offlineCached)}
          className={`w-10 h-5 rounded-full p-0.5 transition-colors relative ${
            offlineCached ? 'bg-[#00E676]' : 'bg-zinc-700'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-black shadow transform transition-transform ${
              offlineCached ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* 3. Hazard Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[9px] font-medium">
        <button
          onClick={() => setActiveHazard('Flood')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 font-bold transition-colors ${
            activeHazard === 'Flood'
              ? 'bg-[#00E676] text-black shadow-md'
              : 'bg-[#141a27] text-zinc-400 border border-zinc-800'
          }`}
        >
          <Droplets className="w-2.5 h-2.5" />
          <span>Flood</span>
        </button>

        <button
          onClick={() => setActiveHazard('Landslide')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 transition-colors ${
            activeHazard === 'Landslide'
              ? 'bg-[#00E676] text-black font-bold'
              : 'bg-[#141a27] text-zinc-400 border border-zinc-800'
          }`}
        >
          <Mountain className="w-2.5 h-2.5" />
          <span>Landslide</span>
        </button>

        <button
          onClick={() => setActiveHazard('Fire')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 transition-colors ${
            activeHazard === 'Fire'
              ? 'bg-[#00E676] text-black font-bold'
              : 'bg-[#141a27] text-zinc-400 border border-zinc-800'
          }`}
        >
          <Flame className="w-2.5 h-2.5" />
          <span>Fire</span>
        </button>

        <button
          onClick={() => setActiveHazard('Earthquake')}
          className={`px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 transition-colors ${
            activeHazard === 'Earthquake'
              ? 'bg-[#00E676] text-black font-bold'
              : 'bg-[#141a27] text-zinc-400 border border-zinc-800'
          }`}
        >
          <Zap className="w-2.5 h-2.5" />
          <span>Earthquake</span>
        </button>
      </div>

      {/* 4. Timeline Phase Filter: BEFORE | DURING | AFTER */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-[9px] font-bold">
        {(['BEFORE', 'DURING', 'AFTER'] as const).map((phase) => (
          <button
            key={phase}
            onClick={() => setActivePhase(phase)}
            className={`flex-1 py-1 rounded-lg text-center transition-all ${
              activePhase === phase
                ? 'bg-[#00E676] text-black shadow font-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {phase}
          </button>
        ))}
      </div>

      {/* 5. Active Selected Hazard Guide Card */}
      <div className="p-3 rounded-xl bg-[#111722] border border-zinc-800 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-[#00E676] flex items-center justify-center">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-xs text-white">
                {activeHazard} • {activePhase.charAt(0) + activePhase.slice(1).toLowerCase()}
              </p>
              <p className="text-[8px] text-zinc-400">
                Periyar valley & low-lying settlement guidance
              </p>
            </div>
          </div>
          <span className="text-[8px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-[#00E676] border border-emerald-500/30">
            LOW RISK
          </span>
        </div>
      </div>

      {/* 6. Critical Actions Now Section */}
      <div className="space-y-1.5">
        <div>
          <span className="text-[9px] font-extrabold text-red-500 uppercase tracking-wider block">
            ✱ CRITICAL ACTIONS NOW
          </span>
          <p className="text-[9px] text-zinc-400">What to do immediately</p>
        </div>

        {/* Action 1 */}
        <div className="p-2.5 rounded-xl bg-[#141216] border border-red-500/40 flex items-center justify-between hover:border-red-500 cursor-pointer transition-colors">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold text-xs">✱</span>
            <span className="font-bold text-[10px] text-zinc-200">
              Never walk or drive through moving water
            </span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
        </div>

        {/* Action 2 */}
        <div className="p-2.5 rounded-xl bg-[#141216] border border-red-500/40 flex items-center justify-between hover:border-red-500 cursor-pointer transition-colors">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold text-xs">✱</span>
            <span className="font-bold text-[10px] text-zinc-200">
              Move to higher ground immediately
            </span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
        </div>
      </div>

      {/* 7. Instruction Categories */}
      <div className="space-y-1.5">
        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">
          INSTRUCTION CATEGORIES
        </span>
        <div className="p-2.5 rounded-xl bg-[#111722] border border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <div>
              <p className="font-bold text-[10px] text-white">Immediate Safety</p>
              <p className="text-[8px] text-zinc-400">Stay safe right now</p>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
        </div>
      </div>

      {/* 8. Emergency Quick Trigger Bottom Bar */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white space-y-2 shadow-lg shadow-red-950/60">
        <div>
          <span className="text-[9px] font-black uppercase tracking-wider block">
            ✱ EMERGENCY QUICK TRIGGER
          </span>
          <p className="text-[8px] text-red-100">Get help instantly, anytime</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setFlashlightOn(!flashlightOn)}
            className={`py-2 rounded-xl text-[10px] font-extrabold flex items-center justify-center gap-1.5 border transition-all ${
              flashlightOn
                ? 'bg-amber-300 text-black border-amber-400 shadow-md shadow-amber-300/30'
                : 'bg-white/20 hover:bg-white/30 text-white border-white/20'
            }`}
          >
            <Flashlight className="w-3 h-3" />
            <span>{flashlightOn ? 'LIGHT ON' : 'LIGHT'}</span>
          </button>

          <button
            onClick={() => setSirenOn(!sirenOn)}
            className={`py-2 rounded-xl text-[10px] font-extrabold flex items-center justify-center gap-1.5 border transition-all ${
              sirenOn
                ? 'bg-black text-red-400 border-red-500 animate-pulse'
                : 'bg-white/20 hover:bg-white/30 text-white border-white/20'
            }`}
          >
            <Volume2 className="w-3 h-3" />
            <span>{sirenOn ? 'SIREN ACTIVE' : 'SOS SIREN'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
