import { useState, useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from "react-input-mask";

import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import FormAddress from '../../components/Forms/Address';
import FormPayment from '../../components/Forms/Payment';
import formatCurrent from '../../hooks/formatCurrent'
// import {
//   CartStateContext,
//   CartDispatchContext,
//   removeFromCart,
// } from "../../contexts/cart";

import swal from 'sweetalert';
import Router from 'next/router';

export default function Pagamento() {

  // const { items: cartItems } = useContext(CartStateContext);
  // const dispatch = useContext(CartDispatchContext);
  const [cpf, setCpf] = useState('')

  const [amount, setAmount] = useState(0);
  const [amountMask, setAmountMask] = useState();

  // const cartQuantity = cartItems
  //   .map((item) => item.quantity)
  //   .reduce((prev, current) => prev + current, 0);

  // const cartTotal = cartItems
  //   .map((item) => item.price * item.quantity)
  //   .reduce((prev, current) => prev + current, 0);

  const handleAmount = (e) => {
    setAmount(e.target.value)
    setAmountMask(formatCurrent(e.target.value))
  }

  const handleCpf = (e) => (
    setCpf(e.target.value)
  )

  const handleRecharge = (e, amount) => {
    e.preventDefault();

    //Chamar a API de pagamentos

    swal({
      title: "Recarga realizada com sucesso!",
      text: "Agora você já pode realizar as doações.",
      icon: "success",
      button: false,
    })

    setTimeout(() => {
      Router.push(`/`)
    }, 1000);
  }

  return (
    <div className="bg-gray-50">
      <Menu />

      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div className="mt-10 pt-4">

                <h2 className="text-lg font-medium text-gray-900">Valor</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"></div>

                <div className="sm:col-span-2 flex gap-x-4 mb-8">
                  <TextField
                    type='number'
                    size='small'
                    label='Valor'
                    placeholder='Valor'
                    color='error'
                    className='mb-2'
                    required
                    onChange={handleAmount}
                    value={amount}
                  />
                </div>

                <h2 className="text-lg font-medium text-gray-900">Dados pessoais</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                  <div className="sm:col-span-2 flex gap-x-4">
                    <InputMask
                      mask="999.999.999-99"
                      onChange={handleCpf}
                    >
                      {() =>
                        <TextField
                          type='text'
                          size='small'
                          label='CPF'
                          placeholder='Digite o CPF'
                          color='error'
                          className='mb-2'
                          required
                        />
                      }
                    </InputMask>
                  </div>
                </div>
              </div>
              <FormAddress />
              <FormPayment />
            </div>

            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
              <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-sm">
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">{amountMask}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxas</dt>
                    <dd className="text-sm font-medium text-gray-900">R$ 0,00</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">{amountMask}</dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button
                    onClick={(e) => handleRecharge(e, amount)}
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
