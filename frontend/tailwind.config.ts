import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a3055",
          light: "#234878",
          dark: "#122240",
        },
        gold: {
          DEFAULT: "#c9982a",
          light: "#d4a843",
          dark: "#a67c1e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
