import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#04C23A",
      blue: "#1B1C57",
      lightblue: "#1D4ED8",
      lightgreen: "#EAF4EE",
      darkgreen: "#05B44B",
      form_gray: "rgba(196, 196, 196, 0.2)",
      white: "#ffffff",
    },
    extend: {
      borderRadius: {
        basic: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
