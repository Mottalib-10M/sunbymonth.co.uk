import { definePage } from '../../lib/page-types';
const id = 'tenerife';
export default definePage({
  id, group: 'iberia', order: 10, slug: 'tenerife-weather-by-month', nav: 'Tenerife', card: 'The south coast month by month: steady highs, a sea that never turns cold, rain mostly in winter',
  title: 'Tenerife Weather by Month: Sea, Rain and Highs, South Coast',
  description: 'Tenerife weather by month from the Tenerife Sur station, 1991 to 2020: daytime highs, night lows, sea temperature, rain and wet days, with a month picker.',
  h1: 'Tenerife weather by month',
  intro: (h) => `Tenerife weather by month barely swings: ${h.hi(id, 1)} by day in January, ${h.hi(id, 8)} in August, and a sea between ${h.seaMin(id)} and ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `The figures on this page come from the weather station at Tenerife South airport, a few kilometres from Los Cristianos and Playa de las Américas, averaged over ${h.minYears(id)} years or more between 1991 and 2020. The south of the island is the dry, sunny side, and the station shows it: ${h.rain(id, 7)} of rain in July and ${h.rain(id, 12)} in December, the wettest month, which still brings only ${h.wet(id, 12)} with a millimetre or more. Daytime highs move by just a few degrees through the year, from ${h.hiMin(id)} in the coolest month to ${h.hiMax(id)} at the end of summer. What changes more for a beach holiday is the Atlantic: the sea surface stays at or above twenty degrees only from ${h.seaFrom(id, 20)}, and it is at its warmest in September and October, not in July. Pick a month in the tool to see one month next to its neighbours, or set another place beside Tenerife.`,
  body: (h) => `
<h2>Tenerife weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Tenerife South airport for air and rain; sea temperature taken ${h.seaKm(id)}. Wet day: 1 mm of rain or more.`)}
<h2>North and south are two different holidays</h2>
<p>A single number for Tenerife hides the island's main feature. The north-east trade winds push moist air against the mountains, so the north coast around Puerto de la Cruz collects cloud and most of the island's rain, while the south, in the lee of Mount Teide, stays dry and bright. The station behind this page sits in the south, where most British visitors stay. If you are booking the north, expect more grey mornings and more showers than these figures suggest: this page follows the resort side of the island.</p>
<p>The highs also tell you what Tenerife is not: it is not a furnace in summer. August averages ${h.hi(id, 8)}, against ${h.hi('majorca', 8)} in Majorca, because the ocean around the Canaries is cooled by a current from the north. That same ocean keeps winter mild, and it is the reason the island fills up from November to March.</p>
<h2>Best time to visit Tenerife</h2>
<p>For a daytime high of 24 °C or more, the months are ${h.good(id, 24)}. Add a sea of at least 22 °C and the window narrows to ${h.good(id, 24, 22)}. For winter sun, January and February give ${h.hi(id, 1)} and ${h.hi(id, 2)}, which is among the warmest of the short-haul list in those months, but the sea is ${h.sea(id, 2)}, and a heated pool earns its place. Compare winter with ${h.a('lanzarote', 'Lanzarote')} or ${h.a('gran-canaria', 'Gran Canaria')}, or see ${h.a('january', 'where is hot in January')}.</p>`,
  faqs: (h) => [
    { q: 'Is Tenerife warm enough to swim in winter?', a: `The sea surface off the south coast averages ${h.sea(id, 1)} in January and ${h.sea(id, 3)} in March, its low point. Many British swimmers find that fine for a short dip on a sunny afternoon; most people find it bracing. It is the coolest sea of the year, so families who want long swims often prefer October, when the Atlantic still holds ${h.sea(id, 10)}.` },
    { q: 'Which is the rainiest month in Tenerife?', a: `At the southern airport station, ${h.wettest(id)} has the most rain, with ${h.rain(id, 12)} on average and ${h.wet(id, 12)} of a millimetre or more. That is still little: a wet week in the south is unusual. The north of the island gets several times more, because the trade wind clouds stop on the mountains.` },
    { q: 'How hot does Tenerife get in August?', a: `The average daytime high in August is ${h.hi(id, 8)} at Tenerife South, with nights around ${h.lo(id, 8)}. Hotter spells happen when a wind from the Sahara brings dust and heat for a few days, but they do not change the monthly average much. The sea peaks later, at ${h.sea(id, 9)} in September.` },
  ],
  related: ['lanzarote', 'gran-canaria', 'fuerteventura', 'january'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
