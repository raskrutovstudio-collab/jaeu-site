import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages project site: https://raskrutovstudio-collab.github.io/jaeu-site/
  // Canonical и hreflang остаются на будущем production-домене jaeu.kz
  // (см. productionOrigin в src/data/site.ts), поэтому preview не индексируется вместо него.
  site: 'https://raskrutovstudio-collab.github.io',
  base: '/jaeu-site',
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
