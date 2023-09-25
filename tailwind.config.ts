import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgDrawer: "url('/images/DSC00149.jpg')",
        bgTopMenu: "url('/images/DSC07961.jpg')",
        bgFasting: "url('/images/DSC09718.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
