/**
 * Интерактив главной страницы: мобильное меню, переключатель языка,
 * аккордеон FAQ и reveal секций при скролле.
 */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initMobileMenu(): void {
  const toggle = document.getElementById('h-burger');
  const panel = document.getElementById('h-mobile-menu');
  if (!(toggle instanceof HTMLButtonElement) || !panel) return;

  const setState = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    // Подписи локализованы через data-i18n-attrs, поэтому берутся из разметки.
    const label = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
    if (label) toggle.setAttribute('aria-label', label);
    panel.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Смена языка переписывает aria-label, поэтому состояние синхронизируем.
  document.addEventListener('jaeu:lang', () => {
    setState(toggle.getAttribute('aria-expanded') === 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setState(false);
      toggle.focus();
    }
  });

  const media = window.matchMedia('(min-width: 1440px)');
  media.addEventListener('change', (event) => {
    if (event.matches) setState(false);
  });
}

/**
 * Переключатель языка главной страницы. URL не меняется: подстановка строк
 * выполняется inline-скриптом из HomeLayout, здесь только органы управления,
 * состояние aria-pressed и запоминание выбора.
 */
function initLangSwitch(): void {
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

function initFaq(): void {
  const triggers = document.querySelectorAll<HTMLButtonElement>('[data-faq-trigger]');

  triggers.forEach((trigger) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls') ?? '');
    if (!panel) return;

    /**
     * Закрытая панель остаётся hidden, поэтому высота анимируется в два шага:
     * чтение offsetHeight фиксирует стартовое значение, иначе переход от
     * max-height: none не запускается. Инлайновая высота снимается по таймеру,
     * равному длительности перехода в CSS.
     */
    const duration = 320;
    let timer = 0;

    const open = () => {
      panel.hidden = false;
      if (reducedMotion.matches) return;
      panel.style.maxHeight = '0px';
      void panel.offsetHeight;
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        panel.style.maxHeight = '';
      }, duration);
    };

    const close = () => {
      if (reducedMotion.matches) {
        panel.hidden = true;
        return;
      }
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      void panel.offsetHeight;
      panel.style.maxHeight = '0px';
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        panel.hidden = true;
        panel.style.maxHeight = '';
      }, duration);
    };

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) close();
      else open();
    });
  });
}

/** Однократное появление секций и изображений при скролле. */
function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );

  targets.forEach((target) => observer.observe(target));
}

initMobileMenu();
initLangSwitch();
initFaq();
initReveal();
