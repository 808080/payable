import type { Config } from 'tailwindcss';
import { themesClasses } from './utils/mockData';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7CDDAE',
        'primary-dark': '#65C295',
        secondary: '#022128',
        grey: '#D9D9D9'
      },
      fontFamily: {
        ginka: ['Ginka', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      keyframes: {
        scale: {
          '0%, 40%, 100%': { transform: 'scale(.73)' },
          '50%, 90%': { transform: 'none' },
        },
        opacity: {
          '0%, 40%, 100%': { opacity: '0' },
          '45%, 95%': { opacity: '1' },
        }
      },
      animation: {
        scale: 'scale 4s ease-in-out infinite',
        opacity: 'opacity 4s ease-in-out infinite',
      }
    }
  },
  safelist: [
    ...themesClasses
  ],
  plugins: [],
} satisfies Config;