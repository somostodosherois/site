import { SliceZone } from '@prismicio/react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TextBlock from '../../components/TextBlock'
import CardsIconsText from '../../components/CardsIconsText'
import Timeline from '../../components/Timeline'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, menu, metaTitle, metaDescription, slices }) => {
    if (!page) return null

    const data = page?.data || {}

    return (
        <>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} menu={menu} />

            <TextBlock title={data.page_name} description={data.description} isRichText={true} video={data.video.embed_url} />
            
            <div className='pt-4 pb-12'>
                <TextBlock title={data.title_2} description={data.description_2} isRichText={true} />
            </div>
            {/* <div className="py-16 px-4">
                <div className="grid max-w-7xl mx-auto sm:px-6 lg:items-center gap-y-24">

                    {data.session.map(({ title, content }, index) => (
                        <div className='md:grid lg:flex justify-center items-center gap-x-24 text-center' key={index}>
                            <div className='w-20 pb-4'>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold">{title}</h2>
                                <span className="w-16 my-2 h-1 bg-red-600 border rounded-xl block"></span>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-600">{content}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            <CardsIconsText items={data.session_values} />
            <Timeline description={data.timeline_description} data={data.timeline_content} />

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
