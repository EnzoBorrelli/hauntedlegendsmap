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
        "halloween-gradient":
          "linear-gradient(135deg, #0d0b1a, #2d0b1a 40%, #531324 70%, #b84a0b)",
      },
      animation: {
        "slow-pulse": "slow-pulse 4s linear infinite",
        fadeOut: "fadeOut 0.5s ease-out forwards",
      },
      keyframes: {
        "slow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fadeOut: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5", scale: "2",color:"#2d0b1a" },
          "99%": { opacity: "0", scale: "2" },
          "100%": { opacity: "0", scale: "0.1" },
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        unifraktur: ["var(--font-unifraktur)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
