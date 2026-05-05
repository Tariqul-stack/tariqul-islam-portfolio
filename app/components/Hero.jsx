'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RiArrowDownLine } from 'react-icons/ri';

const roles = [
  "Junior Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "UI Enthusiast"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
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
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }
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
      }
    })
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] overflow-hidden pt-24 transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 section-grid"></div>
      
      {/* Blurred Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'var(--orb-teal)' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'var(--orb-indigo)' }}></div>

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
            <motion.div variants={textVariants} className="flex items-start lg:items-center">
              <div className="glass-card inline-flex items-center px-4 py-2 rounded-full text-[#2dd4bf] text-sm font-medium">
                <span className="flex w-2 h-2 rounded-full bg-[#2dd4bf] mr-2 animate-pulse"></span>
                👋 Available for Remote & Freelance
              </div>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div variants={textVariants}>
              <h2 className="text-[#2dd4bf] text-lg font-medium mb-2">Hi, I&apos;m</h2>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight">
                <span className="bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] bg-clip-text text-transparent">
                  Tariqul
                </span>{' '}
                Islam
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div variants={textVariants} className="text-2xl lg:text-3xl font-semibold text-[var(--text-secondary)] h-10 flex items-center">
              {currentText}
              <span className="w-[3px] h-8 bg-[#2dd4bf] ml-1 animate-pulse"></span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={textVariants} className="text-[var(--text-secondary)] text-lg max-w-lg leading-relaxed">
              I build clean, responsive web apps with React & Next.js. I&apos;m passionate about creating seamless digital experiences and turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToProjects}
                className="px-8 py-3 rounded-full font-medium text-[var(--text-primary)] bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </button>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card px-8 py-3 rounded-full font-medium text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={textVariants} className="flex items-center space-x-6 pt-4">
              <a href="https://github.com/Tariqul-stack" target="_blank" rel="noopener noreferrer" className="glass-card p-3 text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 transform hover:scale-110">
                <FiGithub className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/tariqul-islam-dev" target="_blank" rel="noopener noreferrer" className="glass-card p-3 text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 transform hover:scale-110">
                <FiLinkedin className="w-7 h-7" />
              </a>
              <a href="mailto:tariqul.dev0@gmail.com" className="glass-card p-3 text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 transform hover:scale-110">
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
            {/* Glowing Blobs Behind Image */}
            <div className="absolute w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] rounded-full blur-[70px] opacity-30 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-r from-[#2dd4bf] to-[#6366f1]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] rounded-full blur-md opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--bg-primary)] border-[6px] border-[var(--bg-primary)]">
                <div className="absolute inset-0 bg-[var(--bg-secondary)]"></div>
                {!profileImageError ? (
                  <Image
                    src="/images/profile.png"
                    alt="Tariqul Islam"
                    fill
                    className="object-cover z-10"
                    sizes="(max-width: 768px) 280px, 400px"
                    priority
                    unoptimized
                    onError={() => setProfileImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] text-center">
                    <span className="bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] bg-clip-text text-transparent text-6xl font-extrabold tracking-tight">
                      TI
                    </span>
                    <span className="mt-3 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                      Frontend Dev
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              custom={1}
              variants={floatingBadgeVariants}
              animate="animate"
              className="absolute top-5 right-0 lg:-right-8 glass-card text-[var(--text-primary)] px-4 py-2 rounded-xl flex items-center gap-2 z-20"
            >
              <span className="text-xl">⚛️</span>
              <span className="font-medium text-sm">React</span>
            </motion.div>

            <motion.div 
              custom={2}
              variants={floatingBadgeVariants}
              animate="animate"
              className="absolute bottom-10 left-0 lg:-left-8 glass-card text-[var(--text-primary)] px-4 py-2 rounded-xl flex items-center gap-2 z-20"
            >
              <span className="text-xl">▲</span>
              <span className="font-medium text-sm">Next.js</span>
            </motion.div>

            <motion.div 
              custom={3}
              variants={floatingBadgeVariants}
              animate="animate"
              className="absolute top-24 -left-4 lg:-left-12 glass-card text-[var(--text-primary)] px-4 py-2 rounded-xl z-20"
            >
              <span className="font-medium text-sm">1+ yr exp 🚀</span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-20 ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: showScroll ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--text-secondary)] flex flex-col items-center cursor-pointer hover:text-[#2dd4bf] transition-colors duration-300"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <RiArrowDownLine className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
