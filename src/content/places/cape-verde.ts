import { definePage } from '../../lib/page-types';
const id = 'cape-verde';
export default definePage({
  id, group: 'long', order: 43, slug: 'cape-verde-weather-by-month', nav: 'Cape Verde', card: 'Warm all year off West Africa, with its warmest sea in autumn',
  title: 'Cape Verde Weather by Month: Sal Highs, Nights and Sea',
  description: 'Cape Verde weather by month on Sal, 1991 to 2020: daytime highs, night lows and Atlantic sea temperature from NOAA records, with a tool to test a month.',
  h1: 'Cape Verde weather by month',
  intro: (h) => `Cape Verde weather by month is warm and steady: ${h.hi(id, 1)} by day in January, ${h.hi(id, 9)} in September, with a sea from ${h.seaMin(id)} to ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Cape Verde is an archipelago in the Atlantic off the coast of Senegal, and its two main holiday islands for British visitors are Sal and Boa Vista. Our figures come from the station at Amilcar Cabral airport on Sal, averaged over 1991 to 2020. The range through the year is small. The coolest month, ${h.coolest(id)}, averages ${h.hi(id, 1)} by day; the warmest, ${h.warmest(id)}, ${h.hi(id, 9)}. Nights run from ${h.lo(id, 2)} in February to ${h.lo(id, 9)} in September. The sea is cooler than the latitude suggests in late winter and spring, ${h.sea(id, 3)} in March, because of the cool current along the African coast, and warmest in autumn, ${h.sea(id, 10)} in October. The trade wind blows strongly in winter, which makes Sal a known kite-surfing spot. The NOAA daily record on Sal does not report rain on enough days for a monthly total, so this page has none.`,
  body: (h) => `
<h2>Cape Verde weather by month on Sal</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Sal, Amilcar Cabral airport station; sea temperature taken ${h.seaKm(id)}. Rain: not recorded often enough in the public daily data, so no figure is shown.`)}
<h2>Cape Verde in winter</h2>
<p>December averages ${h.hi(id, 12)} by day and ${h.lo(id, 12)} at night, with a sea of ${h.sea(id, 12)}. That is warmer than ${h.a('tenerife', 'Tenerife')} on all three counts, at ${h.hi('tenerife', 12)}, ${h.lo('tenerife', 12)} and ${h.sea('tenerife', 12)}. The trip is longer, ${h.dist(id)} in a straight line against ${h.dist('tenerife')}. From February to April the sea is at its coolest, about ${h.seaMin(id)}, and with the trade wind the beach can feel fresh.</p>
<h2>Best time to visit Cape Verde</h2>
<p>A daytime high of 25 °C or more is the rule ${h.good(id, 25)}. For the warmest water, choose ${h.seaFrom(id, 25)}, when the sea passes 25 °C. Late summer and early autumn are the islands' rainy season, which our data cannot measure. For a comparison with the Canaries or the Red Sea in the same month, use the ${h.a('compare', 'comparison tool')}.</p>`,
  faqs: (h) => [
    { q: 'Is Cape Verde hot in December?', a: `Warm: on Sal the average December high is ${h.hi(id, 12)} and the low ${h.lo(id, 12)}, with a sea of ${h.sea(id, 12)}. It is one of the warmest short-to-medium-haul choices for Christmas. Rain is not measured on Sal in the public record, so the table shows no rain figure for December.` },
    { q: 'When is the sea warmest in Cape Verde?', a: `In ${h.seaFrom(id, 26)}, when it averages 26 °C or more off Sal, peaking at ${h.sea(id, 10)} in October. It is coolest in March, at ${h.sea(id, 3)}. In winter the trade wind and the cooler water make the beach feel fresher than the air temperature suggests.` },
    { q: 'Why is there no rain figure for Cape Verde?', a: `The Sal station in the public daily archive of NOAA, the US government agency for weather and oceans, reports rain on too few days in 1991 to 2020 to compute a reliable monthly total. The table says not recorded rather than guess. Temperatures and the sea are complete, because the station reports them on most days.` },
  ],
  related: ['tenerife', 'madeira', 'december', 'november'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
