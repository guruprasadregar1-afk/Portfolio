import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 — Page Not Found | Guru Prasad';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg w-full p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl -z-10" />

        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
          <AlertCircle size={36} />
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-3">404</h1>
        <h2 className="text-xl font-bold text-gray-200 mb-4">Page Not Found</h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          The research paper, project page, or URL you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-lg shadow-violet-500/20"
        >
          <Home size={18} />
          Return to Portfolio
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
