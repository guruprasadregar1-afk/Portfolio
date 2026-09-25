import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Beaker, CheckCircle2, Clock, ExternalLink, Github, FileText, Cpu, Target, Award, Camera, Video } from 'lucide-react';
import { researchProjects } from '../data';
import NotFound from './NotFound';

const ResearchDetail = () => {
  const { id } = useParams();
  const project = researchProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Research Case Study | Guru Prasad`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          project.status === 'Coming soon' || project.tagline === '[PLACEHOLDER — awaiting content]'
            ? `Technical case study for ${project.title} — Guru Prasad.`
            : `${project.title}: ${project.tagline}`
        );
      }
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const isPlaceholder =
    project.status === 'Coming soon' ||
    project.tagline === '[PLACEHOLDER — awaiting content]' ||
    project.researchQuestion === '[PLACEHOLDER — awaiting content]';

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-200">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-violet-500/40 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Overview
        </Link>
      </motion.div>

      {/* Header / Hero */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -z-10" />

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
            <Beaker size={13} />
            Research Technical Report
          </span>
          <span
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
              isPlaceholder
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
            }`}
          >
            {isPlaceholder ? <Clock size={12} /> : <CheckCircle2 size={12} />}
            {isPlaceholder ? 'Coming Soon' : project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
          {isPlaceholder
            ? 'Detailed investigation report and experimental framework currently being compiled.'
            : project.tagline}
        </p>

        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.header>

      {/* Content */}
      {isPlaceholder ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Clock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Research Report in Progress</h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
            The full technical case study, performance analysis, and experimental methodology for {project.title} are currently undergoing final documentation and review.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-lg shadow-violet-500/20"
          >
            Explore Other Work
          </Link>
        </motion.div>
      ) : (
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          {/* Research Question */}
          <section className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4 text-violet-400">
              <Target size={22} />
              <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                1. Research Question & Objective
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
              {project.researchQuestion}
            </p>
          </section>

          {/* Methodology */}
          <section className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4 text-violet-400">
              <FileText size={22} />
              <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                2. Methodology & Approach
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
              {project.methodology}
            </p>
          </section>

          {/* Implementation */}
          <section className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4 text-violet-400">
              <Cpu size={22} />
              <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                3. Technical Architecture & Implementation
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
              {project.implementation}
            </p>
          </section>

          {/* Video Demonstration */}
          {project.video && (
            <section className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 text-violet-400">
                <Video size={22} />
                <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                  Video Demonstration & Gameplay Proof
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950">
                <video
                  controls
                  preload="metadata"
                  className="w-full max-h-[480px] object-contain rounded-2xl"
                  src={project.video}
                >
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
            </section>
          )}

          {/* Visual Demonstrations / Gallery */}
          {project.images && project.images.length > 0 && (
            <section className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 text-violet-400">
                <Camera size={22} />
                <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                  Visual Proofs & Interactive Demonstrations
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.images.map((img, index) => {
                  const src = typeof img === 'string' ? img : img.url;
                  const caption = typeof img === 'string' ? `Demonstration ${index + 1}` : img.caption;

                  return (
                    <div
                      key={index}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 transition-all duration-300 hover:border-violet-500/30"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-950 flex items-center justify-center">
                        <img
                          src={src}
                          alt={caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div
                          style={{ display: 'none' }}
                          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-950/80 to-indigo-950/80 p-4 text-center"
                        >
                          <span className="text-violet-300 text-xs font-medium">
                            {caption}
                          </span>
                        </div>
                      </div>
                      {caption && (
                        <div className="p-4 border-t border-white/5 bg-white/[0.02]">
                          <p className="text-xs text-gray-300 font-medium leading-relaxed">
                            {caption}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Results */}
          <section className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4 text-violet-400">
              <Award size={22} />
              <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                4. Findings, Results & Limitations
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
              {project.results}
            </p>
          </section>

          {/* Links / Actions */}
          {(project.github || project.githubBackend || project.githubFrontend || project.live) && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all duration-300 font-medium"
                >
                  <Github size={20} />
                  Backend Repository
                </a>
              )}
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all duration-300 font-medium"
                >
                  <Github size={20} />
                  Frontend Repository
                </a>
              )}
              {project.github && !project.githubBackend && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all duration-300 font-medium"
                >
                  <Github size={20} />
                  View Source Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-300 shadow-lg shadow-violet-500/20"
                >
                  <ExternalLink size={20} />
                  Launch Interactive Demo
                </a>
              )}
            </div>
          )}
        </motion.main>
      )}
    </div>
  );
};

export default ResearchDetail;
