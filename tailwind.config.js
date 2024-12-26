/** @type {import('tailwindcss').Config} */
import phosphorIcons from "phosphor-icons-tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#fdfcff',
          secondary: '#f2e8ff',
          text: '#2a2734',
          textSecondary: '#7a718e',
          button: '#d946ef',
          buttonHover: '#ec4899',
          highlight: '#9333ea',
          link: '#3b82f6',
        },
        dark: {
          background: '#1e1b29',
          secondary: '#29233d',
          quartiary: '#4c4171',
          text: '#f2e6ff',
          textSecondary: '#a68ec4',
          button: '#f472b6',
          buttonHover: '#e879f9',
          highlight: '#c084fc',
          link: '#60a5fa',
        },
      },
    },
  },
  plugins: [phosphorIcons()],
}

