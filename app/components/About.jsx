"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiDownload, FiGlobe, FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { TbFolder, TbClock, TbCode, TbLanguage } from "react-icons/tb";

// Animated Counter Component for Stats
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix]);

  return (
    <span ref={nodeRef}>
      {from}
      {suffix}
    </span>
  );
};

export default function About() {
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const educationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="relative pt-28 md:pt-32 pb-24 overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div
        className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ backgroundColor: "var(--orb-teal)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {/* Section Header */}
            <div className="mb-6">
              <p className="text-[#2dd4bf] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                Get to know me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] relative inline-block mb-4">
                About Me
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#2dd4bf]/20 -z-10 transform -rotate-1"></span>
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#2dd4bf]"></span>
              </h2>
            </div>

            {/* Story Paragraph */}
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              I&apos;m a Computer Science student and self-driven Frontend
              Developer passionate about building clean, responsive, and
              user-friendly web applications. My journey started with curiosity
              — I wanted to understand how websites work and how great UI comes
              to life. That curiosity turned into a deep passion for React,
              Next.js, and modern frontend development. I love clean component
              architecture, smooth animations, and building things that feel
              great to use.
            </p>

            {/* Highlight Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="glass-card border-l-4 border-l-[#2dd4bf] rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaGraduationCap className="text-[#2dd4bf] w-5 h-5" />
                  <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                    CS Student
                  </span>
                </div>
                <p className="text-sm text-[var(--text-primary)] font-medium leading-tight">
                  Northeast Petroleum Uni.
                </p>
              </div>

              <div className="glass-card border-l-4 border-l-[#2dd4bf] rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FiGlobe className="text-[#2dd4bf] w-5 h-5" />
                  <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                    Based In
                  </span>
                </div>
                <p className="text-sm text-[var(--text-primary)] font-medium leading-tight">
                  Daqing, China
                </p>
              </div>

              <div className="glass-card border-l-4 border-l-[#2dd4bf] rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FiBriefcase className="text-[#2dd4bf] w-5 h-5" />
                  <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                    Open To
                  </span>
                </div>
                <p className="text-sm text-[var(--text-primary)] font-medium leading-tight">
                  Remote & Freelance
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="/Tariqul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-[var(--text-primary)] bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FiDownload className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side: Info Cards Grid & Languages */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1 */}
              <motion.div
                variants={cardItemVariants}
                className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center mb-3">
                  <TbFolder className="w-5 h-5 text-[#2dd4bf]" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#2dd4bf] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter to={10} suffix="+" />
                </h3>
                <p className="text-[var(--text-secondary)] text-sm font-medium">
                  Projects Completed
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardItemVariants}
                className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-[#6366f1]/10 flex items-center justify-center mb-3">
                  <TbClock className="w-5 h-5 text-[#818cf8]" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#2dd4bf] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter to={1} suffix="+" />
                </h3>
                <p className="text-[var(--text-secondary)] text-sm font-medium">
                  Years of Learning
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardItemVariants}
                className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center mb-3">
                  <TbCode className="w-5 h-5 text-[#2dd4bf]" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#2dd4bf] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter to={5} suffix="+" />
                </h3>
                <p className="text-[var(--text-secondary)] text-sm font-medium">
                  Core Tech Skills
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={cardItemVariants}
                className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-[#6366f1]/10 flex items-center justify-center mb-3">
                  <TbLanguage className="w-5 h-5 text-[#818cf8]" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#2dd4bf] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter to={3} />
                </h3>
                <p className="text-[var(--text-secondary)] text-sm font-medium">
                  Languages Spoken
                </p>
              </motion.div>
            </div>

            {/* Language Badges */}
            <motion.div variants={cardItemVariants} className="mt-8">
              <div className="flex flex-wrap gap-3">
                <span className="glass-card inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-[var(--text-primary)] transition-colors duration-300">
                  <span className="mr-2 text-lg">🇧🇩</span> Bangla{" "}
                  <span className="text-[var(--text-secondary)] ml-2">
                    — Native
                  </span>
                </span>
                <span className="glass-card inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-[var(--text-primary)] transition-colors duration-300">
                  <span className="mr-2 text-lg">🇬🇧</span> English{" "}
                  <span className="text-[var(--text-secondary)] ml-2">
                    — Fluent
                  </span>
                </span>
                <span className="glass-card inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-[var(--text-primary)] transition-colors duration-300">
                  <span className="mr-2 text-lg">🇨🇳</span> Chinese{" "}
                  <span className="text-[var(--text-secondary)] ml-2">
                    — HSK 2
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Full Width Education Card */}
        <motion.div
          variants={educationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            {/* Subtle Background Glow in Card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2dd4bf]/5 rounded-full blur-[40px] group-hover:bg-[#2dd4bf]/10 transition-colors duration-500"></div>

            <h3 className="text-xl font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-[#2dd4bf] w-6 h-6" />
              Education
            </h3>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="w-8 h-8 text-[#2dd4bf]" />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    Bachelor of Computer Science
                  </h4>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20">
                    Currently Enrolled
                  </span>
                </div>
                <p className="text-lg text-[var(--text-secondary)] font-medium mb-2">
                  Northeast Petroleum University
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1">
                    <FiGlobe className="w-4 h-4" /> Daqing, China
                  </span>
                  <span className="hidden sm:block text-[var(--text-muted)]">
                    •
                  </span>
                  <span>2024 – Expected 2028</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
