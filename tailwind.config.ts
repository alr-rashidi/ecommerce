import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#eeeeee",
        destructive: "#dd0000",
        success: "#00dd00",
        warning: "#dddd00",
      },
    },
  },
  plugins: [],
} satisfies Config;
