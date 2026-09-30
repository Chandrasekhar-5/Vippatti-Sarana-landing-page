import React, { useState } from 'react';
import {
  Compass,
  Newspaper,
  BookOpen,
  User,
  Building2,
  ShieldAlert,
  CheckCircle2,
  HardDrive,
  Radio,
  Zap,
  Volume2,
  Users,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { AndroidDevice, PrototypeTab } from './prototype/AndroidDevice';
import { APK_DOWNLOAD_URL } from '../constants';

interface TabDetail {
  id: PrototypeTab;
  label: string;
  badge: string;
  title: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  bulletPoints: string[];
}

const TAB_DETAILS: Record<PrototypeTab, TabDetail> = {
  radar: {
    id: 'radar',
    label: 'Radar Map',
    badge: 'Geospatial Radar & Safe Zones',
    title: 'Live Disaster Radar & Safe Zones',
    description:
      'Continuous location-based risk assessment powered by OSMDroid and OSRM. Maps hazard perimeters, calculates proximity to watched disaster zones, and guides users to verified relief shelters.',
    keySpecs: [
      { label: 'Map Engine', value: 'OSMDroid (Offline OSM)' },
      { label: 'Routing', value: 'OSRM Hazard-Avoidance' },
      { label: 'Watched Sector', value: 'Puri Cyclone Watch (365 km)' },
      { label: 'Live Telemetry', value: 'Temp, Rain mm/h, Wind' },
    ],
    bulletPoints: [
      'Visual status indicator (RISK GREEN) tied to onboard device GPS telemetry',
      'Real-time toggle for Earthquake, Flood, Heavy Rainfall, Landslide, and Cyclone',
      'Instant shelter capacity tracking with accessibility status (Dibrugarh & Idukki)',
      'One-tap "Set as destination" button with turn-by-turn foot evacuation routing',
    ],
  },
  news: {
    id: 'news',
    label: 'News Intelligence',
    badge: 'Multi-Source Feeds',
    title: 'Disaster & Weather Intelligence',
    description:
      'Aggregated news feeds and localized incident reports. Delivers crucial situational context and includes an offline speech synthesizer for audio bulletins during blackouts.',
    keySpecs: [
      { label: 'News Source', value: 'GNews Emergency API' },
      { label: 'Audio Service', value: 'Low-Bandwidth TTS' },
      { label: 'Incident Track', value: 'Idukki Road Obstruction' },
      { label: 'Sync Mode', value: 'Periodic Cache' },
    ],
    bulletPoints: [
      'Live GNews emergency stream clearly separating verified alerts from media reports',
      'Audio Bulletin Service providing speech playback when screens or networks fail',
      'Categorized feeds: Severe Alerts, Weather Radar, and Shelter Updates',
      'Immediate localized hazard reporting with verified timestamps and source citations',
    ],
  },
  instructions: {
    id: 'instructions',
    label: 'Survival Manual',
    badge: 'Zero-Network Protocols',
    title: 'Offline Survival Manual & Triggers',
    description:
      'Complete emergency protocols accessible 100% offline. Pre-cached guidelines organized by hazard type and event timeline, backed by instant hardware distress triggers.',
    keySpecs: [
      { label: 'Storage', value: '100% Local On-Device Cache' },
      { label: 'Timeline Phases', value: 'Before • During • After' },
      { label: 'Quick Triggers', value: 'Flashlight & Audio Siren' },
      { label: 'Supported Risks', value: 'Flood, Landslide, Fire, Quake' },
    ],
    bulletPoints: [
      'Offline Manual Cache toggle ensuring guides are accessible without cellular coverage',
      'Actionable "Critical Actions Now" cards (e.g. never driving through floodwater)',
      'Timeline filters providing distinct protocols for preparation, response, and aftermath',
      'Emergency quick trigger bar activating the device LED strobe or high-decibel siren',
    ],
  },
  profile: {
    id: 'profile',
    label: 'Emergency Net',
    badge: 'Distress Relay & Contacts',
    title: 'Distress Signal Center & Profile',
    description:
      'The central life-safety hub. Dispatches live GPS coordinates, battery telemetry, and critical medical requirements, while providing direct priority lines to disaster response forces.',
    keySpecs: [
      { label: 'Relay Status', value: 'Live GPS Mesh Relay' },
      { label: 'Status Protocol', value: 'I AM SAFE / NEED ASSISTANCE' },
      { label: 'Priority Lines', value: 'NDRF 112, 1077, 108, Fire 101' },
      { label: 'Medical Tags', value: 'Blood Group & Inhaler Support' },
    ],
    bulletPoints: [
      'Distress Signal Center with one-tap "BROADCAST SOS WITH LIVE GPS" beacon',
      'Immediate safety confirmation toggle allowing users to mark themselves safe or in need',
      'Family dependents registry and urgent medical attention tags (Asthma, Mobility)',
      'Direct toll-free priority dispatch hotlines: NDRF 112, DEOC Idukki 1077, and Ambulance 108',
    ],
  },
  authority: {
    id: 'authority',
    label: 'Authority Console',
    badge: 'Relocation & Shelter Management',
    title: 'Authority Console & Triage Matrix',
    description:
      'Dedicated command interface for field coordinators and district disaster managers. Provides live shelter capacity monitoring, slope vulnerability indexing, and proactive relocation prioritization.',
    keySpecs: [
      { label: 'Scope', value: 'Idukki District Operations' },
      { label: 'Shelter Hubs', value: 'Munnar, Peerumade, Devikulam' },
      { label: 'Triage Index', value: 'Slope Exposure & Catchment Runoff' },
      { label: 'Dispatch', value: 'Proactive Relocation Advisories' },
    ],
    bulletPoints: [
      'Real-time shelter capacity and essential supply tracking (water, rations, power)',
      'Habitation vulnerability matrix calculating slope exposure and runoff hazard',
      'Priority triage queuing households in hazardous hill slopes for early transit',
      'One-tap relocation advisory dispatch notifying ground field coordinators',
    ],
  },
};

export const AppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PrototypeTab>('radar');
  const details = TAB_DETAILS[activeTab];

  return (
    <section id="preview" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#07090e] overflow-hidden">
      {/* Background ambient lighting in product forest green & emerald */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-gradient-to-b from-[#085437]/20 via-[#00E676]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00E676] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span>Interactive Android Prototype</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Explore the Working Interface
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            Interactive product mockups modeling the Vippatti Sarana Android experience. Tap the tabs on the device or below to inspect each view.
          </p>
        </div>

        {/* Prototype Tab Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0f1420] border border-zinc-800/90 max-w-3xl mx-auto mb-12 shadow-lg">
          {(
            [
              { id: 'radar', label: 'Radar Map', icon: Compass },
              { id: 'news', label: 'News Intelligence', icon: Newspaper },
              { id: 'instructions', label: 'Survival Manual', icon: BookOpen },
              { id: 'profile', label: 'Emergency Net', icon: User },
              { id: 'authority', label: 'Authority Console', icon: Building2 },
            ] as const
          ).map((t) => {
            const isSelected = activeTab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                id={`preview-selector-${t.id}`}
                onClick={() => setActiveTab(t.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#085437] text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Showcase: Interactive Phone on Left, Detailed Deep-Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Authentic Android Phone Frame */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <AndroidDevice currentTab={activeTab} onTabChange={setActiveTab} />
            <p className="text-xs text-zinc-400 mt-3 font-mono">
              * Tap bottom navigation tabs inside phone to navigate prototype views
            </p>
          </div>

          {/* Right: Detailed Feature Breakdown for Active View */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#00E676] bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                {details.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {details.title}
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                {details.description}
              </p>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#0f1420] border border-zinc-800">
              {details.keySpecs.map((spec, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                    {spec.label}
                  </p>
                  <p className="text-sm font-bold text-white tracking-tight">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Prototype Capabilities:
              </p>
              <div className="space-y-2">
                {details.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={APK_DOWNLOAD_URL}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm shadow-lg shadow-red-950/50 transition-all transform hover:-translate-y-0.5"
              >
                <span>Download APK to Test</span>
              </a>

              <a
                href="#technology"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0f1420] hover:bg-[#141b2c] text-zinc-300 hover:text-white font-semibold text-sm border border-zinc-800 transition-colors"
              >
                <span>View Architecture</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
