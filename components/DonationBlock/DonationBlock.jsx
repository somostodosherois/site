import React, { useState } from 'react'
import { FcOk } from "react-icons/fc";


const items = [
  {
    name: 'Escudo STH',
    image: 'https://sth.org.br/images/itens/escudo.png',
    value: '10'
  },
  {
    name: 'Capa',
    image: 'https://sth.org.br/images/itens/capa.png',
    value: '30'
  },
  {
    name: 'Colete Protetor',
    image: 'https://sth.org.br/images/itens/colete-anna-karla.png',
    value: '45'
  },
  {
    name: 'Caixa Surpresa',
    image: 'https://sth.org.br/images/itens/secreto.png',
    description: 'E você quem determina o valor',
    value: '0'
  },
  {
    name: 'Baú da Esperança',
    image: 'https://sth.org.br/images/itens/matador.gif',
    description: 'Finalize esta missão!',
    value: '1'
  }
]

const DonationBlock = () => {

  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    setQuantity({ quantity: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='max-w-7xl mx-auto px-4 px-6 space-y-12'>
      <div className='space-x-0 space-y-0 grid sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 pt-20'>
        {items.map(({ name, image, value, description }, index) => (
          <div className='grid bg-gray-100 p-4 justify-center' key={index}>
            <img src={image} />
            <span className='font-bold mt-4 mb-2'>{name}</span>
            {description
              ? <span className='text-sm text-blue-700'>{description}</span>
              : <span className='font-bold text-blue-700'>R$ {value},00</span>
            }
            {value !== '1' &&
              <input
                class="form-control
                block 
                w-full
                px-3
                py-1.5
                mt-4
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                type='number'
                onChange={handleChange} />
            }
            <a
              href="#"
              onClick={() => handleSubmit()}
              className="inline-flex mt-4 items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Doar
            </a>
          </div>
        ))}
      </div>

      <div className=''>
        <div className='flex'>
          <FcOk className="h-5 w-5 mt-1 mr-2" aria-hidden="true" />
          <p className='w-full'> Não cobramos taxa das doações. </p>
        </div>

        <div className='flex '>
          <FcOk className="h-5 w-5 mt-1 mr-2" aria-hidden="true" />
          <p className='w-full'> <b>100% do valor doado</b> é direcionado para as missões. </p>
        </div>

        <div className='flex'>
          <FcOk className="h-5 w-5 mt-1 mr-2" aria-hidden="true" />
          <p className='w-full'> Nós pagamos <b>diretamente</b> o tratamento médico ou equipamento que a criança necessita. </p>
        </div>
      </div>
    </div>
  )
}

export default DonationBlock