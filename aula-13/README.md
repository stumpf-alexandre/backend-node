![](../img/13.jpg)

# 🚀 Zela Cidade

## 📌 Sobre o Projeto
A API **ZelaCidade** foi criada para registrar e gerenciar problemas urbanos, como:
- Buracos
- Vazamentos
- Lixo
- Iluminação

Essa API nos permite criar, visualizar, atualizar e deletar ocorrências.

---

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- SQLite
- SQLite3
- Nodemon
- Postman

---

## 📦 Instalação
`npm install`

---

## ▶️ Como Executar

```bash
npm run dev

```

`http://localhost:3000`

[Clique Aqui](http:localhost:3000)

---

## 🗄️ Banco de Dados
O Banco de Dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

---

## 🧾 Tabela

|Campo                    |Descrição                     |
|-------------------------|------------------------------|
|id                       |Identificador único           |
|tipo_problema            |Tipo do problema              |
|localizacao              |Onde ocorreu                  |
|descricao                |Detalhes do incidente         |
|prioridade               |Baixa, Média ou Alta          |
|nome_solicitante         |Quem registrou                |
|data_registro            |Data do registro              |
|hora_registro            |Hora do registro              |
|status_resulucao         |Status (Padrão: Pendente)     |

---

## 🔗 Endpoints

### Rota Inicial

```http
GET /
```
Retorna uma página HTML simples com informações da API.


### Rota para listar todos os incidentes

```http
GET /incidentes
```
Retorna todos os registros do banco de dados


### Rota para buscar um incidente específico (ID)

```http
GET /incidentes/:id
```
Ex.: /incidentes/1

Retorna uma ocorrência específica.


### Rota para criar um novo incidente

```http
POST /incidentes
```

#### - Body (JSON)

```json
{
        "tipo_problema": "Iluminação",
        "localizacao": "Rua das FLores, 123, Bairro das Margaridas",
        "descricao": "Poste queimado há dias",
        "prioridade": "Média",
        "nome_solicitante": "Ana Clara",
        "data_registro": "16/03/2026",
        "hora_registro": "10:30",
        "status_resolucao": "Em Análise"
    },
```


### Rota para atualizar um incidente

```json
PUT /incidentes/:id
```

#### - Body (JSON)

```json
{
  "descricao": "Luz do poste foi trocada",
  "prioridade": "Baixa",
  "status_resolucao": "Resolvido"
}
```

### Rota para deletar um incidente

```http
DELETE /incidentes/:id
```
---

## 🔐 Segurança

A API utiliza `?` nas queries SQL:

```sql
WHERE id = ?
```

Isso evita o SQL Injection

---

## 📚 Conceitos

- CRUD (Create, Read, Update e Delete)
- Rotas com Express
- Métodos/Verbos HTTP

---

## 👩‍💻 Projeto Educacional

Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js, por Alexandre

---

## Instalando Node, Express, SQLite, Nodemon:
* No terminal do gitbash, dentro da pasta raiz do projeto,  para instalar o node-js, digite `npm init -y`. Transforma uma pasta comum em um projeto node. (Cria uma pasta package.json com suas dependencias).
* Para instalar o express digite `npm install express`. (Cria as pastas package-lock.js, node_modules e atualiza o package.js)
* Para instalar o nodemon `npm install nodemon --save-dev`, va até a pasta package.json, no script vai tar escrito:
* Instalando o sqLite `npm install sqlite3 sqlite`
* Criando um arquivo digite `touch server.js`, de um espaço e digite `.gitignore` e  de um espaço e digite `database.js`. (cria as pastas server.js, .gitignore e database)
* Comando para testar o servidor vai trocar de `node server.js"` para `npm run dev`, para fazer o nodemon ficar escutando o servidor caso haja alguma alteração
* Va até a pasta package.json, no script vai tar escrito:
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon database.js"
  },
  ```
  -> escreva no script junto com test:
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  ```

  ---

## 📖 Por que documentar?
“Código é para máquina. Documentação é para pessoas.”

**De que adianta uma API funcionando se ninguém sabe usar?**
Uma API sem documentação é como um sistema sem manual.

❌ API sem documentação é uma API inutilizável
* Não sabemos quais rotas existem

* Não sabemos o que enviar no body

* Não sabemos o que a API retorna

✅ API com documentação é uma API utilizável e profissional
* Sabemos como rodar o projeto

* Entendemos os endpoints

* Conseguimos testar no Postman

Documentar uma API é explicar como usar o seu sistema sem precisar olhar o código. Então não devemos escrever tudo bagunçado.

## ⌨️ Markdown (MD)
“Se você sabe escrever no WhatsApp, você já sabe usar Markdown.”

Markdown é uma forma simples, rápida e legível de escrever texto formatado sem precisar de Word.
“Se você sabe escrever texto, você já sabe Markdown.”


```
  # Título
  ## Subtítulo
  ### Seção menor

  **Negrito**
  *Itálico*

  - Lista  ou * Lista
  - Item 1
  - Item 2
  
  ---  → linha divisória

  `npm install`   → código pequeno, código inline
  
  ```json
  {
    "prioridade": "Média",
    "descricao": "Atualização do problema",
    "status_resolucao": "Em análise"
  }
  ```  → código maior, código em bloco


  |     → tabela

  Cada linha é uma linha da tabela, e o | separa as colunas

  | Coluna A | Coluna B | 
  |----------|----------|
  |Valor 1   | Valor 2  | 
```

## ✍️ Guia Rápido Completo
**Títulos**

```
  # Título (H1)
  ## Subtítulo (H2)
  ### Seção (H3)
  #### H4
  ##### H5
  ###### H6
```

**Formatação de texto**

```
  **Negrito**
  *Itálico*
  ***Negrito e itálico***
  ~~Texto riscado~~
```

**Listas**

```
  - Item
  - Item
  * Item
```
**Lista ordenada**

```
  1. Primeiro
  2. Segundo
  3. Terceiro
```

**Checklist (muito usado no GitHub)**

```
  - [ ] Fazer README
  - [x] Criar API
```

**Links**

```
  [Texto do link](https://google.com)
```

**Imagens**

```
  ![Descrição da imagem](url-da-imagem)
```

**Código inline**

```
  `npm install`
```

**Código em bloco**

```
  ```json
  {
    "prioridade": "Média",
    "descricao": "Atualização do problema",
    "status_resolucao": "Em análise"
  }
  ```
```

**Tabelas**

```
  | Nome  | Idade |
  |-------|-------|
  | Ana   |  20   |
  | João  |  25   |
```

**Linha divisória**

```
  ---
```

**Citações (quotes)**

```
  > Isso é uma citação
```

**Destaques (blockquote + dica)**
<blockquote> é utilizado para destacar citações longas ou blocos de texto externos, recuando o conteúdo visualmente para separá-lo do corpo principal do texto.

```
  > 💡 Dica importante
```

**Emojis**
* Direto (copiar e colar) 😄 🚀 📚 💡 https://emojipedia.org/

* GitHub style


```
  :rocket:
  :bulb:
  :warning:
```

**Organização com indentação**

```
  - Item
    - Subitem
      - Sub-subitem
```

**Dicas:**
* Use ## para organizar seções

* Use negrito para destacar

* Use código para comandos

* Evite blocos grandes de texto

* Sempre pense em quem vai ler

## 🌈 Como deixar o README bonito
Dicas que será o diferencial da sua documentação

### 1. Usar emojis
Lembrando que “Emoji não é enfeite, é organização visual.”

Torna mais visual e organizado

**Sugestão:** 


```
  ## Esses emojis é um padrão em praticamente TODO README:

  ## **[Emojis](https://emojipedia.org/pt)**

  ## 🚀 Nome da API / Projeto
  ## 📌 Sobre o Projeto
  ## 🎯 Objetivo
  ## 🛠️ Tecnologias
  ## 📦 Instalação
  ## ▶️ Como Executar
  ## ⚙️ Configurações
  ## 🗄️ Banco de Dados
  ## 🔗 Endpoints
  ## 🔐 Segurança
  ## 📚 Conceitos
  ## 💡Dicas / Melhorias
  ## 👩‍💻 Autor

  ---

  ## 📖 Descrição
  ## 🔧 Ferramentas
  ## 💻 Ambiente
  ## 📊 Dados
  ## 🧾 Tabela
  ## 📡 Requisições
  ## 📥 Entrada de dados
  ## 📤 Saída de dados
  ## 🚫 Bloqueios / proteção
  ## 🧠 Aprendizado
  ## 🎓 Educacional
  ## ⚠️ Atenção
  ## ❗Importante
  ## 🤝 Contribuição
  ## 📄 Licença
```

### Como conseguir esses emojis:
1. Site: 📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍

2. Atalhos:
Windows: win + .
Mac: Control + Command + Espaço

3. GitHub (atalho com códigos), exemplos:
:rocket:
:warning:
:bulb:

### 2. Use separação por seções
**Não misture tudo**

❌ Errado: texto gigante

✅ Certo: seções claras

### 3. Use blocos de códigos
Facilita copiar e usar

```
  npm install
```

#### 4. Seja direto
❌ “Este endpoint tem como finalidade proporcionar…”

✅ “Cria um incidente”

### 5. Pense no leitor
“Quem lê seu README não viu seu código.”

## 📁 Onde documentar?
### 📄 README.md
O README é o principal lugar para documentar sua API.

Ele funciona como:

* Capa do projeto

* Manual de uso

**“Se eu pegar seu projeto e não conseguir rodar ou usar sua API, o problema não é o código… é a documentação.”**
#### Onde ele fica?

```
  /projeto-zelacidade
    ├── index.js
    ├── package.json
    └── README.md  ✅
```

## README - VS Code vs GitHub
### 💻 README no VS Code (Local)
#### ✔️ O que é:
Você está editando o arquivo **localmente no seu computador**

#### ✔️ Vantagens:
* Você escreve junto com o código

* Pode testar enquanto desenvolve

* Preview em tempo real (Ctrl + Shift + V)

* Mais rápido pra trabalhar

#### ✔️ Quando usar:
 Durante o desenvolvimento da API

### 🌐 README no GitHub (Online)
#### ✔️ O que é:
É o mesmo arquivo, mas **publicado no repositório**

####✔️ Vantagens:
* Fica visível para outras pessoas

* Serve como “vitrine” do projeto

* Permite edição direta pelo navegador

* Renderização bonita automática

#### ✔️ Quando usar:
Para compartilhar, revisar ou ajustar rapidamente

## Swagger e Postman
Outras ferramentas de documentação

Além do README, existem ferramentas que ajudam a deixar a documentação ainda mais completa e interativa.
### Swagger (OpenAPI)
Ferramenta para documentar APIs de forma profissional e automática. Você descreve sua API e ele gera uma interface interativa para testar os endpoints no navegador.

**Resumo:** Documentação + teste da API no browser documentação bonita

[Documentação do Swagger](https://swagger.io/)

### Postman (collections)
Permite organizar e salvar requisições da API (GET, POST, etc) em coleções reutilizáveis.

**Resumo:** Ferramenta para testar e organizar chamadas da API testar endpoints

[Documentação do Postman (collections)](https://www.postman.com/product/)

#### 💡 Importante
O README já é suficiente para começar a documentar bem sua API.
Essas ferramentas entram como complemento para organizar melhor e melhorar a experiência de uso.

## Estrutura de um README
O README é como a capa + manual do seu projeto. Então, Um bom README deve ter:
### Título e descrição
Se eu abrir seu projeto no GitHub, isso é a primeira coisa que eu vou ler.

```
🚀 API Registros de ocorrências
API para gerenciamento de ocorrências urbanas
```

### Tecnologias
Serve para:

* Mostrar o que foi utilizado

* Ajudar outros devs a entender o ambiente

“Aqui você mostra o ‘kit de ferramentas’ do seu projeto.”

```
- Node.js
- Express
- SQLite
- SQLite3
- Nodemon
```

### Instalação

````
```bash
npm install
```
````

#### Como executar o projeto
Sem isso… ninguém consegue usar sua API
````
```bash
npm run dev
```
````

### Banco de dados

````
```
database.db
```
````

### Tabela

| Campo               |Descrição                  |
| ------------------- | ------------------------- |
| id                  | Identificador único       |

### Endpoints - Essa é a parte mais importante da documentação.
Aqui você ensina como usar a API

Aqui é onde você forma back-end de verdade.

#### Regra simples:
Cada endpoint precisa ter:

* Método (GET, POST, etc)

* Rota

* O que faz

* Body (se tiver)

* Resposta

#### Criar ocorrência - POST
Cria uma nova ocorrência no sistema

“Esse é o endpoint que adiciona dados no banco, é aqui que tudo começa.”

Sem esses dados, não dá pra registrar o problema.”

```
POST /ocorrencias

Cria um novo incidente
```

#### Listar ocorrências - GET
Busca todas as ocorrências

“É o ‘ver tudo’ do sistema”

```
GET /ocorrencias

Retorna todas as ocorrências cadastradas
```

#### Buscar por ID
Aqui você busca algo específico.

```
GET /ocorrencias/:id
```

#### Atualizar ocorrência - PUT
Atualiza uma ocorrência existente

“Você precisa do ID porque está alterando algo específico”

```
PUT /ocorrencias/:id
```

#### Deletar ocorrência - DELETE
Remove uma ocorrência

“Aqui você está apagando um registro do sistema”

```
DELETE /ocorrencias/:id
```

#### Body

```
Body:
{
  "titulo": "Buraco na rua",                       -- resumo do problema
  "descricao": "Buraco grande na avenida",         -- detalhes
  "bairro": "Centro"                               -- localização
}
```

## Exemplo Simples de README
Uma das páginas mais importantes

* Título e descrição

* Tecnologias

* Como executar / rodar

* Endpoints (introdução)

**Esqueleto do projeto**

```
🚀 API Registros de ocorrências

📌 Sobre
API para registrar problemas urbanos

🛠️ Tecnologias
- Node.js
- Express
- SQLite

▶️ Como executar
npm install
npm run dev

🔗 Endpoints
GET /ocorrencias
POST /ocorrencias
PUT /ocorrencias/:id
DELETE /ocorrencias/:id
```

## 🌐 CORS - Cross-Origin Resource Sharing
Compartilhamento de Recursos entre Origens

CORS é um mecanismo de segurança implementado pelos navegadores que controla quais aplicações podem acessar os recursos de outras origens.

### Entendendo na prática
Imagine o seguinte cenário:

* Você está logado no site do seu banco (Origem A)

* Em outra aba, abre um site desconhecido (Origem B)

Sem uma proteção, esse site malicioso poderia tentar acessar seus dados do banco através de scripts escondidos 😨

**É aí que entra o CORS!**

O navegador atua como um guardião, impedindo esse tipo de acesso não autorizado.

### Como o navegador se comporta?
Quando uma requisição é feita entre origens diferentes, o navegador verifica:

* Se o servidor permite aquela origem

* Se os métodos (GET, POST, etc.) são autorizados

* Se os headers estão corretos

Caso algo não esteja permitido, o navegador bloqueia a requisição automaticamente.

### O problema com a nossa API
Por padrão, o navegador trata qualquer origem diferente como não confiável.

Isso significa que:

* Nosso futuro Front-end

* Tentando acessar nossa API (hospedada no Render)

Será bloqueado pelo navegador inicialmente.

### A solução: liberar acesso com CORS
Para permitir essa comunicação, precisamos configurar o CORS na nossa API.

Na prática, isso significa dizer ao navegador:

"Essa origem tem permissão para acessar meus dados"

Isso é feito através de configurações no servidor, como por exemplo:

* Definir quais origens são permitidas

* Liberar métodos específicos (GET, POST, PUT, DELETE)

* Autorizar headers

### Resumindo
* CORS é uma camada de segurança do navegador

* Ele impede acessos indevidos entre diferentes origens

* Sem configuração, sua API pode ser bloqueada pelo front-end

* Para funcionar corretamente, precisamos configurar permissões na API

## 🔍 O que é uma “origem”?
Uma origem é composta por:

* Protocolo (http / https)

* Domínio (localhost, meusite.com)

* Porta (3000, 8080)

### ⚠️ Exemplo de origens diferentes:
|Front-end                     |API                                  |Situação                  |
|------------------------------|-------------------------------------|--------------------------|
|http://localhost:3000         |http://localhost:3001                |❌ Bloqueado              |
|http://meusite.com            |https://meusite.com                  |❌ Bloqueado              |
|http://meusite.com            |http://api.meusite.com               |❌ Bloqueado              |

## ⚙️ Passo a Passo
Para permitir o acesso à sua API, você precisa configurar o servidor.

### 1. Instalar o pacote

```
npm install cors
```

É o comando que baixa o nosso "Segurança de Acesso". Como o Node não traz esse segurança por padrão, nós o instalamos como uma ferramenta extra para garantir que a nossa API possa "conversar" com qualquer site na internet sem ser bloqueada pelo navegador.

### 2. Aplicação no server.js
No início das configurações do app, inserimos:

```
const express = require('express'); 
const { criarBanco } = require('./database') // A nossa "chave" que abre a conexão com o banco de dados
const cors = require('cors'); // importamos o pacote que gerencia as permissões de acesso

const app = express();

// Ativando o CORS no servidor. 
//Avisa ao navegador: Pode liberar o acesso para qualquer origem/site que queira consultar meus dados.
app.use(cors());

app.use(express.json())
```
**⚠️ Atenção: isso libera acesso para qualquer aplicação (não recomendado em produção).**
### 3.  A Porta Automática (process.env.port) 
Já foi liberado o acesso com o CORS, mas agora temos um problema de endereço. No nosso computador, o servidor sempre roda na porta 3000. Mas, quando enviarmos nossa API para um servidor real (como o Render), ele é quem vai decidir em qual porta a nossa aplicação deve rodar. Se deixarmos o número 3000 fixo, o servidor lá fora não vai conseguir ligar a nossa API.

Precisamos deixar a nossa API 'esperta' para perguntar: 'Qual é a porta de hoje?'."

No final do arquivo server.js:

```
// Criando uma variável inteligente para a porta
const PORT = process.env.PORT || 3000;

// Avisamos ao servidor para "ouvir" nessa porta
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
```

**process (O Processo):** É o Corpo do seu programa enquanto ele está rodando.

**env (O Ambiente / Environment):** É uma pasta cheia de Configurações do Mundo Exterior.

**PORT (A Porta):** Uma Etiqueta específica dentro dessa pasta de ambiente.

**O Operador || (OU):** É o nosso Plano B ou "Valor Padrão".

## ⚙️ package.json

```
   "engines": {
    "node": "18.x"
  }, 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js",
    "start": "node server.js",
    "postinstall": "npm rebuild sqlite3"
  }
  ```

O Node 18 é uma versão LTS (Long Term Support), focada em estabilidade. Ao definir isso, você proíbe o Render de tentar usar versões instáveis ou novas demais que não "conversam" bem com o SQLite 5.1.6.

---

O bloco "scripts" dentro do package.json serve para definir comandos que facilitam a execução da sua aplicação. Em vez de digitar tudo manualmente no terminal, você usa comandos como npm run dev ou npm start, e o Node executa o que está configurado ali.

---

A linha "test" é apenas um padrão que vem quando o projeto é criado. Ela basicamente mostra uma mensagem de erro dizendo que nenhum teste foi definido e encerra a execução. Na prática, você pode ignorar isso por enquanto.

---

A linha "dev": "nodemon server.js" é usada no ambiente de desenvolvimento. O nodemon é uma ferramenta que reinicia automaticamente o servidor toda vez que você salva alguma alteração no código. Isso facilita muito, porque você não precisa ficar parando e iniciando o servidor manualmente a cada mudança.

---

Já a linha "start": "node server.js" é a mais importante para o deploy. Ela diz exatamente como a aplicação deve ser iniciada em ambiente de produção. Plataformas como o Render procuram esse comando automaticamente para saber como subir o servidor. Ou seja, é através desse "start" que sua API realmente fica no ar.

---

Por fim, a linha "postinstall": "npm rebuild sqlite3" é executada automaticamente depois que as dependências são instaladas com npm install. Isso é necessário porque o sqlite3 depende de arquivos que precisam ser ajustados de acordo com o ambiente onde a aplicação está rodando. Como o ambiente do Render é diferente do seu computador, esse comando recompila o sqlite3 para garantir que ele funcione corretamente no servidor. Sem isso, é comum a aplicação quebrar no deploy.

---

#### Resumindo: 
O "dev" te ajuda durante o desenvolvimento, o "start" é o que o Render usa para rodar sua aplicação em produção, e o "postinstall" garante que o banco SQLite funcione corretamente no ambiente do servidor.

## 🔧 Comandos
### Comando que baixa o nosso "Segurança de Acesso

```
npm install cors
```

### Troca Estratégica
Essa versão funciona como um **“ponto de equilíbrio”**:
não depende de bibliotecas mais recentes do Linux (que podem não existir no servidor do Render), garantindo mais estabilidade e evitando erros como “versão não encontrada”.

```
npm install sqlite3@5.1.6
```

### Faxina Geral (Reset)
Apague a pasta node_modules e o arquivo package-lock.json.

```
rm -rf node_modules package-lock.json
```

### Rode npm install novamente:
Isso garante que o arquivo **package.json** esteja sincronizado e sem inconsistências de instalações anteriores.

```
npm instal
```

## 🚫 Erro comum de CORS
**Quando isso acontece, o navegador retorna um erro como:**

```
Access to fetch at 'http://localhost:3001' 
from origin 'http://localhost:3000' 
has been blocked by CORS policy
```
### 🔐 Por que isso existe?
CORS é uma **camada de segurança** para evitar ataques, como:

* Roubo de dados

* Requisições maliciosas feitas sem o usuário perceber

## 🧩 Como o CORS funciona na prática
### Quando o front tenta acessar a API:
1. O navegador envia a requisição

2. O servidor responde com cabeçalhos (headers), como:

```
Access-Control-Allow-Origin: http://localhost:3000
```

3. O navegador verifica:

* Se está permitido → ✅ libera

* Se não está → ❌ bloqueia

## 🚪 Analogia
Pense no CORS como um porteiro 🚪
Ele só permite a entrada de quem está autorizado.

![](../img/img2.png)


* CORS = controle de acesso entre origens

* É uma proteção do navegador

* Bloqueia requisições por padrão

* Você resolve configurando o backend

* Em Node.js, usamos o pacote cors
