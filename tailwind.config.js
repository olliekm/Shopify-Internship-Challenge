module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'likeClick': 'ping .5s ease-in-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(120%)' },
          '50%': { transform: 'rotate(100%)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
