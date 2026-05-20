// src/components/About/About.jsx
// Stitch Cyber-Minimalist About section with scroll-triggered fade-up animations

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { about, siteConfig, education, contact } from '../../data/portfolioData';
import { fadeUp, staggerContainer, scaleIn, VIEWPORT, smoothSpring } from '../../animations';
import { LocationIcon, MailIcon, PhoneIcon, GraduationIcon, GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function About() {
  const edu = education[0];
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);

  const y = useSpring(rawY, smoothSpring);
  const opacity = useSpring(rawOpacity, smoothSpring);
  const scale = useSpring(rawScale, smoothSpring);

  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      style={{ 
        background: 'var(--bg)',
        y: prefersReducedMotion ? 0 : y,
        opacity: prefersReducedMotion ? 1 : opacity,
        scale: prefersReducedMotion ? 1 : scale
      }}
    >
      <div className="container">

        {/* Section heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >

          <motion.h2 className="section-title" variants={fadeUp}>
            About <span className="grad-text">Me</span>
          </motion.h2>
          <motion.div className="section-neon-line" variants={fadeUp} />
        </motion.div>

        {/* Body grid */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >

          {/* ── Left: Objective + Stats ─────────────────── */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Objective block */}
            <motion.div 
              className="glass-card" 
              style={{ padding: '2rem' }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
              transition={smoothSpring}
            >
              <p style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-code)', fontSize: '0.75rem',
                letterSpacing: '0.08em', color: 'var(--purple-light)',
                marginBottom: '1rem', textTransform: 'uppercase',
              }}>
                <span>🎯</span> Career Objective
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                {about.intro}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                {about.details}
              </p>
            </motion.div>

            {/* Stats grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              {about.stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    textAlign: 'center',
                    cursor: 'default',
                  }}
                  whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.03, borderColor: 'rgba(138,43,226,0.5)', boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
                  transition={smoothSpring}
                >
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '0.4rem',
                    background: 'var(--grad-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    color: 'var(--text-faint)',
                    textTransform: 'uppercase',
                  }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Education + Contact ─────────────── */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Education card */}
            <motion.div 
              className="glass-card" 
              style={{ padding: '2rem' }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
              transition={smoothSpring}
            >
              <p style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-code)', fontSize: '0.72rem',
                letterSpacing: '0.08em', color: 'var(--purple-light)',
                marginBottom: '1.25rem', textTransform: 'uppercase',
              }}>
                <GraduationIcon size={14} /> Education
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem',
              }}>
                {edu.degree}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                {edu.institution}
              </p>
              <p style={{ color: 'var(--text-faint)', fontSize: '0.82rem', marginBottom: '1rem' }}>
                {edu.university}
              </p>
              <span className="chip">🎓 Graduated in {edu.year}</span>
            </motion.div>

            {/* Contact info card */}
            <motion.div 
              className="glass-card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
              transition={smoothSpring}
            >
              <p style={{
                fontFamily: 'var(--font-code)', fontSize: '0.72rem',
                letterSpacing: '0.08em', color: 'var(--purple-light)',
                textTransform: 'uppercase', marginBottom: '0.25rem',
              }}>Quick Info</p>

              {[
                { icon: <LocationIcon size={14} />, value: siteConfig.location, href: null },
                { icon: <MailIcon size={14} />, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: <PhoneIcon size={14} />, value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              ].map(({ icon, value, href }) => (
                <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ color: 'var(--purple)', flexShrink: 0 }}>{icon}</span>
                  {href ? (
                    <a href={href} style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}
                      className="hover:text-purple-light transition-colors">{value}</a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{value}</span>
                  )}
                </div>
              ))}

              {contact.socials.map(s => (
                <div key={s.icon} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ color: 'var(--purple)', flexShrink: 0 }}>
                    {s.icon === 'github' && <GithubIcon size={14} />}
                    {s.icon === 'linkedin' && <LinkedinIcon size={14} />}
                  </span>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    {s.label}
                  </a>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
