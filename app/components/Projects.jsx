"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiDaisy,
  SiReactrouter,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { TbChartPie, TbBell, TbComponents, TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

const projectsData = [
  {
    id: 1,
    name: "QurbaniHat",
    tagline: "LIVESTOCK BOOKING PLATFORM",
    description:
      "A full-stack web application where users can browse livestock for Qurbani, view animal details, and place bookings after authentication with seamless payment integration.",
    techStack: [
      { name: "Next.js 16", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Better Auth", icon: MdSecurity },
      { name: "MongoDB", icon: SiMongodb },
    ],
    github: "https://github.com/Tariqul-stack/qurbanihat",
    live: "https://qurbani-hat-tan.vercel.app",
    category: "Full Stack",
    images: [
      "/images/qurbanihat-1.png",
      "/images/qurbanihat-2.png",
      "/images/qurbanihat-3.png",
    ],
  },
  {
    id: 2,
    name: "KeenKeeper",
    tagline: "FRIENDSHIP TRACKING APP",
    description:
      "A responsive friendship tracker app that helps users stay connected, log interactions, and visualize communication patterns with friends in a beautiful timeline view.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Recharts", icon: TbChartPie },
    ],
    github: "https://github.com/Tariqul-stack/KeenKeeper",
    live: "https://keenkeeper-website.netlify.app",
    category: "Frontend",
    images: [
      "/images/keenkeeper-1.png",
      "/images/keenkeeper-2.png",
      "/images/keenkeeper-3.png",
    ],
  },
  {
    id: 3,
    name: "Book Mood",
    tagline: "BOOK MANAGEMENT APP",
    description:
      "A book management app enabling users to explore titles, save to wishlist, mark books as read, and track reading progress with beautiful visual analytics.",
    techStack: [
      { name: "React.js", icon: SiReact },
      { name: "React Router", icon: SiReactrouter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Recharts", icon: TbChartPie },
    ],
    github: "https://github.com/Tariqul-stack/book-mood",
    live: "https://book-mood.netlify.app",
    category: "Frontend",
    images: [
      "/images/bookmood-1.png",
      "/images/bookmood-2.png",
      "/images/bookmood-3.png",
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const isOdd = index % 2 === 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <div
        className={`glass-card project-card-wrapper border border-white/8 bg-white/3 rounded-3xl p-5 
          hover:border-white/12 hover:shadow-[0_0_40px_rgba(45,212,191,0.08)] 
          transition-all duration-500 overflow-hidden backdrop-blur-[20px]
          ${isOdd ? "flex flex-col lg:flex-row" : "flex flex-col lg:flex-row-reverse"}`}
      >
        {/* LEFT SIDE - IMAGE AREA */}
        <div
          className={`w-full mb-8 lg:mb-0 lg:px-4 ${isOdd ? "lg:w-3/5" : "lg:w-3/5"}`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-900/50 
              border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            {/* Fake Browser Frame */}
            <div className="absolute top-0 left-0 right-0 h-7 z-10 flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <div className="flex-1 mx-3 h-4 rounded-full bg-white/10 flex items-center px-2">
                <span className="text-[9px] text-white/30 truncate">
                  {project.live}
                </span>
              </div>
            </div>
            {/* Image Carousel - Stacked with Opacity Fade */}
            <div className="absolute inset-0 top-7 w-full h-[calc(100%-28px)]">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === currentImage ? 1 : 0 }}
                >
                  <Image
                    src={img}
                    alt={`${project.name} preview ${i + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    priority={index === 0 && i === 0}
                    quality={90}
                  />
                </div>
              ))}
            </div>

            {/* Carousel Dots - Bottom Left */}
            <div className="absolute bottom-4 left-4 flex gap-2 z-20">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`transition-all duration-300 ${
                    i === currentImage
                      ? "bg-[#2dd4bf] w-6 h-2 rounded-full"
                      : "bg-white/30 w-2 h-2 rounded-full hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Preview Badge - Bottom Right */}
            <div
              className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full 
              text-xs font-medium text-white/70 backdrop-blur-md border border-white/10
              bg-black/20"
            >
              ⟳ Auto preview
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - PROJECT DETAILS */}
        <div
          className={`w-full flex flex-col justify-between lg:px-4 ${isOdd ? "lg:w-2/5" : "lg:w-2/5"}`}
        >
          {/* Top Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider text-[#2dd4bf] border border-white/10 
              backdrop-blur-md bg-white/5"
            >
              {project.tagline}
            </span>
            <span
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider border border-white/10 backdrop-blur-md bg-white/5 ${
                project.category === "Full Stack"
                  ? "text-[#a78bfa]"
                  : "text-[#2dd4bf]"
              }`}
            >
              {project.category}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="project-title text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {project.name}
          </h3>

          {/* Description */}
          <p className="project-description text-lg text-slate-400 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="project-tech-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                  text-xs font-medium bg-white/5 border border-white/10 
                  text-slate-300 hover:border-teal-500/30 hover:text-teal-300 
                  transition-colors duration-200 backdrop-blur-md"
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="project-code-btn flex-1 flex items-center justify-center gap-2 px-5 py-3 
              rounded-lg bg-white/5 border border-white/10 text-white font-medium 
              hover:border-white/20 hover:bg-white/8 transition-all duration-300 
              backdrop-blur-md"
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 
              rounded-lg bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] text-white 
              font-medium hover:shadow-lg hover:shadow-[#2dd4bf]/25 
              transition-all duration-300"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Frontend", "Full Stack"];

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative pt-28 md:pt-32 pb-24 overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div
        className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ backgroundColor: "var(--orb-teal)" }}
      ></div>
      <div
        className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ backgroundColor: "var(--orb-indigo)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-[#2dd4bf] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] inline-block relative pb-2">
            Featured Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent"></span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-16 p-3 max-w-md mx-auto border border-white/8 rounded-full backdrop-blur-md bg-white/3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#2dd4bf] text-[#0a0f1e] shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                  : "bg-transparent text-[var(--text-secondary)] hover:text-[#2dd4bf] border border-transparent hover:border-[#2dd4bf]/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[var(--text-muted)] py-20"
            >
              No projects found in this category.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
