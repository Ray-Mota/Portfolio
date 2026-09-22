# Portfólio — Ray Mota de Lima

Projeto base do portfólio, feito em **React + Vite + JavaScript** com **Material UI**.

## Como rodar

Este ambiente não tem acesso à internet, então o `node_modules` não vem instalado.
No seu computador, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  assets/           -> foto de perfil (profile.jpg)
  components/       -> Navbar, Hero, About, Projects, ProjectCard, Technologies, Contact, Footer
  pages/            -> Home.jsx (página principal) e ProjectDetail.jsx (detalhe do projeto)
  data/content.js   -> TODOS os textos, projetos, tecnologias e contatos — edite aqui
  theme/theme.js    -> paleta de cores, tipografia e tokens de design
```

## O que já está pronto
- Hero com nome, cargo, bio e foto
- Seção "Sobre mim" com destaques
- Grid de projetos (3 projetos de exemplo, clicáveis)
- Página de detalhe de projeto (`/projeto/:id`)
- Seção de tecnologias
- Seção de contato com formulário (abre o app de email do usuário via `mailto:`)
- Tema dark/light alternado, igual à referência que você mandou

## Próximos passos sugeridos
- Editar `src/data/content.js` com seus textos, projetos reais e links
- Trocar o link de "Baixar CV" (`profile.cvUrl`) por um PDF real
- Se quiser um formulário de contato que realmente envie e-mail (sem abrir o cliente de email do usuário), integrar com **Formspree** ou **EmailJS**
- Trocar os placeholders de imagem dos projetos por prints reais
