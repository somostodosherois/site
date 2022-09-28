import React, { useContext, useState, useEffect } from "react";
import { BsCart } from "react-icons/bs";

import CartPreview from "../CartPreview/CartPreview";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "../../contexts/cart";

import { GiTwoCoins } from "react-icons/gi";
import { useCoins } from "../../contexts/coins";

const NavBar = (props) => {
  const [navbar, setNavbar] = useState(false);
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);


  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  const { coins, setCoins } = useCoins();

  useEffect(() => {

    const coinsQtd = localStorage.getItem('coins');

    if (coinsQtd) {
      setCoins(coinsQtd);
    }
  }, []);

  return (
    <nav className="w-full bg-red-600 shadow fixed z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 lg:block">
            <a href="/">
              <img
                className="h-9 sm:h-12 w-auto pb-1"
                src='https://sth.org.br/wp-content/themes/sth/images/logo.svg'
              />
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-black">
                <a href="/sobre-nos">Sobre nós</a>
              </li>
              <li className="text-white hover:text-black">
                <a href="/portal-transparencia">Transparência</a>
              </li>
              <li className="text-white hover:text-black">
                <a href="/missoes">Missões</a>
              </li>
              <li className="text-white hover:text-black">
                <a href="/ajuda">Ajuda</a>
              </li>
            </ul>

            <div className="m-3 flex space-x-6 lg:hidden inline-block">
              <a
                href="/login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-red-400 rounded-md shadow hover:bg-gray-800"
              >
                Login
              </a>
              <a
                href="/doar"
                className="inline-block w-full px-4 py-2 text-center text-red-600 bg-white rounded-md shadow hover:bg-red-100"
              >
                Doar
              </a>
              <div className="coins">
                <a className="coins-icon" href="#">
                  <div className="flex">
                    <span className="coins text-white mt-1 mr-2">{coins}</span>
                    <GiTwoCoins className="h-8 w-6" fill="white" aria-hidden="true" />
                  </div>
                </a>
              </div>
              {/* <div className="cart">
                <a className="cart-icon" href="#" onClick={handleCartButton}>
                  <div className="flex">
                    <span className="cart-count text-white mt-1 mr-2">{cartQuantity ? cartQuantity : 0}</span>
                    <BsCart className="h-8 w-8" fill="white" aria-hidden="true" />
                  </div>
                </a>
                <CartPreview cartTotal={cartTotal} />
              </div> */}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:flex">
          <a
            href="/login"
            className="px-4 py-2 text-white bg-red-400 rounded-md shadow hover:bg-gray-800"
          >
            Login
          </a>
          <a
            href="/"
            className="px-4 py-2 text-red-600 bg-white rounded-md shadow hover:bg-red-100"
          >
            Doar
          </a>
          <div className="coins mt-1">
            <a className="coins-icon" href="#" >
              <div className="flex">
                <span className="coins text-white mt-1 mr-2">{coins}</span>
                <GiTwoCoins className="h-8 w-6" fill="white" aria-hidden="true" />
              </div>
            </a>
          </div>
          {/* <div className="cart mt-1">
            <a className="cart-icon" href="#" onClick={handleCartButton}>
              <div className="flex">
                <span className="cart-count text-white mt-1 mr-2">{cartQuantity ? cartQuantity : 0}</span>
                <BsCart className="h-8 w-8" fill="white" aria-hidden="true" />
              </div>
            </a>
            <CartPreview cartTotal={cartTotal} />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar