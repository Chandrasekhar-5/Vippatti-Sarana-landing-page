import React from 'react';
import {
  Compass,
  Newspaper,
  BookOpen,
  User,
  Radio,
  Wifi,
  Battery,
} from 'lucide-react';
import { RadarMapScreen } from './RadarMapScreen';
import { ProfileEmergencyNetScreen } from './ProfileEmergencyNetScreen';
import { SurvivalManualScreen } from './SurvivalManualScreen';
import { DisasterNewsScreen } from './DisasterNewsScreen';

export type PrototypeTab = 'radar' | 'news' | 'instructions' | 'profile';

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
    <div className={`relative w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none ${className}`}>
      {/* Outer ambient glow reflecting the app's dual emergency red and mint green energy */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#00E676]/15 via-red-600/10 to-transparent rounded-[52px] blur-2xl -z-10 pointer-events-none" />

      {/* Android Phone Chassis */}
      <div className="relative bg-[#06080d] border-[7px] border-[#182030] rounded-[46px] shadow-2xl shadow-black overflow-hidden ring-1 ring-white/10 flex flex-col h-[650px]">
        {/* Top Speaker / Camera Pill Cutout */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-[#182030] rounded-b-xl z-40 flex items-center justify-center gap-2">
          <div className="w-8 h-1 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-black border border-zinc-700" />
        </div>

        {/* Android Status Bar */}
        <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[10px] text-zinc-400 font-mono bg-[#0d121c] border-b border-zinc-800/80 z-30 shrink-0">
          <span className="font-bold text-white">09:41</span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-[#00E676] font-bold">GPS ACTIVE</span>
            <Wifi className="w-3 h-3 text-zinc-300" />
            <Battery className="w-3 h-3 text-zinc-300" />
          </div>
        </div>

        {/* Dynamic Screen View Content */}
        <div className="flex-1 overflow-hidden relative">
          {currentTab === 'radar' && <RadarMapScreen />}
          {currentTab === 'news' && <DisasterNewsScreen />}
          {currentTab === 'instructions' && <SurvivalManualScreen />}
          {currentTab === 'profile' && <ProfileEmergencyNetScreen />}
        </div>

        {/* Authentic Android 4-Tab Bottom Navigation Bar */}
        <div className="bg-[#090c13] border-t border-zinc-800/90 py-1.5 px-3 flex items-center justify-around shrink-0 z-30">
          {/* Tab 1: Radar Map */}
          <button
            id="device-nav-radar"
            onClick={() => onTabChange('radar')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-9 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'radar'
                  ? 'bg-[#00E676] text-black shadow-sm'
                  : 'text-zinc-400 group-hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'radar' ? 'text-[#00E676]' : 'text-zinc-400'
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
              className={`w-9 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'news'
                  ? 'bg-[#00E676] text-black shadow-sm'
                  : 'text-zinc-400 group-hover:text-white'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'news' ? 'text-[#00E676]' : 'text-zinc-400'
              }`}
            >
              News
            </span>
          </button>

          {/* Tab 3: Instructions */}
          <button
            id="device-nav-instructions"
            onClick={() => onTabChange('instructions')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-9 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'instructions'
                  ? 'bg-[#00E676] text-black shadow-sm'
                  : 'text-zinc-400 group-hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'instructions' ? 'text-[#00E676]' : 'text-zinc-400'
              }`}
            >
              Instructions
            </span>
          </button>

          {/* Tab 4: Profile */}
          <button
            id="device-nav-profile"
            onClick={() => onTabChange('profile')}
            className="flex flex-col items-center gap-0.5 focus:outline-none transition-all group"
          >
            <div
              className={`w-9 h-6 rounded-full flex items-center justify-center transition-all ${
                currentTab === 'profile'
                  ? 'bg-[#00E676] text-black shadow-sm'
                  : 'text-zinc-400 group-hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-[9px] font-bold tracking-tight ${
                currentTab === 'profile' ? 'text-[#00E676]' : 'text-zinc-400'
              }`}
            >
              Profile
            </span>
          </button>
        </div>

        {/* Android Gesture Bar */}
        <div className="bg-[#090c13] pb-1 pt-0.5 flex justify-center">
          <div className="w-24 h-1 rounded-full bg-zinc-700/60" />
        </div>
      </div>
    </div>
  );
};
