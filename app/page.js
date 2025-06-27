"use client";
import { useRef, useEffect } from "react";
import { Open_Sans, Poppins } from "next/font/google";
import style from "./page.module.css";
import Navbar from "./components/ui/navbar.js";
import { motion } from "framer-motion";
import gsap from "gsap";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600"],
});

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "UI/UX",
  "Teamwork"
];

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
      damping: 18
    }
  })
};

const cardMotion = {
  whileHover: {
    scale: 1.08,
    rotate: 2,
    boxShadow: "0 0 32px #6366f1cc, 0 16px 48px 0 #fff4",
    transition: { duration: 0.3 }
  }
};

export default function Page() {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    // GSAP complex animation: fade in, scale, float, glowing shadow
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut" } });
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.85, y: 60, boxShadow: "0 0 0 #fff0" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        boxShadow: "0 8px 32px 0 #6366f1aa, 0 1.5px 8px #fff1",
        duration: 1.1,
        ease: "power3.out"
      }
    );
    tl.to(cardRef.current, {
      y: -12,
      boxShadow: "0 0 32px #6366f1cc, 0 16px 48px 0 #fff4",
      duration: 2.2
    }).to(cardRef.current, {
      y: 0,
      boxShadow: "0 8px 32px 0 #6366f1aa, 0 1.5px 8px #fff1",
      duration: 2.2
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
            <motion.div
              className={style.divider}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.5, type: "spring" }}
              style={{ originX: 0.5 }}
            />
            <motion.p
              className={openSans.className + " " + style.introDesc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, type: "spring" }}
            >
              Saya adalah Matzz, seorang developer muda yang sedang menempuh pendidikan di <b>SMKN 1 Gorontalo</b>. Saya sangat antusias dalam membangun website modern, mengutamakan desain yang kreatif, pengalaman pengguna yang baik, dan kolaborasi tim. Saya percaya bahwa teknologi adalah jalan untuk berkembang dan berinovasi, dan saya selalu bersemangat untuk mempelajari hal-hal baru di dunia pemrograman.
            </motion.p>
            <motion.div
              className={style.skillBadges}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className={style.skillBadge}
                  custom={i}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.18,
                    backgroundColor: "#fff",
                    color: "#111",
                    borderColor: "#fff",
                    rotate: 6,
                    boxShadow: "0 4px 24px #6366f1aa",
                    transition: { duration: 0.4, type: "spring" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginBottom: "0.2rem",
                    marginTop: "0.2rem",
                    boxShadow: "0 2px 8px #6366f133"
                  }}
                >
                  <span style={{
                    display: "inline-block",
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                    fontSize: "1.08em",
                    textShadow: "0 2px 8px #0006"
                  }}>
                    {skill}
                  </span>
                </motion.span>
              ))}
            </motion.div>
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
                <motion.img
                  src="/logo.jpg"
                  alt="Profile"
                  className={style.avatar}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0 #6366f1aa)",
                      "drop-shadow(0 0 16px #6366f1aa)",
                      "drop-shadow(0 0 0 #6366f1aa)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
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
                className={style.cardBio}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                Frontend Developer & UI/UX Enthusiast<br />
                <span className={style.cardLocation}>📍 Gorontalo, Indonesia</span>
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
                  whileHover={{ scale: 1.18, rotate: -8, backgroundColor: "#fff", color: "#111" }}
                  whileTap={{ scale: 0.95 }}
                  className={style.cardIconBtn}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                </motion.a>
                <motion.a
                  href="mailto:matzz@email.com"
                  whileHover={{ scale: 1.18, rotate: 8, backgroundColor: "#fff", color: "#111" }}
                  whileTap={{ scale: 0.95 }}
                  className={style.cardIconBtn}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email"
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}