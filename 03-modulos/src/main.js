const product = require("./services/products");
const config = require("./services/config");
const { connectToDatabase, disconnectDataBase } = require("./services/database");


async function main() {
    console.log("Produtos:");
    product.getFullName(1, "linguiça toscana");
    connectToDatabase("PostgreSQL");
    console.log(config);
}


main();