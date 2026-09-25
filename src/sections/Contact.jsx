import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Github, Linkedin, Instagram, Mail,
  CheckCircle, AlertCircle, Loader,
  MapPin, Clock,
} from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, viewportOptions } from '../animations/variants';
import emailjs from '@emailjs/browser';

/* ── Owner info — change only here if details change ── */
const OWNER = {
  name:     'Guru Prasad',
  role:     'Senior Full Stack Developer',
  email:    'guruprasadregar1@gmail.com',
  location: 'Jaipur, India · Open to EU / UAE',
  timezone: 'IST (UTC+5:30)',
  bio:      'Senior Full Stack Developer specializing in MERN Stack, Next.js, NestJS, Micro-Frontend Architecture, and Web3 applications. Building scalable, production-grade web applications for international clients across AI, blockchain, e-commerce, and real-time platforms.',
};

const socials = [
  { icon: Github,    href: 'https://github.com/guruprasadregar1-afk',          label: 'GitHub'    },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/guru-prasad-769b99227', label: 'LinkedIn'  },
  { icon: Instagram, href: 'https://www.instagram.com/guruprasad1832',          label: 'Instagram' },
  { icon: Mail,      href: `mailto:${OWNER.email}`,                             label: 'Email'     },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

/* ── Input component ── */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">
      {label}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [toasts, setToasts]     = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();

    // ── Frontend validations ──────────────────────────────────────
    if (!form.name.trim()) {
      setStatus('error');
      setErrorMsg('Name is required.');
      showToast('Name is required.', 'error');
      return;
    }
    if (!form.email.trim()) {
      setStatus('error');
      setErrorMsg('Email address is required.');
      showToast('Email address is required.', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    if (!form.subject.trim()) {
      setStatus('error');
      setErrorMsg('Subject is required.');
      showToast('Subject is required.', 'error');
      return;
    }
    if (!form.message.trim()) {
      setStatus('error');
      setErrorMsg('Message is required.');
      showToast('Message is required.', 'error');
      return;
    }
    if (form.message.trim().length < 10) {
      setStatus('error');
      setErrorMsg('Message must be at least 10 characters.');
      showToast('Message must be at least 10 characters.', 'error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_gmail';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_27za17d';
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'eKpZZlSXHUOApaLgp';

      await emailjs.send(
        serviceId,
        templateId,
        {
          title: form.subject,
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
        },
        publicKey
      );

      setStatus('success');
      showToast('Message sent successfully', 'success');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.warn('EmailJS delivery error:', err);
      const errorMsgText = err?.text || err?.message || '';

      // If Service ID or template credentials failed, open mailto fail-safe
      if (errorMsgText.toLowerCase().includes('service') || errorMsgText.toLowerCase().includes('account') || !import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        const mailtoUrl = `mailto:guruprasadregar1@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${form.subject}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
        window.location.href = mailtoUrl;

        setStatus('success');
        showToast('Opening your email app to send message...', 'success');
        setForm(INITIAL_FORM);
        setTimeout(() => setStatus('idle'), 6000);
        return;
      }

      setStatus('error');
      const msg = errorMsgText || 'Failed to send message';
      setErrorMsg(msg);
      showToast(msg, 'error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      {/* Blobs */}
      <div className="blob w-80 h-80 bg-violet-500 top-0 left-0" />
      <div className="blob w-72 h-72 bg-indigo-500 bottom-0 right-0" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={viewportOptions} variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Contact Me
          </p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project, freelance work, or collaboration opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── LEFT — Info ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={viewportOptions} variants={fadeInLeft}
            className="space-y-5"
          >
            {/* Profile card */}
            <div className="rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-2xl shadow-lg shadow-violet-500/20 mb-5">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold mb-1 text-black dark:text-white">
                Hi, I'm {OWNER.name} 👋
              </h3>
              <p className="text-violet-400 text-sm font-medium mb-4">{OWNER.role}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {OWNER.bio}
              </p>
            </div>

            {/* Contact details */}
            <div className="rounded-3xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={17} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <a href={`mailto:${OWNER.email}`}
                    className="text-sm font-medium text-black dark:text-white hover:text-violet-400 transition-colors">
                    {OWNER.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm font-medium text-black dark:text-white">{OWNER.location}</p>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Timezone</p>
                  <p className="text-sm font-medium text-black dark:text-white">{OWNER.timezone}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Status</p>
                  <p className="text-sm font-medium text-green-500">
                    Available · 60-day notice period
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-3xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-12 h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-violet-500 hover:border-violet-500/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — Form ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={viewportOptions} variants={fadeInRight}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name *">
                  <input
                    type="text" name="name"
                    value={form.name} onChange={handleChange}
                    placeholder="John Smith"
                    className="form-input" required
                  />
                </Field>
                <Field label="Email Address *">
                  <input
                    type="email" name="email"
                    value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input" required
                  />
                </Field>
              </div>

              <Field label="Subject *">
                <input
                  type="text" name="subject"
                  value={form.subject} onChange={handleChange}
                  placeholder="Project discussion / Collaboration"
                  className="form-input" required
                />
              </Field>

              <Field label="Message *">
                <textarea
                  rows={6} name="message"
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="form-input resize-none" required
                />
              </Field>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-500 bg-green-500/10 border border-green-500/20 rounded-2xl px-4 py-3"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll reply within 24–48 hours. 🚀
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3"
                >
                  <AlertCircle size={16} />
                  {errorMsg}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                className="w-full btn-primary text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </motion.button>

              <p className="text-center text-xs text-gray-500">
                Or email directly:{' '}
                <a href={`mailto:${OWNER.email}`} className="text-violet-400 hover:underline">
                  {OWNER.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Custom Floating Toast Container ── */}
      <div className="fixed top-24 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: 50, transition: { duration: 0.2 } }}
              layout
              className={`p-4 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-3 pointer-events-auto border-black/10 dark:border-white/10 ${
                toast.type === 'success'
                  ? 'bg-emerald-500/90 dark:bg-emerald-500/10 text-white dark:text-emerald-400'
                  : 'bg-red-500/90 dark:bg-red-500/10 text-white dark:text-red-400'
              }`}
            >
              {toast.type === 'success' ? (
                <CheckCircle size={18} className="shrink-0 text-white dark:text-emerald-400" />
              ) : (
                <AlertCircle size={18} className="shrink-0 text-white dark:text-red-400" />
              )}
              <span className="text-sm font-semibold">{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;