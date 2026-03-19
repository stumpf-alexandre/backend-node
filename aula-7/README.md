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

![](../img/7.png)

# O papel do Banco de Dados
O banco de dados funciona como um sistema de armazenamento estruturado.

Em aplicações modernas, os sistemas precisam lidar com uma grande quantidade de informações. Essas informações podem ser dados de usuários, produtos, pedidos, mensagens, registros financeiros, entre muitos outros.

O banco de dados é o responsável por 

* armazenar

* organizar informações

* consultar registros rapidamente

* garantir integridade dos dados

* evitar duplicações

* manter histórico de informações

Por exemplo, imagine um sistema de cadastro de usuários. Cada usuário possui informações como nome, email e senha. Essas informações precisam ser guardadas de forma segura e organizada para que possam ser utilizadas sempre que o usuário acessar o sistema novamente.

É exatamente nesse ponto que o banco de dados entra: ele funciona como uma estrutura de armazenamento confiável, permitindo que o sistema registre e consulte informações sempre que necessário.

Outro ponto importante é a persistência de dados.

Persistência significa que os dados continuam existindo mesmo quando o sistema é desligado ou reiniciado. Isso acontece porque os dados são armazenados no disco do computador ou servidor, e não apenas na memória temporária da aplicação.

Sem um banco de dados, seria muito difícil manter os dados organizados e acessíveis em sistemas que precisam funcionar continuamente.

#### Isso torna o banco de dados essencial em praticamente qualquer aplicação moderna.

## 🗃️ Analogias para o Banco de Dados
Banco de dados como um arquivo organizado

Uma forma simples de entender o banco de dados é imaginá-lo como um arquivo de documentos.

Nesse arquivo existem várias gavetas, e dentro delas ficam diferentes tipos de documentos organizados.

Cada gaveta pode representar uma tabela, e cada documento dentro dela representa um registro.

Por exemplo:

Gaveta: Usuários
Documentos dentro da gaveta: cada usuário cadastrado

## Operações de Persistência
Interagindo com o Banco de Dados

Agora que já criamos:

* o banco de dados

* a tabela

* a estrutura das colunas

precisamos aprender a interagir com esses dados.

Em sistemas reais, o banco de dados não serve apenas para armazenar informações, mas também para manipulá-las constantemente.

#### Isso significa que um sistema precisa ser capaz de:
* adicionar novos dados

* consultar dados existentes

* modificar informações

* remover registros que não são mais necessários

Essas operações são chamadas de operações de persistência de dados.

Persistência significa que os dados continuam existindo mesmo após o sistema ser fechado ou reiniciado, pois ficam armazenados no disco.

## Linguagem SQL
A linguagem usada pelos bancos de dados

### SQL significa: Structured Query Language (Linguagem Estruturada de Consulta)
Com SQL conseguimos interagir com os dados armazenados no banco, realizando diferentes tipos de operações.

__Essa linguagem foi criada especificamente para interagir com bancos de dados relacionais__.
Com SQL podemos:

* inserir novos registros

* consultar dados armazenados

* atualizar informações

* excluir registros

* criar tabelas

* modificar estruturas do banco

Essas operações são fundamentais para o funcionamento de praticamente qualquer sistema que utilize banco de dados.

Ela é utilizada em diversos bancos de dados conhecidos no mercado, como:

* MySQL

* PostgreSQL

* SQL Server

* Oracle

* SQLite

#### Ou seja, aprender SQL significa aprender uma habilidade reutilizável em vários bancos diferentes.
Por exemplo, quando executamos comandos como:
```
INSERT INTO usuarios (nome, email)
VALUES ('Fernanda', 'fernanda@vainaweb.com')
```

ou
```
SELECT * FROM usuarios
```

#### estamos utilizando SQL para conversar com o banco de dados.

## Para que serve o SQL
O SQL serve como uma ponte de comunicação entre a aplicação e o banco de dados.

Quando um sistema precisa salvar ou consultar informações, ele utiliza comandos SQL para enviar instruções ao banco.

Por exemplo:

1. O usuário faz login em um sistema

2. A aplicação precisa verificar se esse usuário existe

3. O sistema envia uma consulta SQL ao banco

4. O banco retorna o resultado

#### Sem SQL, seria muito mais difícil manipular dados dentro de bancos relacionais.

## 🗣 Analogia para entender o SQL
SQL como uma linguagem de conversa

Podemos imaginar o SQL como uma língua que usamos para conversar com o banco de dados.

O banco de dados entende apenas instruções específicas.

Então usamos SQL para dizer coisas como:

* "Guarde essa informação"

* "Mostre todos os usuários cadastrados"

* "Atualize esse registro"

* "Apague esse dado"

Ou seja, o SQL funciona como um conjunto de comandos que o banco entende.

## SQLite Viewer
SQLite é um Sistema de Gerenciamento de Banco de Dados Relacional (SGBD).

Isso significa que ele é um software responsável por armazenar, organizar e gerenciar dados.

Diferente de outros bancos de dados mais complexos, o SQLite funciona de uma forma muito simples: ele armazena todo o banco de dados em um único arquivo dentro do projeto.

Por exemplo:
```
database.db
```

Esse arquivo contém:

* todas as tabelas

* todos os registros

* toda a estrutura do banco

Quando a aplicação precisa acessar os dados, ela se conecta diretamente a esse arquivo.

#### Isso ajuda a entender como os dados estão sendo armazenados na prática.

## 📦 Analogia para entender o SQLite
SQLite como uma caixa de arquivos

Imagine que você possui uma caixa onde guarda documentos organizados.

Dentro dessa caixa existem diferentes tipos de informações organizadas em pastas.

Essa caixa seria o SQLite, responsável por guardar todos os dados.

__Já os comandos SQL seriam as instruções que você usa para organizar os documentos dentro da caixa__.

## Diferença entre SQL e SQLite
Apesar dos nomes parecidos, SQL e SQLite não são a mesma coisa.

SQL_____________________________________________SQLite
É uma linguagem___________________________________É um software de banco de dados
Serve para escrever comandos________________________Executa os comandos SQL
Define como consultar e manipular dados________________Armazena e gerencia os dados
Pode ser usado em vários bancos______________________É um banco específico

Ou seja:

__SQL__: é a linguagem (idioma) usada para dar comandos.

__SQLite__: é o sistema que recebe esses comandos e executa as ações no banco de dados. (quem entende esse idioma)

Exemplo prático
Quando escrevemos:
```
SELECT * FROM usuarios
```

Estamos utilizando SQL.

Quando esse comando é executado dentro do banco e retorna os dados, quem está processando essa instrução é o SQLite.

#### O caminho de uma requisição até o banco de dados:
Frontend → Backend → SQL → SQLite → Banco → Resposta

## Database Client
Para facilitar a visualização e manipulação dos dados, utilizamos ferramentas chamadas Database Clients.

#### Um Database Client é uma ferramenta utilizada para interagir com o banco de dados de forma visual ou através de comandos.
#### Ele funciona como uma interface que permite ao desenvolvedor:
* visualizar bancos de dados

* acessar tabelas

* consultar registros

* executar comandos SQL

* verificar os dados armazenados

Em vez de interagir diretamente com o banco através do código, o Database Client permite explorar o banco de dados manualmente, o que facilita muito durante o desenvolvimento.

#### Essas ferramentas são muito úteis para:
* verificar se os dados estão sendo inseridos corretamente

* testar consultas SQL

* analisar a estrutura das tabelas

* entender melhor como o banco de dados está organizado

#### Essas ferramentas ajudam muito no desenvolvimento, pois permitem ver o que está acontecendo dentro do banco de dados.

## 🪟 Analogia para Database Client
O Database Client como uma janela para o banco de dados

Podemos imaginar o banco de dados como uma sala cheia de arquivos.

O Database Client funciona como uma janela que permite olhar dentro dessa sala.

Sem essa janela, precisaríamos acessar os arquivos apenas através de código, o que tornaria o processo muito mais difícil.

Com o Database Client conseguimos:

* ver os dados

* navegar pelas tabelas

* testar consultas rapidamente

Isso torna o processo de desenvolvimento muito mais prático.

## CRUD
Quando falamos de sistemas que manipulam dados, existe um conceito muito importante chamado CRUD.

CRUD é um acrônimo formado pelas iniciais de quatro operações fundamentais realizadas em um banco de dados.

Essas operações representam as __ações básicas que qualquer sistema precisa realizar com seus dados__.

__C - Create (Criar)__: Criar / Inserir novos dados. (SQL: INSERT)

__R - Read (Ler)__:  Ler / Consultar ou listar dados. (SQL: SELECT)

__U - Update (Atualizar)__: Atualizar / Editar dados existentes. (SQL: UPDATE)

__D - Delete (Deletar)__: Remover dados. (SQL: DELETE)

#### Essas quatro operações estão presentes em praticamente todos os sistemas que manipulam informações.
Exemplos de sistemas que utilizam CRUD:

* redes sociais

* sistemas bancários

* aplicativos de delivery

* sistemas de cadastro de usuários

Sempre que você:

* cria um perfil

* visualiza uma lista

* edita uma informação

* ou apaga algo

você está realizando uma das operações do CRUD.

## C - Create (Criar)
A operação Create é responsável por inserir novos dados no banco de dados.

#### Essa operação é feita utilizando o comando: SQL: INSERT
Por exemplo, em um sistema de cadastro de usuários, quando um novo usuário preenche um formulário e envia seus dados, o sistema precisa armazenar essas informações no banco.

Essa ação é realizada utilizando o comando SQL chamado:

#### INSERT

Esse comando cria uma nova linha dentro da tabela.

Cada linha representa um registro armazenado no banco de dados.

## Estrutura do INSERT
A estrutura básica do comando INSERT é:
```
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES (valor1, valor2)
```
Explicação:

__INSERT INTO__: Indica que vamos inserir dados em uma tabela.

__nome_da_tabela__: Define em qual tabela os dados serão armazenados.

__(coluna1, coluna2)__ : Define quais colunas receberão os valores.

__VALUES__: Indica os valores que serão inseridos nessas colunas.

## Exemplo de INSERT
Exemplo prático (Dados fixos para teste):
```
const nome = "Fernanda Correa";
const email = "fernanda@vainaweb.com";
```

Em um site real, o fluxo seria esse:
1. O usuário digita no formulário do site ➔

2. O Front-end envia para a nossa API ➔

3. O Express recebe no req.body ➔

4. E a gente pega esse req.body e joga aqui dentro do nosso comando SQL.
```
await db.run(
    `INSERT INTO usuarios (nome, email) VALUES (?, ?)`, 
    [nome, email]
);

console.log("Dado enviado para o banco com sucesso!");
```

Esse comando faz o seguinte:

* acessa a tabela usuarios

* insere um novo registro

* preenche as colunas nome e email

__db.run()__: Este método é utilizado para comandos que realizam uma ação no banco (como inserir ou deletar) mas que não precisam retornar linhas de dados. Você usa quando a sua intenção é alterar o banco de dados.

__INSERT INTO usuarios (nome, email)__: Instrução SQL que define o destino (tabela) e os campos que receberão os valores.

__VALUES (?, ?)__: Estamos dizendo ao banco de dados o seguinte: "Vou te enviar uma estrutura de comando agora, mas os dados reais eu te entrego em um pacote separado logo em seguida."

Dessa forma, o motor do SQLite primeiro entende a intenção do comando (que é inserir dados) e só depois ele "encaixa" o que estiver dentro do array [nome, email] naqueles espaços.

__[nome, email]__: o segundo argumento (o array) é a lista de dados reais que substituirão os pontos de interrogação (?).

#### Ordem importa
O motor do SQLite faz uma leitura da esquerda para a direita. O primeiro ? que ele encontrar será trocado pelo primeiro item do array. O segundo ?, pelo segundo item, e assim por diante.

__1º__  ? → Será substituído por nome

__2º__  ? → Será substituído por email

#### O id geralmente é gerado automaticamente, pois configuramos ele como AUTOINCREMENT.
Após executar esse comando, uma nova linha será criada na tabela.

id______________________________nome______________________________email
1_____________________________Fernanda____________________________fernanda@vainaweb.com

## R - Read (Ler)
A operação Read é responsável por consultar os dados armazenados no banco.

#### Essa operação é feita utilizando o comando: SQL: SELECT
Isso significa pedir ao banco para retornar informações que já foram salvas anteriormente.

Por exemplo:

* listar todos os usuários cadastrados

* buscar um produto específico

* visualizar pedidos de um cliente

## Estrutura do SELECT
Estrutura básica do SELECT:
```
SELECT colunas
FROM tabela
```

Explicação:

__SELECT__: Define quais colunas queremos visualizar.

__FROM__: Define de qual tabela os dados serão buscados.

## SELECT com todas as colunas
Se quisermos buscar todas as colunas da tabela, usamos o símbolo:
```
*
```

Esse símbolo significa "todas as colunas disponíveis".

Exemplo:
```
SELECT * FROM usuarios
```

Esse comando pede ao banco:  "Mostre todos os dados da tabela usuarios".

## Resultado do SELECT
Se nossa tabela tiver os seguintes registros:
id______________________________nome___________________________email
1_____________________________Fernanda_________________fernanda@vainaweb.com
2______________________________João_____________________joao@vainaweb.com

Ao executar:
```
SELECT * FROM usuarios
```

O banco retorna exatamente essas informações.

## U - Update (Atualizar)
A operação Update é responsável por alterar ou atualizar dados que já existem no banco de dados.

#### Essa operação é feita utilizando o comando: SQL: UPDATE
Em muitos sistemas, as informações armazenadas precisam ser modificadas ao longo do tempo. Por exemplo:

* um usuário pode mudar seu email

* um cliente pode atualizar seu telefone

* um produto pode ter seu preço alterado

Nesses casos, não queremos criar um novo registro, mas sim modificar um registro já existente.

#### Esse comando permite localizar um registro específico e alterar seus valores.

## Estrutura do UPDATE
A estrutura básica do comando UPDATE é:
```
UPDATE nome_da_tabela
SET coluna = novo_valor
WHERE condicao
```

Explicação
__UPDATE nome_da_tabela__: Indica qual tabela será modificada.

__SET__: Define qual coluna receberá o novo valor.

__WHERE__: Define qual registro será atualizado.

#### Essa parte é extremamente importante, pois evita que todos os registros da tabela sejam alterados ao mesmo tempo.

## Exemplo de UPDATE
Suponha que temos a seguinte tabela:

id_____________________________nome__________________________email
1____________________________Fernanda_________________fernanda@vainaweb.com
2_____________________________João_____________________joao@vainaweb.com

Agora queremos atualizar o email da Ana.
```
UPDATE usuarios
SET email = 'fernandacorrea@vainaweb.com'
WHERE id = 1
```

O banco irá:
localizar o registro com id = 1

alterar o valor da coluna email

Resultado após a atualização:
id__________________________nome___________________________email
1_________________________Fernanda_______________fernandacorrea@vainaweb.com
2__________________________João______________________joao@vainaweb.com

## Importância do WHERE no UPDATE
O __WHERE__ define qual registro será modificado.

Se executarmos o comando UPDATE sem WHERE, todos os registros da tabela serão atualizados.

__Exemplo perigoso__:
```
UPDATE usuarios
SET email = 'teste@email.com'
```
__Resultado__:
Todos os usuários teriam o mesmo email, o que geralmente não é o comportamento desejado.

Por isso, na maioria dos casos, usamos o __WHERE com a chave primária (id)__.

## D - Delete (Deletar)
A operação Delete é responsável por remover registros existentes no banco de dados.

#### Essa operação é feita utilizando o comando: SQL: DELETE
Isso significa que uma linha inteira da tabela será apagada.

Exemplos de situações em que usamos DELETE:

* remover um usuário que pediu exclusão da conta

* apagar um produto que não existe mais

* excluir registros duplicados ou inválidos

## Estrutura do DELETE
A estrutura básica do comando DELETE é:
```
DELETE FROM nome_da_tabela
WHERE condicao
```

#### Explicação
__DELETE FROM__: Indica que queremos remover dados de uma tabela.

__nome_da_tabela__: Define de qual tabela os registros serão apagados.

__WHERE__: Define qual registro será removido.

## Exemplo de DELETE
Suponha a seguinte tabela:

id_________________________nome____________________________email
1________________________Fernanda___________________fernanda@vainaweb.com
2_________________________João_________________________joao@vainaweb.com

Se quisermos remover o usuário João, podemos executar:
```
DELETE FROM usuarios
WHERE id = 2
```

Após executar o comando, a tabela ficará assim:
id_________________________nome_____________________________email
1_________________________Fernanda__________________fernanda@vainaweb.com

O registro de João foi removido completamente do banco.

## Cuidado com DELETE sem WHERE
Assim como no UPDATE, o comando DELETE também pode afetar __todos os registros da tabela__ se o WHERE não for utilizado.
```
DELETE FROM usuarios
```
#### Esse comando irá remover todos os registros da tabela.
#### A tabela continuará existindo, mas ficará vazia.
#### Por isso, é fundamental utilizar condições específicas ao deletar dados.

## Conclusão do CRUD
Agora completamos as quatro operações fundamentais de manipulação de dados:

Operação_____________________Comando SQL______________________Função
Create (Criar)____________________INSERT____________________Criar novos registros
Read (Ler)______________________SELECT______________________Consultar dados
Update (Atualizar)________________UPDATE________________Modificar registros existentes
Delete (Deletar)__________________DELETE_____________________Remover registros

#### Essas quatro operações formam o CRUD, base para praticamente qualquer sistema que utiliza banco de dados.

## Como o CRUD aparece nas aplicações
Praticamente todo sistema que utilizamos no dia a dia realiza operações de CRUD.

Essas operações acontecem sempre que manipulamos informações dentro de um sistema.

Vamos ver alguns exemplos.

### Exemplo 1 - Cadastro de Usuários 👤
Imagine um sistema de cadastro de usuários.

Ação do usuário________________________Operação CRUD_______________SQL
Criar uma conta____________________________Create__________________INSERT
Ver perfil__________________________________Read___________________SELECT
Alterar email ou senha_______________________Update__________________UPDATE
Excluir conta_______________________________Delete__________________DELETE

Sempre que um usuário interage com seu perfil, o sistema está realizando uma dessas operações no banco de dados.

### Exemplo 2 - Loja Online 🛒
Em um sistema de e-commerce, os produtos também são manipulados usando CRUD.

Ação do administrador___________________Operação CRUD_______________SQL
Cadastrar novo produto______________________Create__________________INSERT
Listar produtos da loja_______________________Read___________________SELECT
Atualizar preço____________________________Update__________________UPDATE
Remover produto__________________________Delete___________________DELETE

Cada produto cadastrado corresponde a uma linha dentro da tabela de produtos no banco de dados.

### Exemplo 3 — Aplicativo de Tarefas 📋
Aplicativos de tarefas também utilizam CRUD constantemente.

Ação no aplicativo________________________________Operação CRUD
Criar nova tarefa_____________________________________Create
Ver lista de tarefas____________________________________Read
Editar descrição da tarefa______________________________Update
Excluir tarefa________________________________________Delete

Essas ações parecem simples para o usuário, mas por trás delas sempre existe uma operação sendo executada no banco de dados.