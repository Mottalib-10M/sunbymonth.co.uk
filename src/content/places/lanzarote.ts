import { definePage } from '../../lib/page-types';
const id = 'lanzarote';
export default definePage({
  id, group: 'iberia', order: 11, slug: 'lanzarote-weather-by-month', nav: 'Lanzarote', card: 'A low, windy island: very little rain, a hot August and a cool sea until June',
  title: 'Lanzarote Weather by Month: Highs, Sea Temperature, Rain',
  description: 'Lanzarote weather by month from the Arrecife airport station, 1991 to 2020: daytime highs, sea temperature, rain and wet days, and a tool to compare months.',
  h1: 'Lanzarote weather by month',
  intro: (h) => `Lanzarote weather by month in one line: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, and almost no rain from May to September.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Lanzarote is the most northerly and the lowest of the main Canary Islands, and that shapes its climate. With no high mountain to catch the clouds, it gets little rain in any month and the sky is open more often than on Tenerife or Gran Canaria. Our figures come from the weather station at the airport near Arrecife and Playa Honda, close to the main resorts, averaged over 1991 to 2020. The year runs from ${h.hi(id, 1)} by day in January to ${h.hi(id, 8)} in August, a little hotter at the peak than southern Tenerife. Nights stay mild, ${h.lo(id, 1)} in mid-winter. The weak point is the water: the Atlantic around the island sits at ${h.sea(id, 2)} in February and only climbs past twenty degrees from ${h.seaFrom(id, 21).split(' to ')[0]}. Rain is a winter matter, ${h.rain(id, 12)} in December, the wettest month.`,
  body: (h) => `
<h2>Lanzarote weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Lanzarote airport station for air and rain; sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>The wind is the part the averages leave out</h2>
<p>A daytime high of ${h.hi(id, 7)} in July reads like a hot month, and on the sheltered side of a wall it is. On the beach, the trade wind that blows across the island for much of the summer makes it feel several degrees cooler, and it is the reason Lanzarote is popular with windsurfers. The wind is strongest in summer and weakest in autumn and winter. If a still, hot afternoon matters more to you than a breeze, the end of the season, ${h.month(9)} and ${h.month(10)}, combines the warmest sea of the year, ${h.sea(id, 9)} and ${h.sea(id, 10)}, with lighter wind.</p>
<h2>Best time to visit Lanzarote</h2>
<p>Months with a daytime high of 24 °C or more: ${h.good(id, 24)}. With a sea of at least 21 °C as well: ${h.good(id, 24, 21)}. For winter sun, Lanzarote averages ${h.hi(id, 12)} in December and ${h.hi(id, 2)} in February, about one degree below the south of ${h.a('tenerife', 'Tenerife')}, and the difference comes mostly from the cooler water around the island. ${h.a('fuerteventura', 'Fuerteventura')}, the neighbour to the south, is very close on every line. See also ${h.a('november', 'where is hot in November')}.</p>`,
  faqs: (h) => [
    { q: 'Is Lanzarote warmer than Tenerife?', a: `In summer, slightly: ${h.hi(id, 8)} against ${h.hi('tenerife', 8)} in August at the two airport stations. In winter it is a little cooler, ${h.hi(id, 1)} against ${h.hi('tenerife', 1)} in January, and its sea is about one degree colder in every month. The bigger difference is the rain and cloud, both lower on flat Lanzarote than on the north side of Tenerife.` },
    { q: 'Does it rain much in Lanzarote in November?', a: `Not much. November brings ${h.rain(id, 11)} on average at the airport, spread over ${h.wet(id, 11)} with a millimetre or more. A rainy day happens, but a rainy week is rare. The daytime high in November is ${h.hi(id, 11)} and the sea is still ${h.sea(id, 11)}, which makes it one of the better months for a late-autumn break.` },
    { q: 'When is the sea warmest in Lanzarote?', a: `In September and October, at ${h.sea(id, 9)} and ${h.sea(id, 10)} on average. The Atlantic warms slowly through the summer and keeps its heat into autumn, so the sea is warmer in October than in June. In February and March it drops to ${h.sea(id, 3)}, which most people find cool.` },
  ],
  related: ['tenerife', 'fuerteventura', 'gran-canaria', 'november'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
