import { useState, useRef } from 'react';
import { projects } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Projects.css';

const FILTERS = ['All', 'Featured', 'React', 'Node.js', 'JavaScript'];

/* Inline SVG icons */
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const ref     = useRef(null);
  const visible = useScrollReveal(ref, 0.1);

  const filtered = projects.filter(p => {
    if (filter === 'All')      return true;
    if (filter === 'Featured') return p.featured;
    return p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <p className="section-tag">// what I've built</p>
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="section-divider" aria-hidden="true" />

        {/* Filter pills */}
        <div className="projects__filter" role="group" aria-label="Filter projects">
          {FILTERS.map(f => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={`projects__grid ${visible ? 'fade-in-up' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
          {filtered.map(project => (
            <article key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <span className="project-card__featured-badge" aria-label="Featured project">★ Featured</span>
              )}

              <div className="project-card__header">
                <span className="project-card__folder" aria-hidden="true">📁</span>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.live}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags" aria-label="Technologies used">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
