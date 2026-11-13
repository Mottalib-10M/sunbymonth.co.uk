import { definePage } from '../../lib/page-types';
const id = 'malaga';
export default definePage({
  id, group: 'iberia', order: 17, slug: 'malaga-weather-by-month', nav: 'Malaga and the Costa del Sol', card: 'The warmest winter on the Spanish mainland, a hot dry summer and a cool sea',
  title: 'Malaga Weather by Month: Costa del Sol Highs, Sea and Rain',
  description: 'Malaga weather by month from the airport station, 1991 to 2020: highs, lows, Alboran Sea temperature, rain and wet days on the Costa del Sol, with a month tool.',
  h1: 'Malaga weather by month',
  intro: (h) => `Malaga weather by month runs from ${h.hi(id, 1)} by day in January to ${h.hi(id, 8)} in August, with ${h.rain(id, 7)} of rain in July and a sea that never passes ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Malaga sits on the Costa del Sol, sheltered to the north by the mountains of the Serranía, and that shelter gives it the mildest winters of any large city on the Spanish mainland. The figures here come from Malaga airport, a few kilometres inland from the beach, averaged over 1991 to 2020. In January the afternoon reaches ${h.hi(id, 1)} and the night falls to ${h.lo(id, 1)}, cool enough for a jacket after dark. Spring warms steadily, ${h.hi(id, 4)} in April and ${h.hi(id, 5)} in May. July and August are hot and almost rainless, at ${h.hi(id, 7)} and ${h.hi(id, 8)}. The surprise for many visitors is the water: the Alboran Sea is fed by Atlantic water flowing in through the Strait of Gibraltar, so it peaks at only ${h.sea(id, 8)} in August, two or three degrees below the Balearics. The wet season is late autumn and winter, with ${h.rain(id, 11)} in November and ${h.rain(id, 12)} in December.`,
  body: (h) => `
<h2>Malaga weather by month: the full year</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Malaga airport station; sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>A winter break on the Costa del Sol</h2>
<p>From December to February the coast averages ${h.hi(id, 12)}, ${h.hi(id, 1)} and ${h.hi(id, 2)} by day. That is not beach weather, but it is the warmest you will find on mainland Europe at that time of year, and rain comes on about ${h.wet(id, 1)} in January. Compared with ${h.a('tenerife', 'Tenerife')}, which averages ${h.hi('tenerife', 1)} in January, Malaga is about five degrees cooler by day and its nights are noticeably colder, but the flight is shorter and the towns of Andalusia are within reach.</p>
<h2>Summer heat and the sea that stays cool</h2>
<p>A daytime high of 25 °C or more lasts from ${h.good(id, 25)}. The sea reaches 22 °C only in ${h.seaFrom(id, 22)}, so the best swimming weeks are the second half of summer. The Costa del Sol rarely sees rain from June to August: ${h.wet(id, 6)} in June, ${h.wet(id, 7)} in July. For a hotter sea on a Spanish holiday, the ${h.a('majorca', 'Balearics')} warm up more; for a quieter coast with the same climate, ${h.a('benidorm', 'Benidorm')} on the Costa Blanca is close behind.</p>`,
  faqs: (h) => [
    { q: 'Is Malaga warm enough for the beach in October?', a: `Often, yes. The October average high at Malaga airport is ${h.hi(id, 10)}, and the sea is still ${h.sea(id, 10)}, about the same as in June. Rain picks up, with ${h.rain(id, 10)} on about ${h.wet(id, 10)}, so expect one or two grey days in a week.` },
    { q: 'What is the coldest month in Malaga?', a: `January, with an average high of ${h.hi(id, 1)} and an average low of ${h.lo(id, 1)}. February is barely warmer at ${h.hi(id, 2)}. Frost is rare on the coast, but evenings feel chilly and many buildings are not heated as British homes are.` },
    { q: 'Why is the sea in Malaga colder than in Majorca?', a: `The Alboran Sea receives a steady flow of cooler Atlantic water through the Strait of Gibraltar. In August it averages ${h.sea(id, 8)} off Malaga, against ${h.sea('majorca', 8)} off Majorca. The difference is smaller in winter, when both seas are around ${h.sea(id, 2)} to ${h.sea('majorca', 2)}.` },
  ],
  related: ['benidorm', 'lisbon', 'marrakech', 'october'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
