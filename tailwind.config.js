/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    screens: {
      'xs': '320px',     // Custom extra-small breakpoint
      'sm': '1442px',     // Custom small breakpoint
      'md': '768px',     // Custom medium breakpoint
      'lg': '1024px',    // Custom large breakpoint
      'xl': '1280px',    // Custom extra-large breakpoint
      '2xl': '1536px',   // Custom 2x-large breakpoint
      // You can add more custom breakpoints as needed
    },
  },
  plugins: [],
};
