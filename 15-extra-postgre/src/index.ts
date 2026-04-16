import * as user from './users';

async function main() {
    const readUser = await user.buscarUsuarioPorId(1);
    console.log(readUser);
}

main();