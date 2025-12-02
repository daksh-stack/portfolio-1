import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ maxWidth: '42rem', margin: '0 auto' }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', marginBottom: '2rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href={`mailto:${contact.email}`} className="btn-primary btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </a>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            {contact.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                style={{ color: 'var(--color-muted)', fontWeight: '500' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-muted)'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
