import React, { useState } from "react";

export const CoinsContext = React.createContext({});

export const CoinsProvider = (props) => {

    const [coins, setCoins] = useState(0);
    
    return(
        <CoinsContext.Provider value={{coins, setCoins}}>
            {props.children}
        </CoinsContext.Provider>
    )
}

export const useCoins = () => React.useContext(CoinsContext);