import { definePage } from '../../lib/page-types';
const m = 12;
export default definePage({
  id: 'december', group: 'months', order: 12, slug: 'where-is-hot-in-december', nav: 'Where is hot in December', card: 'Christmas sun: the Canaries at 22 to 23 °C, Egypt, Dubai, or Asia\'s dry season',
  title: 'Where Is Hot in December: Christmas Sun, Highs and Seas',
  description: 'Where is hot in December for Christmas sun: highs, lows, sea temperature and wet days for 62 places, 1991 to 2020 averages, with a finder to filter it.',
  h1: 'Where is hot in December',
  intro: (h) => `Where is hot in December for Christmas sun: ${h.hotList(m, 3500, 4)} short haul; the Red Sea at ${h.hi('hurghada', m)}; Asia's dry season beyond.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `December is the darkest month in Britain and one of the most searched for winter sun. Short haul, the Canary Islands are the only places that reach 22 °C: ${h.hi('tenerife', m)} in Tenerife, ${h.hi('gran-canaria', m)} in Gran Canaria, ${h.hi('lanzarote', m)} in Lanzarote, with a sea of ${h.sea('tenerife', m)}. Madeira and Marrakech follow at ${h.hi('madeira', m)}. The Mediterranean is in winter, ${h.hi('larnaca', m)} in Cyprus, ${h.hi('majorca', m)} in Majorca, with frequent rain. A little further, Egypt's Red Sea coast gives ${h.hi('hurghada', m)} with a sea of ${h.sea('hurghada', m)}, and Dubai ${h.hi('dubai', m)}. Long haul, December opens the dry season on Thailand's west coast, with ${h.wet('phuket', m)} of rain in Phuket. The Caribbean is drying out after the hurricane season. For snow rather than sun, Lapland averages ${h.hi('lapland', m)} by day and ${h.lo('lapland', m)} at night, with ${h.day('lapland', m)} of daylight.`,
  body: (h) => `
<h2>Where is hot in December: all ${h.total} places</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'December averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow. Underlined names open a page of their own; names in plain text have no page yet.')}
<h2>Christmas in the Canaries, Egypt or Dubai</h2>
<p>Three popular choices, three different trade-offs. ${h.a('tenerife', 'Tenerife')}: ${h.hi('tenerife', m)} by day, ${h.lo('tenerife', m)} at night, sea ${h.sea('tenerife', m)}. ${h.a('hurghada', 'Hurghada')}: ${h.hi('hurghada', m)} by day, colder nights at ${h.lo('hurghada', m)}, and a sea of ${h.sea('hurghada', m)}. ${h.a('dubai', 'Dubai')}: the warmest day, ${h.hi('dubai', m)}, nights of ${h.lo('dubai', m)} and a sea of ${h.sea('dubai', m)}. All three are mostly dry; December is the wettest month of the year in Tenerife, at ${h.rain('tenerife', m)}.</p>
<h2>Long haul for Christmas</h2>
<p>${h.a('phuket', 'Phuket')} at ${h.hi('phuket', m)}, ${h.a('cancun', 'Cancun')} at ${h.hi('cancun', m)} with ${h.wet('cancun', m)} of rain, and ${h.a('cape-verde', 'Cape Verde')} at ${h.hi('cape-verde', m)} are the warmest of the long-haul options we track in detail. Previous month: ${h.a('november', 'where is hot in November')}; next: ${h.a('january', 'January')}.</p>`,
  faqs: (h) => [
    { q: 'Where is hot at Christmas within a short flight?', a: `The Canary Islands: ${h.hi('tenerife', m)} in Tenerife and ${h.hi('fuerteventura', m)} in Fuerteventura. Madeira is slightly cooler at ${h.hi('madeira', m)}. Mainland Spain and the Mediterranean are around 17 to 19 °C. The Canaries are the warmest choice within short-haul range, and their nights are milder than in Egypt.` },
    { q: 'Is Tenerife or Egypt warmer in December?', a: `By day, about the same: ${h.hi('tenerife', m)} in Tenerife and ${h.hi('hurghada', m)} in Hurghada. The Red Sea is warmer, ${h.sea('hurghada', m)} against ${h.sea('tenerife', m)}, but Hurghada's nights are colder, ${h.lo('hurghada', m)} against ${h.lo('tenerife', m)}. Both are mostly dry. Pick by sea or night.` },
    { q: 'Where is hot and dry in December long haul?', a: `Thailand's Andaman coast and Bangkok are entering the dry season: Phuket has ${h.wet('phuket', m)} of rain, Bangkok ${h.wet('bangkok', m)}. Goa averages ${h.hi('goa', m)}. Koh Samui is still wet, ${h.wet('koh-samui', m)}. The Caribbean is also drying out after the hurricane season, with ${h.wet('cancun', m)} of rain in Cancun.` },
  ],
  related: ['november', 'january', 'tenerife', 'hurghada'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
