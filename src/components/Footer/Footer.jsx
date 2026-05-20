// src/components/Footer/Footer.jsx
// Stitch Cyber-Minimalist Footer with neon divider and back-to-top

import { motion } from 'framer-motion';
import { siteConfig, footer, contact } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, ChevronUpIcon } from '../ui/Icons';
import { smoothSpring } from '../../animations';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer role="contentinfo" style={{ background: 'var(--bg-deep)', paddingBottom: '2rem' }}>

      {/* Neon top divider */}
      <div className="neon-divider" />

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTop(); }}
            aria-label="Back to top"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span style={{ fontFamily: 'var(--font-code)', color: 'var(--purple)', fontSize: '0.9rem' }}>&lt;</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.95rem',
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {siteConfig.name}
            </span>
            <span style={{ fontFamily: 'var(--font-code)', color: 'var(--purple)', fontSize: '0.9rem' }}>/&gt;</span>
          </a>

          {/* Center credit */}
          <p style={{
            fontFamily: 'var(--font-code)',
            fontSize: '0.72rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.05em',
            textAlign: 'center',
          }}>
            {footer.text} · {footer.year}
            <span style={{ display: 'block', marginTop: '0.2rem', color: 'var(--text-faint)', opacity: 0.7 }}>
              Built with{' '}
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--purple-light)' }}>React</a>
              {' + '}
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--blue)' }}>Vite</a>
              {' + '}
              <a href="https://www.framer.com/motion" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--purple-light)' }}>Framer Motion</a>
            </span>
          </p>

          {/* Right: socials + back-to-top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {contact.socials.map(s => (
              <motion.a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: 'var(--text-faint)' }}
                whileHover={{ color: 'var(--purple-light)', y: -2 }}
                transition={smoothSpring}
              >
                {s.icon === 'github'   && <GithubIcon size={18} />}
                {s.icon === 'linkedin' && <LinkedinIcon size={18} />}
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              aria-label="Scroll back to top"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                padding: '0.45rem 0.9rem',
                fontFamily: 'var(--font-code)',
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                background: 'transparent',
                cursor: 'pointer',
              }}
              whileHover={{
                color: 'var(--purple-light)',
                borderColor: 'rgba(138,43,226,0.4)',
                y: -2,
              }}
              transition={smoothSpring}
            >
              <ChevronUpIcon size={12} />
              top
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
