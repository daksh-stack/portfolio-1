import { portfolioData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer style={{ padding: '1.5rem 0', backgroundColor: 'var(--color-secondary)', textAlign: 'center' }}>
      <div className="container">
        <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
          Designed & Built by <span style={{ color: 'var(--color-accent)' }}>{portfolioData.hero.name}</span>
        </p>
        <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
