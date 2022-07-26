import React from 'react'
import { BsCurrencyDollar, BsCalendarDate } from "react-icons/bs";

const CardHero = () => {
  const hero = {
    name: 'Gabriel Hulk',
    meta: 'Sessões de Estimulação Magnética Transcraniana',
    value: '3.311,00',
    percentage: '67',
    dateFinal: '29/07/2022',
    image: 'https://sth.org.br/images/2021/11/Design-sem-nome-8.png',
    text: `<div class="link mbottom"><p style="line-height: 35px; text-align: center;">Olá! Me chamo&nbsp;Gabriel, mas pode me chamar de&nbsp;<strong>Gabriel Hulk!&nbsp;</strong>Eu nasci&nbsp;com&nbsp;<a id="fprsl" class="gL9Hy" href="https://www.einstein.br/especialidades/medicina-fetal/material-de-apoio-ao-paciente/mielomeningocele-cartilha-orientacao-apos-alta#:~:text=A%20mielomeningocele%20%C3%A9%20um%20defeito,ainda%20n%C3%A3o%20%C3%A9%20bem%20definida." data-ved="2ahUKEwiQ_r63o7HzAhVaq5UCHR5XD3cQkeECKAB6BAgBEDY">Mielomeningocele</a></p>
    <p style="line-height: 35px; text-align: center;">e&nbsp;<a href="https://www.medtronic.com/br-pt/your-health/conditions/hydrocephalus/o-que-e-hidrocefalia.html#:~:text=A%20Hidrocefalia%20%C3%A9%20derivada%20de,%2C%20referindo%2Dse%20%C3%A0%20cabe%C3%A7a.&amp;text=A%20hidrocefalia%20implica%20uma%20quantidade,do%20c%C3%A9rebro%2C%20conhecidas%20como%20ventr%C3%ADculos.">Hidrocefalia</a>&nbsp;e&nbsp;já passei por 5 cirurgias nos&nbsp;meus 5 anos de vida. Hoje, Recentemente passei por uma avaliação na clínica intensiva para um tratamento que auxiliará seu&nbsp;desenvolvimento motor e um possível desfralde.&nbsp;Moro&nbsp;na cidade de&nbsp;Mogi Guaçu, no estado de São Paulo e esse tratamento com &nbsp;<a href="https://www.neurologiaintegrada.com.br/estimulacao-magnetica-transcraniana-tms/">TMS (Estimulação Magnética Transcraniana)</a>&nbsp;custa R$900,00 cada sessão.</p>
    <p style="text-align: center;"><b>Por isso, eu gostaria de ganhar 9 sessões de&nbsp;TMS.</b></p>
    <p style="text-align: right;">Com carinho,&nbsp;Gabriel Hulk.</p></div>`
  }

  // const diffDates = () => {

  // }

  // const convertTotHtml = () => {

  // }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center'>
      <h1 className='mt-4 text-3xl leading-8 font-extrabold text-center tracking-tight text-red-600 sm:text-4xl uppercase'>{hero.name}</h1>
      <div className='flex mt-12'>
        <img src={hero.image}></img>
        <div className='p-6'>
          <h3 className='ml-2 text-3xl leading-6 font-medium text-gray-800'>Meta: {hero.meta}</h3>
          <div className='flex mt-4 justify-content'>
            <BsCurrencyDollar className="h-6 w-6 mt-1 text-green-600 mr-2" aria-hidden="true" />
            <p className="max-w-6xl text-2xl text-gray-600">{hero.value} arrecadados</p>
          </div>
          <div className='flex mt-4 justify-content'>
            <BsCalendarDate className="h-6 w-6 mt-1 text-blue-400 mr-2" aria-hidden="true" />
            <p className="max-w-6xl text-2xl text-gray-600">5 dias restantes</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 m-6">
        <div class="bg-green-500 text-xl font-medium text-white text-center p-2 leading-none rounded-full" style={{ width: hero.percentage+'%' }}> {hero.percentage}% da meta atingida</div>
      </div>
        </div>
      </div>
     
    </div>
  )
}

export default CardHero