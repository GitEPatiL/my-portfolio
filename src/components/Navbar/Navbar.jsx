// src/components/Navbar/Navbar.jsx
// Stitch Cyber-Minimalist Navbar with glassmorphism and active link tracking

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteConfig } from '../../data/portfolioData';
import { MenuIcon, CloseIcon } from '../ui/Icons';
import { smoothSpring } from '../../animations';

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');

  /* Detect scroll for glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, [closeMenu]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.25 } },
  };

  return (
    <header>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div
          className="container flex items-center justify-between h-full"
          style={{ height: 'var(--nav-h)' }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => handleNavClick(e, '#hero')}
            aria-label="Home"
            className="flex items-center gap-1 group"
          >
            <span
              className="font-geist text-lg font-600"
              style={{ color: 'var(--purple)' }}
            >&lt;</span>
            <span
              className="font-sora font-bold text-xl tracking-tight"
              style={{
                background: 'var(--grad-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Aviraj.dev
            </span>
            <span
              className="font-geist text-lg"
              style={{ color: 'var(--purple)' }}
            >&gt;</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="relative font-geist text-xs tracking-widest uppercase transition-colors duration-200"
                    style={{
                      color: isActive ? 'var(--purple-light)' : 'var(--text-muted)',
                    }}
                    whileHover={{ color: 'var(--purple-light)' }}
                  >

                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ background: 'var(--grad)' }}
                        transition={smoothSpring}
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2 px-4"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Resume ↗
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden"
              style={{
                background: 'rgba(5, 6, 8, 0.96)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div className="container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="block font-geist text-sm tracking-widest uppercase py-3"
                    style={{
                      color: activeLink === link.href ? 'var(--purple-light)' : 'var(--text-muted)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >

                    {link.label}
                  </a>
                ))}
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm mt-2 w-fit"
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
