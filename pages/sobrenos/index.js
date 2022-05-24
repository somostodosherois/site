import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Missions from '../../components/Missions'
import Menu from '../../components/Menu';
import ShapeDivider from '../../components/ShapeDivider';
import Banner from '../../components/Banner/Banner';
import TextBlock from '../../components/TextBlock/TextBlock';
import CardsIconsText from '../../components/CardsIconsText/CardsIconsText';

export default function Missoes() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <TextBlock title={'A Somos Todos Heróis'} description={'A Somos Todos Heróis é uma ONG jovem e digital que transforma a vida de crianças que necessitam de tratamentos médicos ao redor do país. Unimos pessoas como você, que estão dispostas a fazer a diferença na vida de alguém, incentivando a prática solidária por meio de doações diretas e resgatando o heroísmo que reside em cada um de nós. Trazemos ao processo toda a temática dos super-heróis, que remete a muitas memórias de infância e, ao mesmo tempo, transforma o feito de ajudar numa ação leve, divertida e impactante.'} />

      <CardsIconsText />
      
      <Footer />
    </div>
  )
}