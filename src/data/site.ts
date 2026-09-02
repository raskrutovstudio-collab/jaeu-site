export type Locale = 'ru' | 'kz' | 'en';

/**
 * Домен, на котором сайт работает в production. Canonical и структурированные
 * данные всегда указывают сюда, независимо от preview-сборки.
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

/*
  Переключение RU/KZ/EN происходит на одном URL через I18nRuntime.
  Отдельных индексируемых или технических `/kz/` и `/en/` больше нет.
*/
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
  contacts: withBase('/contacts/')
} as const;

/** Русские URL, которые можно отдавать поисковикам. */
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
