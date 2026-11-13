import { definePage } from '../../lib/page-types';
const m = 6;
export default definePage({
  id: 'june', group: 'months', order: 6, slug: 'where-is-hot-in-june', nav: 'Where is hot in June', card: 'Early summer: the whole Mediterranean is warm and its sea passes 21 °C',
  title: 'Where Is Hot in June: Early Summer Highs and Warming Seas',
  description: 'Where is hot in June: highs, lows, sea temperature and wet days for 62 holiday places, 1991 to 2020 averages, with a finder to rank them by heat, sea and rain.',
  h1: 'Where is hot in June',
  intro: (h) => `Where is hot in June? Almost everywhere south of the Alps. The hottest short-haul places: ${h.hotList(m, 3500, 4)}.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `By June the question is less where is hot than where is comfortable. Every Mediterranean place on this site averages 24 °C or more by day, and most are dry: ${h.wet('crete', m)} of rain in Crete, ${h.wet('larnaca', m)} in Cyprus. The heat ranges from a gentle ${h.hi('majorca', m)} in Majorca and ${h.hi('lanzarote', m)} in Lanzarote to ${h.hi('antalya', m)} in Antalya. The sea warms quickly through the month and passes 21 °C in most of the Mediterranean: ${h.sea('majorca', m)} off Majorca, ${h.sea('crete', m)} off Crete, ${h.sea('antalya', m)} off Antalya. June is also the month of the longest days, with ${h.day('iceland', m)} of daylight in Iceland and ${h.day('crete', m)} in Crete. Long haul, June is a poor month for many tropical places: the monsoon is in full flow in Thailand, and the Atlantic hurricane season begins on 1 June according to the National Hurricane Center. Dubai is extremely hot, ${h.hi('dubai', m)}.`,
  body: (h) => `
<h2>Where is hot in June: every place ranked</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m), 'June averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>Warm but not too hot</h2>
<p>For a June week in the low to high twenties, the western Mediterranean and the Canaries are the gentle choice: ${h.a('ibiza', 'Ibiza')} at ${h.hi('ibiza', m)}, ${h.a('tenerife', 'Tenerife')} at ${h.hi('tenerife', m)}, ${h.a('lisbon', 'Lisbon')} at ${h.hi('lisbon', m)}. For more heat, ${h.a('larnaca', 'Cyprus')} at ${h.hi('larnaca', m)} and ${h.a('corfu', 'Corfu')} at ${h.hi('corfu', m)}. ${h.a('malta', 'Malta')} has a sea of ${h.sea('malta', m)} and ${h.wet('malta', m)} of rain.</p>
<h2>June long haul: choose carefully</h2>
<p>In ${h.a('phuket', 'Phuket')} rain falls on ${h.wet('phuket', m)} in June. ${h.a('orlando', 'Orlando')} enters its wettest stretch, ${h.rain('orlando', m)}. ${h.a('cancun', 'Cancun')} is hot with ${h.wet('cancun', m)} of rain. ${h.a('hurghada', 'Hurghada')} is dry but very hot at ${h.hi('hurghada', m)}. Previous month: ${h.a('may', 'where is hot in May')}; next: ${h.a('july', 'July')}.</p>`,
  faqs: (h) => [
    { q: 'Is the sea warm in Greece in June?', a: `Warm enough for most swimmers: ${h.sea('crete', m)} off Crete, ${h.sea('rhodes', m)} off Rhodes and ${h.sea('corfu', m)} off Corfu on average in June. It keeps warming until August. The three are within half a degree of each other in June; by August, Rhodes is the warmest, at ${h.sea('rhodes', 8)}.` },
    { q: 'Where is hot but not too hot in June?', a: `The Canaries and the western Mediterranean: ${h.hi('tenerife', m)} in Tenerife, ${h.hi('majorca', m)} in Majorca, with nights around ${h.lo('majorca', m)}. Madeira is milder still at ${h.hi('madeira', m)}. Rain is rare in all three in June, and the evenings stay pleasant for eating outside without the heavy heat of the east.` },
    { q: 'When does hurricane season start in the Caribbean?', a: `On 1 June, and it runs to 30 November, according to the US National Hurricane Center. In June our data show rain rising in the region, with ${h.wet('cancun', m)} in Cancun and ${h.wet('miami', m)} in Miami. Early-season storms are less frequent than in late summer.` },
  ],
  related: ['may', 'july', 'majorca', 'corfu'],
  sources: ['ghcn', 'oisst', 'nhc', 'wmo_normals'],
});
