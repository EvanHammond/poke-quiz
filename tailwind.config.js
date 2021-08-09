module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
