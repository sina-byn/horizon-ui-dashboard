/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F4F7FE',
        'd-light': '#1B254B',
        neutral: '#A3AED0',
        primary: {
          lighter: '#707EAE',
          light: '#4318FF',
          DEFAULT: '#2B3674',
          dark: '#11047A',
        },
        'd-primary': {
          light: '#7551FF',
          DEFAULT: '#111C44',
          dark: '#0B1437',
        },
      },
      boxShadow: {
        custom: '0px 18px 40px rgba(112, 144, 176, 0.12)',
        tooltip: '0 5px 30px rgba(0, 0, 0, 0.15)',
        'tooltip-dark':
          '0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'move-in': 'move-in 200ms linear',
      },
      keyframes: {
        'move-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
