import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-content">
        <motion.h1 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Hello, I'm <span>Your Name</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.08, duration: 0.6 }}>
          Computer Science student | Aspiring Software Engineer | Full-stack Developer
        </motion.p>
        <motion.a href="#projects" className="hero-button" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          View Projects
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
