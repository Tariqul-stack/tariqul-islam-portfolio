"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGoogle,
  SiNodedotjs,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbChartBar, TbApi, TbComponents, TbBell } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

const skillsData = [
  {
    name: "JavaScript (ES6+)",
    category: "Languages",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "HTML5",
    category: "Languages",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  { name: "CSS3", category: "Languages", icon: SiCss, color: "text-blue-500" },
  {
    name: "React.js",
    category: "Frameworks",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    category: "Frameworks",
    icon: SiNextdotjs,
    color: "text-[var(--text-primary)]",
  },
  {
    name: "React Router",
    category: "Frameworks",
    icon: SiReactrouter,
    color: "text-red-500",
  },
  {
    name: "Context API",
    category: "Frameworks",
    icon: TbApi,
    color: "text-indigo-400",
  },
  {
    name: "Node.js",
    category: "Frameworks",
    icon: SiNodedotjs,
    color: "text-[#339933]",
  },
  {
    name: "Express.js",
    category: "Frameworks",
    icon: SiExpress,
    color: "text-[var(--text-primary)]",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    color: "text-teal-400",
  },
  {
    name: "DaisyUI",
    category: "Styling",
    icon: SiDaisyui,
    color: "text-teal-300",
  },
  {
    name: "Hero UI",
    category: "Styling",
    icon: TbComponents,
    color: "text-[#2dd4bf]",
  },
  {
    name: "Better Auth",
    category: "Database & Auth",
    icon: MdSecurity,
    color: "text-teal-500",
  },
  {
    name: "MongoDB Atlas",
    category: "Database & Auth",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    category: "Database & Auth",
    icon: SiMongodb,
    color: "text-[#47A248]",
  },
  {
    name: "Google OAuth",
    category: "Database & Auth",
    icon: SiGoogle,
    color: "text-blue-500",
  },
  {
    name: "Recharts",
    category: "Tools",
    icon: TbChartBar,
    color: "text-teal-400",
  },
  {
    name: "React Toastify",
    category: "Tools",
    icon: TbBell,
    color: "text-orange-400",
  },
  { name: "Sonner", category: "Tools", icon: TbBell, color: "text-yellow-400" },
  {
    name: "Lucide React",
    category: "Tools",
    icon: TbComponents,
    color: "text-[var(--text-primary)]",
  },
  { name: "Git", category: "Tools", icon: SiGit, color: "text-orange-600" },
  {
    name: "GitHub",
    category: "Tools",
    icon: SiGithub,
    color: "text-[var(--text-primary)]",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: SiVercel,
    color: "text-[var(--text-primary)]",
  },
  {
    name: "Netlify",
    category: "Tools",
    icon: SiNetlify,
    color: "text-[#00C7B7]",
  },
];

const categories = [
  "All",
  "Languages",
  "Frameworks",
  "Styling",
  "Database & Auth",
  "Tools",
];

const skillBars = [
  { name: "HTML/CSS", percentage: 85 },
  { name: "JavaScript", percentage: 75 },
  { name: "React.js", percentage: 70 },
  { name: "Next.js", percentage: 60 },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

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
      id="skills"
      className="relative pt-28 md:pt-32 pb-24 overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div
        className="absolute top-[10%] right-[0%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0"
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
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] inline-block relative pb-2">
            My Tech Stack
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent"></span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="glass-card flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 p-3 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#2dd4bf] text-[#0a0f1e] shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                  : "bg-transparent text-[var(--text-secondary)] hover:text-[#2dd4bf] hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid with AnimatePresence */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 group"
                >
                  <skill.icon
                    className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h4 className="text-[var(--text-primary)] font-medium mb-1">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-[var(--text-muted)]">
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-col items-center"
        >
          <h3 className="text-xl font-bold text-[#2dd4bf] mb-6">
            Currently Exploring 🚀
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js Advanced Patterns",
              "BetterAuth Deep Dive",
              "Full-Stack Architecture",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card inline-flex items-center px-6 py-3 rounded-full border-dashed text-[#2dd4bf] text-sm font-medium hover:border-[#2dd4bf] hover:bg-[#2dd4bf]/5 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf] mr-3 animate-pulse"></span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="mt-24 max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center"
          >
            Core Proficiency
          </motion.h3>
          <div className="space-y-6">
            {skillBars.map((skill, index) => (
              <div key={skill.name} className="glass-card relative p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[var(--text-primary)] font-medium">
                    {skill.name}
                  </span>
                  <span className="text-[#2dd4bf] font-medium">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-[var(--glass-border)]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] rounded-full relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
