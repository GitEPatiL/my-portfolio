# Aviraj Gite — Developer Portfolio

![Status](https://img.shields.io/badge/Status-Live-brightgreen.svg)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind%20%7C%20Framer%20Motion-blueviolet.svg)

A fast, responsive, and visually rich personal portfolio built with a **Cyber-Minimalist** design aesthetic. Showcasing full-stack MERN capabilities through clean architecture and high-fidelity motion design.

🔗 **Live Site:** [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + CSS Custom Properties |
| Animation | Framer Motion |
| Typography | Google Fonts (Inter, Sora, Geist Mono) |
| Icons | Custom SVG React Components |

---

## ✨ Features

- **Cyber-Minimalist UI** — Deep dark mode, neon gradients, and glassmorphism cards
- **Centralized Content** — All site data lives in a single file: `src/data/portfolioData.js`
- **Motion Design** — Scroll-triggered reveals, magnetic buttons, and 3D tilt project cards
- **Fully Responsive** — Mobile-first layouts with fluid typography and a custom drawer nav
- **Serverless Contact** — Form integrates with the native email client via `mailto:`

---

## 📂 Project Structure

```
my-portfolio/
├── public/                 # Static assets (favicon, OG image, hero portrait)
├── src/
│   ├── components/         # Section components (Hero, About, Skills, Projects, Experience, Contact, Footer)
│   ├── data/
│   │   └── portfolioData.js  ← Edit all site content here
│   ├── App.jsx             # Root layout
│   ├── animations.js       # Framer Motion variants
│   └── index.css           # Global styles & CSS variables
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment

Optimized for **Vercel** or **Netlify**.

1. Connect the GitHub repo to Vercel/Netlify
2. Set build command: `npm run build`
3. Set output directory: `dist`

---

## ✏️ Customization

All portfolio content (bio, skills, projects, experience, links) is managed in one place:

```
src/data/portfolioData.js
```

Update that file and the entire site reflects the changes — no component digging required.

---

*Built by Aviraj Gite*
