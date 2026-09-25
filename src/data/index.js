// ─── Engineering Projects (Production Software) ──────────────────────
export const engineeringProjects = [
  {
    id: 1,
    title: 'AI Storyteller — Interactive Generation Platform',
    description:
      'Full-stack AI content intelligence and narration platform combining Next.js 14 frontend with Express/TypeScript API engine. Integrates multi-model AI LLMs (Anthropic Claude, Google Gemini, Groq) with Prisma ORM data modeling.',
    image: '/placeholder-research.png',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Anthropic API', 'Google Gemini API', 'Groq SDK', 'Prisma', 'Tailwind CSS'],
    category: 'Full Stack',
    github: null,
    githubBackend: 'https://github.com/guruprasadregar1-afk/ai-storyteller-backend',
    githubFrontend: 'https://github.com/guruprasadregar1-afk/ai-storyteller-frontend',
    live: 'https://ai-storyteller-frontend.vercel.app',
    featured: true,
  },
];

export const projects = engineeringProjects;

// ─── Research Projects (Technical Reports & Experiments) ─────────────
export const researchProjects = [
  // [DRAFT — sourced from repo README/SCOPE.md, review before publishing]
  {
    id: 'dino-vr',
    title: 'Dino VR Experience',
    tagline: 'Cross-platform WebXR immersive dinosaur expedition and roller coaster ride.',
    status: 'Phase 3 complete',
    researchQuestion:
      'Can a single web-based application deliver immersive, low-latency 3D VR rides (expedition and roller coaster) across mobile VR headsets (Virtucraft 3DoF), desktop PC VR (6DoF), and 2D fallbacks without native app dependencies?',
    methodology:
      'Evaluated WebXR Device API capabilities across device tiers. Standardized on a single Vite + React + Three.js codebase using runtime feature detection (navigator.xr and session types). Implemented pre-authored spline-based motion paths ("on rails") for predictable physics and camera traversal. Built an adaptive rendering loop targeting ≥ 45 FPS on mid-range Android devices and 60 FPS on desktop, with quality scaling (LOD, texture sizing, and pixel ratio caps) based on runtime performance constraints.',
    implementation:
      'Architected with Vite, React, Three.js, and WebXR integration (@react-three/xr patterns). Features a Theme Park Gate 3D launcher with hybrid 2D/3D UI overlays, permitting seamless mode switching between Mobile VR, Desktop PC VR, and 2D canvas mode. Standardized assets using glTF/GLB models with low-draw-call material passes. HTTPS tunneling (ngrok) and secure context configuration enabled remote mobile WebXR testing on Android Chrome.',
    results:
      'Phase 3 completed with both Prehistoric Expedition and Coaster rides fully functional in 2D fallback and WebXR modes. Motion-to-photon latency measured within acceptable thresholds (< 50ms perceived head rotation latency). Mobile performance hit target frame rates (45–60 FPS) on mid-range Android Chrome hardware. Key limitations: iOS Safari lacks native WebXR support (restricting Apple devices to 2D mode), and high-poly 3D models require aggressive asset optimization to avoid thermal throttling during extended mobile VR sessions.',
    techStack: ['Three.js', 'WebXR', 'React.js', 'Vite', 'JavaScript', 'GLTF/GLB'],
    github: 'https://github.com/guruprasadregar1-afk/dino-vr-frontend',
    live: 'https://dino-vr-frontend.vercel.app/',
    image: '/placeholder-research.png',
    featured: true,
  },
  // [DRAFT — sourced from actual repo code (no README available), review before publishing]
  {
    id: 'spatial-web',
    title: 'Spatial Web Engine',
    tagline: 'Volumetric web interface platform combining spatial graph nodes with Three.js 3D visual rendering and MediaPipe gesture recognition.',
    status: 'Prototype',
    researchQuestion:
      'How can traditional web applications transition into volumetric 3D spatial environments ("Route C: UI outside the monitor") while maintaining structured data relationships, low-latency interaction loops, and cross-device accessibility without requiring specialized AR/VR hardware?',
    methodology:
      'Designed a decoupled client-server architecture. The backend manages spatial state and semantic layout hierarchies using a PostgreSQL database (with PostGIS extensions) and Prisma ORM. The frontend leverages Next.js 14 App Router, Three.js (@react-three/fiber & @react-three/drei), and MediaPipe vision models (@mediapipe/tasks-vision) to render graph entities into interactive 3D viewports with real-time hand-tracking capabilities.',
    implementation:
      'Backend (Node.js/Express/TypeScript): Engineered a Spatial Graph relational model with node types (root, section, panel, card, building, landmark, connector) managed via Prisma ORM and PostGIS spatial queries. Includes rate limiting, request ID tracing, and security headers. Frontend (Next.js/TypeScript/Tailwind): Implemented Three.js 3D canvas components (e.g. JaipurShowcase), Zustand global state store for active scene nodes, and MediaPipe gesture recognition pipelines for touchless interaction.',
    results:
      'Prototype state. Successfully established the core relational schema for spatial graph entities and demonstrated 3D viewport rendering with interactive node selection and vision-based gesture tracking in Next.js. Deployed to Vercel production infrastructure. Limitations: Full backend-frontend graph sync remains under active integration, and gesture recognition sensitivity varies across non-standard webcam environments.',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'MediaPipe', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
    github: null,
    githubBackend: 'https://github.com/guruprasadregar1-afk/Spatial_Web_backen',
    githubFrontend: 'https://github.com/guruprasadregar1-afk/Spatial_Web_Frontend',
    live: 'https://spatial-web-frontend.vercel.app/',
    image: '/placeholder-research.png',
    featured: true,
  },
  // [DRAFT — sourced from repo README, review before publishing]
  {
    id: 'emotion-engine',
    title: 'Emotion Engine',
    tagline: 'Offline, CPU-only storytelling narration engine with emotion tagging and prosody-driven speech synthesis.',
    status: 'Prototype',
    researchQuestion:
      'Can story text be dynamically tagged with affective emotion states and synthesized into expressive, multi-character narration entirely on consumer CPU hardware without relying on cloud APIs, GPUs, or external service subscriptions?',
    methodology:
      'Designed a 3-stage offline pipeline: (1) Emotion Tagging using local lexicon-based taggers (NRC Emotion Lexicon) and HuggingFace Transformers, (2) Expressive Speech Synthesis via Piper TTS with prosody modifications mapped to detected emotion categories, and (3) Audio Assembly stitching per-segment audio buffers into coherent MP3 narratives via pydub and ffmpeg.',
    implementation:
      'Built with Python 3.11, FastAPI, PyTorch, HuggingFace Transformers, and Piper TTS. Features REST endpoints (/narrate, /health), Pydantic request validation, a character voice registry, automated voice model downloads, and comprehensive Pytest suite.',
    results:
      'Achieved fully offline text-to-speech narration with zero cloud API token cost and low memory overhead on standard CPU hardware. Demonstrated multi-character voice mapping and automated emotion tag injection. Limitations: Synthesis speed depends on CPU thread count, and prosody modulation depth is constrained by the underlying ONNX voice model capabilities.',
    techStack: ['Python', 'FastAPI', 'PyTorch', 'HuggingFace', 'Piper TTS', 'Pydub', 'Uvicorn', 'Pydantic', 'Pytest'],
    github: 'https://github.com/guruprasadregar1-afk/emotion_engine',
    live: null,
    image: '/placeholder-research.png',
    featured: true,
  },
  // [DRAFT — sourced from repo README, review before publishing]
  {
    id: 'black-hole',
    title: 'Black Hole Physics & Lensing Engine',
    tagline: 'Real-time Schwarzschild and binary black-hole general relativity simulations with WebGL/GLSL lensing shaders.',
    status: 'Phase 1 complete',
    researchQuestion:
      'How accurately can general relativity physics (Schwarzschild null geodesics, Peters binary orbital decay, and gravitational wave strain) be approximated and rendered in real-time GLSL fragment shaders within consumer browser GPU budgets?',
    methodology:
      'Implemented numerical RK4 integration for Schwarzschild geodesic ray-tracing, Peters equations for inspiral decay timelines, and quadrupole formulas for gravitational wave strain envelopes. Shader passes compute non-linear light deflection around event horizons in real-time WebGL viewports.',
    implementation:
      'Architected with TypeScript, GLSL fragment shaders, Three.js, and Vitest. Modularized into single-body Schwarzschild geodesics (src/blackhole/) and binary merger dynamics (src/binary-blackhole/). Includes a suite of 50 unit tests across 12 test modules verifying mathematical rigor.',
    results:
      'Passed 50 unit tests verifying physical accuracy of geodesic paths and strain envelopes. Real-time GLSL ray-marching shaders rendered fluid gravitational lensing effects at 60 FPS on standard WebGL hardware. Deployed live on Vercel. Limitations: Uses analytical GR approximations rather than full 3D numerical relativity Einstein field equations.',
    techStack: ['TypeScript', 'GLSL', 'Three.js', 'WebGL', 'Vitest', 'Vite'],
    github: 'https://github.com/guruprasadregar1-afk/blackhole-physics',
    live: 'https://blackhole-physics.vercel.app',
    image: '/placeholder-research.png',
    featured: true,
  },
  // [DRAFT — sourced from repo README and engine source, review before publishing]
  {
    id: '4th-dimension',
    title: '4th Dimension Representation Platform',
    tagline: 'Spatio-temporal 4D rendering platform featuring time-sliced Gaussian splatting, hyperplane slicing, and soft-body XPBD physics.',
    status: 'In development — interactive demo live',
    researchQuestion:
      'How can 4D spatio-temporal datasets and 4D polytope geometries be sliced by 3D hyperplanes, dynamically rendered as alpha splats, and physically simulated in real-time web viewports?',
    methodology:
      'Developed mathematical primitives for 4D rotation matrices (SO(4) rotor algebra), 3D hyperplane slicing of 4D tesseracts and polytopes, and extended position-based dynamics (XPBD) soft-body constraints applied to 4D Gaussian spatial means. Built a series of 6 computational validation experiments.',
    implementation:
      'Engine (@4th-dimension/engine): Zero-dependency TypeScript engine providing 4D math, polytope geometry, hyperplane slicing algorithms, XPBD physics solvers, and time-slicing renderers. Platform (4th-dimension): Next.js App Router frontend with Three.js viewer embeds, time scrubber UI, Zustand state management, and a NestJS + MongoDB backend supporting 4D Gaussian primitive streaming (embedded & GridFS) and multi-format asset import (.json, .ply, .splat).',
    results:
      'In active development as a demonstrable proof-of-concept. Features a functional 4-level onboarding puzzle progression (Level 1: 2D Flatland trap -> Level 2: Sealed 3D chamber -> Level 3: Stepping into the 4th dimension via W-position translation -> Level 4: Escaping via the 4th-dimension shortcut). Proves the practical mechanics of SO(4) rotor rotations and 4D hyperplane slicing for spatial interaction, while full 4D scene splat rendering is actively being scaled.',
    techStack: ['TypeScript', 'Next.js', 'Three.js', 'NestJS', 'MongoDB', 'GridFS', 'XPBD Physics', 'Vite', 'Vitest', 'Tailwind CSS'],
    github: null,
    githubBackend: 'https://github.com/guruprasadregar1-afk/4th-dimension-engine',
    githubFrontend: 'https://github.com/guruprasadregar1-afk/4th-dimension',
    live: null,
    video: '/research/4th-dimension/demo-video.mp4',
    images: [
      {
        url: '/research/4th-dimension/level1-2d-trap.png',
        caption: 'Level 1: The 2D Flatland trap — constrained to planar movement.',
      },
      {
        url: '/research/4th-dimension/level2-3d-chamber.png',
        caption: 'Level 2: Sealed in the 3D chamber — enclosed spatial boundaries.',
      },
      {
        url: '/research/4th-dimension/stepping-4d-w-shift.png',
        caption: 'Stepping into the 4th dimension — W-position shifts reveal new hyper-slices.',
      },
      {
        url: '/research/4th-dimension/escaped-4d-shortcut.png',
        caption: 'Escaped: The 4th-dimension shortcut proven via SO(4) rotor rotation.',
      },
    ],
    featured: true,
  },
];

// ─── Skills ──────────────────────────────────────────────────────────
export const skills = [
  { name: 'React.js',     level: 95, icon: 'react',    category: 'Frontend' },
  { name: 'Next.js',      level: 88, icon: 'next',     category: 'Frontend' },
  { name: 'Angular',      level: 75, icon: 'angular',  category: 'Frontend' },
  { name: 'Redux',        level: 90, icon: 'redux',    category: 'Frontend' },
  { name: 'TypeScript',   level: 85, icon: 'ts',       category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'tailwind', category: 'Frontend' },
  { name: 'Node.js',      level: 92, icon: 'node',     category: 'Backend'  },
  { name: 'NestJS',       level: 82, icon: 'nest',     category: 'Backend'  },
  { name: 'Express.js',   level: 90, icon: 'express',  category: 'Backend'  },
  { name: 'MongoDB',      level: 88, icon: 'mongo',    category: 'Backend'  },
  { name: 'PostgreSQL',   level: 78, icon: 'postgres', category: 'Backend'  },
  { name: 'REST APIs',    level: 95, icon: 'api',      category: 'Backend'  },
  { name: 'AWS (EC2/S3)', level: 78, icon: 'aws',      category: 'Tools'    },
  { name: 'Git & GitHub', level: 90, icon: 'git',      category: 'Tools'    },
  { name: 'Web3',         level: 75, icon: 'web3',     category: 'Web3'     },
  { name: 'NFT Dev',      level: 70, icon: 'nft',      category: 'Web3'     },
];

// ─── Stats ────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Years Experience', value: '4.5+', icon: 'briefcase' },
  { label: 'Projects Delivered', value: '8+',  icon: 'layers'    },
  { label: 'International Clients', value: '10+', icon: 'globe'  },
  { label: 'Technologies', value: '20+', icon: 'code'            },
];

// ─── Services ─────────────────────────────────────────────────────────
export const services = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end MERN/Next.js applications with clean architecture, scalable APIs, and production-grade cloud deployment on AWS.',
    icon: 'monitor',
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Micro-Frontend Architecture',
    desc: 'Modular, independently deployable frontend systems that reduce release cycles and improve team scalability for large applications.',
    icon: 'layout',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend APIs (Node / NestJS)',
    desc: 'Robust RESTful and real-time WebSocket APIs with NestJS/Express, JWT auth, role-based access, and comprehensive documentation.',
    icon: 'server',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Web3 & NFT Platforms',
    desc: 'Blockchain-integrated platforms with Web3 API, wallet connectivity, NFT marketplace mechanics, and multi-chain transaction support.',
    icon: 'globe',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Payment Gateway Integration',
    desc: 'Seamless integration of Stripe, PayPal, Cryptomus, and Coingate into production e-commerce and marketplace platforms.',
    icon: 'credit-card',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cloud & DevOps (AWS)',
    desc: 'AWS deployments including EC2, S3, CI/CD pipelines, server configuration, and post-release monitoring for production apps.',
    icon: 'cloud',
    gradient: 'from-orange-500 to-amber-500',
  },
];

// ─── Timeline / Journey ───────────────────────────────────────────────
export const timeline = [
  {
    year: '2016',
    title: 'Bachelor of Computer Applications',
    desc: 'Completed BCA from LBS College, Jaipur. Built a strong foundation in programming, data structures, and computer science fundamentals.',
    type: 'learning',
  },
  {
    year: '2021',
    title: 'Master of Computer Applications (MCA)',
    desc: 'Completed MCA from Compucom Institute of Technology & Management, Jaipur. Specialized in advanced software development and system design.',
    type: 'learning',
  },
  {
    year: '2022',
    title: 'Joined Dotsquares Technologies',
    desc: 'Started as Full Stack Developer at Dotsquares Technologies, Jaipur. Began working on international client projects across UK, EU, and US markets.',
    type: 'work',
  },
  {
    year: '2022–23',
    title: 'E-Commerce & E-Learning Platforms',
    desc: 'Delivered global e-commerce platform (with Algolia search), UK e-learning system, and beauty marketplace apps for international clients.',
    type: 'project',
  },
  {
    year: '2023',
    title: 'Web3 & NFT Expertise',
    desc: 'Built NFT marketplaces and on-chain digital title registry platforms — full Web3 API integration, wallet connectivity, and transaction handling.',
    type: 'milestone',
  },
  {
    year: '2023–24',
    title: 'AI Platform & Micro-Frontend',
    desc: 'Architected an AI chat platform (ChatGPT-like) with LLM streaming, and implemented micro-frontend architecture patterns reducing release cycle times significantly.',
    type: 'project',
  },
  {
    year: '2024',
    title: 'Promoted to Senior Developer',
    desc: 'Promoted to Senior Full Stack Developer. Began mentoring 3 junior developers, leading code reviews, and managing AWS deployments with CI/CD pipelines.',
    type: 'milestone',
  },
  {
    year: '2025',
    title: 'Expanding to Go & EU Opportunities',
    desc: 'Currently learning Go (Gin framework) for high-performance backend services. Seeking Senior Full Stack roles in EU or UAE markets.',
    type: 'current',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'James Richardson',
    role: 'Product Lead, Global E-Commerce Client (UK)',
    text: 'Guru Prasad delivered our e-commerce revamp on time and above expectations. His React and Redux expertise transformed our product filtering and checkout — conversion rates improved by 35%. Exceptional professional.',
    rating: 5,
    avatar: 'JR',
    color: 'bg-violet-500',
  },
  {
    id: 2,
    name: 'Sophie Williams',
    role: 'CTO, UK E-Learning Client',
    text: 'He built our entire e-learning platform backend — course management, progress tracking, payments — cleanly and on schedule. His full-stack depth with both MERN and Laravel is remarkable.',
    rating: 5,
    avatar: 'SW',
    color: 'bg-pink-500',
  },
  {
    id: 3,
    name: 'Alex Petrov',
    role: 'Founder, Endless Domains (EU)',
    text: 'Guru architected our entire blockchain-based domain trading platform on AWS. His NestJS backend, complex state management, and cloud deployment skills are top-tier. A true senior engineer.',
    rating: 5,
    avatar: 'AP',
    color: 'bg-blue-500',
  },
  {
    id: 4,
    name: 'Riya Kapoor',
    role: 'Engineering Manager, Dotsquares',
    text: 'As a senior developer, Guru mentored our junior team, enforced code quality standards, and delivered the AI chat platform with streaming LLM integration — a complex feature shipped flawlessly.',
    rating: 5,
    avatar: 'RK',
    color: 'bg-teal-500',
  },
];

// ─── Nav Links ────────────────────────────────────────────────────────
export const navLinks = [
  { name: 'Home',     href: 'hero'     },
  { name: 'About',    href: 'about'    },
  { name: 'Skills',   href: 'skills'   },
  { name: 'Projects', href: 'projects' },
  { name: 'Research', href: 'research' },
  { name: 'Services', href: 'services' },
  { name: 'Journey',  href: 'journey'  },
  { name: 'Contact',  href: 'contact'  },
];
