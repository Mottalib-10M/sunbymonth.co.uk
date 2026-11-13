import { definePage } from '../../lib/page-types';
const id = 'benidorm';
export default definePage({
  id, group: 'iberia', order: 16, slug: 'benidorm-weather-by-month', nav: 'Benidorm', card: 'Costa Blanca: dry, mild winters for long stays and a hot, rainless summer',
  title: 'Benidorm Weather by Month: Costa Blanca Highs, Sea, Rain',
  description: 'Benidorm weather by month from the nearest long-running station in Alicante, 1991 to 2020: daytime highs, sea temperature, rain and wet days, with a tool.',
  h1: 'Benidorm weather by month',
  intro: (h) => `Benidorm weather by month, from the Alicante station 40 km down the coast: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, and only ${h.wet(id, 7)} of rain in July.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Benidorm has no long-running station in the NOAA archive, so this page uses the closest one with a full record over 1991 to 2020: Alicante, on the same Costa Blanca coast about forty kilometres to the south-west. The two towns share the same sea and the same shelter from the mountains inland, and Alicante's figures are a sound guide to Benidorm's beaches. The Costa Blanca is one of the driest parts of Spain. The daytime high goes from ${h.hi(id, 1)} in January to ${h.hi(id, 8)} in August, and the whole year brings about ${h.rainYear(id)} of rain, much of it in a few autumn storms. Winters are mild and bright enough that long-stay visitors from Britain spend months there. The sea goes from ${h.sea(id, 2)} in February to ${h.sea(id, 8)} in August.`,
  body: (h) => `
<h2>Benidorm weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Alicante (city) station for air and rain, about 40 km from Benidorm; sea surface ${h.seaKm(id)} offshore of the station. Wet day: 1 mm of rain or more.`)}
<h2>Winter in Benidorm: mild, not warm</h2>
<p>A winter month in Benidorm is a good deal kinder than one at home, but it is not beach weather. January averages ${h.hi(id, 1)} by day and ${h.lo(id, 1)} at night, with ${h.wet(id, 1)} of rain; the sea, ${h.sea(id, 1)}, is for the brave. What makes the Costa Blanca popular in winter is the light and the dryness: few grey days, low rainfall and short spells of rain. For a winter stay that includes swimming in the sea, the ${h.a('tenerife', 'Canary Islands')} are warmer by about five degrees in both the air and the water.</p>
<p>Spring arrives early here. By ${h.month(4)} the daytime high is ${h.hi(id, 4)}, a couple of degrees ahead of ${h.a('majorca', 'Majorca')}.</p>
<h2>Best time to visit Benidorm</h2>
<p>Daytime high of 24 °C or more: ${h.good(id, 24)}. With a sea of 22 °C or more: ${h.good(id, 24, 22)}. For the warmth without the August heat, June and September are the usual choices. See also ${h.a('september', 'where is hot in September')}.</p>`,
  faqs: (h) => [
    { q: 'Why does this page use Alicante weather data for Benidorm?', a: 'The NOAA archive of daily station records has no station in Benidorm with a complete record for 1991 to 2020. The nearest one that has it is in Alicante, on the same coast about forty kilometres away. The coastal climate changes little over that distance, so the figures describe Benidorm well, but they are not measured in the town itself.' },
    { q: 'How hot is Benidorm in August?', a: `The average daytime high is ${h.hi(id, 8)} in August, with nights around ${h.lo(id, 8)}, which feels hot and humid on the coast. The sea is at its warmest, ${h.sea(id, 8)}. It rarely rains: ${h.wet(id, 8)} with a millimetre or more on average.` },
    { q: 'Is Benidorm warm in March?', a: `Mild rather than warm: about ${h.hi(id, 3)} by day and ${h.lo(id, 3)} at night in March, with ${h.wet(id, 3)} of rain. It suits walking and sitting outside at lunch, but the sea is at its coldest, ${h.sea(id, 3)}. The warmth of a beach holiday starts in late May.` },
  ],
  related: ['majorca', 'malaga', 'ibiza', 'september'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
