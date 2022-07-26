import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Missions from '../../components/Missions'
import ShapeDivider from '../../components/ShapeDivider';
import MenuVertical from '../../components/MenuVertical/MenuVertical';

export default function PortalTransparencia() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <MenuVertical />
      {/* <ShapeDivider graus={180} /> */}
      <Footer />
    </div>
  )
}