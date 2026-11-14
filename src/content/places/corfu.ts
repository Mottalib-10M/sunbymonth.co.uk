import { definePage } from '../../lib/page-types';
const id = 'corfu';
export default definePage({
  id, group: 'med', order: 32, slug: 'corfu-weather-by-month', nav: 'Corfu', card: 'Green because it is wet: a hot summer, then the rainiest autumn of the Greek islands',
  title: 'Corfu Weather by Month: Hot Summers, Wet Autumns, Sea',
  description: 'Corfu weather by month, 1991 to 2020: highs, lows, Ionian Sea temperature, rain and wet days at the Corfu station, with a tool to check any month for a holiday.',
  h1: 'Corfu weather by month',
  intro: (h) => `Corfu weather by month swings further than the Aegean: ${h.hi(id, 8)} by day in August but ${h.rain(id, 11)} of rain in November, nearly three times as much as Crete in the same month.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Corfu lies in the Ionian Sea off the north-west coast of Greece, close to Albania, and it is the greenest of the popular Greek islands for a simple reason: it gets far more rain. Our figures come from the Corfu station, averaged over 1991 to 2020. The yearly pattern is sharp. July and August are hot and dry, at ${h.hi(id, 7)} and ${h.hi(id, 8)} by day with ${h.wet(id, 7)} of rain in July. Then the autumn storms arrive from the west: ${h.rain(id, 9)} in September, ${h.rain(id, 10)} in October, ${h.rain(id, 11)} in November and ${h.rain(id, 12)} in December. Winter nights are cold for the Mediterranean, ${h.lo(id, 1)} in January. The sea is a little cooler than in the Aegean islands to the east, ${h.sea(id, 8)} in August.`,
  body: (h) => `
<h2>Corfu weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Corfu station; Ionian sea temperature taken ${h.seaKm(id)}. Wet day: 1 mm of rain or more.`)}
<h2>The hot core of summer</h2>
<p>From June to August, Corfu is hotter by day than ${h.a('crete', 'Crete')}: ${h.hi(id, 8)} in August against ${h.hi('crete', 8)} in Heraklion. Nights are cooler, ${h.lo(id, 8)}, and the sea reaches 22 °C in ${h.seaFrom(id, 22)}.</p>
<h2>Corfu in September and October</h2>
<p>September begins warm, ${h.hi(id, 9)} by day with a sea of ${h.sea(id, 9)}, but rain comes on about ${h.wet(id, 9)}, five times as many as in July. By October the figure reaches ${h.wet(id, 10)}. For a late-season week with a lower risk of rain, ${h.a('larnaca', 'Cyprus')} is a drier bet, with ${h.wet('larnaca', 10)} of rain in October. For the greenest landscapes and wild flowers, Corfu in April and May, at ${h.hi(id, 4)} and ${h.hi(id, 5)}, is at its best.</p>`,
  faqs: (h) => [
    { q: 'Is Corfu hot in June?', a: `Yes: the average high in June is ${h.hi(id, 6)}, with a low of ${h.lo(id, 6)} and rain on about ${h.wet(id, 6)}. The sea is ${h.sea(id, 6)}, warm enough for most swimmers. July and August are hotter still. June is also one of the driest months of the year in Corfu.` },
    { q: 'What is the wettest month in Corfu?', a: `December, with ${h.rain(id, 12)} on average over 1991 to 2020, just ahead of November at ${h.rain(id, 11)}. July is the driest month, at ${h.rain(id, 7)}. That rain is why the island is so green, and why late autumn and winter are quiet months for visitors.` },
    { q: 'Is the sea warm in Corfu in October?', a: `It is still ${h.sea(id, 10)} on average, comfortable for a swim, while the daytime high is ${h.hi(id, 10)}. The catch is the rain: ${h.rain(id, 10)} in October, on about ${h.wet(id, 10)}. The first half of the month is usually the better bet for a beach week.` },
  ],
  related: ['crete', 'rhodes', 'june', 'september'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
