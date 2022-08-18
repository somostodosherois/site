import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import CallToAction from '../../components/CallToAction';
import CardHero from '../../components/CardHero/CardHero';
import DonationBlock from '../../components/DonationBlock/DonationBlock';
import TimelineMission from '../../components/TimelineMission/TimelineMission';

export default function Missoes() {
  const hero = {
    id: 3239,
    image: 'https://sth.org.br/images/2021/11/Design-sem-nome-8.png',
    name: 'Gabriel Hulk'
  }
  
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <CardHero />
      <DonationBlock hero={hero} />
      {/* <CallToAction title='Você topa fazer diferença?' subtitle='Juntos SOMOS TODOS HERÓIS, porque doar é um ato heróico' /> */}
      <TimelineMission />
      <Footer />
    </div>
  )
}