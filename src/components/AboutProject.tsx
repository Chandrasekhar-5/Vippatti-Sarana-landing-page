import React from 'react';
import { MapPin, Mountain, AlertCircle, Compass, Cpu } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

export const AboutProject: React.FC = () => {
  return (
    <section id="pilot" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Pilot Project Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Summary */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              Pilot Initiative
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About the Project
            </h2>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-red-500/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-lg sm:text-xl text-zinc-100 font-medium leading-relaxed">
                “Vippatti Sarana is a disaster-management pilot project focused on risk awareness,
                safe-zone identification, evacuation planning, and emergency assistance.”
              </p>
            </div>

            <p className="text-base text-zinc-400 leading-relaxed">
              The current pilot focuses on <strong className="text-white">Idukki, Kerala</strong> — an environmentally sensitive high-altitude region in the Western Ghats prone to intense monsoonal rainfall, slope degradation, landslides, and sudden flash floods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <Mountain className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Rugged Mountain Topology</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Customized slope stability models adapted to high-gradient Western Ghats terrain.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Monsoon & Flood Readiness</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Pre-emptive warnings coordinated with regional reservoir discharge and cloudburst data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Focus Graphic */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-bold text-white">Active Pilot Zone</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Field Test Active
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-white">Idukki District</span>
                  <span className="text-xs text-zinc-400">Kerala, India</span>
                </div>

                <div className="space-y-2 text-xs text-zinc-300 font-mono">
                  <div className="flex justify-between p-2 rounded bg-zinc-950 border border-zinc-800">
                    <span className="text-zinc-400">Geographic Center</span>
                    <span className="text-zinc-200">9.8492° N, 76.9803° E</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-zinc-950 border border-zinc-800">
                    <span className="text-zinc-400">Elevation Range</span>
                    <span className="text-zinc-200">300m – 2,695m (Anamudi)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-zinc-950 border border-zinc-800">
                    <span className="text-zinc-400">Primary Hazards</span>
                    <span className="text-amber-400">Landslides, Debris Flow, Flooding</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-red-950/30 border border-red-900/50 text-xs text-red-300 leading-normal flex items-start gap-2">
                  <Compass className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    Validation test focuses on community evacuation corridors in high-risk taluks including Devikulam, Udumbanchola, and Peermade.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Technology Strip */}
        <div id="technology" className="pt-8 border-t border-zinc-800/80">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-4 h-4 text-zinc-400" />
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-400">
              Technology Stack
            </h3>
          </div>

          {/* Compact Badge Grid */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="px-3.5 py-2 rounded-xl bg-[#0f131d] border border-white/[0.08] hover:border-zinc-700 transition-colors flex items-center gap-2"
                title={`${tech.category}: ${tech.detail}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-sm font-semibold text-zinc-200">{tech.name}</span>
                <span className="text-[11px] text-zinc-400 font-mono">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
