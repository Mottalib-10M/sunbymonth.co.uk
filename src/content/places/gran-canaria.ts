import { definePage } from '../../lib/page-types';
const id = 'gran-canaria';
export default definePage({
  id, group: 'iberia', order: 12, slug: 'gran-canaria-weather-by-month', nav: 'Gran Canaria', card: 'The round island: mild all year at the east coast airport, sea from 19 to 23 °C',
  title: 'Gran Canaria Weather by Month: Sun, Sea and Rain Averages',
  description: 'Gran Canaria weather by month from the Gando airport station, 1991 to 2020: daytime highs, night lows, sea temperature and rain, with a month-by-month tool.',
  h1: 'Gran Canaria weather by month',
  intro: (h) => `Gran Canaria weather by month stays within a few degrees: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, with a sea from ${h.seaMin(id)} to ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Gran Canaria is often called a continent in miniature, and the weather earns the phrase: the centre of the island rises to almost two thousand metres, the north-east is cloudier and greener, and the south around Maspalomas and Playa del Inglés is the dry, sunny strip where most hotels are. The station we use is at Gando airport on the east coast, between the capital and the southern resorts, and its averages over 1991 to 2020 are a fair guide to the coast. Highs run from ${h.hi(id, 1)} in January to ${h.hi(id, 8)} in August. Rain is light and mostly falls between October and February, when ${h.month(12)} brings ${h.wet(id, 12)}. For night lows, the station has too few complete Novembers and Decembers to publish a figure, so those two months are left blank rather than guessed.`,
  body: (h) => `
<h2>Gran Canaria weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Gran Canaria airport (Gando) for air and rain; sea temperature taken ${h.seaKm(id)}. Wet day: 1 mm of rain or more. Blank: fewer than 10 complete years.`)}
<h2>Las Palmas or Maspalomas: which side to choose</h2>
<p>The north-east trade wind brings low cloud to the north of the island, which British visitors sometimes meet as a grey morning in Las Palmas while the south is clear. Because our station sits on the east coast, its figures fall between the two. The southern resorts tend to be a little sunnier and a little warmer in the afternoon than these numbers; the capital, a little less. The mountain villages of the interior are a different climate altogether and can be cold at night in winter.</p>
<p>For a winter week, Gran Canaria and ${h.a('tenerife', 'Tenerife')} are almost interchangeable on paper: ${h.gap(id, 'tenerife', 1)} apart in January. The choice comes down to the resort, the flight and the beach rather than the climate.</p>
<h2>Best time to visit Gran Canaria</h2>
<p>Daytime high of 24 °C or more: ${h.good(id, 24)}. Add a sea of 22 °C or more: ${h.good(id, 24, 22)}. The sea is at its lowest in ${h.month(3)}, ${h.sea(id, 3)}, and peaks in September and October. For the other islands, see ${h.a('lanzarote', 'Lanzarote')} and ${h.a('fuerteventura', 'Fuerteventura')}, or ${h.a('february', 'where is hot in February')}.</p>`,
  faqs: (h) => [
    { q: 'What is the weather like in Gran Canaria in December?', a: `Mild and mostly dry. The average daytime high at Gando airport in December is ${h.hi(id, 12)}, with ${h.rain(id, 12)} of rain over ${h.wet(id, 12)} of a millimetre or more. The sea is ${h.sea(id, 12)}. It is one of the warmest short-haul choices for Christmas, though evenings call for a jumper.` },
    { q: 'Is Gran Canaria hot in summer?', a: `Warm rather than hot: ${h.hi(id, 7)} in July and ${h.hi(id, 8)} in August at the airport station, with nights around ${h.lo(id, 8)}. The cool Atlantic and the trade wind keep the coast well below the summer heat of the Mediterranean, where Antalya averages ${h.hi('antalya', 8)} in August.` },
    { q: 'Which part of Gran Canaria has the best weather?', a: 'The south, around Maspalomas, Playa del Inglés and Puerto Rico, is the driest and sunniest part of the island, sheltered from the trade wind clouds by the mountains. The north, including Las Palmas, is cloudier and gets more rain, especially in winter. Our station, on the east coast, sits between the two.' },
  ],
  related: ['tenerife', 'lanzarote', 'fuerteventura', 'february'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
