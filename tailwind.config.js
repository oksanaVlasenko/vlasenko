/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      '2xl': ['4em', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '600',
      }],
      '3xl': ['4.5em', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }]
    },
    extend: {},
  },
  plugins: [],
}

