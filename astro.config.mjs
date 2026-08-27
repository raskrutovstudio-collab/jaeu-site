import { defineConfig } from 'astro/config';

/**
 * Две статические сборки из одного конфига.
 *
 * По умолчанию (локально и GitHub Pages) сайт живёт в каталоге проекта:
 * site = github.io, base = /jaeu-site. Plesk-сборка для основного домена
 * включается только явно: JAEU_DEPLOY=plesk → site = https://jaeu.kz/,
 * base = /. Canonical в разметке всегда берётся из productionOrigin
 * (`src/data/site.ts`), поэтому SEO-адреса не зависят от preview-base.
 */
const isPlesk = process.env.JAEU_DEPLOY === 'plesk';

export default defineConfig({
  site: isPlesk ? 'https://jaeu.kz/' : 'https://raskrutovstudio-collab.github.io',
  base: isPlesk ? '/' : '/jaeu-site',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: [
      { path: 'ru', codes: ['ru', 'ru-KZ'] },
      { path: 'kz', codes: ['kk', 'kk-KZ'] },
      'en'
    ],
    defaultLocale: 'ru',
    routing: {
      prefixDefaultLocale: false
    }
  }
});
