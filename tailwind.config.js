/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf9f1',
          100: '#f6f1de',
          200: '#ede0bb',
          300: '#e1cb91',
          400: '#d5b367',
          500: '#c59b43',
          600: '#ab7f34',
          700: '#89612b',
          800: '#714e28',
          900: '#5f4225',
          accent: '#e5b869',
        },
        obsidian: {
          950: '#07080a',
          900: '#0c0e12',
          850: '#11141a',
          800: '#161a22',
          750: '#1d222d',
          700: '#262c3a',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
