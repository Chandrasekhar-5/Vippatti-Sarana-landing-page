import React from 'react';
import {
  ShieldAlert,
  Radar,
  MapPinCheck,
  Route,
  Radio,
  LifeBuoy,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { FEATURES, FeatureItem } from '../constants';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Radar: Radar,
  MapPinCheck: MapPinCheck,
  Route: Route,
  Radio: Radio,
  LifeBuoy: LifeBuoy,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#07090e]">
      {/* Background accents matching product colors */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#00E676] bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Designed for Critical Seconds
          </h2>
          <p className="text-base text-zinc-300">
            Engineered to deliver rapid situational awareness, verified safe zones, and dependable emergency decision support for communities.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature: FeatureItem, index: number) => {
            const IconComponent = iconMap[feature.iconName];
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="group relative p-7 rounded-2xl bg-[#0f1420] hover:bg-[#141b2c] border border-zinc-800/80 hover:border-[#00E676]/40 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-emerald-950/20 flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00E676]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#151c2a] border border-zinc-800 flex items-center justify-center text-[#00E676] group-hover:scale-105 group-hover:border-[#00E676]/40 transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">{feature.badge}</span>
                  <span className="text-[#00E676] font-mono font-semibold text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                    Active in Pilot
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authority Console Spotlight Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0d121c] border border-zinc-800/90 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Authority & Coordination Console</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Shelter Management & Relocation Prioritization
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Beyond individual citizens, Vippatti Sarana features an integrated Authority Console for field teams and local emergency managers to monitor shelter occupancy, assess habitation vulnerability, and coordinate relocation prioritization with explainable risk metrics.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:border-l sm:border-zinc-800/80 sm:pl-6 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                <span>Real-time shelter capacity & supplies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                <span>Habitation risk & slope exposure scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                <span>Relocation prioritization triage matrix</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                <span>Pilot decision-support architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
