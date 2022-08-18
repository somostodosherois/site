import { useState, useContext } from 'react'
import { BsTrash } from "react-icons/bs";

import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import FormAddress from '../../components/Forms/Address';
import FormPayment from '../../components/Forms/Payment';
import formatCurrent from '../../hooks/formatCurrent'
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
} from "../../contexts/cart";


export default function Pagamento() {

  const { items: cartItems } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const cartQuantity = cartItems
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  return (
    <div className="bg-gray-50">
      <Menu />

      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <FormAddress />
              <FormPayment />
            </div>

            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex py-6 px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <img src={product.image} className="w-20 rounded-md" />
                      </div>

                      <div className="ml-6 flex-1 flex flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">{product.hero.name}</p>
                          </div>

                          <div className="ml-4 flex-shrink-0 flow-root">
                            <BsTrash className="ml-2 mt-4 h-5 w-5 cursor-pointer" onClick={() => handleRemove(product.id)} />
                          </div>
                        </div>

                        <div className="flex-1 pt-2 flex items-end justify-between">
                          <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">{formatCurrent(cartTotal)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxas</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">{formatCurrent(cartTotal)}</dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button
                    type="submit"
                    className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                  >
                    Confirmar doação
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
