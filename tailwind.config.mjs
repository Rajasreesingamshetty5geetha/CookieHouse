import { Playwrite_IN, Roboto } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#fffcfc',
        secondary:'#443836',
        light: '#f3f4f6'
      },
      fontFamily:{
        Playwrite_IN: ['var(--font-cursive)'],
      }
    },
  },
  plugins: [],
};
