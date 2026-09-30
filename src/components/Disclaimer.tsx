import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-10 bg-[#06080c] border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <p>
              <strong className="text-zinc-200">Important Disclaimer & Pilot Notice: </strong>
              Vippatti Sarana is an academic/software pilot and decision-support system designed to enhance disaster awareness and assist situational response.
            </p>
            <p className="text-zinc-500 text-xs">
              Vippatti Sarana is not an official government emergency service, not a certified safety system, and not a replacement for official government emergency alerts, meteorological warnings, or directives from authorized disaster management authorities. The application does not guarantee disaster prediction accuracy or unconditional safety in identified zones. Always follow official government advisories and emergency responder instructions first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
