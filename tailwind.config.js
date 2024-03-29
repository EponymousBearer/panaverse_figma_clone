/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }

      'tab': '768px',
      // => @media (min-width: 768px) { ... }

      'phone': '320px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1366px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        primary: "#00616C"
      },
      backgroundImage: {
        heropattern: "url('@/app/assets/images/background-ellipse-left.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      scale: {
        '175': '1.75',
        '225': '2.25',
        }
    },
  },
  plugins: [],
}

