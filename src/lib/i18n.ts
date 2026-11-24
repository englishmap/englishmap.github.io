import type { Cost, Format, Lang } from '../schemas/catalog';

export const DEFAULT_LANG: Lang = 'pt';

export const REPO_URL = 'https://github.com/englishmap/englishmap.github.io';

export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US' };
export const OG_LOCALE: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US' };
/** The name of each language in that language, for the switcher. */
export const LANG_NAME: Record<Lang, string> = { pt: 'Português', en: 'English' };

/** Route of each page per language. Paths are relative to the site base. */
export const ROUTES = {
  home: { pt: '/', en: '/en/' },
  guide: { pt: '/como-montar/', en: '/en/guide/' },
  abroad: { pt: '/intercambio/', en: '/en/study-abroad/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

export const COST_LABEL: Record<Lang, Record<Cost, string>> = {
  pt: { free: 'Grátis', freemium: 'Freemium', paid: 'Pago' },
  en: { free: 'Free', freemium: 'Freemium', paid: 'Paid' },
};

export const COST_TITLE: Record<Lang, Record<Cost, string>> = {
  pt: { free: 'Grátis', freemium: 'Grátis com plano pago', paid: 'Pago' },
  en: { free: 'Free', freemium: 'Free with a paid plan', paid: 'Paid' },
};

export const FORMAT_LABEL: Record<Lang, Record<Format, string>> = {
  pt: {
    extension: 'Extensão',
    'site-app': 'Site e app',
    podcast: 'Podcast',
    'audio-video': 'Áudio e vídeo',
    youtube: 'YouTube',
    video: 'Vídeo',
    site: 'Site',
    app: 'App',
    books: 'Livros',
    ebooks: 'E-books',
    newspaper: 'Jornal',
    lessons: 'Aulas',
    community: 'Comunidade',
    dictionary: 'Dicionário',
    test: 'Teste',
    series: 'Série',
    audiobooks: 'Audiolivros',
  },
  en: {
    extension: 'Extension',
    'site-app': 'Site and app',
    podcast: 'Podcast',
    'audio-video': 'Audio and video',
    youtube: 'YouTube',
    video: 'Video',
    site: 'Site',
    app: 'App',
    books: 'Books',
    ebooks: 'E-books',
    newspaper: 'Newspaper',
    lessons: 'Lessons',
    community: 'Community',
    dictionary: 'Dictionary',
    test: 'Test',
    series: 'Series',
    audiobooks: 'Audiobooks',
  },
};

export const UI = {
  pt: {
    skip: 'Pular para o conteúdo',
    navLabel: 'Principal',
    navResources: 'Recursos',
    navGuide: 'Guia de imersão',
    navAbroad: 'Intercâmbio',
    theme: 'Alternar tema claro e escuro',
    langSwitch: 'Idioma',
    homeTitle: 'englishmap: imersão em inglês sem sair de casa',
    homeDescription: (n: number) =>
      `${n} recursos para ouvir, assistir, ler, falar e escrever em inglês todos os dias, separados por nível (A1 a C2) e custo.`,
    h1: 'Imersão em inglês sem sair de casa',
    intro: (n: number) =>
      `Morar fora funciona porque o inglês está em tudo o dia inteiro. Dá para chegar perto disso trocando o que você já ouve, assiste e lê por versões em inglês no seu nível. Aqui estão ${n} recursos para isso, separados pelo que você vai fazer com eles.`,
    introLink: 'Veja como montar a rotina',
    filtersLabel: 'Filtrar recursos',
    level: 'Nível',
    levels: 'Níveis',
    levelRange: (a: string, b: string) => `${a} a ${b}`,
    cost: 'Custo',
    format: 'Formato',
    all: 'Todos',
    query: 'Filtrar por nome ou descrição',
    count: (n: number) => (n === 1 ? '1 recurso' : `${n} recursos`),
    categories: 'Categorias',
    empty: 'Nenhum recurso com esses filtros.',
    reset: 'Limpar filtros',
    pos: 'verb',
    footerAbout: 'Recursos para aprender inglês online como numa imersão, por nível e custo.',
    footerSite: 'Site',
    footerProject: 'Projeto',
    footerCode: 'Código no GitHub',
    footerSuggest: 'Sugerir um recurso',
    footerNote:
      'Seleção feita à mão, sem links patrocinados ou de afiliado, sem cookies e sem rastreamento. Preços e planos mudam, então confira no site de cada recurso antes de assinar.',
  },
  en: {
    skip: 'Skip to content',
    navLabel: 'Main',
    navResources: 'Resources',
    navGuide: 'Immersion guide',
    navAbroad: 'Study abroad',
    theme: 'Switch between light and dark theme',
    langSwitch: 'Language',
    homeTitle: 'englishmap: English immersion without leaving home',
    homeDescription: (n: number) =>
      `${n} resources to listen to, watch, read, speak and write in English every day, sorted by level (A1 to C2) and cost.`,
    h1: 'English immersion without leaving home',
    intro: (n: number) =>
      `Living abroad works because English is in everything, all day long. You can get close to that by swapping what you already listen to, watch and read for English versions at your level. Here are ${n} resources for that, grouped by what you will do with them.`,
    introLink: 'See how to build the routine',
    filtersLabel: 'Filter resources',
    level: 'Level',
    levels: 'Levels',
    levelRange: (a: string, b: string) => `${a} to ${b}`,
    cost: 'Cost',
    format: 'Format',
    all: 'All',
    query: 'Filter by name or description',
    count: (n: number) => (n === 1 ? '1 resource' : `${n} resources`),
    categories: 'Categories',
    empty: 'No resources match these filters.',
    reset: 'Clear filters',
    pos: 'verb',
    footerAbout: 'Resources for learning English online as an immersion, by level and cost.',
    footerSite: 'Site',
    footerProject: 'Project',
    footerCode: 'Code on GitHub',
    footerSuggest: 'Suggest a resource',
    footerNote:
      'Picked by hand, with no sponsored or affiliate links, no cookies and no tracking. Prices and plans change, so check each resource’s own site before you subscribe.',
  },
} satisfies Record<Lang, Record<string, unknown>>;
