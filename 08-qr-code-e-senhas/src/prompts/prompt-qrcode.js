import chalk from "chalk";

const promptQRCode = [
    {
        name: "link", // nome da variavel que vai ser salvo o input
        description: chalk.yellow("Digite o link para gerar o QR Code: ") // mensagem pro usuario  
    },
    {
        name: "type",
        description: chalk.yellow("escolha o formato do QR Code(1 - Normal | 2 - Terminal):"),
        pattern:  /^[1-2]+$/, // limita as opções de entrada para 1 e 2
        message: chalk.red.bold("Escolha apenas entre 1 e 2"), // mensagem de erro
        required: true // torna a pergunta obrigatória
    }
];


export default promptQRCode;