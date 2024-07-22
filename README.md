# 📅 Planner de viagem - READ.ME

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/haaveeni/plannerDeViagem?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/haaveeni/plannerDeViagem">
  
  <a href="https://github.com/haaveeni/plannerDeViagem/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/haaveeni/plannerDeViagem">
  </a>
  
   <a href="">
    <img alt="Feito pela Veridiana Lucena" src="https://img.shields.io/badge/feito-por%20Veridiana%20Lucena-D818A5">
   </a>
   
   <a href="https://github.com/haaveeni/plannerDeViagem/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/haaveeni/plannerDeViagem?style=social">
  </a>

<h4 align="center"> 
	🚧 📅 Planner de Viagem 🚧
</h4>

<p align="center">
	<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green">
<!-- 	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen"> -->
</p>

## 💻 Sobre o projeto

📅 Planner de Viagem é uma projeto de planejamento de viagens, que permite você:
<ul>
  <li>Escolher o destino</li>
  <li>Selecionar o período (range de data)</li>
  <li>Alterar local/data</li>
  <li>Adicionar e gerenciar convidados</li>
  <li>Cadastrar atividades (com nome, dia e horário) </li>
  <li>Salvar links importantes (AirBnb, etc)</li>
</ul>


Projeto desenvolvido durante a **Semana NLW Journey - React** oferecida pela [RocketSeat](https://app.rocketseat.com.br/).

---

## ⚙️ Funcionalidades

- [x] Página Inicial - Primeiro passo
  - [x] Escolher o destino
  - [x] Selecionar o período
     
- [x] Convidados - Segundo passo
  - [x] Adicionar
  - [x] Alterar local e data
     
- [x] Modal para confirmar criação de viagem - Terceiro passo
  - [x] Cadastro de nome e email do criador da viagem

- [x] Atividades - Quarto passo
  - [ ] Alterar local e data
  - [x] Modal: Cadastrar atividade (nome, data e hora)
  - [ ] Excluir atividade
  - [ ] Links importantes
  - [ ] Gerenciar convidados

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a target="_blank" href="https://www.figma.com/design/SQW4NRm7ewO1F9SCmToIPj/NLW-Journey-%E2%80%A2-Planejador-de-viagem-(Community)?node-id=3-376&t=ShKQPkUxITMikXsj-0">
  <img alt="Made by RocketSeat" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Web

<img width="1428" alt="Captura de Tela 2024-07-22 às 15 39 11" src="https://github.com/user-attachments/assets/94374773-28c9-4c5d-852d-930484dc7895">

<img width="1409" alt="Captura de Tela 2024-07-22 às 15 40 21" src="https://github.com/user-attachments/assets/d43683b3-fca3-4b28-a7e5-6a82eae88c81">

<img width="1417" alt="Captura de Tela 2024-07-22 às 15 42 45" src="https://github.com/user-attachments/assets/4a0e213c-7f13-4bee-b974-60f0edbbf362">

<img width="1421" alt="Captura de Tela 2024-07-22 às 15 43 20" src="https://github.com/user-attachments/assets/74a19f02-d718-4cf5-b4ce-1d2ae3562f1c">

<img width="1414" alt="Captura de Tela 2024-07-22 às 15 44 19" src="https://github.com/user-attachments/assets/0f2dbc75-b18d-4b6a-aa7f-62db0ae0065c">

<img width="1397" alt="Captura de Tela 2024-07-22 às 15 45 31" src="https://github.com/user-attachments/assets/a2cd9e93-795c-426d-b298-a103972e2c1e">

---

## 🛣️ Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:haaveeni/plannerDeViagem.git

# Acesse a pasta do projeto no terminal/cmd
$ cd plannerDeViagem

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/rocketseat-education/nlw-journey-nodejs.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-journey-nodejs

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:5173 - acesse http://localhost:5173

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**


#### **Utilitários**🛻

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo](https://www.figma.com/design/SQW4NRm7ewO1F9SCmToIPj/NLW-Journey-%E2%80%A2-Planejador-de-viagem-(Community)?node-id=3-376&t=ShKQPkUxITMikXsj-0)**
-   API:  **https://github.com/rocketseat-education/nlw-journey-nodejs**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**

---

## 🧙‍♂️ Autor

<a href="https://www.linkedin.com/in/veridiana-lucena/">
 <img src="https://media.licdn.com/dms/image/D4D03AQE7TU2xzZdMtQ/profile-displayphoto-shrink_200_200/0/1715875083059?e=1727308800&v=beta&t=IMNulLJ8nfCxPci-BR6WRLSwNtphIVhohpEqlGyt9QI" width="100px;" alt=""/>
 <br />
 <b>Veridiana Lucena de Marchi</b></a> <a href="" title="">✨</a>
 <br />
