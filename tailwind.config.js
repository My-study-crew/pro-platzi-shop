const Colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{hmtl,js,jsx}'],
  theme: {
    colors: {
      ...Colors,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
