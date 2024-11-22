import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#000319",
          200: "#000000",
        },
        yellow: {
          100: "#FFD700",
        },
        orange: {
          100: "#FFA500",
        },
        red: {
          100: "#FF0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
