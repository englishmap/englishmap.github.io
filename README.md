<p align="center">
  <img src="docs/brand/logo.webp" alt="englishmap" width="480">
</p>

<p align="center">
  Recursos para aprender inglês online como numa imersão, por nível e custo.<br>
  <a href="https://englishmap.github.io/"><strong>englishmap.github.io</strong></a>
</p>

---

Um diretório de recursos para aprender inglês online como numa imersão: o que ouvir, assistir, ler, falar e escrever todos os dias, separado por nível (A1 a C2) e custo. Inspirado no [NewsMapp](https://github.com/newsmapp/newsmapp.github.io).

O site é estático, gratuito, sem anúncios, links de afiliado ou rastreamento.

## Rodando

Requisitos: Node.js 24 e pnpm 10 (ou `mise install`).

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # formatação, tipos, schema do catálogo e testes
pnpm build        # gera dist/
```

## Estrutura

```
data/catalog.json   Catálogo: categorias e recursos (validado por Zod no build)
src/schemas/        Schema do catálogo
src/lib/            Lógica pura: catálogo, filtros, rótulos
src/components/     Componentes de interface
src/pages/          Rotas: / (recursos), /como-montar/ (guia), 404
docs/               Brief de design e decisões (ADR)
```

## Adicionando um recurso

Acrescente um objeto em `data/catalog.json` com `id`, `name`, `url` (https), `category`, `format`, `summary` (até 200 caracteres, em português), `from`/`to` (nível CEFR) e `cost` (`free`, `freemium` ou `paid`). Rode `pnpm check`; um campo errado quebra o build com a mensagem do Zod.

Critérios: o recurso precisa ser útil para quem estuda sozinho em casa, estar no ar e ter o nível e o custo conferidos no próprio site. Nada de link patrocinado.
