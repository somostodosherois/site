import { SliceZone } from '@prismicio/react'
import Menu from '../components/Menu'

import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, menu, metaTitle, metaDescription }) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Menu />
      {/* <SliceZone slices={page} components={components} /> */}
    </>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)
  const menu = await client.getSingle("menu");

  return {
    props: {
      page,
      menu: menu.data,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      // slices: page.data.body
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}
