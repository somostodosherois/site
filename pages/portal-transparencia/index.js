import React from 'react';
import Head from 'next/head'

import Footer from '../../components/Footer'
import Missions from '../../components/Missions'
import ShapeDivider from '../../components/ShapeDivider';
import MenuVertical from '../../components/MenuVertical/MenuVertical';
import BannerPage from '../../components/BannerPage/BannerPage';
import Menu from '../../components/Menu';
import { Grid, Icon } from '@mui/material';
import TitleSession from '../../components/TitleSession/TitleSession';
import TextBlock from '../../components/TextBlock/TextBlock';

//icons
import Calendar from '../../public/icons/Calendar.svg'
import PushPin from '../../public/icons/PushPin.svg'
import Handshake from '../../public/icons/Handshake.svg'

import Cadastro from '../../public/icons/Cadastro.svg'
import Documents from '../../public/icons/Documents.svg'
import Arrecadacao from '../../public/icons/Arrecadacao.svg'
import Approve from '../../public/icons/Approve.svg'
import CadeiraRodas from '../../public/icons/CadeiraRodas.svg'
import Moedas from '../../public/icons/Moedas.svg'
import PencilLine from '../../public/icons/PencilLine.svg'

import Image1 from '../../public/image-1.jpeg'
import Image2 from '../../public/image-2.jpeg'
import Image3 from '../../public/image-3.jpeg'
import childs from '../../public/fundoCriancas.jpeg'

import Accordion from '../../components/Accordion'
import BannerNumbers from '../../components/BannerNumbers/BannerNumbers';
import TextImageBlock from '../../components/TextImageBlock/TextImageBlock';




export default function PortalTransparencia() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <TextBlock title='Portal Transparência' isAboutUs={false} />

      {/* <TitleSession title='Portal Transparência' /> */}
      {/* <BannerPage /> */}

      {/* <ShapeDivider graus={180} /> */}
      <div className="max-w-7xl mx-auto lg:items-center">
        <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 md:mr-0 text-lg md:text-xl text-gray-800">
          <dd>
            <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600 uppercase">DESTINO DAS DOAÇÕES</p>
          </dd>
          <dd className="mt-2">Nossa receita é composta por doações para missões e doações para a STH, que podem ser:</dd>

          <Grid className='block md:flex mt-8 gap-x-24'>
            <Grid className='flex items-center justify-left md:justify-center gap-x-4'>
              <img src={Calendar.src} />
              <span>Doações Mensais</span>
            </Grid>
            <Grid className='flex items-center justify-left md:justify-center gap-x-4'>
              <img src={PushPin.src} />
              <span>Doações Pontuais</span>
            </Grid>
            <Grid className='flex items-center justify-left md:justify-center gap-x-4'>
              <img src={Handshake.src} />
              <span>Parceirias</span>
            </Grid>
          </Grid>

          <dd className="mt-8">Quando um doador escolhe fazer doações para Missões, o valor é destinado exclusivamente à compra de tratamentos médicos que nossos heróis necessitam.</dd>


          <dd className='mt-16'>
            <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600">Mas como a STH se mantém?</p>
          </dd>
          <dd className="mt-2">Nossas despesas operacionais como: administrativo, marketing e infraestrutura, são financiadas por doadores mensais que acreditam no nosso trabalho e possibiliram que a STH se mantenha ativa. </dd>


          <dd className='mt-16'>
            <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600 uppercase">COMO AS DOAÇÕES ACONTECEM</p>
          </dd>

          <div className='border-l-2 border-red-600 ml-6 sm:ml-16 mt-8'>
            <div className='flex items-center justify-center'>
              <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                <img src={Cadastro.src} />
                <span><b>Cadastro:</b> Responsável, profissional de saúde ou assistente social cadastra criança em situação de vulnerabilidade na plataforma da STH.</span>
              </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
              <span className="w-12	h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                <img src={Documents.src} />
                <span><b>Análise de documentos:</b> São analisados os ducumentos da criança, bem como dos responsaveis e a partir da avaliação dos laudos médicos e entrevista com os responsáveis, a criança entra em critério de aprovação.</span>
              </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
              <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full	rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                <img src={Approve.src} />
                <span><b>Aprovação:</b> A equipe da STH verifica como a criança pode ser beneficiada pelo programa e estipula o valor de campanha.</span>
              </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
              <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full rounded-lg items-center justify-left border-2 border-red-600 gap-x-6 p-4'>
                <img src={Arrecadacao.src} />
                <span><b>Contrato de arrecadação:</b> São assinados os documentos entre responsáveis da criança e a STH.</span>
              </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
              <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full	rounded-lg items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                <img src={Moedas.src} />
                <span><b>Arrecadação na plataforma:</b> A campanha de financiamento coletivo dura 50 dias com doações realizadas a partir da plataforma da STH. Todo valor arrecadado em missões específica é 100% destinado à mesma.</span>
              </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
              <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full	rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                <img src={CadeiraRodas.src} />
                <span><b>Entrega da missão:</b> Se possível, a equipe da STH visita a criança para a entrega da missão. A entregas das missões dependem da necessidade de cada criança, veja as modalidade a seguir:</span>
              </div>
            </div>
            <Grid className='block lg:flex mt-6 mb-6 m-14 gap-x-8'>
              <Grid className='mb-4 lg:mb-0'>
                <div className='sm:flex w-full	rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                  <span><b>Itens básicos:</b> É realizada a compra e entrega de remédios, fraldas e etc.</span>
                </div>
              </Grid>
              <Grid className='mb-4 lg:mb-0'>
                <div className='sm:flex w-full	rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                  <span><b>Terapias:</b> É feita acontratação do serviço junto à clínica que realizará os procedimentos.</span>
                </div>
              </Grid>
              <Grid className='mb-4 lg:mb-0'>
                <div className='sm:flex w-full	rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                  <span><b>Equipamentos:</b> A equipe da STH compra o equipamento providencia o envio.</span>
                </div>
              </Grid>
            </Grid>


            <div className='flex items-center justify-center mt-8'>
              <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
              <div className='sm:flex w-full	rounded-lg	items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                <img src={PencilLine.src} />
                <span><b>Finalização da missão:</b> Ao final da missão de tratamento e entrega de produtos e equipamentos, é assinado o Termo de Quitação e a missão é finalizada.</span>
              </div>
            </div>
          </div>

        </div>
      </div>


      <BannerNumbers />

      <div className="max-w-7xl mx-auto lg:items-center">
        <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 sm:mr-0 text-lg md:text-xl text-gray-800">


          <dd className='mt-16'>
            <p className=" text-xl md:text-2xl leading-6 text-red-600 uppercase">ARQUIVOS DE DOCUMENTOS</p>
          </dd>
          <dd className="mt-2">Os arquivos abaixo são... (ver texto)</dd>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-12 mb-12">
            <div className="group relative bg-white border border-red-600 rounded-xl p-2">
              <div className="relative bg-white overflow-hidden -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-50 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={Image1.src}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className='text-center'>
                <h3 className="mt-4 font-lg font-semibold text-gray-900">
                  <span className="absolute inset-0" />
                  Relatório de atividades
                </h3>

                <div className='flex items-center justify-center gap-x-4'>
                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2019
                    </a>
                  </div>

                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2020
                    </a>
                  </div>

                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2021
                    </a>
                  </div>

                </div>

              </div>
            </div>

            <div className="group relative bg-white border border-red-600 rounded-xl p-2">
              <div className="relative bg-white overflow-hidden -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-50 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={Image2.src}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className='text-center'>
                <h3 className="mt-4 font-lg font-semibold text-gray-900">
                  Demonstrativo
                </h3>

                <div className='flex items-center justify-center gap-x-4'>
                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2019
                    </a>
                  </div>

                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2020
                    </a>
                  </div>

                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2021
                    </a>
                  </div>

                </div>

              </div>
            </div>

            <div className="group relative bg-white border border-red-600 rounded-xl p-2">
              <div className="relative bg-white overflow-hidden -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-50 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={Image3.src}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className='text-center'>
                <h3 className="mt-4 font-lg font-semibold text-gray-900">
                  Gestão Financeira
                </h3>

                <div className='flex items-center justify-center gap-x-4'>
                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2019
                    </a>
                  </div>

                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2020
                    </a>
                  </div>

                  <div className="rounded-md mt-6 shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                      2021
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
        <TextImageBlock title='POR QUE SER UM GUARDIÃO?' description='É um gesto de cidadania e solidariedade ajudar a quem mais precisa. As crianças de nossa Plataforma são carentes de tratamentos de saúde e necessitam de ajuda da comunidade em geral. Como prezamos pela transparência, nossos guardiões conseguem vivenciar e acompanhar nosso crescimento, a distribuição do recurso que ele nos doa e as missões concluídas no período. Tudo isso através de e-mail, mensagens, informativos e pelo Portal da Transparência.' button='Se tornar guardião' image={childs.src} />

      </div>

      <Accordion />
      <Footer />
    </div>
  )
}