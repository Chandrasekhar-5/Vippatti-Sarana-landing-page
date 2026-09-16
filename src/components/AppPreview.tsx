import React, { useState } from 'react';
import {
  Radar,
  ShieldAlert,
  MapPinCheck,
  Route,
  Compass,
  AlertTriangle,
  CheckCircle2,
  Navigation,
  Activity,
  Layers,
  PhoneCall,
  Clock,
  Droplets,
  Wind,
  Mountain,
} from 'lucide-react';

type PreviewTabId = 'radar' | 'risk' | 'safe-zone' | 'evacuation';

interface PreviewTab {
  id: PreviewTabId;
  label: string;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
}

const PREVIEW_TABS: PreviewTab[] = [
  {
    id: 'radar',
    label: 'Disaster Radar',
    tag: 'Live Visualization',
    title: 'Geospatial Disaster Radar',
    description:
      'Real-time visualization of nearby hazards, active weather anomalies, geological fault lines, and proximity radii centered on your live coordinates.',
    highlights: [
      'Multi-tier concentric threat range circles (1km, 3km, 5km)',
      'Dynamic hazard clustering with live severity classification',
      'Instant toggle between terrain, satellite, and hazard overlays',
      'Live direction compass synced with onboard device magnetometer',
    ],
  },
  {
    id: 'risk',
    label: 'Risk Assessment',
    tag: 'Location Intelligence',
    title: 'Localized Risk Assessment',
    description:
      'Aggregated risk indices combining precipitation intensity, slope gradient, historical landslide susceptibility, and seismic events into a clear composite score.',
    highlights: [
      '0–100 composite Hazard Severity Index with actionable thresholds',
      'Real-time sensor telemetry: rainfall rate, slope stability, river gauge',
      'Immediate AI & algorithmic safety recommendations for the immediate hour',
      'Pre-computed vulnerability warnings tailored to highland sectors',
    ],
  },
  {
    id: 'safe-zone',
    label: 'Safe Zone',
    tag: 'Shelter Locator',
    title: 'Verified Safe Zone Detection',
    description:
      'Pinpoint nearby relief shelters, community halls, elevated vantage zones, and designated evacuation gathering points vetted by emergency management.',
    highlights: [
      'Shelter capacity meters and operational intake status',
      'Elevation advantage metrics relative to current location',
      'Verified emergency facilities: water supply, first aid, power backup',
      'One-tap navigation dispatch directly into evacuation guidance',
    ],
  },
  {
    id: 'evacuation',
    label: 'Evacuation Route',
    tag: 'Dynamic Routing',
    title: 'Intelligent Evacuation Routing',
    description:
      'Offline-capable routing powered by OSRM and OSMDroid that navigates you away from active hazard perimeters and landslide-prone mountain passes.',
    highlights: [
      'Hazard-avoidance path calculation avoiding flooded roads & bridges',
      'Elevation differential profiles highlighting steep climbs or valley paths',
      'Alternative primary and secondary emergency corridors',
      'Turn-by-turn guidance functioning without active cellular network',
    ],
  },
];

export const AppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PreviewTabId>('radar');
  const activeData = PREVIEW_TABS.find((t) => t.id === activeTab) || PREVIEW_TABS[0];

  return (
    <section id="preview" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Application Interface Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Stressful Environments
          </h2>
          <p className="text-base text-zinc-400">
            High-contrast dark mode, oversized critical touchpoints, and clear visual cues ensure rapid comprehension during emergencies.
          </p>
          <p className="text-xs text-zinc-400">
            * Stylized product mockups illustrating Android user interface design and telemetry views.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 max-w-2xl mx-auto mb-12">
          {PREVIEW_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`preview-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {tab.id === 'radar' && <Radar className="w-4 h-4" />}
                {tab.id === 'risk' && <ShieldAlert className="w-4 h-4" />}
                {tab.id === 'safe-zone' && <MapPinCheck className="w-4 h-4" />}
                {tab.id === 'evacuation' && <Route className="w-4 h-4" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Realistic Stylized Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Phone Frame */}
              <div className="relative bg-[#07090f] border-[6px] border-zinc-800 rounded-[40px] shadow-2xl shadow-black overflow-hidden ring-1 ring-white/10">
                {/* Top Ear Speaker & Pin */}
                <div className="h-5 bg-zinc-900 flex items-center justify-center gap-2">
                  <div className="w-8 h-1 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-950" />
                </div>

                {/* Status Bar */}
                <div className="px-5 py-1.5 flex items-center justify-between text-[10px] text-zinc-400 font-mono bg-[#0c1018] border-b border-zinc-800/80">
                  <span>10:24 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">GPS Lock</span>
                    <span>94%</span>
                  </div>
                </div>

                {/* Screen Content Based on Active Tab */}
                <div className="p-4 bg-[#0a0e17] text-white min-h-[460px] flex flex-col justify-between select-none">
                  {/* --- TAB 1: RADAR VIEW --- */}
                  {activeTab === 'radar' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                        <div className="flex items-center gap-1.5">
                          <Radar className="w-4 h-4 text-red-500 animate-spin" />
                          <span className="font-bold text-xs tracking-wide">Disaster Radar</span>
                        </div>
                        <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30 font-semibold">
                          Live Scan Active
                        </span>
                      </div>

                      {/* Radar Simulation */}
                      <div className="relative h-60 w-full rounded-xl bg-[#060910] border border-zinc-800 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:14px_14px] opacity-60" />
                        <div className="absolute w-48 h-48 rounded-full border border-zinc-800" />
                        <div className="absolute w-32 h-32 rounded-full border border-zinc-800/80" />
                        <div className="absolute w-16 h-16 rounded-full border border-red-500/30" />
                        <div className="absolute inset-x-0 h-px bg-zinc-800/80" />
                        <div className="absolute inset-y-0 w-px bg-zinc-800/80" />

                        {/* Radar Sweep Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-28 h-28 origin-bottom-right animate-[spin_5s_linear_infinite] bg-gradient-to-tr from-transparent via-red-500/10 to-red-500/30 rounded-tl-full" />
                        </div>

                        {/* Radar Blips */}
                        <div className="absolute top-10 right-12 flex flex-col items-center">
                          <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                          <span className="text-[8px] bg-red-950 text-red-300 px-1 rounded mt-0.5 border border-red-800">
                            Landslide Danger
                          </span>
                        </div>
                        <div className="absolute bottom-12 left-10 flex flex-col items-center">
                          <span className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-400/40" />
                          <span className="text-[8px] bg-blue-950 text-blue-300 px-1 rounded mt-0.5 border border-blue-800">
                            Current User
                          </span>
                        </div>
                        <div className="absolute top-16 left-12 flex flex-col items-center">
                          <span className="w-3 h-3 rounded-full bg-emerald-500" />
                          <span className="text-[8px] bg-emerald-950 text-emerald-300 px-1 rounded mt-0.5 border border-emerald-800">
                            Safe Haven
                          </span>
                        </div>

                        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-zinc-400 bg-black/70 px-1 rounded">
                          Radius: 5.0 KM
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] space-y-1">
                        <div className="flex justify-between font-semibold">
                          <span className="text-zinc-200">2 Hazards Detected</span>
                          <span className="text-red-400">Threat Level: High</span>
                        </div>
                        <p className="text-zinc-400 text-[10px]">
                          Steep terrain saturated in Munnar Ghats. Mudflow probability 74%.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* --- TAB 2: RISK ASSESSMENT VIEW --- */}
                  {activeTab === 'risk' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                        <div className="flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4 text-amber-500" />
                          <span className="font-bold text-xs tracking-wide">Risk Assessment</span>
                        </div>
                        <span className="text-[10px] text-zinc-400">Devikulam Taluk</span>
                      </div>

                      {/* Score Gauge Card */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-500/30 text-center space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                          Composite Vulnerability
                        </span>
                        <div className="text-4xl font-black text-red-400 tracking-tight">
                          78<span className="text-lg text-zinc-400 font-normal"> / 100</span>
                        </div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500 text-white">
                          CRITICAL RISK
                        </span>
                      </div>

                      {/* Parameter Meters */}
                      <div className="space-y-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Droplets className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-zinc-300">Rainfall (24h)</span>
                          </div>
                          <span className="font-mono font-bold text-white">142 mm <span className="text-red-400 text-[9px]">(Extreme)</span></span>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mountain className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-zinc-300">Slope Angle</span>
                          </div>
                          <span className="font-mono font-bold text-white">38° <span className="text-amber-400 text-[9px]">(Unstable)</span></span>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Activity className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-zinc-300">Historical Landslide</span>
                          </div>
                          <span className="font-mono font-bold text-red-400">High Risk Zone</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300">
                        Recommendation: Relocate immediately to assigned higher-ground relief shelter.
                      </div>
                    </div>
                  )}

                  {/* --- TAB 3: SAFE ZONE VIEW --- */}
                  {activeTab === 'safe-zone' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                        <div className="flex items-center gap-1.5">
                          <MapPinCheck className="w-4 h-4 text-emerald-400" />
                          <span className="font-bold text-xs tracking-wide">Nearby Safe Havens</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold">3 Accessible</span>
                      </div>

                      {/* Primary Safe Shelter */}
                      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                                Recommended
                              </span>
                            </div>
                            <h4 className="font-bold text-xs text-white mt-1">St. Joseph Parish Hall</h4>
                            <p className="text-[10px] text-zinc-400">Munnar High Grounds • Elev: +124m</p>
                          </div>
                          <span className="font-mono font-bold text-xs text-emerald-400">1.2 km</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-zinc-300 pt-1 border-t border-emerald-900/50">
                          <span>Capacity: <strong>180 / 350</strong></span>
                          <span className="text-emerald-400 font-medium">Verified Active</span>
                        </div>
                      </div>

                      {/* Secondary Shelters */}
                      <div className="space-y-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-xs text-zinc-200">Government Higher Sec School</p>
                            <p className="text-[10px] text-zinc-400">Distance: 2.1 km • North Ridge</p>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded">Open</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-xs text-zinc-200">Devikulam Community Shelter</p>
                            <p className="text-[10px] text-zinc-400">Distance: 3.4 km • Plateau Base</p>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded">Open</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- TAB 4: EVACUATION ROUTE VIEW --- */}
                  {activeTab === 'evacuation' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                        <div className="flex items-center gap-1.5">
                          <Route className="w-4 h-4 text-amber-500" />
                          <span className="font-bold text-xs tracking-wide">Evacuation Routing</span>
                        </div>
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                          Route Calculated
                        </span>
                      </div>

                      {/* Route Path Mini Map Preview */}
                      <div className="relative h-44 w-full rounded-xl bg-[#060910] border border-zinc-800 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-70" />

                        {/* Blocked road indicator */}
                        <div className="absolute top-12 left-20 flex items-center gap-1 text-[8px] bg-red-950 text-red-300 px-1 py-0.5 rounded border border-red-800">
                          <AlertTriangle className="w-2.5 h-2.5 text-red-400" />
                          Road Blocked (NH-49)
                        </div>

                        {/* SVG Path Route */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 180">
                          {/* Blocked route in grey/red cross */}
                          <line x1="50" y1="130" x2="110" y2="70" stroke="#7f1d1d" strokeWidth="2" strokeDasharray="3 3" />
                          {/* Recommended alternate route */}
                          <path
                            d="M 50 130 C 70 150, 160 160, 200 90 S 220 40, 240 30"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3.5"
                          />
                        </svg>

                        {/* Origin & Destination markers */}
                        <div className="absolute bottom-6 left-6 flex items-center gap-1 text-[8px] bg-blue-900 text-blue-200 px-1 rounded">
                          Start
                        </div>
                        <div className="absolute top-4 right-6 flex items-center gap-1 text-[8px] bg-emerald-900 text-emerald-200 px-1 rounded font-bold">
                          Safe Shelter
                        </div>
                      </div>

                      {/* Turn Navigation Step */}
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-white font-semibold">
                          <span className="flex items-center gap-1.5">
                            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                            Next: Turn right onto Tea Estate Bypass
                          </span>
                          <span className="text-zinc-400 text-[10px]">350m</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-zinc-800">
                          <span>Total Dist: <strong className="text-white">1.8 km</strong></span>
                          <span>Est. Walk: <strong className="text-emerald-400">22 min</strong></span>
                          <span>Hazard Free: <strong className="text-emerald-400">Yes</strong></span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Android Screen Action Bar */}
                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      Offline Cached
                    </span>
                    <span className="font-mono">v1.0-release</span>
                  </div>
                </div>

                {/* Bottom Android Home Indicator */}
                <div className="h-6 bg-zinc-950 flex items-center justify-center">
                  <div className="w-24 h-1 bg-zinc-700 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Explanation & Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
              <span>{activeData.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeData.title}
            </h3>

            <p className="text-base text-zinc-300 leading-relaxed">
              {activeData.description}
            </p>

            {/* Feature Highlights Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Key Interface Capabilities
              </h4>
              <div className="space-y-2.5">
                {activeData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-200 leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
