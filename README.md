# CRUD com Node.js, Express e MongoDB

Este é um projeto CRUD (Create, Read, Update, Delete) utilizando Node.js, Express e MongoDB. Ele fornece uma API RESTful para gerenciar recursos no banco de dados MongoDB.

# Tecnologias Utilizadas
Node.js

Express.js

MongoDB

Mongoose

## Instalação
1: Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2: Acesse o diretório do projeto:

npm install my-project
  cd my-project

3:Instale as dependências:
 
 npm install

4:Configure as variáveis de ambiente:

 PORT=3000
MONGO_URI=mongodb://localhost:27017/nome-do-banco 

#Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:
npm run dev


## Documentação da API

#### Endpoints da API

```http
  GET /api/usuario
```
Corpo da requisição (JSON):

{
  "nome": "Novo Nome",
  "descricao": "Nova descrição"
}


## Listar todos os recursos

GET /api/itens

## Atualizar um recurso
 PUT /api/usuario/:id

 Corpo da requisição (JSON):

 {
  "nome": "Novo Nome",
  "descricao": "Nova descrição"
}

## Excluir um recurso

DELETE /api/usuario/:id

