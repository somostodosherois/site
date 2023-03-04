import { SliceZone } from '@prismicio/react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import FormContact from '../../components/Forms/Contact'
import Snackbar from '../../components/Snackbar/Snackbar';
import Header from '../../components/Header'
import { createClient } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, menu, metaTitle, metaDescription, slices }) => {
    if (!page || !menu) return null

    const data = page?.data || {}
    const [openSnack, setOpenSnack] = useState(false)
    const [messageSnack, setMessageSnack] = useState('')
    const [typeSnack, setTypeSnack] = useState('success')

    return (
        <>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} menu={menu} />

            <FormContact data={data} setOpenSnack={setOpenSnack} setMessageSnack={setMessageSnack}  />

            <SliceZone slices={slices} components={components} />

            {openSnack && messageSnack && <Snackbar message={messageSnack} open={openSnack} setOpenSnack={setOpenSnack} />}

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
