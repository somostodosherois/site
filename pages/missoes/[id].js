import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import ShapeDivider from '../../components/ShapeDivider';
import CardHero from '../../components/CardHero/CardHero';

export default function Missoes() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <CardHero />
      <Footer />
    </div>
  )
}