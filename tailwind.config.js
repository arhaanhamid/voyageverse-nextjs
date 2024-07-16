const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow":
          "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;",
        "navbar-shadow": "rgba(0, 0, 0, 0.95) 0px 10px 10px -10px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
