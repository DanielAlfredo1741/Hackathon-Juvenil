# Criação da Plataforma Ngola - Combate à Desinformação

O objetivo é desenvolver uma plataforma dinâmica de combate à desinformação denominada **Ngola**, com base nos 5 designs de tela fornecidos. Esta plataforma permitirá que os utilizadores façam login, visualizem um feed dinâmico de notícias/conteúdo crítico, verifiquem a autenticidade de informações, criem publicações (Manifesto Criativo) e tenham uma página de perfil impactante.

## User Review Required

> [!IMPORTANT]  
> A plataforma Ngola, devido à sua complexidade (múltiplas páginas, navegação rica, feed de dados, etc.), é claramente uma **aplicação web avançada**. Sendo assim, o plano é inicializar a base de código utilizando o **React através do Vite**, em conjunto com **Vanilla CSS** para estilização visual rica sem depender de frameworks como Tailwind (a não ser que tenha preferência explícita). Você concorda com esta escolha de tecnologia (React + Vite)?

## Proposed Changes

A estrutura inicial contemplará um projeto React utilizando roteamento (react-router-dom) para navegar entre as diferentes visões do sistema.

### Project Setup
- Inicialização do projeto no diretório atual através do comando `npx create-vite@latest ./ --template react`.
- Limpeza dos ficheiros boilerplate do Vite.
- Estruturação de pastas (`src/pages`, `src/components`, `src/assets`, `src/styles`).

### Core & Routing
- Configuração do `react-router-dom` abordando os seguintes caminhos:
  - `/` -> **Login/Landing** (Página: O Futuro é Cinético)
  - `/feed` -> **Feed Principal** (Página: A Voz do Povo, Tendências)
  - `/studio` -> **Studio / Criação** (Página: Manifesto Criativo)
  - `/verify` -> **Verificação de Fatos** (Página: Verificar Informação)
  - `/profile` -> **Perfil do Utilizador** (Página: Kieza Manuel)
- Criação e configuração de estilos globais (`index.css`), incluindo paleta de cores fidedigna às imagens fornecidas (vermelho rico, azul marinho escuro, cinzas suaves) e micro-animações, como preconizado pelas regras de design "Premium/Dynamic Design".

### Components & Pages
Iremos implementar componentes reutilizáveis, seguindo a estética premium e design system das capturas de ecrã:

#### [NEW] `src/pages/Login.jsx` & `src/pages/Login.css`
Página dividida ao meio em desktop com imagem/slogan do lado esquerdo e formulário de acesso do direito.

#### [NEW] `src/pages/Feed.jsx` & `src/pages/Feed.css`
Feed de rede social com três colunas em desktop: Topicos Populares (Tendências), Timeline Central e sugestões/chat ao lado direito.

#### [NEW] `src/pages/Studio.jsx` & `src/pages/Studio.css`
Página de criação de publicações, com seletores ricos para Formato (Vídeo, Foto, Texto) e uma aparência moderna.

#### [NEW] `src/pages/Verify.jsx` & `src/pages/Verify.css`
Janela de busca (Scanner Digital) focada em analisar links/textos, com um dashboard visual sinalizando de forma clara conteúdo Verdadeiro, Duvidoso ou Falso em tons verdes, amarelos e vermelhos.

#### [NEW] `src/pages/Profile.jsx` & `src/pages/Profile.css`
Perfil detalhado em cartões/blocos mostrando alcance de impacto, conexões ativas, denúncias verificadas e histórico.

#### [NEW] `src/components/Navigation.jsx`
Componente de navegação superior (Top navbar) e inferior, dependendo do design context (com botões de navegação estilizados).

## Open Questions

> [!WARNING]  
> 1. Para as imagens do design (a imagem do jovem na Landing Page, as fotos de perfil e as miniaturas do Feed): deseja que eu gere **mockups temporários** simulando esses assets usando a ferramenta geradora de imagens de IA, ou você irá providenciá-los posteriormente?
> 2. Existem requisitos de responsividade específicos, como "Mobile First", para este projeto inicial? Irei, por padrão, assemelhar a interface do protótipo que está em grande parte focado em layout tipo "Tablet/Desktop".

## Verification Plan

Concluídas as fases, o teste consistirá em:
### Automated Tests
- Compilar o projeto com `npm run build` para garantir que não haja erros ou warnings TypeScript/React.

### Manual Verification
- Iniciar um servidor local com `npm run dev` e sublinhar os passos via capturas de ecrã usando a ferramenta de Browser (SubAgent) gravado ou pedir para você mesmo testar localmente todas as rotas e constatar os designs que irão "WOW" the user (UAU o usuário!).
