import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-8 bg-[#06080c] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 flex items-start sm:items-center gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Disclaimer: </strong>
            Vippatti Sarana is a software prototype/pilot and is not a replacement for official emergency alerts, government advisories, or instructions from emergency authorities.
          </p>
        </div>
      </div>
    </section>
  );
};
