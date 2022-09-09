const Registrant = () => {

  return (

    <div className="mx-auto max-w-sm md:max-w-lg px-4">
      <p className="text-gray-500 text-center text-base">Preencha os campos abaixo com as suas informações</p>

      <br />

      <form>

        <label htmlFor="nome_cadastrante">
          <strong>*Seu Nome</strong>
        </label>
        <input type="text" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />

        <label htmlFor="email_cadastrante" >
          <strong>Seu Email</strong>
        </label>
        <input type="text" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" placeholder="email@example.com" />

        <label htmlFor="celular_cadastrante" >
          <strong>*Seu Celular</strong>
        </label>
        <input type="text" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" placeholder="(11) 96123-4567" />

      </form>

    </div>
  )
}

export default Registrant