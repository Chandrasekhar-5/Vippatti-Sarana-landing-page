import React, { useState } from 'react';
import {
  Download,
  ArrowRight,
  Shield,
  Compass,
  Newspaper,
  BookOpen,
  User,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../constants';
import { AndroidDevice, PrototypeTab } from './prototype/AndroidDevice';

export const Hero: React.FC = () => {
  const [heroTab, setHeroTab] = useState<PrototypeTab>('radar');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07090e]">
      {/* Ambient background glows matching product forest green & emergency accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-b from-[#085437]/20 via-[#00E676]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle tactical grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Project / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00E676] text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
              </span>
              <span>Disaster Intelligence & Decision-Support Pilot</span>
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
              Vippatti Sarana is a disaster intelligence and emergency decision-support Android application that helps people understand hazards around them, evaluate safer locations, plan evacuation routes, and access emergency preparedness tools.
            </p>

            {/* Call to Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  id="hero-download-apk-button"
                  href={APK_DOWNLOAD_URL}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-xl shadow-red-950/60 hover:shadow-red-600/30 border border-red-400/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK</span>
                </a>

                <a
                  id="hero-explore-features-button"
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0f1420] hover:bg-[#141b2c] text-zinc-200 hover:text-white font-semibold text-base border border-zinc-800 hover:border-zinc-600 transition-all duration-200"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4 text-[#00E676] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Status Line */}
              <p
                id="hero-status-line"
                className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2 pt-1"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00E676] inline" />
                <span>Android • APK • Free to Download</span>
              </p>
            </div>

            {/* Quick Metrics Bar in Forest Green & Crimson */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-white tracking-tight">OSM + OSRM</p>
                <p className="text-xs text-zinc-400">Offline-ready mapping</p>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-[#00E676] tracking-tight">GNews Feed</p>
                <p className="text-xs text-zinc-400">Audio Speech Bulletins</p>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-red-400 tracking-tight">SOS Relay</p>
                <p className="text-xs text-zinc-400">Live GPS & Battery Mesh</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Android Device Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <AndroidDevice currentTab={heroTab} onTabChange={setHeroTab} />

            {/* Quick Screen Pill Selectors under Phone Mockup */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4 p-1.5 rounded-2xl bg-[#0f1420] border border-zinc-800 text-[11px] font-bold shadow-md">
              {(
                [
                  { id: 'radar', label: 'Radar Map', icon: Compass },
                  { id: 'news', label: 'News', icon: Newspaper },
                  { id: 'instructions', label: 'Manual', icon: BookOpen },
                  { id: 'profile', label: 'SOS Net', icon: User },
                  { id: 'authority', label: 'Authority', icon: Building2 },
                ] as const
              ).map((tab) => {
                const active = heroTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setHeroTab(tab.id)}
                    className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                      active
                        ? 'bg-[#085437] text-white shadow-sm ring-1 ring-emerald-400'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
