async function getBaseEmail(senderName:string):Promise<string> {
    let base = await getHeaderText();

    base += `Olá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "\n estou deixando o meu curriculo aqui";

    return base;
}

async function getHeaderText():Promise<string> {
    return "EMAIL PARA VOCE";
}

export { getBaseEmail }