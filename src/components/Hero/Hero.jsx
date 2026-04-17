import { siteConfig, contact } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { slideLeft, staggerContainer, fadeIn } from '../../animations';
import './Hero.css';

/* ── Inline SVG icons (zero external deps) ──────────────────── */
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0
      00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020
      4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38
      0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44
      5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0
      009 18.13V22"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

/* ── Smooth-scroll helper ────────────────────────────────────── */
const scrollTo = (selector) => (e) => {
  e.preventDefault();
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

/* ── Component ───────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <section id="hero">
        {/* Background */}
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
        </div>
        <div className="hero__grid" aria-hidden="true" />

        <div className="container">
          <div className="hero__inner">

            {/* ── Left: text ───────────────────────────── */}
            <motion.div
              className="hero__text"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >

              {/* Eyebrow badge */}
              <motion.span className="hero__eyebrow" aria-hidden="true" variants={fadeIn}>
                <span className="hero__eyebrow-dot" />
                Available for work
              </motion.span>

              {/* Name */}
              <motion.h1 className="hero__name" variants={fadeIn}>
                Hi, I&apos;m{' '}
                <span className="hero__name--highlight">
                  {siteConfig.fullName}
                </span>
              </motion.h1>

              {/* Role */}
              <motion.p className="hero__role" variants={fadeIn}>
                <span className="hero__role-icon" aria-hidden="true">💻</span>
                {siteConfig.title}
              </motion.p>

              {/* Short intro paragraph */}
              <motion.p className="hero__intro" variants={fadeIn}>
                {siteConfig.tagline}
              </motion.p>

              {/* CTA buttons */}
              <motion.div className="hero__cta" variants={fadeIn}>
                <a
                  href="#projects"
                  className="btn btn-primary"
                  onClick={scrollTo('#projects')}
                  id="hero-view-projects"
                >
                  View Projects ↓
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline"
                  onClick={scrollTo('#contact')}
                  id="hero-contact-me"
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Mini meta row: location + email */}
              <motion.div className="hero__meta" aria-label="Quick contact info" variants={fadeIn}>
                <span className="hero__meta-item">
                  <LocationIcon />
                  {siteConfig.location}
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hero__meta-item"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MailIcon />
                  {siteConfig.email}
                </a>
              </motion.div>
            </motion.div>

            {/* ── Right: avatar card ───────────────────── */}
            <motion.div
              className="hero__avatar-card"
              aria-hidden="true"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Rotating gradient ring */}
              <div className="hero__avatar-ring" />

              {/* Inner card */}
              <div className="hero__avatar-inner">
                <span
                  className="hero__avatar-emoji"
                  role="img"
                  aria-label="Developer coding"
                >
                  👨‍💻
                </span>
                <span className="hero__avatar-badge">MERN Stack</span>
              </div>

              {/* Floating skill chips */}
              <span className="hero__chip hero__chip--react">⚛ React</span>
              <span className="hero__chip hero__chip--node">🟢 Node.js</span>
              <span className="hero__chip hero__chip--mongo">🍃 MongoDB</span>
            </motion.div>

          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-label">scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* Fixed side social icons */}
      <aside className="hero__socials" aria-label="Social profiles">
        {contact.socials.map(s => (
          <a
            key={s.icon}
            href={s.href}
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
          >
            {s.icon === 'github'   ? <GitHubIcon />   : null}
            {s.icon === 'linkedin' ? <LinkedInIcon /> : null}
          </a>
        ))}
        <span className="hero__side-line" aria-hidden="true" />
      </aside>

      {/* Fixed side email */}
      <aside className="hero__email-side" aria-label="Email address">
        <a
          href={`mailto:${contact.email}`}
          className="hero__email-link"
        >
          {contact.email}
        </a>
        <span className="hero__side-line" aria-hidden="true" />
      </aside>
    </>
  );
}
