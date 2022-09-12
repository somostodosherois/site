import { PrismicLink } from 'prismic-reactjs'

const defaultPath = () => '/'

const knownTypes = {
    home: defaultPath,
    sobrenos: () => `/sobre-nos/`,
    missoes: () => `/missoes/`,
    missao: (uid) => `/missao/${uid}`,
}

const linkResolver = doc => (knownTypes[doc.type] || defaultPath)(doc.uid)

const renderLink = link => PrismicLink.url(link, linkResolver)

export {
    linkResolver,
    renderLink
}