import { definePage } from '../../lib/page-types';
const m = 2;
export default definePage({
  id: 'february', group: 'months', order: 2, slug: 'where-is-hot-in-february', nav: 'Where is hot in February', card: 'Half-term sun: the Canaries, Marrakech, the Red Sea and Asia\'s dry season',
  title: 'Where Is Hot in February: Half-Term Sun, Highs and Seas',
  description: 'Where is hot in February: highs, lows, sea temperature and wet days for 62 places, 1991 to 2020 averages, for half-term sun near and far, with a finder.',
  h1: 'Where is hot in February',
  intro: (h) => `Where is hot in February for a half-term week: ${h.hotList(m, 3500, 4)} within 3,500 km; then the Red Sea at ${h.hi('hurghada', m)}.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `February half-term is one of the busiest weeks of the winter for British families, and the choice of where is hot is almost the same as in January, with small gains. The Canary Islands are still the warmest short-haul option, ${h.hi('tenerife', m)} in Tenerife and ${h.hi('lanzarote', m)} in Lanzarote, though the sea there is close to its low point of the year, ${h.sea('lanzarote', m)} off Lanzarote. Marrakech warms faster than the islands and reaches ${h.hi('marrakech', m)} by day, though it has no beach. On the Spanish mainland, Seville and Malaga touch ${h.hi('malaga', m)}, pleasant for a city break. The Red Sea is a step up, ${h.hi('hurghada', m)} by day with a sea of ${h.sea('hurghada', m)}, and Dubai ${h.hi('dubai', m)}. The Mediterranean islands are still in winter: ${h.hi('crete', m)} in Crete. Long haul, February is the driest month of the year in Phuket, with ${h.wet('phuket', m)} of rain.`,
  body: (h) => `
<h2>Where is hot in February: the full list</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m), 'February averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>February half-term: three short-haul options</h2>
<p>For a beach and pool week, the ${h.a('tenerife', 'Canaries')} are the only short-haul choice with a high above 20 °C and little rain, ${h.wet('tenerife', m)} in Tenerife. For a city and culture break in warm sun, ${h.a('marrakech', 'Marrakech')} gives ${h.hi('marrakech', m)} with ${h.wet('marrakech', m)} of rain. For a mild walking week, ${h.a('madeira', 'Madeira')} sits at ${h.hi('madeira', m)} with nights of ${h.lo('madeira', m)}, close to the Canaries at night.</p>
<h2>Further: the Red Sea, the Gulf and the tropics</h2>
<p>${h.a('hurghada', 'Hurghada')} has no rain to speak of in February and a sea at ${h.sea('hurghada', m)}, the coolest of its year but still above the Canaries. ${h.a('dubai', 'Dubai')} is ideal for sightseeing at ${h.hi('dubai', m)}. Long haul, ${h.hotList(m, 20000, 3)} are the hottest. Previous month: ${h.a('january', 'where is hot in January')}; next: ${h.a('march', 'March')}.</p>`,
  faqs: (h) => [
    { q: 'Where is warm for February half-term?', a: `Within a short flight, the Canary Islands: ${h.hi('tenerife', m)} in Tenerife and ${h.hi('gran-canaria', m)} in Gran Canaria, with about ${h.wet('gran-canaria', m)} of rain. Further away, the Red Sea at ${h.hi('hurghada', m)} and Dubai at ${h.hi('dubai', m)}. The Canaries are the closest.` },
    { q: 'Is Marrakech warmer than Tenerife in February?', a: `By day it is about the same or a little warmer: ${h.hi('marrakech', m)} in Marrakech against ${h.hi('tenerife', m)} in Tenerife. Marrakech is inland, so it has no sea, and its winter nights are not in the public record we use.` },
    { q: 'What is the sea temperature in the Canaries in February?', a: `Around ${h.sea('tenerife', m)} off Tenerife and ${h.sea('lanzarote', m)} off Lanzarote, the coldest of the year. Many swimmers find it fresh but bearable on a sunny afternoon. For warmer water in February, the Red Sea off Hurghada averages ${h.sea('hurghada', m)}. It warms from April.` },
  ],
  related: ['january', 'march', 'marrakech', 'hurghada'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
