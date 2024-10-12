/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
        xx: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '28px'
      },
      colors: {
        red: {
          100: '#DC3535'
        },
        orange: {
          100: '#D17842'
        },
        black:{
          100: '#0C0F14',
          200: '#141921'
        },
        gray: {
          100: '#AEAEAE',
          200: '#52555A',
          300: '#252A32',
          400: '#21262E'
        },
        white:{
          100: '#FFFFFF'
        }
      },
      fontFamily: {
        PoppinsExtraLight: ['Poppins-ExtraLight', 'sans-serif'],
        PoppinsLight: ['Poppins-Light', 'sans-serif'],
        Poppins: ['Poppins-Regular', 'sans-serif'],
        PoppinsMedium: ['Poppins-Medium', 'sans-serif'],
        PoppinsSemiBold: ['Poppins-SemiBold', 'sans-serif'],
        PoppinsBold: ['Poppins-Bold', 'sans-serif'],
        PoppinsExtraBold: ['Poppins-ExtraBold', 'sans-serif'],
        PoppinsBlack: ['Poppins-Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

