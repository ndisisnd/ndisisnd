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
        "o-900": "#FF7C0F",
        "o-800": "#FF8724",
        "o-700": "#FF943B",
        "o-600": "#FFA254",
        "o-500": "#FFAE6B",
        "o-400": "#FFBE87",
        "o-300": "#FFCDA3",
        "o-200": "#FFD9BA",
        "o-100": "#FFEAD9",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
