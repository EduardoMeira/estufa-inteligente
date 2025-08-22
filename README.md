# Estufa Inteligente

Este projeto é uma aplicação web para controle de uma estufa inteligente.

## Tecnologias Utilizadas
- **Vite**: Ferramenta de build rápida para projetos web modernos.
- **JavaScript**: Linguagem principal do projeto.
- **TailwindCSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.

## Estrutura de Rotas
As páginas do projeto são gerenciadas pelo objeto `routes` no arquivo `src/main.js`. Para adicionar uma nova página:

1. Crie o componente ou função que retorna o HTML da página.
2. Importe o componente no `main.js`.
3. Adicione uma nova entrada ao objeto `routes`, usando o caminho desejado como chave e o componente como valor.

Exemplo:
```js
import MinhaNovaPagina from "./minhaNovaPagina";

const routes = {
  "/": HomePage,
  "/minha-nova-pagina": MinhaNovaPagina,
  // ...outras rotas
};
```

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Como rodar o ESLint
Para verificar problemas de lint no código, execute:
```bash
npx eslint src/
```

---