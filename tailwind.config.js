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
        bg: {
          main: '#0B0F19',
          surface: '#111625',
          card: '#141B2D',
          cardHover: '#1B243B',
        },
        border: {
          subtle: '#1E2638',
          accent: '#2D374D',
          coral: 'rgba(255, 101, 81, 0.4)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        accent: {
          coral: '#FF6551',
          coralHover: '#FF5038',
          cyan: '#06B6D4',
          sky: '#38BDF8',
          purple: '#A855F7',
          blue: '#4F8CFF',
          teal: '#2DD4BF',
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '1180px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
