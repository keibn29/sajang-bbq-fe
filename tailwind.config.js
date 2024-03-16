/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 3px 10px 0px rgba(0, 0, 0, 0.25)',
      },
    },
    colors: {
      primary: '#77C373',
      secondary: '#666666',
      dark: '#424242',
      light: '#EBEBEB',
      tertiary: '#03A9F4',
      error: '#F31700',
      info: '#0058E9',
      success: '#37B400',
      warning: '#FFC000',
      white: '#ffffff',
      black: '#000000',
      'dark-blue': '#215E74',
      'dark-green': '#529949',
      'light-gray': '#F0F0F0',
    },
  },
  plugins: [],
};
