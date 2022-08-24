import Menu from '../../components/Menu';
import Head from 'next/head'
import Footer from '../../components/Footer'

const Voluntarios = () => {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <div className="max-w-7xl mx-auto lg:items-center">
        <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 md:mr-0 text-lg md:text-xl text-gray-800">
          <div className="max-w-2xl mx-auto pt-16 lg:py-24 lg:pb-2 md:max-w-none">
            <h1 className="text-2xl mt-8 md:text-3xl text-gray-700">
              Voluntários
            </h1>
            <span className="w-32 my-4 h-2 bg-red-600 border rounded-xl block"></span>
            <div className="max-w-2xl mx-auto py-8 lg:pb-2 md:max-w-none">

              <p>Os voluntários são fundamentais à Somos Todos Heróis, pois colaboram diretamente com a realização das <strong>missões</strong>. Através do voluntariado, você será capaz de contribuir com seu <strong>tempo</strong> e <strong>talento</strong>, proporcionando momentos <strong>inesquecíveis</strong> para as crianças que convivem com doenças que colocam suas vidas em risco. Sua participação, além de levar <strong>esperança, força</strong> e <strong>alegria</strong> para as crianças, também irá lhe proporcionar uma <strong>experiência comovente</strong> e <strong>compensadora</strong>. Para que as missões sejam completas com êxito, é imprescindível que os voluntários sigam os valores da organização, que são <strong>espírito heroico, execução, protagonismo, integridade</strong> e  <strong>transparência</strong>.</p>
              <br />
              <p className="text-[22px] text-red-500">Função dos voluntários:</p>
              <br />
              <p>
                Os voluntários, integrados e envolvidos com a história de uma de nossas crianças, são responsáveis pela organização, planejamento e execução de um plano de captação de recursos - essencial para a conclusão da missão - participando desta até a entrega do que a criança precisa. <strong>O voluntariado representa o propósito da Somos Todos Heróis</strong>, pois através dele somos capazes de mudar a vida de crianças em todo Brasil. Essa atividade demanda  <strong>proatividade, comprometimento, trabalho em equipe</strong> e <strong>seriedade na realização das tarefas</strong>. Sendo assim, o voluntário, além de transformar a vida de uma criança, desenvolve novas capacidades, como <strong>liderança, protagonismo e comunicação</strong>.

              </p>
              <br />
              <p>Atualmente, nos encontramos divididos nas seguintes áreas:</p>
              <br />

              <ul className="list-disc list-inside">
                <li>
                  <strong>Missões:</strong> os voluntários são responsáveis pela captação de recursos que finalizam a missão de nossos pequenos.
                </li>
                <li>
                  <strong>Captação:</strong> os voluntários são responsáveis por encontrar crianças que precisam de nossa ajuda.
                </li>
                <br />
                <p>O voluntariado tem duração de aproximadamente <strong>dois meses</strong> e conta com reuniões semanais via: <strong>Google Meet</strong>. Além disso, necessita do <strong>comprometimento diário</strong> dos voluntários acerca das tarefas.</p>
                <br />
                <p className="text-[22px] text-red-500">Seja um Super Voluntário. Inscreva-se!</p>

                <br />

                <div className="block max-w-2xl mx-auto mb-16">
                  <form className="p-2">
                    <label htmlFor="nome-voluntario" className="block text-[16px]">
                      <strong>*Nome Completo</strong>
                    </label>
                    <input type="text" name="nome-voluntario" className="w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" />
                    <label htmlFor="email-voluntario" className="block text-[16px]">
                      <strong>Email</strong>
                    </label>
                    <input type="text" name="email-voluntario" className="w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" placeholder="email@example.com"/>
                    <label htmlFor="whatsapp-voluntario" className="block text-[16px]">
                      <strong>*Whatsapp</strong>
                    </label>
                    <input type="text" name="whatsapp-voluntario" className="w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" />
                    <label htmlFor="data-nacimento-voluntario" className="block text-[16px]">
                      <strong>*Data de nascimento</strong>
                    </label>
                    <input type="date" name="data-nacimento-voluntario" className=" w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" />
                    <label htmlFor="formacao-voluntario" className="block text-[16px]">
                      <strong>*Você está cursando ensino superior? Se sim, qual curso?</strong>
                    </label>
                    <input type="text" name="formacao-voluntario" className="w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" />
                    <label htmlFor="descricao-voluntario" className="block text-[16px]">
                      <strong>*Faça uma descrição breve sobre você.</strong>
                    </label>
                    <textarea name="descricao-voluntario" className="w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none">

                    </textarea>

                    <label htmlFor="objetivo-voluntario" className="block text-[16px]">
                      <strong>*Qual seu objetivo fazendo parte do voluntariado da Somos Todos Heróis?</strong>
                    </label>
                    <textarea name="objetivo-voluntario" className="w-full appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none">

                    </textarea>
                    <label htmlFor="info-voluntario-sth" className="block text-[16px]">
                      <strong>*Você já fez parte do voluntariado da STH?</strong>
                    </label>

                    <select name="info-voluntario-sth" className="dropdown-toggle w-full py-3 px-3 font-medium text-xs leading-tight uppercase rounded border bg-white flex items-center whitespace-nowrap">
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>

                    <div className="mb-4 mt-8">
                      <label className="block">
                        *Horários disponíveis para reunião
                      </label>
                      <span>
                        <p className="text-gray-500"><small>Selecione uma ou mais opções.</small></p>
                      </span>
                    </div>

                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Manhã (9h as 12h) </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Tarde (12h as 18h) </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Noite (18h as 21h) </ label>
                    </div>

                    <div className="mb-4 mt-8">
                      <label className="block">
                        *Dias da semana disponíveis para reunião
                      </label>
                      <span>
                        <p className="text-gray-500"><small>Selecione uma ou mais opções.</small></p>
                      </span>
                    </div>

                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Segunda-feira </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Terça-feira </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Quarta-feira </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Quinta-feira </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Sexta-feira </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Sábado </ label>
                    </div>

                    <label className="block mb-4 mt-6">
                      Por onde você conheceu a STH?
                    </label>

                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Facebook </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Instagram </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Twitter </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Linkedin </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Site </ label>
                    </div>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> Tiktok </ label>
                    </div>

                    <label className="block mb-2 mt-6">
                      Confirmação de interesse
                    </label>
                    <div className="text-[15px]">
                      <input type="checkbox" />
                      <label> <strong>Estou ciente acerca das responsabilidades do voluntariado e tenho disponibilidade para atuar.</strong></ label>
                    </div>

                    <br />

                    <button className="bg-red-500 text-white rounded py-2 px-6">
                      Enviar
                    </button>
                  </form>
                </div>


              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Voluntarios