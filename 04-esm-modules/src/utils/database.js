async function connectToDatabase(dataName) {
    // lógica de conexão
    console.log(`conectado ao banco ${dataName}`);
}

async function disconnectDatabase(dataName) {
    console.log(`desconectado do banco ${dataName}`);
}


// exporta mais de uma função
export {
    connectToDatabase,
    disconnectDatabase,
}