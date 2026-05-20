// src/components/Experience/Experience.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import { fadeUp, staggerContainer, VIEWPORT, smoothSpring, floating } from '../../animations';

export default function Experience() {
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

  /* Scroll-Linked Timeline Progress */
  const { scrollYProgress: timelineProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  const lineScale = useSpring(timelineProgress, smoothSpring);

  return (
    <motion.section 
      id="experience" 
      ref={sectionRef}
      style={{ 
        background: 'var(--surface)', 
        position: 'relative', 
        overflow: 'hidden',
        y: prefersReducedMotion ? 0 : y,
        opacity: prefersReducedMotion ? 1 : opacity,
        scale: prefersReducedMotion ? 1 : scale
      }}
    >
      {/* Decorative orb */}
      <motion.div 
        animate={prefersReducedMotion ? {} : floating.animate}
        aria-hidden="true" 
        style={{
          position: 'absolute', top: '10%', left: '-15%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >

          <motion.h2 className="section-title" variants={fadeUp}>
            Work <span className="grad-text">Experience</span>
          </motion.h2>
          <motion.div className="section-neon-line" variants={fadeUp} />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            position: 'relative',
            paddingLeft: '2rem',
          }}
        >
          {/* Vertical line - scroll linked */}
          <motion.div
            style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, var(--purple), var(--blue), transparent)',
              transformOrigin: 'top',
              scaleY: prefersReducedMotion ? 1 : lineScale
            }}
          />

          {experience.map((exp) => (
            <motion.article key={exp.id} variants={fadeUp} style={{ position: 'relative', marginBottom: '3rem' }}>
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={VIEWPORT}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                style={{
                  position: 'absolute',
                  left: '-2.55rem',
                  top: '1.5rem',
                  width: 14, height: 14,
                  borderRadius: '50%',
                  background: 'var(--grad)',
                  border: '3px solid var(--bg)',
                  boxShadow: '0 0 20px rgba(138,43,226,0.6)',
                }}
              />

              {/* Card */}
              <motion.div 
                className="glass-card" 
                style={{ padding: '2rem' }}
                whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
                transition={smoothSpring}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700, fontSize: '1.1rem',
                      color: 'var(--text)', marginBottom: '0.25rem',
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.8rem', color: 'var(--purple-light)',
                    }}>
                      @ {exp.company}
                    </p>
                  </div>
                  <time style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.72rem', letterSpacing: '0.06em',
                    color: 'var(--text-faint)',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: '999px',
                    height: 'fit-content',
                  }}>
                    {exp.period}
                  </time>
                </div>

                {/* Description */}
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.9rem',
                  lineHeight: 1.7, marginBottom: '1.25rem',
                }}>
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {exp.highlights.map((hl, i) => (
                    <li key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
                      color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6,
                    }}>
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: 'var(--grad)', flexShrink: 0, marginTop: '0.5rem',
                      }} />
                      {hl}
                    </li>
                  ))}
                </ul>

              </motion.div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
