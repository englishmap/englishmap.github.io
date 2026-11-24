import { COSTS, LEVELS, type Cost, type Level } from '../schemas/catalog';

export interface FilterState {
  level: Level | null;
  cost: Cost | null;
  query: string;
}

export interface Filterable {
  name: string;
  summary: string;
  from: Level;
  to: Level;
  cost: Cost;
}

export function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export function matches(r: Filterable, f: FilterState): boolean {
  if (f.level) {
    const i = LEVELS.indexOf(f.level);
    if (i < LEVELS.indexOf(r.from) || i > LEVELS.indexOf(r.to)) return false;
  }
  if (f.cost && r.cost !== f.cost) return false;
  const q = normalize(f.query);
  if (q && !normalize(`${r.name} ${r.summary}`).includes(q)) return false;
  return true;
}

export function readState(params: URLSearchParams): FilterState {
  const level = params.get('nivel')?.toUpperCase();
  const cost = params.get('custo');
  return {
    level: (LEVELS as readonly string[]).includes(level ?? '') ? (level as Level) : null,
    cost: (COSTS as readonly string[]).includes(cost ?? '') ? (cost as Cost) : null,
    query: params.get('q') ?? '',
  };
}

export function writeState(f: FilterState): string {
  const p = new URLSearchParams();
  if (f.level) p.set('nivel', f.level.toLowerCase());
  if (f.cost) p.set('custo', f.cost);
  if (f.query.trim()) p.set('q', f.query.trim());
  const s = p.toString();
  return s ? `?${s}` : '';
}
