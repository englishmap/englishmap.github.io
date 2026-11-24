import type { Lang } from '../schemas/catalog';

/**
 * Cheaper English-speaking destinations for a language course. Entry and work rules are for
 * Brazilian passport holders and come from the official pages in `official`; prices are third-party
 * estimates (see `ESTIMATE_SOURCE`). Re-check both before changing a date or a number.
 */
export interface Destination {
  id: string;
  name: Record<Lang, string>;
  cost: Record<Lang, string>;
  entry: Record<Lang, string>;
  work: Record<Lang, string>;
  english: Record<Lang, string>;
  official: { label: string; href: string }[];
}

export const CHECKED_ON = '2026-11-23';

export const ESTIMATE_SOURCE = {
  label: 'WhereNext, Cost to learn English abroad 2026',
  href: 'https://getwherenext.com/data/cost-to-learn-english-abroad-2026',
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'filipinas',
    name: { pt: 'Filipinas', en: 'Philippines' },
    cost: {
      pt: 'O mais barato dos quatro. Cerca de US$ 150 a 280 por semana com curso e casa de família em Cebu, e aulas individuais são o padrão nas escolas.',
      en: 'The cheapest of the four. About US$150 to 280 a week for a course and homestay in Cebu, and one-to-one lessons are the norm at schools.',
    },
    entry: {
      pt: 'Brasileiros entram sem visto por até 59 dias. Para estudar é preciso um Special Study Permit, pedido ao Bureau of Immigration depois de chegar.',
      en: 'Brazilians can enter visa-free for up to 59 days. Studying requires a Special Study Permit, requested from the Bureau of Immigration after arrival.',
    },
    work: {
      pt: 'Não previsto para quem vai fazer curso de idioma.',
      en: 'Not provided for language course students.',
    },
    english: {
      pt: 'Inglês filipino, língua oficial ao lado do filipino e usado em escolas, governo e negócios.',
      en: 'Philippine English, an official language alongside Filipino and used in schools, government and business.',
    },
    official: [
      { label: 'Bureau of Immigration', href: 'https://immigration.gov.ph/' },
      {
        label: 'Special Study Permit (DFA)',
        href: 'https://buenosairespe.dfa.gov.ph/sample-sites/visa/94-visa/204-special-study-permit',
      },
    ],
  },
  {
    id: 'malta',
    name: { pt: 'Malta', en: 'Malta' },
    cost: {
      pt: 'Cerca de € 200 a 280 por semana. É o destino mais barato da União Europeia com inglês como língua oficial, mas a moradia encarece no verão.',
      en: 'About €200 to 280 a week. It is the cheapest EU destination with English as an official language, but housing gets pricier in summer.',
    },
    entry: {
      pt: 'Faz parte do Espaço Schengen: brasileiros entram sem visto por até 90 dias. Cursos mais longos pedem visto nacional de estudante.',
      en: 'Part of the Schengen Area: Brazilians enter visa-free for up to 90 days. Longer courses need a national student visa.',
    },
    work: {
      pt: 'Até 20 horas por semana, só depois dos três primeiros meses de curso e com licença da Jobsplus.',
      en: 'Up to 20 hours a week, only after the first three months of study and with a Jobsplus licence.',
    },
    english: {
      pt: 'Inglês e maltês são as línguas oficiais. O inglês de Malta segue o padrão britânico.',
      en: 'English and Maltese are the official languages. Maltese English follows British norms.',
    },
    official: [{ label: 'Identità, Central Visa Unit', href: 'https://identita.gov.mt/' }],
  },
  {
    id: 'africa-do-sul',
    name: { pt: 'África do Sul', en: 'South Africa' },
    cost: {
      pt: 'Cerca de US$ 280 a 400 por semana na Cidade do Cabo. O rand desvalorizado deixa o custo de vida baixo para um destino com falantes nativos.',
      en: 'About US$280 to 400 a week in Cape Town. The weak rand keeps living costs low for a destination with native speakers.',
    },
    entry: {
      pt: 'A isenção de visto de 90 dias para brasileiros vale só para turismo e negócios. Segundo a embaixada, estudar exige visto.',
      en: 'The 90-day visa exemption for Brazilians covers only tourism and business. According to the embassy, studying requires a visa.',
    },
    work: {
      pt: 'Confirme com a embaixada antes de contar com isso.',
      en: 'Check with the embassy before counting on it.',
    },
    english: {
      pt: 'Inglês sul-africano, uma das onze línguas oficiais e a mais usada nos negócios.',
      en: 'South African English, one of eleven official languages and the main one in business.',
    },
    official: [
      {
        label: 'Embaixada da África do Sul no Brasil',
        href: 'https://africadosul.org.br/passaportes-e-vistos/',
      },
      { label: 'Department of Home Affairs', href: 'https://www.dha.gov.za/' },
    ],
  },
  {
    id: 'irlanda',
    name: { pt: 'Irlanda', en: 'Ireland' },
    cost: {
      pt: 'O mais caro dos quatro, e o aluguel em Dublin é o maior gasto. Entra na lista porque é o único que permite trabalhar desde o início do curso.',
      en: 'The most expensive of the four, and rent in Dublin is the biggest cost. It is on the list because it is the only one that lets you work from the start of the course.',
    },
    entry: {
      pt: 'Brasileiros entram sem visto e registram a permissão Stamp 2 depois. O curso precisa estar na lista ILEP, durar 25 semanas ou mais, ter 15 horas de aula por semana, 85% de presença e prova final.',
      en: 'Brazilians enter without a visa and register for Stamp 2 permission afterwards. The course must be on the ILEP list, last 25 weeks or more, have 15 class hours a week, 85% attendance and a final exam.',
    },
    work: {
      pt: 'Até 20 horas por semana durante o curso e até 40 horas de junho a setembro e de 15 de dezembro a 15 de janeiro.',
      en: 'Up to 20 hours a week during the course and up to 40 hours from June to September and from 15 December to 15 January.',
    },
    english: {
      pt: 'Inglês irlandês, com sotaque próprio e muitas expressões locais.',
      en: 'Irish English, with its own accent and plenty of local expressions.',
    },
    official: [
      {
        label: 'Irish Immigration Service',
        href: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/planning-to-study-in-ireland/',
      },
    ],
  },
];
