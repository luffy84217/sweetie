module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pink/Purple Tailwind Color Scheme
        primary: '#f472b6',
        'primary-dark': '#c084fc',
        secondary: '#ffe4e6',
        'secondary-dark': '#f3e8ff',
        accent: '#ec4899',
        'accent-dark': '#a855f7',
        // Custom Color Scheme
        danger: '#ff4444',
        'danger-dark': '#cc0000',
        warning: '#ffbb33',
        'warning-dark': '#ff8800',
        success: '#00c851',
        'success-dark': '#007e33',
        info: '#33b5e5',
        'info-dark': '#0099cc',
        // Neutral Tailwind Color Scheme
        background: '#fafafa',
        'background-dark': '#171717',
        color: '#171717',
        'color-dark': '#fafafa',
      },
    },
  },
  plugins: [],
}
