import React, { useContext, useState } from "react";
import { CartDispatchContext, addToCart } from "../../contexts/cart";

import { useCoins } from "../../contexts/coins";
import swal from 'sweetalert';
import Router from 'next/router';

const Item = ({ item, index, hero }) => {
    const { id, name, image, price, description } = item || {}
    const dispatch = useContext(CartDispatchContext);

    const handleChange = (e) => {
        item.price = e.target.value
    }
  
    const handleAddToCart = () => {
      const product = { ...item, quantity: 1, hero: hero };
      addToCart(dispatch, product);
    };

    const { coins, setCoins } = useCoins();

    const handlePurchaseItem = () => {

        const product = { ...item, quantity: 1, hero: hero };
        const total = (coins - product.price); 

        if(total < 0){
            swal('Quantidade de moedas insuficiente. Deseja recarregar?')
            .then((value) => {
                if(value){
                    Router.push('/pagamento')
                }
            })
        }else{
            setCoins(total);
            localStorage.setItem('coins', total);
            swal('Doação realizada com sucesso!')
        }
    };

    const handleAlert = () => {
        swal('Confirmar doação', 'Deseja confirmar a doação?')
        .then((value) => {
            if(value){
                handlePurchaseItem();
            }
        })
    }

    return (
        <div className='grid p-4 border border-gray-200 justify-center' key={index}>
            <img src={image} />
            <span className='font-bold mt-4 mb-2'>{name}</span>
            {description
                ? <span className='text-sm text-blue-700'>{description}</span>
                : <span className='font-bold text-blue-700'>R$ {price},00</span>
            }
            {id === '4' &&
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
                    type='text'
                    placeholder="R$ 0,00"
                    onChange={(e) => handleChange(e)} 
                />
            }
            <a
                href="#"
                // onClick={handleAddToCart}
                onClick={handleAlert}
                className="inline-flex mt-4 items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
                Doar
            </a>
        </div> 
    )
}

export default Item