import { definePage } from '../../lib/page-types';
const id = 'phuket';
export default definePage({
  id, group: 'long', order: 44, slug: 'phuket-weather-by-month', nav: 'Phuket (Thailand)', card: 'Dry and calm from December to March, then a long wet monsoon season',
  title: 'Phuket Weather by Month: Thailand Dry Season, Rain, Sea',
  description: 'Phuket weather by month at the airport, 1991 to 2020: highs, lows, Andaman Sea temperature, rain and wet days, to find the dry season, with a month tool.',
  h1: 'Phuket weather by month',
  intro: (h) => `Phuket weather by month is all about rain: ${h.rain(id, 1)} in January against ${h.rain(id, 9)} in September, while the day stays near ${h.hi(id, 1)} all year.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Phuket is Thailand's largest island, on the Andaman Sea coast in the south-west of the country. Like most of the tropics, it does not have a warm and a cold season so much as a dry and a wet one. Our figures come from Phuket International Airport, in the north of the island, averaged over 1991 to 2020. The temperature hardly moves: the daytime high runs from ${h.hi(id, 9)} in September to ${h.hi(id, 3)} in March, and the night from ${h.lo(id, 1)} to ${h.lo(id, 5)}. The sea is just as constant, ${h.seaMin(id)} to ${h.seaMax(id)}. The rain is what changes. From December to February the island is dry, with ${h.wet(id, 1)} of rain in January and ${h.wet(id, 2)} in February. From May the south-west monsoon sets in, and from May to October rain falls on 18 to 22 days a month, with the heaviest totals in ${h.wettest(id)}, at ${h.rain(id, 9)}.`,
  body: (h) => `
<h2>Phuket weather by month: dry and wet seasons</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Phuket International Airport station; Andaman Sea surface ${h.seaKm(id)} offshore. Wet day: 1 mm of rain or more.`)}
<h2>Best time to visit Thailand's west coast</h2>
<p>In Phuket the months with 8 wet days or fewer are ${h.dryMonths(id, 8)}. That is the peak season for the beaches of Phuket, Krabi and Khao Lak. March and April are the hottest months, ${h.hi(id, 3)} and ${h.hi(id, 4)}, and wetter than January. In the wet season, rain often comes as heavy showers rather than all-day rain, but the sea is rougher on the west coast and some beaches fly red flags.</p>
<h2>Phuket or Koh Samui</h2>
<p>The two islands have opposite calendars. Koh Samui, in the Gulf of Thailand, gets its heaviest rain at the end of the year: ${h.rain('koh-samui', 11)} in November, against ${h.rain(id, 11)} in Phuket. In July and August, when Phuket has ${h.wet(id, 7)} and ${h.wet(id, 8)} of rain, Koh Samui has ${h.wet('koh-samui', 7)} and ${h.wet('koh-samui', 8)}. For a British summer holiday in Thailand, the Gulf side is the better bet; for Christmas and New Year, the Andaman side. To set the two side by side for any month, use the ${h.a('compare', 'comparison tool')}.</p>`,
  faqs: (h) => [
    { q: 'What is the best month to visit Phuket?', a: `January and February are the driest, with ${h.wet(id, 1)} and ${h.wet(id, 2)} of rain on average, highs of ${h.hi(id, 1)} to ${h.hi(id, 2)} and a sea at ${h.sea(id, 1)}. December is also good, with ${h.wet(id, 12)} of rain. March stays dry too, with ${h.wet(id, 3)} of rain, but it is the hottest month, at ${h.hi(id, 3)}.` },
    { q: 'Is it worth going to Phuket in the rainy season?', a: `It can be: it stays hot, around ${h.hi(id, 8)}, and the sea stays at ${h.sea(id, 8)}. But rain falls on about ${h.wet(id, 9)} in September, the wettest month by total at ${h.rain(id, 9)}, and the sea on the west coast is often rough.` },
    { q: 'How hot is Phuket in April?', a: `April averages ${h.hi(id, 4)} by day and ${h.lo(id, 4)} at night, among the warmest of the year, with a sea of ${h.sea(id, 4)}. Rain picks up, to about ${h.wet(id, 4)}, ahead of the monsoon in May. The heat feels stronger with the humidity.` },
  ],
  related: ['dubai', 'december', 'january', 'august'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
