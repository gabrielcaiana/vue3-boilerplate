# Projeto Boilerplate Vue 3 com Typescript, Vitest, Eslint, Tailwind, Vue Router, Pinia, Pnpm e Commitlint

Este é um projeto boilerplate que utiliza Vue.js 3, TypeScript, Vitest, Eslint, Tailwind, Vue Router, Pinia, Pnpm e Commitlint. Este boilerplate foi criado para ajudar no desenvolvimento rápido de aplicações web, fornecendo um ambiente de desenvolvimento moderno e configurado com as melhores práticas.

## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Testes](#testes)
- [Estilização](#estilização)
- [Rotas](#rotas)
- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Linters e Formatação de Código](#linters-e-formatação-de-código)
- [Commits](#commits)
- [Suporte](#suporte)
- [Licença](#licença)

## Requisitos

- Node.js 12.x ou superior
- Pnpm 6.x ou superior

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
pnpm install
```

## Uso

```bash
pnpm dev

A aplicação estará disponível em http://localhost:3000.

Para criar uma versão de produção, execute:

```bash
pnpm build
```

## Testes

Este boilerplate utiliza o Vitest para testes. Para executar os testes, use o seguinte comando:

```bash
pnpm test
````

## Estilizaçāo

O projeto utiliza Tailwind CSS para estilização. A configuração padrão pode ser ajustada no arquivo tailwind.config.js. Para mais informações, consulte a documentação do Tailwind.

## Rotas

O Vue Router é utilizado para lidar com as rotas da aplicação. A configuração das rotas pode ser encontrada no diretório ```src/routes```.

## Gerenciamento de Estado

Este boilerplate utiliza Pinia como solução de gerenciamento de estado. As stores podem ser encontradas no diretório ```src/stores```.

## Linters e Formatação de Código

Este projeto utiliza Eslint e Prettier para garantir a qualidade e consistência do código. Ambos trabalham juntos para identificar e corrigir problemas de estilo, formatação e possíveis erros no código.

Para executar o linter e verificar se há problemas no código, use o seguinte comando:

```bash
pnpm lint
````

Se você quiser corrigir automaticamente os problemas encontrados, adicione a flag --fix ao comando:

```bash
pnpm lint --fix
```


## Commits

Este projeto utiliza o Commitlint para manter um padrão de mensagens de commit. O arquivo .commitlintrc.js contém as regras de formatação de mensagens de commit. Para mais informações, consulte a documentação do Commitlint.

## Suporte

Se você tiver alguma dúvida ou precisar de ajuda, sinta-se à vontade para abrir uma issue no repositório do projeto.

## Licença

Este projeto é licenciado sob a [MIT License.](https://opensource.org/license/mit/) Essa licença permite o uso, a cópia, a modificação e a distribuição do código-fonte para fins privados e comerciais, desde que a nota de direitos autorais e a permissão sejam incluídas em todas as cópias ou partes substanciais do software. Para mais informações, consulte o arquivo LICENSE no repositório do projeto.
