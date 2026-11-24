import { describe, expect, it } from 'vitest';
import { catalog, levelSpan, resourcesIn } from '../src/lib/catalog';

describe('catalog', () => {
  it('parses and every category has resources', () => {
    for (const c of catalog.categories)
      expect(resourcesIn(catalog, c.id).length).toBeGreaterThan(0);
  });

  it('expands a level range', () => {
    expect(levelSpan({ from: 'A2', to: 'B2' })).toEqual(['A2', 'B1', 'B2']);
    expect(levelSpan({ from: 'C2', to: 'C2' })).toEqual(['C2']);
  });
});
