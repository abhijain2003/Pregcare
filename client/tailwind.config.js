module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFDCF5",
        secondary: "#FDC7FF",
        tertiary: "#F2F4C3",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        '128': '40rem',
        '256': '80rem',
      },
    },
    fontFamily: {
      'orienta': ['Orienta', 'sans-serif'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
