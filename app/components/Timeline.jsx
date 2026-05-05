'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiTerminal, FiUsers, FiTarget, FiArrowRight, FiSquare } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { IoRocketOutline } from 'react-icons/io5';

const timelineData = [
  {
    id: 1,
    year: '2023',
    title: 'The Spark 💡',
    description: 'Discovered web development and fell in love with how code creates real, visual things. Started learning HTML, CSS and basic JavaScript from scratch.',
    icon: FiBookOpen,
    colorTheme: 'teal'
  },
  {
    id: 2,
    year: '2024 (Early)',
    title: 'Going Deeper 🔥',
    description: 'Started building with React.js. Learned component-based architecture, props, state, hooks, and Context API. Built my first real projects.',
    icon: FiTerminal,
    colorTheme: 'indigo'
  },
  {
    id: 3,
    year: '2024 (Mid)',
    title: 'Aspire Leadership Program 🤝',
    description: 'Participated in structured leadership development activities. Strengthened teamwork, communication, and problem-solving skills in cross-functional team settings.',
    icon: FiUsers,
    colorTheme: 'teal'
  },
  {
    id: 4,
    year: '2024 (Late)',
    title: 'University Begins 🎓',
    description: 'Started Bachelor of Computer Science at Northeast Petroleum University, Daqing, China. Balancing academics with continuous self-driven frontend development learning.',
    icon: FaGraduationCap,
    colorTheme: 'indigo'
  },
  {
    id: 5,
    year: '2025',
    title: 'Level Up — Next.js & Beyond ▲',
    description: 'Dove deep into Next.js App Router, authentication systems with BetterAuth, MongoDB, and started building more complex full-stack aware frontend applications.',
    icon: IoRocketOutline,
    colorTheme: 'teal'
  },
  {
    id: 6,
    year: 'Now',
    title: 'Building & Seeking Remote Work 🚀',
    description: 'Actively building portfolio projects, sharpening skills daily, and seeking remote frontend developer opportunities to contribute to a product-focused team.',
    icon: FiTarget,
    colorTheme: 'indigo',
    isPresent: true
  }
];

const nextGoals = [
  'Master full-stack development',
  'Land a remote frontend role',
  'Contribute to open source',
  'Build products that matter'
];

export default function Timeline() {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="journey" className="relative pt-28 md:pt-32 pb-24 overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: 'var(--orb-indigo)' }}></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: 'var(--orb-teal)' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-[#2dd4bf] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            My Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] inline-block relative pb-2">
            The Journey So Far
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent"></span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#2dd4bf] to-[#6366f1] origin-top rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)] z-0"
          />

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              // Colors based on theme
              const themeColor = item.colorTheme === 'teal' ? '#2dd4bf' : '#6366f1';
              const themeBg = item.colorTheme === 'teal' ? 'bg-[#2dd4bf]' : 'bg-[#6366f1]';
              const themeBorder = item.colorTheme === 'teal' ? 'border-[#2dd4bf]' : 'border-[#6366f1]';
              const badgeBg = item.colorTheme === 'teal' ? 'bg-[#2dd4bf]/10 text-[#2dd4bf]' : 'bg-[#6366f1]/10 text-[#6366f1]';
              const lineBg = item.colorTheme === 'teal' ? 'bg-[#2dd4bf]/30' : 'bg-[#6366f1]/30';

              return (
                <div key={item.id} className="relative flex items-center md:justify-between w-full">
                  
                  {/* Card Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`flex w-full md:w-[45%] pl-[80px] md:pl-0 ${isLeft ? 'md:justify-end' : 'md:justify-start'} ${!isLeft ? 'md:ml-auto' : ''}`}
                  >
                    <div className={`relative w-full glass-card p-6 md:p-8 border-l-[4px] ${themeBorder} group`}>
                      
                      {/* Connecting Horizontal Line (Desktop only) */}
                      <div className={`hidden md:block absolute top-10 w-8 h-[2px] ${lineBg} ${isLeft ? '-right-8' : '-left-8'}`}></div>
                      
                      {/* Year Badge & Status */}
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeBg} border ${themeBorder}/20`}>
                          {item.year}
                        </span>
                        
                        {item.isPresent && (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Present
                          </span>
                        )}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>

                  {/* Center Dot Connector */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="absolute left-[39px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 top-8 md:top-8"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg relative ${themeBg} border border-[var(--glass-border)]`}>
                      {/* Pulsing Glow Ring */}
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${themeBg}`}></div>
                      <item.icon className="text-[var(--text-primary)] text-lg md:text-xl relative z-10" />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

        {/* What's Next / Progress Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-3xl mx-auto w-full glass-card border border-dashed border-[#2dd4bf]/40 p-8 md:p-10 text-center relative overflow-hidden group hover:border-[#2dd4bf]/80 transition-colors duration-500"
        >
          {/* Top Gradient Edge */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2dd4bf] to-[#6366f1]"></div>
          
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Next Chapter 🎯</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {nextGoals.map((goal, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1 + (i * 0.1) }}
                className="glass-card flex items-center gap-4 p-4 rounded-xl transition-colors duration-300 border border-transparent group/item"
              >
                <FiArrowRight className="text-[#2dd4bf] w-5 h-5 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity transform -translate-x-2 group-hover/item:translate-x-0" />
                <span className="text-[var(--text-primary)] text-sm md:text-base font-medium flex-1">{goal}</span>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-[var(--text-muted)] hover:text-[#2dd4bf] transition-colors cursor-pointer flex-shrink-0"
                >
                  <FiSquare className="w-5 h-5" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
