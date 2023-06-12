/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20), blink .7s infinite"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#10172a',
      'secondary': '#DEE2E7',
      'gray': '#a7a6aa',
      'grey': '#f8fafc',
      'grey1': '#E1E1E2',
      'grey2' : '#EFEFEF',

      'bgc': 'rgba(143, 146, 161, 0.05)',
      'white': '#FFFFFF',
      'green': '#22c55e',
      'red': '#f43f5e',
      'lightg': '#F1F8FA',
      'darkg': '#EDF1F8',
      'blue' : '#4284f3',
    },
    fontFamily: {
      'fontPrimary': ['"fontPrimary"', 'lexend']
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'lg': '20px',
      'xl': '28px',
      '2xl': '32px',
    },
  },
  plugins: [
  ]
}