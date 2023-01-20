import '../styles/globals.css'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { initializeApp } from "firebase/app";

import { linkResolver, repositoryName } from '../prismicio'
import CommonProvider from "../contexts/common";
import ProductsProvider from "../contexts/products";
import CheckoutProvider from "../contexts/checkout";
import { CoinsProvider } from '../contexts/coins';

function MyApp({ Component, pageProps }) {
  const firebaseConfig = {
    apiKey: "AIzaSyB2hZgNvoEUYcqqih-DY1PDsG8T8SH_n2k",
    authDomain: "somostodosherois-sth.firebaseapp.com",
    projectId: "somostodosherois-sth",
    storageBucket: "somostodosherois-sth.appspot.com",
    messagingSenderId: "1021963600406",
    appId: "1:1021963600406:web:fc07c1ea64e5f5ab64eb37",
    measurementId: "G-MEC1QDKNJG"
  };

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

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
            <CoinsProvider>
              <CheckoutProvider>
                <Component {...pageProps} />
              </CheckoutProvider>
            </CoinsProvider>
          </ProductsProvider>
        </CommonProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
