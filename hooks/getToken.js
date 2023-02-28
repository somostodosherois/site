import React, { useEffect } from 'react';

const getToken = () => {
    useEffect(() => {
        const tokenString = sessionStorage.getItem('token') || undefined;

        return tokenString
    })
}

export default getToken