"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiReactrouter,
  SiDaisyui,
  SiExpress,
  SiFramer,
  SiNodedotjs,
  SiStripe,
} from "react-icons/si";
import { TbChartPie } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

const TECH_ICONS = {
  "Next.js": SiNextdotjs,
  "Next.js 16": SiNextdotjs,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  MongoDB: SiMongodb,
  "Better Auth": MdSecurity,
  "Express.js": SiExpress,
  "Framer Motion": SiFramer,
  "React Router": SiReactrouter,
  Recharts: TbChartPie,
  DaisyUI: SiDaisyui,
  "React Icons": RiReactjsLine,
  "Node.js": SiNodedotjs,
  "Stripe": SiStripe,
  "JWT": MdSecurity,
};

const PROJECTS = [
  {
    id: 1,
    name: "LegalEase",
    tagline: "LAWYER HIRING PLATFORM",
    description:
      "A full-stack MERN platform connecting legal seekers with verified lawyers. Features role-based dashboards for users, lawyers, and admins — with Stripe payments, Google OAuth, JWT auth, and real-time analytics.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    github: "https://github.com/Tariqul-stack/LegalEase_client",
    live: "https://legal-ease-client-jet.vercel.app",
    category: "Full Stack",
    images: [
      "/images/legalease-1.png",
      "/images/legalease-2.png",
      "/images/legalease-3.png",
    ],
  },
  {
    id: 2,
    name: "IdeaVault",
    tagline: "STARTUP IDEA PLATFORM",
    description:
      "A full-stack startup idea sharing platform where innovators can post concepts, explore trending ideas, leave comments, bookmark favorites, and manage their submissions — all with secure Google OAuth and JWT authentication.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Better Auth",
      "Framer Motion",
    ],
    github: "https://github.com/Tariqul-stack/IdeaVault-client",
    live: "https://idea-vault-client-kohl.vercel.app",
    category: "Full Stack",
    images: [
      "/images/ideaVault-1.png",
      "/images/ideaVault-2.png",
      "/images/ideaVault-3.png",
    ],
  },
  {
    id: 3,
    name: "QurbaniHat",
    tagline: "LIVESTOCK BOOKING PLATFORM",
    description:
      "A full-stack web app where users browse livestock for Qurbani, view animal details, and place bookings after authentication with seamless payment integration.",
    techStack: ["Next.js 16", "Tailwind CSS", "Better Auth", "MongoDB"],
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
    id: 4,
    name: "KeenKeeper",
    tagline: "FRIENDSHIP TRACKING APP",
    description:
      "A responsive friendship tracker that helps users stay connected, log interactions, and visualize communication patterns with friends in a beautiful timeline view.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Recharts", "DaisyUI"],
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
    id: 5,
    name: "Book Mood",
    tagline: "BOOK MANAGEMENT APP",
    description:
      "A book management app enabling users to explore titles, save to wishlist, mark books as read, and track reading progress with beautiful visual analytics.",
    techStack: ["React.js", "React Router", "Tailwind CSS", "Recharts"],
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

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tabsVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } },
};

function ProjectCard({ project, index, isDark }) {
  const [slide, setSlide] = useState(0);
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    const t = setInterval(
      () => setSlide((p) => (p + 1) % project.images.length),
      2200,
    );
    return () => clearInterval(t);
  }, [project.images.length]);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div
        className={`
          flex flex-col overflow-hidden rounded-3xl border p-5 backdrop-blur-xl
          transition-all duration-500
          ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"}
          ${
            isDark
              ? "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.14] hover:shadow-[0_0_48px_rgba(45,212,191,0.07)]"
              : "bg-white/55 border-indigo-200/40 hover:border-teal-400/40 hover:shadow-[0_0_48px_rgba(99,102,241,0.09)]"
          }
        `}
      >
        {/* IMAGE SIDE */}
        <div className="w-full px-2 mb-8 lg:mb-0 lg:w-[58%]">
          <motion.div
            suppressHydrationWarning
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className={`
              group relative w-full overflow-hidden rounded-2xl border
              aspect-video
              ${
                isDark
                  ? "bg-[#0a0f1e] border-white/[0.08]"
                  : "bg-slate-100 border-indigo-200/40"
              }
            `}
          >
            {/* Browser bar */}
            <div
              className={`
                absolute left-0 right-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b px-3
                ${
                  isDark
                    ? "bg-white/[0.04] border-white/[0.06]"
                    : "bg-slate-200/80 border-slate-300/50"
                }
              `}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/55" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/55" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/55" />
              <div
                className={`mx-3 flex h-4 flex-1 items-center rounded-full px-2
                  ${isDark ? "bg-white/[0.07]" : "bg-white/60"}
                `}
              >
                <span
                  className={`truncate font-mono text-[9px]
                    ${isDark ? "text-white/25" : "text-slate-400"}
                  `}
                >
                  {project.live}
                </span>
              </div>
            </div>

            {/* Slides */}
            <div className="absolute inset-0 top-7">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
                  style={{ opacity: i === slide ? 1 : 0 }}
                >
                  <img
                    src={img}
                    alt={`${project.name} preview ${i + 1}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="absolute bottom-3 left-3 z-20 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-[7px] rounded-full transition-all duration-300
                    ${
                      i === slide
                        ? "w-5 bg-teal-400"
                        : `w-[7px] ${isDark ? "bg-white/25" : "bg-slate-400/40"}`
                    }
                  `}
                />
              ))}
            </div>

            {/* Preview badge */}
            <div
              className={`
                absolute bottom-3 right-3 z-20 rounded-full border px-2.5 py-1
                text-[10px] backdrop-blur-md
                ${
                  isDark
                    ? "bg-black/25 border-white/10 text-white/30"
                    : "bg-white/40 border-slate-300/40 text-slate-400"
                }
              `}
            >
              ⟳ Auto preview
            </div>

            {/* Hover badge */}
            <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-teal-400/25 bg-black/35 px-3 py-1 text-[10px] text-teal-400/80 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              ✦ Hover preview
            </div>
          </motion.div>
        </div>

        {/* INFO SIDE */}
        <div className="flex w-full flex-col justify-between px-3 lg:w-[42%]">
          <div>
            {/* Badges */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span
                className={`rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md
                  ${
                    isDark
                      ? "bg-teal-400/10 border-teal-400/20 text-teal-400"
                      : "bg-teal-100/60 border-teal-300/40 text-teal-700"
                  }
                `}
              >
                {project.tagline}
              </span>
              <span
                className={`rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md
                  ${
                    project.category === "Full Stack"
                      ? isDark
                        ? "bg-violet-400/10 border-violet-400/20 text-violet-400"
                        : "bg-violet-100/60 border-violet-300/40 text-violet-700"
                      : isDark
                        ? "bg-teal-400/10 border-teal-400/20 text-teal-400"
                        : "bg-teal-100/60 border-teal-300/40 text-teal-700"
                  }
                `}
              >
                {project.category}
              </span>
            </div>

            {/* Project name */}
            <h3
              className={`mb-3 text-4xl font-bold leading-tight lg:text-[2.6rem]
                ${isDark ? "text-slate-100" : "text-slate-900"}
              `}
            >
              {project.name}
            </h3>

            {/* Description */}
            <p
              className={`mb-5 line-clamp-3 text-[15px] leading-relaxed
                ${isDark ? "text-slate-400" : "text-slate-500"}
              `}
            >
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="mb-7 flex flex-wrap gap-2">
              {project.techStack.map((tech) => {
                const Icon = TECH_ICONS[tech];
                return (
                  <div
                    key={tech}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5
                      text-[11px] font-medium backdrop-blur-md transition-colors duration-200
                      ${
                        isDark
                          ? "bg-white/[0.05] border-white/[0.10] text-slate-300 hover:border-teal-500/30 hover:text-teal-400"
                          : "bg-white/60 border-indigo-200/40 text-slate-600 hover:border-teal-400/40 hover:text-teal-600"
                      }
                    `}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-code-btn flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 bg-white/[0.05] border-white/[0.10] text-white hover:bg-white/[0.09] hover:border-white/20 cursor-pointer"
            >
              <FiGithub className="h-4 w-4" />
              Code
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-indigo-500 px-5 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            >
              <FiExternalLink className="h-4 w-4" />
              Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted ? theme === "dark" : true;

  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Frontend", "Full Stack"];

  const filtered =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className={`relative overflow-hidden pb-24 pt-28 transition-colors duration-300 md:pt-32
        ${isDark ? "bg-[#07091a]" : "bg-[#f0f4ff]"}
      `}
    >
      {/* Ambient orbs */}
      <div
        className={`pointer-events-none absolute bottom-[8%] left-[-8%] h-[46%] w-[46%]
          rounded-full blur-[110px]
          ${isDark ? "bg-teal-400/[0.07]" : "bg-teal-400/[0.12]"}
        `}
      />
      <div
        className={`pointer-events-none absolute right-[-8%] top-[8%] h-[38%] w-[38%]
          rounded-full blur-[110px]
          ${isDark ? "bg-indigo-500/[0.06]" : "bg-indigo-400/[0.10]"}
        `}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <p
            className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.22em]
              ${isDark ? "text-teal-400" : "text-teal-700"}
            `}
          >
            What I&apos;ve Built
          </p>
          <h2
            className={`relative inline-block pb-3 text-4xl font-bold md:text-5xl
              ${isDark ? "text-slate-100" : "text-slate-900"}
            `}
          >
            Featured Projects
            <span className="absolute bottom-0 left-1/2 h-[3px] w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={tabsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`mx-auto mb-14 flex max-w-xs justify-center gap-2 rounded-full border p-1.5 backdrop-blur-xl
            ${
              isDark
                ? "bg-white/[0.03] border-white/[0.08]"
                : "bg-white/50 border-indigo-200/40"
            }
          `}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-teal-400 text-[#0a0f1e] shadow-[0_0_18px_rgba(45,212,191,0.35)]"
                    : isDark
                      ? "text-slate-400 hover:text-teal-400"
                      : "text-slate-500 hover:text-teal-600"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`py-20 text-center text-base
                  ${isDark ? "text-slate-500" : "text-slate-400"}
                `}
              >
                No projects found in this category.
              </motion.p>
            ) : (
              filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isDark={isDark}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
