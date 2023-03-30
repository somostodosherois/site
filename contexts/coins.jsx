import React, { useState, useEffect } from "react";
import getUser from "../hooks/getSession";

export const CoinsContext = React.createContext({});

export const CoinsProvider = (props) => {

    const [coins, setCoins] = useState(0);

    useEffect(() => {
        if(getUser().token){
          api.post("/getCoins", {
              email: getUser().id
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