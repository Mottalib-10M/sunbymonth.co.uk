import { definePage } from '../../lib/page-types';
const id = 'antalya';
export default definePage({
  id, group: 'med', order: 34, slug: 'turkey-weather-by-month', nav: 'Turkey (Antalya)', card: 'The hottest summer and warmest sea of the Mediterranean resorts, and a very wet winter',
  title: 'Turkey Weather by Month: Antalya Highs, Sea and Rainfall',
  description: 'Turkey weather by month on the Antalya coast, 1991 to 2020: daytime highs, night lows, sea temperature, rain and wet days, with a tool to test a month.',
  h1: 'Turkey weather by month',
  intro: (h) => `Turkey weather by month on the Antalya coast is extreme both ways: ${h.hi(id, 7)} by day in July with a sea of ${h.sea(id, 8)} in August, then ${h.rain(id, 12)} of rain in December.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Antalya is the hub of the Turkish Riviera, with Belek, Side, Kemer and Alanya along the same coast. Our figures come from the Antalya station, averaged over 1991 to 2020. Behind the coast the Taurus mountains rise steeply, and the climate is one of strong contrasts. In summer: July averages ${h.hi(id, 7)} by day and August ${h.hi(id, 8)}, the hottest of the Mediterranean beach resorts on this site. In winter the storms bring heavy rain: ${h.rain(id, 1)} in January and ${h.rain(id, 12)} in December, far more than in Cyprus or Crete. The sea is the warmest of the Mediterranean places we track, ${h.sea(id, 8)} in August and still ${h.sea(id, 10)} in October. For British holidays, the strongest months are May, June, September and October, when the heat is lower and the sea already or still warm.`,
  body: (h) => `
<h2>Turkey weather by month: Antalya table</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Antalya station; sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Turkey in May</h2>
<p>May is the start of the season: ${h.hi(id, 5)} by day, ${h.lo(id, 5)} at night, and rain on about ${h.wet(id, 5)}. The sea, at ${h.sea(id, 5)}, is warmer than in Majorca at the same time. By June the high jumps to ${h.hi(id, 6)}, and many families prefer the first half of the month before school holidays.</p>
<h2>Turkey in October</h2>
<p>October keeps the summer sea, ${h.sea(id, 10)}, with a gentler day at ${h.hi(id, 10)}. The risk is rain: October averages ${h.rain(id, 10)}, though it falls on only about ${h.wet(id, 10)}, so the storms are heavy and short. November is cooler and wetter. For an October week with fewer storms, ${h.a('larnaca', 'Cyprus')} has ${h.rain('larnaca', 10)} on average. For a Greek island facing the Turkish coast, see ${h.a('rhodes', 'Rhodes')}.</p>`,
  faqs: (h) => [
    { q: 'Is Turkey hot in October?', a: `Warm: the average high in Antalya in October is ${h.hi(id, 10)}, the low ${h.lo(id, 10)}, and the sea ${h.sea(id, 10)}. Expect a few heavy showers, with ${h.rain(id, 10)} of rain on about ${h.wet(id, 10)} on average. It is a popular half-term choice.` },
    { q: 'How hot is Antalya in July?', a: `Very hot: the July average high is ${h.hi(id, 7)} over 1991 to 2020, and heatwaves go higher. Nights stay around ${h.lo(id, 7)}. The sea is ${h.sea(id, 7)}, which makes the beach the coolest place in the afternoon. Shade matters at midday.` },
    { q: 'Is Turkey a good winter sun destination?', a: `Not for the beach. In January Antalya averages ${h.hi(id, 1)} by day and ${h.lo(id, 1)} at night, with ${h.rain(id, 1)} of rain. For warmth in winter, the Canaries or the Red Sea are the closer choices. It suits a city break.` },
  ],
  related: ['larnaca', 'rhodes', 'may', 'october'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
