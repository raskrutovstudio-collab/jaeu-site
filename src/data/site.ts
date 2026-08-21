export type Locale = 'ru' | 'kz' | 'en';

/**
 * Домен, на котором сайт будет работать в production. Canonical, hreflang и
 * структурированные данные всегда указывают сюда, даже когда сборка
 * опубликована как preview на GitHub Pages.
 */
export const productionOrigin = 'https://jaeu.kz';

/** Astro `base`, всегда со слешами по краям: `/` или `/jaeu-site/`. */
const base = `/${import.meta.env.BASE_URL.replace(/^\/|\/$/g, '')}/`.replace(/^\/\/$/, '/');

/** Префиксует корневой путь значением Astro `base`: `/about/` → `/jaeu-site/about/`. */
export function withBase(path: string): string {
  return `${base}${path.replace(/^\//, '')}`;
}

/** Убирает префикс `base`, возвращая путь относительно корня сайта. */
export function withoutBase(path: string): string {
  return path.startsWith(base) ? `/${path.slice(base.length)}` : path;
}

/** Абсолютный URL страницы на production-домене, независимо от `base`. */
export function canonicalUrl(path: string): string {
  return new URL(withoutBase(path), productionOrigin).href;
}

export const localeMeta = {
  ru: { lang: 'ru-KZ', path: withBase('/'), label: 'RU' },
  kz: { lang: 'kk-KZ', path: withBase('/kz/'), label: 'KZ' },
  en: { lang: 'en', path: withBase('/en/'), label: 'EN' }
} as const;

export const routes = {
  home: withBase('/'),
  about: withBase('/about/'),
  activities: withBase('/activities/'),
  expertCouncil: withBase('/expert-council/'),
  membership: withBase('/membership/'),
  knowledge: withBase('/knowledge/'),
  documents: withBase('/documents/'),
  reports: withBase('/reports/'),
  news: withBase('/news/'),
  contacts: withBase('/contacts/'),
  kz: withBase('/kz/'),
  en: withBase('/en/')
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
