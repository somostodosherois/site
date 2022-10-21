import { SliceZone } from '@prismicio/react'
import Head from 'next/head'

import BannerHome from '../components/BannerHome'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, menu, metaTitle, metaDescription, slices  }) => {
  if (!page) return null

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu menu={menu} />
      <BannerHome data={page?.data} />
      <SliceZone slices={slices} components={components} />
      <Footer />
    </>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')
  const menu = await client.getSingle("menu");

  return {
    props: {
      page,
      menu: menu.data,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      slices: page.data.page_content
    },
  }
}
