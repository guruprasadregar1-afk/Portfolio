import { motion } from 'framer-motion';
import { Monitor, Layout, Server, Smartphone, User, Globe } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { services } from '../data';

const iconMap = { monitor: Monitor, layout: Layout, server: Server, smartphone: Smartphone, user: User, globe: Globe };

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="blob w-72 h-72 bg-violet-700 top-10 left-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp}>
        <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase text-center mb-3">What I Offer</p>
        <h2 className="section-title">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="section-subtitle">
          Premium development services tailored to bring your vision to life
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Monitor;
          return (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8 }}
              className="glass-dark p-6 rounded-2xl group hover:border-violet-500/40 transition-all duration-300 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-2xl bg-[#0d0d1a] flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-violet-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              <div className={`mt-5 h-0.5 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Services;
