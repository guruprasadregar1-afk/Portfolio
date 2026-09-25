import { motion } from 'framer-motion';
import { ArrowRight, Beaker, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { researchProjects } from '../data';

const ResearchCard = ({ project }) => {
  const isPlaceholder = project.status === 'Coming soon' || project.tagline === '[PLACEHOLDER — awaiting content]';

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 group flex flex-col justify-between"
    >
      <div className="p-7">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
            <Beaker size={13} />
            Research Study
          </span>
          <span
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
              isPlaceholder
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
            }`}
          >
            {isPlaceholder ? <Clock size={12} /> : <CheckCircle2 size={12} />}
            {isPlaceholder ? 'Coming soon' : project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {isPlaceholder ? 'Technical case study and research methodology currently in preparation.' : project.tagline}
        </p>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer / Action */}
      <div className="px-7 pb-7 pt-2 border-t border-white/5">
        <Link
          to={`/research/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 group-hover:translate-x-1 transition-all duration-200"
          aria-label={`View research detail for ${project.title}`}
        >
          View Research <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

const Research = () => (
  <section id="research" className="relative py-28 overflow-hidden bg-white/[0.01]">
    <div className="blob w-96 h-96 bg-indigo-700/20 bottom-10 right-10 opacity-30" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
          Applied Research & Experiments
        </p>
        <h2 className="section-title">
          Research <span className="gradient-text">Case Studies</span>
        </h2>
        <p className="section-subtitle">
          Rigorous investigations, spatial computing prototypes, and technical findings verified against production criteria.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid md:grid-cols-2 gap-8"
      >
        {researchProjects.map((project) => (
          <ResearchCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Research;
