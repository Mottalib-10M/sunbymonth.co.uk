import { definePage } from '../../lib/page-types';
const id = 'orlando';
export default definePage({
  id, group: 'long', order: 45, slug: 'orlando-weather-by-month', nav: 'Orlando (Florida)', card: 'Theme park weather: mild winters, and summers of 33 °C with daily storms',
  title: 'Orlando Weather by Month: Florida Heat, Rain and Storms',
  description: 'Orlando weather by month at the international airport, 1991 to 2020: daytime highs, night lows, rain and wet days in Florida, with a tool to test months.',
  h1: 'Orlando weather by month',
  intro: (h) => `Orlando weather by month: ${h.hi(id, 1)} by day in January, ${h.hi(id, 7)} in July, and rain on ${h.wet(id, 7)} in July against ${h.wet(id, 11)} in November.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Orlando is in central Florida, inland from both coasts, and most British visitors come for the theme parks rather than the beach. Our figures come from Orlando International airport, averaged over 1991 to 2020. The climate is humid subtropical. Winters are mild and fairly dry, ${h.hi(id, 1)} by day in January and ${h.lo(id, 1)} at night. Spring is the sweet spot for many families, ${h.hi(id, 3)} in March and ${h.hi(id, 4)} in April. Summer is hot and humid, ${h.hi(id, 7)} in July and ${h.hi(id, 8)} in August, and the rainy season runs from June to September, when afternoon thunderstorms are frequent: rain falls on ${h.wet(id, 6)} in June and ${h.wet(id, 8)} in August. The Atlantic hurricane season runs from 1 June to 30 November according to the US National Hurricane Center; our averages show the rain, not the risk of a storm.`,
  body: (h) => `
<h2>Orlando weather by month, airport station</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Orlando International airport station. Inland city: no sea. Wet day: 1 mm of rain or more.`)}
<h2>Orlando in the summer holidays</h2>
<p>July and August are when most British families travel, and they are the hottest and wettest weeks of the year in central Florida. Highs of ${h.hi(id, 7)} and ${h.hi(id, 8)}, nights of ${h.lo(id, 8)}, and totals of ${h.rain(id, 7)} and ${h.rain(id, 8)}. The storms usually build in the afternoon, so plan rides and queues for the morning. For dates, check the hurricane outlook from the ${h.src('nhc', 'National Hurricane Center')} before travel.</p>
<h2>Best time to visit Orlando</h2>
<p>A daytime high of 24 °C to 30 °C with fewer than 8 wet days falls in March, April, October and November: ${h.hi(id, 3)}, ${h.hi(id, 4)}, ${h.hi(id, 10)} and ${h.hi(id, 11)}. The months with the fewest wet days are ${h.dryMonths(id, 5)}. For the beach, ${h.a('compare', 'compare Orlando with Miami')}, which has a warmer winter.</p>`,
  faqs: (h) => [
    { q: 'Is Orlando hot in October?', a: `Warm: the average high at Orlando airport in October is ${h.hi(id, 10)} and the low ${h.lo(id, 10)}. The rainy season is ending, with rain on about ${h.wet(id, 10)}, half as many as in August. It is one of the more comfortable months for the theme parks.` },
    { q: 'What is the rainiest month in Orlando?', a: `June, at ${h.rain(id, 6)} on average, with August (${h.rain(id, 8)}) and July (${h.rain(id, 7)}) close behind. The driest month is November, at ${h.rain(id, 11)}. In summer the rain usually comes as a short afternoon thunderstorm, so mornings are the best time for outdoor rides and queues.` },
    { q: 'Is Orlando warm at Christmas?', a: `Mild: December averages ${h.hi(id, 12)} by day and ${h.lo(id, 12)} at night. Most days are dry, with about ${h.wet(id, 12)} of rain in the month. A light jacket is useful in the evening. The pools may feel cool. Rain is light.` },
  ],
  related: ['compare', 'july', 'august', 'october'],
  sources: ['ghcn', 'ghcn_files', 'nhc', 'wmo_normals'],
});
