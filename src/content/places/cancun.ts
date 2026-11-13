import { definePage } from '../../lib/page-types';
const id = 'cancun';
export default definePage({
  id, group: 'long', order: 46, slug: 'cancun-weather-by-month', nav: 'Cancun (Mexico)', card: 'Caribbean sea at 26 to 29 °C all year, with a dry spring and a wet autumn',
  title: 'Cancun Weather by Month: Caribbean Highs, Sea and Rain',
  description: 'Cancun weather by month, 1991 to 2020: daytime highs, night lows, Caribbean sea temperature, rain and wet days on the Mexican coast, with a month tool.',
  h1: 'Cancun weather by month',
  intro: (h) => `Cancun weather by month keeps the sea warm all year, ${h.seaMin(id)} to ${h.seaMax(id)}, with a dry spring, ${h.rain(id, 4)} of rain in April, and a wet autumn, ${h.rain(id, 10)} in October.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Cancun sits on the north-east tip of Mexico's Yucatán peninsula, facing the Caribbean, and the coast south of it, the Riviera Maya, runs through Playa del Carmen to Tulum. Our figures come from the Cancun station, averaged over 1991 to 2020. The temperature is tropical and steady: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, with nights between ${h.lo(id, 1)} and ${h.lo(id, 7)}. The sea never falls below ${h.seaMin(id)}. Rain decides the seasons. February to April is the driest stretch, with ${h.wet(id, 3)} of rain in March and ${h.wet(id, 4)} in April. The wet season builds from May and peaks in September and October, with ${h.rain(id, 10)} in October on about ${h.wet(id, 10)}. That is also the heart of the Atlantic hurricane season, which runs from 1 June to 30 November according to the US National Hurricane Center.`,
  body: (h) => `
<h2>Cancun weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Cancun station; Caribbean sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Cancun in winter and spring</h2>
<p>From December to April the coast averages ${h.hi(id, 12)} to ${h.hi(id, 4)} by day with a sea of ${h.sea(id, 2)}, and rain is light. That makes it one of the strongest long-haul winter options from Britain, alongside ${h.a('phuket', 'Phuket')} and ${h.a('dubai', 'Dubai')}. The difference with Dubai is the sea: ${h.sea(id, 1)} in Cancun in January against ${h.sea('dubai', 1)} in the Gulf.</p>
<h2>Cancun in summer and autumn</h2>
<p>July and August are hot, ${h.hi(id, 7)} and ${h.hi(id, 8)}, with rain on about ${h.wet(id, 7)} and ${h.wet(id, 8)}, usually in showers. September and October are the wettest and the riskiest for storms. For the summer holidays, compare with ${h.a('orlando', 'Orlando')}, which is wetter in July and August, or with the ${h.a('larnaca', 'eastern Mediterranean')}, which is dry.</p>`,
  faqs: (h) => [
    { q: 'What is the best month to visit Cancun?', a: `March and April combine the fewest wet days, ${h.wet(id, 3)} and ${h.wet(id, 4)}, with highs of ${h.hi(id, 3)} and ${h.hi(id, 4)} and a sea of ${h.sea(id, 4)}. December to February are cooler by a degree or two and slightly wetter.` },
    { q: 'Is the sea warm in Cancun in winter?', a: `Yes: the Caribbean off Cancun averages ${h.sea(id, 1)} in January and ${h.sea(id, 2)} in February, the coolest months of the year. It reaches ${h.sea(id, 9)} in September. That makes Cancun one of the few places on this site where a swim in January feels warm, against ${h.sea('tenerife', 1)} off Tenerife in the same month.` },
    { q: 'When is hurricane season in Cancun?', a: `The Atlantic hurricane season, which includes the Caribbean, runs from 1 June to 30 November, according to the National Hurricane Center. In Cancun the rainiest months are September and October, with ${h.rain(id, 9)} and ${h.rain(id, 10)} on average. Our averages show rain, not storms, so check the centre's seasonal outlook before booking.` },
  ],
  related: ['orlando', 'phuket', 'january', 'october'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'nhc', 'wmo_normals'],
});
