import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { title, description, stats } = portfolioData.about;

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{title}</h2>

          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                {description}
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-0.25rem', background: 'linear-gradient(to right, var(--color-accent), #9333ea)', borderRadius: '0.5rem', filter: 'blur(8px)', opacity: 0.25 }}></div>
              <div style={{ position: 'relative', backgroundColor: 'var(--color-secondary)', padding: '2rem', borderRadius: '0.5rem', border: '1px solid #334155' }}>
                <code style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>
                  <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#fde047' }}>developer</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;name: <span style={{ color: '#4ade80' }}>'{portfolioData.hero.name}'</span>,
                  <br />
                  &nbsp;&nbsp;skills: [<span style={{ color: '#4ade80' }}>'Fun'</span>, <span style={{ color: '#4ade80' }}>'Fun'</span>, <span style={{ color: '#4ade80' }}>'Fun'</span>],
                  <br />
                  &nbsp;&nbsp;hardWorker: <span style={{ color: '#60a5fa' }}>true</span>,
                  <br />
                  &nbsp;&nbsp;problemSolver: <span style={{ color: '#60a5fa' }}>true</span>,
                  <br />
                  &nbsp;&nbsp;hireable: <span style={{ color: '#60a5fa' }}>function</span>() {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c084fc' }}>return</span> <span style={{ color: '#60a5fa' }}>true</span>;
                  <br />
                  &nbsp;&nbsp;{'}'}
                  <br />
                  {'}'};
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
