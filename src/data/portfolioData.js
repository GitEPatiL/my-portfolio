// ============================================================
// src/data/portfolioData.js
// All portfolio content lives here. Updated with resume,
// GitHub profile, and LinkedIn profile details.
// ============================================================

// ── Site-wide config ────────────────────────────────────────
export const siteConfig = {
  name:         "Aviraj Gite",
  fullName:     "Aviraj Bhausaheb Gite",
  title:        "MERN Stack Developer",
  roleHeadline: "Full Stack Engineer & MERN Specialist",
  tagline:      "MERN stack developer with 1.5 years of experience at A2Z IT HUB, progressing from intern to full-time Full Stack Engineer.",
  location:     "Pune, Maharashtra, India",
  email:        "giteaviraj155@gmail.com",
  phone:        "+91 7038071626",
  resumeUrl:    "https://drive.google.com/file/d/1vaT8geEv2iHELza-2y_IwJnn97tYdHem/view?usp=drive_link",
  portfolioUrl: "https://my-portfolio-pi-six-56.vercel.app",
  githubUrl:    "https://github.com/GitEPatiL",
  linkedinUrl:  "https://www.linkedin.com/in/aviraj-gite-8737892b4",
};

// ── Navigation links ─────────────────────────────────────────
export const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

// ── About / Professional Summary ──────────────────────────────
export const about = {
  greeting: "Hi, I'm",
  intro: `MERN stack developer with 1.5 years of experience at A2Z IT HUB, progressing from intern to full-time Full Stack Engineer. Proven track record of building production RESTful APIs, implementing JWT authentication with role-based access control, and integrating Razorpay payment processing (10+ APIs, 200+ users, 100+ transactions).`,
  details: `Built and shipped Interview Master, an AI-powered interview preparation platform integrating Google Gemini 2.5 Flash with resume parsing and schema-validated AI output. Comfortable across the entire stack — from responsive React interfaces with Tailwind CSS and Ant Design to secure backend architecture, database modeling, and Agile delivery.`,
  stats: [
    { label: "Experience",       value: "1.5 Yrs" },
    { label: "Production APIs",  value: "10+"     },
    { label: "Users Secured",    value: "200+"    },
    { label: "BCA CGPA",         value: "7.49"    },
  ],
};

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    degree:      "Bachelor of Computer Applications (BCA)",
    institution: "Pemraj Sarda College, Ahmednagar",
    university:  "Savitribai Phule Pune University",
    year:        "Jul 2022 – May 2025",
    cgpa:        "7.49 CGPA",
    description: "Graduated with 7.49 CGPA. Focused on full-stack web development, database management, software engineering, and core algorithms.",
  },
];

// ── Skills ───────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend & UI",
    icon: "🎨",
    items: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "React.js",          level: 90 },
      { name: "React Router",      level: 88 },
      { name: "Tailwind CSS",      level: 90 },
      { name: "Ant Design",        level: 85 },
      { name: "Bootstrap",         level: 85 },
      { name: "HTML5 & CSS3",      level: 95 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    items: [
      { name: "Node.js",           level: 88 },
      { name: "Express.js",        level: 88 },
      { name: "RESTful APIs",      level: 92 },
      { name: "JWT Authentication", level: 90 },
      { name: "RBAC (Access Control)", level: 88 },
      { name: "HTTP-only Cookies & CORS", level: 86 },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "🗄️",
    items: [
      { name: "MongoDB",           level: 88 },
      { name: "Mongoose ODM",      level: 88 },
      { name: "MySQL",             level: 84 },
      { name: "Database Design",   level: 86 },
    ],
  },
  {
    category: "AI, Tools & DevOps",
    icon: "🚀",
    items: [
      { name: "Google Gemini API (2.5)", level: 88 },
      { name: "Zod Schema Validation",   level: 88 },
      { name: "Razorpay Gateway",        level: 86 },
      { name: "Git & GitHub",            level: 90 },
      { name: "GitHub Actions & Docker", level: 82 },
      { name: "Postman",                 level: 88 },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Interview Master — AI-Powered Interview Preparation Platform",
    description:
      "Full-stack platform that analyzes candidate resumes against job descriptions to generate personalized interview-prep insights. Integrates Google Gemini 2.5 Flash for technical questions, behavioral scenarios, skill gaps, and a 7-day prep plan with Zod validation, JWT cookies, and PDF export.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini 2.5 Flash", "JWT", "Zod", "Tailwind CSS", "Ant Design"],
    github: "https://github.com/GitEPatiL/Interview-AI",
    live:   "https://interview-ai-black-seven.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Mascle — Organic Spice E-Commerce Platform",
    description:
      "End-to-end full-stack e-commerce web platform for browsing, ordering, and managing organic spice products. Built RESTful APIs for catalog, shopping cart, and order management with a robust MySQL relational database following MVC architecture.",
    tags: ["Node.js", "Express.js", "MySQL", "Bootstrap", "RESTful APIs", "MVC"],
    github: "https://github.com/GitEPatiL/Masale-Selling-Website",
    live:   "#",
    featured: true,
  },
  {
    id: 3,
    title: "GoCart — Multi-Vendor E-Commerce Template",
    description:
      "Modern, responsive multi-vendor e-commerce marketplace platform built with Next.js and Tailwind CSS. Features modular component architecture, flexible catalog browsing, user shopping carts, and vendor storefront layouts.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "E-Commerce"],
    github: "https://github.com/GitEPatiL/gocart",
    live:   "https://gocart-gs.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "JWT Authentication & RBAC Security Engine",
    description:
      "Production-grade security and authentication module implementing JWT with secure HTTP-only cookies, Role-Based Access Control (RBAC), token rotation, and robust CORS protection.",
    tags: ["Node.js", "Express.js", "JWT", "RBAC", "Security", "Cookies"],
    github: "https://github.com/GitEPatiL/jwt-auth",
    live:   "#",
    featured: false,
  },
  {
    id: 5,
    title: "DOM Mini Projects Collection",
    description:
      "Curated suite of vanilla JavaScript interactive mini-applications demonstrating deep DOM manipulation, dynamic event handling, custom animated cursor, calculator, list search, and todo operations.",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM API"],
    github: "https://github.com/GitEPatiL/dom-mini-projects",
    live:   "#",
    featured: false,
  },
  {
    id: 6,
    title: "JavaScript Question Series & Daily Problem Solving",
    description:
      "A structured daily problem-solving repository tackling core JavaScript questions, closures, prototype chain, asynchronous patterns, and interview coding challenges with clean solutions.",
    tags: ["JavaScript", "ES6+", "Data Structures", "Algorithms", "Problem Solving"],
    github: "https://github.com/GitEPatiL/Javascript-Question-Series",
    live:   "#",
    featured: false,
  },
];

// ── Work Experience ───────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role:    "Full Stack Engineer",
    type:    "Full-time",
    company: "A2Z IT HUB Pvt. Ltd.",
    location: "Ahmednagar, Maharashtra, India · On-site",
    period:  "Nov 2025 – Present",
    description:
      "Transitioned from MERN Stack Developer Intern to full-time Full Stack Engineer after an impactful 7-month internship. Architecting, engineering, and shipping production web applications and resilient backend services.",
    highlights: [
      "Promoted to full-time Full Stack Engineer following performance during a 7-month internship.",
      "Developing end-to-end full-stack architectures, high-performance RESTful APIs, and scalable database schemas.",
      "Ensuring high code quality, security standards (RBAC, JWT), and responsive user experiences across client deliveries.",
      "Collaborating actively with cross-functional teams in sprint planning, architectural design, and deployment.",
    ],
  },
  {
    id: 2,
    role:    "MERN Stack Developer Intern",
    type:    "Internship",
    company: "A2Z IT HUB Pvt. Ltd.",
    location: "Ahmednagar, Maharashtra, India · On-site",
    period:  "Apr 2025 – Oct 2025 (7 mos)",
    description:
      "Core developer intern building and integrating backend APIs, authentication systems, and payment processing.",
    highlights: [
      "Built and integrated 10+ RESTful APIs with Node.js and Express.js to power core application workflows.",
      "Implemented JWT-based authentication and role-based access control (RBAC), securing access for 200+ users.",
      "Integrated Razorpay payment processing with server-side order validation, supporting 100+ transactions.",
      "Designed and maintained MongoDB and MySQL data layers, improving data organization and query reliability.",
      "Collaborated in an Agile environment: sprint planning, task management, testing, and code reviews.",
    ],
  },
];

// ── Contact ───────────────────────────────────────────────────
export const contact = {
  heading:    "Let's Build Something Impactful",
  subheading: "I'm open to full-time software engineering roles, MERN stack opportunities, and innovative projects. Feel free to reach out!",
  email:      "giteaviraj155@gmail.com",
  phone:      "+91 7038071626",
  socials: [
    {
      label:    "GitHub",
      href:     "https://github.com/GitEPatiL",
      icon:     "github",
      username: "GitEPatiL",
    },
    {
      label:    "LinkedIn",
      href:     "https://www.linkedin.com/in/aviraj-gite-8737892b4",
      icon:     "linkedin",
      username: "aviraj-gite-8737892b4",
    },
  ],
};

// ── Footer ────────────────────────────────────────────────────
export const footer = {
  text: "Designed & Built by Aviraj Bhausaheb Gite",
  year: new Date().getFullYear(),
};
