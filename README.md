 # Next Forms

Aplicação para gerenciamento de estoque. Possui uma tabela dinâmica e amigável ao usuário.

Este projeto foi desenvolvido como uma maneira de praticar e explorar as funcionalidades mais recentes introduzidas no NextJS. Nessa aplicação utilizei as [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), [Vercel Postgres](https://nextjs.org/learn/dashboard-app/setting-up-your-database) e [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations), que são combinadas com uma abordagem alternativa para gerenciar formulários no React, utilizando os hooks [useFormState](https://react.dev/reference/react-dom/hooks/useFormState) e [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus).

Para a implementação da tabela, utilizei as bibliotecas [shadcn-ui](https://ui.shadcn.com/) e [react-table](https://tanstack.com/table/latest). Essas ferramentas facilitaram a criação de uma tabela interativa, garantindo ao mesmo tempo a acessibilidade para todos os usuários

## Tecnologias
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Table](https://tanstack.com/table/latest)

## Configuração

Você precisa ter o [Git](https://git-scm.com/) e algum gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) | [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)) instalados em sua máquina.

### Criando um banco de dados na Vercel
Inicialmente, é necessário acessar o site da [Vercel](https://vercel.com). Se você já possui uma conta, faça o login. Caso contrário, crie uma nova conta

```bash
1. Navegue até a aba ‘Storage’.
2. Para criar um novo banco de dados, clique em ‘Create Database’.
3. Escolha ‘Postgres’ como o tipo de banco de dados a ser criado.
```

### Preparando o ambiente
```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/next-forms.git

2. Acesse a pasta e instale as dependências via terminal:
$ yarn / npm i
```

#### Defina as variáveis de ambiente
```bash
1. Renomeie o arquivo
	.env.example -> .env

2. Preencha os campos com os valores correspondentes às variáveis de ambiente. Esses valores podem ser localizados na aba ‘.env.local’ das configurações do seu banco de dados
	POSTGRES_URL=
	POSTGRES_PRISMA_URL=
	POSTGRES_URL_NON_POOLING=
	POSTGRES_USER=
	POSTGRES_HOST=
	POSTGRES_PASSWORD=
	POSTGRES_DATABASE=
```

### Criando a tabela no banco de dados
```bash
1. Acesse o terminal e execute o seguinte comando
curl -i -H 'Accept: application/json' http://localhost:3000/api/create-products-table
```

### Rodando a aplicação
```bash
1. Inicie a aplicação em modo de desenvolvimento:
$ yarn dev / npm run dev

2. O servidor será aberto em http://localhost:3000
```

<p align="center">Made with 💙 by <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>


