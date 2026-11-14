import { definePage } from '../../lib/page-types';
const m = 8;
export default definePage({
  id: 'august', group: 'months', order: 8, slug: 'where-is-hot-in-august', nav: 'Where is hot in August', card: 'The warmest seas of the year: 26 to 29 °C off Turkey, Cyprus and the Balearics',
  title: 'Where Is Hot in August: Peak Heat and the Warmest Seas',
  description: 'Where is hot in August: daytime highs, sea temperature, night lows and wet days for 62 places, 1991 to 2020 averages, with a finder that ranks them all.',
  h1: 'Where is hot in August',
  intro: (h) => `Where is hot in August is easy: nearly all of southern Europe. Hottest short haul: ${h.hotList(m, 3500, 4)}, with seas near their peak.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `August is the hottest month in much of the Mediterranean and the month when its sea reaches the top of its curve. The water off Antalya averages ${h.sea('antalya', m)}, off Larnaca ${h.sea('larnaca', m)}, off Rhodes ${h.sea('rhodes', m)} and off Majorca ${h.sea('majorca', m)}, warm enough to stay in for an hour. The air follows: ${h.hi('antalya', m)} in Antalya, ${h.hi('sicily', m)} in Sicily, ${h.hi('benidorm', m)} in Benidorm. Nights are warm too, often above 22 °C, which matters for sleeping in rooms without air conditioning. The Canaries are the warmest they get, ${h.hi('lanzarote', m)} in Lanzarote, but their sea stays cooler, ${h.sea('lanzarote', m)}. Long haul, August is the hottest month in Dubai, ${h.hi('dubai', m)}, and among the wettest in Phuket and Florida. Iceland averages ${h.hi('iceland', m)}, for anyone looking to escape the heat.`,
  body: (h) => `
<h2>Where is hot in August: the ranking</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'August averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>The warmest seas in August</h2>
<p>Ranked by water rather than air, the eastern Mediterranean leads: ${h.a('antalya', 'Antalya')} at ${h.sea('antalya', m)}, ${h.a('larnaca', 'Cyprus')} at ${h.sea('larnaca', m)}, ${h.a('rhodes', 'Rhodes')} at ${h.sea('rhodes', m)}. ${h.a('malta', 'Malta')} follows at ${h.sea('malta', m)} and the ${h.a('majorca', 'Balearics')} at ${h.sea('majorca', m)}. The Atlantic is several degrees cooler: ${h.sea('tenerife', m)} off Tenerife, ${h.sea('lisbon', m)} off Lisbon. The finder above lets you set a minimum sea temperature to see only the warm-water places.</p>
<h2>Warm nights</h2>
<p>The night low matters as much as the high in August. ${h.a('rhodes', 'Rhodes')} averages ${h.lo('rhodes', m)} at night, ${h.a('larnaca', 'Larnaca')} ${h.lo('larnaca', m)}, ${h.a('majorca', 'Majorca')} ${h.lo('majorca', m)}. In ${h.a('corfu', 'Corfu')} the night is cooler, ${h.lo('corfu', m)}, despite a hot day. Previous month: ${h.a('july', 'where is hot in July')}; next: ${h.a('september', 'September')}.</p>`,
  faqs: (h) => [
    { q: 'Where is the warmest sea in Europe in August?', a: `Of the places on this site, the Turkish Riviera around Antalya, at ${h.sea('antalya', m)} on average, and off Cyprus at ${h.sea('larnaca', m)}. In the western Mediterranean, the Balearics reach ${h.sea('majorca', m)}. September is almost as warm in the water, ${h.sea('antalya', 9)} off Antalya, with less heat in the air.` },
    { q: 'Is it too hot in Dubai in August?', a: `For most visitors, yes: the average high is ${h.hi('dubai', m)} and the low ${h.lo('dubai', m)}, with a Gulf sea of ${h.sea('dubai', m)}. Time outdoors is limited to the early morning. Hotels and malls are cooled, so many visitors move between them and the pool.` },
    { q: 'Where is cooler in August for a summer holiday?', a: `The Atlantic coasts and islands: ${h.hi('madeira', m)} in Madeira, ${h.hi('lisbon', m)} in Lisbon, ${h.hi('tenerife', m)} in Tenerife. Further north, Iceland averages ${h.hi('iceland', m)} by day. Those Atlantic places stay dry and sunny, and the evenings are cool enough to sleep well without air conditioning.` },
  ],
  related: ['july', 'september', 'antalya', 'rhodes'],
  sources: ['ghcn', 'oisst', 'wmo_normals'],
});
