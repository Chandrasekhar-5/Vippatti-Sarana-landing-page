import React, { useState } from 'react';
import { Download, ArrowRight, Shield, AlertTriangle, MapPin, Compass, Navigation, Radio, CheckCircle2 } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../constants';

export const Hero: React.FC = () => {
  const [activeRadarMode, setActiveRadarMode] = useState<'radar' | 'route'>('radar');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-b from-red-600/15 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Project / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-medium tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>Disaster Intelligence & Emergency Response Pilot</span>
            </div>

            {/* Main App Name Display */}
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-2">
                Android Application
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Vippatti Sarana
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 leading-tight">
              Know the Risk. Find Safety. Act in Time.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Vippatti Sarana is a disaster intelligence and emergency response application
              designed to help communities understand risks, identify safer locations, and
              make informed evacuation decisions.
            </p>

            {/* Call to Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  id="hero-download-apk-button"
                  href={APK_DOWNLOAD_URL}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-base shadow-xl shadow-red-950/60 hover:shadow-red-600/30 border border-red-400/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK</span>
                </a>

                <a
                  id="hero-explore-features-button"
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-base border border-zinc-700/60 hover:border-zinc-500 transition-all duration-200"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Status Line */}
              <p
                id="hero-status-line"
                className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2 pt-1"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 inline" />
                <span>Android • APK • Free to Download</span>
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">OSM + OSRM</p>
                <p className="text-xs text-zinc-400">Offline-ready mapping</p>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold text-amber-400 tracking-tight">Multi-Feed</p>
                <p className="text-xs text-zinc-400">USGS • NASA • IMD</p>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold text-red-400 tracking-tight">Idukki Pilot</p>
                <p className="text-xs text-zinc-400">Western Ghats terrain</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Android Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer decorative ambient backlight glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/25 via-amber-600/20 to-transparent rounded-[48px] blur-2xl -z-10" />

              {/* Android Phone Chassis */}
              <div className="relative bg-[#0b0e14] border-[7px] border-zinc-800 rounded-[44px] shadow-2xl shadow-black overflow-hidden ring-1 ring-white/10">
                {/* Speaker ear piece & Camera cutout */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 bg-zinc-900 rounded-b-2xl z-40 flex items-center justify-center gap-3">
                  <div className="w-10 h-1 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-950 border border-zinc-800" />
                </div>

                {/* Android Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono select-none bg-[#0e121a]">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-red-400 animate-pulse" />
                    <span>4G+</span>
                    <div className="w-4 h-2 border border-zinc-400 rounded-sm p-[1px] flex items-center">
                      <div className="w-2.5 h-full bg-emerald-400 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="bg-[#0e131d] text-white p-4 space-y-3 relative select-none">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-red-500" />
                        <span className="font-bold text-xs tracking-wide">Vippatti Sarana</span>
                      </div>
                      <p className="text-[10px] text-zinc-400">Sector: Munnar / Devikulam, Idukki</p>
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span>HIGH RISK</span>
                    </div>
                  </div>

                  {/* Toggle Radar view mode in mockup */}
                  <div className="flex p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveRadarMode('radar')}
                      className={`flex-1 py-1 rounded font-medium transition-colors ${
                        activeRadarMode === 'radar'
                          ? 'bg-zinc-800 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Disaster Radar
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveRadarMode('route')}
                      className={`flex-1 py-1 rounded font-medium transition-colors ${
                        activeRadarMode === 'route'
                          ? 'bg-zinc-800 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Evac Route
                    </button>
                  </div>

                  {/* Simulated Radar / Map Canvas */}
                  <div className="relative h-64 w-full rounded-2xl bg-[#090d15] border border-zinc-800 overflow-hidden flex items-center justify-center">
                    {/* Map terrain grid styling */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

                    {/* Concentric Radar Rings */}
                    <div className="absolute w-52 h-52 rounded-full border border-zinc-800/80" />
                    <div className="absolute w-36 h-36 rounded-full border border-zinc-800/80" />
                    <div className="absolute w-20 h-20 rounded-full border border-red-500/20" />

                    {/* Radar Crosshairs */}
                    <div className="absolute inset-x-0 h-px bg-zinc-800/60" />
                    <div className="absolute inset-y-0 w-px bg-zinc-800/60" />

                    {/* Sweeping Radar Beam (CSS animated) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 origin-bottom-right animate-[spin_4s_linear_infinite] bg-gradient-to-tr from-transparent via-red-500/10 to-red-500/25 rounded-tl-full" />
                    </div>

                    {/* Simulated Hazard Zones */}
                    <div className="absolute top-8 right-8 flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-red-600/30 border border-red-500 flex items-center justify-center animate-pulse">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <span className="text-[9px] font-semibold text-red-300 bg-red-950/80 px-1.5 py-0.5 rounded mt-1 border border-red-900">
                        Landslide Alert
                      </span>
                    </div>

                    {/* User Location */}
                    <div className="absolute bottom-12 left-10 flex flex-col items-center">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/30" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white" />
                      </div>
                      <span className="text-[9px] font-semibold text-blue-300 bg-blue-950/80 px-1 py-0.5 rounded mt-1 border border-blue-800">
                        Your GPS
                      </span>
                    </div>

                    {/* Verified Safe Zone Beacon */}
                    <div className="absolute top-10 left-8 flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-emerald-600/30 border border-emerald-400 flex items-center justify-center">
                        <Shield className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-[9px] font-semibold text-emerald-300 bg-emerald-950/90 px-1.5 py-0.5 rounded mt-1 border border-emerald-800">
                        Safe Haven (1.4 km)
                      </span>
                    </div>

                    {/* Evacuation Route Line SVG overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 256">
                      <path
                        d="M 60 190 Q 110 160 120 110 T 70 50"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeDasharray="6 4"
                        className="animate-[dash_20s_linear_infinite]"
                      />
                    </svg>

                    {/* Compass Indicator */}
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400">
                      <Compass className="w-3.5 h-3.5 text-zinc-300" />
                    </div>

                    {/* Coordinates Overlay */}
                    <div className="absolute bottom-2 left-2 text-[8px] font-mono text-zinc-400 bg-black/60 px-1.5 py-0.5 rounded border border-zinc-800/80">
                      LAT: 10.0889° N • LON: 77.0595° E
                    </div>
                  </div>

                  {/* Active Alert Information Card */}
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-red-500/30 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                        Flash Flood & Debris Risk
                      </span>
                      <span className="text-[10px] text-zinc-400">IMD Alert #294</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-tight">
                      Rainfall 118mm. High slope vulnerability. Evacuate valley sectors to Higher Ground Relief Shelter.
                    </p>
                    <div className="flex items-center justify-between text-[10px] pt-1 text-zinc-400 border-t border-zinc-800">
                      <span>Safe Zone: <strong className="text-emerald-400">1.4 km (NE)</strong></span>
                      <span>Est. Walking: <strong className="text-zinc-200">18 min</strong></span>
                    </div>
                  </div>

                  {/* Emergency Tools Toolbar */}
                  <div className="grid grid-cols-4 gap-2 pt-1 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-red-950/60 border border-red-700/50 text-red-300 font-bold flex flex-col items-center gap-1">
                      <span className="text-xs">SOS</span>
                      <span>Call 112</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex flex-col items-center gap-1">
                      <Navigation className="w-3.5 h-3.5 text-amber-400" />
                      <span>Reroute</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex flex-col items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Shelters</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex flex-col items-center gap-1">
                      <Radio className="w-3.5 h-3.5 text-blue-400" />
                      <span>Updates</span>
                    </div>
                  </div>
                </div>

                {/* Android Bottom Navigation Bar */}
                <div className="py-2.5 bg-[#090c12] flex justify-center items-center">
                  <div className="w-28 h-1 bg-zinc-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
