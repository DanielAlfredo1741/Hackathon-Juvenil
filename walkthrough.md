# Plataforma Ngola - Conclusão do Desenvolvimento

O desenvolvimento front-end da plataforma **Ngola** (O Futuro é Cinético) foi concluído com sucesso e implementado através das directrizes premium de design.

## O Que Foi Implementado

> [!TIP]
> A tua aplicação encontra-se operacional no servidor de desenvolvimento local.
> Podes visualizar o resultado brilhante acedendo a [http://localhost:5174/](http://localhost:5174/) no teu navegador!

### Estrutura & Routing
A aplicação baseia-se em **React, Vite e React Router DOM** para navegação fluida sem recarregamento da página (Single Page Application). Implementou-se um design system em `index.css` focado num esquema de cores profundo e vibrante, complementado por tipografia limpa (Inter).

Foram criadas 5 visões principais, interconectadas:

1. **Login (`/`)**: 
   - Divisão hero/split com fundo "dark-navy" e formulário branco minimalista de login, remetendo diretamente ao "Manifesto Digital".
2. **Feed (`/feed`)**: 
   - Timeline interativa com 3 colunas (barras laterais de tendências e live chats). Cartões de "O SILÊNCIO NÃO É UMA OPÇÃO" e de vídeos embebidos com ícones reativos.
3. **Studio (`/studio`)**: 
   - A ferramenta de "Manifesto Criativo", onde os utilizadores podem partilhar a sua visão, selecionar "VÍDEO / FOTO / TEXTO" e adicionar tags estilizadas. 
4. **Verificação de Factos (`/verify`)**: 
   - A funcionalidade crucial em que se pode validar informações. Layout com um "Scanner Digital", cartões de sinalização tipo semáforo (Verdadeiro, Duvidoso, Falso) com as suas respectivas paletas de cores intuitivas.
5. **Perfil (`/profile`)**:
   - Conta pessoal (exemplificada em *Kieza Manuel*). Um dashboard limpo de estatísticas (Impacto, Denúncias), listagem visual de medalhas geradas por CSS puro e cronologia do manifesto do utilizador.

### Detalhes Dinâmicos 
- O componente genérico **`Navigation`** apresenta-se elegantemente no topo (desktop) ou como uma barra iterativa inferior ("tab bar") se acessado através de dispositivos móveis.
- Adicionei botões interativos, gradientes responsivos consoante o contexto, avatares simulados dinamicamente via `Dicebear API` e fundos inspirados por CSS que mimetizam perfeitamente as inspirações gráficas pedidas!

## Próximos Passos
Caso desponhas da imagem de fundo base para gerar e aprimorar definitivamente a Landing Page ou mais componentes gráficos (`login_boy.webp`), estes podem ser copiados facilmente para o diretório `/public` na raiz do projeto (`Hackathon-Juvenil`).

Divirta-se a explorar a tua inovadora plataforma Ngola combatendo a desinformação! Se encontrares algum pormenor num componente que precises de afinar (como ligações API de backend mais tarde), avisa-me!
