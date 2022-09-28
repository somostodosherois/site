import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import CardHero from '../../components/CardHero/CardHero';
import DonationBlock from '../../components/DonationBlock/DonationBlock';
import TimelineMission from '../../components/TimelineMission/TimelineMission';
import { useRouter } from 'next/router';

import api from '../api/config'


export default function Missao({ hero }) {

  console.log(hero)
  // const [hero, setHero] = useState({})
  // const router = useRouter()
  // const { id } = router.query

  // useEffect(() => {
  //   if (id && !hero.id) {
  //     api.get(`missions.php?slug=${id}`)
  //       .then((response) => {
  //         console.log(response)
  //         response.map(({ id, name, metadesc, post_title, post_content, meta, prazo, post_date }) => (
  //           setHero({
  //             id: id,
  //             name: name,
  //             image: 'https://sth.org.br/images/2021/11/Design-sem-nome-8.png',
  //             content: post_content,
  //             meta: metadesc,
  //             value: meta,
  //             percentage: '67',
  //             dateFinal: post_date,
  //           })
  //         ))
  //       })
  //       .catch((err) => {
  //         return console.error("ops! ocorreu um erro : " + err);
  //       })
  //   }
  // }, id)

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
          <DonationBlock hero={hero} />
        </>
      }
      <TimelineMission />
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  // const heros = await fetch('https://sth.org.br/missions.php').then(res => res.json());
  // const paths = heros.map(hero => {
  //   const heroId = hero.slug;
  //   return {
  //     params: {
  //       heroId
  //     }
  //   }
  // })

  // console.log(paths)

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