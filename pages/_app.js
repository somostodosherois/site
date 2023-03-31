import '../styles/globals.css'

import React, { useState } from 'react';
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'

import { linkResolver, repositoryName } from '../prismicio'
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
        <CoinsProvider>
          <CheckoutProvider>
            <Component {...pageProps} />
          </CheckoutProvider>
        </CoinsProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
