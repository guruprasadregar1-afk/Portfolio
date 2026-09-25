import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { testimonials } from '../data';

const Testimonials = () => (
  <section className="py-24 relative">
    <div className="blob w-80 h-80 bg-purple-700 bottom-0 right-0" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp}>
        <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase text-center mb-3">
          What Clients Say
        </p>
        <h2 className="section-title">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="section-subtitle">Words from people I've had the pleasure of working with</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid sm:grid-cols-2 gap-6"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            variants={fadeInUp}
            custom={i}
            whileHover={{ y: -6 }}
            className="glass-dark p-6 rounded-2xl group hover:border-violet-500/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <Quote size={20} className="text-violet-500/40 mt-1" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">"{t.text}"</p>

            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
