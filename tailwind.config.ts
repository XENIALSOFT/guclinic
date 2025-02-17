import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff8f4',
      },
    },
  },
  plugins: [
  ],
} as Config;
