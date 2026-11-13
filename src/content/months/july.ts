import { definePage } from '../../lib/page-types';
const m = 7;
export default definePage({
  id: 'july', group: 'months', order: 7, slug: 'where-is-hot-in-july', nav: 'Where is hot in July', card: 'School holidays: 30 to 35 °C in the east Mediterranean, milder Canaries',
  title: 'Where Is Hot in July: School Holiday Heat, Sea and Rain',
  description: 'Where is hot in July for the school holidays: highs, lows, sea temperature and wet days for 62 places, 1991 to 2020 averages, with a finder to sort it.',
  h1: 'Where is hot in July',
  intro: (h) => `Where is hot in July, short haul: ${h.hotList(m, 3500, 4)}. For a milder heat, the Canaries stay near ${h.hi('tenerife', m)}.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `July is the start of the school holidays and the month when heat, not warmth, is the issue. Inland and in the east of the Mediterranean the afternoon is hot: ${h.hi('antalya', m)} in Antalya, ${h.hi('larnaca', m)} in Larnaca, ${h.hi('sicily', m)} in Sicily, and ${h.hi('seville', m)} inland in Seville. The western islands are a step cooler, ${h.hi('majorca', m)} in Majorca, and the Canaries cooler again, ${h.hi('tenerife', m)} in Tenerife, thanks to the trade wind and the cool Atlantic. Rain is rare across the holiday coasts, from the Algarve to Cyprus. The sea is warm, ${h.sea('majorca', m)} off Majorca and ${h.sea('antalya', m)} off Antalya. Long haul, July falls in the wet season on Thailand's west coast and in the Caribbean, while Dubai reaches ${h.hi('dubai', m)}. For those who want cooler weather, ${h.a('madeira', 'Madeira')} at ${h.hi('madeira', m)} or Iceland at ${h.hi('iceland', m)} are the opposite choice.`,
  body: (h) => `
<h2>Where is hot in July: the full table</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m), 'July averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>Family heat: how hot is too hot?</h2>
<p>If you want daytime highs of about 30 °C or less, July rules in ${h.a('majorca', 'Majorca')} (${h.hi('majorca', m)}), ${h.a('ibiza', 'Ibiza')} (${h.hi('ibiza', m)}), ${h.a('crete', 'Crete')} (${h.hi('crete', m)}), the ${h.a('lanzarote', 'Canaries')} (${h.hi('lanzarote', m)} in Lanzarote) and ${h.a('lisbon', 'Lisbon')} (${h.hi('lisbon', m)}). It rules out ${h.a('antalya', 'Antalya')}, ${h.a('larnaca', 'Cyprus')} and ${h.a('corfu', 'Corfu')} at ${h.hi('corfu', m)}. Use the finder above with a maximum distance and a sea minimum to narrow the list.</p>
<h2>July long haul: wet seasons and one good choice</h2>
<p>${h.a('phuket', 'Phuket')} has ${h.wet('phuket', m)} of rain in July; Koh Samui, on the other side of Thailand, ${h.wet('koh-samui', m)}. ${h.a('orlando', 'Orlando')} has afternoon storms on ${h.wet('orlando', m)}. ${h.a('cancun', 'Cancun')} has ${h.wet('cancun', m)}. Previous month: ${h.a('june', 'where is hot in June')}; next: ${h.a('august', 'August')}.</p>`,
  faqs: (h) => [
    { q: 'Where is not too hot in Europe in July?', a: `The Canaries and the Atlantic coast: ${h.hi('tenerife', m)} in Tenerife, ${h.hi('lisbon', m)} in Lisbon and ${h.hi('madeira', m)} in Madeira. In the Mediterranean, Majorca and Crete average about 30 °C or a little less. Nights there are cooler too. The sea there is cooler too.` },
    { q: 'Is Thailand good in July?', a: `It depends on the coast. Phuket, on the Andaman Sea, has rain on ${h.wet('phuket', m)} in July. Koh Samui, in the Gulf of Thailand, has ${h.wet('koh-samui', m)}, with ${h.rain('koh-samui', m)} against ${h.rain('phuket', m)} in Phuket. The Gulf side is the better choice.` },
    { q: 'What is the hottest place in Europe in July?', a: `Among the places on this site, Seville, inland in Andalusia, at ${h.hi('seville', m)} on average. Among beach places, Antalya on the Turkish coast leads at ${h.hi('antalya', m)}. Inland cities in July are hotter than the coast, where a sea breeze often tempers the afternoon heat.` },
  ],
  related: ['june', 'august', 'majorca', 'phuket'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
