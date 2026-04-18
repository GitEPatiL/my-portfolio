// ============================================================
// src/data/portfolioData.js
// All portfolio content lives here. Edit this file to update
// anything displayed on the site.
// ============================================================

// ── Site-wide config ────────────────────────────────────────
export const siteConfig = {
  name:     "Aviraj Gite",
  fullName: "Aviraj Bhausaheb Gite",
  title:    "Full Stack Developer",
  tagline:  "Building responsive, scalable web apps with the MERN stack — one clean commit at a time.",
  location: "Pune, India",
  email:    "giteaviraj155@gmail.com",
  phone:    "7038071626",
  resumeUrl: "https://drive.google.com/file/d/1vaT8geEv2iHELza-2y_IwJnn97tYdHem/view?usp=drive_link", // Replace with your actual resume / Google Drive link
};

// ── Navigation links ─────────────────────────────────────────
export const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

// ── About / Career objective ──────────────────────────────────
export const about = {
  greeting: "Hi, I'm",
  intro: `Passionate and dedicated Full Stack Developer with hands-on experience in building
    responsive and scalable web applications using the MERN stack. Strong focus on writing
    clean code, solving real-world problems, and continuously upgrading skills to stay
    ahead in the tech space.`,
  details: `Seeking opportunities to contribute to innovative projects and grow as a
    professional developer. I enjoy turning complex requirements into simple, intuitive
    user experiences and collaborating with teams that care about quality.`,
  stats: [
    { label: "Projects Completed",  value: "10+"  },
    { label: "Technologies",        value: "11+"  },
    { label: "Graduation Year",     value: "2025" },
    { label: "Cups of Coffee",      value: "∞"    },
  ],
};

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    degree:      "Bachelor of Computer Applications (BCA)",
    institution: "Pemraj Sarda College, Ahmednagar",
    university:  "Savitribai Phule Pune University",
    year:        "2025",
    description: "Focused on full-stack web development, database management, and software engineering fundamentals.",
  },
];

// ── Skills ───────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML",        level: 95 },
      { name: "CSS",         level: 90 },
      { name: "Bootstrap",   level: 82 },
      { name: "JavaScript",  level: 85 },
      { name: "React",       level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js",     level: 78 },
      { name: "Express.js",  level: 78 },
      { name: "MongoDB",     level: 72 },
      { name: "MySQL",       level: 75 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    items: [
      { name: "Git",         level: 88 },
      { name: "GitHub",      level: 88 },
      { name: "VS Code",     level: 95 },
      { name: "Postman",     level: 80 },
      { name: "REST APIs",   level: 78 },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Masale Selling Website",
    description:
      "A full-stack e-commerce web application for an organic spice brand. Features include product listings, user authentication, OAuth2-based email delivery, and a production-ready MySQL database schema following the MVC architecture.",
    tags: ["Node.js", "Express.js", "MySQL", "HTML", "CSS"],
    github: "https://github.com/GitEPatiL/Masale-Selling-Website",
    live:   "#", // Add live URL when deployed
    featured: true,
  },
  {
    id: 2,
    title: "DOM Mini Projects",
    description:
      "A curated collection of five vanilla JavaScript mini-projects demonstrating core DOM manipulation skills: Animated Cursor, List & Search, Simple Calculator, Todo List, and Color Switcher.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/GitEPatiL/dom-mini-projects",
    live:   "#",
    featured: true,
  },
  {
    id: 3,
    title: "React Character Cards",
    description:
      "A React application that renders dynamic character cards, showcasing core concepts such as props, state management, custom hooks, reusable components, and REST API integration.",
    tags: ["React", "JavaScript", "Hooks", "REST API", "CSS"],
    github: "https://github.com/GitEPatiL",
    live:   "#",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This very portfolio — built from scratch with React and Vite. Features a dark theme, animated typewriter effect, scroll-reveal sections, responsive layout, and a contact form.",
    tags: ["React", "Vite", "CSS", "Responsive"],
    github: "https://github.com/GitEPatiL",
    live:   "#",
    featured: false,
  },
];

// ── Work Experience ───────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role:    "Full Stack Developer Intern",
    company: "Self-Employed",
    period:  "04/2025 – 09/2025",
    description:
      "Designing and developing complete web applications for clients from the ground up — covering UI design, RESTful APIs, database schemas, and deployment.",
    highlights: [
      "Built a full-stack e-commerce site using Node.js, Express.js, and MySQL",
      "Implemented OAuth2-based email delivery and secure user authentication",
      "Delivered multiple projects on time with positive client feedback",
      "Maintained clean Git history and followed MVC architecture throughout",
    ],
  },
];

// ── Contact ───────────────────────────────────────────────────
export const contact = {
  heading:    "Let's Work Together",
  subheading: "I'm open to freelance projects, internships, and full-time roles. Feel free to reach out!",
  email:      "giteaviraj155@gmail.com",
  phone:      "7038071626",
  socials: [
    {
      label: "GitHub",
      href:  "https://github.com/GitEPatiL",
      icon:  "github",
    },
    {
      label: "LinkedIn",
      href:  "https://www.linkedin.com/in/aviraj-gite-8737892b4/",
      icon:  "linkedin",
    },
  ],
};

// ── Footer ────────────────────────────────────────────────────
export const footer = {
  text: "Designed & Built by Aviraj Bhausaheb Gite",
  year: new Date().getFullYear(),
};
