import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { AppPreview } from './components/AppPreview';
import { AboutProject } from './components/AboutProject';
import { DownloadSection } from './components/DownloadSection';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';

export default function App() {
  const [docsModalOpen, setDocsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090d] text-zinc-100 selection:bg-red-500/30 selection:text-white antialiased flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <AppPreview />
        <AboutProject />
        <DownloadSection />
        <Disclaimer />
      </main>

      {/* Footer */}
      <Footer onOpenDocs={() => setDocsModalOpen(true)} />

      {/* Architecture & Documentation Modal */}
      <ArchitectureModal
        isOpen={docsModalOpen}
        onClose={() => setDocsModalOpen(false)}
      />
    </div>
  );
}
