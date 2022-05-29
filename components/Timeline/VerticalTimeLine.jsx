import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BsGraphUp, BsLightbulb, BsSuitHeart, BsThermometerHigh, BsPeople } from "react-icons/bs";

import 'react-vertical-timeline-component/style.min.css';


const data = [
  {
    title: 'O começo de tudo',
    description: 'Tudo começou com a iniciativa de um estudante de engenharia de computação da USP de São Carlos. Seu objetivo era criar uma plataforma segura e confiável para ajudar as milhares de crianças que precisam de tratamento médico no Brasil.',
    date: '2016',
    icon: <BsGraphUp />,
    setBackground: false
  },
  {
    title: 'As 3 primeiras missões concluídas',
    description: 'Em nosso primeiro semestre de atuação, com uma plataforma recém-criada e nossa marca ainda pouco difundida, as 3 primeiras missões concluídas no site foram uma conquista gigantesca! A primeira missão que realizamos foi a do Dudu, um cãozinho simpático que tinha dificuldades de locomoção. Após isso, foi possível ajudar uma escola na cidade de São Carlos e contribuir para a primeira cirurgia do site, a da Rafaella!',
    date: 'Primeiro semestre - 2016',
    icon: <BsGraphUp />,
    setBackground: true
  },
  {
    title: 'Marca de 12 Missões Concluídas',
    description: 'Em nosso segundo ano de atuação, pudemos ajudar duas instituições e sete crianças que precisavam de tratamento médico! Com uma equipe maior e muita motivação foi possível fazer mais por nossos pequenos. Nossa primeira parceria com um hospital também nos permitiu ter acesso às crianças que precisavam de ajuda. Cada criança ajudada nos impulsionou a ir cada vez mais além e crescer para fazer o mesmo por muitos outros!',
    date: '2017',
    icon: <BsGraphUp />,
    setBackground: true
  },
  {
    title: 'STH torna-se oficialmente uma ONG!',
    description: 'Era preciso ir além, ajudar a transformar a saúde no Brasil de verdade. Decidimos nos tornar ONG e carregar a bandeira de que com independência na nossa gestão, transparência com os doadores - o motor principal da organização - e sem quaisquer ajuda de custos públicos, poderíamos causar uma transformação eterna para vida de tantas crianças e famílias por vir.',
    date: '2018',
    icon: <BsGraphUp />,
    setBackground: false
  },
  {
    title: 'Marca de 28 Missões Concluídas',
    description: 'Em 2018, a STH já contava com 10 super membros e parcerias incríveis com 6 empresas, imprescindíveis para o crescimento da nova ONG! As 16 crianças ajudadas mostram o progresso e a motivação dos membros. Também foram realizados dois super eventos que permitiam a arrecadação mais rápida do valor necessitado pelas crianças além de possibilitar à comunidade o conhecimento sobre da ONG. Em novembro batíamos o impressionante valor de 50 mil reais arrecadados para missões!',
    date: '2018',
    icon: <BsGraphUp />,
    setBackground: true
  },
  {
    title: 'Marca de 51 Missões Concluídas',
    description: '2019 foi um ano de conquistas! Já em maio a plataforma acumulava 100 mil reais em doções! As 23 crianças atendidas pela ONG nesse ano agora representavam 7 estados distintos do país! E, além dos 3 eventos realizados para promover nosso trabalho, uma reestruturação completa foi feita em nosso site! Cada vez mais, nossa equipe focava em resultados, que são frutos do trabalho dedicado de membros que souberam buscar o aprendizado e aplicá-lo com maestria no contexto da STH.',
    date: '2019',
    icon: <BsGraphUp />,
    setBackground: true
  },
  {
    title: 'Marca de 84 Missões Concluídas',
    description: 'Apesar de todos os obstáculos trazidos pela pandemia, 2020 foi um ano de muitas conquistas! Foram mais de 55 mil reais arrecadados em missões, que contribuíram para transformar a vida de 32 crianças! Além disso, nossa missão "Todos Contra O Coronavírus" arrecadou mais de 6 mil reais para a compra de EPIs em 2 hospitais de Manaus.',
    date: '2020',
    icon: <BsGraphUp />,
    setBackground: true
  },
  {
    title: 'Marca de 91 Missões Concluídas',
    description: 'Ainda em cenário de pandemia começamos 2021 com vontade de realizar cada vez mais! Com metas bem definidas e uma equipe empenhada, buscamos formas de inovar e ajudar mais famílias enfrentarem esse momento difícil!',
    date: '2021',
    icon: <BsGraphUp />,
    setBackground: true
  },
]

const VerticalTimelineComponent = () => (
  <VerticalTimeline lineColor={'red'}>
    {data.map(({ title, description, date, icon, setBackground }, index) => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={date}
        contentStyle={!setBackground ? { border: '3px solid #DC2626' } : { borderBottom: '3px solid #DC2626'  }}
        contentArrowStyle={{ borderRight: '13px solid #DC2626' }}
        iconStyle={{ background: '#DC2626', color: '#fff' }}
        icon={icon}
        key={index}
      >
        <h3 className="vertical-timeline-element-title font-bold text-2xl">{title}</h3>
        <p>{description}</p>
      </VerticalTimelineElement>
    ))}

    {/* <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={''}
    /> */}
  </VerticalTimeline>
)

export default VerticalTimelineComponent