import { PrismicRichText, SliceZone } from '@prismicio/react'
import Head from 'next/head'
import { Grid } from '@mui/material';

import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import TextBlock from '../../components/TextBlock/TextBlock'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, menu, metaTitle, metaDescription, slices }) => {
    if (!page || !menu) return null

    const data = page?.data || {}

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
            </Head>
            <Menu menu={menu} />
            <div className='pt-16 pb-16'>
                <SliceZone slices={slices} components={components} />
                <center>
                    <img src="https://i.giphy.com/khf7rqmlf5YLwOGIiO.gif" className="img-responsive" />
                </center>
            </div>
            <Footer />
        </>
    )
}

export default Page

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('thank_you')
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
