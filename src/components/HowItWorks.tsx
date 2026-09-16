import React from 'react';
import { Search, Compass, ShieldCheck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const stepIcons = [Search, Compass, ShieldCheck];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative border-t border-zinc-900 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Rapid Response Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Vippatti Sarana Works
          </h2>
          <p className="text-base text-zinc-400">
            A three-step paradigm transforming complex telemetry into actionable, life-saving clarity.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-0.5 -translate-y-12 bg-gradient-to-r from-red-500/30 via-amber-500/30 to-emerald-500/30 -z-0" />

          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={item.step}
                id={`how-it-works-step-${item.step}`}
                className="relative z-10 p-8 rounded-2xl bg-[#0e121a]/80 border border-white/[0.08] hover:border-zinc-700 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <span className="text-3xl font-black text-zinc-600 font-mono group-hover:text-zinc-400 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-red-400 font-mono text-lg">{item.step} —</span>
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-base text-zinc-200 font-medium mb-3">
                    {item.summary}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center text-xs text-zinc-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400/80 mr-2" />
                  <span>Phase {item.step} in Emergency Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
