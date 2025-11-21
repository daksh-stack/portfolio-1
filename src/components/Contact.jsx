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
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
