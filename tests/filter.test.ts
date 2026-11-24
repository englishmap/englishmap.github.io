import { describe, expect, it } from 'vitest';
import { matches, readState, writeState, type Filterable } from '../src/lib/filter';

const r: Filterable = {
  name: 'Rachel’s English',
  summary: 'Pronúncia americana',
  from: 'A2',
  to: 'B2',
  cost: 'free',
};
const none = { level: null, cost: null, query: '' };

describe('matches', () => {
  it('passes with no filters', () => expect(matches(r, none)).toBe(true));
  it('checks the level inside the range', () => {
    expect(matches(r, { ...none, level: 'B1' })).toBe(true);
    expect(matches(r, { ...none, level: 'A1' })).toBe(false);
    expect(matches(r, { ...none, level: 'C1' })).toBe(false);
  });
  it('checks cost', () => expect(matches(r, { ...none, cost: 'paid' })).toBe(false));
  it('ignores accents and case in the query', () => {
    expect(matches(r, { ...none, query: 'PRONUNCIA' })).toBe(true);
    expect(matches(r, { ...none, query: 'netflix' })).toBe(false);
  });
});

describe('url state', () => {
  it('round-trips', () => {
    const s = { level: 'B2' as const, cost: 'free' as const, query: 'podcast' };
    expect(readState(new URLSearchParams(writeState(s)))).toEqual(s);
  });
  it('drops invalid values', () => {
    expect(readState(new URLSearchParams('nivel=z9&custo=cheap'))).toEqual(none);
  });
});

describe('resources without a cost', () => {
  const show: Filterable = { name: 'Friends', summary: 'Sitcom', from: 'B1', to: 'B2' };
  it('show up when no cost filter is set', () => expect(matches(show, none)).toBe(true));
  it('are left out by any cost filter', () =>
    expect(matches(show, { ...none, cost: 'free' })).toBe(false));
});
