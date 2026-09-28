import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import AI from './sections/AI';
import Science from './sections/Science';
import Research from './sections/Research';
import Services from './sections/Services';
import Journey from './sections/Journey';
// import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const ResearchDetail = lazy(() => import('./pages/ResearchDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0f]">
    <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
  </div>
);

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AI />
      <Science />
      <Research />
      <Services />
      <Journey />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
};

const App = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        className="
          min-h-screen
          overflow-x-hidden
          transition-colors
          duration-300

          bg-white
          text-black

          dark:bg-[#0a0a0f]
          dark:text-white
        "
      >
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research/:id" element={<ResearchDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
};

export default App;