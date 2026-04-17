import { about, siteConfig, education, contact } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';
import './About.css';

/* ── Inline SVG icons ──────────────────────────────────────── */
const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07
      8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361
      1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0
      012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const GraduationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export default function About() {
  const edu = education[0]; // single education entry

  return (
    <section id="about">
      <div className="container">
        {/* Section heading — always visible */}
        <p className="section-tag">{`// who I am`}</p>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider" aria-hidden="true" />

        {/* Animated body */}
        <motion.div
          className="about__layout"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* ── Left: objective + stats ─────────────────── */}
          <div>
            {/* Career Objective */}
            <p className="about__objective-heading">
              <span className="about__objective-icon" aria-hidden="true">🎯</span>
              Career Objective
            </p>
            <p className="about__objective-text">{about.intro}</p>
            <p className="about__objective-text">{about.details}</p>

            <div className="about__inner-divider" aria-hidden="true" />

            {/* Quick stats */}
            <div className="about__stats" aria-label="Quick stats">
              {about.stats.map((s, i) => (
                <div key={i} className="about__stat">
                  <div className="about__stat-value">{s.value}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: education + contact info ─────────── */}
          <div className="about__right">

            {/* Education card */}
            <div className="about__edu-card">
              <p className="about__edu-eyebrow">
                <GraduationIcon />
                Education
              </p>
              <p className="about__edu-degree">{edu.degree}</p>
              <p className="about__edu-row">{edu.institution}</p>
              <p className="about__edu-row">{edu.university}</p>
              <span className="about__edu-year">
                🎓 Graduating {edu.year}
              </span>
            </div>

            {/* Contact / meta info card */}
            <div className="about__meta-card">
              <div className="about__meta-item">
                <LocationIcon />
                {siteConfig.location}
              </div>
              <div className="about__meta-item">
                <MailIcon />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="about__meta-item">
                <PhoneIcon />
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </div>
              {contact.socials.map(s => (
                <div key={s.icon} className="about__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon === 'github' && (
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0
                        00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020
                        4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38
                        0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005
                        4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44
                        7A3.37 3.37 0 009 18.13V22"/>
                    )}
                    {s.icon === 'linkedin' && (
                      <>
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </>
                    )}
                  </svg>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
