/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030306',
          900: '#07070d',
          850: '#0b0c15',
          800: '#111322',
          700: '#1c1f36',
          600: '#2b2f52',
        },
        electric: {
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.08) 35%, rgba(3, 3, 6, 0) 70%)',
        'radial-violet': 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(3, 3, 6, 0) 70%)',
        'radial-cyan': 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(3, 3, 6, 0) 70%)',
        'gradient-border': 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.4))',
      },
      boxShadow: {
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-card': '0 0 35px -10px rgba(99, 102, 241, 0.15)',
        'glow-button': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
