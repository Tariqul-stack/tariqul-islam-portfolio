'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    name: 'KeenKeeper',
    subtitle: 'Friendship Tracker Web App',
    description: 'A responsive friendship tracker app that helps users stay connected, log interactions, and visualize communication patterns with friends.',
    features: [
      'Chronological timeline of interactions',
      'Interaction filtering by type (call/text/video)',
      'Friend profile detail views',
      'Recharts-based custom pie chart for communication visualization',
      'Local data persistence with localStorage',
      'Real-time feedback using Sonner toast notifications'
    ],
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'DaisyUI', 'Recharts', 'Lucide React', 'Sonner'],
    github: 'https://github.com/Tariqul-stack/KeenKeeper',
    live: '',
    category: 'Frontend',
    image: '/images/keenkeeper.png',
  },
  {
    id: 2,
    name: 'Book Mood',
    subtitle: 'Book Management Web App',
    description: 'A book management app enabling users to explore titles, save to wishlist, mark books as read, and track reading progress visually.',
    features: [
      'Browse and explore book titles',
      'Save books to wishlist',
      'Mark books as read',
      'Sorting by pages and rating',
      'Custom Recharts chart for pages-to-read tracking',
      'Global state with Context API',
      'localStorage for data persistence',
      'Responsive UI with Tailwind CSS and DaisyUI'
    ],
    techStack: ['React.js', 'React Router', 'Context API', 'Tailwind CSS', 'DaisyUI', 'Recharts', 'React Toastify'],
    github: 'https://github.com/Tariqul-stack/book-mood',
    live: '',
    category: 'Frontend',
    image: '/images/bookmood.png',
  }
];

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="glass-card flex flex-col overflow-hidden group h-full"
    >
      {/* Top Image Area */}
      <div className="relative h-52 w-full overflow-hidden bg-[var(--bg-secondary)]">
        <div className="absolute inset-0 group-hover:scale-[1.05] transition-transform duration-500 ease-out">
          {!imgError ? (
            <Image 
              src={project.image} 
              alt={project.name} 
              fill 
              className="object-cover" 
              onError={() => setImgError(true)} 
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[#2dd4bf]/20 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] tracking-wider drop-shadow-sm">
                {project.name}
              </span>
            </div>
          )}
        </div>
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 glass-card px-3 py-1 rounded-full text-xs font-semibold text-[#2dd4bf] z-10">
          {project.category}
        </div>
        <div className="absolute top-3 right-3 glass-card px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 z-10">
          {project.live ? (
            <>
              <span className="text-[var(--text-primary)]">Live</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </>
          ) : (
            <span className="text-[var(--text-secondary)]">Coming Soon</span>
          )}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{project.name}</h3>
        <p className="text-[#2dd4bf] text-sm font-medium mb-4">{project.subtitle}</p>
        
        <p className="text-[var(--text-secondary)] text-sm line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-1.5 mb-6">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
              <FiCheck className="w-4 h-4 text-[#2dd4bf] flex-shrink-0 mt-0.5" />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-[var(--glass-bg)] text-[var(--text-secondary)] border border-[var(--glass-border)] hover:border-[#2dd4bf]/50 transition-colors duration-300 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-card flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 text-sm font-medium"
          >
            <FiGithub className="w-4 h-4" />
            View Code
          </a>
          {project.live ? (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] text-[var(--text-primary)] hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all duration-300 text-sm font-medium"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <button 
              disabled 
              className="glass-card flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg text-[var(--text-muted)] cursor-not-allowed text-sm font-medium"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="relative pt-28 md:pt-32 pb-24 overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: 'var(--orb-teal)' }}></div>
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: 'var(--orb-indigo)' }}></div>

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
        <div className="glass-card flex justify-center gap-3 sm:gap-4 mb-12 p-3 max-w-md mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#2dd4bf] text-[#0a0f1e] shadow-[0_0_15px_rgba(45,212,191,0.4)]'
                  : 'bg-transparent text-[var(--text-secondary)] hover:text-[#2dd4bf] border border-transparent hover:border-[#2dd4bf]/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-1 md:col-span-2 text-center text-[var(--text-muted)] py-20"
            >
              No projects found in this category.
            </motion.div>
          )}
        </motion.div>

        {/* More Projects Coming Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 w-full max-w-3xl mx-auto glass-card border-2 border-dashed border-[#2dd4bf]/30 p-8 text-center"
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">More projects are on the way... 🚀</h3>
          <p className="text-[var(--text-secondary)] font-medium">Currently building and learning new things</p>
        </motion.div>

      </div>
    </section>
  );
}
