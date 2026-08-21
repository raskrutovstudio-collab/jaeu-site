/// <reference types="astro/client" />

/**
 * Экспериментальная локализация главной страницы без отдельных URL.
 * Реализация живёт в inline-скрипте `src/layouts/HomeLayout.astro`: он должен
 * выполниться до первой отрисовки, поэтому не может быть модулем.
 */
interface JaeuLang {
  readonly storageKey: string;
  readonly locales: readonly string[];
  readonly current: string;
  apply(locale: string): void;
}

interface Window {
  jaeuLang?: JaeuLang;
}
