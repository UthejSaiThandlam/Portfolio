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
          main: '#0B1020',
          card: '#121A2F',
          cardHover: '#18233F',
        },
        border: {
          subtle: '#1F2A44',
          accent: '#334771',
        },
        text: {
          primary: '#E8ECF5',
          secondary: '#9AA6BF',
          muted: '#64748B',
        },
        accent: {
          blue: '#4F8CFF',
          teal: '#2DD4BF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '1140px',
      }
    },
  },
  plugins: [],
}
