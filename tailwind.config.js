/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom theme colors based on your palette
        // Light cream: #FBFACD
        primary: {
          50: '#FEFDF7',
          100: '#FBFACD',
          200: '#F9F7B3',
          300: '#F7F499',
          400: '#F5F17F',
          500: '#F3EE65',
          600: '#F1EB4B',
          700: '#EFE831',
          800: '#EDE517',
          900: '#D4CC0A'
        },
        // Dark mode specific colors
        'dark-section': '#393E46',
        'dark-main': '#000000',
        'dark-text': '#ffffff',
        // Light mauve: #DEBACE
        accent: {
          50: '#F7F3F6',
          100: '#DEBACE',
          200: '#D6ABBD',
          300: '#CE9CAC',
          400: '#C68D9B',
          500: '#BE7E8A',
          600: '#B66F79',
          700: '#AE6068',
          800: '#A65157',
          900: '#9E4246'
        },
        // Medium purple: #BA94D1
        secondary: {
          50: '#F6F2F8',
          100: '#BA94D1',
          200: '#AB7FC7',
          300: '#9C6ABD',
          400: '#8D55B3',
          500: '#7E40A9',
          600: '#6F2B9F',
          700: '#601695',
          800: '#51018B',
          900: '#420081'
        },
        // Dark purple: #7F669D
        dark: {
          50: '#F2F0F4',
          100: '#7F669D',
          200: '#735B91',
          300: '#675085',
          400: '#5B4579',
          500: '#4F3A6D',
          600: '#432F61',
          700: '#372455',
          800: '#2B1949',
          900: '#1F0E3D'
        },
        // Neutral grays derived from your palette
        gray: {
          50: '#FBFACD',   // Light cream
          100: '#F5F3E8',
          200: '#EFECE3',
          300: '#E9E5DE',
          400: '#D3CFC8',
          500: '#BDBBB2',
          600: '#A7A59C',
          700: '#918F86',
          800: '#7B7970',
          900: '#65635A',
          950: '#4F4D44'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};