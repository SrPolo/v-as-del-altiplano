/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TariffStructure } from './components/TariffStructure';
import { TariffSimulator } from './components/TariffSimulator';
import { SocialInvestment } from './components/SocialInvestment';
import { WorksViewer } from './components/WorksViewer';
import { LegalFramework } from './components/LegalFramework';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-forest-950 text-mist-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <TariffStructure />
        <TariffSimulator />
        <SocialInvestment />
        <WorksViewer />
        <LegalFramework />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
