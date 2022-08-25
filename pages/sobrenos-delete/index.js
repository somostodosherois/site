import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import ShapeDivider from '../../components/ShapeDivider';
import TextBlock from '../../components/TextBlock/TextBlock';
import CardsIconsText from '../../components/CardsIconsText/CardsIconsText';
import TitleSession from '../../components/TitleSession/TitleSession';

import { BsBullseye, BsEye } from "react-icons/bs";
import Timeline from '../../components/Timeline/Timeline';


export default function Missoes() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />

      <TextBlock title={'A Somos Todos Heróis'} background='gray-100' isAboutUs={true} description={'A Somos Todos Heróis é uma ONG jovem e digital que transforma a vida de crianças que necessitam de tratamentos médicos ao redor do país. Unimos pessoas como você, que estão dispostas a fazer a diferença na vida de alguém, incentivando a prática solidária por meio de doações diretas e resgatando o heroísmo que reside em cada um de nós. Trazemos ao processo toda a temática dos super-heróis, que remete a muitas memórias de infância e, ao mesmo tempo, transforma o feito de ajudar numa ação leve, divertida e impactante.'} />
      {/* <ShapeDivider graus={0} /> */}

      <div className="bg-gray-100 py-16 px-4">
        <div className="grid max-w-7xl mx-auto sm:px-6 lg:items-center gap-y-24">

          <div className='md:grid lg:flex justify-center items-center gap-x-24 text-center'>
            <div className='w-20 pb-4'>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold">Missão</h2>
              <span className="w-16 my-2 h-1 bg-red-600 border rounded-xl block"></span>
            </div>

            <p className="text-xl md:text-2xl text-gray-600">
              {'Transformar a vida de milhares de crianças e adolescentes que precisam de tratamento médico ao redor do mundo, resgatando o herói que cada um de nós tem dentro de si.'}
            </p>
          </div>

          <div className='md:grid lg:flex justify-center items-center text-center gap-x-24'>
            <div className='w-20 pb-4'>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold">Visão</h2>
              <span className="w-16 my-2 h-1 bg-red-600 border rounded-xl block"></span>
            </div>
            <p className="text-xl md:text-2xl text-gray-600">
              {'Imaginamos um mundo onde as crianças não tenham mais que abrir mão da sua diversão, vitalidade e educação devido a ausência de recursos e tratamentos que garantem a sua saúde.'}
            </p>
          </div>

        </div>
      </div>

      <CardsIconsText />

      <Timeline />
       
      <Footer />
    </div>
  )
}