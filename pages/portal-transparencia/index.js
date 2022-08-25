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
            <div className='pt-16'>
                <TextBlock title={data.page_name} />
            </div>

            <div className="max-w-7xl mx-auto lg:items-center">
                <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 md:mr-0 text-lg md:text-xl text-gray-800">
                    <dd>
                        <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600 uppercase">{data.donations_title}</p>
                    </dd>
                    <dd className="mt-2">{data.donations_description1}</dd>

                    <Grid className='block md:flex mt-8 gap-x-24'>
                        {data.donations_type.map(({ image, label }, index) => (
                            <Grid className='flex items-center justify-left md:justify-center gap-x-4' key={index}>
                                <img src={image.url} />
                                <span>{label}</span>
                            </Grid>
                        ))}
                    </Grid>

                    <dd className="mt-8">{data.donations_description2}</dd>


                    <dd className='mt-16'>
                        <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600">{data.session2_title}</p>
                    </dd>
                    <dd className="mt-2">{data.session2_description}</dd>


                    <dd className='mt-16'>
                        <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600 uppercase">{data.session3_title}</p>
                    </dd>

                    <div className='border-l-2 border-red-600 ml-6 sm:ml-16 mt-8'>
                        {data.processo_das_missoes.map(({ image, description, subitems }, index) => (
                            <>
                                <div className='flex items-center justify-center mt-8'>
                                    <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
                                    <div className='sm:flex w-full	rounded-lg	items-center justify-left border-2 border-red-600 gap-x-6 p-4'>
                                        <img src={image.url} />
                                        <PrismicRichText field={description} />
                                    </div>
                                </div>
                                {subitems &&
                                    <Grid className='block lg:flex mt-6 mb-6 m-14 gap-x-8'>
                                        {subitems.map(({ text }, index) => (
                                            <Grid className='mb-4 lg:mb-0'>
                                                <div className='sm:flex w-full rounded-lg items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                                                    <span className='text-lg'>{text}</span>
                                                </div>
                                            </Grid>
                                        ))
                                        }
                                    </Grid>
                                }
                            </>
                        ))}
                    </div>
                </div>
            </div>

            <SliceZone slices={slices} components={components} />
            <Footer />
        </>
    )
}

export default Page

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('transparency')
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
