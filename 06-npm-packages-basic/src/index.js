import chalk from "chalk";
import logSymbols from "log-symbols";

console.log("Eu gosto de comer");
console.log(chalk.black.bold("MACARRÃO"));
console.log(logSymbols.success, "sucesso");
console.log(logSymbols.warning, "perigo");
console.log(logSymbols.error, "erro");
console.log(logSymbols.info, "informação");

// npm i [nome-do-pacote] -D ----------> dev dependences (ficam só no ambiente de desenvolvimento)
// npm i [nome-do-pacote] -----------> dependencias

// npm uninstall [nome-do-pacote]