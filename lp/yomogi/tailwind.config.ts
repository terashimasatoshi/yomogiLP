import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Zen Maru Gothic"', 'sans-serif'],
        serif: ['"Zen Maru Gothic"', 'sans-serif'],
      },
      colors: {
        brand: {
          text: '#5C5046',
          primary: '#E88D93',
          secondary: '#96C59E',
          accent: '#D9737A',
          bg: '#FFFCFA',
          bgDark: '#F7F0EB',
          highlight: '#FFF5F5',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
