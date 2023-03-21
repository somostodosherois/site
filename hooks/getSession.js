const getUser = () => {
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('token') || false;
        const email = sessionStorage.getItem('email') || false;
        const id = sessionStorage.getItem('id') || false;

        return { token, email, id }
    }

    return false
}

export default getUser