const Accountable = () => {
  return (
    <div className="mx-auto max-w-sm md:max-w-lg px-4">
      <p className="text-gray-500 text-center">Preencha os dados abaixo sobre o RESPONSÁVEL LEGAL da criança</p>
      <br />

      <form>
        <label htmlFor="nome_responsavel">
          <strong>*Nome Completo</strong>
        </label>
        <input type="text" name="nome_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="telefone_responsavel">
          <strong>Telefone</strong>
        </label>
        <input type="text" name="telefone_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="email_responsavel">
          <strong>E-mail</strong>
        </label>
        <input type="text" name="email_responsavel" placeholder="email@example.com" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="data_nascimento_responsavel">
          <strong>*Data de nascimento</strong>
        </label>
        <p className="text-gray-500 text-sm">Exemplo: 05/07/1996</p>
        <input type="text" name="data_nascimento_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="grau_parentesco">
          <strong>*Grau de Parentesco com a Criança</strong>
        </label>
        <input type="text" name="grau_parentesco" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="estado_civil_responsavel">
          <strong>*Estado Civil</strong>
        </label>
        <input name="estado_civil_responsavel" type="text" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="cpf_responsavel">
          <strong>*CPF</strong>
        </label>
        <input type="text" name="cpf_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="rg_responsavel">
          <strong>*RG</strong>
        </label>
        <input type="text" name="rg_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="escolaridade_responsavel">
          <strong>*Escolaridade</strong>
        </label>
        <input type="text" name="escolaridade_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="profissao_responsavel">
          <strong>*Profissão</strong>
        </label>
        <input type="text" name="profissao_responsavel" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="renda_familiar">
          <strong>*Renda familiar</strong>
        </label>
        <input type="text" name="renda_familiar" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />
        
        <label htmlFor="rede_social">
          <strong>Rede social</strong>
        </label>
        <p className="text-gray-500 text-sm">@Instagram/@Twitter/@Facebook</p>
        <input type="text" name="rede_social" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
     
      </form>

    </div>
  )
}

export default Accountable