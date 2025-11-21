import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Daksh Hardiya</a>
        </div>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button
          className="menu-icon"
          onClick={handleToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          type="button"
        >
          <div className={menuOpen ? "hamburger open" : "hamburger"}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
