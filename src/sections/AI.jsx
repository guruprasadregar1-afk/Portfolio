import { motion } from 'framer-motion';
import { Layout, Search, HelpCircle, ArrowRight, Cpu } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../animations/variants';
import { aiSystems } from '../data';

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

      {/* Tech Stack Tags (Hidden when empty) */}
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

const AI = () => {
  return (
    <section id="ai" className="relative py-28 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob w-80 h-80 bg-violet-600 top-10 right-0 opacity-15" />
      <div className="blob w-72 h-72 bg-indigo-600 bottom-10 left-0 opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
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

        {/* System Cards Grid */}
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
    </section>
  );
};

export default AI;
