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
    text: `<div className="link mbottom"><p style="line-height: 35px; text-align: center;">Olá! Me chamo&nbsp;Gabriel, mas pode me chamar de&nbsp;<strong>Gabriel Hulk!&nbsp;</strong>Eu nasci&nbsp;com&nbsp;<a id="fprsl" className="gL9Hy" href="https://www.einstein.br/especialidades/medicina-fetal/material-de-apoio-ao-paciente/mielomeningocele-cartilha-orientacao-apos-alta#:~:text=A%20mielomeningocele%20%C3%A9%20um%20defeito,ainda%20n%C3%A3o%20%C3%A9%20bem%20definida." data-ved="2ahUKEwiQ_r63o7HzAhVaq5UCHR5XD3cQkeECKAB6BAgBEDY">Mielomeningocele</a></p>
    <p style="line-height: 35px; text-align: center;">e&nbsp;<a href="https://www.medtronic.com/br-pt/your-health/conditions/hydrocephalus/o-que-e-hidrocefalia.html#:~:text=A%20Hidrocefalia%20%C3%A9%20derivada%20de,%2C%20referindo%2Dse%20%C3%A0%20cabe%C3%A7a.&amp;text=A%20hidrocefalia%20implica%20uma%20quantidade,do%20c%C3%A9rebro%2C%20conhecidas%20como%20ventr%C3%ADculos.">Hidrocefalia</a>&nbsp;e&nbsp;já passei por 5 cirurgias nos&nbsp;meus 5 anos de vida. Hoje, Recentemente passei por uma avaliação na clínica intensiva para um tratamento que auxiliará seu&nbsp;desenvolvimento motor e um possível desfralde.&nbsp;Moro&nbsp;na cidade de&nbsp;Mogi Guaçu, no estado de São Paulo e esse tratamento com &nbsp;<a href="https://www.neurologiaintegrada.com.br/estimulacao-magnetica-transcraniana-tms/">TMS (Estimulação Magnética Transcraniana)</a>&nbsp;custa R$900,00 cada sessão.</p>
    <p style="text-align: center;"><b>Por isso, eu gostaria de ganhar 9 sessões de&nbsp;TMS.</b></p>
    <p style="text-align: right;">Com carinho,&nbsp;Gabriel Hulk.</p></div>`
  }

  // const diffDates = () => {

  // }

  // const convertTotHtml = () => {

  // }

  return (
    <div className='max-w-7xl mx-auto px-4 pt-12 sm:px-6 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-6 pt-20 lg:flex'>
      <div className='p-6 w-2xl bg-gray-100 mt-4 md:mt-12'>
        <center>
          <img src={hero.image}></img>
          <h1 className='mt-4 text-2xl leading-8 font-extrabold text-center tracking-tight text-red-600 sm:text-2xl uppercase'>{hero.name}</h1>

          <h3 className='m-2 text-xl leading-6 font-medium text-gray-800'>Meta: {hero.meta}</h3>

          <div className='flex mt-4 justify-content'>
            <BsCurrencyDollar className="h-5 w-5 mt-1 text-green-600 mr-2" aria-hidden="true" />
            <p className="max-w-6xl text-xl text-gray-600">{hero.value} arrecadados</p>
          </div>

          <div className='flex mt-4 justify-content'>
            <BsCalendarDate className="h-5 w-5 mt-1 text-blue-400 mr-2" aria-hidden="true" />
            <p className="max-w-6xl text-xl text-gray-600">5 dias restantes</p>
          </div>
        </center>

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-6">
          <div className="bg-green-500 text-sm font-medium text-white text-center p-2 leading-none rounded-full" style={{ width: hero.percentage + '%' }}> {hero.percentage}% da meta atingida</div>
        </div>

      </div>
      <div className='col-span-2'>
        <p>Olá! Me chamo Gabriel, mas pode me chamar de Gabriel Hulk!</p>
        <p className='mt-4'>Eu nasci com Mielomeningocele e Hidrocefalia e já passei por 5 cirurgias nos meus 5 anos de vida. Hoje, Recentemente passei por uma avaliação na clínica intensiva para um tratamento que auxiliará seu desenvolvimento motor e um possível desfralde. Moro na cidade de Mogi Guaçu, no estado de São Paulo e esse tratamento com  TMS (Estimulação Magnética Transcraniana) custa R$900,00 cada sessão.</p>
        <p className='font-bold m-6'>Por isso, eu gostaria de ganhar 9 sessões de TMS.</p>
        <center><img src='https://sth.org.br/images/2021/10/IMG_20210725_194253003_HDR-e1633368207861.jpg' /></center>
        <p className='text-right mt-4'>Com carinho, Gabriel Hulk.</p>
      </div>
    </div>
  )
}

export default CardHero