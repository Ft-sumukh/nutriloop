/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070C1E',
          navy: '#0B132B',
          surface: '#121C38',
          card: '#182449',
          border: '#243463',
          emerald: '#10B981',
          cyan: '#06B6D4',
          accent: '#38BDF8',
          purple: '#8B5CF6',
          amber: '#F59E0B',
          rose: '#F43F5E'
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

