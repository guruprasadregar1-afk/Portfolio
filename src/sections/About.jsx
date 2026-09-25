import { motion } from 'framer-motion';
import { Code, Layers, Briefcase, Globe } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from '../animations/variants';

const stats = [
  { icon: 'briefcase', value: '4.5+', label: 'Years Experience'      },
  { icon: 'layers',    value: '8+',   label: 'Projects Delivered'    },
  { icon: 'globe',     value: '10+',  label: 'International Clients' },
  { icon: 'code',      value: '20+',  label: 'Technologies'          },
];

const iconMap = { code: Code, layers: Layers, briefcase: Briefcase, globe: Globe };

const About = () => (
  <section id="about" className="relative py-28 overflow-hidden">
    <div className="blob w-80 h-80 bg-violet-700 top-10 left-0 opacity-20" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left */}
        <motion.div variants={fadeInLeft}>
          <p className="text-violet-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building Production-Grade{' '}
            <span className="gradient-text">Global Applications</span>
          </h2>

          <div className="space-y-5 text-gray-400 text-base leading-relaxed">
            <p>
              I'm{' '}
              <span className="text-white font-semibold">Guru Prasad</span>
              , a Senior Full Stack Developer with{' '}
              <span className="text-violet-400 font-semibold">4.5+ years of experience</span>{' '}
              at Dotsquares Technologies, Jaipur — delivering scalable, production-grade web applications
              for international clients across the UK, EU, and US.
            </p>

            <p>
              I specialize in the <span className="text-violet-400 font-semibold">MERN stack, Next.js, NestJS</span>,
              and micro-frontend architecture. My work spans AI chat platforms, NFT/blockchain solutions,
              premium e-commerce stores, e-learning systems, and real-time applications.
            </p>

            <p>
              I have end-to-end ownership of projects —{' '}
              <span className="text-violet-400 font-semibold">from client requirements and architecture
              to AWS deployment and post-release monitoring</span>. I also mentor junior developers
              and enforce code quality standards across the team.
            </p>

            <p>
              Currently expanding into{' '}
              <span className="text-violet-400 font-semibold">Go (Gin framework)</span>{' '}
              for high-performance backends, and actively seeking senior roles in{' '}
              <span className="text-violet-400 font-semibold">EU or UAE</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              'React.js', 'Next.js', 'NestJS', 'Node.js', 'Express.js',
              'MongoDB', 'PostgreSQL', 'TypeScript', 'Redux',
              'Micro-Frontend', 'Web3', 'NFT Dev', 'AWS', 'Stripe / PayPal',
              'Angular', 'Go (Learning)',
            ].map(tech => (
              <span key={tech}
                className="px-4 py-2 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Code;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="glass-dark p-7 rounded-3xl border border-white/10 group transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-all">
                  <Icon size={24} className="text-violet-400" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}

          <motion.div variants={fadeInUp} custom={5} className="col-span-2 glass-dark rounded-3xl p-6 border border-violet-500/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Senior Full Stack Developer at{' '}
                <span className="text-violet-400 font-semibold">Dotsquares Technologies</span>
                {' '}· Open to relocation:{' '}
                <span className="text-violet-400 font-semibold">EU / UAE</span>
                {' '}· 60-day notice period
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
