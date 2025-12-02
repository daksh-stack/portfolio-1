import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { name, title, description, actions } = portfolioData.hero;
  const [displayedName, setDisplayedName] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Typing speed

    return () => clearInterval(intervalId);
  }, [name]);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '5rem' }}>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontSize: '1.125rem', letterSpacing: '0.1em' }}>
            &lt;HELLO_WORLD /&gt;
          </h2>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1.1, textShadow: 'var(--glow-text)', minHeight: '1.1em' }}>
            {displayedName}
            <span className="animate-pulse">|</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 'bold', color: 'var(--color-muted)', marginBottom: '2rem' }}>
            {title}
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            {description}
          </p>

          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap', marginBottom: '4rem' }}>
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={action.primary ? 'btn-primary btn' : 'btn-outline btn'}
              >
                {action.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <a href="#about" style={{ color: 'var(--color-muted)' }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
