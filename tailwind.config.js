/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'system-ui', 'sans-serif'],
        geist: ['Geist Mono', 'monospace'],
      },
      colors: {
        // Stitch Cyber-Minimalist palette
        surface: {
          dim: '#11131c',
          bright: '#373943',
          lowest: '#0c0e17',
          low: '#191b24',
          DEFAULT: '#1d1f29',
          high: '#282933',
          highest: '#32343e',
        },
        primary: {
          DEFAULT: '#dcb8ff',
          container: '#8a2be2',
          fixed: '#efdbff',
          dim: '#dcb8ff',
        },
        secondary: {
          DEFAULT: '#8bd5ff',
          container: '#00bdfd',
        },
        onSurface: '#e1e1ef',
        onSurfaceVariant: '#cfc2d7',
        outline: '#988ca0',
        outlineVariant: '#4c4354',
        neonPurple: '#8a2be2',
        electricBlue: '#00bfff',
        deepBg: '#050608',
        navyBg: '#12141d',
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #8a2be2 0%, #00bfff 100%)',
        'grad-text': 'linear-gradient(135deg, #dcb8ff 0%, #8bd5ff 100%)',
        'grad-neon': 'linear-gradient(135deg, #8a2be2 0%, #00bfff 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(138, 43, 226, 0.3)',
        'glow-blue': '0 0 40px rgba(0, 191, 255, 0.3)',
        'glow-sm': '0 0 20px rgba(138, 43, 226, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        glass: '20px',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline': ['32px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      spacing: {
        'section': '120px',
        'container': '1280px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'typewriter': 'typewriter 2.5s steps(30) forwards',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(138, 43, 226, 0.7), 0 0 80px rgba(0, 191, 255, 0.3)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
