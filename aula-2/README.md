## Instalando Node e Express:
* No terminal do gitbash, dentro da pasta raiz do projeto,  para instalar o node-js, digite `npm init -y`. Transforma uma pasta comum em um projeto node. (Cria uma pasta package.json com suas dependencias).
* Para instalar o express digite `npm install express`. (Cria as pastas package-lock.js, node_modules e atualiza o package.js)
* Criando um arquivo digite `touch server.js` e de um espaço e digite `.gitignore`. (cria as pastas server.js e gitignore)
* Comando para testar o servidor: "node server.js"


![](../img/2.png)
# Nodemon
## O que é o nodemon?
O Nodemon é uma ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente a aplicação Node.js.

Ele é usado apenas em ambiente de desenvolvimento.

## 🧠 O problema:
Sem nodemon:
Toda vez que altera código → precisa parar e rodar de novo

alterou → parar → rodar

## 💡 Solução: nodemon
Nodemon reinicia o servidor automaticamente.

alterou → reinicia sozinho

## Instalação:
`npm install nodemon --save-dev`

📌 --save-dev porque é dependência de desenvolvimento.

## Rodando: 
`npx nodemon server.js`

✔ Evita precisar parar e rodar o servidor manualmente.

![](../img/nodemon.png)

#### [Documentação nodemon](https://www.npmjs.com/package/nodemon)


## 🛣 Rotas
Rotas são os caminhos que o cliente pode acessar dentro do servidor.

Cada rota responde a uma requisição específica.
Exemplo:

```
app.get("/", (req, res) => {
    res.send("Página inicial")
})
```

O que está acontecendo aqui?
app.get → estamos criando uma rota que responde ao verbo GET

"/" → caminho da rota (rota principal)

(req, res) → função executada quando alguém acessa essa rota

res.send() → envia a resposta para o cliente

## 🧩 Estrutura de uma rota


app.metodo('caminho', função)


Uma rota é uma combinação entre:

* Caminho (URL)

* Verbo HTTP

* Função que será executada


```
app.METODO("/caminho", (req, res) => {
  // lógica
})
```


## 🔎 Entendendo cada parte:
METODO → GET, POST, PUT, DELETE…

"/caminho" → endereço da rota

req → requisição (o que o cliente envia)

res → resposta (o que o servidor devolve)

## 🧠 Visual Mental
Quando alguém acessa:

`http://localhost:3000/`

### O servidor:
* Recebe a requisição (req)

* Executa a função da rota

* Envia uma resposta (res)