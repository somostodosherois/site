import { SliceZone } from '@prismicio/react'

import Footer from '../../components/Footer'
import FormContact from '../../components/Forms/Contact'
import Header from '../../components/Header'
import { createClient } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, menu, metaTitle, metaDescription, slices }) => {
    if (!page || !menu) return null

    const data = page?.data || {}

    return (
        <>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} menu={menu} />

            <FormContact data={data}/>

            <SliceZone slices={slices} components={components} />
            <Footer />
        </>
    )
}

export default Page

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('help')
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
