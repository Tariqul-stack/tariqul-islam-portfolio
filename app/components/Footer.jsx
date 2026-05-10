"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpLine } from "react-icons/ri";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#2dd4bf] text-[#0a0f1e] rounded-full shadow-lg hover:bg-white transition-colors duration-300 group"
          aria-label="Back to top"
        >
          <RiArrowUpLine className="text-2xl group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: SiGithub, href: "https://github.com/Tariqul-stack" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/tariqul-islam-dev" },
    { icon: MdEmail, href: "mailto:tariqul.dev0@gmail.com" },
    { icon: SiWhatsapp, href: "https://wa.me/8801911296716" },
  ];

  return (
    <footer className="footer-glass pt-16 pb-8 transition-colors duration-300 overflow-hidden">
      {/* Background Orbs */}
      <div
        className="absolute bottom-0 left-[10%] w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-20"
        style={{ backgroundColor: "#2dd4bf" }}
      ></div>
      <div
        className="absolute top-0 right-[10%] w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-10"
        style={{ backgroundColor: "#6366f1" }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal to-indigo bg-clip-text text-transparent mb-2">
              TI
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs">
              Building clean web experiences, one component at a time.
            </p>
          </div>

          {/* Quick Nav */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[#2dd4bf] transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 rounded-lg text-[#2dd4bf] hover:bg-[#2dd4bf] hover:text-[#0a0f1e] transition-all duration-300"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent mb-8"></div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--text-muted)] text-xs relative z-10">
          <p>
            © {new Date().getFullYear()} Tariqul Islam. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Let's Build Something Amazing...
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
