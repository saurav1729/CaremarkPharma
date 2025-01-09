/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-gradient': 'linear-gradient(315deg, #7ed6df 0%, #000000 74%)',
        // 'custom-gradient-home': 'linear-gradient(315deg, #ff9a9e %, #7ed6df 24%)', //
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 5s ease infinite',
      },
      boxShadow: {
        boxShadow: {
          'btn-hvr': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

