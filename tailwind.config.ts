import type { Config } from 'tailwindcss';

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
        secondary: '#022128'
      },
      fontFamily: {
        ginka: ['Ginka', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
    }
  },
  plugins: [],
} satisfies Config;

