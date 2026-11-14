import { definePage } from '../../lib/page-types';
const m = 4;
export default definePage({
  id: 'april', group: 'months', order: 4, slug: 'where-is-hot-in-april', nav: 'Where is hot in April', card: 'Easter sun: Cyprus and Andalusia catch up with the Canaries, the Gulf heats up',
  title: 'Where Is Hot in April: Easter Holiday Highs, Sea and Rain',
  description: 'Where is hot in April for Easter: highs, lows, sea temperature and wet days for 62 holiday places, 1991 to 2020 averages, with a finder to filter them.',
  h1: 'Where is hot in April',
  intro: (h) => `Where is hot in April at Easter, short haul: ${h.hotList(m, 3500, 4)}. Further away, the Red Sea reaches ${h.hi('hurghada', m)}.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `April is the month when the map starts to change. The Canary Islands, which led all winter, are overtaken by the southern mainland and the eastern Mediterranean: Marrakech averages ${h.hi('marrakech', m)} by day, Seville ${h.hi('seville', m)}, Larnaca in Cyprus ${h.hi('larnaca', m)}, level with Tenerife at ${h.hi('tenerife', m)}. The seas have not followed yet. Around the Mediterranean they are still at their spring low, ${h.sea('larnaca', m)} off Cyprus and ${h.sea('majorca', m)} off Majorca, so an Easter beach holiday there means sun on the sand and a brisk swim. The Canaries keep the advantage in the water, ${h.sea('tenerife', m)}, and have almost no rain, ${h.wet('lanzarote', m)} in Lanzarote. Further away, the Red Sea is excellent, ${h.hi('hurghada', m)} with a sea of ${h.sea('hurghada', m)}, and Dubai is already hot, ${h.hi('dubai', m)}. In the Caribbean, April is the driest month in Cancun, with ${h.wet('cancun', m)} of rain.`,
  body: (h) => `
<h2>Where is hot in April, place by place</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'April averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow. Underlined names open a page of their own; names in plain text have no page yet.')}
<h2>Easter in the sun without a long flight</h2>
<p>For a family Easter with a pool, the ${h.a('lanzarote', 'Canaries')} remain the safest bet for dry weather. For sightseeing in warm spring sun, ${h.a('malaga', 'Andalusia')} at ${h.hi('malaga', m)} and ${h.a('larnaca', 'Cyprus')} at ${h.hi('larnaca', m)} are both good, with ${h.wet('malaga', m)} and ${h.wet('larnaca', m)} of rain. ${h.a('crete', 'Crete')} is a little cooler, ${h.hi('crete', m)}, and greener. ${h.a('antalya', 'Antalya')} reaches ${h.hi('antalya', m)}.</p>
<h2>April long haul: before the heat and the rains</h2>
<p>In ${h.a('phuket', 'Phuket')}, April is one of the hottest months, just before the monsoon, ${h.hi('phuket', m)} with ${h.wet('phuket', m)} of rain. ${h.a('orlando', 'Orlando')} is comfortable at ${h.hi('orlando', m)}. ${h.a('dubai', 'Dubai')} is warm by day but the nights are still mild, ${h.lo('dubai', m)}. Previous month: ${h.a('march', 'where is hot in March')}; next: ${h.a('may', 'May')}.</p>`,
  faqs: (h) => [
    { q: 'Where is hot at Easter in Europe?', a: `In April, southern Spain and Cyprus lead the mainland and Mediterranean: ${h.hi('seville', m)} in Seville, ${h.hi('larnaca', m)} in Larnaca. The Canary Islands are similar, ${h.hi('tenerife', m)} in Tenerife, with a warmer sea at ${h.sea('tenerife', m)}. Rain is light everywhere. Pack layers for evenings.` },
    { q: 'Is it warm enough to swim in the Mediterranean in April?', a: `For most people, not yet. The sea averages ${h.sea('majorca', m)} off Majorca, ${h.sea('crete', m)} off Crete and ${h.sea('antalya', m)} off Antalya in April. It passes 20 °C in the east in May and in the west in June. Heated pools help.` },
    { q: 'Is Dubai too hot in April?', a: `Not yet for most visitors: the April average is ${h.hi('dubai', m)} by day and ${h.lo('dubai', m)} at night. By May it reaches ${h.hi('dubai', 5)}, and outdoor time shrinks to the morning and evening. Early April is cooler than late April, and the sea is already warm enough to swim.` },
  ],
  related: ['march', 'may', 'larnaca', 'cancun'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
