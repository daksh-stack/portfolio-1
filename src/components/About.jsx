import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profilePic from "../assets/profile.jpg"; // Replace with your photo path
import NeuralBackground from "./NeuralBackground";

const About = () => {
  // reuse the Skills-style presets so About elements animate like skill cards
  const presets = [
    { initial: { opacity: 0, y: 18, rotate: -2 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, whileHover: { scale: 1.02 } },
    { initial: { opacity: 0, x: -18, scale: 0.98 }, whileInView: { opacity: 1, x: 0, scale: 1 }, whileHover: { scale: 1.03 } },
    { initial: { opacity: 0, x: 18, skewY: 6 }, whileInView: { opacity: 1, x: 0, skewY: 0 }, whileHover: { scale: 1.025 } },
    { initial: { opacity: 0, y: 24, rotate: 4 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, whileHover: { scale: 1.04 } },
  ];

  return (
    <section className="about" id="about">
      <NeuralBackground nodeCount={80} />
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={presets[0].initial}
          whileInView={presets[0].whileInView}
          whileHover={presets[0].whileHover}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profilePic} alt="Your Name" className="ring" />
        </motion.div>

        <div className="about-text">
          <motion.h2
            initial={presets[1].initial}
            whileInView={presets[1].whileInView}
            whileHover={presets[1].whileHover}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.04 }}
          >
            About Me
          </motion.h2>

          <motion.p
            initial={presets[2].initial}
            whileInView={presets[2].whileInView}
            whileHover={presets[2].whileHover}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            I am a passionate Computer Science student enthusiastic about full-stack development,
            algorithms, and AI/ML technologies. Currently in my third semester, I am honing my
            programming skills and building real-world projects to prepare for a professional career.
          </motion.p>

          <motion.p
            initial={presets[3].initial}
            whileInView={presets[3].whileInView}
            whileHover={presets[3].whileHover}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            My key strengths include strong problem-solving abilities, proficiency in React, Java,
            Python, and a keen interest in scalable system design and AI research.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
