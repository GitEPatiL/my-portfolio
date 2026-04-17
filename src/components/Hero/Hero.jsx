import { useState, useEffect } from 'react';
import { siteConfig, about, contact } from '../../data/portfolioData';
import './Hero.css';

const ROLES = [
  'Full Stack Developer',
  'React Enthusiast',
  'UI/UX Tinkerer',
  'Open Source Contributor',
];

/* Simple typewriter hook */
function useTypewriter(words, speed = 100, pause = 1800) {
  const [text,    setText]    = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
        setCharIdx(0);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

/* Social SVG icons (inline — no external library) */
const SocialIcon = ({ icon }) => {
  if (icon === 'github') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  );
  if (icon === 'linkedin') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
  if (icon === 'twitter') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  );
  return null;
};

export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  return (
    <>
      <section id="hero" className="hero">
        {/* Animated background */}
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__blob hero__blob--3" />
        </div>
        <div className="hero__grid" aria-hidden="true" />

        <div className="container hero__content">
          <p className="hero__greeting">
            <span className="hero__greeting-line" aria-hidden="true" />
            {about.greeting}
          </p>

          <h1 className="hero__name">
            <span className="hero__name--gradient">{siteConfig.name}</span>
          </h1>

          <p className="hero__title">
            I build things as a{' '}
            <span className="hero__title--typed" aria-label={typedRole}>
              {typedRole}
            </span>
          </p>

          <p className="hero__tagline">{siteConfig.tagline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary" onClick={e => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View My Work ↓
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-text">scroll</span>
          <span className="hero__scroll-bar" />
        </div>
      </section>

      {/* Fixed side social links */}
      <aside className="hero__socials" aria-label="Social links">
        {contact.socials.map(s => (
          <a
            key={s.icon}
            href={s.href}
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
          >
            <SocialIcon icon={s.icon} />
          </a>
        ))}
        <span className="hero__social-line" aria-hidden="true" />
      </aside>

      <aside className="hero__email-side">
        <a href={`mailto:${contact.email}`} className="hero__email-text">
          {contact.email}
        </a>
        <span className="hero__social-line" aria-hidden="true" />
      </aside>
    </>
  );
}
