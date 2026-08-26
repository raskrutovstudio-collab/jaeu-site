/**
 * Органы управления языком. Подстановку строк выполняет инлайновый рантайм
 * (`components/I18nRuntime.astro`), здесь только кнопки, состояние
 * `aria-pressed` и запоминание выбора: URL при переключении не меняется.
 */
export function initLangSwitch(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-lang-switch]');
  if (!buttons.length) return;

  const i18n = window.jaeuLang;
  if (!i18n) return;

  const syncState = (locale: string) => {
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.langSwitch === locale));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const locale = button.dataset.langSwitch;
      if (!locale || locale === i18n.current) return;
      i18n.apply(locale);
      try {
        window.localStorage.setItem(i18n.storageKey, locale);
      } catch {
        // Приватный режим блокирует хранилище — выбор действует до перезагрузки.
      }
    });
  });

  document.addEventListener('jaeu:lang', (event) => {
    const detail = (event as CustomEvent<string>).detail;
    if (typeof detail === 'string') syncState(detail);
  });

  syncState(i18n.current);
}
