import { definePage } from '../../lib/page-types';
const id = 'madeira';
export default definePage({
  id, group: 'iberia', order: 19, slug: 'madeira-weather-by-month', nav: 'Madeira', card: 'The island of eternal spring: highs barely move between winter and summer',
  title: 'Madeira Weather by Month: Funchal Highs, Lows and Sea',
  description: 'Madeira weather by month, 1991 to 2020: daytime highs and night lows at Funchal airport and the sea around the island, plus a tool to test any month for a trip.',
  h1: 'Madeira weather by month',
  intro: (h) => `Madeira weather by month varies less than almost anywhere in Europe: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, with nights that rarely drop much below ${h.lo(id, 2)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Madeira lies in the Atlantic about 600 kilometres off the coast of Morocco, and the ocean around it keeps the temperature remarkably even through the year. Our air figures come from the airport station at Santa Catarina, on the south-east coast near Funchal, averaged over 1991 to 2020. The coolest month, ${h.coolest(id)}, averages ${h.hi(id, 2)} by day; the warmest, ${h.warmest(id)}, ${h.hi(id, 8)}. Nights are just as steady, from ${h.lo(id, 2)} in February to ${h.lo(id, 8)} in August. The sea follows the same calm curve, ${h.sea(id, 3)} in March and ${h.sea(id, 9)} in September. NOAA's public daily records for the Madeira stations do not report rain on enough days to compute a monthly total, so we show no rainfall figure rather than a weak one.`,
  body: (h) => `
<h2>Madeira weather by month, Funchal coast</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Funchal airport (Santa Catarina) station; sea temperature taken ${h.seaKm(id)}. Rain: not recorded often enough in the public daily data, so no figure is shown.`)}
<h2>Madeira in winter</h2>
<p>From December to March the coast averages ${h.hi(id, 12)}, ${h.hi(id, 1)}, ${h.hi(id, 2)} and ${h.hi(id, 3)} by day. That is a little cooler than southern ${h.a('tenerife', 'Tenerife')}, at ${h.hi('tenerife', 1)} in January, but the nights are similar, around ${h.lo(id, 1)}. The sea stays near ${h.sea(id, 1)}. Madeira suits walking holidays on the levadas and New Year breaks better than a pure beach week.</p>
<h2>Madeira in summer</h2>
<p>The island never gets very hot: a high of 25 °C or more is reached only in ${h.good(id, 25)}. The sea passes 22 °C in ${h.seaFrom(id, 22)}, warmer than off ${h.a('lisbon', 'Lisbon')} at the same time. For a choice between Madeira and the Canaries in summer, ${h.a('compare', 'compare them month by month')}.</p>`,
  faqs: (h) => [
    { q: 'Is Madeira warm in December?', a: `Mild: the average high at Funchal airport in December is ${h.hi(id, 12)} and the low ${h.lo(id, 12)}, with a sea of ${h.sea(id, 12)}. It is a popular place for Christmas and the New Year, but a jumper is needed in the evenings.` },
    { q: 'What is the hottest month in Madeira?', a: `${h.warmest(id)}, with an average high of ${h.hi(id, 8)} over 1991 to 2020. September is almost as warm at ${h.hi(id, 9)}, and it has the warmest sea of the year, ${h.sea(id, 9)}. Even then, the island rarely feels hot, because the ocean keeps the air mild.` },
    { q: 'Why is there no rain figure for Madeira?', a: `The Madeira stations in the public daily archive of NOAA, the US government agency for weather and oceans, report rain on too few days each month for a reliable total. Our rule needs at least 26 days in a month and ten years; Madeira does not meet it, so the table says not recorded rather than showing a figure we cannot stand behind.` },
  ],
  related: ['tenerife', 'lisbon', 'cape-verde', 'december'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
