import { definePage } from '../../lib/page-types';
const m = 5;
export default definePage({
  id: 'may', group: 'months', order: 5, slug: 'where-is-hot-in-may', nav: 'Where is hot in May', card: 'The Mediterranean opens: 24 to 27 °C in Greece, Cyprus and Turkey, a cool sea',
  title: 'Where Is Hot in May: Mediterranean Highs, Seas and Rain',
  description: 'Where is hot in May: daytime highs, sea temperature and wet days for 62 places, 1991 to 2020 averages, from the Mediterranean to the tropics, with a finder.',
  h1: 'Where is hot in May',
  intro: (h) => `Where is hot in May near home: ${h.hotList(m, 3500, 4)}. It is the month the Mediterranean overtakes the Canaries.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `May is the first real Mediterranean month of the year. The daytime high reaches 23 to 27 °C across the holiday coast: ${h.hi('larnaca', m)} in Cyprus, ${h.hi('antalya', m)} in Antalya, ${h.hi('crete', m)} in Crete and ${h.hi('majorca', m)} in Majorca. Rain is scarce, ${h.wet('crete', m)} in Heraklion. The Canaries, at ${h.hi('lanzarote', m)} in Lanzarote, are no longer the warmest choice, though they stay the driest. The one thing May does not deliver is warm water. The Mediterranean is still cool, ${h.sea('majorca', m)} off Majorca and ${h.sea('crete', m)} off Crete; the warmest sea in the region is off Antalya, ${h.sea('antalya', m)}. Long haul, May is a month of change: the Gulf becomes very hot, ${h.hi('dubai', m)} in Dubai, the Red Sea reaches ${h.hi('hurghada', m)}, and in Thailand the south-west monsoon arrives, with ${h.wet('phuket', m)} of rain in Phuket. The Caribbean is still fairly dry, with ${h.wet('cancun', m)} of rain in Cancun.`,
  body: (h) => `
<h2>Where is hot in May: the ranking</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m), 'May averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>May half-term in the Mediterranean</h2>
<p>For the late-May half-term, the east of the Mediterranean is the warmest: ${h.a('larnaca', 'Cyprus')} at ${h.hi('larnaca', m)} and ${h.a('antalya', 'Turkey')} at ${h.hi('antalya', m)}, with ${h.wet('larnaca', m)} and ${h.wet('antalya', m)} of rain. Greece follows, ${h.a('crete', 'Crete')} at ${h.hi('crete', m)} and ${h.a('rhodes', 'Rhodes')} at ${h.hi('rhodes', m)}. In the west, ${h.a('majorca', 'Majorca')} and ${h.a('ibiza', 'Ibiza')} sit at ${h.hi('ibiza', m)}, pleasant but not yet hot, and ${h.a('malta', 'Malta')} at ${h.hi('malta', m)}.</p>
<h2>Too hot already, or too wet</h2>
<p>${h.a('dubai', 'Dubai')} averages ${h.hi('dubai', m)} in May, with nights of ${h.lo('dubai', m)}: fine for a pool hotel, hard for sightseeing. In ${h.a('phuket', 'Phuket')} the wet season begins. The Caribbean is a good long-haul choice: ${h.a('cancun', 'Cancun')} averages ${h.hi('cancun', m)} with ${h.wet('cancun', m)} of rain. Previous month: ${h.a('april', 'where is hot in April')}; next: ${h.a('june', 'June')}.</p>`,
  faqs: (h) => [
    { q: 'Where is hottest in Europe in May?', a: `On this site, inland southern Spain: Seville averages ${h.hi('seville', m)}. Among beach places, Cyprus leads at ${h.hi('larnaca', m)}, followed by Sicily at ${h.hi('sicily', m)} and Antalya at ${h.hi('antalya', m)}. May is warm enough for the beach across most of the eastern Mediterranean, though the sea is still cool, around ${h.sea('larnaca', m)} off Cyprus.` },
    { q: 'Is Majorca or Crete warmer in May?', a: `Crete, slightly: ${h.hi('crete', m)} by day in Heraklion against ${h.hi('majorca', m)} in Palma. The sea is also a little warmer off Crete, ${h.sea('crete', m)} against ${h.sea('majorca', m)}. Both have little rain in May: ${h.wet('crete', m)} in Heraklion and ${h.wet('majorca', m)} in Palma, so either suits a spring week.` },
    { q: 'Is May a good month for the Canaries?', a: `For dry, settled weather, yes: Lanzarote has ${h.wet('lanzarote', m)} of rain in May at ${h.hi('lanzarote', m)}. The sea is ${h.sea('lanzarote', m)}. It is no longer the warmest choice, though; the eastern Mediterranean is hotter. Larnaca, for one, averages ${h.hi('larnaca', m)}.` },
  ],
  related: ['april', 'june', 'crete', 'antalya'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
