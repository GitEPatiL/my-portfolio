// src/components/Hero/Hero.jsx
import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { siteConfig, contact } from '../../data/portfolioData';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon } from '../ui/Icons';
import { smoothSpring, floating } from '../../animations';

/* ── Smooth-scroll helper ─────────────────────────────────── */
const scrollTo = (selector) => (e) => {
  e.preventDefault();
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

/* ── Framer Motion variants ───────────────────────────────── */
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const ITEM = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ...smoothSpring } },
};

/* ── Blinking typewriter cursor ───────────────────────────── */
function Cursor() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: 2,
        height: '0.8em',
        background: '#22d3ee',
        marginLeft: '0.15em',
        verticalAlign: 'text-bottom',
        borderRadius: 1,
        animation: 'blink 0.75s step-end infinite',
      }}
    />
  );
}

/* ── Main Component ───────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* ── Scroll Parallax ────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -15 : -30]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);

  const y = useSpring(rawY, smoothSpring);
  const opacity = useSpring(rawOpacity, smoothSpring);
  const scale = useSpring(rawScale, smoothSpring);

  /* Cursor spotlight */
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const spotX  = useSpring(mouseX, smoothSpring);
  const spotY  = useSpring(mouseY, smoothSpring);

  const handleMouseMove = (e) => {
    if (isMobile || prefersReducedMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  const handleMouseLeave = () => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  };

  return (
    <>
      <motion.section
        id="hero"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          minHeight: '60vh',
          overflow: 'hidden', 
          display: 'flex',
          alignItems: 'center',
          background: '#050608',
          backgroundImage: "url('/hero-portrait.jpeg')",
          backgroundSize: 'contain',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          y: prefersReducedMotion ? 0 : y,
          opacity: prefersReducedMotion ? 1 : opacity,
          scale: prefersReducedMotion ? 1 : scale,
        }}
      >
        {/* LAYER 1 — Gradient overlays */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(
              to right,
              #050608 30%,
              rgba(5,6,8,0.92) 42%,
              rgba(5,6,8,0.55) 55%,
              rgba(5,6,8,0.12) 68%,
              transparent 82%
            )`,
          }} />
          <div style={{
            position: 'absolute', top: 1, left: 0, right: 0, height: '25%',
            background: 'linear-gradient(to bottom, rgba(5,6,8,0.55), transparent)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%',
            background: 'linear-gradient(to top, #050608 20%, transparent)',
          }} />
        </div>

        {/* LAYER 2 — Grid texture */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(138,43,226,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(138,43,226,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '62px 62px',
            maskImage: 'radial-gradient(ellipse at 20% 50%, black 25%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 20% 50%, black 25%, transparent 65%)',
          }}
        />

        {/* LAYER 3 — Ambient orbs (floating) */}
        <motion.div
          animate={prefersReducedMotion ? {} : floating.animate}
          aria-hidden="true" style={{
          position: 'absolute', zIndex: 4, pointerEvents: 'none',
          top: '-10%', left: '-6%',
          width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.22) 0%, transparent 65%)',
          filter: 'blur(2px)',
        }} />
        <motion.div
          animate={prefersReducedMotion ? {} : floating.animate}
          aria-hidden="true" style={{
          position: 'absolute', zIndex: 4, pointerEvents: 'none',
          bottom: '-8%', left: '5%',
          width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,191,255,0.11) 0%, transparent 65%)',
          filter: 'blur(2px)',
        }} />

        {/* LAYER 4 — Cursor spotlight */}
        {!isMobile && !prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute', zIndex: 5,
              left: spotX, top: spotY,
              width: 680, height: 680, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(138,43,226,0.10) 0%, rgba(0,191,255,0.04) 45%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* LAYER 5 — Text content */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 6,
            display: 'flex',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: 'var(--nav-h)',
            paddingBottom: '4rem',
          }}
        >
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 620,
            }}
          >
            <motion.p
              variants={ITEM}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.82rem, 1.1vw, 1rem)',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#22d3ee',
                marginBottom: '1rem',
                marginTop:'-1rem'
              }}
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.95 }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #ffffff 0%, #cffafe 28%, #c4b5fd 60%, #ffffff 88%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.4))',
                margin: 0,
              }}
            >
              Aviraj Bhausaheb Gite
            </motion.h1>

            <motion.p
              variants={ITEM}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 2vw, 1.65rem)',
                fontWeight: 600,
                color: '#e5e7eb',
                marginTop: '1.5rem',
              }}
            >
              Full Stack MERN Developer<Cursor />
            </motion.p>

            <motion.p
              variants={ITEM}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.6vw, 1.35rem)',
                fontWeight: 500,
                color: '#22d3ee',
                lineHeight: 1.55,
                marginTop: '1.25rem',
                maxWidth: 540,
              }}
            >
              I build scalable, immersive, and visually stunning digital products.
            </motion.p>

            <motion.p
              variants={ITEM}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.88rem, 1.25vw, 1rem)',
                fontWeight: 400,
                color: '#9ca3af',
                lineHeight: 1.9,
                marginTop: '1.1rem',
                maxWidth: 500,
              }}
            >
              Passionate about creating modern web applications with React, Node.js,
              Express.js, MongoDB, and advanced frontend animations.
            </motion.p>

            <motion.div
              variants={ITEM}
              style={{
                marginTop: '1.75rem',
                width: 68, height: 2, borderRadius: 999,
                background: 'linear-gradient(90deg, #8a2be2, #22d3ee)',
              }}
            />

            <motion.div
              variants={ITEM}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}
            >
              <MagneticButton as="a" href="#projects" className="btn-primary"
                onClick={scrollTo('#projects')} id="hero-view-projects">
                View Projects ↓
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="btn-ghost"
                onClick={scrollTo('#contact')} id="hero-contact-me">
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={ITEM}
              style={{
                display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
                marginTop: '1.75rem', paddingTop: '1.1rem',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)',
                fontFamily: 'var(--font-body)',
              }}>
                <LocationIcon size={12} /> {siteConfig.location}
              </span>
              <a href={`mailto:${siteConfig.email}`} style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)',
                fontFamily: 'var(--font-body)',
              }}>
                <MailIcon size={12} /> {siteConfig.email}
              </a>
            </motion.div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: '2rem',
            left: '50%', transform: 'translateX(-50%)',
            zIndex: 5,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '0.4rem',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-code)',
            fontSize: '0.58rem', letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase',
          }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 1, height: 44, borderRadius: 999,
              background: 'linear-gradient(to bottom, #8a2be2, rgba(0,191,255,0.4), transparent)',
            }}
          />
        </motion.div>

      </motion.section>

      <aside
        aria-label="Social profiles"
        className="hidden lg:flex"
        style={{
          position: 'fixed', left: '1.5rem', bottom: '3rem',
          zIndex: 50, flexDirection: 'column', alignItems: 'center', gap: '0.85rem',
        }}
      >
        {contact.socials.map(s => (
          <motion.a
            key={s.icon}
            href={s.href} target="_blank" rel="noopener noreferrer"
            aria-label={s.label}
            style={{ color: 'rgba(255,255,255,0.22)' }}
            whileHover={{ color: '#22d3ee', y: -3, scale: 1.15 }}
            transition={{ duration: 0.2 }}
          >
            {s.icon === 'github'   && <GithubIcon size={18} />}
            {s.icon === 'linkedin' && <LinkedinIcon size={18} />}
          </motion.a>
        ))}
        <div style={{
          width: 1, height: 56,
          background: 'linear-gradient(to bottom, rgba(138,43,226,0.55), transparent)',
        }} />
      </aside>

      <aside
        aria-label="Email address"
        className="hidden lg:flex"
        style={{
          position: 'fixed', right: '1.5rem', bottom: '3rem',
          zIndex: 50, flexDirection: 'column', alignItems: 'center', gap: '0.85rem',
        }}
      >
        <motion.a
          href={`mailto:${contact.email}`}
          style={{
            fontFamily: 'var(--font-code)',
            fontSize: '0.64rem', letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.22)', writingMode: 'vertical-rl',
          }}
          whileHover={{ color: '#22d3ee' }}
          transition={{ duration: 0.2 }}
        >
          {contact.email}
        </motion.a>
        <div style={{
          width: 1, height: 56,
          background: 'linear-gradient(to bottom, rgba(138,43,226,0.55), transparent)',
        }} />
      </aside>
    </>
  );
}
