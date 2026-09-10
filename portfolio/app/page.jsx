'use client';
import { useState, useCallback } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ActivityStrips from './components/ActivityStrips';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      <CustomCursor />
      {!loaded && <Loader onDone={handleLoaded} />}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className={`transition-opacity duration-700 overflow-x-hidden ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar onContactClick={() => setIsModalOpen(true)} />

        <main>
          <Hero onContactClick={() => setIsModalOpen(true)} />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <ActivityStrips />
        </main>

        <Footer />
      </div>
    </>
  );
}
