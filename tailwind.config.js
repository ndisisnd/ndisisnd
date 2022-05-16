module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "b-body": "#3D3D3D",
        "b-default": "#1D1D1D",
        "bg-0": "#FFFFFF",
        "bg-100": "#F7F5EF",
        "bg-200": "#EEEBE3",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
