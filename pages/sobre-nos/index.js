import { SliceZone } from '@prismicio/react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TextBlock from '../../components/TextBlock'
import CardsIconsText from '../../components/CardsIconsText'
import Timeline from '../../components/Timeline'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

import Image from '../../public/fundoCriancas.jpeg'

const Page = ({ page, menu, metaTitle, metaDescription, slices }) => {
    if (!page) return null

    const data = page?.data || {}

    return (
        <>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} menu={menu} />

            <TextBlock title={data.page_name} description={data.description} isRichText={true} video={data.video.embed_url} />
           
            <SliceZone slices={slices} components={components} />
            <Footer />
        </>
    )
}

export default Page

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('about_us')
    const menu = await client.getSingle("menu");

    return {
        props: {
            page,
            menu: menu.data,
            metaTitle: page.data.meta_title,
            metaDescription: page.data.meta_description,
            slices: page.data.body || []
        },
    }
}
