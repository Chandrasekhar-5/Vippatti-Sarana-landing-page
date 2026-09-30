import React, { useState } from 'react';
import {
  Building2,
  Users,
  ShieldCheck,
  AlertTriangle,
  Send,
  Droplets,
  Zap,
  CheckCircle2,
  Layers,
  Activity,
} from 'lucide-react';

export const AuthorityConsoleScreen: React.FC = () => {
  const [advisorySent, setAdvisorySent] = useState<boolean>(false);
  const [selectedSector, setSelectedSector] = useState<string>('Devikulam');

  const shelters = [
    {
      name: 'Munnar Town Relief Hall',
      location: 'Munnar Central',
      capacity: '410/500 spots',
      pct: 82,
      status: 'High Load',
      color: 'bg-amber-500',
    },
    {
      name: 'Peerumade Govt High School',
      location: 'Peerumade Catchment',
      capacity: '180/400 spots',
      pct: 45,
      status: 'Normal',
      color: 'bg-emerald-600',
    },
    {
      name: 'Devikulam Community Center',
      location: 'Devikulam Valley',
      capacity: '140/350 spots',
      pct: 40,
      status: 'Normal',
      color: 'bg-emerald-600',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f4f6f4] text-slate-800 text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. Authority Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#085437] shadow-xs">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[8px] font-black text-[#085437] uppercase tracking-widest block font-mono">
              AUTHORITY & INCIDENT COMMAND
            </span>
            <h3 className="font-black text-xs text-slate-900 tracking-tight -mt-0.5">
              Idukki District Operations
            </h3>
          </div>
        </div>

        <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-[#085437] border border-emerald-300">
          COORDINATOR
        </span>
      </div>

      {/* 2. Shelter Occupancy & Readiness Overview */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-extrabold uppercase text-slate-600 tracking-wider">
            SHELTER NETWORK STATUS
          </span>
          <span className="text-[8px] font-mono font-bold text-slate-500">
            Total 730/1,250 Occupied (58%)
          </span>
        </div>

        {/* Shelters List */}
        <div className="space-y-2">
          {shelters.map((shelter) => (
            <div
              key={shelter.name}
              className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-extrabold text-[10px] text-slate-900 leading-tight">
                    {shelter.name}
                  </p>
                  <p className="text-[8px] text-slate-500">{shelter.location}</p>
                </div>
                <span className="text-[8px] font-bold font-mono text-slate-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {shelter.capacity}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className={`h-full rounded-full ${shelter.color}`}
                  style={{ width: `${shelter.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Supply Logistics Grid */}
        <div className="grid grid-cols-4 gap-1 pt-1 border-t border-slate-100 text-center text-[8px]">
          <div className="p-1 rounded bg-slate-50">
            <span className="text-slate-400 block">Water</span>
            <span className="font-extrabold text-slate-800">94%</span>
          </div>
          <div className="p-1 rounded bg-slate-50">
            <span className="text-slate-400 block">Food Rations</span>
            <span className="font-extrabold text-slate-800">88%</span>
          </div>
          <div className="p-1 rounded bg-slate-50">
            <span className="text-slate-400 block">Meds</span>
            <span className="font-extrabold text-slate-800">76%</span>
          </div>
          <div className="p-1 rounded bg-slate-50">
            <span className="text-slate-400 block">Generators</span>
            <span className="font-extrabold text-emerald-700">100%</span>
          </div>
        </div>
      </div>

      {/* 3. Habitation Vulnerability & Relocation Prioritization */}
      <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-extrabold uppercase text-slate-600 tracking-wider">
            RELOCATION PRIORITIZATION TRIAGE
          </span>
          <Activity className="w-3.5 h-3.5 text-amber-600" />
        </div>

        <div className="space-y-1.5 text-[9px]">
          <div className="p-2 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-red-800">Devikulam Ward 4</span>
                <span className="px-1 py-0.2 bg-red-600 text-white rounded text-[7px] font-black">
                  PRIORITY 1
                </span>
              </div>
              <p className="text-[8px] text-red-700">
                Steep slope slip risk: 42 households recommended for proactive transit
              </p>
            </div>
            <span className="font-mono font-bold text-red-800 text-[10px]">8.4 / 10</span>
          </div>

          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-amber-900">Periyar Riverbank Ward 2</span>
                <span className="px-1 py-0.2 bg-amber-600 text-white rounded text-[7px] font-black">
                  PRIORITY 2
                </span>
              </div>
              <p className="text-[8px] text-amber-800">
                Inflow watch: 28 households on low-lying embankment
              </p>
            </div>
            <span className="font-mono font-bold text-amber-900 text-[10px]">6.1 / 10</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            setAdvisorySent(true);
            setTimeout(() => setAdvisorySent(false), 2500);
          }}
          className={`w-full py-2 px-3 rounded-xl font-black text-[9px] flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-98 ${
            advisorySent
              ? 'bg-[#085437] text-white'
              : 'bg-[#006847] hover:bg-[#085437] text-white'
          }`}
        >
          {advisorySent ? (
            <>
              <CheckCircle2 className="w-3 h-3 text-emerald-300" />
              <span>Relocation Advisory Dispatched to Field Teams</span>
            </>
          ) : (
            <>
              <Send className="w-3 h-3" />
              <span>Issue Proactive Relocation Advisory</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
