import React from 'react';
import { Shield, Github, FileText, Download, Heart } from 'lucide-react';
import { APK_DOWNLOAD_URL, GITHUB_REPO_URL } from '../constants';

interface FooterProps {
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocs }) => {
  return (
    <footer id="main-footer" className="bg-[#05070a] border-t border-zinc-900 py-14 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-800/80">
          {/* Brand & Slogan */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Vippatti Sarana
              </span>
            </div>
            <p className="text-base text-zinc-300 font-medium">
              “Technology for Safer Communities.”
            </p>
            <p className="text-xs text-zinc-400 max-w-sm">
              An Android disaster intelligence and emergency response initiative piloted in Idukki, Kerala.
            </p>
          </div>

          {/* Links: GitHub, Architecture / Documentation, Download APK */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a
              id="footer-link-github"
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              id="footer-link-architecture"
              type="button"
              onClick={onOpenDocs}
              className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors focus:outline-none"
            >
              <FileText className="w-4 h-4" />
              <span>Architecture / Documentation</span>
            </button>

            <a
              id="footer-link-download"
              href={APK_DOWNLOAD_URL}
              download
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-semibold"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Vippatti Sarana Project. Android Emergency Response Pilot.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Pilot Active in Idukki, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
