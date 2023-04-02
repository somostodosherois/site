import { SliceZone } from '@prismicio/react'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import getUser from '../hooks/getSession'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, metaTitle, metaDescription, banner, slices, coins }) => {
  if (!page) return null

  return (
    <>
      <Header metaTitle={metaTitle} metaDescription={metaDescription} coins={coins} />

      {banner &&
        <Banner banner={banner} />
      }

      <SliceZone slices={slices} components={components} />
      <Footer />
    </>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')
  let coinsUser = 0
  
  if(getUser().email){
    coinsUser = await fetch(`https://sth-api.herokuapp.com/api/getCoins`,{
      userData: {
        email: getUser().email
      }
    }).then(res => res.json());

    console.log('coins')
    console.log(coinsUser)
  }

  return {
    props: {
      page,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      banner: page.data.banner,
      slices: page.data.page_content,
      coins: coinsUser
    },
  }
}
