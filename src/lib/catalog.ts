import raw from '../../data/catalog.json';
import {
  catalogSchema,
  LEVELS,
  type Catalog,
  type Category,
  type Level,
  type Resource,
} from '../schemas/catalog';

/** Parsed once at build time; a malformed catalog fails the build with the Zod message. */
export const catalog: Catalog = catalogSchema.parse(raw);

export function resourcesIn(c: Catalog, category: Category['id']): Resource[] {
  return c.resources.filter((r) => r.category === category);
}

export function levelSpan(r: Pick<Resource, 'from' | 'to'>): Level[] {
  return LEVELS.slice(LEVELS.indexOf(r.from), LEVELS.indexOf(r.to) + 1);
}

export function byId(c: Catalog, id: string): Resource {
  const r = c.resources.find((x) => x.id === id);
  if (!r) throw new Error(`Unknown resource "${id}" referenced from a page`);
  return r;
}
