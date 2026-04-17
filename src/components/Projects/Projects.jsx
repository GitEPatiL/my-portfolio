import { projects } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations';
import PropTypes from 'prop-types';
import './Projects.css';

/* ── Inline SVG icons ──────────────────────────────────────── */
const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0
      00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020
      4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38
      0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005
      4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44
      7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ── ProjectCard — shared card used in both rows ────────────── */
function ProjectCard({ project, index, variant = 'featured' }) {
  const isFeatured  = variant === 'featured';
  const cardClass   = `pcard ${isFeatured ? 'pcard--featured' : 'pcard--secondary'}`;
  const indexLabel  = String(index + 1).padStart(2, '0');

  return (
    <motion.article className={cardClass} variants={fadeIn}>
      {/* Featured label */}
      {project.featured && (
        <span className="pcard__featured" aria-label="Featured project">
          ★ Featured
        </span>
      )}

      {/* Top row: project number + icon links */}
      <div className="pcard__top">
        <span className="pcard__number">#{indexLabel}</span>
        <div className="pcard__links">
          {project.github && project.github !== '#' ? (
            <a
              href={project.github}
              className="pcard__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository`}
            >
              <GitHubIcon />
            </a>
          ) : (
            <span
              className="pcard__link"
              style={{ opacity: 0.3, cursor: 'not-allowed' }}
              title="Repository not public"
              aria-hidden="true"
            >
              <GitHubIcon />
            </span>
          )}

          {project.live && project.live !== '#' ? (
            <a
              href={project.live}
              className="pcard__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — Live demo`}
            >
              <ExternalIcon />
            </a>
          ) : (
            <span
              className="pcard__link"
              style={{ opacity: 0.3, cursor: 'not-allowed' }}
              title="Live demo not available"
              aria-hidden="true"
            >
              <ExternalIcon />
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="pcard__title">{project.title}</h3>

      {/* Description */}
      <p className="pcard__desc">{project.description}</p>

      {/* Tech stack */}
      <div className="pcard__stack" aria-label="Tech stack">
        {project.tags.map(tag => (
          <span key={tag} className="pcard__tech">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    featured: PropTypes.bool,
    github: PropTypes.string,
    live: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  variant: PropTypes.string,
};

/* ── Main component ────────────────────────────────────────── */
export default function Projects() {
  // Split: featured projects go in the top row, rest below
  const featured   = projects.filter(p => p.featured);
  const secondary  = projects.filter(p => !p.featured);

  return (
    <section id="projects">
      <div className="container">

        {/* Heading */}
        <p className="section-tag">{`// what I've built`}</p>
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="section-divider" aria-hidden="true" />

        <p className="projects__intro">
          A selection of projects I&apos;ve built — from full-stack web applications to
          frontend experiments. Each one was a real opportunity to learn and ship.
        </p>

        {/* Featured row */}
        {featured.length > 0 && (
          <motion.div
            className="projects__featured"
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} variant="featured" />
            ))}
          </motion.div>
        )}

        {/* Secondary row */}
        {secondary.length > 0 && (
          <motion.div
            className="projects__secondary"
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {secondary.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={featured.length + i}
                variant="secondary"
              />
            ))}
          </motion.div>
        )}

        {/* GitHub CTA */}
        <div className="projects__github-cta">
          <a
            href="https://github.com/GitEPatiL"
            className="projects__github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            View all on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  );
}
