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

    //Passo-4, criar a tabela de produtos (C - CREATE)
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

    //Passo-5, inserir dados na nossa tabela (Linhas)
    await db.exec(
        `
            INSERT INTO produtos (nome, categoria, quantidade, preco) VALUES
                ('Smartphone Samsung G24', 'Eletrônicos', 50, 2500.00),
                ('Notebook Dell Inspiron', 'Informática', 15, 4200.50),
                ('Cadeira Gamer RGB', 'Móveis', 10, 1200.00)
        `
    );
    console.log("Tabela criada e estoque abastecido");

    //Passo-6, mostrar todos os produtos (R - READ)
    const inventario = await db.all(`SELECT * FROM produtos`);
    //console.log(inventario);
    console.table(inventario);

    //Passo-7, buscando um produto específico
    const produtoEspecifico = await db.all(`SELECT preco FROM produtos WHERE id = 2`);
    console.log(produtoEspecifico);

    //Passo-8, atualizar informações (U - UPDATE)
    //execute uma ação
    await db.run(`
            UPDATE produtos             --Atualize a tabela produtos
            SET preco = 4500.00         --Definindo que o notebook vai ser 4500.00
            WHERE id = 2                --Somente no id 2 que vai alterar o preço (sem o WHERE vai atualizar todos os preços)
        `);
    console.log("Preço atualizado com sucesso");

    //Consultar novamente se a alteração realmente aconteceu
    const produtoAtualizado = await db.get(`SELECT * FROM produtos WHERE id = 2`);
    console.log(produtoAtualizado);

    //Atualizando multiplos campos
    await db.run(`
            UPDATE produtos
            SET preco = 5100.23,
            quantidade = 30
            WHERE id = 2
        `);
    
    //Passo-9,remover um produto (D - DELETE)
    await db.run(`
            DELETE FROM produtos
            WHERE id = 3
        `);

    //Inserindo novo produto
    await db.exec(`
            INSERT INTO produtos (nome, categoria, quantidade, preco) VALUES
                ("mouse", "informatica", 10, 40.00)
        `);

};

criarBanco();