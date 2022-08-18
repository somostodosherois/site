import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import GridTextIcons from '../../components/GridTextIcons';

export default function Missoes() {
  const object = {
    helperText: '',
    title: 'Obrigado, Herói! Você salvou o dia da missão ! 👏',
    description: 'Abaixo você consegue conferir os próximos passos a serem realizados por nós para que possamos finalizar a missão da Criança(s) X',
  }
  
  const features = [
    {
      name: 'Arrecadação na plataforma',
      description:
        'A campanha de financiamento coletivo dura 50 dias com doações realizadas a partir da plataforma da STH. Todo valor arrecadado em missões específica é 100% destinado à mesma.',
    },
    {
      name: 'Aquisição da necessidade',
      description:
        'Compra os itens e/ou serviços necessitados por nossas crianças, como: Itens básicos (remédios, fraldas e etc), Terapias e/ou Equipamentos.',
    },
    {
      name: 'Finalização da missão',
      description:
        'Ao final da aquisição é realizado a entrega a família e assinado o Termo de Quitação e a missão é finalizada.',
    }
  ]

  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      
      <div className='pt-16'></div>
      <GridTextIcons object={object} features={features} />
      <center><img src="https://i.giphy.com/khf7rqmlf5YLwOGIiO.gif" class="img-responsive"/></center>
      <div className='pb-16'></div>

      <Footer />
    </div>
  )
}