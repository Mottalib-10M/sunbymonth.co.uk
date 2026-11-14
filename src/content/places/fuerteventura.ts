import { definePage } from '../../lib/page-types';
const id = 'fuerteventura';
export default definePage({
  id, group: 'iberia', order: 13, slug: 'fuerteventura-weather-by-month', nav: 'Fuerteventura', card: 'Long beaches, steady wind, a dry summer and a sea at its warmest in October',
  title: 'Fuerteventura Weather by Month: Highs, Sea and Wet Days',
  description: 'Fuerteventura weather by month from the airport station, 1991 to 2020: daytime highs, night lows, sea temperature, rain and wet days, compared month by month.',
  h1: 'Fuerteventura weather by month',
  intro: (h) => `Fuerteventura weather by month: ${h.hi(id, 1)} by day in January and ${h.hi(id, 8)} in August, nights never below ${h.lo(id, 1)} on average, and a sea of ${h.seaMin(id)} to ${h.seaMax(id)}.`,
  tool: { mode: 'place', dest: id },
  resume: (h) => `Fuerteventura is the second largest of the Canary Islands and the closest to the African coast, about a hundred kilometres away. It is long, low and dry, with the longest beaches of the archipelago, and the station behind these figures is at the airport just south of Puerto del Rosario, averaged over 1991 to 2020. The daytime high varies from ${h.hi(id, 1)} in the coolest months to ${h.hi(id, 8)} from July to September. Rain is scarce at any time: even the wettest month, ${h.wettest(id)}, averages ${h.rain(id, 12)}, and the five months from May to September bring almost nothing. The sea follows the slow Atlantic rhythm, at its lowest in February and March, ${h.sea(id, 3)}, and at its highest in October, ${h.sea(id, 10)}. Use the tool to set one month against another or against another island.`,
  body: (h) => `
<h2>Fuerteventura weather by month, 1991 to 2020</h2>
${h.table(['Month', 'Daytime high', 'Night low', 'Sea', 'Rain', 'Wet days', 'Daylight'], h.table12(id), `Fuerteventura airport for air and rain; sea temperature taken ${h.seaKm(id)}. Wet day: 1 mm of rain or more.`)}
<h2>Corralejo, Caleta or Morro Jable</h2>
<p>The island stretches about a hundred kilometres from north to south, and the resorts at each end feel different. Corralejo in the north faces the wind and the open Atlantic swell; the Jandía peninsula in the south, with Costa Calma and Morro Jable, has more sheltered bays on its south-eastern side. The airport station sits in the middle of the east coast. Its temperatures apply well to the whole coast, since the island has no mountain range to split it; what changes from one beach to the next is mostly the wind.</p>
<p>That wind is the island's reputation. It blows hardest in summer, which brings kitesurfers to Sotavento in July and keeps the beach days from feeling as hot as the ${h.hi(id, 7)} on paper.</p>
<h2>Best time to visit Fuerteventura</h2>
<p>For 24 °C or more by day: ${h.good(id, 24)}. With a sea of 22 °C or more: ${h.good(id, 24, 22)}. Winter brings ${h.hi(id, 1)} by day and ${h.sea(id, 1)} in the sea, very close to ${h.a('lanzarote', 'Lanzarote')}. The ${h.a('december', 'December page')} ranks it among the other winter-sun places.</p>`,
  faqs: (h) => [
    { q: 'Is Fuerteventura windy all year?', a: 'The trade wind blows on most days but its strength varies: it is strongest from June to August and calmer from October to February. That is why summer suits windsurfing and kitesurfing, while autumn and winter suit people who want to lie on the beach. The monthly averages on this page do not include wind, because the station records we use do not carry it.' },
    { q: 'How warm is the sea in Fuerteventura in October?', a: `About ${h.sea(id, 10)} on average over 1991 to 2020, the warmest month of the year for the sea. October also has a daytime high of ${h.hi(id, 10)} and ${h.wet(id, 10)} of rain, so it is one of the best months for swimming. By January the sea has cooled to ${h.sea(id, 1)}.` },
    { q: 'Is Fuerteventura hotter than Gran Canaria?', a: `Very slightly at the peak of summer, ${h.hi(id, 8)} against ${h.hi('gran-canaria', 8)} in August at the two airports, and about the same in winter. The two islands are close enough that the choice rarely depends on temperature. Fuerteventura is flatter and drier; Gran Canaria has more varied landscapes and a cloudier north.` },
  ],
  related: ['lanzarote', 'gran-canaria', 'tenerife', 'december'],
  sources: ['ghcn', 'ghcn_files', 'oisst', 'wmo_normals'],
});
