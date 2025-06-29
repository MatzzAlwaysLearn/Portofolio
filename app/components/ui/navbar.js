"use client";

import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import styles from "../style/navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 80 },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  },
};

const menuBtnVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 10 },
  tap: { scale: 0.95, rotate: -10 },
};

const menuVariants = {
  closed: {
    opacity: 0,
    y: -30,
    pointerEvents: "none",
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.35, type: "spring", stiffness: 120 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4 },
  }),
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen((v) => !v);

  const handleScroll = () => {
    if (window.scrollY > 50) setScrolling(true);
    else setScrolling(false);
  };

  // Update isDesktop on mount and on resize
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolling ? styles.scrolled : ""} ${roboto.className}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.navbarContainer}>
        <motion.h1
          className={styles.logo}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          Matzz
        </motion.h1>

        <motion.button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label="Toggle navigation menu"
          variants={menuBtnVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.span
            className={styles.menuIcon}
            style={{ display: "block" }}
            animate={
              isOpen
                ? { scale: 1.2, color: "#f39c12" }
                : { scale: 1, color: "#fff" }
            }
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Hamburger icon with animated lines */}
            <svg width="28" height="28" viewBox="0 0 28 28">
              <motion.rect
                x="4"
                y="8"
                width="20"
                height="2"
                rx="1"
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                fill="currentColor"
              />
              <motion.rect
                x="4"
                y="14"
                width="20"
                height="2"
                rx="1"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                fill="currentColor"
              />
              <motion.rect
                x="4"
                y="20"
                width="20"
                height="2"
                rx="1"
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                fill="currentColor"
              />
            </svg>
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {(isDesktop || isOpen) && (
            <motion.ul
              className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
              initial="closed"
              animate={isDesktop || isOpen ? "open" : "closed"}
              exit="closed"
              variants={menuVariants}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    href={link.href}
                    scroll={false}
                    onClick={(e) => {
                      if (link.href.startsWith("/")) {
                        e.preventDefault();
                        setIsOpen(false);
                        router.push(link.href, { scroll: false });
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}