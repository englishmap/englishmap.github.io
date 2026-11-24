# Brief e plano de design

## Brief

1. **Quem e qual tarefa.** Um adulto brasileiro que quer encher o dia de inglês sem sair do país e precisa achar, rápido, recursos do seu nível e do seu bolso.
2. **Conteúdo real.** 49 recursos em 10 categorias, de 2 a 7 por categoria. Nomes de 3 (TED) a 27 caracteres (Cambridge Test Your English). Cada um tem formato, faixa de nível CEFR e custo.
3. **Elemento principal.** As linhas de recurso dentro de cada categoria.
4. **Mundo do assunto.** O dicionário para aprendizes (Cambridge, Longman): verbete com palavra em negrito, transcrição fonética, classe gramatical em itálico, rótulo de nível CEFR, índice de dedo na lateral.
5. **Densidade e cena.** Consulta rápida, muitas vezes no celular. Tema segue o sistema, com alternância persistida.

Modos: **Operate** na página de recursos, **Read** no guia. Nada vende.

## Plano

Cores (OKLCH, temas compostos separadamente): papel branco frio, grafite para texto, uma régua clara, e um vermelho de caneta de correção (`--pen`) com uma só função: ação, foco e item atual.

Tipos: a fonte do sistema para interface e dados (zero download, Operate). Charis SIL, feita pela SIL para linguistas e com cobertura completa de IPA, para palavras-verbete, transcrições e títulos. Escala 1,25.

Layout (1440 px):

```
englishmap                                   Recursos  Como montar a imersão  ◐
Imersão em inglês sem sair de casa
Parágrafo curto
Nível [Todos A1 … C2]  Custo [Todos Grátis Freemium Pago]  [Filtrar…]   49 recursos
surround   4 │ surround /səˈraʊnd/ verb
listen     7 │ Montar o ambiente
watch      6 │ ─────────────────────────────────────────────
…            │ Language Reactor          Extensão  ▯▮▮▮▮▮ A2–C2  Freemium
```

Assinatura: cada categoria é um verbete de dicionário (o verbo em inglês, a transcrição e a classe), e o índice lateral lista os verbetes como o índice de dedo de um dicionário. A faixa de nível com seis células mostra o intervalo CEFR de relance.

Raio 3 px só em controles; sem sombras; separação por réguas de 1 px.

## Ataque ao plano

- Um prompt parecido para outro produto daria a mesma coisa? O verbete com IPA só faz sentido num site sobre aprender uma língua; o resto é deliberadamente quieto.
- Evitado: creme + serifa + terracota (o papel é branco frio e a serifa fica só nos verbetes), cards iguais com ícone, eyebrows em caixa alta, emoji como ícone.
- Mudou na revisão: a classe gramatical deixou de usar o vermelho, para o vermelho continuar significando ação.
