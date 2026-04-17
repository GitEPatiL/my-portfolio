import { useState } from 'react';
import { contact, siteConfig } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';
import './Contact.css';

/* ── Inline SVG icons ──────────────────────────────────────── */
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1
      0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5
      19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2
      0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16
      16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2
      2 0 0122 16.92z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0
      00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0
      0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16
      2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07
      5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3
      6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* ── Contact info card data ─────────────────────────────────── */
function buildContactCards(siteConfig, contact) {
  const github   = contact.socials.find(s => s.icon === 'github');
  const linkedin = contact.socials.find(s => s.icon === 'linkedin');

  return [
    {
      id:    'email',
      label: 'Email',
      value: siteConfig.email,
      href:  `mailto:${siteConfig.email}`,
      icon:  <MailIcon />,
    },
    {
      id:    'phone',
      label: 'Phone',
      value: siteConfig.phone,
      href:  `tel:${siteConfig.phone}`,
      icon:  <PhoneIcon />,
    },
    {
      id:    'github',
      label: 'GitHub',
      value: 'github.com/GitEPatiL',
      href:  github?.href || '#',
      icon:  <GitHubIcon />,
      external: true,
    },
    {
      id:    'linkedin',
      label: 'LinkedIn',
      value: 'aviraj-gite',
      href:  linkedin?.href || '#',
      icon:  <LinkedInIcon />,
      external: true,
    },
  ];
}

/* ── Front-end only form logic ──────────────────────────────── */
const INIT_FORM   = { name: '', email: '', message: '' };
const INIT_ERRORS = { name: '',  email: '',  message: ''  };

function validate(form) {
  const errors = { ...INIT_ERRORS };
  if (!form.name.trim())
    errors.name = 'Name is required.';
  if (!form.email.trim())
    errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Enter a valid email address.';
  if (!form.message.trim())
    errors.message = 'Message is required.';
  else if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
}

/* ── Main component ────────────────────────────────────────── */
export default function Contact() {
  const [form,    setForm]    = useState(INIT_FORM);
  const [errors,  setErrors]  = useState(INIT_ERRORS);
  const [touched, setTouched] = useState({});

  const cards = buildContactCards(siteConfig, contact);

  /* Field change — validate touched fields live */
  const handleChange = e => {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (touched[name]) {
      setErrors(validate(next));
    }
  };

  /* Mark field touched on blur, show its error */
  const handleBlur = e => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  /* Submit — opens user's mail client with pre-filled content */
  const handleSubmit = e => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return; // stop if invalid

    // Build mailto link — works 100% frontend, no backend needed
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const hasErrors   = Object.values(errors).some(Boolean);

  return (
    <section id="contact">
      <div className="container">

        {/* Heading */}
        <p className="section-tag">{`// get in touch`}</p>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="section-divider" aria-hidden="true" />

        {/* Body */}
        <motion.div
          className="contact__body"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* ── Left: CTA + contact cards ─────────────── */}
          <div>
            <h3 className="contact__heading">{contact.heading}</h3>
            <p className="contact__subheading">{contact.subheading}</p>

            <div className="contact__cards" aria-label="Contact information">
              {cards.map(card => (
                <a
                  key={card.id}
                  href={card.href}
                  className="contact__card"
                  {...(card.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={`${card.label}: ${card.value}`}
                >
                  <span className="contact__card-icon">{card.icon}</span>
                  <div>
                    <p className="contact__card-label">{card.label}</p>
                    <p className="contact__card-value">{card.value}</p>
                  </div>
                  <span className="contact__card-arrow">
                    <ArrowRightIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ──────────────────────────── */}
          <div className="contact__form-card">
            <p className="contact__form-title">Send a Message</p>
            <p className="contact__form-note">
              {`// Opens your mail client — no backend needed`}
            </p>

            <form className="cf-form" onSubmit={handleSubmit} noValidate>

              {/* Name + Email row */}
              <div className="cf-row">
                <div className="cf-group">
                  <label className="cf-label" htmlFor="cf-name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    className={`cf-input ${touched.name && errors.name ? 'invalid' : ''}`}
                    placeholder="Aviraj Gite"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                  />
                  {touched.name && errors.name && (
                    <span className="cf-error" role="alert">{errors.name}</span>
                  )}
                </div>

                <div className="cf-group">
                  <label className="cf-label" htmlFor="cf-email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    className={`cf-input ${touched.email && errors.email ? 'invalid' : ''}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                  />
                  {touched.email && errors.email && (
                    <span className="cf-error" role="alert">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="cf-group">
                <label className="cf-label" htmlFor="cf-message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  className={`cf-textarea ${touched.message && errors.message ? 'invalid' : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.message && errors.message && (
                  <span className="cf-error" role="alert">{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="cf-submit"
                disabled={Object.keys(touched).length > 0 && hasErrors}
                id="contact-submit-btn"
              >
                Open Mail Client →
              </button>

              <p className="cf-hint">
                Prefer email directly?{' '}
                <a href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
