import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.bgWhite.black("escolha a ferramenta (1 - QR Code | 2 - Password)"),
        pattern : /^[1-2]+$/,
        message: chalk.red.bold("Escolha apenas entre 1 e 2"),
        require: true
    },
];

export default mainPrompt;