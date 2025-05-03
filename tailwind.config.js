/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",  // This is correct
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Audiowide', 'sans-serif'],  // Apply Audiowide for body text
        heading: ['Audiowide', 'sans-serif'], // For robot-related heading font
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.80' }, // Instead of 0.5
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),  // Correct usage of Flowbite plugin
  ],
};
