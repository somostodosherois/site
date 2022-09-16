import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import CardHero from '../../components/CardHero/CardHero';
import DonationBlock from '../../components/DonationBlock/DonationBlock';
import TimelineMission from '../../components/TimelineMission/TimelineMission';
import { useRouter } from 'next/router';

import api from '../api/config'


const Missao = () => {
  const [hero, setHero] = useState({})
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    api.get(`posts?slug=${id}`)
      .then((response) => {
        response.data.map(({ id, title, content }) => (
          setHero({
            id: id,
            name: title?.rendered,
            image: 'https://sth.org.br/images/2021/11/Design-sem-nome-8.png',
            content: content.rendered,
            meta: 'Sessões de Estimulação Magnética Transcraniana',
            value: '3.311,00',
            percentage: '67',
            dateFinal: '29/07/2022',
          })
        ))
      })
      .catch((err) => {
        return console.error("ops! ocorreu um erro : " + err);
      })
  }, id)

  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <CardHero hero={hero} />
      <DonationBlock hero={hero} />
      <TimelineMission />
      <Footer />
    </div>
  )
}

export default Missao