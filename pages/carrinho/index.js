import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';

export default function Missoes() {
  const idHero = 3239

  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      
      {/* <Footer /> */}
    </div>
  )
}