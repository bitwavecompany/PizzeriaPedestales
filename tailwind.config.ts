import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app/**/*.vue'  
  ],
  theme: {
    extend: {
      colors: {
        'pedestales-red': '#cc4629', // Adjusted from image
        'pedestales-bg': '#faf8f4', // Cream background
        'pedestales-dark': '#1c1c1c',
        'pedestales-gray': '#6b6b6b',
        'pedestales-muted': '#9e968f',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1) rotate(-12deg)' },
          '50%': { transform: 'scale(1.05) rotate(-10deg)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 40s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'pulse-scale': 'pulse-scale 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}