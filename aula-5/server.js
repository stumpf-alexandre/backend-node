//importando express
const express = require("express");

//criando o servidor
const app = express();

app.use(express.json());//Middleware fica entre a requisição e a resposta, ele interpreta em formato JSON, ja que o express não entende em JSON

//criando uma rota principal ( / )
//extrutura: servidor.verbo("caminho", (req, res) => {função});

//req entra no servidor
//res sai do servidor

app.get("/", (req, res) => {
    res.send("API de filmes");
});

//criação da porta
const PORT = 3000;

//servidor(app), escute(listen) a nossa porta(PORT).E faça tal coisa: Mostre no localhost a nossa porta 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//criando um mini banco de dados, array de objetos[{}, {}, {}]
const filmes = [
    {
        id: 1,
        titulo: "Interestelar",
        genero: "Ficção",
    },
    {
        id: 2,
        titulo: "Velozes e Furiosos 5",
        genero: "Ação",
    },
    {
        id: 3,
        titulo: "As Branquelas",
        genero: "Comédia",
    },
    {
        id: 4,
        titulo: "O PoderosoChefão",
        genero: "Drama",
    },
    {
        id: 5,
        titulo: "Missão Impossivel",
        genero: "Ação",
    },
    {
        id: 6,
        titulo: "Até que a sorte nos separe",
        genero: "Comédia",
    },
    {
        id: 7,
        titulo: "Oblivion",
        genero: "Ficção",
    }
];

//criando uma rota para listar os filmes ( /filmes )
app.get("/filmes", (req, res) => {
    res.json(filmes);
});

//-----------------------------------------
//Parametros de rota
//-----------------------------------------
//rota mais dinamica atravez do ID
//lista um filme, dependendo do id que for passado pela URL
app.get("/filmes/:id", (req, res) => {
    const idPegaDaURL = Number(req.params.id); //essa variavel guarda e converte os id de string para numerais
    const filmeEncontrado = filmes.find((filmes) => filmes.id === idPegaDaURL);

    //retorne em formato JSON
    res.json(filmeEncontrado);
});

//-----------------------------------------
//Cadastrando um novo filme
//-----------------------------------------
app.post("/filmes", (req, res) => {
    //adiciona um objeto no final do array filmes
    //filmes.push(req.body);
    //resposta enviada de uma menssagem que confirma o cadastro do filme
    //res.send("Filme cadastrado com sucesso");
    const novoFilme = {
        id: filmes.length + 1, //tornando mais dinâmico a geração do id
        titulo: req.body.titulo,
        genero: req.body.genero
    }
    //adiciona o novo filme no final da lista
    filmes.push(novoFilme);
    res.send(`O filme ${novoFilme.titulo}, foi cadastrado com sucesso!!!`);
});