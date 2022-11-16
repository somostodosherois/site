import React from 'react';

import Footer from '../../components/Footer'
import Missions from '../../components/Missions'
import Header from '../../components/Header'

export default function Missoes({ heros }) {
  return (
    <div>
      <Header metaTitle='STH - Missões' metaDescription='teste' />

      {heros &&
        <div className='pt-16'>
          <Missions heros={heros} />
        </div>
      }
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