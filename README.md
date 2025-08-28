# API Encurtadora de URLs 🔗

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![Node.js](https://img.shields.io/badge/Node.js-black?logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-blue?logo=docker)

Um microserviço de alta performance para encurtamento de URLs, similar ao Bitly, desenvolvido com Node.js, Express e MongoDB. A aplicação é totalmente containerizada com Docker, garantindo portabilidade e um ambiente de desenvolvimento consistente.

Este projeto foi construído para demonstrar habilidades no ecossistema JavaScript/Node.js e com bancos de dados NoSQL, focando em uma arquitetura de microserviço.

---

## ✨ Features

- ✅ **Encurtamento de URLs** longas para um código único e curto.
- ✅ **Redirecionamento** de URLs curtas para as originais.
- ✅ **Contagem de cliques** para cada URL encurtada.
- ✅ Validação para garantir que apenas URLs válidas sejam encurtadas.
- ✅ Ambiente 100% containerizado com Docker.

---

## 🚀 Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express.js:** Framework web para a construção da API.
- **MongoDB:** Banco de dados NoSQL orientado a documentos.
- **Mongoose:** ODM para modelagem e interação com o MongoDB.
- **Docker & Docker Compose:** Para a containerização da API e do banco de dados.
- **Nanoid:** Para a geração de códigos curtos e únicos.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js (versão LTS)](https://nodejs.org/pt-br)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/kauansantanaa/Encurtador-URL-api.git
   ```

2. Navegue até a pasta raiz do projeto:
   ```bash
   cd nome-da-pasta-do-projeto
   ```

3. Suba os containers com Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. A API estará disponível para ser consumida no endereço: `http://localhost:3000`

---

## 📖 Endpoints da API

| Verbo HTTP | Rota           | Descrição                                         | Corpo (Body) de Exemplo (para POST)                                        |
|------------|----------------|---------------------------------------------------|----------------------------------------------------------------------------|
| `POST`     | `/encurtar`    | Recebe uma URL longa e retorna a versão curta.    | `{"urlOriginal": "https://www.google.com/search?q=alguma+busca+longa"}`    |
| `GET`      | `/{codigo}`    | Redireciona para a URL original e conta o clique. | N/A                                                                        |