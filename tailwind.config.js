/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fsfor: "#96EA63",
        blackme: "#0f172a",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "hero-img": "url('/assets/images/Glow.svg')",
      },
      backgroundPosition: {
        top: "top",
      },
      opacity: {
        50: "0.6",
      },
      fontFamily: {
        'rubik' : `"Rubik", sans-serif`,
      },
      height: {
        '100' : '450px',
        '90' : '350px',
      },
    },
  },
  plugins: [],
};
