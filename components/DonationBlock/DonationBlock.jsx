import React, { useState } from 'react'
import { FcOk } from "react-icons/fc";
import Item from '../Item/Item';


const items = [
  {
    id: '1',
    name: 'Escudo STH',
    image: 'https://sth.org.br/images/itens/escudo.png',
    price: '10'
  },
  {
    id: '2',
    name: 'Capa',
    image: 'https://sth.org.br/images/itens/capa.png',
    price: '30'
  },
  {
    id: '3',
    name: 'Colete Protetor',
    image: 'https://sth.org.br/images/itens/colete-anna-karla.png',
    price: '45'
  },
  {
    id: '4',
    name: 'Caixa Surpresa',
    image: 'https://sth.org.br/images/itens/secreto.png',
    description: 'E você quem determina o valor',
    price: '0'
  },
  {
    id: '5',
    name: 'Baú da Esperança',
    image: 'https://sth.org.br/images/itens/matador.gif',
    description: 'Finalize esta missão!',
    price: '1'
  }
]

const DonationBlock = ({ hero }) => {

  return (
    <div className='max-w-7xl mx-auto px-4 space-y-12'>
      <dd className='mt-12'>
        <p className="text-xl md:text-2xl font-bold text-red-600">Doe um item virtual que simboliza seu carinho e apoio à missão. 💝</p>
      </dd>
      <div className='space-x-0 space-y-0 grid sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6'>
        {items.map((item, index) => (
          <Item item={item} index={index} hero={hero} />
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