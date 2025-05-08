module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004990",     // Azul Irani
        secondary: "#F0F0F0",   // Cinza claro
        accent: "#F9B233",      // Laranja institucional
        success: "#2E7D32",
        warning: "#F57C00",
        danger: "#D32F2F",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    },
  },
  plugins: [],
}
