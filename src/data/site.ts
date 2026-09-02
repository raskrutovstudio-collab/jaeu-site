export type Locale = 'ru' | 'kz' | 'en';

export const productionOrigin = 'https://jaeu.kz';

const base = `/${import.meta.env.BASE_URL.replace(/^\/|\/$/g, '')}/`.replace(/^\/\/$/, '/');

export function withBase(path: string): string {
  return `${base}${path.replace(/^\//, '')}`;
}

export function withoutBase(path: string): string {
  return path.startsWith(base) ? `/${path.slice(base.length)}` : path;
}

export function canonicalUrl(path: string): string {
  return new URL(withoutBase(path), productionOrigin).href;
}

/* RU/KZ/EN переключаются на одном URL. */
export const localeMeta = {
  ru: { lang: 'ru-KZ', path: withBase('/'), label: 'RU' },
  kz: { lang: 'kk-KZ', path: withBase('/'), label: 'KZ' },
  en: { lang: 'en', path: withBase('/'), label: 'EN' }
} as const;

export const routes = {
  home: withBase('/'),
  about: withBase('/about/'),
  activities: withBase('/activities/'),
  expertCouncil: withBase('/expert-council/'),
  membership: withBase('/membership/'),
  documents: withBase('/documents/'),
  news: withBase('/news/'),
  contacts: withBase('/contacts/'),

  /* Deprecated aliases: не индексируются и не выводятся в навигации. */
  knowledge: withBase('/knowledge/'),
  reports: withBase('/reports/'),
  kz: withBase('/kz/'),
  en: withBase('/en/')
} as const;

export const indexablePaths = [
  '/',
  '/about/',
  '/activities/',
  '/expert-council/',
  '/membership/',
  '/documents/',
  '/news/',
  '/contacts/'
] as const;

export type RouteKey = keyof typeof routes;

export const navPrimary = [
  { href: routes.about, key: 'about' as const },
  { href: routes.activities, key: 'activities' as const },
  { href: routes.expertCouncil, key: 'experts' as const },
  { href: routes.membership, key: 'membership' as const },
  { href: routes.news, key: 'news' as const },
  { href: routes.documents, key: 'documents' as const },
  { href: routes.contacts, key: 'contacts' as const }
];

export const footerGroups = {
  organisation: [
    { href: routes.about, key: 'about' as const },
    { href: routes.activities, key: 'activities' as const },
    { href: routes.expertCouncil, key: 'experts' as const }
  ],
  membership: [
    { href: routes.membership, key: 'membership' as const },
    { href: routes.documents, key: 'documents' as const }
  ],
  press: [
    { href: routes.news, key: 'news' as const },
    { href: routes.contacts, key: 'contacts' as const }
  ]
} as const;

export function homePath(_locale: Locale): string {
  return routes.home;
}
