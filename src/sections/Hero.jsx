import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeInUp, fadeInRight, staggerContainer } from '../animations/variants';
import { downloadResume } from '../hooks/useApi';
import API_URL from '../config/api';

const socials = [
  { icon: FaGithub,   href: 'https://github.com/guruprasad',                              label: 'GitHub'   },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/guru-prasad-769b99227',                    label: 'LinkedIn' },
  { icon: Mail,       href: 'mailto:guruprasadregar1@gmail.com',                          label: 'Email'    },
];

const Hero = () => {
  const handleDownload = async () => {
    try {
      await downloadResume();
    } catch {
      window.open(`${API_URL}/api/resume/download`, '_blank');
    }
  };

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="blob w-96 h-96 bg-violet-600 top-20 -left-32" />
      <div className="blob w-80 h-80 bg-indigo-600 bottom-20 -right-20" style={{ animationDelay: '3s' }} />
      <div className="blob w-64 h-64 bg-purple-700 top-1/2 left-1/3" style={{ animationDelay: '1.5s' }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center lg:text-left">

            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to EU / UAE Opportunities
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Guru</span>
              <br />
              <span className="text-white">Prasad</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 font-medium mb-6 h-10">
              <TypeAnimation
                sequence={[
                  'Senior Full Stack Developer', 2000,
                  'MERN · Next.js · NestJS',     2000,
                  'Web3 & NFT Engineer',         2000,
                  'Micro-Frontend Architect',    2000,
                  'AI Platform Builder',         2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-violet-400 font-semibold"
              />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Results-driven Senior Full Stack Developer with <strong className="text-white">4.5+ years</strong> of experience
              building scalable, production-grade web applications for international clients across
              UK, EU, and US markets. Deep expertise in MERN, Next.js, NestJS, micro-frontends, and Web3.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary text-white flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowDown size={16} />
              </motion.button>

              <motion.button
                onClick={handleDownload}
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-gray-600 text-sm">Find me on</span>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px]">
              <div className="absolute inset-0 rounded-full border border-violet-500/20" style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-8 rounded-full border border-indigo-500/20" style={{ animation: 'spin 15s linear infinite reverse' }} />

              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-600/30 border border-violet-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <div className="text-violet-300 font-semibold text-sm">Senior Full Stack</div>
                  <div className="text-gray-400 text-xs">Developer</div>
                </div>
              </div>

              {[
                { label: 'React',    top: '5%',  left: '40%', delay: 0   },
                { label: 'NestJS',   top: '50%', left: '-5%', delay: 0.5 },
                { label: 'Web3',     top: '75%', left: '30%', delay: 1   },
                { label: 'Next.js',  top: '40%', left: '82%', delay: 1.5 },
                { label: 'AWS',      top: '15%', left: '70%', delay: 0.8 },
              ].map(({ label, top, left, delay }) => (
                <motion.div
                  key={label}
                  className="absolute glass px-3 py-1.5 text-xs font-semibold text-violet-300 rounded-lg"
                  style={{ top, left }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3 + delay, repeat: Infinity, delay }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs">Scroll down</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
