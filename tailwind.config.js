/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#111118',
      onBackground: '#EEF0F2',
      container: '#272635',
      bgHover: '#46455f67',
      'bg-elevation-1': '#46455F',
      primary: '#F3ED3D'
    },
    extend: {}
  },
  plugins: []
  // plugins: [require('@tailwindcss/typography')]
}
