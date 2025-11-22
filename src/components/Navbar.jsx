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
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href], i) => (
            <motion.a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              {label}
            </motion.a>
          ))}
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
