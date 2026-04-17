// ============================================================
// portfolioData.js — Edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Epatil G",
  title: "Full Stack Developer",
  tagline: "Crafting elegant digital experiences with clean code.",
  resumeUrl: "#",  // Replace with actual resume link
  email: "epatil@example.com",
  location: "Pune, India",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  greeting: "Hi, I'm",
  intro: `I'm a passionate Full Stack Developer with a strong foundation in building
    responsive, performant, and user-friendly web applications. I love turning
    complex problems into simple, beautiful, and intuitive solutions.`,
  details: `When I'm not coding, I'm exploring new technologies, contributing to open-source
    projects, or leveling up my design skills. I believe in writing clean, maintainable
    code and collaborating with teams to ship great products.`,
  stats: [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "15+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "HTML & CSS", level: 95 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 72 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Docker (Basics)", level: 55 },
      { name: "Linux CLI", level: 70 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Masale Selling Website",
    description:
      "A full-stack e-commerce platform for an organic spice brand featuring OAuth2 email delivery, MySQL backend, and a modern MVC architecture.",
    tags: ["Node.js", "Express", "MySQL", "HTML/CSS"],
    github: "https://github.com/GitEPatiL",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "DOM Mini Projects",
    description:
      "A collection of five vanilla JS mini-projects: Animated Cursor, List & Search, Simple Calculator, Todo List, and Color Switcher — showcasing DOM mastery.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/GitEPatiL",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "React Character Cards",
    description:
      "A React app that renders dynamic character cards from an API, demonstrating props, state, hooks, and reusable component design patterns.",
    tags: ["React", "Hooks", "API", "CSS"],
    github: "https://github.com/GitEPatiL",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This very portfolio — built with React + Vite, featuring smooth scroll, dark theme, animated sections, and a responsive layout.",
    tags: ["React", "Vite", "CSS", "Responsive"],
    github: "https://github.com/GitEPatiL",
    live: "#",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "2024 – Present",
    description:
      "Designed and developed multiple client web applications from scratch. Handled end-to-end development including UI design, backend APIs, database schemas, and deployment.",
    highlights: [
      "Built a spice e-commerce site with Node.js + MySQL",
      "Delivered 5+ projects on time with positive client feedback",
      "Implemented secure authentication and email delivery pipelines",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Tech Startup (Pune)",
    period: "2023 – 2024",
    description:
      "Contributed to the company's internal dashboard built with React. Improved component reusability, fixed accessibility issues, and collaborated using Git workflows.",
    highlights: [
      "Refactored 30% of components improving performance",
      "Integrated REST APIs and managed global state",
      "Participated in daily standups and code reviews",
    ],
  },
];

export const contact = {
  heading: "Let's Work Together",
  subheading:
    "I'm currently open to freelance projects and full-time roles. Feel free to reach out!",
  email: "epatil@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/GitEPatiL", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/epatil", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/epatil", icon: "twitter" },
  ],
};

export const footer = {
  text: "Designed & Built by Epatil G",
  year: new Date().getFullYear(),
};
