import type { Locale } from './routes';
const en = {
  updatedOn: 'Last updated', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Computed by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Questions people ask', relatedCalculators: 'Check next', sourcesTitle: 'Data and references behind this page', writtenBy: 'Published by',
  asOf: 'Climate averages for 1991 to 2020, prepared in', lastUpdated: 'last updated',
  footerValidated: 'Station records: NOAA NCEI GHCN-Daily (Menne et al. 2012, doi:10.7289/V5D21VHZ) · Sea temperature data provided by the NOAA PSL, Boulder, Colorado, USA, from their website at https://psl.noaa.gov',
  footerBrowser: 'Averages over 1991 to 2020 computed by us from daily station records and a sea surface temperature grid. They describe a typical month: a long-term average does not replace a weather forecast for your dates. The finder runs in your browser: what you choose is never sent.',
  footerDisclaimer: 'Independent site published by Radif Partners. Not a service of NOAA, the Met Office or any travel company, and not endorsed by them. We sell no holidays and take no commission.',
  footerPopular: '',
  notFound: 'This address leads nowhere on the site. The finder on the home page still tells you where is hot in the month of your choice, with the sea temperature and the number of wet days.',
};
export function t(_lang: Locale) { return en; }
