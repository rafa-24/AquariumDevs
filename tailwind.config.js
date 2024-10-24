module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        custom: ['"GT Walsheim"', 'Arial', 'gadget', 'sans-serif'], // Aquí agregas la fuente
      },
    },
  }, 
  plugins: [],
};
