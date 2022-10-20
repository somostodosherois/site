import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import CardHero from '../../components/CardHero/CardHero';
import TimelineMission from '../../components/TimelineMission/TimelineMission';

export default function Missao({ hero }) {

  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      {hero &&
        <>
          <CardHero hero={hero} />
        </>
      }
      <TimelineMission />
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const heroId = params.id
  const results = await fetch(`https://sth.org.br/missions.php?slug=${heroId}`).then(res => res.json());
  return {
    props: {
      hero: results[0]
    }
  }
}