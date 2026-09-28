import { motion } from 'framer-motion';
import { Compass, Sparkles, ArrowRight, MessageSquare, Atom, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, viewportOptions } from '../animations/variants';
import { scienceTopics, scienceIntroCopy, researchProjects } from '../data';

const Science = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="science" className="relative py-28 overflow-hidden bg-white/[0.01]">
      {/* Background Blobs */}
      <div className="blob w-96 h-96 bg-purple-700/20 top-20 left-10 opacity-25" />
      <div className="blob w-80 h-80 bg-indigo-700/20 bottom-10 right-10 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Curiosity & Theoretical Exploration
          </p>
          <h2 className="section-title">
            Science & <span className="gradient-text">Curiosity</span>
          </h2>
          <p className="section-subtitle">
            Where my curiosity goes beyond shipping product.
          </p>
        </motion.div>

        {/* Intro Paragraph Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl mb-14"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-400 shrink-0 hidden sm:block">
              <Atom size={24} />
            </div>
            {/* // [DRAFT, review wording] */}
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {scienceIntroCopy}
            </p>
          </div>
        </motion.div>

        {/* Currently Exploring Topic Cards */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
            <Compass size={20} className="text-violet-400" />
            Currently Exploring
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid md:grid-cols-2 gap-6"
          >
            {scienceTopics.map((topic) => {
              // Dynamically read status from researchProjects if researchId exists
              const linkedResearch = topic.researchId
                ? researchProjects.find((r) => r.id === topic.researchId)
                : null;
              const statusText = linkedResearch ? linkedResearch.status : topic.status || 'Exploring';

              return (
                <motion.div
                  key={topic.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl p-7 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
                >
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                        {statusText}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-black dark:text-white mb-2">
                      {topic.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {topic.description}
                    </p>
                  </div>

                  {topic.researchId ? (
                    <Link
                      to={`/research/${topic.researchId}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline pt-3 border-t border-black/5 dark:border-white/5"
                    >
                      Explore research case study <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-400 italic pt-3 border-t border-black/5 dark:border-white/5">
                      Early conceptual exploration
                    </span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* // [DRAFT, review wording] */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 text-center sm:text-left">
            Also curious about time and relativity.
          </p>
        </div>

        {/* My Research So Far Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="rounded-3xl p-7 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
              <Beaker size={18} className="text-violet-400" />
              My Research So Far
            </h3>
            <button
              onClick={() => scrollTo('research')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
            >
              See full research section <ArrowRight size={14} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {researchProjects.map((project) => (
              <Link
                key={project.id}
                to={`/research/${project.id}`}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-300 transition-all text-xs font-medium"
              >
                <span>{project.title}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                  {project.status}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="rounded-3xl p-8 border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={16} />
                Joint Exploration & Innovation
              </div>
              <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                Have an idea related to science, or a business idea? Let's talk. If it's interesting enough, maybe we build something new and unique together.
              </p>
            </div>

            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary text-white flex items-center gap-2 text-xs font-semibold px-6 py-3 shrink-0"
            >
              <MessageSquare size={15} />
              Start a conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Science;
