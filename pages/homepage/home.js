import Head from 'next/head'
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


import BannerHome from '../../components/BannerHome'
import GridTextIcons from '../../components/GridTextIcons'
import CallToAction from '../../components/CallToAction'
import OngNumbers from '../../components/OngNumbers'
import Footer from '../../components/Footer'
import CardDonationTypes from '../../components/CardDonationTypes'
import Missions from '../../components/Missions'
import LinksImagesList from '../../components/LinksImagesList'
import Accordion from '../../components/Accordion'
import ODS from '../../components/ODS'
import ShapeDivider from '../../components/ShapeDivider'
import NewsList from '../../components/NewsList/NewsList'
import Menu from '../../components/Menu'


export default function Home() {
  const object = {
    helperText: 'Saiba mais sobre a ong',
    title: 'Somos Todos Heróis',
    description: 'A Somos Todos Heróis é uma ONG jovem e digital que transforma a vida de crianças que necessitam de tratamentos médicos ao redor do país. Unimos pessoas como você, que estão dispostas a fazer a diferença na vida de alguém, incentivando a prática solidária por meio de doações diretas e resgatando o heroísmo que reside em cada um de nós. ',
  }
  
  const features = [
    {
      name: 'Nosso DNA',
      description:
        ' Trazemos ao processo toda a temática dos super-heróis, que remete a muitas memórias de infância e, ao mesmo tempo, transforma o feito de ajudar numa ação leve, divertida e impactante.',
      icon: GlobeAltIcon,
    },
    {
      name: '[a definir]',
      description:
        'Transformar a vida de milhares de crianças e adolescentes que precisam de tratamento médico ao redor do mundo, resgatando o herói que cada um de nós tem dentro de si.',
      icon: ScaleIcon,
    },
    {
      name: '[a definir]',
      description:
        'Imaginamos um mundo onde as crianças não tenham mais que abrir mão da sua diversão, vitalidade e educação devido a ausência de recursos e tratamentos que garantem a sua saúde.',
      icon: LightningBoltIcon,
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
      
      <BannerHome />

      <GridTextIcons object={object} features={features} />

      <ShapeDivider graus={180} />

      <Missions variation='home' />

      <OngNumbers />
      <ShapeDivider graus={0} />


      <CardDonationTypes />

      <ODS />


      <CallToAction />

      <ShapeDivider graus={180}/>
      <NewsList />
      <ShapeDivider graus={0} />

      <LinksImagesList />

      <Accordion />

      <Footer />

    </div>
  )
}
