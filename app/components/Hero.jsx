"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiArrowDownLine } from "react-icons/ri";
import { SiReact, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";

const roles = [
  "Full-Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const [profileImageError, setProfileImageError] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50); // Deleting speed
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        if (currentText.length === currentRole.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause at end
        }
      }, 100); // Typing speed
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D tilt mouse effect for profile card
  useEffect(() => {
    const card = document.getElementById("glassProfileCard");
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = -(y / rect.height) * 15;
      const rotY = (x / rect.width) * 15;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
      card.style.boxShadow = `${-x * 0.15}px ${-y * 0.15}px 50px rgba(45,212,191,0.2),
         0 0 0 1px rgba(45,212,191,0.15),
         inset 0 1px 0 rgba(255,255,255,0.1)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.boxShadow =
        "0 20px 60px rgba(45,212,191,0.12), 0 0 0 1px rgba(45,212,191,0.1), inset 0 1px 0 rgba(255,255,255,0.1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
    },
  };

  const floatingBadgeVariants = {
    animate: (custom) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom * 0.5,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}

      {/* Blurred Orbs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none opacity-70"
        style={{ backgroundColor: "var(--orb-teal)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4 opacity-60"
        style={{ backgroundColor: "var(--orb-indigo)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            className="flex flex-col space-y-6 order-2 lg:order-1 mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={textVariants}
              className="flex items-start lg:items-center"
            >
              <div className="glass-card inline-flex items-center px-4 py-2 rounded-full text-[#2dd4bf] text-sm font-medium">
                <span className="flex w-2 h-2 rounded-full bg-[#2dd4bf] mr-2 animate-pulse"></span>
                Available for Remote & Freelance...
                <img
                  src="https://emojis.slackmojis.com/emojis/images/1536351075/4594/blob-wave.gif"
                  alt="wave"
                  className="w-5 h-5 mr-2"
                />
              </div>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div variants={textVariants}>
              <h2 className="text-[#2dd4bf] text-lg font-medium mb-2">
                Hi, I&apos;m
              </h2>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight">
                <span className="bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] bg-clip-text text-transparent">
                  Tariqul
                </span>{" "}
                Islam
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div
              variants={textVariants}
              className="text-2xl lg:text-3xl font-semibold text-[var(--text-secondary)] h-10 flex items-center"
            >
              {currentText}
              <span className="w-[3px] h-8 bg-[#2dd4bf] ml-1 animate-pulse"></span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={textVariants}
              className="text-[var(--text-secondary)] text-lg max-w-lg leading-relaxed"
            >
              I build and ship production-ready full-stack web apps with React,
              Next.js, Node.js & MongoDB. Passionate about clean architecture,
              smooth UX, and turning ideas into live products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 rounded-full font-medium text-[var(--text-primary)] bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </button>
              <a
                href="/Tariqul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-3 rounded-full font-medium text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <IoDocumentTextOutline className="pr-1 w-5 h-5" />
                Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={textVariants}
              className="flex items-center space-x-6 pt-4"
            >
              <a
                href="https://github.com/Tariqul-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 transform hover:scale-110"
              >
                <FiGithub className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/tariqul-islam-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 transform hover:scale-110"
              >
                <FiLinkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:tariqul.dev0@gmail.com"
                className="glass-card p-3 text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 transform hover:scale-110"
              >
                <FiMail className="w-7 h-7" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center items-center mt-8 lg:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              id="glassProfileCard"
              suppressHydrationWarning
              className="relative flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden rounded-[28px] w-[280px] h-[350px] bg-white/5 border border-[#2dd4bf]/20 backdrop-blur-xl transition-[transform,box-shadow] duration-100 ease-linear [transform-style:preserve-3d] shadow-[0_20px_60px_rgba(45,212,191,0.12),0_0_0_1px_rgba(45,212,191,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] [data-theme=light]:bg-white/75 [data-theme=light]:border-[#2dd4bf]/30 [data-theme=light]:shadow-[0_20px_60px_rgba(45,212,191,0.15),0_0_0_1px_rgba(45,212,191,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]"
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/70 via-[#6366f1]/50 to-transparent pointer-events-none" />

              {/* Light reflection overlay */}
              <div className="absolute top-0 left-0 w-[60%] h-[50%] rounded-[28px] pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.07),transparent_70%)]" />

              {/* Profile image with spinning ring */}
              <div className="relative w-[160px] h-[160px] [transform:translateZ(20px)]">
                {/* Spinning gradient ring */}
                <div className="absolute inset-0 rounded-full p-[3px] [background:conic-gradient(from_0deg,#2dd4bf,#6366f1,#2dd4bf)] [animation:spinRing_4s_linear_infinite]">
                  <div className="w-full h-full rounded-full bg-[var(--bg-primary)]" />
                </div>

                {/* Profile image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full overflow-hidden">
                  {!profileImageError ? (
                    <Image
                      src="/images/portfolio-img.png"
                      alt="Tariqul Islam"
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-700 to-slate-900">
                      <span className="text-white text-3xl font-extrabold">
                        TI
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name and title */}
              <div className="text-center z-10 [transform:translateZ(15px)]">
                <p className="text-base font-semibold tracking-[0.01em] text-[var(--text-primary)] m-0">
                  Tariqul Islam
                </p>
                <p className="text-[10px] text-[#2dd4bf] tracking-[0.18em] uppercase mt-1 m-0">
                  Full-Stack Dev
                </p>
              </div>

              {/* Bottom tech badges */}
              <div className="flex gap-1.5 z-10 [transform:translateZ(10px)]">
                <span className="text-[10px] px-[10px] py-[3px] rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/30">
                  React
                </span>
                <span className="text-[10px] px-[10px] py-[3px] rounded-full bg-[#6366f1]/10 text-[#818cf8] border border-[#6366f1]/30">
                  Next.js
                </span>
                <span className="text-[10px] px-[10px] py-[3px] rounded-full bg-[#339933]/10 text-[#4ade80] border border-[#339933]/30">
                  Node.js
                </span>
              </div>
            </div>

            {/* Floating Badge — Top Right: React */}
            <motion.div
              suppressHydrationWarning
              className="absolute top-[5%] right-[0%] glass-card flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[var(--text-primary)] border border-white/10 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <SiReact className="text-cyan-400 w-4 h-4" />
              <span>React</span>
            </motion.div>

            {/* Floating Badge — Bottom Left: Next.js */}
            <motion.div
              suppressHydrationWarning
              className="absolute bottom-[10%] left-[0%] glass-card flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[var(--text-primary)] border border-white/10 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <SiNextdotjs className="text-[var(--text-primary)] w-4 h-4" />
              <span>Next.js</span>
            </motion.div>

            {/* Floating Badge — Middle Left: Node.js */}
            <motion.div
              suppressHydrationWarning
              className="absolute top-[35%] left-[0%] glass-card flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[var(--text-primary)] border border-white/10 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <SiNodedotjs className="text-[#4ade80] w-4 h-4" />
              <span>Node.js</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-20 ${showScroll ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: showScroll ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--text-secondary)] flex flex-col items-center cursor-pointer hover:text-[#2dd4bf] transition-colors duration-300"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">
            Scroll
          </span>
          <RiArrowDownLine className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
