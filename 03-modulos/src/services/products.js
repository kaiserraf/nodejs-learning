// todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    console.log(`${codeId} | ${productName}`);
}

async function getProductLabel(productName) {
    console.log(`product ${productName}`);
}

module.exports = {
    getFullName,
    getProductLabel,
};