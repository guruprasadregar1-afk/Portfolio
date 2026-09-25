import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, viewportOptions } from '../animations/variants';
import { timeline } from '../data';

const typeColors = {
  learning: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  milestone: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
  work: 'text-green-400 border-green-500/30 bg-green-500/10',
  project: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  certification: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
  current: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
};

const Journey = () => (
  <section id="journey" className="py-24 relative overflow-hidden">
    <div className="blob w-64 h-64 bg-indigo-700 top-10 right-10" />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp}>
        <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase text-center mb-3">My Path</p>
        <h2 className="section-title">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-subtitle">
          A timeline of growth, learning, and milestones that shaped my career
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="timeline-line" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Card */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-dark p-5 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-base">{item.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeColors[item.type] || typeColors.learning}`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>

              {/* Center dot */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30 z-10 relative">
                  {item.year.slice(2)}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Journey;
