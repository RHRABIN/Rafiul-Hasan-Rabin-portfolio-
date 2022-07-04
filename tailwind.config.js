module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    theme: [
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#FDE68A",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF&E07",
          error: "#FA5C5C"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}