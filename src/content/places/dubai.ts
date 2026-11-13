import { definePage } from '../../lib/page-types';
const id = 'dubai';
export default definePage({
  id, group: 'long', order: 40, slug: 'dubai-weather-by-month', nav: 'Dubai', card: 'Perfect from November to March, then a summer of 40 °C and a sea like a bath',
  title: 'Dubai Weather by Month: Highs, Nights and Gulf Sea Heat',
  description: 'Dubai weather by month, 1991 to 2020: daytime highs, night lows, Gulf sea temperature, rain and wet days at Dubai International, with a tool to test months.',
  h1: 'Dubai weather by month',
  intro: (h) => `Dubai weather by month has two seasons: ${h.hi(id, 1)} by day in January, a pleasant winter, and ${h.hi(id, 8)} in August, with nights of ${h.lo(id, 8)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Dubai is a desert city on the Persian Gulf, and its weather is ruled by the sun: rain is rare, and the only real question is how hot. Our figures come from Dubai International airport, averaged over 1991 to 2020. The comfortable season runs from November to March, when the day reaches ${h.hi(id, 11)} in November, ${h.hi(id, 12)} in December and ${h.hi(id, 1)} in January, and the night drops to ${h.lo(id, 1)}. Spring heats quickly: ${h.hi(id, 4)} in April, ${h.hi(id, 5)} in May. From June to August the afternoon passes 40 °C, ${h.hi(id, 7)} in July and ${h.hi(id, 8)} in August, and in those two months even the night stays above 30 °C. The Gulf is shallow and warms like a bath, ${h.sea(id, 8)} in August, too warm to cool off. What little rain falls comes in winter, ${h.rain(id, 1)} in January on about ${h.wet(id, 1)}, sometimes in short, intense storms.`,
  body: (h) => `
<h2>Dubai weather by month in figures</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Dubai International airport; Gulf sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Dubai in December and January</h2>
<p>The two months most searched from Britain are also two of the best. December averages ${h.hi(id, 12)} by day and ${h.lo(id, 12)} at night; January ${h.hi(id, 1)} and ${h.lo(id, 1)}. The sea is ${h.sea(id, 12)} and ${h.sea(id, 1)}, warm enough for a swim every day. Evenings can feel cool on the water or in the desert, so a light jacket is useful. December and January are also the wettest months, but that means about ${h.wet(id, 12)} with rain.</p>
<h2>Best time to visit Dubai</h2>
<p>A daytime high between 24 °C and 32 °C, the band most British visitors find comfortable for being outside: ${h.good(id, 24)} passes the lower bound, and only November to March stays under 32 °C. October and April are hot but manageable, ${h.hi(id, 10)} and ${h.hi(id, 4)}. For a winter break with a cooler sea and similar sunshine, compare with ${h.a('hurghada', 'Hurghada')} on the Red Sea, or with the ${h.a('tenerife', 'Canaries')}, closer and cooler.</p>`,
  faqs: (h) => [
    { q: 'Is Dubai hot in December?', a: `Warm and pleasant: Dubai International averages ${h.hi(id, 12)} by day and ${h.lo(id, 12)} at night in December, with a sea of ${h.sea(id, 12)}. It is one of the best months to visit, along with January to March. Evenings can feel cool.` },
    { q: 'How hot is Dubai in summer?', a: `Very hot: the average high is ${h.hi(id, 7)} in July and ${h.hi(id, 8)} in August, and the average low ${h.lo(id, 8)} in August. Humidity near the coast makes it feel hotter. Outdoor sightseeing is limited to early morning and evening.` },
    { q: 'Does it rain in Dubai?', a: `Rarely. The wettest month, January, averages ${h.rain(id, 1)} on about ${h.wet(id, 1)}, and from May to October rain is close to zero. When storms do come, they tend to be short and heavy. Most visitors never see rain at all.` },
  ],
  related: ['hurghada', 'december', 'january', 'compare'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
