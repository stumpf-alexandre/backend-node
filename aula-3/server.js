//importando express
const express = require("express");

//criando o servidor
const app = express();

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

//verbo POST é usado para enviar dados do cliente para o servidor
app.post("/filmes", (req, res) => {
    //criar um novo filme(objeto)
    const novoFilme = {
        id: filmes.length + 1, //gerando um id automatico, conforme o tamanho da array
        titulo: "Olhos Famintos",
        genero: "Terror",
    };

    filmes.push(novoFilme); //metodo para adicionar o filme no final da array
    res.json(novoFilme);
});


//-----------------------------------------
//Gambiarra do bem para fins didaticos
//-----------------------------------------
app.get("/criar-filmes", (req, res) => {
    const novoFilmeTeste = {
        id: filmes.length + 1,
        titulo: "Faces da Morte",
        genero: "Terror",
    };
    filmes.push(novoFilmeTeste);
    res.json(novoFilmeTeste);
});