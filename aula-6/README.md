## Instalando Node e Express:
* No terminal do gitbash, dentro da pasta raiz do projeto,  para instalar o node-js, digite `npm init -y`. Transforma uma pasta comum em um projeto node. (Cria uma pasta package.json com suas dependencias).
* Para instalar o express digite `npm install express`. (Cria as pastas package-lock.js, node_modules e atualiza o package.js)
* Para instalar o nodemon `npm install nodemon --save-dev`, va até a pasta package.json, no script vai tar escrito:
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
* escreva no script junto com test:
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon database.js"
  },
  ```
* Instalando o sqLite `npm install sqlite3 sqlite`
* Criando um arquivo digite `touch server.js`, de um espaço e digite `.gitignore` e  de um espaço e digite `database.js`. (cria as pastas server.js, .gitignore e database)
* Comando para testar o servidor vai trocar de `node server.js"` para `npm run dev`, para fazer o nodemon ficar escutando o servidor caso haja alguma alteração

__________________________________________________________________

![](../img/6.jpg)


# 💾 Introdução a Banco de Dados
Um banco de dados é um sistema criado para armazenar informações de forma organizada e permanente.
### Essas informações podem ser:
* usuários
* produtos
* filmes
* pedidos
* mensagens

### Exemplos de uso no mundo real:
* Netflix → usuários, filmes, histórico
* Instagram → usuários, seguidores, posts
* E-commerce → clientes, pedidos, produtos

Sem banco de dados, essas aplicações não funcionariam.

### Um sistema de streaming precisa guardar:
id_________________________titulo__________________________genero
1_________________________Matrix_________________________Ficção
2_________________________Shrek_________________________Animação
3_____________________Invocação do Mal____________________Terror

#### Esses dados ficam armazenados em um banco de dados, permitindo que o sistema:
* salve informações
* consulte dados
* atualize informações
* exclua registros

## 🧾 Banco de dados relacional
Um __banco de dados relacional__ organiza os dados em __tabelas__.

Essas tabelas se parecem muito com __planilhas do Excel__.

Exemplo de tabela de filmes:

id___________________________titulo___________________________genero
1___________________________Matrix__________________________Ficção
2___________________________Titanic__________________________Romance
3___________________________Shrek__________________________Animação

Cada tabela possui:

* __colunas__ → características do dado

* __linhas__ → registros armazenados

## 📑 Tabelas, linhas e colunas
### Tabela
É como uma planilha do Excel.
Armazena um conjunto de dados organizados.

id_____________________________titulo__________________________genero
1_____________________________Matrix__________________________Ficção
2_____________________________Titanic_________________________Romance

Cada tabela possui:

* __colunas__ → características do dado

* __linhas__ → registros armazenados

### Coluna 
Representa uma característica, os tipos de informação.

Exemplo:

id______________________________titulo__________________________genero

### Linha 
Representa um item individual dentro da tabela. Cada linha representa um registro no banco (filme armazenado.).

Exemplo:

id_______________________________titulo_________________________genero
1_______________________________Matrix________________________Ficção

## 🔑 Chave primária (Primary Key)
A __chave primária__ é um campo que __identifica cada registro de forma única__. É o identificador único de cada registro. Normalmente usamos o __id__.

Exemplo:

id_______________________________titulo_________________________genero
1_______________________________Matrix________________________Ficção
2_______________________________Titanic________________________Romance

O ``id`` é a chave primária porque não se repete.

Ele garante que cada registro seja __único dentro da tabela__.

## 🎲 Por que usar Banco de Dados em uma API?
#### Até agora nas aulas usamos arrays para armazenar dados.
Exemplo:
```
const filmes = [
  { id: 1, nome: "Matrix" },
  { id: 2, nome: "Shrek" }
];
```

O problema é que __esses dados ficam apenas na memória da aplicação__.

Se o servidor reiniciar:

❌ os dados são perdidos.

Com um __banco de dados__, os dados ficam __salvos permanentemente__.

Mesmo que o servidor desligue, as informações continuam armazenadas.

Por isso praticamente __toda API real utiliza um banco de dados__.

## 👾 SQLite
#### O SQLite é um banco de dados relacional e extremamente leve. A principal característica dele é que não precisa de um servidor separado. Em vez disso, ele funciona como um arquivo dentro do projeto.
#### Exemplo:
```
database.db
```

#### Esse arquivo contém todas as tabelas e dados do sistema.
### Vantagens do SQLite
 

* Fácil de instalar, não precisa instalar servidor separado

* Leve

* Simples

* Ideal para aprendizado

* Usado em muitos projetos reais

* Funciona atravpes de um único arquivo

Por isso ele é __muito usado para ensino e protótipos__.

Ele é ideal para aprendizado porque permite entender banco de dados sem complexidade inicial.

## 🪛 Preparando o ambiente
Antes de começar, precisamos instalar algumas dependências.

### Instalar SQLite no projeto
```
npm install sqlite3
```

### Biblioteca para facilitar consultas
```
npm install sqlite
```

## Criando nosso primeiro Banco de Dados
database.js : Arquivo onde vamos escrever as ordens para o banco ser criado.

Agora vamos criar um banco de dados SQLite.

Exemplo de conexão:
```
const sqlite3 = require("sqlite3"); 
const { open } = require("sqlite"); 

const criarBanco = async () => {

  const db = await open({
    filename: "./database.db", 
    driver: sqlite3.Database, 
  });
  
};

criarBanco();
```

Aqui estamos:

* criando um arquivo database.db

* conectando nossa aplicação ao banco

__________________________________________________________________

#### 1º Passo: Chamar o motor
__const sqlite3 = require('sqlite3');__  
importando o __sqlite3__, que é o "músculo" do nosso banco.

É o pacote que realmente sabe como manipular arquivos no disco rígido.

Sem ele, o Node não tem força para mexer no banco.

#### 2º Passo: Chamar o tradutor
__const { open } = require("sqlite");__
__O que isso faz__: Estamos importando apenas a função open do pacote __sqlite__. Ela é o nosso "cérebro" ou tradutor.

Ela serve para que a gente consiga dar ordens ao motor de um jeito moderno, usando o await

#### 3º Passo: Criar a função de abertura (Arrow Function) ( ) ⇒ { }
__const criarBanco = async () => {__
__O que isso faz__: Criamos uma função chamada abrirBanco.

Usamos o async porque abrir um arquivo não é instantâneo;

o Node precisa de permissão para ser "assíncrono" e não travar enquanto o arquivo abre.

#### 4º Passo: Abrindo (ou Fabricando) o arquivo

```
async function criarBanco() {

    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });
```

__O que isso faz__: Esta é a linha onde a mágica acontece__.
* O await diz para o Node esperar o banco abrir antes de continuar.
* O filename diz o nome do arquivo. Se o Node não encontrar o database.db na pasta, ele cria o arquivo na hora.
* O driver avisa que o motor responsável por isso é o sqlite3 que chamamos lá no início.
* O arquivo .js (Javascript): É onde mora a inteligência. É ele quem diz: 'Salva isso', 'Busca aquilo', 'Soma esse valor'. Ele é o Cozinheiro
* O arquivo .db (Database): É o arquivo que o SQLite cria para ser a nossa Despensa. Ele não tem código dentro, ele tem tabelas com nomes, endereços e telefones.

## Criando nossa primeira Tabela
#### 5º Passo: Estrutura para criar tabela
Primeiro vamos entender __a estrutura básica para criar uma tabela no banco de dados__.
```
await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
    )
`);
```

__O que isso faz__: 
O db.exec envia __uma ordem de execução para o banco de dados__.

__O comando SQL diz basicamente__: 
"Crie uma tabela chamada usuários, mas só se ela não existir ainda" NOT EXISTS. 

Isso evita que o código dê erro caso você rode o programa mais de uma vez.

#### CREATE TABLE
Esse é o "Verbo" do SQL. 
__Significa__:  "Ei banco de dados, crie uma nova tabela para mim."

#### IF NOT EXISTS
Essa parte é uma __proteção contra erro__.

__Significa__: "Só crie essa tabela se ela ainda não existir."

Sem isso, se rodássemos o código duas vezes, o banco tentaria criar a mesma tabela novamente e geraria erro.

#### usuarios
Esse é o nome da tabela.

Podemos pensar nela como uma folha de dados onde vamos armazenar os registros.

#### 6º Passo: Definindo as Colunas (As regras da tabela)
Agora vamos definir __quais informações cada registro terá__.
```
await db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT
  )
`)
```

#### O que isso faz: 
Esse código cria a estrutura da tabela com três colunas:

### Entendendo cada parte
#### Await - significa Espere
Ele garante que o código só continue executando depois que o banco terminar essa operação.

Sem o await, o Node poderia tentar executar o próximo passo antes da tabela ser criada.

#### db.exec()
O .exec() serve para enviar comandos diretos ao banco de dados.

Ele é usado para comandos que alteram a estrutura do banco, como:

* criar tabelas

* deletar tabelas

* alterar tabelas

__Podemos pensar nele como__: "Banco de dados, execute essa ordem agora."

#### Entendendo a coluna ID
Vamos quebrar isso em partes.
```
id INTEGER PRIMARY KEY AUTOINCREMENT
```

Vamos quebrar isso em partes.

#### O que é o  id INTEGER PRIMARY KEY AUTOINCREMENT?
##### id
Esse é o nome da coluna.

Ele representa o identificador único de cada registro.

Podemos imaginar como se fosse o RG ou CPF do registro dentro da tabela.

Na maioria dos projetos, usamos id como padrão.

##### INTEGER
Esse é o tipo do dado.

Lembra que no JavaScript a gente tem o Number?

Aqui no banco, para números inteiros (1, 2, 3...), a gente chama de INTEGER.

Ele avisa ao banco: 'Nessa gaveta só entram números inteiros'.

__Exemplo de números válidos__:
```
1
2
3
100
```

Esse tipo avisa ao banco:

"Nessa coluna só podem entrar números inteiros."

##### PRIMARY KEY
Essa é a "chave primária" da tabela.

Isso avisa ao banco que esse número é único. Não podem existir dois usuários com o mesmo ID número 5. É o identificador exclusivo.

__Isso significa que__:

* cada registro precisa ter um valor único

* esse valor não pode repetir

Exemplo válido:

id________________________________________nome
1_________________________________________Ana
2_________________________________________João

Exemplo inválido:

id_________________________________________nome
1__________________________________________Ana
1__________________________________________João

O banco não permitiria isso.

##### AUTOINCREMENT
Esse recurso faz o banco gerar automaticamente o próximo ID.

Essa é a melhor parte para o programador preguiçoso (do jeito bom!).

Você não precisa mais se preocupar em saber qual é o próximo número da lista.

O banco faz isso sozinho: se o último foi o 10, o próximo vai ser o 11 automaticamente.

Esse recurso faz o banco gerar automaticamente o próximo ID.

Por exemplo:

id
1
2
3

__Se inserirmos um novo usuário, o banco cria automaticamente__:
```
4
```

Isso é muito importante porque evita erros de concorrência.

Antes, quando usávamos arrays no JavaScript, fazíamos algo como:
```
usuarios.length + 1
```

Mas isso poderia gerar erros se dois usuários fossem criados ao mesmo tempo.

Com __AUTOINCREMENT__, o banco resolve isso automaticamente.

##### Entendendo as colunas de texto
```
nome TEXT
email TEXT
```
##### nome / email
São os nomes das colunas que escolhemos.

Cada coluna guarda um tipo específico de informação.

##### TEXT

Esse é o tipo de dado para textos. 

No JavaScript, a gente usa String para textos, certo?

No SQLite, a gente usa TEXT. Isso avisa ao banco: "Aqui dentro eu vou guardar letras, frases e caracteres".

__Isso significa que essa coluna pode armazenar__:

* palavras

* frases

* caracteres

* emails

* nomes

Exemplos válidos:
```
"Karynne"
"Maria"
"joao@email.com"
```

#### 7º Passo:  Mostrar no terminal
```
console.log("Banco de dados e tabela prontos!");
```

##### O que isso faz: 
Esse comando apenas mostra uma mensagem no terminal informando que:

* o banco foi criado

* a tabela foi criada

* o código chegou ao final sem erros

Isso ajuda o programador a confirmar que tudo funcionou corretamente.

#### 8º Passo:  Rodar / "Dar o play"
```
criarBanco();
```

##### O que isso faz: 
Aqui estamos executando a função que criamos.

Sem essa linha, o código é apenas um conjunto de instruções guardadas, mas não seria executado.

Essa chamada é o que realmente faz o Node:

1. abrir o banco

2. criar o arquivo .db

4. criar a tabela usuarios

### Código inteiro
```
const sqlite3 = require("sqlite3"); 
const { open } = require("sqlite"); 

const criarBanco = async () => {

  const db = await open({
    filename: "./database.db", 
    driver: sqlite3.Database, 
  });
  
  await db.exec(
    `
      CREATE TABLE IF NOT EXISTS usuario(
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        nome TEXT,                            
        email TEXT                            
      )
     `,
  );

  console.log("Banco de dados e tabela prontos!");
};

criarBanco();
```