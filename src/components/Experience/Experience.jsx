import { experience } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-tag">where I&apos;ve been</p>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="section-divider" aria-hidden="true" />

        <motion.div
          className="experience__timeline"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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
        </motion.div>
      </div>
    </section>
  );
}
