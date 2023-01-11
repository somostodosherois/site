import { useState, useContext, useEffect } from 'react'
import { BsTrash } from "react-icons/bs";
import TextField from '@mui/material/TextField'
import InputMask from "react-input-mask";
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FormAddress from '../../components/Forms/Address';
import FormPayment from '../../components/Forms/Payment';
import formatCurrent from '../../hooks/formatCurrent'
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
} from "../../contexts/cart";

import { useCoins } from '../../contexts/coins';
import swal from 'sweetalert';
import Router from 'next/router';

export default function Pagamento() {

  const { items: cartItems } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const { coins, setCoins } = useCoins();

  const [cpf, setCpf] = useState('')
  const [amount, setAmount] = useState(0);
  const [convertCoins, setConvertCoins] = useState(0)
  const [isOpenField, setIsOpenField] = useState(false);
  const [isDonationCheck, setIsDonationCheck] = useState(true);

  // const cartQuantity = cartItems
  //   .map((item) => item.quantity)
  //   .reduce((prev, current) => prev + current, 0);

  // const cartTotal = cartItems
  //   .map((item) => item.price * item.quantity)
  //   .reduce((prev, current) => prev + current, 0);

  // const handleRemove = (productId) => {
  //   return removeFromCart(dispatch, productId);
  // };

  const handleCpf = (e) => (
    setCpf(e.target.value)
  )

  const handleField = () => (
    setIsOpenField(!isOpenField)
  )

  const handleCheck = () => {
    setIsDonationCheck(!isDonationCheck)
  }

  const handleAmount = (value) => {
    setAmount(value)
  }


  const handleRecharge = (e, amount) => {
    e.preventDefault();

    const sum = parseFloat(coins) + parseFloat(amount);

    if (isDonationCheck) {
      localStorage.setItem('coins', sum / 2);
      setCoins(parseFloat(sum / 2));
    } else {
      localStorage.setItem('coins', sum);
      setCoins(parseFloat(sum));
    }

    swal({
      title: "Recarga realizada com sucesso!",
      text: "Agora você já pode realizar as doações.",
      icon: "success",
      button: false,
    })

    setTimeout(() => {
      const hero = localStorage.getItem('hero');
      swal.close()
      Router.push(`/missao/${hero}`)
    }, 1000);
  }

  return (
    <div className="bg-gray-50">
      <Header metaTitle={'STH - Pagamento'} />

      <main className="max-w-7xl mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>

              <h2 className="text-lg font-medium text-gray-900">Valor</h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                <button
                  value={30}
                  onClick={(e) => handleAmount(e.target.value)}
                  type="submit"
                  className="w-full bg-transparent border border-red-600 rounded-md shadow-sm py-3 px-4 text-base font-medium text-red-600 hover:bg-red-600 hover:text-white"
                >
                  R$ 30,00
                </button>

                <button
                  value={50}
                  onClick={(e) => handleAmount(e.target.value)}
                  type="submit"
                  className="w-full bg-transparent border border-red-600 rounded-md shadow-sm py-3 px-4 text-base font-medium text-red-600 hover:bg-red-600 hover:text-white active-button-white"
                >
                  R$ 50,00
                </button>

                <button
                  value={100}
                  onClick={(e) => handleAmount(e.target.value)}
                  type="submit"
                  className="w-full bg-transparent border border-red-600 rounded-md shadow-sm py-3 px-4 text-base font-medium text-red-600 hover:bg-red-600 hover:text-white"
                >
                  R$ 100,00
                </button>

                <button
                  onClick={() => handleField()}
                  type="submit"
                  className="w-full bg-transparent border border-red-600 rounded-md shadow-sm py-3 px-4 text-base font-medium text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Outro valor
                </button>
              </div>

              <div className='mt-12'>
                <FormControl fullWidth>
                  <InputLabel>Recorrência da doação</InputLabel>
                  <Select
                    label="Recorrência da doação"
                    color='error'
                    defaultValue='mensal'
                  >
                    <MenuItem value='mensal'>Mensal</MenuItem>
                    <MenuItem value='trimestral'>Trimestral</MenuItem>
                    <MenuItem value='pontual'>Pontual</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {isOpenField &&
                <div className="sm:col-span-2 flex gap-x-4 mt-8 mb-8">
                  <TextField
                    type='value'
                    size='small'
                    label='Valor'
                    color='error'
                    className='mb-2'
                    onChange={(e) => handleAmount(e.target.value)}
                  />
                </div>
              }


              <h2 className="text-lg font-medium mt-8 text-gray-900">Dados pessoais</h2>

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
              <FormAddress />
              <FormPayment />
            </div>

            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                {/* <h3 className="sr-only">Items in your cart</h3>
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
                </ul> */}
                <dl className="py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">R$ {amount},00</dd>
                  </div>
                </dl>

                <div className="py-6 px-4 sm:px-6">
                  <button
                    onClick={(e) => handleRecharge(e, amount)}
                    type="submit"
                    className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                  >
                    Confirmar recarga
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
