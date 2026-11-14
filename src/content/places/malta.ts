import { definePage } from '../../lib/page-types';
const id = 'malta';
export default definePage({
  id, group: 'med', order: 35, slug: 'malta-weather-by-month', nav: 'Malta', card: 'Small, central and very sunny in summer; its autumn is warm but stormy',
  title: 'Malta Weather by Month: Highs, Sea Temperature and Rain',
  description: 'Malta weather by month at Luqa, 1991 to 2020: daytime highs, sea temperature around the islands, rain and wet days, from NOAA records, with a month tool.',
  h1: 'Malta weather by month',
  intro: (h) => `Malta weather by month in figures: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, a sea of ${h.sea(id, 9)} in September, and ${h.rain(id, 10)} of rain in October.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Malta sits in the middle of the Mediterranean, south of Sicily, and its small islands are surrounded by open sea. Our figures come from the Luqa station near the airport, averaged over 1991 to 2020. The summer is hot and very dry: ${h.hi(id, 7)} by day in July, ${h.hi(id, 8)} in August, and ${h.wet(id, 7)} of rain in July. The sea warms to ${h.sea(id, 8)} in August and stays at ${h.sea(id, 10)} in October. Autumn and winter bring the rain, mostly in heavy showers: ${h.rain(id, 9)} in September, ${h.rain(id, 10)} in October and ${h.rain(id, 12)} in December. Winter days stay mild, around ${h.hi(id, 1)}. The night lows for autumn and winter are not shown: the Luqa record in the public daily archive is too patchy in those months to give a figure we can stand behind.`,
  body: (h) => `
<h2>Malta weather by month at Luqa</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Luqa station; sea temperature taken ${h.seaKm(id)}. Wet day: 1 mm of rain or more. Night lows from September to March: not recorded often enough.`)}
<h2>Malta in October</h2>
<p>October is among the most searched months for Malta, and it is a month of two faces. The day is warm at ${h.hi(id, 10)} and the sea is still ${h.sea(id, 10)}, better for swimming than in June. But October is also wet, with ${h.rain(id, 10)} on about ${h.wet(id, 10)}. A week usually holds a couple of stormy days and many bright ones. For comparison, ${h.a('crete', 'Crete')} has ${h.wet('crete', 10)} of rain in October and ${h.a('larnaca', 'Cyprus')} ${h.wet('larnaca', 10)}.</p>
<h2>Best time to visit Malta</h2>
<p>A daytime high of 24 °C or more and a sea of 22 °C or more: ${h.good(id, 24, 22)}. Spring is good for sightseeing in Valletta and Mdina, at ${h.hi(id, 4)} in April and ${h.hi(id, 5)} in May, with little rain. Winter is quiet and mild, cooler than the ${h.a('tenerife', 'Canaries')} by six degrees or so.</p>`,
  faqs: (h) => [
    { q: 'Is Malta warm in October?', a: `Yes: the average high at Luqa in October is ${h.hi(id, 10)} and the sea ${h.sea(id, 10)}. It is also one of the wetter months, ${h.rain(id, 10)} on average, falling on about ${h.wet(id, 10)}. Rain tends to come in short, heavy showers, so most days stay dry and the sea is still fine for swimming.` },
    { q: 'What is the hottest month in Malta?', a: `August, with an average high of ${h.hi(id, 8)}, just ahead of July at ${h.hi(id, 7)}. August also has the warmest sea, ${h.sea(id, 8)}. July is the driest month. Nights stay warm too, ${h.lo(id, 8)} in August, so air conditioning helps for sleep.` },
    { q: 'Is Malta a winter sun destination?', a: `It is mild rather than warm: about ${h.hi(id, 1)} by day in January and ${h.hi(id, 2)} in February, with rain on about ${h.wet(id, 1)} in January. The sea drops to ${h.sea(id, 2)}. It suits a city break more than a beach holiday in winter.` },
  ],
  related: ['crete', 'larnaca', 'october', 'september'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
