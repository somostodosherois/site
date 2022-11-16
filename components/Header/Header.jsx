import Head from 'next/head'

import Menu from '../Menu'

const Header = ({ metaTitle, metaDescription, menu }) => (
    <>
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
        </Head>
        <Menu menu={menu} />
    </>
)

export default Header