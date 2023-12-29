/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html',
  '*.js'],
  theme: {
    width: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1400px',
      '5xl': '1536px',
    },
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1400px',
      '5xl': '1536px',
    },
    extend: {
      colors: {
        'brandPrimary-500': '#2A62FF',
        'brandPrimary-700': '#2E3469',
        'neutral-0': '#FFFFFF',
        'neutral-100': '#FAFAFA',
        'neutral-200': '#9597AE',
        'neutral-300': '#8993A6',
        'neutral-500': '#40495C',
        'neutral-900': '#1A1D24',
        'neutal-1000': '#000000',
      },
      fontFamily: {
        'sans-secondary': ['Poppins', 'sans-serif'],
        'sans-primary': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

