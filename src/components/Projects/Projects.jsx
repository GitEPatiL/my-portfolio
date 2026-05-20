// src/components/Projects/Projects.jsx
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { fadeUp, staggerContainer, VIEWPORT, TILT_AMOUNT, smoothSpring } from '../../animations';
import { GithubIcon, ExternalIcon } from '../ui/Icons';

/* ── Tilt card wrapper ────────────────────────────────────────── */
function TiltCard({ children, className = '', style = {} }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotX = useSpring(useTransform(rawY, v => -v * TILT_AMOUNT), smoothSpring);
  const rotY = useSpring(useTransform(rawX, v =>  v * TILT_AMOUNT), smoothSpring);

  const handleMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotX,
        rotateY: prefersReducedMotion ? 0 : rotY,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Project card ────────────────────────────────────────────── */
function ProjectCard({ project, index, prefersReducedMotion }) {
  const indexLabel = String(index + 1).padStart(2, '0');

  return (
    <motion.article variants={fadeUp}>
      <TiltCard>
        <motion.div
          className="glass-card"
          style={{
            padding: '1.75rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'default',
          }}
          whileHover={prefersReducedMotion ? {} : {
            y: -6, scale: 1.02,
            boxShadow: '0 0 60px rgba(138,43,226,0.15), 0 20px 40px rgba(0,0,0,0.4)',
            borderColor: 'rgba(138,43,226,0.45)',
          }}
          transition={smoothSpring}
        >
          {/* Hover glow overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(ellipse at top left, rgba(138,43,226,0.07) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Featured badge */}
          {project.featured && (
            <span
              style={{
                position: 'absolute',
                top: '1rem', right: '1rem',
                fontFamily: 'var(--font-code)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                padding: '0.2rem 0.6rem',
                background: 'var(--grad)',
                color: '#fff',
                borderRadius: '999px',
              }}
            >
              ★ FEATURED
            </span>
          )}

          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.72rem',
                color: 'var(--purple)',
                letterSpacing: '0.08em',
              }}
            >
              #{indexLabel}
            </span>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {project.github && project.github !== '#' ? (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — GitHub`}
                  style={{ color: 'var(--text-faint)' }}
                  whileHover={{ color: 'var(--purple-light)', scale: 1.15 }}
                >
                  <GithubIcon size={17} />
                </motion.a>
              ) : (
                <span style={{ color: 'var(--text-faint)', opacity: 0.3 }} title="Repo not public">
                  <GithubIcon size={17} />
                </span>
              )}
              {project.live && project.live !== '#' ? (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — Live demo`}
                  style={{ color: 'var(--text-faint)' }}
                  whileHover={{ color: 'var(--blue)', scale: 1.15 }}
                >
                  <ExternalIcon size={17} />
                </motion.a>
              ) : (
                <span style={{ color: 'var(--text-faint)', opacity: 0.3 }} title="Demo not available">
                  <ExternalIcon size={17} />
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700, fontSize: '1.05rem',
            color: 'var(--text)', lineHeight: 1.3,
          }}>
            {project.title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            flexGrow: 1,
          }}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {project.tags.map(tag => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>

          {/* Bottom neon line */}
          <div style={{ height: 1, background: 'var(--grad)', opacity: 0.3, marginTop: 'auto' }} />
        </motion.div>
      </TiltCard>
    </motion.article>
  );
}

/* ── Main component ──────────────────────────────────────────── */
export default function Projects() {
  const featured  = projects.filter(p => p.featured);
  const secondary = projects.filter(p => !p.featured);

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
      id="projects" 
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
            My <span className="grad-text">Projects</span>
          </motion.h2>
          <motion.div className="section-neon-line" variants={fadeUp} />
          <motion.p variants={fadeUp} style={{
            color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7,
            maxWidth: 560, marginBottom: '2.5rem',
          }}>
            A selection of projects I&apos;ve built — from full-stack web applications to
            frontend experiments. Each one was a real opportunity to learn and ship.
          </motion.p>
        </motion.div>

        {/* Featured row */}
        {featured.length > 0 && (
          <motion.div
            variants={staggerContainer(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem',
              perspective: '1000px',
            }}
          >
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} prefersReducedMotion={prefersReducedMotion} />
            ))}
          </motion.div>
        )}

        {/* Secondary row */}
        {secondary.length > 0 && (
          <motion.div
            variants={staggerContainer(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
              perspective: '1000px',
            }}
          >
            {secondary.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={featured.length + i} prefersReducedMotion={prefersReducedMotion} />
            ))}
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href="https://github.com/GitEPatiL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <GithubIcon size={16} />
            View all on GitHub ↗
          </motion.a>
        </motion.div>

      </div>
    </motion.section>
  );
}
