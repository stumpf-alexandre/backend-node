//Passo 1, importar o músculo (sqlite3) e o cérebro (sqlite)
const sqlite3 = require("sqlite3");//Motor(musculo), quem realmente vai mexer nos arquivos
const {open} = require("sqlite");//Cérebro, é a ferramenta que nos ajuda a dar ordens modernas


//Passo 2, criar uma função assincrona, para que uma função seja executada por inteira, e só depois que terminar inicie uma outra função
const criarBanco = async() => {
    //Passo 3, abrir (ou criar) o arquivo do Banco de Dados
    const db = await open({
        filename: "./database.db", //procurar o arquivo database.db. O endereço é onde o arquivo vai morar "./". Se ele não achou o database.db, ele vai criar um automaticamente.
        driver: sqlite3.Database //Qual o motor tá sendo usado para essa tarefa.
    });

    //Passo 4, criando a tabela.
    //Espere o banco de dados executar o comando SQL e construa a nossa tabela.
    await db.exec(
        `CREATE TABLE IF NOT EXISTS usuario(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT
        )`,
    );
    //Passo 5, Grito de sucesso!!
    console.log("Banco de dados e tabela prontos!!!");
};

criarBanco();