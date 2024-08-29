// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-out': 'slideInOut 8s linear infinite',
      },
      keyframes: {
        slideInOut: {
          // '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(0)', opacity: '1' },
          // '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Example font family
        header: ['Roboto', 'sans-serif'], // Example font for headers
        sac: ['Sacramento', 'cursive'],
      },
    },
  },
  plugins: [],
}
