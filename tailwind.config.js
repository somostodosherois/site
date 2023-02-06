module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cartagena: ['Cartagena']
      },
      backgroundImage: {
        'fundo-criancas': "url('../public/hero-relatorio.png')",
        'fundo-herois': "url('../public/background-2.jpeg')",
      }
    },
  },
  plugins: [],
}
