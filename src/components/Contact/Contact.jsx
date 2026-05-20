// src/components/Contact/Contact.jsx
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contact, siteConfig } from '../../data/portfolioData';
import { fadeUp, staggerContainer, VIEWPORT, smoothSpring, floating } from '../../animations';
import MagneticButton from '../ui/MagneticButton';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, ArrowRightIcon } from '../ui/Icons';

function buildCards(siteConfig, contact) {
  const github   = contact.socials.find(s => s.icon === 'github');
  const linkedin = contact.socials.find(s => s.icon === 'linkedin');
  return [
    { id: 'email',    label: 'Email',    value: siteConfig.email,         href: `mailto:${siteConfig.email}`, icon: <MailIcon size={18} /> },
    { id: 'phone',    label: 'Phone',    value: siteConfig.phone,         href: `tel:${siteConfig.phone}`,    icon: <PhoneIcon size={18} /> },
    { id: 'github',   label: 'GitHub',   value: 'github.com/GitEPatiL',   href: github?.href || '#',          icon: <GithubIcon size={18} />,   external: true },
    { id: 'linkedin', label: 'LinkedIn', value: 'aviraj-gite',            href: linkedin?.href || '#',        icon: <LinkedinIcon size={18} />, external: true },
  ];
}

const INIT = { name: '', email: '', message: '' };
const INIT_ERR = { name: '', email: '', message: '' };

function validate(form) {
  const e = { ...INIT_ERR };
  if (!form.name.trim())    e.name    = 'Name is required.';
  if (!form.email.trim())   e.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
  if (!form.message.trim()) e.message = 'Message is required.';
  else if (form.message.trim().length < 10) e.message = 'At least 10 characters.';
  return e;
}

export default function Contact() {
  const [form,    setForm]    = useState(INIT);
  const [errors,  setErrors]  = useState(INIT_ERR);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 5000);
  };
  const cards = buildCards(siteConfig, contact);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (touched[name]) setErrors(validate(next));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: siteConfig.name,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      showToast('Message sent successfully!', 'success');
      setForm(INIT);
      setTouched({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <motion.section 
      id="contact" 
      ref={sectionRef}
      style={{ 
        background: 'var(--bg)', 
        position: 'relative', 
        overflow: 'hidden',
        y: prefersReducedMotion ? 0 : y,
        opacity: prefersReducedMotion ? 1 : opacity,
        scale: prefersReducedMotion ? 1 : scale
      }}
    >
      {/* Decorative orbs */}
      <motion.div 
        animate={prefersReducedMotion ? {} : floating.animate}
        aria-hidden="true" 
        style={{
          position: 'absolute', bottom: '-10%', right: '-10%',
          width: 450, height: 450, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,191,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} 
      />
      <motion.div 
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        aria-hidden="true" 
        style={{
          position: 'absolute', top: '5%', left: '-15%',
          width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)',
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
            Contact <span className="grad-text">Me</span>
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

          {/* ── Left: CTA + contact cards ─────────────── */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '1.4rem', color: 'var(--text)',
                lineHeight: 1.3, marginBottom: '0.75rem',
              }}>
                {contact.heading}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {contact.subheading}
              </p>
            </div>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cards.map(card => (
                <motion.a
                  key={card.id}
                  href={card.href}
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none', color: 'inherit',
                  }}
                  whileHover={prefersReducedMotion ? {} : {
                    x: 4,
                    y: -4,
                    scale: 1.01,
                    borderColor: 'rgba(138,43,226,0.45)',
                    boxShadow: '0 0 30px rgba(138,43,226,0.15)',
                  }}
                  transition={smoothSpring}
                >
                  <span style={{
                    width: 40, height: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '0.5rem',
                    background: 'rgba(138,43,226,0.12)',
                    border: '1px solid rgba(138,43,226,0.2)',
                    color: 'var(--purple-light)', flexShrink: 0,
                  }}>
                    {card.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: 'var(--font-code)', fontSize: '0.68rem', color: 'var(--text-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {card.label}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {card.value}
                    </p>
                  </div>
                  <span style={{ color: 'var(--text-faint)', flexShrink: 0 }}>
                    <ArrowRightIcon size={14} />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Contact form ───────────────────── */}
          <motion.div 
            variants={fadeUp} 
            className="glass-card" 
            style={{ padding: '2rem' }}
            whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, boxShadow: '0 0 20px rgba(138,43,226,0.15)' }}
            transition={smoothSpring}
          >
            <p style={{
              fontFamily: 'var(--font-code)', fontSize: '0.8rem',
              color: 'var(--purple-light)', marginBottom: '0.25rem',
            }}>
              Send a Message
            </p>

            <AnimatePresence>
              {toast.show && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.75rem',
                    color: '#fff',
                    background: toast.type === 'success' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    border: `1px solid ${toast.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                    marginBottom: '1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  {toast.message}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                <div>
                  <label htmlFor="cf-name" style={{ display: 'block', fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: 'var(--text-faint)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    NAME <span aria-hidden="true" style={{ color: 'var(--purple)' }}>*</span>
                  </label>
                  <input
                    id="cf-name" name="name" type="text"
                    className={`cf-input ${touched.name && errors.name ? 'invalid' : ''}`}
                    placeholder="Aviraj Gite"
                    value={form.name} onChange={handleChange} onBlur={handleBlur}
                    autoComplete="name"
                  />
                  {touched.name && errors.name && (
                    <span role="alert" style={{ display: 'block', marginTop: '0.3rem', fontFamily: 'var(--font-code)', fontSize: '0.68rem', color: '#ff6b6b' }}>{errors.name}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-email" style={{ display: 'block', fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: 'var(--text-faint)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    EMAIL <span aria-hidden="true" style={{ color: 'var(--purple)' }}>*</span>
                  </label>
                  <input
                    id="cf-email" name="email" type="email"
                    className={`cf-input ${touched.email && errors.email ? 'invalid' : ''}`}
                    placeholder="you@example.com"
                    value={form.email} onChange={handleChange} onBlur={handleBlur}
                    autoComplete="email"
                  />
                  {touched.email && errors.email && (
                    <span role="alert" style={{ display: 'block', marginTop: '0.3rem', fontFamily: 'var(--font-code)', fontSize: '0.68rem', color: '#ff6b6b' }}>{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="cf-message" style={{ display: 'block', fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: 'var(--text-faint)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  MESSAGE <span aria-hidden="true" style={{ color: 'var(--purple)' }}>*</span>
                </label>
                <textarea
                  id="cf-message" name="message" rows={5}
                  className={`cf-textarea ${touched.message && errors.message ? 'invalid' : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={handleChange} onBlur={handleBlur}
                />
                {touched.message && errors.message && (
                  <span role="alert" style={{ display: 'block', marginTop: '0.3rem', fontFamily: 'var(--font-code)', fontSize: '0.68rem', color: '#ff6b6b' }}>{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <MagneticButton
                as="button"
                type="submit"
                className="btn-primary"
                id="contact-submit-btn"
                disabled={isSubmitting || (Object.keys(touched).length > 0 && hasErrors)}
                style={{ width: '100%', justifyContent: 'center', opacity: (isSubmitting || (Object.keys(touched).length > 0 && hasErrors)) ? 0.5 : 1 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </MagneticButton>

              <p style={{ textAlign: 'center', fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: 'var(--text-faint)' }}>
                Or email directly:{' '}
                <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--purple-light)' }}>
                  {siteConfig.email}
                </a>
              </p>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}
