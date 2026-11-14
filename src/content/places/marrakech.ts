import { definePage } from '../../lib/page-types';
const id = 'marrakech';
export default definePage({
  id, group: 'mideast', order: 42, slug: 'marrakech-weather-by-month', nav: 'Marrakech (Morocco)', card: 'Warm winter days and cold nights, a fine spring, and a summer near 38 °C',
  title: 'Marrakech Weather by Month: Morocco Highs, Rain and Heat',
  description: 'Marrakech weather by month at Menara, 1991 to 2020: daytime highs, summer night lows, rain and wet days, from NOAA station records, with a month tool.',
  h1: 'Marrakech weather by month',
  intro: (h) => `Marrakech weather by month goes from ${h.hi(id, 1)} by day in January to ${h.hi(id, 7)} in July, with little rain: ${h.rain(id, 12)} in December and ${h.rain(id, 7)} in July.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Marrakech lies inland on the plain at the foot of the High Atlas, and its climate is semi-arid: hot, dry summers and mild, sunny winters. Our figures come from the Menara airport station, averaged over 1991 to 2020. In winter, the afternoon is pleasant, ${h.hi(id, 12)} in December and ${h.hi(id, 1)} in January, which explains the city's appeal for a short break from Britain. Spring warms quickly, ${h.hi(id, 3)} in March and ${h.hi(id, 4)} in April, and those are also the months with the most rain, about ${h.rain(id, 4)} in April. From June to August the heat is intense, ${h.hi(id, 6)}, ${h.hi(id, 7)} and ${h.hi(id, 8)}, and the souks feel hotter still. Being inland, the city has no sea of its own; for the beach, the coast at Agadir or Essaouira means a long transfer. The station's winter night lows are too patchy in the public archive to show.`,
  body: (h) => `
<h2>Marrakech weather by month at Menara</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Marrakech Menara station. Inland city: no sea. Night lows from September to March: not recorded often enough. Wet day: 1 mm of rain or more.`)}
<h2>Marrakech in winter</h2>
<p>From November to February the afternoon averages ${h.hi(id, 11)}, ${h.hi(id, 12)}, ${h.hi(id, 1)} and ${h.hi(id, 2)}, a few degrees warmer than ${h.a('malaga', 'Malaga')} across the strait. Rain comes on about ${h.wet(id, 12)} in December. For a winter break built around walking the medina, gardens and day trips to the Atlas, these figures are comfortable. They are not beach figures; for a warm sea in winter, the ${h.a('tenerife', 'Canaries')} or the ${h.a('hurghada', 'Red Sea')} are the options.</p>
<h2>When to avoid the heat</h2>
<p>A daytime high above 32 °C runs from June to September: ${h.hi(id, 6)} in June, ${h.hi(id, 9)} in September. Summer nights stay warm, ${h.lo(id, 7)} in July. The best balance is in spring, March to May, and in autumn, October and November, when the high sits between ${h.hi(id, 11)} and ${h.hi(id, 5)}.</p>`,
  faqs: (h) => [
    { q: 'Is Marrakech warm in December?', a: `By day, yes: the average high at Menara in December is ${h.hi(id, 12)}, with rain on about ${h.wet(id, 12)}. Winter night lows are not shown: the public record for them is too patchy. It is a good month for the medina and the gardens.` },
    { q: 'What is the hottest month in Marrakech?', a: `July, with an average high of ${h.hi(id, 7)}, level with August at ${h.hi(id, 8)}. The average low in July is ${h.lo(id, 7)}. Midday sightseeing is hard work in those months. Spring and autumn are more comfortable for walking in the city.` },
    { q: 'When does it rain most in Marrakech?', a: `In spring. April averages ${h.rain(id, 4)} and March ${h.rain(id, 3)}, on about ${h.wet(id, 3)} in March. The driest months are June to August, with ${h.rain(id, 7)} in July. Even in the wettest months, most days are dry and sunny. Showers rarely last long.` },
  ],
  related: ['malaga', 'tenerife', 'december', 'april'],
  sources: ['ghcn', 'ghcn_files', 'wmo_normals'],
});
