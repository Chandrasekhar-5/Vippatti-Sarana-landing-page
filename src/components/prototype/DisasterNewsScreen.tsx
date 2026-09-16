import React, { useState } from 'react';
import {
  ShieldAlert,
  RotateCw,
  Megaphone,
  Volume2,
  AlertOctagon,
  Clock,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';

export const DisasterNewsScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1200);
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0d14] text-white text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-[#00E676]">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-xs text-white tracking-tight leading-tight">
              Disaster & Weather Intelligence
            </h3>
            <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
              VIPPATTI SARANA • EMERGENCY OPS
            </p>
          </div>
        </div>

        <button
          onClick={handleSync}
          className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white transition-colors"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#00E676]' : ''}`} />
        </button>
      </div>

      {/* 2. Online GNews Feed Banner */}
      <div className="p-3 rounded-2xl bg-[#111722] border border-zinc-800 space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="font-extrabold text-[10px] text-zinc-200 uppercase tracking-wide">
              ONLINE • LIVE GNEWS FEED
            </span>
          </div>
          <button
            onClick={handleSync}
            className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-[#00E676] font-extrabold text-[9px] hover:bg-emerald-500/20"
          >
            {isSyncing ? 'Syncing...' : 'Sync'}
          </button>
        </div>

        <p className="text-[9px] text-zinc-300 font-mono">
          ONLINE • 5 articles • fetched 11:40 am
        </p>
        <p className="text-[8px] text-zinc-500 leading-tight">
          GNews free plan: articles appear up to 12h after publication • not official alerts
        </p>
      </div>

      {/* 3. Audio Bulletin Service Card */}
      <div className="p-3 rounded-2xl bg-[#111722] border border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Megaphone className="w-4 h-4" />
          </div>
          <div>
            <p className="font-extrabold text-[10px] text-white">Audio Bulletin Service</p>
            <p className="text-[8px] text-zinc-400">
              Low-bandwidth speech playback during blackouts
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className={`px-3 py-1.5 rounded-xl font-bold text-[9px] flex items-center gap-1.5 transition-all ${
            isPlayingAudio
              ? 'bg-[#00E676] text-black shadow-md ring-1 ring-emerald-300'
              : 'bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700'
          }`}
        >
          <Volume2 className="w-3 h-3" />
          <span>{isPlayingAudio ? 'Playing...' : 'Listen'}</span>
        </button>
      </div>

      {/* 4. Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[9px]">
        {['All', 'Severe Alerts', 'Weather Radar', 'Shelter Updates'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-2.5 py-1 rounded-full shrink-0 transition-colors font-medium ${
              activeCategory === category
                ? 'bg-[#00E676] text-black font-extrabold shadow'
                : 'bg-[#141a27] text-zinc-400 border border-zinc-800 hover:text-white'
            }`}
          >
            {category === 'Severe Alerts' && <span className="text-red-500 mr-1">🔴</span>}
            {category}
          </button>
        ))}
      </div>

      {/* 5. Main News Article Card (Idukki Mountain Boulder Incident) */}
      <div className="rounded-2xl bg-[#111722] border border-zinc-800 overflow-hidden space-y-2.5">
        {/* Real Mountain Landslide Visual Graphic */}
        <div className="relative h-28 w-full bg-[#1e2738] overflow-hidden">
          {/* Realistic SVG rendering of the boulder on mountain road */}
          <svg className="w-full h-full object-cover" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
            {/* Mountain backdrop & sky */}
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c3e50" />
                <stop offset="100%" stopColor="#4a6572" />
              </linearGradient>
              <linearGradient id="boulderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5d6d7e" />
                <stop offset="60%" stopColor="#34495e" />
                <stop offset="100%" stopColor="#1f2c39" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#skyGrad)" />
            {/* Distant mountain ridge */}
            <path d="M0,70 L50,40 L120,65 L200,30 L260,55 L300,35 L300,120 L0,120 Z" fill="#2d3748" opacity="0.7" />
            {/* Road surface */}
            <polygon points="0,95 300,85 300,120 0,120" fill="#1a202c" />
            <path d="M0,105 L300,98" stroke="#cbd5e0" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
            {/* The giant boulder perched on the road from user photo */}
            <ellipse cx="145" cy="88" rx="42" ry="24" fill="url(#boulderGrad)" stroke="#1a202c" strokeWidth="2" />
            <path d="M125,75 Q145,70 165,80 T175,95" stroke="#718096" strokeWidth="1.5" fill="none" opacity="0.7" />
            {/* Hazard caution tape / debris */}
            <polygon points="90,100 95,95 102,102 96,108" fill="#f59e0b" />
            <polygon points="190,98 196,93 203,101 197,106" fill="#f59e0b" />
          </svg>

          {/* Badges on top of photo */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-red-600/90 text-white font-black text-[8px] tracking-wide flex items-center gap-1">
              ▲ GNEWS • NOT AN OFFICIAL ALERT
            </span>
          </div>

          <div className="absolute top-2 right-2">
            <span className="px-1.5 py-0.5 rounded bg-black/60 text-zinc-300 font-mono text-[8px]">
              Aug 30
            </span>
          </div>
        </div>

        {/* Article Details */}
        <div className="p-3 pt-0 space-y-2">
          <div className="flex items-center gap-2 text-[8px] font-semibold">
            <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/40 font-bold uppercase">
              SEVERE ALERT
            </span>
            <span className="text-zinc-400">Idukki District • Malayala Manorama</span>
          </div>

          <h4 className="font-extrabold text-xs text-white leading-snug">
            Precariously perched: Giant boulder on Idukki road awaiting action for over a month
          </h4>

          <p className="text-[9px] text-zinc-400 leading-relaxed">
            A month-old boulder, dislodged by heavy monsoon rain, blocks a key Idukki route, causing severe hardship for commuters and tourists travelling to popular high-range sectors...
          </p>
        </div>
      </div>
    </div>
  );
};
