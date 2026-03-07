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
    "dev": "nodemon server.js"
  },
  ```
* Criando um arquivo digite `touch server.js` e de um espaço e digite `.gitignore`. (cria as pastas server.js e gitignore)
* Comando para testar o servidor vai trocar de `node server.js"` para `npm run dev`, para fazer o nodemon ficar escutando o servidor caso haja alguma alteração


# Middleware
Middleware é uma função que fica entre a requisição (req) e a resposta (res).

O que acontece quando alguém acessa sua API?
Quando alguém faz uma requisição para sua API, o caminho é:

`Cliente → Servidor → Resposta`
Mas… antes da resposta ser enviada, podemos colocar algo no meio do caminho.

Esse “algo” é o Middleware.

## O que é Middleware?
Middleware é uma função que executa antes da resposta final ser enviada.
Ele fica entre: 

`Requisição → Middleware → Rota → Resposta`
O que um middleware pode fazer?
Ele pode:
* ✅ Verificar se os dados estão corretos

* ❌ Bloquear a requisição

* 🖥 Mostrar algo no terminal

* ➡ Permitir que a requisição continue

### Analogia
Imagine que sua API é uma festa 🎉
A rota é a entrada.

O middleware é o segurança na porta.

#### Ele decide:
* ✔ Pode entrar → chama next()  é o que permite a requisição continuar.

* ❌ Não pode → bloqueia e envia erro (Barra na porta)

## Estrutura básica:
```
function meuMiddleware(req, res, next) {
  console.log("Passou pelo middleware");
  next();
}
```

* req → dados que chegam
* res → resposta
* next() → deixa continuar
⚠ Se você não chamar next(), a requisição fica travada.
Exemplo prático: Validando dados

```
function validarNome(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório" });
  }
  next();
}
```
## O que está acontecendo?
* Se nome não existir → retorna erro 400

* Se existir → permite continuar

## 🚨 IMPORTANTE
req.body só funciona depois que ativamos o middleware express.json()

```
app.use(express.json());
```
Sem isso:

```
console.log(req.body); // undefined
```