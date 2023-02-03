module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1.2rem;`
    },
    extend: {
      colors: {
        primary: {
          500: '#FF6363;',
          800: '#FF1313;',
        }
      },
      fontFamily: {
        sans: ['sans-serif'],
        cartagena: ['Cartagena']
      },
      backgroundImage: {
        'fundo-criancas': "url('../public/hero-relatorio.png')",
        'fundo-herois': "url('../public/background-2.jpeg')",
      }
    },
  }
}
