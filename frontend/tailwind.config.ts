import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#080c18",
          surface: "#0f1628",
          card: "#151e35",
          border: "#1e2d4a",
        },
        gold: {
          DEFAULT: "#c9982a",
          light: "#d4a843",
          dark: "#a67c1e",
        },
        teal: {
          DEFAULT: "#0eb8a8",
          light: "#12d4c2",
          dark: "#0a8f82",
        },
        muted: "#8892aa",
      },
    },
  },
  plugins: [],
};

export default config;
