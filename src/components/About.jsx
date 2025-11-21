import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profilePic from "../assets/profile.jpg"; // Replace with your photo path

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Your Name" className="ring" />
        </div>
        <div className="about-text" style={{ animationDelay: "1s"}}>
          <h2>About Me</h2>
          <p>
            I am a passionate Computer Science student enthusiastic about full-stack development,
            algorithms, and AI/ML technologies. Currently in my third semester, I am honing my
            programming skills and building real-world projects to prepare for a professional career.
          </p>
          <p>
            My key strengths include strong problem-solving abilities, proficiency in React, Java,
            Python, and a keen interest in scalable system design and AI research.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
