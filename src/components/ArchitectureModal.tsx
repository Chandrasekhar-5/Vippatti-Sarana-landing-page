import React from 'react';
import { X, Layers, Database, Smartphone, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { GITHUB_REPO_URL, TECHNOLOGIES } from '../constants';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d1017] border border-zinc-700 shadow-2xl p-6 sm:p-8 space-y-6 text-white">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">System Architecture & Technical Stack</h3>
              <p className="text-xs text-zinc-400">Vippatti Sarana Native Android Ecosystem</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Tier Architecture Diagram */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Three-Tier Data & Processing Pipeline
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Layer 1 */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                <Database className="w-4 h-4" />
                <span>1. Telemetry Ingestion</span>
              </div>
              <p className="text-xs text-zinc-300">
                Aggregates real-time feeds from USGS (Earthquakes), NASA FIRMS (Thermal/Fires), IMD CAP (Weather alerts), and GNews.
              </p>
            </div>

            {/* Layer 2 */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase">
                <Shield className="w-4 h-4" />
                <span>2. Intelligence Engine</span>
              </div>
              <p className="text-xs text-zinc-300">
                Risk calculation algorithms evaluate precipitation, slope gradient, and terrain vulnerability. Safe zone selection identifies optimal relief shelters.
              </p>
            </div>

            {/* Layer 3 */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                <Smartphone className="w-4 h-4" />
                <span>3. Native Client UI</span>
              </div>
              <p className="text-xs text-zinc-300">
                Built with Kotlin & Jetpack Compose. Utilizes OSMDroid and OSRM for dynamic offline mapping, navigation, and emergency utilities.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Stack Breakdown */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Documented Frameworks & Integrations
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.name} className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80">
                <p className="font-semibold text-white">{tech.name}</p>
                <p className="text-[11px] text-zinc-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-red-400 hover:text-red-300 transition-colors"
          >
            <span>View Source Code on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
          >
            Close Documentation
          </button>
        </div>
      </div>
    </div>
  );
};
