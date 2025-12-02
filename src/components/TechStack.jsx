import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const TechStack = () => {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1.5rem',
                                backgroundColor: 'var(--color-secondary)',
                                borderRadius: '0.75rem',
                                border: '1px solid #334155',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                                e.currentTarget.style.backgroundColor = '#1e293b';
                                e.currentTarget.querySelector('svg').style.transform = 'scale(1.1)';
                                e.currentTarget.querySelector('span').style.color = 'var(--color-text)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#334155';
                                e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                                e.currentTarget.querySelector('svg').style.transform = 'scale(1)';
                                e.currentTarget.querySelector('span').style.color = 'var(--color-muted)';
                            }}
                        >
                            <skill.icon
                                style={{ fontSize: '3rem', marginBottom: '1rem', color: skill.color, transition: 'transform 0.3s ease' }}
                            />
                            <span style={{ fontWeight: '500', color: 'var(--color-muted)', transition: 'color 0.3s ease' }}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
