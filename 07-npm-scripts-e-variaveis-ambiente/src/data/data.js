async function connectDatabase(user, password) {
    if(user === "naruto" && password === "uzumaki"){
        console.log("conectado ao banco de dados com sucesso!");
    }else{
        console.log("falha de login, não foi possivel se conectar ");
    }
}

export