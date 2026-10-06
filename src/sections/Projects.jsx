import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Layout, Search, HelpCircle, ArrowRight, Cpu } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { engineeringProjects, aiSystems } from '../data';

/* ─────────────────────────────────────────────
   ENGINEERING PROJECT CARD
───────────────────────────────────────────── */

const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 group flex flex-col justify-between h-full"
  >
    {/* Top part: Image + Details */}
    <div>
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback if image missing */}
        <div
          style={{ display: 'none' }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/40 to-indigo-900/40 p-4 text-center"
        >
          <span className="text-violet-300 text-sm font-medium">{project.title}</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-violet-600/90 text-white text-xs font-medium shadow-lg">
            <Star size={12} fill="white" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map(tech => (
            <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Buttons at bottom */}
    <div className="px-7 pb-7">
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        {project.githubBackend && (
          <a
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-300 text-sm"
          >
            <Github size={18} />
            Backend
          </a>
        )}

        {project.githubFrontend && (
          <a
            href={project.githubFrontend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-300 text-sm"
          >
            <Github size={18} />
            Frontend
          </a>
        )}

        {project.github && !project.githubBackend && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-300 text-sm"
          >
            <Github size={18} />
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-lg shadow-violet-500/20 text-sm"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   AI SYSTEM CARD
───────────────────────────────────────────── */

const iconMap = {
  Layout: Layout,
  Search: Search,
  HelpCircle: HelpCircle,
};

const AISystemCard = ({ system }) => {
  const Icon = iconMap[system.icon] || Cpu;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="rounded-3xl p-7 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl flex flex-col justify-between h-full transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
    >
      <div className="flex flex-col flex-1">
        {/* Top Badge */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
            <Icon size={22} />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
            {system.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
          {system.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {system.description}
        </p>

        {/* 3-Step Mini Flow */}
        {system.flow && system.flow.length > 0 && (
          <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 mt-auto mb-4">
            <p className="text-[11px] font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-3">
              System Process Flow
            </p>
            <div className="flex flex-wrap items-center gap-1.5 max-w-full">
              {system.flow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-medium max-w-full break-words">
                    {step}
                  </span>
                  {idx < system.flow.length - 1 && (
                    <ArrowRight size={12} className="text-gray-400 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tech Stack Tags */}
      {system.techStack && system.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-black/5 dark:border-white/5">
          {system.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-black/10 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   COMBINED PROJECTS + AI SECTION
───────────────────────────────────────────── */

const Projects = () => (
  <section id="projects" className="relative py-28 overflow-hidden">
    {/* Background Blobs */}
    <div className="blob w-80 h-80 bg-violet-700 top-10 left-10 opacity-20" />
    <div className="blob w-80 h-80 bg-indigo-600 bottom-10 right-0 opacity-15" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

      {/* ── GROUP 1: Featured Engineering Projects ── */}
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Software Engineering
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Open-source AI tools and production platforms built for scale
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {engineeringProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      {/* ── GROUP 2: AI Systems ── */}
      <div id="ai-systems" className="pt-20 border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            AI Engineering & Workflows
          </p>
          <h2 className="section-title">
            <span className="gradient-text">AI</span> Systems
          </h2>
          <p className="section-subtitle">
            Building and shipping AI-powered systems, and building faster with AI.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {aiSystems.map((system) => (
            <AISystemCard key={system.id} system={system} />
          ))}
        </motion.div>
      </div>

    </div>
  </section>
);

export default Projects;
