import React from 'react';

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ContainerMissions from '../../components/ContainerMissions'


export default function Missoes({ heros }) {
  const title = 'Missões em Andamento'

  const inProgress = (heros.length && heros.filter(obj => obj.status === 'open')) || []
  const isFinished = (heros.length && heros.filter(obj => obj.status === 'finish')) || []

  return (
    <div>
      <Header metaTitle='STH - Missões' metaDescription='teste' />

      {heros &&
        <div className='pt-16'>
          <ContainerMissions items={inProgress} title={title} />
          <ContainerMissions items={isFinished} title='Missões finalizadas' />
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