function formatCurrent(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");
}

export default formatCurrent
