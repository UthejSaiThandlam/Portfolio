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
          main: '#090D15',
          surface: '#121927',
          card: '#121927',
          cardHover: '#1A2438',
        },
        border: {
          subtle: '#273246',
          accent: '#384863',
          coral: 'rgba(255, 112, 92, 0.45)',
        },
        text: {
          primary: '#F3F5FA',
          secondary: '#AAB5C6',
          muted: '#6B7A90',
        },
        accent: {
          coral: '#FF705C',
          coralHover: '#FF5840',
          cyan: '#61CAE8',
          emerald: '#28C49A',
          sky: '#38BDF8',
          purple: '#A855F7',
          blue: '#4F8CFF',
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
      },
      screens: {
        'xs': '380px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.25s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
