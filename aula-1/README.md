![](./img/primeiro_projeto.png)

## Instalando Node e Express:
* No terminal do gitbash, dentro da pasta raiz do projeto,  para instalar o node-js, digite `npm init -y`. Transforma uma pasta comum em um projeto node. (Cria uma pasta package.json com suas dependencias).
* Para instalar o express digite `npm install express`. (Cria as pastas package-lock.js, node_modules e atualiza o package.js)
* Criando um arquivo digite `touch server.js` e de um espaço e digite `.gitignore`. (cria as pastas server.js e gitignore)
* Comando para testar o servidor: "node server.js"

# Introdução ao Back-end
## O que é o Back-end?
O back-end é a parte de um sistema ou aplicação que funciona nos bastidores, fora da visão direta do usuário. Ele é responsável por garantir que todas as funcionalidades sejam executadas corretamente, processando dados, aplicando regras e interagindo com outras partes do sistema, como bancos de dados e serviços externos.

Se o front-end é o que o usuário vê e interage (as telas, botões e formulários), o back-end é o que faz tudo aquilo “ganhar vida” e realmente funcionar.

### Analogia:
Imagine um teatro.

O palco, atores e cenário visíveis ao público representam o front-end.

A equipe técnica, iluminação, sonoplastia e direção, que coordenam tudo por trás, representam o back-end.

## Funções do Back-end
O back-end atua como o cérebro da aplicação, realizando funções como:

Processar informações enviadas pelo usuário
Sempre que um usuário envia dados — seja para fazer login, cadastrar um produto ou enviar uma mensagem — o back-end interpreta, valida e decide o que fazer com essas informações.

## Aplicar regras de negócio
Toda aplicação segue um conjunto de regras para funcionar. Por exemplo:

Um site de compras não pode vender um produto sem estoque.

Um sistema bancário precisa verificar saldo antes de autorizar uma transferência.

## Gerenciar dados em bancos de dados
O back-end cria, lê, atualiza e apaga dados (operações conhecidas como CRUD).
Ele garante que as informações sejam armazenadas de forma organizada e segura.

## Integrar sistemas
O back-end se conecta a outros serviços e APIs para expandir as funcionalidades, como processadores de pagamento, plataformas de envio de e-mail ou sistemas de geolocalização.

## Garantir segurança e autenticação
É no back-end que se define quem pode acessar o quê, protegendo informações sensíveis e prevenindo acessos não autorizados.

## Principais Elementos do Back-end
### Servidor
O local onde a aplicação back-end “vive” e executa seu trabalho. Pode ser um computador físico, uma máquina virtual ou um serviço na nuvem.

### Aplicação
Conjunto de funcionalidades e regras escritas pelo desenvolvedor que determinam o comportamento do sistema.

### Banco de Dados
Onde as informações são guardadas e organizadas. Pode ser relacional (como MySQL e PostgreSQL) ou não-relacional (como MongoDB).

### APIs
Pontos de acesso que permitem que outras aplicações ou o front-end se comuniquem com o back-end. Elas seguem padrões que facilitam essa comunicação, como REST ou GraphQL.

## Como o Back-end se Comunica com o Front-end
A comunicação acontece por meio de requisições e respostas.

O front-end envia uma requisição ao back-end, pedindo algo (exemplo: “me mostre todos os produtos disponíveis”).

O back-end processa esse pedido, busca as informações necessárias e envia uma resposta de volta (exemplo: uma lista de produtos).

Essa troca é feita usando protocolos como o HTTP e formatos como JSON ou XML para transportar os dados.

## Conceitos Fundamentais para Entender o Back-end
Request (Requisição): O pedido que chega ao servidor, contendo informações sobre o que se quer e, às vezes, dados a serem processados.

Response (Resposta): A mensagem que o servidor envia de volta, com os dados solicitados ou uma confirmação de que algo foi feito.

Endpoint: Endereço específico que o cliente usa para acessar um recurso no servidor.

Rota: Caminho definido dentro da aplicação que determina como tratar cada requisição.

Middleware: Uma etapa intermediária que processa a requisição antes que ela chegue ao destino final. Pode ser usada para autenticação, registro de logs ou manipulação de dados.

## Exemplos de Aplicações que Dependem de Back-end
Redes sociais (armazenam postagens, curtidas, comentários e perfis)

Plataformas de streaming (controlam playlists, histórico e recomendações)

E-commerces (processam compras, pagamentos e entregas)

Aplicativos de transporte (calculam rotas, preços e disponibilidade de motoristas)

Jogos online (sincronizam pontuação, progresso e interações entre jogadores)