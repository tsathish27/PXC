// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0F0F0', // Adjust as needed
        primary: '#FF512F',
        'primary-foreground': '#FFFFFF', // Adjust as needed
      },
      spacing: {
        '50': '50%',
      },
    },
  },
  plugins: [],
};
