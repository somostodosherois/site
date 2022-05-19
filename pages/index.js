import Head from 'next/head'
import Image from 'next/image'

import BannerHome from '../components/BannerHome'
import GridTextIcons from '../components/GridTextIcons'
import Carousel from '../components/Carousel'
import CallToAction from '../components/CallToAction'
import OngNumbers from '../components/OngNumbers'
import Footer from '../components/Footer'
import DonationTypes from '../components/DonationTypes'
import Missions from '../components/Missions'
import LinksImagesList from '../components/LinksImagesList'
import Accordion from '../components/Accordion'
import ODS from '../components/ODS'
import ShapeDivider from '../components/ShapeDivider'
import NewsList from '../components/NewsList/NewsList'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>

      <BannerHome />
      <GridTextIcons />
      <ODS />
      <ShapeDivider graus={180} />
      {/* <Carousel /> */}
      <Missions variation='home' />
      <OngNumbers />
      <DonationTypes />
      <CallToAction />

      <ShapeDivider graus={180}/>
      <NewsList />
      <ShapeDivider graus={0} />

      <LinksImagesList />
      <Accordion />


      {/* background: repeating-linear-gradient( 120deg, #f3f4f6, #f3f4f6 10px, #ffffff 15px, #ffffff 11px ); */}


      {/* <div className="relative bg-gray-100 overflow-hidden text-center pt-16">
        <Image src='/Fluxo-CestaAmpla.png' height={600} width={800} />
      </div> */}

      <Footer />

    </div>
  )
}
