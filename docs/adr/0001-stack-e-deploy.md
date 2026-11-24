# 0001 — Astro estático no GitHub Pages

## Contexto

O site é um catálogo pequeno que muda por commit, sem login, formulários ou dados de usuário.

## Decisão

Astro com saída estática, catálogo em JSON validado por Zod no build, filtros em TypeScript puro no cliente (sem framework de UI), deploy no GitHub Pages via Actions.

## Alternativas rejeitadas

- **CMS ou banco de dados:** custo de operação sem ganho para ~50 itens.
- **React/Preact para os filtros:** o filtro é alguns `hidden` em linhas já renderizadas; um framework só acrescentaria peso.
- **Busca com Pagefind (como no NewsMapp):** com 49 itens um filtro de texto local resolve.

## Consequências

Adicionar um recurso é editar um JSON e abrir um PR. Se o catálogo passar de algumas centenas de itens, reavaliar busca indexada e páginas por categoria.
