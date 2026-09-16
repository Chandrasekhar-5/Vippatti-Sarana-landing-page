import React, { useState } from 'react';
import {
  Shield,
  Sun,
  Settings,
  Star,
  Users,
  AlertCircle,
  PhoneCall,
  CheckCircle2,
  Flame,
  Activity,
  Edit2,
  Check,
} from 'lucide-react';

export const ProfileEmergencyNetScreen: React.FC = () => {
  const [safeStatus, setSafeStatus] = useState<'safe' | 'assistance'>('safe');
  const [sosActive, setSosActive] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-full bg-[#0a0d14] text-white text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. App Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center text-red-500">
            <Shield className="w-4 h-4 fill-red-500" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block">
              VIPPATTI SARANA
            </span>
            <h3 className="font-extrabold text-sm text-white tracking-tight -mt-0.5">
              Profile & Emergency Net
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-400">
          <button className="p-1 hover:text-white rounded">
            <Sun className="w-4 h-4" />
          </button>
          <button className="p-1 hover:text-white rounded">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Distress Signal Center Card */}
      <div className="relative p-3.5 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 border border-red-400/40 shadow-xl shadow-red-950/60 space-y-2.5 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-red-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 text-emerald-300 text-[9px] font-bold border border-emerald-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE RELAY ACTIVE
          </span>
        </div>

        <div>
          <h4 className="font-black text-sm text-white tracking-tight">Distress Signal Center</h4>
          <p className="text-[10px] text-red-100/90 leading-tight mt-0.5">
            Dispatches real-time coordinates, battery level & critical medical tags.
          </p>
        </div>

        <div className="space-y-1.5 pt-1">
          <button
            onClick={() => setSosActive(!sosActive)}
            className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-zinc-100 text-red-700 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-black/30 transition-all active:scale-95"
          >
            <Star className="w-3.5 h-3.5 fill-red-600 text-red-600 animate-spin" />
            <span>{sosActive ? 'BEACON ACTIVE • TRANSMITTING' : 'BROADCAST SOS WITH LIVE GPS'}</span>
          </button>

          <button className="w-full py-1.5 px-3 rounded-xl bg-black/30 hover:bg-black/40 text-white font-semibold text-[10px] flex items-center justify-center gap-1.5 border border-white/10 transition-colors">
            <span>👤</span>
            <span>REPORT MY SITUATION</span>
          </button>
        </div>
      </div>

      {/* 3. User Profile Card */}
      <div className="p-3.5 rounded-2xl bg-[#111722] border border-zinc-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-emerald-500/80 flex items-center justify-center font-bold text-white text-xs">
                AV
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#111722]" />
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-xs text-white">Aditya Vardhan</span>
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-bold">
                  ✓
                </span>
              </div>
              <p className="text-[9px] font-mono text-zinc-400 mt-0.5">ID: SARANA-AP-89241</p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-950/60 border border-red-700/50 text-red-300 text-[9px] font-mono font-bold">
            <span>O+ POSITIVE</span>
            <Edit2 className="w-2.5 h-2.5 text-zinc-400 ml-0.5" />
          </div>
        </div>

        {/* Safe / Need Assistance Toggle Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => setSafeStatus('safe')}
            className={`py-2 rounded-xl text-[10px] font-extrabold flex items-center justify-center gap-1 transition-all ${
              safeStatus === 'safe'
                ? 'bg-[#00E676] text-black shadow-md shadow-emerald-950/50 ring-1 ring-emerald-300'
                : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
            }`}
          >
            <Check className="w-3 h-3 stroke-[3]" />
            <span>I AM SAFE</span>
          </button>

          <button
            onClick={() => setSafeStatus('assistance')}
            className={`py-2 rounded-xl text-[10px] font-extrabold flex items-center justify-center gap-1 transition-all ${
              safeStatus === 'assistance'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50 ring-1 ring-red-400'
                : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
            }`}
          >
            <AlertCircle className="w-3 h-3" />
            <span>NEED ASSISTANCE</span>
          </button>
        </div>
      </div>

      {/* 4. Family Dependents & Medical Attention Tag Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Dependents Box */}
        <div className="p-3 rounded-xl bg-[#111722] border border-zinc-800/90 space-y-1">
          <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider block">
            Family Dependents
          </span>
          <div className="flex items-center gap-1 text-[11px] font-bold text-white">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>3 Dependents</span>
          </div>
          <p className="text-[9px] text-zinc-400 leading-tight">
            1 Elder, 1 Child (4yo), Spouse
          </p>
        </div>

        {/* Medical Box */}
        <div className="p-3 rounded-xl bg-[#111722] border border-zinc-800/90 space-y-1">
          <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider block">
            Medical Attention Tag
          </span>
          <div className="flex items-center gap-1 text-[11px] font-bold text-red-300">
            <Activity className="w-3.5 h-3.5 text-red-400" />
            <span>Asthma / Inhaler</span>
          </div>
          <p className="text-[9px] text-zinc-400 leading-tight">
            Requires Mobility Support
          </p>
        </div>
      </div>

      {/* 5. Disaster Dispatch (Toll-Free) */}
      <div className="p-3 rounded-xl bg-[#111722] border border-zinc-800 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
            DISASTER DISPATCH (TOLL-FREE)
          </span>
          <span className="text-[9px] font-bold text-amber-400">Priority Lines</span>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center space-y-0.5">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
              <Shield className="w-3 h-3" />
            </div>
            <p className="font-black text-[10px] text-white">NDRF 112</p>
            <p className="text-[8px] text-zinc-400">Disaster Force</p>
          </div>

          <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center space-y-0.5">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Activity className="w-3 h-3" />
            </div>
            <p className="font-black text-[10px] text-white">Ambulance</p>
            <p className="text-[8px] text-zinc-400">Dial 108</p>
          </div>

          <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center space-y-0.5">
            <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
              <Flame className="w-3 h-3" />
            </div>
            <p className="font-black text-[10px] text-white">Fire 101</p>
            <p className="text-[8px] text-zinc-400">Rescue Squad</p>
          </div>
        </div>
      </div>
    </div>
  );
};
