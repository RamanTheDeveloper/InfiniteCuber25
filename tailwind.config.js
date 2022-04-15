module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-text':{
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
      },      
      animation:{
        'fade-text': 'fade-text 5s infinite alternate'
      }
    },
  },
  plugins: [],
}
