module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '400px',
      },
      outline: {
        none: '0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
