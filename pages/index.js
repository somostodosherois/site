import Head from 'next/head'
import Image from 'next/image'

import BannerHome from '../components/BannerHome'
import GridTextIcons from '../components/GridTextIcons'
import CallToAction from '../components/CallToAction'
import OngNumbers from '../components/OngNumbers'
import Footer from '../components/Footer'
import CardDonationTypes from '../components/CardDonationTypes'
import Missions from '../components/Missions'
import LinksImagesList from '../components/LinksImagesList'
import Accordion from '../components/Accordion'
import ODS from '../components/ODS'
import ShapeDivider from '../components/ShapeDivider'
import NewsList from '../components/NewsList/NewsList'
import Menu from '../components/Menu'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>

      <Menu />
      
      <BannerHome />

      <GridTextIcons />

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
