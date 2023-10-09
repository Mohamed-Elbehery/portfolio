import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "section-background": "#1C1C1C",
      },
      textColor: {
        "light-gold": "#FFCC66",
        "gold": "#FEB824",
        "wheat": "#F1E9DB",
        "grey": "#BDBDBD",
      }
    },
  },
  plugins: [],
};
export default config;
