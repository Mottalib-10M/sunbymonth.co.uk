/**
 * Finder (testeurs naïfs du 2026-11-14) : « 25 of 62 places match » with 8 shown, and Tenerife, named as the
 * answer on the home page, absent from the list. The answer, the list and the count now come from finderView:
 * the places it names are in the visible list, and the count is what "Show all" reveals.
 */
import { describe, expect, it } from 'vitest';
import { DEFAULT_CRITERIA, SHORT_HAUL_KM, finderView, rank, type Criteria, type Month } from '../src/lib/engine/climate';
import { KIT } from '../src/lib/kit';

const MONTHS = Array.from({ length: 12 }, (_, i) => (i + 1) as Month);
const WISHES: Criteria[] = [
  DEFAULT_CRITERIA,
  { minHigh: 20, minSea: 20, maxWet: null, maxKm: null },
  { minHigh: 28, minSea: null, maxWet: 3, maxKm: 5000 },
  { minHigh: 45, minSea: 26, maxWet: 1, maxKm: 2000 },
];

describe('finderView', () => {
  for (const m of MONTHS) for (const c of WISHES) {
    it(`month ${m}, high ${c.minHigh}, sea ${c.minSea}, wet ${c.maxWet}, km ${c.maxKm}`, () => {
      const v = finderView(m, c);
      const visible = v.groups.flatMap((g) => g.visible.map((r) => r.d.id));
      if (v.near) expect(visible).toContain(v.near.d.id);
      if (v.far) expect(visible).toContain(v.far.d.id);
      if (v.near) expect(v.near.d.km_from_london).toBeLessThanOrEqual(SHORT_HAUL_KM);
      if (v.far) expect(v.far.d.km_from_london).toBeGreaterThan(SHORT_HAUL_KM);
      const open = finderView(m, c, true);
      const all = open.groups.flatMap((g) => g.visible);
      expect(all.length).toBe(v.count);
      expect(open.hidden).toBe(0);
      expect(v.hidden).toBe(v.count - visible.length);
      if (v.matched) expect(v.count).toBe(rank(m, c).filter((r) => r.ok).length);
      expect(all.every((r) => !v.matched || r.ok)).toBe(true);
    });
  }

  it('the home sentence names the first place of each list', async () => {
    const { toolLinks } = await import('../src/lib/tool-links');
    const links = toolLinks();
    for (const m of MONTHS) {
      const v = finderView(m, DEFAULT_CRITERIA, false, (id) => id in links);
      const s = KIT.answer(m);
      if (v.near) expect(s).toContain(v.near.d.name);
      if (v.far) expect(s).toContain(v.far.d.name);
    }
  });

  it('Tenerife is in the November short-haul list (the case the testers saw)', () => {
    const v = finderView(11, DEFAULT_CRITERIA);
    expect(v.groups[0].visible.map((r) => r.d.id)).toContain('tenerife');
  });
});

describe('beachVerdict', () => {
  it('follows the finder threshold and never suggests the place itself', async () => {
    const { beachVerdict, DESTS } = await import('../src/lib/engine/climate');
    for (const d of DESTS) for (const m of MONTHS) {
      const v = beachVerdict(d, m);
      expect(v.beach).toBe(v.high >= DEFAULT_CRITERIA.minHigh);
      if (v.instead) { expect(!v.beach || v.rainy).toBe(true); expect(v.instead.d.id).not.toBe(d.id); expect(v.instead.high).toBeGreaterThanOrEqual(DEFAULT_CRITERIA.minHigh); }
    }
  });
});

describe('tour 3 : pages and rain lead the order', () => {
  it('the answer names places with a page and a full rain record, never a rainy one, when one exists', async () => {
    const { toolLinks } = await import('../src/lib/tool-links');
    const { isRainy } = await import('../src/lib/engine/climate');
    const links = toolLinks(); const paged = (id: string) => id in links;
    for (const m of MONTHS) {
      const v = finderView(m, DEFAULT_CRITERIA, true, paged);
      for (const g of v.groups) {
        const good = g.rows.filter((r) => paged(r.d.id) && r.wet !== null && !isRainy(r.wet));
        if (good.length) expect(good).toContain(g.rows[0]);
        const firstRainy = g.rows.findIndex((r) => isRainy(r.wet));
        if (firstRainy >= 0) expect(g.rows.slice(firstRainy).every((r) => isRainy(r.wet))).toBe(true);
      }
    }
  });
  it('November: Goa does not lead, Phuket (16 wet days) is flagged rainy', async () => {
    const { toolLinks } = await import('../src/lib/tool-links');
    const { beachVerdict, dest } = await import('../src/lib/engine/climate');
    const links = toolLinks();
    const v = finderView(11, DEFAULT_CRITERIA, false, (id) => id in links);
    expect(v.far?.d.id).not.toBe('goa');
    expect(beachVerdict(dest('phuket'), 11).rainy).toBe(true);
  });
});
