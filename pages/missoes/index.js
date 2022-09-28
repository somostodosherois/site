import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Missions from '../../components/Missions'
import Menu from '../../components/Menu';

export default function Missoes({ heros }) {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <div className='pt-16'>
        <Missions heros={heros}/>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch necessary data for the blog post using params.id
  const results = await fetch(`https://sth.org.br/missions.php`).then(res => res.json());
  return {
    props: {
      heros: results
    }
  }
}