"use client";
import { useRef, useEffect } from "react";
import { Open_Sans, Poppins } from "next/font/google";
import style from "./page.module.css";
import Navbar from "./components/ui/navbar.js";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600"],
});

const skills = ["HTML", "CSS", "JavaScript", "React", "UI/UX", "Teamwork"];

// Wave animation for skills
const skillVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.7, rotate: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.13 + 0.2,
      type: "spring",
      stiffness: 320,
      damping: 18,
    },
  }),
};

const cardMotion = {
  whileHover: {
    scale: 1.08,
    rotate: 2,
    boxShadow: "0 0 32px #6366f1cc, 0 16px 48px 0 #fff4",
    transition: { duration: 0.3 },
  },
};

export default function Page() {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    // GSAP complex animation: fade in, scale, float, glowing shadow
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut" },
    });
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.85, y: 60, boxShadow: "0 0 0 #fff0" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        boxShadow: "0 8px 32px 0 #6366f1aa, 0 1.5px 8px #fff1",
        duration: 1.1,
        ease: "power3.out",
      }
    );
    tl.to(cardRef.current, {
      y: -12,
      boxShadow: "0 0 32px #6366f1cc, 0 16px 48px 0 #fff4",
      duration: 2.2,
    }).to(cardRef.current, {
      y: 0,
      boxShadow: "0 8px 32px 0 #6366f1aa, 0 1.5px 8px #fff1",
      duration: 2.2,
    });
    return () => tl.kill();
  }, []);

  return (
    <>
      <Navbar />
      <section className={style.introduction}>
        <div className={style.topIntroRow}>
          <div className={style.topIntroLeft}>
            <motion.h1
              className={`${poppins.className} ${style.h1Intro}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <span className={style.nameHighlight}>Matzz Dev</span>
            </motion.h1>
            {/* Divider dan skills section dihapus */}
            <motion.p
              className={openSans.className + " " + style.introDesc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, type: "spring" }}
            >
              &quot;Success is not final, failure is not fatal: It is the courage to continue that counts.&quot;
              <br />- Winston S. Churchill
            </motion.p>
          </div>
          <div className={style.topIntroRight}>
            <motion.div
              className={style.profileCardModern}
              ref={cardRef}
              whileHover={cardMotion.whileHover}
              whileTap={{ scale: 0.97, rotate: 0 }}
            >
              <motion.div
                className={style.avatarWrapper}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              >
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  className={style.avatar}
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </motion.div>
              <motion.h2
                className={`${style.cardName} ${poppins.className}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.4 }}
              >
                Matzz <span className={style.cardBadge}>🌟</span>
              </motion.h2>
              <motion.p
                className={openSans.className + " " + style.cardBio}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                Frontend Developer & UI/UX Enthusiast
                <br />
                <span className={style.cardLocation}>
                  📍 Gorontalo, Indonesia
                </span>
              </motion.p>
              <motion.div
                className={style.cardActions}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.18,
                    rotate: -8,
                    backgroundColor: "#fff",
                    color: "#111",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={style.cardIconBtn}
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                  />
                </motion.a>
                <motion.a
                  href="mailto:muhfatahilla62@email.com"
                  whileHover={{
                    scale: 1.18,
                    rotate: 8,
                    backgroundColor: "#fff",
                    color: "#111",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={style.cardIconBtn}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email"
                    width={32}
                    height={32}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// Footer with GSAP + framer-motion animation
export function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
    gsap.to(footerRef.current, {
      boxShadow: "0 0 32px #6366f1cc",
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className={style.footer}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
    >
      <div className={style.footerContent}>
        <motion.div
          className={style.footerBrand}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          <span>Matzz Dev</span>
        </motion.div>
        <motion.div
          className={style.footerLinks}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        >
          <a
            href="https://github.com/MatzzAlwaysLearn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {/* GitHub SVG */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.32 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/MatzzDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25zm5.5-.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
            </svg>
          </a>
        </motion.div>
        <motion.div
          className={style.footerCopyright}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, type: "spring" }}
        >
          © {new Date().getFullYear()} Matzz Dev. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}