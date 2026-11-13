import { definePage } from '../../lib/page-types';
const id = 'lisbon';
export default definePage({
  id, group: 'iberia', order: 18, slug: 'lisbon-weather-by-month', nav: 'Lisbon', card: 'A mild, wet Atlantic winter and a dry, sunny summer cooled by the ocean',
  title: 'Lisbon Weather by Month: Highs, Rain and the Atlantic Sea',
  description: 'Lisbon weather by month, 1991 to 2020, from the city station: daytime highs, night lows, Atlantic sea temperature, rain and wet days, with a month tool.',
  h1: 'Lisbon weather by month',
  intro: (h) => `Lisbon weather by month is Atlantic first: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, and an ocean that stays between ${h.seaMin(id)} and ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Lisbon faces the open Atlantic, and the ocean sets the rhythm of its year far more than the Mediterranean sets the rhythm of Barcelona or Malaga. Our figures come from the Lisboa Geofísica station in the city, averaged over 1991 to 2020. Winters are mild and wet: ${h.hi(id, 1)} by day in January, ${h.lo(id, 1)} at night, and ${h.rain(id, 12)} of rain in December spread over about ${h.wet(id, 12)}. The dry season is short but reliable, with ${h.rain(id, 7)} in July and ${h.rain(id, 8)} in August. Summer afternoons reach ${h.hi(id, 7)} in July, yet the evenings stay comfortable because the sea never gets warm, peaking at ${h.sea(id, 9)} in September. That makes Lisbon a better city break than a swimming holiday, and spring and early autumn its most pleasant seasons.`,
  body: (h) => `
<h2>Lisbon weather by month in one table</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Lisboa Geofísica station; sea surface ${h.seaKm(id)} off the coast. Wet day: 1 mm of rain or more.`)}
<h2>When it rains in Lisbon</h2>
<p>Rain arrives with the autumn depressions off the Atlantic. October has ${h.rain(id, 10)} and November ${h.rain(id, 11)}, the wettest month of the year, and the wet season continues to March with ${h.rain(id, 3)}. Even then, wet days number about ${h.wet(id, 11)} in November, so most days in a winter week are dry. From June to September the city sees ${h.wet(id, 6)}, ${h.wet(id, 7)}, ${h.wet(id, 8)} and ${h.wet(id, 9)} of rain a month.</p>
<h2>Best months for a city break and for the beach</h2>
<p>For walking the hills, May at ${h.hi(id, 5)} and October at ${h.hi(id, 10)} are hard to beat. A high of 25 °C or more is the rule from ${h.good(id, 25)}. The beaches of Cascais and the Costa da Caparica are popular in summer, but the water there never reaches 20 °C on average. For warmer water within Portugal, look to ${h.a('madeira', 'Madeira')}, where the sea reaches ${h.sea('madeira', 9)} in September; for a hotter Iberian summer, ${h.a('malaga', 'Malaga')} adds a few degrees.</p>`,
  faqs: (h) => [
    { q: 'Is Lisbon warm in April?', a: `Pleasant rather than warm: the average high is ${h.hi(id, 4)} and the low ${h.lo(id, 4)}, with ${h.wet(id, 4)} of rain. Light layers and a waterproof are sensible. May is a clear step up at ${h.hi(id, 5)}. It is a good month for walking.` },
    { q: 'What is the wettest month in Lisbon?', a: `November, with ${h.rain(id, 11)} on average over 1991 to 2020, followed by October at ${h.rain(id, 10)} and December at ${h.rain(id, 12)}. July is the driest at ${h.rain(id, 7)}. Rain comes with Atlantic weather fronts, so wet spells alternate with bright days, and a waterproof is useful from October to April.` },
    { q: 'Can you swim in the sea in Lisbon?', a: `Yes, but the Atlantic is cool. It averages ${h.sea(id, 8)} in August and ${h.sea(id, 9)} in September, the warmest months, and ${h.sea(id, 2)} in February. Most swimmers find it bracing even at the height of summer. The Algarve coast is a little warmer.` },
  ],
  related: ['madeira', 'malaga', 'october', 'april'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
