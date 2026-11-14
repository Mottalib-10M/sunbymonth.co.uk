import { definePage } from '../../lib/page-types';
const m = 10;
export default definePage({
  id: 'october', group: 'months', order: 10, slug: 'where-is-hot-in-october', nav: 'Where is hot in October', card: 'Half-term heat: Cyprus, the Canaries and Turkey at 27 to 28 °C, warm seas',
  title: 'Where Is Hot in October: Half-Term Heat, Seas and Showers',
  description: 'Where is hot in October half-term: daytime highs, night lows, sea temperature and wet days for 62 holiday places, 1991 to 2020 averages, with a finder.',
  h1: 'Where is hot in October',
  intro: (h) => `Where is hot in October for half-term, within 3,500 km: ${h.hotList(m, 3500, 4)}. Most Mediterranean seas are still warmer than in June.`,
  tool: { mode: 'month', month: m },
  resume: (h) => `October half-term is the last chance of the year for a warm beach week without a long flight, and the shortlist is clear. Cyprus leads the Mediterranean, ${h.hi('larnaca', m)} by day at Larnaca with ${h.wet('larnaca', m)} of rain and a sea of ${h.sea('larnaca', m)}. The Canary Islands are at their best, ${h.hi('tenerife', m)} in Tenerife and ${h.hi('lanzarote', m)} in Lanzarote, with the Atlantic close to its warmest, ${h.sea('tenerife', m)}. Antalya is as warm, ${h.hi('antalya', m)}, but it is the month the Turkish coast turns wet, ${h.rain('antalya', m)}. In the central and western Mediterranean, the days are still pleasant, ${h.hi('majorca', m)} in Majorca and ${h.hi('malta', m)} in Malta, but showers are common, ${h.wet('majorca', m)} in Palma and ${h.wet('malta', m)} in Malta. Marrakech is warm and dry, ${h.hi('marrakech', m)}. Long haul, the Red Sea is ideal, ${h.hi('hurghada', m)} with a sea of ${h.sea('hurghada', m)}, and Dubai cools to ${h.hi('dubai', m)}.`,
  body: (h) => `
<h2>Where is hot in October: the full ranking</h2>
${h.table(['Place', 'Country', 'Daytime high', 'Night low', 'Sea', 'Wet days', 'From London'], h.monthTable(m, h.place), 'October averages 1991 to 2020, hottest first. Distance is a straight line from Heathrow.')}
<h2>Canaries or Mediterranean at half-term</h2>
<p>The two choices have the same daytime heat, ${h.hi('lanzarote', m)} in ${h.a('lanzarote', 'Lanzarote')} and ${h.hi('larnaca', m)} in ${h.a('larnaca', 'Cyprus')}. The difference is in the details: the Canaries have warmer nights, ${h.lo('lanzarote', m)} against ${h.lo('larnaca', m)}; Cyprus has the warmer sea. ${h.a('crete', 'Crete')}, ${h.a('rhodes', 'Rhodes')} and ${h.a('malta', 'Malta')} are a couple of degrees cooler, with seas around ${h.sea('crete', m)}. ${h.a('corfu', 'Corfu')} is wetter, with ${h.wet('corfu', m)}.</p>
<h2>Further away in October</h2>
<p>${h.a('dubai', 'Dubai')} becomes bearable again, though still hot. The Caribbean is late in its hurricane season and wet, with ${h.wet('cancun', m)} in ${h.a('cancun', 'Cancun')}. ${h.a('cape-verde', 'Cape Verde')} has its warmest sea, ${h.sea('cape-verde', m)}. ${h.a('phuket', 'Phuket')} is still in the monsoon. Previous month: ${h.a('september', 'where is hot in September')}; next: ${h.a('november', 'November')}.</p>`,
  faqs: (h) => [
    { q: 'Where is hottest for October half-term?', a: `Within a short-haul flight, Cyprus (${h.hi('larnaca', m)} in Larnaca), the Canaries (${h.hi('tenerife', m)} in Tenerife) and Antalya (${h.hi('antalya', m)}). Further, the Red Sea at ${h.hi('hurghada', m)} and Dubai at ${h.hi('dubai', m)}. Of the three short-haul choices, Cyprus has the fewest wet days, ${h.wet('larnaca', m)}.` },
    { q: 'Is the sea warm in October in the Mediterranean?', a: `Yes, often warmer than in June: ${h.sea('larnaca', m)} off Cyprus, ${h.sea('antalya', m)} off Antalya, ${h.sea('crete', m)} off Crete and ${h.sea('majorca', m)} off Majorca. The sea lags behind the air by about a month, so the water keeps its summer heat while the afternoons become gentler.` },
    { q: 'Is Greece warm in October?', a: `Warm by day, around ${h.hi('crete', m)} in Crete and ${h.hi('rhodes', m)} in Rhodes, with a sea of ${h.sea('rhodes', m)} off Rhodes. Rain picks up, especially in the west: Corfu has ${h.rain('corfu', m)} in October. Crete has ${h.wet('crete', m)} of rain in October.` },
  ],
  related: ['september', 'november', 'larnaca', 'lanzarote'],
  sources: ['ghcn', 'oisst', 'nhc', 'wmo_normals'],
});
