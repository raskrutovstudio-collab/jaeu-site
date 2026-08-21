export type Locale = 'ru' | 'kz' | 'en';

export const localeMeta = {
  ru: { lang: 'ru-KZ', path: '/', label: 'RU' },
  kz: { lang: 'kk-KZ', path: '/kz/', label: 'KZ' },
  en: { lang: 'en', path: '/en/', label: 'EN' }
} as const;

export const routes = {
  home: '/',
  about: '/about/',
  activities: '/activities/',
  expertCouncil: '/expert-council/',
  membership: '/membership/',
  knowledge: '/knowledge/',
  documents: '/documents/',
  reports: '/reports/',
  news: '/news/',
  contacts: '/contacts/',
  kz: '/kz/',
  en: '/en/'
} as const;

export type RouteKey = keyof typeof routes;

export const navPrimary = [
  { href: routes.about, key: 'about' as const },
  { href: routes.activities, key: 'activities' as const },
  { href: routes.expertCouncil, key: 'experts' as const },
  { href: routes.membership, key: 'membership' as const },
  { href: routes.knowledge, key: 'knowledge' as const },
  { href: routes.news, key: 'news' as const },
  { href: routes.contacts, key: 'contacts' as const }
];

export const navMobileExtra = [
  { href: routes.documents, key: 'documents' as const },
  { href: routes.reports, key: 'reports' as const }
];

export const footerGroups = {
  organisation: [
    { href: routes.about, key: 'about' as const },
    { href: routes.activities, key: 'activities' as const },
    { href: routes.expertCouncil, key: 'experts' as const }
  ],
  membership: [
    { href: routes.membership, key: 'membership' as const },
    { href: routes.documents, key: 'documents' as const },
    { href: routes.knowledge, key: 'knowledge' as const },
    { href: routes.reports, key: 'reports' as const }
  ],
  press: [
    { href: routes.news, key: 'news' as const },
    { href: routes.contacts, key: 'contacts' as const }
  ]
} as const;

export function homePath(locale: Locale): string {
  if (locale === 'kz') return routes.kz;
  if (locale === 'en') return routes.en;
  return routes.home;
}
