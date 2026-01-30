import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'smoky-black': '#11120d',
        'olive-drab': '#565449',
        bone: '#d8cfbc',
        'floral-white': '#fffbf4',
      },
    },
  },
  plugins: [],
} satisfies Config;
