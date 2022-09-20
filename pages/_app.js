import '../styles/globals.css'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

import CommonProvider from "../contexts/common";
import ProductsProvider from "../contexts/products";
import CartProvider from "../contexts/cart";
import CheckoutProvider from "../contexts/checkout";
import { CoinsProvider } from '../contexts/coins';


function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <CommonProvider>
          <ProductsProvider>
            <CartProvider>
              <CoinsProvider>
                <CheckoutProvider>
                  <Component {...pageProps} />
                </CheckoutProvider>
              </CoinsProvider>
            </CartProvider>
          </ProductsProvider>
        </CommonProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
