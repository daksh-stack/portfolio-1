import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import NeuralBackground from "./NeuralBackground";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "CSS/HTML", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "🔧" },
    { name: "Git & GitHub", icon: "🌐" },
    { name: "AI/ML", icon: "🤖" },
  ];

  return (
    <section className="skills" id="skills">
      <NeuralBackground color="#4a53e6" nodeCount={70} />
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => {
          // choose one of several animation presets so cards feel distinct
          const presets = [
            { initial: { opacity: 0, y: 18, rotate: -2 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, whileHover: { scale: 1.04 } },
            { initial: { opacity: 0, x: -18, scale: 0.98 }, whileInView: { opacity: 1, x: 0, scale: 1 }, whileHover: { scale: 1.06 } },
            { initial: { opacity: 0, x: 18, skewY: 6 }, whileInView: { opacity: 1, x: 0, skewY: 0 }, whileHover: { scale: 1.05 } },
            { initial: { opacity: 0, y: 24, rotate: 4 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, whileHover: { scale: 1.07 } },
          ];
          const preset = presets[index % presets.length];
          return (
            <motion.div
              key={index}
              className="skill-card"
              initial={preset.initial}
              whileInView={preset.whileInView}
              whileHover={preset.whileHover}
              viewport={{ once: false, amount: 0.16 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
