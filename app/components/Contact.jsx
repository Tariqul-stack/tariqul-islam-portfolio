/*
EMAILJS SETUP:
1. Go to https://emailjs.com and create free account
2. Add Email Service → get SERVICE_ID
3. Create Email Template → get TEMPLATE_ID
   Template variables to use:
   - {{from_name}} → sender name
   - {{from_email}} → sender email
   - {{subject}} → email subject
   - {{message}} → email message
   - {{to_name}} → "Tariqul Islam"
4. Get PUBLIC_KEY from Account → API Keys
5. Replace the 3 placeholder values in this file
6. Run: npm install @emailjs/browser
*/

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SiGithub, SiWhatsapp } from 'react-icons/si';
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';
import { FiSend, FiLinkedin } from 'react-icons/fi';

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const subjectOptions = [
    "Job Opportunity",
    "Freelance Project",
    "Collaboration",
    "Just Saying Hi 👋"
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error on change
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // If placeholders are not replaced, simulate success for demonstration
    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Tariqul Islam",
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  const inputClasses = (hasError) => 
    `glass-input w-full text-[var(--text-primary)] border ${hasError ? 'border-red-500' : 'border-[var(--glass-border)]'} rounded-lg px-4 py-3 focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-colors placeholder:text-[var(--text-muted)]`;

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const inputItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <section id="contact" className="relative py-24 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 section-grid"></div>
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: 'var(--orb-teal)' }}></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: 'var(--orb-indigo)' }}></div>

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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] inline-block relative pb-2">
            Let&apos;s Work Together
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Availability Card */}
            <div className="glass-card border-l-4 border-l-[#2dd4bf] rounded-r-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[var(--text-primary)] font-semibold tracking-wide text-sm">Available for work</span>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                I&apos;m currently open to remote frontend developer roles and freelance projects. Let&apos;s build something great together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-[#2dd4bf] flex-shrink-0">
                  <MdEmail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] mb-1">Email</p>
                  <a href="mailto:tariqul.dev0@gmail.com" className="text-[var(--text-primary)] font-medium hover:text-[#2dd4bf] transition-colors">
                    tariqul.dev0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-[#2dd4bf] flex-shrink-0">
                  <MdPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] mb-1">Phone</p>
                  <a href="tel:+8801911296716" className="text-[var(--text-primary)] font-medium hover:text-[#2dd4bf] transition-colors">
                    +8801911296716
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-[#2dd4bf] flex-shrink-0">
                  <MdLocationOn className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] mb-1">Location</p>
                  <p className="text-[var(--text-primary)] font-medium">
                    Daqing, China
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-2">
              <p className="text-sm text-[var(--text-secondary)] mb-4 uppercase tracking-wider font-semibold">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { icon: SiGithub, href: 'https://github.com/Tariqul-stack' },
                  { icon: FiLinkedin, href: 'https://linkedin.com/in/tariqul-islam-dev' },
                  { icon: MdEmail, href: 'mailto:tariqul.dev0@gmail.com' },
                  { icon: SiWhatsapp, href: 'https://wa.me/8801911296716' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="glass-card w-12 h-12 rounded-lg flex items-center justify-center text-[#2dd4bf] hover:bg-[#2dd4bf] hover:text-[#0a0f1e] hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Card */}
            <div className="glass-card rounded-xl p-4 flex items-center gap-4 mt-2">
              <div className="glass-card w-10 h-10 rounded-full flex items-center justify-center text-[#2dd4bf] flex-shrink-0">
                <MdAccessTime className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[var(--text-primary)] font-semibold text-sm">⚡ Quick Response</p>
                <p className="text-[var(--text-secondary)] text-xs mt-1">I typically reply within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <motion.div variants={inputItemVariants}>
                <label htmlFor="name" className="block text-[#2dd4bf] text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses(errors.name)}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
              </motion.div>

              <motion.div variants={inputItemVariants}>
                <label htmlFor="email" className="block text-[#2dd4bf] text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses(errors.email)}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
              </motion.div>

              <motion.div variants={inputItemVariants}>
                <label htmlFor="subject" className="block text-[#2dd4bf] text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses(errors.subject)}
                  placeholder="What is this regarding?"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.subject}</p>}
                
                {/* Subject Quick-select Chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {subjectOptions.map(opt => (
                    <button 
                      type="button" 
                      key={opt}
                      onClick={() => {
                        setFormData(prev => ({...prev, subject: opt}));
                        if (errors.subject) setErrors(prev => ({...prev, subject: null}));
                      }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        formData.subject === opt 
                          ? 'bg-[#2dd4bf] text-[#0a0f1e] border-[#2dd4bf]' 
                          : 'bg-[var(--glass-bg)] text-[var(--text-secondary)] border-[var(--glass-border)] hover:border-[#2dd4bf]/50 hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={inputItemVariants}>
                <label htmlFor="message" className="block text-[#2dd4bf] text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`${inputClasses(errors.message)} resize-none`}
                  placeholder="Hello Tariqul, I&apos;d like to talk about..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message}</p>}
              </motion.div>

              <motion.div variants={inputItemVariants} className="pt-2">
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] text-[var(--text-primary)] font-bold text-lg hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && <><FiSend className="w-5 h-5" /> Send Message 🚀</>}
                  {status === 'loading' && <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending...</>}
                  {status === 'success' && <>Message Sent! ✅</>}
                  {status === 'error' && <>Failed. Try Again ❌</>}
                </motion.button>
              </motion.div>

            </form>
          </motion.div>

        </div>

        {/* Bottom CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 w-full glass-card p-8 relative overflow-hidden"
        >
          {/* Gradient Border Hack */}
          <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] -z-10">
            <div className="absolute inset-[2px] bg-[var(--bg-card)] rounded-[14px]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Prefer a quick chat? Reach out directly</h3>
              <p className="text-[var(--text-secondary)] text-sm">I&apos;m always active on WhatsApp and Email.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:tariqul.dev0@gmail.com" className="glass-card px-6 py-3 rounded-xl text-[var(--text-primary)] font-medium hover:border-[#2dd4bf]/50 hover:bg-white/5 transition-colors flex items-center gap-2">
                <MdEmail className="text-[#2dd4bf] w-5 h-5" /> Email Me
              </a>
              <a href="https://wa.me/8801911296716" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#6366f1] text-[var(--text-primary)] font-medium hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all duration-300 flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
