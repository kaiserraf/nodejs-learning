import * as user from './users';

async function main() {
    const readUser = await user.buscarUsuarioPorId(1);
    console.log(readUser);

    const insertUser = await user.criarUsuario("Rafael Machado", "emailpessoal@gmail.com");
    console.log(insertUser);
}

main();