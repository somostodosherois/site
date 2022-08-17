import React, { useContext } from "react";

import { BsTrash } from "react-icons/bs";

// import { useHistory } from "react-router-dom";
import classNames from "classnames";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  toggleCartPopup
} from "../../contexts/cart";

import formatCurrent from '../../hooks/formatCurrent'

const CartPreview = ({ cartTotal }) => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  // const history = useHistory();

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
    // history.push("/checkout");
  };

  return (
    <div className={classNames("cart-preview", { active: isCartOpen }) + ''}>

      {items && items.length !== 0 &&
        <>
          <ul className="cart-items">
            {items.map((product) => {
              return (
                <li className="cart-item p-2" key={product.id+'-'+product.hero.id}>
                  <img className="product-image" src={product.hero.image} />
                  <img className="product-image" src={product.image} />
                  <div className="text-base ml-4 min-w-[35%]">
                    <p className="">{product.name}</p>
                    <p className="text-sm text-gray-600">{formatCurrent(product.price)}</p>
                  </div>
                  <div className="product-total ml-4">
                    <p className="text-sm text-gray-600">
                      {`${product.quantity} ${product.quantity > 1 ? "Unds." : "Und."
                        }`}
                    </p>
                    <p className="text-md text-green-600">{formatCurrent(product.quantity * product.price)}</p>
                  </div>
                  <BsTrash className="ml-2 mt-4 h-5 w-5 cursor-pointer" fill="red" onClick={() => handleRemove(product.id+'-'+product.hero.id)} />
                </li>
              );
            })}
          </ul>

          <div className="text-lg p-4 text-right">Total: <strong className="text-blue-700">{formatCurrent(cartTotal)}</strong></div>
          <center>
            <div>
              <a
                className="inline-flex px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 hover:text-white"
                onClick={handleProceedCheckout}
              >
                Prosseguir doação
              </a>
            </div>
          </center>
        </>
      }

      {items && items.length === 0 &&
        <div className="relative">
          <div className="absolute m-0 p-8">
            <div className="empty-cart">
              <img src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="empty-cart" />
              <h2 className="text-xl text-center">Seu carrinho está vazio!</h2>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default CartPreview;
