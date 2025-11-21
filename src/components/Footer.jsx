import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="mailto:youremail@example.com" aria-label="Email">Email</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
