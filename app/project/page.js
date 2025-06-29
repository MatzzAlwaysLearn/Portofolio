"use client";

import Navbar from "../components/ui/navbar.js";
import { Footer } from "../page.js";
import style from "./page.module.css";
import { Poppins } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../public/logo.jpg";

const poppins = Poppins({
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  subsets: ["latin"],
});

const projectsArray = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: logo,
    imageUrl: null,
    link: "https://example.com",
    framework: "React",
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: logo,
    imageUrl: null,
    link: "https://example.com",
    framework: "Next.js",
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    image: logo,
    imageUrl: null,
    link: "https://example.com",
    framework: "Node.js",
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Project 4",
    description: "A mobile app for productivity.",
    image: logo,
    imageUrl: null,
    link: "https://github.com/example/project4",
    framework: "Flutter",
    tags: ["Dart", "Mobile", "UI"],
  },
  {
    title: "Project 5",
    description: "A REST API for e-commerce.",
    image: logo,
    imageUrl: null,
    link: "https://github.com/example/project5",
    framework: "Express.js",
    tags: ["Node.js", "API", "MongoDB"],
  },
  {
    title: "Project 6",
    description: "A portfolio website with animations.",
    image: logo,
    imageUrl: null,
    link: "https://github.com/example/project6",
    framework: "Next.js",
    tags: ["React", "Next.js", "Framer Motion"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
    rotate: -8,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
  exit: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: 8,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

function AnimatedProjectCard({ children, index, ...props }) {
  const cardRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    function handleMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(card, {
        rotateY: x / 18,
        rotateX: -y / 18,
        scale: 1,
        boxShadow: "0 6px 32px #fff1, 0 1.5px 8px #fff1",
        border: "2px solid #fff",
        filter: "none",
        duration: 0.6,
        ease: "power3.out",
      });
    }
    function handleMouseLeave() {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        boxShadow: "0 6px 32px #fff1, 0 1.5px 8px #fff1",
        border: "2px solid #fff",
        filter: "none",
        duration: 0.7,
        ease: "power3.out",
      });
    }
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -3, 0, 3, 0],
      x: [0, 2, 0, -2, 0],
      opacity: [1, 0.98, 1, 0.99, 1],
      transition: {
        duration: 3 + Math.random(),
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      animate={controls}
      whileTap={{
        scale: 0.97,
        boxShadow: "0 0 24px #fff2, 0 0px 12px #fff1",
        borderColor: "#fff",
        filter: "none",
        transition: { duration: 0.18, ease: "easeInOut" },
        rotate: 2,
        opacity: 0.95
      }}
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  return (
    <div className={`${style.pageContainer} ${poppins.className}`}>
      <div className={style.mainContent}>
        <Navbar />
        <h1 className={style.h1Intro}>Project Page</h1>
        <motion.div
          className={style.projectContainer}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projectsArray.map((project, index) => (
            <AnimatedProjectCard
              key={index}
              className={style.projectCard}
              index={index}
            >
              <motion.h2
                className={style.projectTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                className={style.projectDescription}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.13 * index,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {project.description}
              </motion.p>
              {(project.imageUrl || project.image) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.16 * index,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.04,
                    rotate: 2,
                    filter: "brightness(1.08) drop-shadow(0 0 8px #00eaff88)"
                  }}
                  style={{ width: "100%" }}
                >
                  <Image
                    src={project.imageUrl || project.image}
                    alt={project.title}
                    className={style.projectImage}
                    width={340}
                    height={180}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                </motion.div>
              )}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.projectLink}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.19 * index,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.04
                }}
                whileTap={{
                  scale: 0.98
                }}
              >
                View Project
              </motion.a>
              <motion.p
                className={style.projectFramework}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.21 * index,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.08
                }}
                whileTap={{
                  scale: 0.97
                }}
              >
                Framework: {project.framework}
              </motion.p>
              <motion.div
                className={style.projectTags}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.23 * index,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className={style.projectTag}
                    whileHover={{
                      scale: 1.13
                    }}
                    whileTap={{
                      scale: 1
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatedProjectCard>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}