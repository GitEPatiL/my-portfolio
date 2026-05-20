// src/App.jsx
// Stitch Cyber-Minimalist Portfolio — powered by Framer Motion + Tailwind CSS
// Design tokens sourced from Google Stitch project: Futuristic Neon Developer Portfolio

import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar     from './components/Navbar/Navbar';
import Hero       from './components/Hero/Hero';
import About      from './components/About/About';
import Skills     from './components/Skills/Skills';
import Projects   from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact    from './components/Contact/Contact';
import Footer     from './components/Footer/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.8
  });

  return (
    <>
      {/* ── Global Scroll Progress Bar ── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(to right, #00bfff, #8a2be2)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000,
        }}
      />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
