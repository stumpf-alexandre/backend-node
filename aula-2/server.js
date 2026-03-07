//importa o express. Basicamente está dizendo: uze o framework express que foi instalado pelo NPM
const express = require("express");

//o servidor vai ser reconhecido como app = recebe o express (ferramenta para facilitar na criação do servidor e das rotas)
const app = express();//criando nosso servidor usando o Express


//-----------------------------------------
//Banco de dados ficticio para aparecer na minha rota usuários
//-----------------------------------------
const usuarios = [{
    id: 1,
    nome: "Fernanda",
    pet: "Théo",
}, {
    id: 2,
    nome: "Karinne",
    pet: "Lua",
}]

//-----------------------------------------
//Criação das rotas (caminhos)
//-----------------------------------------

//sintaxe para uma rota
//servidor.metodo("caminho", (req, res) => {});

//GET é usado para BUSCAR dados
// "/" indica rota inicial
// req faz a requisição ou o pedido
//res faz a resposta, apareça para o cliente/tela

//criando rota inicial
app.get("/", (req, res) => {
    res.send("Aula 2 - Node e Express com nodemon"); //envia uma resposta para o navegador
});

//criando rota /usuarios, para listar usuários
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});


//-----------------------------------------
//Criação de porta
//-----------------------------------------

//definindo uma porta pro servidor rodar
const PORT = 3000; //é na porta 3000 que o servidor vai rodar

//servidor (app), escute (listen) a nossa porta (PORT) e execute a função
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
    console.log(`http://localhost:${PORT}/usuarios`);
});

