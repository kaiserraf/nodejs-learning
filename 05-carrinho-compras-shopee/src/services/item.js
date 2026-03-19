// CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, price, amount) {
    return{
        name, 
        price,
        amount,
        subtotal: () => price * amount,
    };
}


export default createItem; // quando for exportar não coloca () depois da função