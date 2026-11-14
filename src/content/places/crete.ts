import { definePage } from '../../lib/page-types';
const id = 'crete';
export default definePage({
  id, group: 'med', order: 30, slug: 'crete-weather-by-month', nav: 'Crete', card: 'A long, dry Greek summer from May to October and a sea that holds its heat',
  title: 'Crete Weather by Month: Heraklion Highs, Sea and Rain',
  description: 'Crete weather by month from the Heraklion station, 1991 to 2020: highs, lows, sea temperature, rain and wet days on the north coast, with a tool to test months.',
  h1: 'Crete weather by month',
  intro: (h) => `Crete weather by month gives a long beach season: ${h.hi(id, 5)} by day in May, ${h.hi(id, 7)} in July, ${h.hi(id, 10)} in October, and a sea at ${h.sea(id, 9)} in September.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Crete is the largest Greek island and the most southerly of the big holiday islands of the Aegean. Our figures come from Heraklion, on the north coast, where most visitors land, averaged over 1991 to 2020. The summer is long and almost completely dry: from June to August Heraklion records ${h.wet(id, 6)}, ${h.wet(id, 7)} and ${h.wet(id, 8)} of rain a month. July and August reach ${h.hi(id, 7)} by day, tempered on the north coast by the summer north wind, the meltemi. The sea warms late and cools late, ${h.sea(id, 6)} in June, ${h.sea(id, 8)} in August and still ${h.sea(id, 10)} in October, which is why autumn weeks in Crete are popular with swimmers. Winters are mild but wet and grey, with ${h.rain(id, 1)} of rain in January over about ${h.wet(id, 1)}.`,
  body: (h) => `
<h2>Crete weather by month at Heraklion</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Heraklion station; sea temperature taken ${h.seaKm(id)}. Wet day: 1 mm of rain or more.`)}
<h2>Crete in May and in October</h2>
<p>The two shoulder months are close mirror images in the air, ${h.hi(id, 5)} in May against ${h.hi(id, 10)} in October, but not in the water: the sea is ${h.sea(id, 5)} in May and ${h.sea(id, 10)} in October, because it takes all summer to warm. May is the drier of the two, with ${h.wet(id, 5)} of rain against ${h.wet(id, 10)}. For a swim-first holiday choose October; for walking the gorges in green landscape, May.</p>
<h2>Best time to visit Crete</h2>
<p>A daytime high of 24 °C or more with a sea of 22 °C or more: ${h.good(id, 24, 22)}. The south coast, facing Africa, has no long public record in the data we use, so the table stays on the north coast, where the main resorts and the airport are. Compared with ${h.a('rhodes', 'Rhodes')}, Crete has slightly cooler nights; ${h.a('larnaca', 'Cyprus')} is hotter in midsummer.</p>`,
  faqs: (h) => [
    { q: 'Is Crete hot in May?', a: `Warm rather than hot: Heraklion averages ${h.hi(id, 5)} by day and ${h.lo(id, 5)} at night in May, with rain on about ${h.wet(id, 5)}. The sea is still cool at ${h.sea(id, 5)}; it passes 22 °C in June. It is a good month for walking.` },
    { q: 'When is the sea warmest in Crete?', a: `In August, at ${h.sea(id, 8)} on average off Heraklion, with July and September close behind at ${h.sea(id, 7)} and ${h.sea(id, 9)}. The water stays above 22 °C from ${h.seaFrom(id, 22)}. October is still warm, at ${h.sea(id, 10)}, and many swimmers prefer it to June.` },
    { q: 'Does it rain in Crete in winter?', a: `Yes. Winter is the wet season, with ${h.rain(id, 12)} in December and ${h.rain(id, 1)} in January, spread over about ${h.wet(id, 1)} in January. Daytime highs stay mild, around ${h.hi(id, 1)}, but it is not beach weather. Summer, by contrast, is almost rainless.` },
  ],
  related: ['rhodes', 'larnaca', 'may', 'october'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
