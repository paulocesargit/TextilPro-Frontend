<div align="center">
  <img src="./src/assets/LogoTextilPro.png" alt="Logo do TextilPro" width="160">

# 🧵 TextilPro

**Gestão inteligente para o setor têxtil.**

Tecnologia para simplificar a gestão de confecções.

  <br>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)

</div>

---

## 📌 Sobre o projeto

O **TextilPro** é um sistema de gestão desenvolvido com foco nas necessidades de empresas e profissionais do setor têxtil, especialmente confecções.

A proposta é reunir diferentes áreas da operação em uma interface intuitiva, facilitando o gerenciamento das informações e a organização das atividades do dia a dia.

O projeto utiliza tecnologias modernas de desenvolvimento web, com componentes reutilizáveis, navegação entre páginas e estilização modular.

### 🎯 Objetivos

- Simplificar o gerenciamento das atividades de uma confecção.
- Centralizar informações comerciais e operacionais.
- Facilitar o acompanhamento de vendas, pedidos e estoque.
- Proporcionar uma experiência de navegação simples e intuitiva.
- Aplicar boas práticas de desenvolvimento frontend.

---

## ✨ Funcionalidades

| Módulo               | Descrição                                                             |
| -------------------- | --------------------------------------------------------------------- |
| 🔐 **Login**         | Tela de acesso ao sistema.                                            |
| 📊 **Dashboard**     | Visão geral das informações e atividades da empresa.                  |
| 🛍️ **Vendas**        | Registro e acompanhamento de vendas, valores, descontos e pagamentos. |
| 📦 **Estoque**       | Gerenciamento de produtos, categorias e quantidades disponíveis.      |
| 📋 **Pedidos**       | Organização e acompanhamento dos pedidos.                             |
| ⚙️ **Configurações** | Espaço destinado às preferências do sistema.                          |

> **Nota:** as funcionalidades disponíveis dependem do estágio atual de desenvolvimento do projeto.

---

## 🛠️ Tecnologias utilizadas

### ⚛️ React

Biblioteca JavaScript utilizada para construir interfaces por meio de componentes reutilizáveis.

- **Aplicação:** desenvolvimento das páginas, componentes e interações.
- **Documentação:** [React](https://react.dev/)

### ⚡ Vite

Ferramenta que oferece um ambiente de desenvolvimento rápido e recursos para gerar a versão de produção.

- **Aplicação:** execução e compilação do frontend.
- **Documentação:** [Vite](https://vite.dev/)

### 🟨 JavaScript

Linguagem utilizada para implementar a lógica da aplicação e as interações da interface.

- **Aplicação:** gerenciamento de estados, eventos e formulários.
- **Documentação:** [JavaScript — MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### 🎨 CSS Modules

Abordagem de estilização que permite organizar os estilos por componente e reduzir conflitos entre classes CSS.

- **Aplicação:** estilização das páginas e componentes.
- **Documentação:** [CSS Modules](https://github.com/css-modules/css-modules)

---

## 📚 Bibliotecas utilizadas

### 🧭 React Router

Responsável pelo gerenciamento da navegação entre as páginas do sistema.

**Utilizado para:**

- Configurar as rotas da aplicação.
- Navegar entre os módulos.
- Criar links de navegação.
- Identificar a rota ativa no menu lateral.

📖 [Documentação oficial do React Router](https://reactrouter.com/)

### 🔔 Sonner

Biblioteca utilizada para exibir notificações temporárias e fornecer feedback visual ao usuário.

**Utilizado para:**

- Exibir mensagens de sucesso.
- Informar sobre erros.
- Apresentar avisos.
- Comunicar o resultado de determinadas operações.

📖 [Documentação oficial do Sonner](https://sonner.emilkowal.ski/)

### 🎨 Lucide React

Biblioteca de ícones personalizáveis utilizada para melhorar a identificação visual dos elementos da interface.

**Utilizado para:**

- Ícones da barra lateral.
- Botões e ações.
- Elementos de navegação.
- Identificação dos módulos do sistema.

📖 [Documentação oficial do Lucide](https://lucide.dev/)

### 📱 qrcode.react

Biblioteca que permite gerar QR Codes diretamente nos componentes React.

**Utilizado para:**

- Gerar códigos QR no módulo de vendas.

📖 [Repositório e documentação do qrcode.react](https://github.com/rosskhanas/qrcode.react)

### ⚛️ React DOM

Biblioteca responsável por renderizar a interface React no navegador.

📖 [Documentação oficial do React DOM](https://react.dev/reference/react-dom)

---

## 🖥️ Interface e experiência do usuário

O TextilPro busca oferecer uma experiência simples e consistente, priorizando a organização das informações e a facilidade de navegação.

- **Navegação lateral:** acesso rápido aos módulos.
- **Componentização:** reutilização de elementos da interface.
- **Estilização modular:** organização dos estilos por componente.
- **Identidade visual:** padronização dos elementos visuais.
- **Notificações:** feedback sobre as ações realizadas.
- **Organização das informações:** distribuição dos dados conforme cada módulo.

---

## 📂 Estrutura do projeto

A estrutura abaixo é um exemplo e deve ser ajustada para corresponder aos diretórios reais do repositório.

```text
textilpro-frontend/
├── assets/
│   └── logo.png
├── public/
├── src/
│   ├── components/
│   │   └── Sidebar/
│   ├── layouts/
│   ├── pages/
│   │   ├── Login/
│   │   ├── Dashboard/
│   │   ├── Vendas/
│   │   ├── Estoque/
│   │   ├── Pedidos/
│   │   ├── Comissoes/
│   │   ├── Relatorios/
│   │   └── Configuracoes/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

| Diretório ou arquivo | Responsabilidade                         |
| -------------------- | ---------------------------------------- |
| `assets/`            | Imagens e recursos visuais.              |
| `components/`        | Componentes reutilizáveis.               |
| `layouts/`           | Estruturas compartilhadas entre páginas. |
| `pages/`             | Páginas dos módulos do sistema.          |
| `routes/`            | Configuração das rotas.                  |
| `App.jsx`            | Componente principal da aplicação.       |
| `main.jsx`           | Ponto de entrada do React.               |
| `index.css`          | Estilos globais e variáveis visuais.     |
| `package.json`       | Dependências e scripts do projeto.       |

---

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm, incluído na instalação do Node.js.
- [Git](https://git-scm.com/)

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pelo endereço real do repositório no GitHub.

### 2. Entre na pasta do projeto

```bash
cd textilpro-frontend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

## Após iniciar o servidor, acesse no navegador o endereço local informado pelo Vite no terminal.

## 📦 Dependências

As principais bibliotecas consideradas neste projeto são:

| Pacote         | Finalidade                           |
| -------------- | ------------------------------------ |
| `react`        | Construção da interface.             |
| `react-dom`    | Renderização no navegador.           |
| `react-router` | Navegação entre páginas.             |
| `lucide-react` | Ícones.                              |
| `sonner`       | Notificações.                        |
| `qrcode.react` | Geração de QR Codes.                 |
| `vite`         | Ambiente de desenvolvimento e build. |

Para consultar as dependências e versões instaladas, verifique o arquivo `package.json`.

Você também pode executar:

```bash
npm list --depth=0
```

---

## 🧩 Práticas de desenvolvimento

O projeto utiliza práticas que contribuem para a organização e a manutenção do código:

- **Componentização:** divisão da interface em partes reutilizáveis.
- **Separação de responsabilidades:** organização de páginas, componentes e estilos.
- **Navegação por rotas:** gerenciamento das páginas com React Router.
- **Estilização modular:** redução de conflitos entre classes CSS.
- **Feedback visual:** notificações para informar o resultado das operações.

---

## 👨‍💻 Sobre o desenvolvimento

O TextilPro é um projeto de desenvolvimento frontend voltado à aplicação prática de conhecimentos em desenvolvimento web e à criação de soluções digitais para o setor têxtil.

A proposta é unir tecnologia, organização e facilidade de uso em uma ferramenta direcionada às necessidades de gestão de confecções.

---

<div align="center">
  <img src="/src/assets/LogoTextilPro.png" alt="Logo do TextilPro" width="90">

**TextilPro — Tecnologia que conecta a gestão ao setor têxtil.**

</div>
