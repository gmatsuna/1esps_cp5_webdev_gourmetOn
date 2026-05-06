# GourmetOn

## 👥 Desenvolvedores

- Gilberto Hideaki Matsunaga - RM568191
- Diogo Henrique Alves Magalhães - RM568541

O **GourmetOn** é um projeto web acadêmico desenvolvido para facilitar a busca e descoberta de pratos gourmet com base nos ingredientes informados pelo usuário. A aplicação oferece interface moderna, responsiva e componentes reutilizáveis para apresentar destaques, funcionalidades e pratos.

> Projeto realizado como Checkpoint 05 no curso de Web Development da **FIAP - Faculdade de Informática e Administração Paulista**.

## 🎯 Objetivo

Permitir que usuários busquem pratos a partir de um ingrediente, exibindo resultados com imagem e nome do prato. Quando a API externa atinge limite ou falha, o sistema utiliza dados mock para manter a experiência consistente.

## ✨ Funcionalidades

- Busca de pratos por ingrediente.
- Retorno de pratos com imagem e título.
- Layout responsivo com cards grades.
- Feedback de carregamento enquanto a API responde.
- Tratamento de erro e fallback com dados de demonstração.

## 🧩 Tecnologias

- React 19
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Lucide React

## 📁 Estrutura do Projeto

- `src/App.jsx` - composiciona a interface principal e controla busca por ingrediente.
- `src/services/api.jsx` - integração com a API Spoonacular e fallback de dados mock.
- `src/components/` - conjunto de componentes de interface reutilizáveis.
- `src/index.css` - estilos globais e importação do Tailwind.
- `index.html` - arquivo de entrada da aplicação.

## 🚀 Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o endereço exibido no terminal para visualizar o site.

## 🛠️ Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento.
- `npm run build` - gera a build de produção.
- `npm run preview` - pré-visualiza a build de produção.
- `npm run lint` - executa o ESLint no projeto.

## 🔐 API

A busca de pratos utiliza a API do Spoonacular em `src/services/api.jsx`. Caso a chamada à API falhe por limite de requisições ou outro erro, a aplicação retorna um conjunto de pratos de exemplo para não apresentar uma página vazia.

## 📌 Observações

- A aplicação foi construída com foco em usabilidade, design responsivo e modularidade.
- O projeto usa Tailwind CSS via plugin Vite para geração de utilitários de estilo.
