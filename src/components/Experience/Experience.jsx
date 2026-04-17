import { useRef } from 'react';
import { experience } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const ref     = useRef(null);
  const visible = useScrollReveal(ref, 0.1);

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <p className="section-tag">// where I've been</p>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="section-divider" aria-hidden="true" />

        <div
          className={`experience__timeline ${visible ? 'fade-in-up' : ''}`}
          style={{ opacity: visible ? 1 : 0 }}
        >
          {experience.map(exp => (
            <article key={exp.id} className="exp-item">
              <span className="exp-item__dot" aria-hidden="true" />
              <div className="exp-item__card">
                <time className="exp-item__period">{exp.period}</time>
                <h3 className="exp-item__role">{exp.role}</h3>
                <p className="exp-item__company">@ {exp.company}</p>
                <p className="exp-item__desc">{exp.description}</p>
                <ul className="exp-item__highlights" aria-label="Key highlights">
                  {exp.highlights.map((hl, i) => (
                    <li key={i} className="exp-item__highlight">{hl}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
