//passo-1, importar o motor do banco(sqlite 3) e o tradutor (open)
const sqlite3 = require("sqlite3");
const {open} = require("sqlite");

//Passo-2, criar uma função assincrona para gerenciar o banco
const criarBanco = async() => {
    //Passo-3, abrir (ou criar) o arquivo do banco de dados
    const db = await open({ //o await (espere) diz para o node esperar o banco abrir antes de continuar
        filename: "./database.db", //nome do arquivo que sera criado
        driver: sqlite3.Database // o motor que vai realizar as operações
    });

    //Passo-4, criar a tabela de produtos
    await db.exec(
        `CREATE TABLE IF NOT EXISTS produtos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,   --RG único e automático
            nome TEXT,                              --Texto para o nome
            categoria TEXT,                         --Texto para categoria
            quantidade INTEGER,                     --Números inteiros
            preco REAL                              --Números decimais (centavos)
        )`,
    );
    console.log("Banco de dados e tabela prontos!!!");

    //Passo-5, inserir dados na nossa tabela (Linhas) - C - Create - INSERT
    await db.exec(
        `
            INSERT INTO produtos (nome, categoria, quantidade, preco) VALUES
            ('Smartphone Samsung G24', 'Eletrônicos', 50, 2500.00),
            ('Notebook Dell Inspiron', 'Informática', 15, 4200.50),
            ('Cadeira Gamer RGB', 'Móveis', 10, 1200.00)
        `
    );
    console.log("Tabela criada e estoque abastecido");

    //Passo-6, buscar todos os produtos (R - READ)
    const inventario = await db.all(`SELECT * FROM produtos`);
    //console.log(inventario);
    console.table(inventario);

};

criarBanco();