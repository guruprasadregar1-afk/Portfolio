import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Services from './sections/Services';
import Journey from './sections/Journey';
// import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

import ResearchDetail from './pages/ResearchDetail';
import NotFound from './pages/NotFound';

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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;