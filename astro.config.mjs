import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jaeu.kz',
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
