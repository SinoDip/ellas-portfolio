/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightDark: "#313131",
        primary: "#C12026",
        white: "#FFFFFF",
        lightGray: "#D1D5DB",
        gray: "#808080",
        deepGray: "#0A0A0F",
        dark: "#101017",
        deepDark: "#050507",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
