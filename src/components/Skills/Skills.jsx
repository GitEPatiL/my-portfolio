// src/components/Skills/Skills.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { fadeUp, staggerContainer, scaleIn, VIEWPORT, smoothSpring, floating } from '../../animations';

const allSkillNames = skills.flatMap(g => g.items.map(s => s.name));

export default function Skills() {
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
      id="skills" 
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
      {/* Decorative background blobs */}
      <motion.div 
        animate={prefersReducedMotion ? {} : floating.animate}
        aria-hidden="true" 
        style={{
          position: 'absolute', top: '20%', right: '-10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,191,255,0.08) 0%, transparent 70%)',
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
            My <span className="grad-text">Skills</span>
          </motion.h2>
          <motion.div className="section-neon-line" variants={fadeUp} />
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              variants={fadeUp}
              className="glass-card"
              style={{ padding: '1.75rem' }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
              transition={smoothSpring}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span style={{
                  fontSize: '1.3rem',
                  width: 40, height: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(138,43,226,0.12)',
                  border: '1px solid rgba(138,43,226,0.25)',
                  borderRadius: '0.5rem',
                }} aria-hidden="true">{group.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem', fontWeight: 700,
                  color: 'var(--text)',
                }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {group.items.map((skill, si) => (
                  <div key={si}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      marginBottom: '0.3rem',
                    }}>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: 'var(--text-faint)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div style={{
                      height: 4, background: 'rgba(255,255,255,0.06)',
                      borderRadius: 999, overflow: 'hidden', position: 'relative'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: si * 0.1, ...smoothSpring }}
                        style={{
                          height: '100%',
                          background: 'var(--grad)',
                          borderRadius: 999,
                          position: 'relative'
                        }}
                      >
                        {/* Leading edge glow */}
                        <motion.div 
                          style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: '20px',
                            background: 'white',
                            filter: 'blur(5px)',
                            opacity: 0.8
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                {group.items.map((skill, si) => (
                  <span key={si} className="chip">{skill.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── All Technologies strip ─────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="glass-card"
          style={{ padding: '2rem' }}
          whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
          transition={smoothSpring}
        >
          <p style={{
            fontFamily: 'var(--font-code)',
            fontSize: '0.72rem', letterSpacing: '0.1em',
            color: 'var(--purple-light)', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            All Technologies
          </p>
          <motion.div
            variants={staggerContainer(0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          >
            {allSkillNames.map((name, i) => (
              <motion.span
                key={i}
                variants={scaleIn}
                className="chip"
                whileHover={prefersReducedMotion ? {} : { scale: 1.08, borderColor: 'rgba(138,43,226,0.6)' }}
                transition={smoothSpring}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
