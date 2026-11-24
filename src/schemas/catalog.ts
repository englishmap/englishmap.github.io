import { z } from 'zod';

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export const COSTS = ['free', 'freemium', 'paid'] as const;

export const LANGS = ['pt', 'en'] as const;
export const FORMATS = [
  'extension',
  'site-app',
  'podcast',
  'audio-video',
  'youtube',
  'video',
  'site',
  'app',
  'books',
  'ebooks',
  'newspaper',
  'lessons',
  'community',
  'dictionary',
  'test',
  'series',
  'audiobooks',
] as const;

const localized = (min: number, max: number) =>
  z.object({ pt: z.string().min(min).max(max), en: z.string().min(min).max(max) });

export const levelSchema = z.enum(LEVELS);
export const costSchema = z.enum(COSTS);

export const categorySchema = z.object({
  id: z.string().regex(/^[a-z-]+$/),
  /** The English verb the category is about, shown as a dictionary headword. */
  headword: z.string().min(2),
  ipa: z.string().regex(/^\/.+\/$/, 'IPA must be wrapped in slashes'),
  title: localized(3, 60),
  summary: localized(20, 240),
});

export const resourceSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    name: z.string().min(2).max(60),
    url: z.url({ protocol: /^https$/ }),
    category: z.string(),
    format: z.enum(FORMATS),
    summary: localized(20, 200),
    from: levelSchema,
    to: levelSchema,
    cost: costSchema,
  })
  .refine((r) => LEVELS.indexOf(r.from) <= LEVELS.indexOf(r.to), {
    message: '"from" must not be above "to"',
  });

export const catalogSchema = z
  .object({
    categories: z.array(categorySchema).min(1),
    resources: z.array(resourceSchema).min(1),
  })
  .superRefine((c, ctx) => {
    const cats = new Set(c.categories.map((x) => x.id));
    const ids = new Set<string>();
    for (const r of c.resources) {
      if (!cats.has(r.category)) {
        ctx.addIssue({ code: 'custom', message: `${r.id}: unknown category "${r.category}"` });
      }
      if (ids.has(r.id)) ctx.addIssue({ code: 'custom', message: `duplicate id "${r.id}"` });
      ids.add(r.id);
    }
  });

export type Lang = (typeof LANGS)[number];
export type Format = (typeof FORMATS)[number];
export type Level = z.infer<typeof levelSchema>;
export type Cost = z.infer<typeof costSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Resource = z.infer<typeof resourceSchema>;
export type Catalog = z.infer<typeof catalogSchema>;
