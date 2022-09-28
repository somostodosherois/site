function diffDates(date) {
    const dateI = Date.now()
    const dateF = new Date(date)
    const diffTime = Math.abs(dateF - dateI);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays
}

export default diffDates
