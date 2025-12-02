import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import TiltCard from './TiltCard';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    const { experience } = portfolioData;

    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="py-20" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TiltCard className="card">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                                                {job.role}
                                            </h3>
                                            <div style={{ fontSize: '1.1rem', color: 'var(--color-accent)', fontWeight: '500' }}>
                                                {job.company}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                                                <FaCalendarAlt size={14} />
                                                <span>{job.duration}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                                                <FaBriefcase size={14} />
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {job.description.map((point, i) => (
                                            <li key={i} style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
