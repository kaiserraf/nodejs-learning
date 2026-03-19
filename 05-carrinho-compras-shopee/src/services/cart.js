// quais ações meu carrinho pode fazer

// CASOS DE USO

// -> adicionar um item
async function addItem(userCart, item) {
    userCart.push(item); // .push -> adiciona item no final do array e retorna novo tamanho
}

// -> deletar um item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// -> remover um item
async function removeItem(userCart, item) {

    // encontra o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    // se não encontrar nada
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    // item > 1 subtrair
    if(userCart[indexFound].amount > 1){
        userCart[indexFound].amount -= 1;
        return;
    }

    // item == 1 excluir
    if(userCart[indexFound].amount == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Shopee Cart List: ");
    userCart.forEach((item, index) =>{
        console.log(`${index+1} |${item.name} | R$${item.price} | ${item.amount} | Subtotal: ${item.subtotal()}`);
        // coloca () depois de .subtotal, pq subtotal é uma função
    })
}

// -> calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    // O método .reduce() no JavaScript é uma função de alta ordem
    // (High-Order Function) usada para reduzir os elementos de um array
    // a um único valor. Ele percorre o array, aplicando uma função de callback
    // (acumulador e valor atual) para somar, concatenar ou transformar dados em um resultado final,
    // como um número, objeto ou novo array. 
    console.log(result);
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}