/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // "dark",
      //"lemonade",
      // "pastel",
      // "dracula",
      {
        mytheme1: {
          primary: "#f43f5e",
          secondary: "#fb7185",
          accent: "#06b6d4",
          neutral: "#2a323c",
          "base-100": "#ffe4e6",
          info: "#0e7490",
          success: "#047857",
          warning: "#fbbd23",
          error: "#b91c1c",
        },
      //   mytheme2: {
      //     primary: "#50b9c9",
      //     secondary: "#e59eed",
      //     accent: "#d6a0e5",
      //     neutral: "#2b2230",
      //     "base-100": "#f2eff6",
      //     info: "#a2daf6",
      //     success: "#1cd48a",
      //     warning: "#ca880c",
      //     error: "#e1567d",
      //   },
      },
    ],
    logs: false,
  },
};
