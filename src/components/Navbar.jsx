import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    padding: scrolled ? '1rem 0' : '1.5rem 0',
    backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <div className="container flex justify-between items-center">
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>
          &lt;{portfolioData.hero.name.split(' ')[0]} /&gt;
        </a>

        {/* Desktop Menu */}
        <div className="hidden-mobile flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ color: 'var(--color-muted)', fontWeight: '500' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-muted)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'none' }} // Hidden for now as media queries handle display
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid #334155', overflow: 'hidden' }}
          >
            <div className="flex flex-col" style={{ padding: '1.5rem', gap: '1rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{ color: 'var(--color-muted)', fontWeight: '500', display: 'block' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
