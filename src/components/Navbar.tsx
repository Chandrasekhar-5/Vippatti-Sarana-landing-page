import React, { useState, useEffect } from 'react';
import { Shield, Download, Menu, X, Radio } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'App Preview', href: '#preview' },
    { label: 'Pilot Project', href: '#pilot' },
    { label: 'Technology', href: '#technology' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-md shadow-red-950/40 border border-red-400/30 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-red-400 transition-colors">
                  Vippatti Sarana
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-red-500/20 text-red-400 border border-red-500/30 rounded">
                  Android
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium tracking-wide">
                Disaster Intelligence & Emergency Response
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-200 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Download APK CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pilot Live • v1.0</span>
            </div>
            <a
              id="nav-download-button"
              href={APK_DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium text-sm shadow-md shadow-red-950/50 hover:shadow-red-700/25 border border-red-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={APK_DOWNLOAD_URL}
              download
              aria-label="Download Android APK"
              className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14] border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/70">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Active Pilot: Idukki, Kerala</span>
            </div>
            <span className="text-[11px] text-zinc-400">Android APK v1.0</span>
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white hover:translate-x-1 transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              id="mobile-drawer-download-btn"
              href={APK_DOWNLOAD_URL}
              download
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-base shadow-lg shadow-red-950/60"
            >
              <Download className="w-5 h-5" />
              <span>Download Android APK</span>
            </a>
            <p className="text-center text-xs text-zinc-400 mt-2">
              Free • Direct GitHub Release
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
