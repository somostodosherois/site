import '../styles/globals.css'

import CommonProvider from "../contexts/common";
import ProductsProvider from "../contexts/products";
import CartProvider from "../contexts/cart";
import CheckoutProvider from "../contexts/checkout";

function MyApp({ Component, pageProps }) {
  return (
    <CommonProvider>
      <ProductsProvider>
        <CartProvider>
          <CheckoutProvider>
            <Component {...pageProps} />
          </CheckoutProvider>
        </CartProvider>
      </ProductsProvider>
    </CommonProvider>
  )
}

export default MyApp
