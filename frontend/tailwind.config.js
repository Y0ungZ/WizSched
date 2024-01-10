/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#FC6B85',
      orange: '#FDB35C',
      yellow: '#F2EC67',
      green: '#50C69C',
      blue: '#0087EB',
      navy: '#000AB2',
      gray: '#D4D0C7',
      black: '#292929',
      white: '#FFFFFF',
      'google-blue': '#4285F4',
    },
    fontFamily: {
      default: ['ChosunGu', 'sans-serif'],
      accent: ['Busan', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
