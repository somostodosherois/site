import Head from 'next/head'
import Image from 'next/image'

import BannerHome from '../components/BannerHome/BannerHome'
import GridTextIcons from '../components/GridTextIcons/GridTextIcons'
import Carousel from '../components/Carousel/Carousel'
import CallToAction from '../components/CallToAction/CallToAction'
import OngNumbers from '../components/OngNumbers/OngNumbers'
import Footer from '../components/Footer/Footer'
import DonationTypes from '../components/DonationTypes/DonationTypes'
import Missions from '../components/Missions/Missions'


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
      {/* <Carousel /> */}
      <Missions />
      <OngNumbers />
      <DonationTypes />
      <CallToAction />


      {/* background: repeating-linear-gradient( 120deg, #f3f4f6, #f3f4f6 10px, #ffffff 15px, #ffffff 11px ); */}


      {/* <div className="relative bg-gray-100 overflow-hidden text-center pt-16">
        <Image src='/Fluxo-CestaAmpla.png' height={600} width={800} />
      </div> */}

      <Footer />

    </div>
  )
}
