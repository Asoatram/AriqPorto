import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Menambahkan warna kustom kita
      colors: {
        'bg-color': '#1A1B1D',
        'text-color': '#E0E0E0',
        'primary-color': '#C6F0C2',
        'secondary-text': '#A0A0A0',
      },
      // Menambahkan font family kustom kita
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        monocraft: ['Monocraft', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem', // 32px
      }
    },
  },
  plugins: [],
};
export default config;