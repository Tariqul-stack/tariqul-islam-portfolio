'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for active section highlighting
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-80px 0px -70% 0px', // Adjusted to account for navbar height
      threshold: 0,
    });

    const sections = document.querySelectorAll('section[id], div[id="home"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    if (id === 'home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1
      } 
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`navbar-glass fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.div variants={linkVariants} className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] bg-clip-text text-transparent cursor-pointer"
            >
              TI
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`relative text-base font-medium transition-colors duration-300 hover:text-[#2dd4bf] group ${
                      activeSection === link.id ? 'text-[#2dd4bf]' : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#2dd4bf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      activeSection === link.id ? 'scale-x-100' : ''
                    }`}></span>
                  </a>
                </motion.div>
              ))}

              <motion.div variants={linkVariants}>
                <button
                  onClick={toggleTheme}
                  className="rounded-full p-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[#2dd4bf] transition-transform duration-300 hover:scale-110"
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={theme}
                      initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
                      transition={{ duration: 0.2 }}
                      className="flex"
                    >
                      {theme === 'dark' ? <MdLightMode className="h-6 w-6" /> : <MdDarkMode className="h-6 w-6" />}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </motion.div>

              {/* Hire Me Button */}
              <motion.div variants={linkVariants}>
                <button
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium rounded-full group focus:outline-none"
                >
                  <span className="absolute w-full h-full bg-gradient-to-br from-[#2dd4bf] to-[#6366f1] group-hover:from-[#2dd4bf] group-hover:to-[#6366f1]"></span>
                  <span className="relative px-6 py-2 transition-all ease-in duration-300 bg-[var(--bg-primary)] rounded-full group-hover:bg-opacity-0 text-[var(--text-primary)]">
                    Hire Me
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-secondary)] hover:text-[#2dd4bf] focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <RiCloseLine className="h-8 w-8" />
              ) : (
                <RiMenu3Line className="h-8 w-8" />
              )}
            </button>
          </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden mobile-menu-glass overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 pt-2 pb-6 space-y-2 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-[#2dd4bf] bg-white/10'
                      : 'text-[var(--text-secondary)] hover:text-[#2dd4bf] hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-3 rounded-full p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[#2dd4bf]"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={theme}
                      initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {theme === 'dark' ? <MdLightMode className="h-5 w-5" /> : <MdDarkMode className="h-5 w-5" />}
                      <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
              <div className="pt-4 px-3">
                <button 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="w-full relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium rounded-full group focus:outline-none"
                >
                  <span className="absolute w-full h-full bg-gradient-to-br from-[#2dd4bf] to-[#6366f1]"></span>
                  <span className="relative w-full px-6 py-3 transition-all ease-in duration-300 bg-transparent rounded-full text-[var(--text-primary)]">
                    Hire Me
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
