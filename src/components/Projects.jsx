import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from './TiltCard';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>
                    <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.links.repo} style={{ color: 'var(--color-muted)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-muted)'}>
                      <FaGithub size={20} />
                    </a>
                    <a href={project.links.demo} style={{ color: 'var(--color-muted)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-muted)'}>
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'rgba(56, 189, 248, 0.8)', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
