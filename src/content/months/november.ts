import { definePage } from '../../lib/page-types';
const m = 11;
export default definePage({
  id: 'november', group: 'months', order: 11, slug: 'where-is-hot-in-november', nav: 'Where is hot in November', card: 'Winter sun returns: the Canaries at 24 to 25 °C, Cyprus the last warm Med stop',
  title: 'Where Is Hot in November: Winter Sun Returns, Sea and Rain',
  description: 'Where is hot in November: daytime highs, night lows, sea temperature and wet days for 62 places, 1991 to 2020 averages, with a finder to sort them all.',
  h1: 'Where is hot in November',
  intro: (h) => `Where is hot in November close to home: ${h.hotList(m, 3500, 4)}. The Mediterranean has mostly turned to autumn.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `November marks the return of the winter-sun season. Across most of the Mediterranean the daytime high drops to around 20 °C and rain is frequent: ${h.wet('corfu', m)} in Corfu, ${h.wet('majorca', m)} in Majorca, ${h.wet('malta', m)} in Malta. The Canary Islands now lead the short-haul list again: ${h.hi('tenerife', m)} in Tenerife, ${h.hi('fuerteventura', m)} in Fuerteventura, with a sea of ${h.sea('tenerife', m)} and only ${h.wet('tenerife', m)} of rain. Cyprus holds on, ${h.hi('larnaca', m)} with ${h.wet('larnaca', m)}, and Marrakech reaches ${h.hi('marrakech', m)}. The Red Sea is very good, ${h.hi('hurghada', m)} with a sea of ${h.sea('hurghada', m)}, and Dubai settles to ${h.hi('dubai', m)}, one of its best months. Long haul, the dry season is beginning in Bangkok, with ${h.wet('bangkok', m)} of rain, while Koh Samui reaches its wettest, ${h.rain('koh-samui', m)}. The Atlantic hurricane season ends on 30 November, according to the National Hurricane Center.`,
  body: (h) => `
<h2>Where is hot in November, ranked</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'November averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow. Underlined names open a page of their own; names in plain text have no page yet.')}
<h2>November in the Canaries</h2>
<p>All four main islands average 24 °C or more. ${h.a('tenerife', 'Tenerife')} is the warmest and driest; ${h.a('lanzarote', 'Lanzarote')} and ${h.a('gran-canaria', 'Gran Canaria')} have a few more wet days, ${h.wet('lanzarote', m)} and ${h.wet('gran-canaria', m)}. ${h.a('fuerteventura', 'Fuerteventura')} averages ${h.hi('fuerteventura', m)}. ${h.a('madeira', 'Madeira')} is a little cooler, ${h.hi('madeira', m)}. ${h.a('benidorm', 'Benidorm')} on the Spanish coast averages ${h.hi('benidorm', m)}, mild rather than warm.</p>
<h2>Long haul in November</h2>
<p>${h.a('dubai', 'Dubai')} at ${h.hi('dubai', m)} and a sea of ${h.sea('dubai', m)} is a strong choice. ${h.a('phuket', 'Phuket')} is coming out of the monsoon, ${h.wet('phuket', m)} of rain. ${h.a('cape-verde', 'Cape Verde')} averages ${h.hi('cape-verde', m)}. In the Caribbean, ${h.a('cancun', 'Cancun')} gets drier, ${h.wet('cancun', m)}. Previous month: ${h.a('october', 'where is hot in October')}; next: ${h.a('december', 'December')}.</p>`,
  faqs: (h) => [
    { q: 'Where is the warmest place in Europe in November?', a: `Among the places on this site, the Canary Islands: ${h.hi('tenerife', m)} in southern Tenerife. In the Mediterranean, Cyprus is warmest, at ${h.hi('larnaca', m)} in Larnaca. The Canaries also have the warmer sea, ${h.sea('tenerife', m)} off Tenerife against ${h.sea('larnaca', m)} off Cyprus, and fewer wet days.` },
    { q: 'Is Lanzarote warm in November?', a: `Yes: Lanzarote averages ${h.hi('lanzarote', m)} by day and ${h.lo('lanzarote', m)} at night in November, with a sea of ${h.sea('lanzarote', m)} and about ${h.wet('lanzarote', m)} of rain. Rain is light, and the sea is still warm enough for most swimmers on a sunny afternoon.` },
    { q: 'Is November a good month for Dubai?', a: `One of the best: the average high is ${h.hi('dubai', m)}, the low ${h.lo('dubai', m)}, and rain is almost nil. The sea is still warm at ${h.sea('dubai', m)}. The heat of summer has gone, and outdoor sightseeing, the beach and the desert are all comfortable again.` },
  ],
  related: ['october', 'december', 'tenerife', 'dubai'],
  sources: ['ghcn', 'oisst', 'nhc', 'wmo_normals'],
});
