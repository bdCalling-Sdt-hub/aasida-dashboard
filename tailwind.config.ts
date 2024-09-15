import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232323",
        secondary: "#3d3d3d",
        info: "#F8FAFC",
        success: "#34D399",
        warning: "#F16365",
      },
    },
  },
  plugins: [],
  important: true,

};
export default config;
