import { definePage } from '../../lib/page-types';
const id = 'majorca';
export default definePage({
  id, group: 'iberia', order: 14, slug: 'majorca-weather-by-month', nav: 'Majorca', card: 'A true summer island: 30 °C in July, a sea of 26 °C in August, storms in autumn',
  title: 'Majorca Weather by Month: Sea, Rain and Highs in Palma',
  description: 'Majorca weather by month from the Palma station, 1991 to 2020: daytime highs, night lows, sea temperature, rain and wet days, plus a tool to compare months.',
  h1: 'Majorca weather by month',
  intro: (h) => `Majorca weather by month has a real winter and a real summer: ${h.hi(id, 1)} by day in January, ${h.hi(id, 7)} in July, and a sea from ${h.seaMin(id)} to ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Majorca, or Mallorca, has a Mediterranean climate in the textbook sense: hot, dry summers and mild, wetter winters. Our figures come from the station in Palma, on the bay, averaged over the thirty years from 1991 to 2020. The warm season is shorter than many visitors expect. The daytime high passes 23 °C in ${h.month(5)}, reaches ${h.hi(id, 7)} in July and August, and drops back below 20 °C in ${h.month(11)}. The sea lags behind the air by about a month: ${h.sea(id, 5)} in May, ${h.sea(id, 8)} in August, still ${h.sea(id, 10)} in October. Rain is low in summer, ${h.rain(id, 7)} in July, but autumn is the wettest time of year, with ${h.rain(id, 10)} in October, often in short, heavy storms rather than steady rain. That makes late September and October a trade-off between a warm sea and the risk of a wet day.`,
  body: (h) => `
<h2>Majorca weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Palma de Mallorca station for air and rain; sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>The autumn storms</h2>
<p>The western Mediterranean is warmest in late summer, and when the first cold air of autumn passes over that warm water it can set off violent thunderstorms. Spanish forecasters call the pattern a DANA, a cut-off low. In Palma the result shows clearly in the averages: ${h.rain(id, 9)} in September and ${h.rain(id, 10)} in October, against ${h.rain(id, 7)} in July. The number of wet days rises less sharply, ${h.wet(id, 10)} in October, because much of the rain comes in a few downpours. A week in October is usually fine; it is the odd day that is lost.</p>
<h2>Best time to visit Majorca</h2>
<p>Daytime high of 24 °C or more: ${h.good(id, 24)}. Add a sea of at least 22 °C: ${h.good(id, 24, 22)}. For walking in the Tramuntana mountains, spring and late autumn suit better, with ${h.hi(id, 4)} by day in April and ${h.hi(id, 11)} in November. The island is cool in winter, ${h.hi(id, 1)} in January, so for winter sun look south to the ${h.a('tenerife', 'Canaries')}. ${h.a('ibiza', 'Ibiza')} is almost identical; ${h.a('benidorm', 'Benidorm')} on the mainland is a little warmer in spring.</p>`,
  faqs: (h) => [
    { q: 'Is Majorca warm in May?', a: `Warm enough for the beach on most days: the average daytime high in Palma in May is ${h.hi(id, 5)}, with ${h.wet(id, 5)} of rain. The sea is still cool at ${h.sea(id, 5)}, so swimming is brisk. June is a clear step up, with ${h.hi(id, 6)} by day and a sea of ${h.sea(id, 6)}.` },
    { q: 'When is the sea warmest in Majorca?', a: `In August, at ${h.sea(id, 8)} on average, followed by September at ${h.sea(id, 9)} and July at ${h.sea(id, 7)}. The Mediterranean around the Balearics warms quickly in June and keeps its heat into October. In February and March it falls to ${h.sea(id, 3)}, too cold for most swimmers.` },
    { q: 'How many rainy days does Majorca get in October?', a: `About ${h.wet(id, 10)} with a millimetre or more in Palma, for an average total of ${h.rain(id, 10)}, the highest of the year. Autumn rain in Majorca often comes in short, heavy storms, so the rest of the week can be sunny and warm, with highs around ${h.hi(id, 10)}.` },
  ],
  related: ['ibiza', 'benidorm', 'crete', 'may'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
