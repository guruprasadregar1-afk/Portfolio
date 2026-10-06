import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Beaker, CheckCircle2, Clock, ExternalLink, Github, FileText, Cpu, Target, Award, Camera, Video, ShieldCheck, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';
import { researchProjects } from '../data';
import NotFound from './NotFound';

const ResearchDetail = () => {
  const { id } = useParams();
  const project = researchProjects.find((p) => p.id === id);
  const [activeId, setActiveId] = useState('');

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

  const activeSections = useMemo(() => {
    if (!project) return [];
    return [
      (project.problem || project.researchQuestion) && { id: 'problem', label: 'Problem & Objective' },
      (project.whatIBuilt || project.methodology) && { id: 'built', label: 'What I Built' },
      (project.technicalChallenges || project.implementation) && { id: 'challenges', label: 'Key Technical Challenges' },
      project.scopeNote && { id: 'scopenote', label: 'Scope & Honesty Note' },
      (project.mediaPlaceholders || (project.images && project.images.length > 0)) && { id: 'media', label: 'Screenshots & Media' },
      project.video && { id: 'video', label: 'Video Demo' },
      project.results && { id: 'results', label: 'Findings & Results' },
      project.validation && { id: 'validation', label: 'Validation' },
      project.limitations && { id: 'limitations', label: 'Limitations' },
      project.futureWork && { id: 'futureWork', label: 'Future Work' },
      (project.references && project.references.length > 0) && { id: 'references', label: 'References' },
      (project.live || project.liveApi || project.apiDocs || project.githubMain || project.githubEngine || project.github) && { id: 'links', label: 'Links & Repositories' },
    ].filter(Boolean);
  }, [project]);

  useEffect(() => {
    if (!project || activeSections.length === 0) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    activeSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project, activeSections]);

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  if (!project) {
    return <NotFound />;
  }

  const isPlaceholder =
    project.status === 'Coming soon' ||
    project.tagline === '[PLACEHOLDER — awaiting content]' ||
    (project.researchQuestion === '[PLACEHOLDER — awaiting content]' && !project.problem);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-gray-200">
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

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
              <Beaker size={13} />
              Case Study
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

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-lg shadow-violet-500/20 transition-all"
            >
              <ExternalLink size={14} />
              Launch Live Site
            </a>
          )}
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
        <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12 items-start">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Problem & Objective */}
            {(project.problem || project.researchQuestion) && (
              <section id="problem" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                  <Target size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    The Problem
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                  {project.problem || project.researchQuestion}
                </p>
              </section>
            )}

            {/* What I Built / Methodology */}
            {(project.whatIBuilt || project.methodology) && (
              <section id="built" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6 text-violet-400">
                  <FileText size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    What I Built
                  </h2>
                </div>
                {Array.isArray(project.whatIBuilt) ? (
                  <ul className="space-y-4">
                    {project.whatIBuilt.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed text-base">
                        <span className="w-2 h-2 rounded-full bg-violet-400 mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                    {project.whatIBuilt || project.methodology}
                  </p>
                )}
              </section>
            )}

            {/* Key Technical Challenges Solved / Architecture */}
            {(project.technicalChallenges || project.implementation) && (
              <section id="challenges" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6 text-violet-400">
                  <Cpu size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Key Technical Challenges Solved
                  </h2>
                </div>
                {Array.isArray(project.technicalChallenges) ? (
                  <ul className="space-y-4">
                    {project.technicalChallenges.map((challenge, idx) => (
                      <li key={idx} className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-3.5 text-gray-300 leading-relaxed text-base">
                        <span className="p-1 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 mt-0.5 shrink-0 font-mono text-xs font-bold">
                          #{idx + 1}
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                    {project.technicalChallenges || project.implementation}
                  </p>
                )}
              </section>
            )}

            {/* Scope and Honesty Note */}
            {project.scopeNote && (
              <section id="scopenote" className="p-8 rounded-3xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-3 text-amber-400">
                  <AlertTriangle size={22} />
                  <h2 className="text-xl font-bold text-amber-300 uppercase tracking-wider text-sm">
                    Scope and Honesty Note
                  </h2>
                </div>
                <p className="text-amber-100/90 leading-relaxed text-base font-medium">
                  {project.scopeNote}
                </p>
              </section>
            )}

            {/* Media / Screenshots / Placeholders */}
            {(project.mediaPlaceholders || (project.images && project.images.length > 0)) && (
              <section id="media" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6 text-violet-400">
                  <Camera size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Screenshots & Visual Proofs
                  </h2>
                </div>

                {project.mediaPlaceholders ? (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {project.mediaPlaceholders.map((ph, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border-2 border-dashed border-white/20 bg-white/[0.02] p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
                      >
                        <Camera size={32} className="text-violet-400 mb-3 opacity-60" />
                        <h4 className="text-white font-semibold text-sm mb-1">{ph.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-xs mb-3">
                          {ph.description}
                        </p>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          Placeholder — Upload Image Needed
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
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
                )}
              </section>
            )}

            {/* Video Demonstration */}
            {project.video && (
              <section id="video" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6 text-violet-400">
                  <Video size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Video Demonstration
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

            {/* Results */}
            {project.results && (
              <section id="results" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                  <Award size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Findings & Experimental Results
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                  {project.results}
                </p>
              </section>
            )}

            {/* Validation */}
            {project.validation && (
              <section id="validation" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                  <ShieldCheck size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Test Coverage & Experimental Validation
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                  {project.validation}
                </p>
              </section>
            )}

            {/* Limitations */}
            {project.limitations && (
              <section id="limitations" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                  <AlertTriangle size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Technical Limitations & Edge Cases
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                  {project.limitations}
                </p>
              </section>
            )}

            {/* Future Work */}
            {project.futureWork && (
              <section id="futureWork" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                  <Sparkles size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Planned Extensions & Future Work
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base font-normal">
                  {project.futureWork}
                </p>
              </section>
            )}

            {/* References */}
            {project.references && project.references.length > 0 && (
              <section id="references" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4 text-violet-400">
                  <BookOpen size={22} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                    Academic & Literature References
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.references.map((ref, idx) => (
                    <li key={idx} className="text-gray-300 text-sm leading-relaxed">
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-violet-400 hover:underline flex items-start gap-1.5"
                        >
                          <span>• {ref.label}</span>
                          <ExternalLink size={13} className="shrink-0 mt-0.5" />
                        </a>
                      ) : (
                        <span>• {ref.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Links / Actions */}
            <section id="links" className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 text-violet-400">
                <ExternalLink size={22} />
                <h2 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                  Project Links & Resources
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-lg shadow-violet-500/20"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <ExternalLink size={18} /> Live Demo
                    </span>
                    <span className="text-xs opacity-80">v1.0 Live</span>
                  </a>
                )}

                {project.liveApi && (
                  <a
                    href={project.liveApi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all font-medium"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <ExternalLink size={18} /> Public Slicing API Endpoint
                    </span>
                    <span className="text-xs text-violet-400 font-mono">REST</span>
                  </a>
                )}

                {project.apiDocs && (
                  <a
                    href={project.apiDocs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all font-medium"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <FileText size={18} /> API Documentation (Swagger)
                    </span>
                    <span className="text-xs text-violet-400 font-mono">Docs</span>
                  </a>
                )}

                {(project.githubMain || project.githubFrontend || project.github) && (
                  <a
                    href={project.githubMain || project.githubFrontend || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all font-medium"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <Github size={18} /> Main Repository
                    </span>
                    <span className="text-xs text-gray-400 font-mono">GitHub</span>
                  </a>
                )}

                {(project.githubEngine || project.githubBackend) && (
                  <a
                    href={project.githubEngine || project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:border-violet-500/40 hover:text-white transition-all font-medium"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <Github size={18} /> Standalone Engine Package
                    </span>
                    <span className="text-xs text-gray-400 font-mono">npm / GitHub</span>
                  </a>
                )}

                {project.researchWriteup && (
                  <div className="flex items-center justify-between p-4 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] text-gray-400 text-sm">
                    <span className="flex items-center gap-2">
                      <BookOpen size={18} /> Research Write-up
                    </span>
                    <span className="text-xs text-amber-400 font-medium">arXiv / /research (Pending)</span>
                  </div>
                )}
              </div>
            </section>
          </motion.main>

          {/* Sticky Stepper Sidebar (Desktop) */}
          <aside className="hidden lg:block sticky top-28 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Report Contents
            </p>
            <div className="relative pl-2">
              <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-white/10" />

              <div className="space-y-6 relative">
                {activeSections.map((sec, idx) => {
                  const isActive = activeId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollTo(sec.id)}
                      className="group flex items-center gap-3 w-full text-left transition-colors"
                    >
                      <div
                        className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 motion-reduce:transition-none ${
                          isActive
                            ? 'bg-violet-600 text-white ring-4 ring-violet-500/20 scale-110'
                            : 'bg-gray-900 border border-white/20 text-gray-400 group-hover:border-violet-500/50 group-hover:text-gray-200'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <span
                        className={`text-xs font-medium transition-colors ${
                          isActive ? 'text-violet-300 font-semibold' : 'text-gray-400 group-hover:text-gray-200'
                        }`}
                      >
                        {sec.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default ResearchDetail;
