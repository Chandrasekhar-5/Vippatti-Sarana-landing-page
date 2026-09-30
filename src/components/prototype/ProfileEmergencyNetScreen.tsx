import React, { useState } from 'react';
import {
  Shield,
  Sun,
  Settings,
  Star,
  Users,
  AlertCircle,
  PhoneCall,
  CheckCircle2,
  Flame,
  Activity,
  Battery,
  MapPin,
  Check,
} from 'lucide-react';

export const ProfileEmergencyNetScreen: React.FC = () => {
  const [safeStatus, setSafeStatus] = useState<'safe' | 'assistance'>('safe');
  const [sosActive, setSosActive] = useState<boolean>(false);
  const [callingLine, setCallingLine] = useState<string | null>(null);

  const emergencyContacts = [
    { name: 'National Emergency Support', number: '112', type: 'Central Dispatch' },
    { name: 'DEOC Idukki Disaster Cell', number: '1077', type: 'District Ops' },
    { name: 'Kerala SDMA Control Room', number: '1070', type: 'State Authority' },
    { name: 'Emergency Medical Service', number: '108', type: 'Ambulance' },
  ];

  const handleDial = (number: string) => {
    setCallingLine(number);
    setTimeout(() => setCallingLine(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#f4f6f4] text-slate-800 text-[11px] overflow-y-auto select-none font-sans p-3 space-y-3 scrollbar-none">
      {/* 1. App Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center text-red-600 shadow-xs">
            <Shield className="w-4 h-4 fill-red-600" />
          </div>
          <div>
            <span className="text-[9px] font-black text-red-600 uppercase tracking-widest block font-mono">
              VIPPATTI SARANA
            </span>
            <h3 className="font-black text-xs text-slate-900 tracking-tight -mt-0.5">
              Profile & Emergency Net
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500">
          <button
            aria-label="Settings"
            className="p-1.5 bg-white border border-slate-200 rounded-lg hover:text-slate-900 shadow-2xs"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Distress Signal Center Card (Matching Screenshot) */}
      <div className="relative p-3.5 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white shadow-md shadow-red-950/20 space-y-2.5 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-red-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 text-emerald-300 text-[8px] font-extrabold border border-emerald-400/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE RELAY ACTIVE
          </span>
          <span className="text-[9px] font-mono text-red-100/90">9.85°N, 76.97°E</span>
        </div>

        <div>
          <h4 className="font-black text-sm text-white tracking-tight">Distress Signal Center</h4>
          <p className="text-[9px] text-red-100 leading-tight mt-0.5">
            Dispatches real-time coordinates, battery level & critical medical tags.
          </p>
        </div>

        <div className="space-y-1.5 pt-1">
          <button
            onClick={() => setSosActive(!sosActive)}
            className={`w-full py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 ${
              sosActive
                ? 'bg-amber-400 text-slate-950 ring-2 ring-white animate-pulse'
                : 'bg-white hover:bg-slate-100 text-red-700'
            }`}
          >
            <Star className={`w-3.5 h-3.5 fill-current ${sosActive ? 'animate-spin' : ''}`} />
            <span>{sosActive ? 'BEACON ACTIVE • TRANSMITTING MESH' : 'BROADCAST SOS WITH LIVE GPS'}</span>
          </button>

          <button className="w-full py-1.5 px-3 rounded-xl bg-black/25 hover:bg-black/40 text-white font-bold text-[9px] flex items-center justify-center gap-1.5 border border-white/20 transition-colors">
            <span>👤</span>
            <span>REPORT MY SITUATION</span>
          </button>
        </div>
      </div>

      {/* 3. User Profile Card */}
      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-[#085437] flex items-center justify-center font-black text-slate-800 text-xs shadow-xs">
                AV
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-black text-xs text-slate-900">Aditya Vardhan</span>
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold">
                  ✓
                </span>
              </div>
              <p className="text-[9px] text-slate-500 font-mono">+91 98450 ••••• (Verified Device)</p>
            </div>
          </div>

          <span className="text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-[#085437] border border-emerald-200">
            Citizen
          </span>
        </div>

        {/* Safety Status Segmented Switch */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setSafeStatus('safe')}
            className={`py-1.5 rounded-lg font-black text-[9px] flex items-center justify-center gap-1 transition-all ${
              safeStatus === 'safe'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Check className="w-3 h-3" />
            <span>I AM SAFE</span>
          </button>
          <button
            onClick={() => setSafeStatus('assistance')}
            className={`py-1.5 rounded-lg font-black text-[9px] flex items-center justify-center gap-1 transition-all ${
              safeStatus === 'assistance'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertCircle className="w-3 h-3" />
            <span>NEED HELP</span>
          </button>
        </div>

        {/* Medical & Telemetry Tags */}
        <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[8px] text-slate-400 block uppercase">Blood Group</span>
            <span className="font-extrabold text-slate-900">O+ (Rh Pos)</span>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[8px] text-slate-400 block uppercase">Allergies</span>
            <span className="font-extrabold text-slate-900">Penicillin</span>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[8px] text-slate-400 block uppercase">Battery</span>
            <span className="font-extrabold text-emerald-700">84% • Good</span>
          </div>
        </div>

        {/* ICE Contact */}
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[9px]">
          <div>
            <span className="text-[8px] text-slate-500 font-bold uppercase block">
              Emergency ICE Contact
            </span>
            <span className="font-bold text-slate-800">Pooja Vardhan (Spouse)</span>
          </div>
          <span className="font-mono text-slate-600 font-semibold">+91 94470 12345</span>
        </div>
      </div>

      {/* 4. Priority Emergency Net Contacts */}
      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase font-extrabold text-slate-600 tracking-wider">
            DIRECT EMERGENCY NET HELPLINES
          </span>
          <span className="text-[8px] font-mono text-emerald-700 font-bold">1-TAP CALL</span>
        </div>

        <div className="space-y-1.5">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.number}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-[9px] transition-colors"
            >
              <div>
                <p className="font-bold text-slate-900 leading-tight">{contact.name}</p>
                <p className="text-[8px] text-slate-500">{contact.type}</p>
              </div>

              <button
                onClick={() => handleDial(contact.number)}
                className="px-2.5 py-1 rounded-lg bg-[#085437] hover:bg-[#006847] text-white font-extrabold text-[9px] flex items-center gap-1 shadow-2xs transition-transform active:scale-95"
              >
                <PhoneCall className="w-2.5 h-2.5" />
                <span>{callingLine === contact.number ? 'Dialing...' : contact.number}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
