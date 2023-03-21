import { SliceZone } from '@prismicio/react'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, metaTitle, metaDescription, banner, slices }) => {
  if (!page) return null

  return (
    <>
      <Header metaTitle={metaTitle} metaDescription={metaDescription} />

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

  return {
    props: {
      page,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      banner: page.data.banner,
      slices: page.data.page_content
    },
  }
}
