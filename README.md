# 🚀 Node.js Learning Journey

Bem-vindo ao meu repositório de estudos de **Node.js**! Este projeto documenta minha evolução, desde os conceitos fundamentais até a construção de APIs modernas e integração com bancos de dados.

O objetivo deste repositório é servir como um guia de referência pessoal e demonstrar as habilidades adquiridas ao longo do tempo, explorando diferentes arquiteturas, frameworks e ferramentas do ecossistema JavaScript/TypeScript.

---

## 📂 Estrutura do Repositório

O repositório está organizado em módulos numerados para facilitar o acompanhamento do progresso:

| Módulo | Descrição | Tecnologias Chave |
| :--- | :--- | :--- |
| **01-04** | Fundamentos, Módulos (CommonJS/ESM) e Estrutura de Pastas | Node.js Core, FS |
| **05** | Projeto Prático: Carrinho de Compras Shopee | Lógica de Programação |
| **06-07** | Gerenciamento de Pacotes e Variáveis de Ambiente | NPM, Dotenv |
| **08** | Gerador de QR Code e Senhas | Chalk, Prompt, QRCode-Terminal |
| **09-11** | Introdução ao TypeScript e Debugging | TypeScript, TS-Node |
| **13** | Minimal API com Fastify (F1 API) | Fastify, CORS, TypeScript |
| **15** | Integração com Banco de Dados | PostgreSQL, `pg` library |

---

## 🛠️ Projetos em Destaque

### 🏎️ Formula 1 Minimal API (`13-minimal-api-fastfy`)
Uma API leve construída com **Fastify** e **TypeScript** que gerencia informações de equipes e pilotos de Fórmula 1.
- **Funcionalidades:** Listagem de equipes, listagem de pilotos e busca de piloto por ID.
- **Destaque:** Uso de `tsup` para build e `tsx` para ambiente de desenvolvimento.

### 🔐 QR Code & Password Generator (`08-qr-code-e-senhas`)
Uma ferramenta de linha de comando (CLI) interativa para gerar senhas seguras e códigos QR.
- **Funcionalidades:** Menu interativo no terminal para escolha entre gerar senha ou QR Code.
- **Destaque:** Interface amigável no terminal usando `chalk` e `prompt`.

### 🐘 PostgreSQL Integration (`15-extra-postgre`)
Estudos focados na conexão e manipulação de dados em um banco de dados relacional.
- **Funcionalidades:** Configuração de Pool de conexões e operações básicas.
- **Destaque:** Gerenciamento de conexões seguras via variáveis de ambiente.

---

## 🚀 Como Executar os Projetos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/kaiserraf/nodejs-learning.git
   cd nodejs-learning
   ```

2. **Escolha um módulo:**
   Navegue até a pasta do projeto desejado, por exemplo:
   ```bash
   cd 13-minimal-api-fastfy
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute o projeto:**
   Verifique o arquivo `package.json` de cada módulo para ver os scripts disponíveis. Geralmente:
   ```bash
   npm start
   # ou para desenvolvimento
   npm run start:dev
   ```

---

## 🧠 Conceitos Estudados

- **Node.js Core:** Entendimento do Event Loop, File System e módulos nativos.
- **Gerenciamento de Módulos:** Diferenças e aplicações de `require` (CommonJS) e `import/export` (ESM).
- **TypeScript:** Tipagem estática, interfaces e compilação para JavaScript.
- **Frameworks Web:** Criação de rotas, middlewares e tratamento de requisições com **Fastify**.
- **Banco de Dados:** Conexão com **PostgreSQL**, execução de queries e gerenciamento de pools.
- **Boas Práticas:** Organização de pastas (src/services/utils), uso de `.env` para segurança e scripts NPM automatizados.

---

## 👤 Autor

**Rafael Kaiser**
- GitHub: [@kaiserraf](https://github.com/kaiserraf)

---
*Este repositório está em constante atualização conforme novos conceitos são explorados.*
