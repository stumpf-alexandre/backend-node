//Importações
const express = require('express'); //framework que cria o servidor e as rotas
const {criarBanco} = require('./database'); //a chave que vai abrir a conexão com o banco de dados

const app = express(); //inicialização: ligando o motor do servidor
app.use(express.json()); //tradutor: configura o express para entender dados no formato JSON
const PORT = 3000;

//criando a rota principal '/', rota raiz
app.get('/', (req, res) => {
    res.send(`
            <body>
                <h1>Zela Cidade</h1>
                <h2>Gestão de Problemas Urbanos</h2>
                <p>Endpoint que leva aos incidentes cadastrados: <a href="http://localhost:3000/incidentes">/incidentes</a></p>
            </body>
        `); //envia uma resposta simples(texto, html, json)

});

//ligando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//rota de listagem - para buscar todos os problemas registrados
app.get('/incidentes', async (req, res) => {
    const db = await criarBanco() //chamamos a função do outro arquivo. O await "aguarde", pois o banco precisa de tempo para abrir
    const listaIncidentes = await db.all(`SELECT * FROM incidentes`);
    res.json(listaIncidentes); //entrega esses dados para o cliente no formato JSON
});