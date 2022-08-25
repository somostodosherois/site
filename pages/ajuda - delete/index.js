import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
// import Accordion from '../../components/Accordion';
// import CallToAction from '../../components/CallToAction';
import FormContact from '../../components/FormContact/FormContact';

export default function Ajuda() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <FormContact />
      {/* <Accordion /> */}
      {/* <CallToAction /> */}
      <Footer />
    </div>
  )
}