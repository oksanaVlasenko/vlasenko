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
    // fontSize: {
    //   '2xl': ['2em', {
    //     letterSpacing: '-0.02em',
    //     fontWeight: '600',
    //   }],
    //   '3xl': ['2.5em', {
    //     letterSpacing: '-0.02em',
    //     fontWeight: '700',
    //   }],

    // },
    extend: {},
  },
  plugins: [],
}

