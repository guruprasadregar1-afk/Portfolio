import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Mail, Code2, Heart, ArrowUp } from 'lucide-react';
import { navLinks } from '../data';

const socials = [
  { icon: Github, href: 'https://github.com/guruprasad', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/guruprasadregar', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/tripti_shri_', label: 'Instagram' },
  { icon: Mail, href: 'mailto:guruprasadregar1@gmail.com', label: 'Email' },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-violet-500/20 border border-violet-500/30">
                <Code2 size={18} className="text-violet-400" />
              </div>
              <span className="text-xl font-bold gradient-text">Guru.dev</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Senior Full Stack Developer with 4.5+ years of experience building scalable, production-grade applications using React.js, Next.js, Node.js, NestJS, and MongoDB for UK, EU, and US clients, with expertise in MERN stack, micro-frontends, and Web3.

            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-gray-500 hover:text-violet-400 text-sm text-left transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Connect</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-white/10 text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Guru Prasad. Designed & Developed with{' '}
            <Heart size={12} className="text-pink-500 fill-pink-500 mx-0.5" /> using React + Node.js
          </p>
          <motion.button
            onClick={scrollTop}
            className="p-2.5 rounded-xl border border-white/10 text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all"
            whileHover={{ scale: 1.1 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
