module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-criancas': "url('../public/fundoCriancas.jpeg')",
        'fundo-herois': "url('../public/background-2.jpeg')",
      }
    },
  },
  plugins: [],
}
