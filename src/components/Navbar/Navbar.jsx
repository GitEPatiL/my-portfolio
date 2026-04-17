import { useState, useEffect, useCallback } from 'react';
import { navLinks, siteConfig } from '../../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('');

  /* Detect scroll for glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Track active section via IntersectionObserver */
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
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, [closeMenu]);

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={e => handleNavClick(e, '#hero')} aria-label="Home">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-name">{siteConfig.name}</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeLink === link.href ? 'active' : ''}`}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.resumeUrl}
            className="navbar__resume btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            className="navbar__mobile-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
