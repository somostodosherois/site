import React from 'react';

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CardHero from '../../components/CardHero/CardHero';
import DonationBlock from '../../components/DonationBlock/DonationBlock';
import TimelineMission from '../../components/TimelineMission/TimelineMission';

export default function Missao({ hero }) {
  return (
    <div>
      <Header metaTitle={'STH - ' + hero.name} metaDescription='teste' />

      {hero &&
        <>
          <CardHero hero={hero} />
          <DonationBlock hero={hero} />
        </>
      }
      {/* <TimelineMission /> */}
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