import React from 'react';

import MissionForm from '../../components/Forms/RegistrationMission';
import Footer from '../../components/Footer'
import Header from '../../components/Header';
import TextBlock from '../../components/TextBlock';
import TitlePage from '../../components/TitlePage';


export default function EnviarMissao() {
  return (
    <div>
      <Header metaTitle='STH - Enviar missão' metaDescription='teste' />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center pt-6 px-4">
        <TitlePage title='Enviar Missão' />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
        <p className="text-lg md:text-xl text-gray-600 lg:mx-auto leading-8">
          Bem vindo(a) a primeira etapa de seleção missões das crianças: o formulário online.
          É fundamental que você preencha todos os dados corretamente.
          A sua missão será analisada pela nossa super equipe de psicólogos e assistentes sociais. Assim que analisado,
          entraremos em contato através do seu email. Você não está sozinho(a) nesta luta. Sabemos o quão difícil é esse momento,
          lembre-se que os heróis são aqueles que têm a paciência e a perseverança para prosperar. ❤
        </p>

        <p className="text-lg md:text-xl text-gray-600 lg:mx-auto leading-8">
          Preencha o formulário abaixo, mas antes de começar, baixe a nossa autorização de uso de imagem e arrecadação!
          Caso você não tenha algum documento na hora da inscrição, nossa equipe entrará em contato com você para pedir o que falta!
        </p>
      </div>

      <TextBlock title='Primeira etapa: Formulário' description='Você é pai, mãe, responsável legal ou conhece alguma criança que precisa de ajuda para tratamentos médicos? Preencha o formulário abaixo e envie agora sua missão para a STH!' />

      <MissionForm />

      <Footer />
    </div>
  )
}