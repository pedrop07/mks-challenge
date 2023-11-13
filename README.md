# MKS Frontend Challenge
[mks challenge](https://mks-challenge-coral.vercel.app) é um site desenvolvido como parte de um desafio para um processo seletivo. Trata-se de um e-commerce com alguns produtos que estão sendo consumidos pela API fornecida pela empresa.

## Tecnologias utilizadas
- [TypeScript](https://www.typescriptlang.org)
- [React.js](https://react.dev)
- [Next.js](https://nextjs.org/)
- [React-query](https://tanstack.com/query/latest)
- [Styled-components](https://styled-components.com)
- [Zustand](https://zustand-demo.pmnd.rs)
- [Axios](https://axios-http.com/docs/intro)
- [Ant Design](https://ant.design)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Dependências para rodar localmente
- [Node.js](https://nodejs.org/en) versão >= 18.17
- Gerenciador de pacotes, por exemplo: [NPM](https://nodejs.org/en), [Yarn](https://yarnpkg.com), [PNPM](https://pnpm.io/pt/)
- Variável de ambiente NEXT_PUBLIC_API_URL no arquivo .env.local, com o valor correspondente à rota da API fornecida pela empresa

## Instalação e execução
1. Clone o repositório.
```bash
git clone https://github.com/pedrop07/mks-challenge.git
```

2. Acesse o diretório do projeto.
```bash
cd mks-challenge
```

3. Instale as dependências do projeto.
```bash
npm install
```

4. Inicie o projeto em modo de desenvolvimento
```bash
npm run dev
```

5. Abra o site em seu navegador visitando [http://localhost:3000](http://localhost:3000). Ao acessar o site, será possível visualizar todos os produtos, adicionar produtos ao carrinho, remover produtos do carrinho, ajustar a quantidade de cada produto selecionado e finalizar a compra.

## Regras de negócio
- Se o carrinho estiver vazio, a mensagem "Seu carrinho está vazio" deve aparecer no drawer.
- Ao tentar remover um item do carrinho, um Popover com a mensagem "Remover {nome do produto} do carrinho de compras?" deve aparecer juntamente com dois botões: "Cancelar" e "Remover".selecionados para a batalha, remova um deles para escolher outro no lugar" deve aparecer no canto superior direito da tela.
- Ao tentar adicionar o mesmo produto ao carrinho, um toast de aviso com a mensagem "O produto ${nome do produto} já foi adicionado ao seu carrinho" deve aparecer no canto superior direito da tela.
- Quando a quantidade de um determinado produto for igual ao "amount", o botão de incrementar, identificado pelo símbolo +, deve ficar desabilitado.
- Quando a quantidade de um determinado produto for igual a 1, o botão de decrementar, identificado pelo símbolo -, deve ficar desabilitado.
