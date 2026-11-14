import { definePage } from '../../lib/page-types';
const m = 3;
export default definePage({
  id: 'march', group: 'months', order: 3, slug: 'where-is-hot-in-march', nav: 'Where is hot in March', card: 'Spring sun is still a long way off: the Canaries, the Red Sea and long haul',
  title: 'Where Is Hot in March: Holiday Highs, Sea and Rain by Place',
  description: 'Where is hot in March: daytime highs, sea temperature and wet days for 62 holiday places, 1991 to 2020 averages, with a finder that sorts them by your wishes.',
  h1: 'Where is hot in March',
  intro: (h) => `Where is hot in March within a short flight: ${h.hotList(m, 3500, 3)}. Beyond that, the Red Sea and the tropics.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `March is the month when British holidaymakers start asking where is hot without a long-haul flight, and the honest answer is: not many places yet. The Mediterranean is still in its late winter, with daytime highs of ${h.hi('majorca', m)} in Majorca and ${h.hi('crete', m)} in Crete, and its sea at its coldest of the year, ${h.sea('crete', m)} off Heraklion. The Canary Islands hold up better, at ${h.hi('tenerife', m)} in the south of Tenerife and ${h.hi('lanzarote', m)} in Lanzarote, with little rain. Further south and east, Hurghada on the Red Sea reaches ${h.hi('hurghada', m)} and Dubai ${h.hi('dubai', m)}, before the heat there becomes heavy in late spring. For real heat and warm water, the list is long haul: ${h.hotList(m, 20000, 4)}. Set a minimum sea temperature in the finder to see how quickly the short-haul choices drop away.`,
  body: (h) => `
<h2>Where is hot in March: all ${h.total} places</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'March averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow, not a flight time.')}
<h2>Short haul in March: the Canaries or nothing</h2>
<p>Inside 3,500 km of London, ${h.count(m, { minHigh: 22, minSea: null, maxWet: null, maxKm: 3500 })} places average 22 °C or more by day in March. Most of them are Atlantic islands; the exception is Marrakech, inland, at ${h.hi('marrakech', m)}. The islands are not at their warmest, but they are the only short-haul places where a day by the pool is a reasonable bet, with ${h.wet('fuerteventura', m)} of rain in Fuerteventura and ${h.wet('tenerife', m)} in Tenerife. The trade wind keeps the afternoons fresh, and the sea there sits at ${h.sea('tenerife', m)}.</p>
<p>Southern Spain and the Algarve are pleasant for walking at ${h.hi('malaga', m)} in Malaga, but a March week there is a city or golf holiday, not a beach one. Cyprus gets close, ${h.hi('larnaca', m)} in Larnaca, with cooler nights than the Canaries.</p>
<h2>Further away: heat that holds</h2>
<p>The Red Sea resorts are a strong choice before the heat sets in: ${h.hi('hurghada', m)} by day in Hurghada with a sea of ${h.sea('hurghada', m)}. In the Caribbean, March sits in the dry season: compare ${h.a('compare', 'two places side by side')}. For the following month, see ${h.a('april', 'where is hot in April')}; for the one before, ${h.a('february', 'February')}.</p>`,
  faqs: (h) => [
    { q: 'Is the Mediterranean warm in March?', a: `Not for a beach holiday. Daytime highs around the Mediterranean are in the mid to high teens in March, ${h.hi('majorca', m)} in Majorca and ${h.hi('corfu', m)} in Corfu, and the sea is at its lowest point of the year, around ${h.sea('majorca', m)} off Majorca. Spring warmth there arrives in May.` },
    { q: 'Where is the warmest place in Europe in March?', a: `Among the places on this site, the Canary Islands, which are Spanish territory, are the warmest European holiday destinations in March: ${h.hi('tenerife', m)} in southern Tenerife and ${h.hi('gran-canaria', m)} in Gran Canaria. Mainland Europe peaks in the south of Spain, with ${h.hi('malaga', m)} in Malaga.` },
    { q: 'Is March a good month for Dubai?', a: `March is one of the comfortable months in Dubai, with a daytime high of ${h.hi('dubai', m)} and nights around ${h.lo('dubai', m)}. The sea is ${h.sea('dubai', m)}. From May the highs pass 35 °C and outdoor time shrinks to mornings and evenings.` },
  ],
  related: ['february', 'april', 'tenerife', 'hurghada'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
