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
  {
    id: 2,
    title: 'Versal — Modular Web Platform',
    description:
      'Scalable micro-frontend web application architecture built with React, Next.js, and TypeScript, featuring dynamic layout composition and modular component design.',
    image: '/placeholder-research.png',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    category: 'Frontend Architecture',
    github: 'https://github.com/guruprasadregar1-afk',
    live: null,
    featured: false,
  },
  {
    id: 3,
    title: 'BoatWizard-to-NautiX Migration Engine',
    description:
      'Data transformation and backend migration system handling high-volume inventory sync, schema mapping, and API integration for maritime logistics software.',
    image: '/placeholder-research.png',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'AWS'],
    category: 'Backend Engine',
    github: 'https://github.com/guruprasadregar1-afk',
    live: null,
    featured: false,
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
      'Phase 3 completed with both Prehistoric Expedition and Coaster rides fully functional in 2D fallback and WebXR modes. Motion-to-photon latency measured within acceptable thresholds (< 50ms perceived head rotation latency). Mobile performance hit target frame rates (45–60 FPS) on mid-range Android Chrome hardware.',
    limitations:
      'iOS Safari lacks native WebXR support (restricting Apple devices to 2D canvas mode). High-poly 3D models require aggressive asset optimization to avoid thermal throttling during extended mobile VR sessions.',
    futureWork:
      'WebXR 6DoF controller input mapping for mobile VR, procedural terrain generation, and automated asset LOD pipelines.',
    techStack: ['Three.js', 'WebXR', 'React.js', 'Vite', 'JavaScript', 'GLTF/GLB'],
    github: 'https://github.com/guruprasadregar1-afk/dino-vr-frontend',
    live: 'https://dino-vr-frontend.vercel.app/',
    image: '/placeholder-research.png',
    featured: true,
  },
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
      'Prototype state. Successfully established the core relational schema for spatial graph entities and demonstrated 3D viewport rendering with interactive node selection and vision-based gesture tracking in Next.js. Deployed to Vercel production infrastructure.',
    limitations:
      'Full real-time synchronization between the PostgreSQL/PostGIS spatial graph backend and Next.js frontend state remains under active integration. MediaPipe hand-tracking gesture sensitivity varies under non-standard ambient lighting and low-resolution webcam conditions.',
    futureWork:
      'Bi-directional WebSockets spatial graph sync, multi-user spatial presence rooms, and WebXR AR passthrough viewport integration.',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'MediaPipe', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
    github: null,
    githubBackend: 'https://github.com/guruprasadregar1-afk/Spatial_Web_backen',
    githubFrontend: 'https://github.com/guruprasadregar1-afk/Spatial_Web_Frontend',
    live: 'https://spatial-web-frontend.vercel.app/',
    image: '/placeholder-research.png',
    featured: true,
  },
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
      'Achieved fully offline text-to-speech narration with zero cloud API token cost and low memory overhead on standard CPU hardware. Demonstrated multi-character voice mapping and automated emotion tag injection.',
    limitations:
      'Synthesis throughput depends heavily on available CPU thread counts. Dynamic prosody modulation depth is constrained by the ONNX voice model capabilities used by Piper TTS.',
    futureWork:
      'Streaming chunked audio generation over WebSockets, custom voice fine-tuning scripts, and automated multi-character script parsing.',
    techStack: ['Python', 'FastAPI', 'PyTorch', 'HuggingFace', 'Piper TTS', 'Pydub', 'Uvicorn', 'Pydantic', 'Pytest'],
    github: 'https://github.com/guruprasadregar1-afk/emotion_engine',
    live: null,
    image: '/placeholder-research.png',
    featured: true,
  },
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
      'Passed 50 unit tests verifying physical accuracy of geodesic paths and strain envelopes. Real-time GLSL ray-marching shaders rendered fluid gravitational lensing effects at 60 FPS on standard WebGL hardware. Deployed live on Vercel.',
    validation:
      'Physical accuracy of geodesic paths and strain envelopes verified across 50 unit tests in 12 test modules. Tested analytical benchmarks include Schwarzschild radius r_s = 2GM/c², photon sphere radius r_ph = 3GM/c², critical impact parameter b_c = 3√3 GM/c², weak-field deflection δφ ≈ 4GM/(c²b), and Peters gravitational-wave orbital decay rate and inspiral coalescence time.',
    limitations:
      'Uses non-spinning Schwarzschild equatorial ray-tracing and summed Newtonian/Schwarzschild accelerations for binary systems rather than full 3D numerical relativity Einstein field equation solvers or Kerr spinning black hole metrics.',
    futureWork:
      'Kerr spinning black hole frame dragging shaders, disk accretion thermal spectrum rendering, and WebGPU compute shader ray-marching.',
    references: [
      {
        label: 'Peters, P. C. (1964). Gravitational radiation and the motion of two point masses. Physical Review, 136(4B), B1224.',
        url: 'https://doi.org/10.1103/PhysRev.136.B1224',
      },
    ],
    techStack: ['TypeScript', 'GLSL', 'Three.js', 'WebGL', 'Vitest', 'Vite'],
    github: 'https://github.com/guruprasadregar1-afk/blackhole-physics',
    live: 'https://blackhole-physics.vercel.app',
    image: '/placeholder-research.png',
    featured: true,
  },
  {
    id: '4th-dimension',
    title: '4D Representation Platform',
    tagline:
      'A full-stack platform for exploring the 4th dimension — combining a rigorously validated computational geometry engine, real-time Gaussian splat rendering, and interactive tools that teach the concept through direct experience rather than passive observation.',
    status: 'Validated platform & live demo',
    problem:
      'Most "4th dimension" demos show a rotating shape and ask you to take it on faith. I wanted to build something that proves its own correctness — every geometric claim checked against independently hand-derived mathematics, not just "it looks right" — while also being genuinely understandable to someone with no math background.',
    whatIBuilt: [
      'A full-stack platform (Next.js, NestJS, MongoDB) with real-time multi-user collaboration, JWT auth with rotating refresh tokens, and a custom WebGL2 rendering engine (no third-party splat library).',
      'A validated computational geometry engine performing exact hyperplane-to-polytope slicing — computing the true cross-section of a 4-dimensional shape through any chosen plane, verified against hand-derived analytical ground truth (not approximated).',
      '"Concept Mode" — an interactive tool that proves 4D rotation causes real geometric distortion using a live, falsifiable numeric metric, with an honest control mode proving static 3D data has no such distortion.',
      '"The Impossible Escape" — a public, no-login interactive puzzle teaching the core 4D concept by letting the user fail at an impossible task before discovering the solution, rather than narrating it.',
      'A public REST API exposing the validated slicing engine, built after identifying a real, documented gap in ML interpretability research (exact high-dimensional slicing vs. the field\'s standard lossy PCA projection method) — currently in outreach to the authors of a relevant published visual-analytics framework.',
      'The engine published as its own standalone, CI-verified npm-installable package, independent of the main platform.',
    ],
    technicalChallenges: [
      'A coordinate-space unit mismatch causing incorrect Gaussian splat rendering, traced to a pixel-space vs. NDC-space conflict between shader variables.',
      'A near-zero-variance division bug causing degenerate geometry on certain inputs, fixed with a principled numerical floor and confirmed via adversarial tests specifically designed to break the fix.',
      'A silent projection-validity bug: naively dropping a coordinate to reduce dimensionality is only valid for axis-aligned cases — fixed by deriving a genuine, stable orthonormal basis for arbitrary oblique cases.',
      'A monorepo git-subdirectory packaging failure preventing reliable installation in external projects — resolved by restructuring into a standalone, independently-versioned, CI-tested package.',
    ],
    techStack: [
      'Next.js 14',
      'NestJS',
      'MongoDB/Mongoose',
      'TypeScript',
      'WebGL2',
      'WebSockets',
      'JWT auth',
      'Docker',
      'GitHub Actions CI',
      'Vitest/Jest',
    ],
    scopeNote:
      'This project validates computational geometry — it does not and cannot prove that a physical fourth spatial dimension exists; no software can establish that, only physical experiments can. Where the project touches real physics (a separate module modeling compact extra-dimension gravity theories), it explicitly compares model predictions against real published experimental limits and is clearly labeled as a model, never as evidence.',
    live: 'https://4th-dimension-ivory.vercel.app/escape',
    liveApi: 'https://fourth-dimension-re4c.onrender.com/api/public/slice',
    apiDocs: 'https://fourth-dimension-re4c.onrender.com/api/docs',
    githubMain: 'https://github.com/guruprasadregar1-afk/4th-dimension',
    githubEngine: 'https://github.com/guruprasadregar1-afk/4th-dimension-engine',
    researchWriteup: '[link to /research folder or arXiv once submitted]',
    mediaPlaceholders: [
      {
        id: 'concept-mode',
        title: 'Concept Mode Side-by-Side View',
        description: 'Screenshot showing Concept Mode side-by-side view with live falsifiable numeric metric',
      },
      {
        id: 'impossible-escape',
        title: 'The Impossible Escape Puzzle',
        description: 'Screenshot of the Impossible Escape public interactive puzzle',
      },
      {
        id: 'splat-view',
        title: 'Splat View Scene',
        description: 'Screenshot showing real-time Gaussian splat rendering scene',
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
  { label: 'Years Experience', value: '5+', icon: 'briefcase' },
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
    // TODO: Add real release cycle reduction metric if available
    desc: 'Architected an AI chat platform (ChatGPT-like) with LLM streaming, and implemented micro-frontend architecture patterns reducing release cycle times.',
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

// ─── AI Systems ────────────────────────────────────────────────────────
export const aiSystems = [
  {
    id: 'ai-admin-panel',
    title: 'AI-Built Admin Panel',
    description: 'A complete admin panel built end-to-end using AI-assisted development. Completed and deployed in production.',
    badge: 'Live in production',
    icon: 'Layout',
    flow: [],
    techStack: [],
  },
  {
    id: 'ai-domain-search',
    title: 'AI Domain Search Engine',
    description: 'Users describe their business idea and the engine generates domain-name suggestions for it. Completed and deployed in production.',
    badge: 'Live in production',
    icon: 'Search',
    flow: ['Describe your business idea', 'AI generates domain names', 'Suggestions returned'],
    techStack: [],
  },
  {
    id: 'ai-system-guide',
    title: 'AI System Guide',
    description: 'An assistant that lets users understand a complete system by asking questions in plain language. The AI answers and gives step-by-step guidance on how to use it. Completed and deployed in production.',
    badge: 'Live in production',
    icon: 'HelpCircle',
    flow: ['Ask a question', 'AI explains the system', 'Step-by-step usage guidance'],
    techStack: [],
  },
];

// [DRAFT, review wording]
export const aiWorkflowCopy = 'I am highly proficient with Cursor and Claude and use them for AI-assisted development, from scaffolding and architecture to debugging and code review, while still reviewing, testing, and owning the code that ships.';

export const aiTools = [
  { name: 'Cursor', icon: 'cursor' },
  { name: 'Claude', icon: 'claude' },
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
