import React, { useContext } from "react";
import { CartDispatchContext, addToCart } from "../../contexts/cart";

const Item = ({ item, index }) => {
    const { id, name, image, price, description } = item || {}
    const dispatch = useContext(CartDispatchContext);
  
    const handleAddToCart = () => {
      const product = { ...item, quantity: 1 };
      addToCart(dispatch, product);
    };

    return (
        <div className='grid p-4 border border-gray-200 justify-center' key={index}>
            <img src={image} />
            <span className='font-bold mt-4 mb-2'>{name}</span>
            {description
                ? <span className='text-sm text-blue-700'>{description}</span>
                : <span className='font-bold text-blue-700'>R$ {price},00</span>
            }
            {price !== '1' &&
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
                    // onChange={(e) => handleChange(e, id)} 
                />
            }
            <a
                href="#"
                onClick={handleAddToCart}
                className="inline-flex mt-4 items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
                Doar
            </a>
        </div> 
    )
}

export default Item