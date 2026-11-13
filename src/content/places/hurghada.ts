import { definePage } from '../../lib/page-types';
const id = 'hurghada';
export default definePage({
  id, group: 'long', order: 41, slug: 'egypt-weather-by-month', nav: 'Egypt (Hurghada)', card: 'Winter sun with a warm sea, dry all year; summer heat is fierce',
  title: 'Egypt Weather by Month: Hurghada Highs and Red Sea Water',
  description: 'Egypt weather by month on the Red Sea at Hurghada, 1991 to 2020: daytime highs, night lows, sea temperature and rain, with a tool to check any one month.',
  h1: 'Egypt weather by month',
  intro: (h) => `Egypt weather by month on the Red Sea is dry all year: ${h.hi(id, 12)} by day in December, ${h.hi(id, 8)} in August, and a sea that never drops below ${h.seaMin(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `For British holidaymakers, Egypt usually means the Red Sea coast, at Hurghada, El Gouna or Sharm el-Sheikh, and our figures come from the Hurghada station, averaged over 1991 to 2020. This is desert: rain is so rare that no month averages even one wet day. The appeal is in winter, when the coast is the closest place to Britain with both a warm day and a warm sea. December averages ${h.hi(id, 12)}, January ${h.hi(id, 1)} and February ${h.hi(id, 2)}, while the water stays between ${h.seaMin(id)} and ${h.sea(id, 12)}. Desert nights are cool in winter, ${h.lo(id, 1)} in January, so evenings need a jumper. Summer is hard heat: ${h.hi(id, 7)} in July and ${h.hi(id, 8)} in August, with a sea of ${h.sea(id, 8)}. Sharm el-Sheikh, further south in Sinai, has a similar pattern; the station we use is in Hurghada.`,
  body: (h) => `
<h2>Egypt weather by month at Hurghada</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Hurghada station; Red Sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Egypt in December and January</h2>
<p>These two months are the most searched for a reason. At ${h.hi(id, 12)} and ${h.hi(id, 1)} by day, the Red Sea coast is about as warm by day as ${h.a('tenerife', 'Tenerife')}, at ${h.hi('tenerife', 1)} in January, but its sea is clearly warmer: ${h.sea(id, 1)} against ${h.sea('tenerife', 1)}. The flight is longer. The wind off the sea is often fresh, and the nights, ${h.lo(id, 12)} and ${h.lo(id, 1)}, are cooler than in the Canaries, so the pool can feel cold early in the morning.</p>
<h2>Best time to visit the Red Sea</h2>
<p>A daytime high of 24 °C or more and a sea of 22 °C or more: ${h.good(id, 24, 22)}. Divers and snorkellers favour spring and autumn, when the water is warm and the air is not yet at its peak: ${h.hi(id, 4)} in April with a sea of ${h.sea(id, 4)}, ${h.hi(id, 10)} in October with ${h.sea(id, 10)}. For a winter break further east, compare with ${h.a('dubai', 'Dubai')}.</p>`,
  faqs: (h) => [
    { q: 'Is Egypt hot in January?', a: `Warm by day, cool at night: Hurghada averages ${h.hi(id, 1)} in January and ${h.lo(id, 1)} after dark. The Red Sea is ${h.sea(id, 1)}. Within 4,000 km of London, few places match that pairing of warm air and warm water in midwinter.` },
    { q: 'How warm is the Red Sea in winter?', a: `Off Hurghada the sea averages ${h.sea(id, 12)} in December, ${h.sea(id, 1)} in January and ${h.sea(id, 2)} in February, the coolest month. That is warmer than the sea around the Canaries at the same time. By April it is back to ${h.sea(id, 4)}, and it peaks at ${h.sea(id, 8)} in August.` },
    { q: 'Does it ever rain in Hurghada?', a: `Very seldom. No month averages a full wet day over 1991 to 2020; the highest totals are in October and November, around ${h.rain(id, 11)}, usually from a single storm. A beach week in any month is very likely to be dry, so heat, not rain, is the thing to plan around.` },
  ],
  related: ['dubai', 'tenerife', 'december', 'january'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
