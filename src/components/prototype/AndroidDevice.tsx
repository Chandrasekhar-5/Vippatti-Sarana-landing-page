import React, { useState } from 'react';
import {
  Compass,
  Newspaper,
  BookOpen,
  User,
  Building2,
  Wifi,
  Battery,
  Signal,
} from 'lucide-react';
import { RadarMapScreen } from './RadarMapScreen';
import { ProfileEmergencyNetScreen } from './ProfileEmergencyNetScreen';
import { SurvivalManualScreen } from './SurvivalManualScreen';
import { DisasterNewsScreen } from './DisasterNewsScreen';
import { AuthorityConsoleScreen } from './AuthorityConsoleScreen';

export type PrototypeTab = 'radar' | 'news' | 'instructions' | 'profile' | 'authority';

interface AndroidDeviceProps {
  currentTab: PrototypeTab;
  onTabChange: (tab: PrototypeTab) => void;
  className?: string;
}

export const AndroidDevice: React.FC<AndroidDeviceProps> = ({
  currentTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div className={`relative w-full max-w-[340px] sm:max-w-[365px] mx-auto select-none ${className}`}>
      {/* Outer ambient glow reflecting the app's forest green & emergency accents */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#085437]/25 via-emerald-500/10 to-transparent rounded-[52px] blur-2xl -z-10 pointer-events-none" />

      {/* Android Phone Chassis */}
      <div className="relative bg-[#0b0f17] border-[7px] border-[#1e2533] rounded-[46px] shadow-2xl shadow-black overflow-hidden ring-1 ring-white/10 flex flex-col h-[670px]">
        {/* Top Speaker / Camera Pill Cutout */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-[#1e2533] rounded-b-xl z-40 flex items-center justify-center gap-2">
          <div className="w-8 h-1 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-black border border-zinc-700" />
        </div>

        {/* Android Status Bar (Clean Light / Dark Forest Header matching the app) */}
        <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[10px] text-slate-700 font-mono bg-[#f4f6f4] border-b border-slate-200/90 z-30 shrink-0">
          <span className="font-bold text-slate-900 tracking-tight">09:41</span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-[#085437] font-bold uppercase tracking-wider bg-emerald-100/80 px-1.5 py-0.5 rounded">
              GPS ACTIVE
            </span>
            <Signal className="w-3 h-3 text-slate-600" />
            <Wifi className="w-3 h-3 text-slate-600" />
            <Battery className="w-3.5 h-3.5 text-slate-700" />
          </div>
        </div>

        {/* Dynamic Screen View Content (Clean, authentic Material 3 UI matching app images) */}
        <div className="flex-1 overflow-hidden relative bg-[#f4f6f4]">
          {currentTab === 'radar' && <RadarMapScreen />}
          {currentTab === 'news' && <DisasterNewsScreen />}
          {currentTab === 'instructions' && <SurvivalManualScreen />}
          {currentTab === 'profile' && <ProfileEmergencyNetScreen />}
          {currentTab === 'authority' && <AuthorityConsoleScreen />}
        </div>

        {/* Authentic Android Material 3 Bottom Navigation Bar */}
        <div className="bg-white border-t border-slate-200/90 py-1.5 px-2 flex items-center justify-around shrink-0 z-30 shadow-sm">
          {/* Tab 1: Radar Map */}
          <button
            id="device-nav-radar"
            onClick={() => onTabChange('radar')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-11 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'radar'
                  ? 'bg-[#085437] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'radar' ? 'text-[#085437]' : 'text-slate-500'
              }`}
            >
              Radar Map
            </span>
          </button>

          {/* Tab 2: News */}
          <button
            id="device-nav-news"
            onClick={() => onTabChange('news')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-11 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'news'
                  ? 'bg-[#085437] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'news' ? 'text-[#085437]' : 'text-slate-500'
              }`}
            >
              News
            </span>
          </button>

          {/* Tab 3: Instructions / Survival Manual */}
          <button
            id="device-nav-instructions"
            onClick={() => onTabChange('instructions')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-11 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'instructions'
                  ? 'bg-[#085437] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'instructions' ? 'text-[#085437]' : 'text-slate-500'
              }`}
            >
              Instructions
            </span>
          </button>

          {/* Tab 4: Profile & SOS */}
          <button
            id="device-nav-profile"
            onClick={() => onTabChange('profile')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-11 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'profile'
                  ? 'bg-[#085437] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <User className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'profile' ? 'text-[#085437]' : 'text-slate-500'
              }`}
            >
              Profile
            </span>
          </button>

          {/* Tab 5: Authority Console */}
          <button
            id="device-nav-authority"
            onClick={() => onTabChange('authority')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-11 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'authority'
                  ? 'bg-[#085437] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'authority' ? 'text-[#085437]' : 'text-slate-500'
              }`}
            >
              Authority
            </span>
          </button>
        </div>

        {/* Android Gesture Bar */}
        <div className="bg-white pb-1 pt-0.5 flex justify-center border-t border-slate-100">
          <div className="w-24 h-1 rounded-full bg-slate-400" />
        </div>
      </div>
    </div>
  );
};
