/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0F172A', // Primary dark blue
        },
        accent: {
          50: '#effcf6',
          100: '#c6f7e2',
          200: '#8eedc7',
          300: '#65d6ad',
          400: '#3ebd93',
          500: '#27ab83',
          600: '#0D9488', // Main teal accent
          700: '#147d64',
          800: '#0c6b58',
          900: '#014d40',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.accent.600'),
              '&:hover': {
                color: theme('colors.accent.800'),
              },
            },
            h1: {
              color: theme('colors.primary.900'),
            },
            h2: {
              color: theme('colors.primary.900'),
            },
            h3: {
              color: theme('colors.primary.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};