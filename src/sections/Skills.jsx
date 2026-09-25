import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ── Skill Data ────────────────────────────────────────────────
const skills = [
  { name: 'HTML5',        level: 95, category: 'Frontend', note: 'Advanced',     color: '#E34F26', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',         level: 88, category: 'Frontend', note: 'Advanced',     color: '#1572B6', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript',   level: 85, category: 'Frontend', note: 'Intermediate', color: '#F7DF1E', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js',     level: 88, category: 'Frontend', note: 'Advanced',     color: '#61DAFB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',      level: 72, category: 'Frontend', note: 'Intermediate', color: '#A78BFA', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', note: 'Advanced',     color: '#06B6D4', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux',        level: 75, category: 'Frontend', note: 'Intermediate', color: '#764ABC', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },

  { name: 'Node.js',      level: 80, category: 'Backend',  note: 'Intermediate', color: '#339933', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js',   level: 82, category: 'Backend',  note: 'Intermediate', color: '#BBBBBB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'MongoDB',      level: 78, category: 'Backend',  note: 'Intermediate', color: '#47A248', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'REST APIs',    level: 85, category: 'Backend',  note: 'Advanced',     color: '#FF6C37', emoji: '🔗' },
  { name: 'JWT Auth',     level: 80, category: 'Backend',  note: 'Advanced',     color: '#D63AFF', emoji: '🔐' },

  { name: 'Git',          level: 85, category: 'Tools',    note: 'Advanced',     color: '#F05032', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',       level: 85, category: 'Tools',    note: 'Advanced',     color: '#AAAAAA', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'VS Code',      level: 92, category: 'Tools',    note: 'Expert',       color: '#007ACC', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman',      level: 80, category: 'Tools',    note: 'Advanced',     color: '#FF6C37', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },

  { name: 'Solidity',     level: 35, category: 'Web3',     note: 'Beginner',     color: '#9B9B9B', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'Web3 Basics',  level: 55, category: 'Web3',     note: 'Learning',     color: '#F16822', emoji: '🔷' },
  { name: 'Ethers.js',    level: 45, category: 'Web3',     note: 'Learning',     color: '#6B8CFF', emoji: '⛓️' },
];

// Which categories to show side-by-side in "All" mode
// [ [left, right], [left, right] ] — pairs
const categoryPairs = [
  ['Frontend', 'Backend'],
  ['Tools',    'Web3'   ],
];

const categoryConfig = {
  Frontend: { label: 'Frontend Development', accent: '#7C3AED' },
  Backend:  { label: 'Backend Development',  accent: '#22C55E' },
  Tools:    { label: 'Dev Tools',            accent: '#007ACC' },
  Web3:     { label: 'Blockchain & Web3',    accent: '#F97316' },
};

const filterTabs = ['All', 'Frontend', 'Backend', 'Tools', 'Web3'];

const noteStyle = {
  Expert:       { color: '#34D399', bg: 'rgba(52,211,153,0.10)'  },
  Advanced:     { color: '#A78BFA', bg: 'rgba(167,139,250,0.10)' },
  Intermediate: { color: '#60A5FA', bg: 'rgba(96,165,250,0.10)'  },
  Learning:     { color: '#FBBF24', bg: 'rgba(251,191,36,0.10)'  },
  Beginner:     { color: '#6B7280', bg: 'rgba(107,114,128,0.10)' },
};

// ── Single Bubble ─────────────────────────────────────────────
const SkillBubble = ({ skill, i }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 20, scale: 0.88 },
        visible: {
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.38, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 10,
        width: 100,           /* fixed width — key to no stretching */
        cursor: 'default', userSelect: 'none',
      }}
    >
      {/* Circle */}
      <motion.div
        animate={
          hovered
            ? { y: -8, boxShadow: `0 14px 36px ${skill.color}40, 0 0 0 1.5px ${skill.color}50` }
            : { y: 0,  boxShadow: '0 4px 14px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)' }
        }
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        style={{
          width: 80, height: 80, borderRadius: '50%',
          background: hovered
            ? `radial-gradient(circle at 38% 32%, ${skill.color}22 0%, #151527 100%)`
            : 'radial-gradient(circle at 38% 32%, #1e1e36 0%, #111120 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden', flexShrink: 0,
          transition: 'background 0.3s',
        }}
      >
        {/* Inner glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: `radial-gradient(circle at center, ${skill.color}1e, transparent 68%)`,
          }}
        />

        {skill.img ? (
          <motion.img
            src={skill.img}
            alt={skill.name}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{
              width: 40, height: 40, objectFit: 'contain',
              filter: skill.invert ? 'brightness(0) invert(0.72)' : 'none',
              position: 'relative', zIndex: 1,
            }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        ) : (
          <motion.span
            animate={{ scale: hovered ? 1.12 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ fontSize: 34, lineHeight: 1, position: 'relative', zIndex: 1 }}
          >
            {skill.emoji}
          </motion.span>
        )}
      </motion.div>

      {/* Name + level */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <p style={{
          color: hovered ? '#fff' : '#CBD5E1',
          fontWeight: 700, fontSize: 13,
          marginBottom: 4, lineHeight: 1.3,
          transition: 'color 0.2s',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {skill.name}
        </p>
        <span style={{
          fontSize: 9, fontWeight: 600, letterSpacing: '0.04em',
          color: noteStyle[skill.note]?.color || '#9CA3AF',
          background: noteStyle[skill.note]?.bg,
          padding: '2px 6px', borderRadius: 999,
          border: `1px solid ${noteStyle[skill.note]?.color || '#9CA3AF'}28`,
          display: 'inline-block',
        }}>
          {skill.note}
        </span>
      </div>
    </motion.div>
  );
};

// ── One category column ───────────────────────────────────────
const CategoryColumn = ({ category, skillList }) => {
  const cfg = categoryConfig[category];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ flex: 1, minWidth: 0 }}>
      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
        <div style={{
          width: 4, height: 20, borderRadius: 3, flexShrink: 0,
          background: cfg.accent,
          boxShadow: `0 0 10px ${cfg.accent}80`,
        }} />
        <h3 style={{
          color: '#E2E8F0', fontSize: 17, fontWeight: 700,
          letterSpacing: '-0.01em', whiteSpace: 'nowrap',
        }}>
          {cfg.label}
        </h3>
      </div>

      {/* Bubbles — wrap into rows of ~4, each cell 100px fixed */}
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '28px 20px',      /* row-gap col-gap — tight but breathable */
          alignContent: 'flex-start',
        }}
      >
        {skillList.map((skill, i) => (
          <SkillBubble key={skill.name} skill={skill} i={i} />
        ))}
      </motion.div>
    </div>
  );
};

// ── Row of 2 categories side-by-side ─────────────────────────
const CategoryRow = ({ left, right }) => {
  const leftSkills  = skills.filter(s => s.category === left);
  const rightSkills = right ? skills.filter(s => s.category === right) : [];

  return (
    <div style={{
      display: 'flex',
      gap: '3rem',
      marginBottom: '3.5rem',
      alignItems: 'flex-start',
    }}>
      {/* Vertical divider between two columns */}
      <CategoryColumn category={left} skillList={leftSkills} />

      {right && (
        <>
          {/* Separator line */}
          <div style={{
            width: 1, alignSelf: 'stretch', flexShrink: 0,
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.07), transparent)',
            marginTop: 8,
          }} />
          <CategoryColumn category={right} skillList={rightSkills} />
        </>
      )}
    </div>
  );
};

// ── Single category full-width (for filter tabs) ──────────────
const CategoryFull = ({ category }) => {
  const cfg = categoryConfig[category];
  const skillList = skills.filter(s => s.category === category);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
        <div style={{
          width: 4, height: 20, borderRadius: 3, flexShrink: 0,
          background: cfg.accent, boxShadow: `0 0 10px ${cfg.accent}80`,
        }} />
        <h3 style={{ color: '#E2E8F0', fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' }}>
          {cfg.label}
        </h3>
        <div style={{
          flex: 1, height: 1,
          background: `linear-gradient(90deg, ${cfg.accent}30, transparent)`,
        }} />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 24px', alignContent: 'flex-start' }}
      >
        {skillList.map((skill, i) => (
          <SkillBubble key={skill.name} skill={skill} i={i} />
        ))}
      </motion.div>
    </div>
  );
};

// ── Marquee ───────────────────────────────────────────────────
const marqueeItems = [
  { name: 'React',      color: '#61DAFB' },
  { name: 'Node.js',    color: '#339933' },
  { name: 'MongoDB',    color: '#47A248' },
  { name: 'Tailwind',   color: '#06B6D4' },
  { name: 'Express',    color: '#AAAAAA' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Next.js',    color: '#A78BFA' },
  { name: 'Git',        color: '#F05032' },
  { name: 'Web3',       color: '#F97316' },
  { name: 'REST APIs',  color: '#FF6C37' },
  { name: 'Redux',      color: '#764ABC' },
  { name: 'JWT',        color: '#D63AFF' },
];

const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div style={{ overflow: 'hidden', position: 'relative', padding: '6px 0' }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 72, zIndex: 10, pointerEvents: 'none',
        background: 'linear-gradient(90deg, var(--marquee-fade, #0a0a0f), transparent)',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 72, zIndex: 10, pointerEvents: 'none',
        background: 'linear-gradient(-90deg, var(--marquee-fade, #0a0a0f), transparent)',
      }} />
      <motion.div
        style={{ display: 'flex', gap: 10, width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map(({ name, color }, idx) => (
          <div key={idx} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '5px 12px', borderRadius: 999, flexShrink: 0,
            background: `${color}0e`, border: `1px solid ${color}28`,
            color, fontSize: 11, fontWeight: 600, letterSpacing: '0.04em',
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: color, boxShadow: `0 0 5px ${color}`,
              display: 'inline-block', flexShrink: 0,
            }} />
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────
const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={sectionRef}>

      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-violet-700 top-10 right-0" style={{ opacity: 0.07 }} />
      <div className="blob w-80 h-80 bg-blue-800 bottom-10 left-0"  style={{ opacity: 0.06 }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-4"
        >
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use to build fast, scalable, and beautiful applications
          </p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {filterTabs.map(tab => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.94 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : 'border border-white/10 text-gray-400 hover:border-violet-500/30 hover:text-violet-300'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'All' ? (
              /* 2-column paired layout — exactly like screenshot */
              <>
                {categoryPairs.map(([left, right]) => (
                  <CategoryRow key={left} left={left} right={right} />
                ))}
              </>
            ) : (
              /* Single category full-width */
              <CategoryFull category={activeTab} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Divider ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          margin: '2rem 0 1.5rem',
        }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
          <span style={{
            fontSize: 10, color: '#4B5563', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Tech Stack
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
        </div>

        

      </div>
    </section>
  );
};

export default Skills;