import { skills } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations';
import './Skills.css';

/* Flatten all skill names for the "all skills" strip */
const allSkillNames = skills.flatMap(g => g.items.map(s => s.name));

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        {/* Section heading */}
        <p className="section-tag">{`// what I work with`}</p>
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="section-divider" aria-hidden="true" />

        <motion.div
          className="skills__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((group, gi) => (
            <motion.div key={gi} className="skill-cat" variants={fadeIn}>
              <div className="skill-cat__header">
                <span className="skill-cat__icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="skill-cat__name">{group.category}</h3>
              </div>

              <div className="skill-cat__badges" aria-label={`${group.category} skills`}>
                {group.items.map((skill, si) => (
                  <span key={si} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills__all"
          aria-label="All technologies"
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p className="skills__all-label" variants={fadeIn}>All Technologies</motion.p>
          <div className="skills__all-badges">
            {allSkillNames.map((name, i) => (
              <motion.span key={i} className="skill-badge" variants={fadeIn}>{name}</motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
