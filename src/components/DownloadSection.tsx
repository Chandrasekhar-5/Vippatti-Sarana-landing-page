import React from 'react';
import { Download, Shield, Smartphone, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../constants';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden bg-[#090b10] border-t border-zinc-900">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-600/20 via-amber-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Main CTA Box */}
        <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0f1420]/90 border border-red-500/30 shadow-2xl shadow-black/80 space-y-8">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Direct Android APK Release</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Display / Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Be Prepared Before You Need To Be.
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-white">
              Download Vippatti Sarana for Android.
            </p>
            <p className="text-sm sm:text-base text-zinc-300">
              Get direct access to offline disaster radar, risk scoring, safe zone navigation, and emergency response tools on your Android device.
            </p>
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center justify-center space-y-3 pt-2">
            <a
              id="final-download-apk-button"
              href={APK_DOWNLOAD_URL}
              download
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-lg shadow-2xl shadow-red-950 hover:shadow-red-600/40 border border-red-400/40 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              <Download className="w-6 h-6" />
              <span>Download APK</span>
            </a>

            {/* Below button line */}
            <p className="text-sm font-medium text-zinc-300 tracking-wide">
              APK download • Android application
            </p>

            {/* Warning / Advisory Note */}
            <div className="max-w-xl mx-auto mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs sm:text-sm text-center flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                Android may ask you to allow installation from this source before installing an APK downloaded outside Google Play.
              </span>
            </div>
          </div>

          {/* 3 Step Installation Walkthrough */}
          <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                <span className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[10px] font-mono">1</span>
                <span>Download .apk</span>
              </div>
              <p className="text-xs text-zinc-400">
                Tap the button above to download the release package directly to your device storage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                <span className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[10px] font-mono">2</span>
                <span>Allow Unknown Source</span>
              </div>
              <p className="text-xs text-zinc-400">
                Open the downloaded file and toggle "Allow from this source" in Android settings if prompted.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                <span className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[10px] font-mono">3</span>
                <span>Install & Launch</span>
              </div>
              <p className="text-xs text-zinc-400">
                Complete the standard installation and grant location permissions to activate the disaster radar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
