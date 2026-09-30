import React, { useState } from 'react';
import {
  ShieldAlert,
  RotateCw,
  Megaphone,
  Volume2,
  Clock,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Radio,
} from 'lucide-react';

export const DisasterNewsScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1000);
  };

  const newsItems = [
    {
      id: 1,
      tag: 'RED ALERT',
      tagColor: 'bg-red-50 text-red-700 border-red-200',
      source: 'IMD Bulletin • 25m ago',
      title: 'Extremely heavy rainfall advisory issued for Idukki & Wayanad hill catchments',
      snippet:
        'State Disaster Management Authority advises residents in high-gradient landslide zones to observe ground moisture and stay in proximity to designated relief shelters.',
      category: 'Alerts',
    },
    {
      id: 2,
      tag: 'ROAD CLEARANCE',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      source: 'DEOC Idukki • 1h ago',
      title: 'Munnar-Devikulam Gap Road single-lane traffic restored after minor slope slip',
      snippet:
        'Earthmoving crews cleared debris along NH-85. Motorists are urged to refrain from non-essential night travel through ghat stretches.',
      category: 'Weather',
    },
    {
      id: 3,
      tag: 'RELIEF STATIONS',
      tagColor: 'bg-emerald-50 text-[#085437] border-emerald-200',
      source: 'District Collectorate • 2h ago',
      title: '24 Multi-purpose shelters put on standby with dry rations & backup power',
      snippet:
        'Emergency response teams have provisioned water purification units, satellite handsets, and medical first-aid reserves across Peerumade & Udumbanchola.',
      category: 'Shelters',
    },
    {
      id: 4,
      tag: 'HYDRO METRIC',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
      source: 'KSEB Dam Safety • 4h ago',
      title: 'Idukki Reservoir storage at 2,382.4 ft: Inflow remains within controlled margins',
      snippet:
        'Continuous sensor telemetry reports stable discharge. Spillway gates remain sealed under standard monsoon protocols.',
      category: 'Weather',
    },
  ];

  const filteredNews =
    activeCategory === 'All'
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col h-full bg-[#f4f6f4] text-slate-800 text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. App Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#085437] shadow-xs">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-xs text-slate-900 tracking-tight leading-tight">
              Disaster & Weather Intelligence
            </h3>
            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5 font-mono">
              VIPPATTI SARANA • EMERGENCY OPS
            </p>
          </div>
        </div>

        <button
          onClick={handleSync}
          aria-label="Refresh feed"
          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-black transition-colors shadow-2xs"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#085437]' : ''}`} />
        </button>
      </div>

      {/* 2. Online GNews Feed Banner (Matching Screenshot) */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-extrabold text-[10px] text-slate-800 uppercase tracking-wide">
              ONLINE • LIVE GNEWS FEED
            </span>
          </div>
          <button
            onClick={handleSync}
            className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-300 text-[#085437] font-extrabold text-[9px] hover:bg-emerald-100 transition-colors shadow-2xs"
          >
            {isSyncing ? 'Syncing...' : 'Sync'}
          </button>
        </div>

        <p className="text-[9px] text-slate-600 font-mono">
          ONLINE • 5 articles • fetched 11:40 am
        </p>
        <p className="text-[8px] text-slate-400 leading-tight">
          GNews free plan: articles appear up to 12h after publication • not official alerts
        </p>
      </div>

      {/* 3. Audio Bulletin Service Card (Matching Screenshot) */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shadow-2xs">
            <Megaphone className="w-4 h-4" />
          </div>
          <div>
            <p className="font-extrabold text-[10px] text-slate-900">Audio Bulletin Service</p>
            <p className="text-[8px] text-slate-500">
              Low-bandwidth speech playback during blackouts
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className={`px-3 py-1.5 rounded-xl font-bold text-[9px] flex items-center gap-1.5 transition-all shadow-2xs ${
            isPlayingAudio
              ? 'bg-[#085437] text-white shadow-sm ring-1 ring-emerald-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
          }`}
        >
          <Volume2 className={`w-3 h-3 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
          <span>{isPlayingAudio ? 'Playing...' : 'Listen'}</span>
        </button>
      </div>

      {/* Audio Wave Visualizer when playing */}
      {isPlayingAudio && (
        <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[9px] text-[#085437] font-mono">
          <div className="flex items-center gap-1">
            <Radio className="w-3 h-3 text-[#085437] animate-pulse" />
            <span>Broadcasting: "Idukki weather summary & evacuation notice..."</span>
          </div>
          <span className="font-bold">0:14 / 1:30</span>
        </div>
      )}

      {/* 4. Filter Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[9px]">
        {['All', 'Alerts', 'Weather', 'Shelters'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2.5 py-1 rounded-full font-bold transition-all shrink-0 ${
              activeCategory === cat
                ? 'bg-[#085437] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 5. News Articles List */}
      <div className="space-y-2.5 pb-2">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5 hover:border-slate-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span
                className={`px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase border ${news.tagColor}`}
              >
                {news.tag}
              </span>
              <span className="text-[8px] text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                {news.source}
              </span>
            </div>

            <h4 className="font-extrabold text-[11px] text-slate-900 leading-snug">
              {news.title}
            </h4>

            <p className="text-[9px] text-slate-600 leading-relaxed font-normal">
              {news.snippet}
            </p>

            <div className="pt-1 flex items-center justify-between text-[8px] text-slate-400 border-t border-slate-100">
              <span className="text-slate-500 font-medium">Verified by Disaster Intelligence Engine</span>
              <span className="text-[#085437] font-bold flex items-center gap-0.5">
                Full Bulletin <ExternalLink className="w-2 h-2" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
