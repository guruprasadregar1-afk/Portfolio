import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Code2, Heart, ArrowUp } from 'lucide-react';

const socials = [
  { icon: Github,    href: 'https://github.com/guruprasadregar1-afk',          label: 'GitHub'    },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/guru-prasad-769b99227', label: 'LinkedIn'  },
  { icon: Instagram, href: 'https://www.instagram.com/guruprasad1832',          label: 'Instagram' },
  { icon: Mail,      href: 'mailto:guruprasadregar1@gmail.com',               label: 'Email'     },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Connect Block */}
        <div className="max-w-xl mx-auto mb-12 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-violet-500/20 border border-violet-500/30">
              <Code2 size={18} className="text-violet-400" />
            </div>
            <span className="text-xl font-bold gradient-text">Guru.dev</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>

          <div className="flex justify-center gap-3">
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
