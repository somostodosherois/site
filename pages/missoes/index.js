import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Missions from '../../components/Missions'
import Menu from '../../components/Menu';
import ShapeDivider from '../../components/ShapeDivider';
import Banner from '../../components/Banner/Banner';

export default function Missoes() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <Banner graus={90} />
      {/* <ShapeDivider graus={180} /> */}
      <Missions />
      <Footer />
    </div>
  )
}