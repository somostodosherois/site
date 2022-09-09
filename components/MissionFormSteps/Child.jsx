const Child = () => {
  return (
    <div className="mx-auto max-w-sm md:max-w-lg px-4">
      <p className="text-gray-500 text-center text-base">Preencha os dados abaixo para quem será pedido o auxílio desta missão</p>
      
      <form className="mt-8">
        <label htmlFor="info_como_conheceu">
          <strong>*Como conheceu a Somos Todos Heróis? </strong>
        </label>
        <input type="text" name="info_como_conheceu" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />

        <label htmlFor="nome_crianca">
          <strong>*Nome Completo</strong>
        </label>
        <input type="text" name="nome_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />

        <label htmlFor="data_nascimento_crianca">
          <strong>*Data de nascimento</strong>
        </label>
        <p className="text-gray-500 text-sm">Exemplo: 05/07/2000</p>
        <input type="text" name="data_nascimento_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="endereco_crianca">
          <strong>*Endereço</strong>
        </label>
        <input type="text" name="endereco_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="cidade_crianca">
          <strong>*Cidade em que reside</strong>
        </label>
        <input type="text" name="cidade_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="estado_crianca">
          <strong>*Estado</strong>
        </label>
        <input type="text" name="estado_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="rg_crianca">
          <strong>RG</strong>
        </label>
        <input type="text" name="rg_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="cpf_crianca">
          <strong>CPF</strong>
        </label>
        <input type="text" name="cpf_crianca" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />
        
        <label htmlFor="plano_de_saude">
          <strong>Possui plano de saúde? Se sim, qual?</strong>
        </label>
        <input type="text" name="plano_de_saude" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" />

        <p className="uppercase font-bold mt-4">Importante</p>
        <p className="text-gray-500">Detalhe bem o que a criança necessita e qual o valor que ela precisa para o tratamento ou equipamento solicitado. LEMBRE-SE: Não depositamos o dinheiro na conta dos pais, nós pagamos diretamente o hospital ou instituição responsável. Dessa forma, conseguimos garantir a confiança e transparência com nossos doadores.</p>

        <br />

        <label htmlFor="historico_crianca">
          <strong>*Breve histórico sobre a criança</strong>
        </label>
          <p className="text-gray-500 text-sm">Conte-nos a história da criança, o que ela está passando e qual tipo de auxílio ela precisa?</p>
        <textarea name="historico_crianca" className="mt-3 appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required></textarea>

        <label htmlFor="valor_solicitado">
          <strong>Valor a ser solicitado (R$)</strong>
        </label>
        <p className="text-gray-500 text-sm">Teto Máximo da Missão: R$5.000,00</p>
        <input type="text" name="valor_solicitado" className="appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required />

        <label htmlFor="info_valor_solicitado">
          <strong>O que a criança precisa e como será utilizado o dinheiro?</strong>
        </label>
        <textarea name="info_valor_solicitado" className="mt-3 appearance-none border border-gray-400 rounded w-full py-1 px-3 my-2" required></textarea>

      </form>
    </div>
  )
}

export default Child