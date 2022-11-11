/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('bg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctortheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
}
