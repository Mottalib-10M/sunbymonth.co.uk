import { definePage } from '../../lib/page-types';
const m = 1;
export default definePage({
  id: 'january', group: 'months', order: 1, slug: 'where-is-hot-in-january', nav: 'Where is hot in January', card: 'Winter sun: the Canaries at 21 to 22 °C, or the tropics in their dry season',
  title: 'Where Is Hot in January: Winter Sun Highs, Sea and Rain',
  description: 'Where is hot in January: daytime highs, night lows, sea temperature and wet days for 62 holiday places, 1991 to 2020 averages, with a finder to sort it.',
  h1: 'Where is hot in January',
  intro: (h) => `Where is hot in January within 3,500 km of London: ${h.hotList(m, 3500, 4)}. For 30 °C and more, the list is long haul.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `January is the coldest month of the year for most of Europe, and the one when the question of where is hot matters most to anyone booking from Britain. The honest answer splits in two. Within short-haul range, only the Canary Islands give a day reliably above 20 °C with a sea you can swim in: southern Tenerife averages ${h.hi('tenerife', m)} by day, Gran Canaria ${h.hi('gran-canaria', m)}, Lanzarote and Fuerteventura ${h.hi('lanzarote', m)}, with the Atlantic at ${h.sea('tenerife', m)}. Madeira and Marrakech follow at ${h.hi('madeira', m)}, then the Spanish mainland, ${h.hi('malaga', m)} in Malaga. Beyond, the Red Sea gives ${h.hi('hurghada', m)} with a warmer sea, ${h.sea('hurghada', m)}, and Dubai ${h.hi('dubai', m)}. For real heat, January is the heart of the dry season in South and South-East Asia: ${h.hotList(m, 20000, 3)}. At the other end of the scale, Lapland averages ${h.hi('lapland', m)} by day, the place to go for snow rather than sun.`,
  body: (h) => `
<h2>Where is hot in January: all ${h.total} places</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m), 'January averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow, not a flight time.')}
<h2>Winter sun in the Canaries</h2>
<p>The four main Canary Islands are within one degree of each other in January. The differences are in the rain and the wind. ${h.a('fuerteventura', 'Fuerteventura')} and ${h.a('lanzarote', 'Lanzarote')}, the flattest and closest to Africa, have ${h.wet('fuerteventura', m)} and ${h.wet('lanzarote', m)} of rain. The south of ${h.a('tenerife', 'Tenerife')}, sheltered by Mount Teide, has ${h.wet('tenerife', m)}. Nights everywhere sit around ${h.lo('tenerife', m)}, and the sea is ${h.sea('gran-canaria', m)} off ${h.a('gran-canaria', 'Gran Canaria')}, bracing rather than warm.</p>
<h2>Long haul in January</h2>
<p>Thailand, Goa and Sri Lanka are all in their dry, sunny season. ${h.a('phuket', 'Phuket')} has ${h.wet('phuket', m)} of rain and a sea of ${h.sea('phuket', m)}. In the Caribbean, ${h.a('cancun', 'Cancun')} averages ${h.hi('cancun', m)} with ${h.wet('cancun', m)} of rain. ${h.a('dubai', 'Dubai')} is at its mildest, ${h.hi('dubai', m)} by day and ${h.lo('dubai', m)} at night. Next month: ${h.a('february', 'where is hot in February')}; the month before: ${h.a('december', 'December')}.</p>`,
  faqs: (h) => [
    { q: 'Where is the hottest place in Europe in January?', a: `Of the places on this site, southern Tenerife, at ${h.hi('tenerife', m)} on average. The Canary Islands are Spanish but lie off the coast of Africa. On mainland Europe, Malaga and Benidorm lead at ${h.hi('malaga', m)}. Both are mostly sunny. Nights stay mild there.` },
    { q: 'Is Egypt warm enough for the beach in January?', a: `By day, yes: Hurghada on the Red Sea averages ${h.hi('hurghada', m)} with a sea of ${h.sea('hurghada', m)}, warmer than the Canaries. Nights fall to ${h.lo('hurghada', m)}, and the wind can make the beach feel fresh. Pack a warm layer for the evenings.` },
    { q: 'Where is hot and dry in January long haul?', a: `South and South-East Asia, in their dry season: Phuket has ${h.wet('phuket', m)} of rain at ${h.hi('phuket', m)}, and Goa almost none at ${h.hi('goa', m)}. Mauritius and the Seychelles are hot but in their wet season. Bangkok, at ${h.hi('bangkok', m)}, has ${h.wet('bangkok', m)} of rain.` },
  ],
  related: ['december', 'february', 'tenerife', 'phuket'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
