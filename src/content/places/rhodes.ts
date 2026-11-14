import { definePage } from '../../lib/page-types';
const id = 'rhodes';
export default definePage({
  id, group: 'med', order: 31, slug: 'rhodes-weather-by-month', nav: 'Rhodes', card: 'Warm nights and one of the warmest seas in Greece from July to October',
  title: 'Rhodes Weather by Month: Daytime Highs, Nights and Sea',
  description: 'Rhodes weather by month, 1991 to 2020: daytime highs, night lows and sea temperature around the island, from NOAA records, with a tool to check a month.',
  h1: 'Rhodes weather by month',
  intro: (h) => `Rhodes weather by month peaks at ${h.hi(id, 8)} by day in August, with nights of ${h.lo(id, 8)} and the sea at ${h.sea(id, 8)}, one of the warmest in Greece.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Rhodes is the largest of the Dodecanese islands, close to the Turkish coast in the south-east Aegean. Its position gives it warmer nights and a warmer sea than the Greek islands further west. Our figures come from the Rhodes station, averaged over 1991 to 2020. In summer the afternoon reaches ${h.hi(id, 7)} in July and ${h.hi(id, 8)} in August, and the night stays at ${h.lo(id, 8)}, several degrees warmer than in Corfu. The sea rises from ${h.sea(id, 5)} in May to ${h.sea(id, 8)} in August and stays at ${h.sea(id, 10)} in October. Spring and autumn are gentle, ${h.hi(id, 4)} in April and ${h.hi(id, 11)} in November. The Rhodes station in NOAA's daily archive does not report rain on enough days for a reliable monthly total, so this page shows temperature and sea only.`,
  body: (h) => `
<h2>Rhodes weather by month: highs, lows and sea</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Rhodes station; sea temperature taken ${h.seaKm(id)}. Rain: not recorded often enough in the public daily data, so no figure is shown.`)}
<h2>Warm evenings</h2>
<p>What sets Rhodes apart is the night. From June to September the low stays at ${h.lo(id, 6)}, ${h.lo(id, 7)}, ${h.lo(id, 8)} and ${h.lo(id, 9)}, against ${h.lo('corfu', 8)} in Corfu in August. Dinner outside without a layer is the norm from June to early October. In winter the island is mild too, with nights around ${h.lo(id, 1)} in January.</p>
<h2>Best time to visit Rhodes</h2>
<p>A daytime high of 24 °C or more: ${h.good(id, 24)}. With a sea of 22 °C or more as well: ${h.good(id, 24, 22)}. October is a strong late-season choice, at ${h.hi(id, 10)} with a sea of ${h.sea(id, 10)}. For a hotter summer and a similar sea, look across to ${h.a('antalya', 'Antalya')}; for a bigger island with gorges and mountains, ${h.a('crete', 'Crete')}.</p>`,
  faqs: (h) => [
    { q: 'Is Rhodes warm in October?', a: `Yes, October is one of the most pleasant months: the average high is ${h.hi(id, 10)}, the low ${h.lo(id, 10)}, and the sea ${h.sea(id, 10)}, warmer than in June. By November the high falls to ${h.hi(id, 11)}. It is a good month for a late beach week.` },
    { q: 'How hot does Rhodes get in August?', a: `The August average high is ${h.hi(id, 8)} and the average low ${h.lo(id, 8)}, over 1991 to 2020. Heatwaves push individual days well above that, so the hottest hours are best spent in the shade or the sea, which averages ${h.sea(id, 8)}.` },
    { q: 'Why is there no rain figure for Rhodes?', a: `The Rhodes station in the public daily archive of NOAA, the US government agency for weather and oceans, reports rain on too few days each month in 1991 to 2020 to give a reliable total. Rather than show a figure based on a handful of years, the table says not recorded.` },
  ],
  related: ['crete', 'antalya', 'corfu', 'october'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
