import { definePage } from '../../lib/page-types';
const m = 9;
export default definePage({
  id: 'september', group: 'months', order: 9, slug: 'where-is-hot-in-september', nav: 'Where is hot in September', card: 'Late summer: seas still at 25 °C or more, but the first autumn storms',
  title: 'Where Is Hot in September: Late Summer Heat and Warm Seas',
  description: 'Where is hot in September: daytime highs, night lows, sea temperature and wet days for 62 holiday places, 1991 to 2020 averages, with a finder to sort.',
  h1: 'Where is hot in September',
  intro: (h) => `Where is hot in September after the school holidays: ${h.hotList(m, 3500, 4)} short haul, with the sea still at ${h.sea('larnaca', m)} off Cyprus.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `September is the favourite month of many experienced travellers, and the figures show why. The air cools by two or three degrees from August, ${h.hi('majorca', m)} in Majorca and ${h.hi('crete', m)} in Crete, while the sea keeps almost all of its summer heat: ${h.sea('majorca', m)} off Majorca, ${h.sea('crete', m)} off Crete, ${h.sea('antalya', m)} off Antalya. The catch is in the west and north of the Mediterranean, where the first autumn storms arrive: Majorca goes from ${h.wet('majorca', 8)} of rain in August to ${h.wet('majorca', m)} in September, Corfu to ${h.wet('corfu', m)}. The east stays dry, ${h.wet('larnaca', m)} in Larnaca. The Canaries are at their warmest in the water, ${h.sea('tenerife', m)} off Tenerife. Long haul, September is the peak of the Atlantic hurricane season, according to the National Hurricane Center, and the wettest month in Phuket. Dubai is still at ${h.hi('dubai', m)}.`,
  body: (h) => `
<h2>Where is hot in September: all places</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'September averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>East or west in September</h2>
<p>For a dry week, the east wins: ${h.a('larnaca', 'Cyprus')} at ${h.hi('larnaca', m)} with ${h.wet('larnaca', m)} of rain, ${h.a('antalya', 'Antalya')} at ${h.hi('antalya', m)} with ${h.wet('antalya', m)}. ${h.a('crete', 'Crete')} sits in between, ${h.wet('crete', m)}. In the west, ${h.a('majorca', 'Majorca')}, ${h.a('ibiza', 'Ibiza')} and ${h.a('malta', 'Malta')} have four to five wet days, often in thunderstorms: ${h.wet('majorca', m)} in Palma. ${h.a('benidorm', 'Benidorm')} is drier at ${h.wet('benidorm', m)}.</p>
<h2>The Canaries and long haul in September</h2>
<p>${h.a('lanzarote', 'Lanzarote')} averages ${h.hi('lanzarote', m)} with ${h.wet('lanzarote', m)} of rain and a sea of ${h.sea('lanzarote', m)}. ${h.a('hurghada', 'Hurghada')} is still very hot, ${h.hi('hurghada', m)}. ${h.a('cape-verde', 'Cape Verde')} reaches its warmest, ${h.hi('cape-verde', m)}. Previous month: ${h.a('august', 'where is hot in August')}; next: ${h.a('october', 'October')}.</p>`,
  faqs: (h) => [
    { q: 'Is the Mediterranean still warm in September?', a: `Yes, it is close to its peak: ${h.sea('majorca', m)} off Majorca, ${h.sea('crete', m)} off Crete and ${h.sea('larnaca', m)} off Cyprus on average. The air is a little cooler than in August, which many people find more comfortable. Off Cyprus the sea is even warmer in September than in July, ${h.sea('larnaca', 7)}.` },
    { q: 'Does it rain in Majorca in September?', a: `More than in summer: Palma averages ${h.rain('majorca', m)} on about ${h.wet('majorca', m)} in September, against ${h.rain('majorca', 7)} in July. The rain often comes in short, heavy storms, with sunny days between. Ibiza is similar, with ${h.wet('ibiza', m)} of rain in September.` },
    { q: 'Where is hot and dry in September?', a: `Cyprus and the Canaries: Larnaca has ${h.wet('larnaca', m)} of rain at ${h.hi('larnaca', m)}, Lanzarote ${h.wet('lanzarote', m)} at ${h.hi('lanzarote', m)}. Hurghada on the Red Sea is dry too, but hotter. Both have a warm sea, ${h.sea('larnaca', m)} off Cyprus and ${h.sea('lanzarote', m)} off Lanzarote.` },
  ],
  related: ['august', 'october', 'larnaca', 'majorca'],
  sources: ['ghcn', 'oisst', 'nhc', 'wmo_normals'],
});
