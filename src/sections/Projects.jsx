import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { engineeringProjects } from '../data';

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */

const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 group flex flex-col justify-between"
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

        <p className="text-gray-400 leading-relaxed mb-6">
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
   MAIN COMPONENT
───────────────────────────────────────────── */

const Projects = () => (
  <section id="projects" className="relative py-28 overflow-hidden">
    <div className="blob w-80 h-80 bg-violet-700 top-10 left-10 opacity-20" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Heading */}
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

      {/* Grid — 2 cards side by side */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid md:grid-cols-2 gap-8"
      >
        {engineeringProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
