//Importa o framework Express que foi instalado pelo npm
//Aqui estamos dizendo: "Quero usar o Express dentro deste arquivo"
const express = require('express');

//Cria a aplicação (o servidor)
//É como se estivessemos ligado a máquina do servidor
//À partir daqui, a variavel "app" vai controlar tudo
const app = express();

//Criação de uma rota principal do tipo GET
//'/' -> significa a página principal (rota raiz)
//(req, res) são objetos de requisição e resposta
app.get('/', (req, res) => {
    //Envia uma resposta para o navegador
    //Se não enviar resposta (res), o navegador fica carregando infinitamente
    res.send('Olá mundo!');
});

//Define a porta onde o servidor vai rodar
//Outras portas que são seguras: 3001 - 3002 - 4000 - 5000
const PORT = 3000;

//Iniciar o servidor
//Dizemos: escute a porta 3000
//Quando o servidor iniciar, executa essa função e mostra a mensagem no terminal
app.listen( PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});