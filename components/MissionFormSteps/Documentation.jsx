const Documentation = () => {
  return (
    <div className="mx-auto max-w-sm md:max-w-lg px-4">

      <form>

        <div className="flex flex-col">
          <label htmlFor="relatorio" className="text-gray-800"><strong>Anexo do Relatório/Laudo Médico (ATUALIZADO)</strong></label>
          <p className="text-gray-500 text-sm">Emitido no máximo 6 meses atrás.</p>

          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="relatorio" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="relatorio" name="relatorio" className="hidden"></input>
          </u>
        </div>

        <br />

        <div className="flex flex-col">
          <label htmlFor="solicitacao" className="text-gray-800"><strong>Anexo da Solicitação do equipamento e/ou tratamento feita pelo profissional da saúde. (ATUALIZADO)</strong></label>
          <p className="text-gray-500 text-sm">Emitido no máximo 6 meses atrás.</p>

          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="solicitacao" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="solicitacao" name="solicitacao" className="hidden"></input>
          </u>

        </div>

        <br />

        <div className="flex flex-col">

          <label htmlFor="certidao_nascimento" className="text-gray-800"><strong>Certidão de Nascimento</strong></label>
          <p className="text-gray-500 text-sm">Em caso de guarda ou adoção, anexar registro.</p>

          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="certidao_nascimento" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="certidao_nascimento" name="certidao_nascimento" className="hidden"></input>
          </u>

        </div>

        <br />

        <div className="flex flex-col">

          <label htmlFor="rg_ou_cpf" className="text-gray-800"><strong> Cópia do RG ou CPF</strong></label>
          
          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="rg_ou_cpf" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="rg_ou_cpf" name="rg_ou_cpf" className="hidden"></input>
          </u>
        </div>

        <br/>

        <div className="flex flex-col">
          <label htmlFor="fotos_crianca" className="text-gray-800"><strong>3 Fotos da criança *essas fotos serão divulgadas no nosso site</strong></label>
          
          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="fotos_crianca" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="fotos_crianca" name="fotos_crianca" className="hidden"></input>
          </u>
        </div>

        <br/>

        <div className="flex flex-col">
          <label htmlFor="orcamento_procedimento" className="text-gray-800"><strong>Orçamento do procedimento, serviço ou produto pedido para a criança.</strong></label>
          
          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="orcamento_procedimento" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="orcamento_procedimento" name="orcamento_procedimento" className="hidden"></input>
          </u>
        </div>

        <br/>

        <div className="flex flex-col">
          <label htmlFor="copia_rg_ou_cpf_responsavel" className="text-gray-800"><strong>Cópia do RG ou CPF do responsável</strong></label>
          
          <u className="hover:text-blue-800 text-gray-600">
            <label htmlFor="copia_rg_ou_cpf_responsavel" className="cursor-pointer">Solte arquivos para anexar, ou Busque</label>
            <input type="file" id="copia_rg_ou_cpf_responsavel" name="copia_rg_ou_cpf_responsavel" className="hidden"></input>
          </u>
        </div>

        <br/>

        <p className="text-gray-800"><strong>*Atestado de Compromisso e Veracidade</strong></p>
        <input type="radio" name="atestado_conpromisso_veracidade"/>
        &nbsp;
        <label htmlFor="atestado_conpromisso_veracidade" className="text-gray-500 text-sm">Declaro, para os devidos fins, que as informações contidas neste presente formulário são verdadeiras e assumo o compromisso de apresentar, quando solicitado, os comprovantes originais, bem como as penalidades por quaisquer informações falsas.</label>
      </form>
    </div>
  )
}

export default Documentation