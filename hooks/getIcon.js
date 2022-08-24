import React from 'react';
import {
    BsCurrencyDollar,
    BsBookmarkHeart,
    BsPeople,
    BsSuitHeart,
    BsGraphUp,
    BsLightbulb,
    BsThermometerHigh,
} from "react-icons/bs";

import { GoQuote } from "react-icons/go";

const getIcon = (icon, classname, color) => {
    if (!icon) return null

    switch (icon) {
        case 'Heart': case 'Propósito':
            return <BsSuitHeart className={classname} fill={color} />
            break;
        case 'Dolar':
            return <BsCurrencyDollar className={classname} fill={color} />
            break;
        case 'People': case '​Senso de Dono':
            return <BsPeople className={classname} fill={color} />
            break;
        case 'Bookmark Heart':
            return <BsBookmarkHeart className={classname} fill={color} />
            break;
        case 'Maturidade':
            return <BsThermometerHigh className={classname} fill={color} />
            break;
        case 'Desempenho':
            return <BsGraphUp className={classname} fill={color} />
            break;
        case 'Aprendizado':
            return <BsLightbulb className={classname} fill={color} />
            break;
    }

}

export default getIcon