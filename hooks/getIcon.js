import React from 'react';
import {
    BsCurrencyDollar,
    BsBookmarkHeart,
    BsPeople,
    BsSuitHeart
} from "react-icons/bs";

import { GoQuote } from "react-icons/go";

const getIcon = ( icon, classname, color ) => {
    if (!icon) return null

    switch (icon) {
        case 'Heart':
            return <BsSuitHeart className={classname} fill={color} />
            break;
        case 'Dolar':
            return <BsCurrencyDollar className={classname} fill={color} />
            break;
        case 'People':
            return <BsPeople className={classname} fill={color} />
            break;
        case 'Bookmark Heart':
            return <BsBookmarkHeart className={classname} fill={color} />
            break;
    }

}

export default getIcon