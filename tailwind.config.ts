import type { Config } from "tailwindcss";
import { colors } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#444444",
        secondary: "#aaaaaa",
        destructive: "#aa0000",
        success: "#00aa00",
        warning: "#aaaa00",
      },
    },
  },
  plugins: [],
} satisfies Config;
