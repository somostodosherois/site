import React from 'react';
import Menu from '../../components/Menu';
import Head from 'next/head'
import MissionForm from '../../components/MissionForm/MissionForm';
import Footer from '../../components/Footer'


export default function EnviarMissao() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <div className="pt-16"></div>
      <div className='flex bg-gray-100'>
        <div className="mx-auto py-16 px-8 max-w-screen-md text-center">

          <h1 className="font-bold text-center text-3xl"> Enviar Missão </h1>
          <br />
          <p>Você é pai, mãe, responsável legal ou conhece alguma <u>criança</u> que precisa de ajuda para tratamentos médicos?</p>
          <p className="text-red-500">Envie sua missão para a STH.</p>
          <br />
          <p className="text-base">
            Bem vindo(a) a primeira etapa de seleção missões das crianças: o formulário online. É fundamental que você preencha todos os dados corretamente. A sua missão será analisada pela nossa super equipe de psicólogos e assistentes sociais. Assim que analisado, entraremos em contato <u>através do seu email</u>. Você não está sozinho(a) nesta luta. Sabemos o quão difícil é esse momento, lembre-se que os heróis são aqueles que têm a paciência e a perseverança para prosperar. ❤
          </p>
          <p className="text-base">Saiba mais sobre as <u>Etapas de Seleção</u>.</p>
          <br />
          <p className="text-base">Preencha o formulário abaixo, mas antes de começar, baixe a nossa autorização de uso de imagem e arrecadação! Caso você não tenha algum documento na hora da inscrição, nossa equipe entrará em contato com você para pedir o que falta!</p>
        </div>
        <MissionForm />
      </div>

      <Footer />
    </div>
  )
}