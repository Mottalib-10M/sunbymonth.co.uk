import { definePage } from '../../lib/page-types';
const id = 'larnaca';
export default definePage({
  id, group: 'med', order: 33, slug: 'cyprus-weather-by-month', nav: 'Cyprus (Larnaca)', card: 'The hottest and driest summer in the Mediterranean, and an early spring',
  title: 'Cyprus Weather by Month: Larnaca Highs, Sea and Rain',
  description: 'Cyprus weather by month at Larnaca airport, 1991 to 2020: daytime highs, night lows, sea temperature, rain and wet days, with a tool to check a month.',
  h1: 'Cyprus weather by month',
  intro: (h) => `Cyprus weather by month at Larnaca: ${h.hi(id, 3)} by day in March, ${h.hi(id, 8)} in August, and almost no rain from May to October, with ${h.wet(id, 7)} in July.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Cyprus is the easternmost of the Mediterranean holiday islands, closer to Lebanon than to Greece, and its coast has the driest summer of all the Mediterranean places on this site. Our figures come from Larnaca airport, on the south-east coast between Larnaca and Ayia Napa, averaged over 1991 to 2020. Spring arrives early: ${h.hi(id, 3)} in March, ${h.hi(id, 4)} in April and ${h.hi(id, 5)} in May. July and August reach ${h.hi(id, 7)} and ${h.hi(id, 8)}, and rain is close to nil from June to September. The sea follows, ${h.sea(id, 6)} in June, ${h.sea(id, 8)} in August and ${h.sea(id, 10)} in October. Winter brings most of the year's rain, ${h.rain(id, 12)} in December and ${h.rain(id, 1)} in January, but the days stay mild at ${h.hi(id, 1)}. This page covers the south-east coast, where most holiday resorts are.`,
  body: (h) => `
<h2>Cyprus weather by month on the Larnaca coast</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Larnaca airport station; sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Cyprus in March and April</h2>
<p>Spring searches for Cyprus are common, and the figures explain why: ${h.hi(id, 3)} in March is warmer than ${h.a('crete', 'Crete')} at ${h.hi('crete', 3)} and ${h.a('majorca', 'Majorca')} at ${h.hi('majorca', 3)}. Rain falls on about ${h.wet(id, 3)} in March and ${h.wet(id, 4)} in April. The sea is still cool, ${h.sea(id, 3)} and ${h.sea(id, 4)}, so spring is for sightseeing and walking rather than swimming. Nights are fresh, ${h.lo(id, 3)} in March.</p>
<h2>Best time to visit Cyprus</h2>
<p>A daytime high of 24 °C or more with a sea of at least 22 °C: ${h.good(id, 24, 22)}. October is the late-season favourite, ${h.hi(id, 10)} with a sea of ${h.sea(id, 10)} and ${h.wet(id, 10)} of rain. In midsummer the heat is strong, so a pool and a shaded lunch become part of the day. For a comparison with Turkey across the water, see ${h.a('antalya', 'Antalya')}.</p>`,
  faqs: (h) => [
    { q: 'Is Cyprus warm in March?', a: `Mild to warm: the average high at Larnaca in March is ${h.hi(id, 3)}, the low ${h.lo(id, 3)}, with rain on about ${h.wet(id, 3)}. It is one of the warmest places in Europe in March, but the sea, at ${h.sea(id, 3)}, is too cool for most swimmers.` },
    { q: 'How hot is Cyprus in August?', a: `The August average high at Larnaca is ${h.hi(id, 8)} and the low ${h.lo(id, 8)}, with practically no rain. The sea is at its warmest, ${h.sea(id, 8)}. Most days are sunny and dry, and the evenings stay warm, so shade and water matter in the middle of the day.` },
    { q: 'When is the rainy season in Cyprus?', a: `From November to March. December and January are the wettest months, with ${h.rain(id, 12)} and ${h.rain(id, 1)} at Larnaca, on about ${h.wet(id, 1)} in January. From June to September rain is almost unknown. Even in winter, most days are dry and mild.` },
  ],
  related: ['antalya', 'crete', 'march', 'october'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
