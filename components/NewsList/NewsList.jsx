const callouts = [
  {
    imageSrc: 'https://s2.glbimg.com/-c3lE0bZ2LcRPVCs6zbGkOZWJ5k=/0x0:1576x893/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/B/R/Yu3h05Qfmsm9kwABAojw/captura-de-tela-inteira-21032017-112214.jpg',
    imageAlt: 'G1',
    url: 'https://g1.globo.com/sp/sao-carlos-regiao/noticia/plataforma-de-financiamento-permite-dar-poderes-para-criancas-que-precisam-de-tratamento-medico.ghtml',
    title: 'Plataforma de financiamento permite dar poderes para crianças que precisam de tratamento médico',
    description: 'Escudos, capas e anéis mágicos estão entre os itens que podem ser adquiridos. Para criador, site é uma forma de engajar os mais jovens.',
    author: 'Por Raquel Baes, do G1 São Carlos e Araraquara',
    date: '23/03/2017 07h32'
  },
  {
    imageSrc: 'https://i0.wp.com/jornal.usp.br/wp-content/uploads/20170427_00_herois.jpg?w=800&ssl=1',
    imageAlt: 'USP',
    url: 'https://jornal.usp.br/universidade/acoes-para-comunidade/com-tema-de-super-herois-site-ajuda-criancas-com-gastos-de-saude/',
    title: 'Com tema de super-heróis, site ajuda crianças com gastos de saúde',
    description: 'Criado por estudantes da USP, “Somos Todos Heróis” faz do financiamento coletivo um projeto social',
    author: 'Por Raphael Concli',
    date: '04/05/2017'
  },
  {
    imageSrc: 'https://4.bp.blogspot.com/-fFwkwSitCmo/WRIM_W4nvwI/AAAAAAAAIFE/GtY5E71P4eUXR7aRRDhuaV57BRuTgftUgCLcB/s640/somos_todos_herois.png',
    imageAlt: 'USP',
    url: 'https://icmc.usp.br/noticias/2984-site-criado-por-estudantes-da-usp-arrecada-doacoes-para-criancas-em-tratamento',
    title: 'Site criado por estudantes da USP arrecada doações para crianças em tratamento',
    description: 'Plataforma “Somos Todos Heróis” faz do financiamento coletivo um projeto social',
    author: 'Texto: Jornal da USP – editado e atualizado pela Assessoria de Comunicação do ICMC/USP',
    date: '09/05/2017'
  },
]

const NewsList = () => (
  <div className="bg-gray-100 pb-8 px-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-16 lg:max-w-none">
        <h2 className="text-4xl text-gray-700">Últimas notícias</h2>
        <span className="w-32 my-4 h-2 bg-red-500 border rounded-xl block"></span>
      </div>

      <div className="space-y-4 pb-16 gap-y-16">
        {callouts.map((callout) => (
          <a href={callout.url} target='_blank' className="flex bg-white justify-content align-center border border-transparent rounded-xl lg:grid lg:grid-cols-2 hover:border hover:border-red-500 border:shadow">
            <div className="text-center p-8">
              <img
                src={callout.imageSrc}
                alt={callout.imageAlt}
              />
            </div>
            <div className="block p-8">
              <h3 className="text-2xl text-extrabold text-gray-700 pb-8">{callout.title}</h3>
              <p className="text-lg text-gray-700 pb-8">{callout.description}</p>
              <p className="text-sm text-gray-700">{callout.author}</p>
              <p className="text-sm text-gray-700">{callout.date}</p>
              <p className="text-xs text-blue-600 mt-6">{callout.url}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 items-center justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className=" px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default NewsList