import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "AstroNautica",
    description: "Educational astronomy learning platform with AI chatbots.",
    techStack: ["React", "Node.js", "AI/ML"],
    image: "https://via.placeholder.com/300x180.png?text=AstroNautica",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio site built with React and CSS.",
    techStack: ["React", "CSS"],
    image: "https://via.placeholder.com/300x180.png?text=Portfolio",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Eco Tracker",
    description: "Web app to help environmentally aware users improve sustainability.",
    techStack: ["MERN", "AI"],
    image: "https://via.placeholder.com/300x180.png?text=Eco+Tracker",
    demoLink: "#",
    codeLink: "#"
  },
  
];

const Projects = () => {
  // distinct animation presets to give each card a slightly different entrance
  const presets = [
    { initial: { opacity: 0, y: 18, rotate: -1 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, whileHover: { scale: 1.02 } },
    { initial: { opacity: 0, x: -20, scale: 0.98 }, whileInView: { opacity: 1, x: 0, scale: 1 }, whileHover: { scale: 1.03 } },
    { initial: { opacity: 0, x: 20, skewY: 4 }, whileInView: { opacity: 1, x: 0, skewY: 0 }, whileHover: { scale: 1.04 } },
    { initial: { opacity: 0, y: 22, rotate: 2 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, whileHover: { scale: 1.05 } },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => {
          const preset = presets[idx % presets.length];
          return (
            <motion.div
              key={idx}
              className="project-card"
              initial={preset.initial}
              whileInView={preset.whileInView}
              whileHover={preset.whileHover}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: 0.48, delay: idx * 0.06 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
