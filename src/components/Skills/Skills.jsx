import { useRef } from 'react';
import { skills } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Skills.css';

export default function Skills() {
  const ref     = useRef(null);
  const visible = useScrollReveal(ref, 0.15);

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <p className="section-tag"> what I know</p>
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="section-divider" aria-hidden="true" />

        <div className={`skills__grid ${visible ? 'animate fade-in-up' : ''}`}>
          {skills.map((group, gi) => (
            <div key={gi} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skill-card__title">{group.category}</h3>
              </div>

              {group.items.map((skill, si) => (
                <div key={si} className="skill-item">
                  <div className="skill-item__top">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__pct">{skill.level}%</span>
                  </div>
                  <div className="skill-item__track" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={skill.name}>
                    <div
                      className="skill-item__fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
