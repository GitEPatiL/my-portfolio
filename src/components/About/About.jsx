import { useRef } from 'react';
import { about, siteConfig } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className={`about__grid ${visible ? 'fade-in-up' : ''}`} style={{ opacity: visible ? 1 : 0 }}>

          {/* Text */}
          <div className="about__text">
            <p className="section-tag">// who I am</p>
            <h2 className="section-title">About <span>Me</span></h2>
            <div className="section-divider" aria-hidden="true" />
            <p>{about.intro}</p>
            <p>{about.details}</p>
            <p>
              📍 Based in <strong>{siteConfig.location}</strong> &nbsp;·&nbsp;
              💼 Open to <strong>freelance & full-time roles</strong>
            </p>

            {/* Stats */}
            <div className="about__stats" aria-label="Quick stats">
              {about.stats.map((stat, i) => (
                <div key={i} className="about__stat">
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="about__visual">
            <div className="about__avatar-wrap" aria-hidden="true">
              <div className="about__avatar-border" />
              <div className="about__avatar-bg">
                <span className="about__avatar-emoji" role="img" aria-label="Developer">👨‍💻</span>
              </div>
            </div>
            <div className="about__info-chip">
              <span className="about__info-dot" aria-hidden="true" />
              Available for work
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
