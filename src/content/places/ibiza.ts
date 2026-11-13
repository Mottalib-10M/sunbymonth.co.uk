import { definePage } from '../../lib/page-types';
const id = 'ibiza';
export default definePage({
  id, group: 'iberia', order: 15, slug: 'ibiza-weather-by-month', nav: 'Ibiza', card: 'The season in figures: from the May opening to the October closing parties',
  title: 'Ibiza Weather by Month: Season Highs, Sea and Rainy Days',
  description: 'Ibiza weather by month from the island station, 1991 to 2020: highs from 16 to 30 °C, sea temperature, rain and wet days, with the season in figures and a tool.',
  h1: 'Ibiza weather by month',
  intro: (h) => `Ibiza weather by month follows the season: ${h.hi(id, 5)} by day in May, ${h.hi(id, 8)} in August, ${h.hi(id, 10)} in October, with the sea warmest in August at ${h.sea(id, 8)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Ibiza's season is famous for its opening and closing parties, roughly from late May to early October, and the weather explains the calendar. Using the island station near Ibiza town, averaged over 1991 to 2020, the daytime high is ${h.hi(id, 5)} in May, climbs to ${h.hi(id, 7)} in July and August, and is still ${h.hi(id, 10)} in October. Summer nights are warm, around ${h.lo(id, 8)} in August, which suits a late evening outside. The sea is the slow part: ${h.sea(id, 5)} in May, which feels cold, ${h.sea(id, 8)} in August, and ${h.sea(id, 10)} in October. Rain almost disappears in July, then returns in September, when the island gets ${h.rain(id, 9)} on average, the first of its wet months. Out of season, Ibiza is quiet and mild but not warm, with ${h.hi(id, 1)} in January.`,
  body: (h) => `
<h2>Ibiza weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Ibiza station for air and rain; sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Opening, peak and closing: what each part of the season gives</h2>
<p>The opening weeks in late May and June are the best value for warmth without crowds: ${h.hi(id, 6)} by day in June, and a sea of ${h.sea(id, 6)}. The peak, July and August, adds three or four degrees and the warmest water, ${h.sea(id, 8)} in August, but also the highest prices and the longest days in the sun. September keeps the sea almost as warm, ${h.sea(id, 9)}, with ${h.wet(id, 9)} of rain; it is many regulars' favourite month. October is a gamble on the weather, with the sea still above twenty degrees but ${h.wet(id, 10)} of rain.</p>
<p>Next door, ${h.a('majorca', 'Majorca')} follows almost the same curve, a degree or less apart in most months.</p>
<h2>Best time to visit Ibiza</h2>
<p>Daytime high of 24 °C or more: ${h.good(id, 24)}. With a sea of 22 °C or more too: ${h.good(id, 24, 22)}. With no more than 3 wet days as well: ${h.good(id, 24, 22, 3)}. See also ${h.a('june', 'where is hot in June')}.</p>`,
  faqs: (h) => [
    { q: 'Is Ibiza hot in June?', a: `Yes, warm enough for the beach every day on average: the daytime high in June is ${h.hi(id, 6)}, nights are around ${h.lo(id, 6)} and rain is rare, ${h.wet(id, 6)} with a millimetre or more. The sea, ${h.sea(id, 6)}, is noticeably cooler than in August, but most swimmers find it pleasant.` },
    { q: 'Is Ibiza still warm in October?', a: `Usually. October in Ibiza averages ${h.hi(id, 10)} by day with a sea of ${h.sea(id, 10)}, warm enough for swimming. It is also one of the wetter months, with ${h.rain(id, 10)} over ${h.wet(id, 10)}, so a day or two may be lost to rain, and many clubs and hotels close during the month.` },
    { q: 'Is Ibiza or Majorca warmer?', a: `They are almost the same. In August both average about ${h.hi(id, 8)} by day, with seas a fraction of a degree apart. Ibiza is a little further south and a touch drier in summer, but the difference is smaller than the gap between one summer and the next. Choose on resorts and atmosphere rather than on climate.` },
  ],
  related: ['majorca', 'benidorm', 'malaga', 'june'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
