import { useState, useRef } from 'react';
import { contact } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Contact.css';

const SocialIcon = ({ icon }) => {
  if (icon === 'github') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  );
  if (icon === 'linkedin') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
  if (icon === 'twitter') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  );
  return null;
};

const INIT = { name: '', email: '', message: '' };

export default function Contact() {
  const [form,    setForm]    = useState(INIT);
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const ref     = useRef(null);
  const visible = useScrollReveal(ref, 0.1);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send (replace with real API/Formspree in production)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm(INIT);
    }, 1200);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <p className="section-tag">// say hello</p>
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
          Get In <span>Touch</span>
        </h2>

        <div
          className={`contact__inner ${visible ? 'fade-in-up' : ''}`}
          style={{ opacity: visible ? 1 : 0 }}
        >
          {/* Left */}
          <div className="contact__text">
            <h3 className="section-title" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
              {contact.heading}
            </h3>
            <p className="contact__sub">{contact.subheading}</p>

            <a href={`mailto:${contact.email}`} className="contact__email-btn">
              <span>✉</span> {contact.email}
            </a>

            <p className="contact__socials-title">Find me on</p>
            <div className="contact__socials-list">
              {contact.socials.map(s => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="contact__social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <SocialIcon icon={s.icon} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="form__success" role="alert">
                ✅ Message sent! I'll get back to you soon.
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="form__submit"
                  disabled={loading || !form.name || !form.email || !form.message}
                >
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
