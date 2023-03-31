import React, { useState, useEffect } from "react";
import getUser from "../hooks/getSession";
import api from '../pages/api/config'

export const CoinsContext = React.createContext({});

export const CoinsProvider = (props) => {

    const [coins, setCoins] = useState(0);

    useEffect(() => {
        if(getUser().token){
          api.post("/getCoins", {
            userData: {
              email: getUser().email
            }
          }).then((response) => {
            const coinsQtd = response.data.coinsTotal - response.data.coinsDonated
            setCoins(coinsQtd)
            localStorage.setItem('coins', coinsQtd);
          }).catch((err) => {
              console.log(err)
          });
        }
    }, []);
    
    return(
        <CoinsContext.Provider value={{coins, setCoins}}>
            {props.children}
        </CoinsContext.Provider>
    )
}

export const useCoins = () => React.useContext(CoinsContext);