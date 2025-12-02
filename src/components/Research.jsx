import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import TiltCard from './TiltCard';
import { FaFlask, FaAtom, FaLeaf, FaSpaceShuttle } from 'react-icons/fa';

const Research = () => {
    const { research } = portfolioData;

    if (!research || research.length === 0) return null;

    const getIcon = (title) => {
        if (title.toLowerCase().includes('eco') || title.toLowerCase().includes('green')) return <FaLeaf />;
        if (title.toLowerCase().includes('battery') || title.toLowerCase().includes('energy')) return <FaAtom />;
        if (title.toLowerCase().includes('space') || title.toLowerCase().includes('astro')) return <FaSpaceShuttle />;
        return <FaFlask />;
    };

    return (
        <section id="research" className="py-20" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <h2 className="section-title">Research Work</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {research.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TiltCard className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    paddingBottom: '0.5rem'
                                }}>
                                    <div style={{ fontSize: '2rem', color: 'var(--color-accent)' }}>
                                        {getIcon(item.title)}
                                    </div>
                                    <span style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.85rem',
                                        color: 'var(--color-muted)',
                                        border: '1px solid var(--color-muted)',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>
                                        {item.date}
                                    </span>
                                </div>

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-text)',
                                    marginBottom: '1rem',
                                    lineHeight: '1.4'
                                }}>
                                    {item.title}
                                </h3>

                                <ul style={{
                                    listStyleType: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    flex: 1
                                }}>
                                    {item.description.map((point, i) => (
                                        <li key={i} style={{
                                            color: 'var(--color-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                            display: 'flex',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: 'var(--color-accent)' }}>▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
