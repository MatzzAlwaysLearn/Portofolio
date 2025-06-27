"use client";

import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import styles from "../style/navbar.module.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolling ? styles.scrolled : ""} ${
        roboto.className
      }`}
    >
      <div className={styles.navbarContainer}>
        <h1 className={styles.logo}>Matzz</h1>

        <button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}>☰</span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
