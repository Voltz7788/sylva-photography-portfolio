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
      },
      gridTemplateColumns: {
        philosphy: "minmax(0, 2fr) minmax(0, 3fr) minmax(0, 2fr)",
      },
      gridTemplateRows: {
        philosophy: "minmax(0, 45%) minmax(0, 45%)",
      },
    },
  },
  plugins: [],
};
export default config;
