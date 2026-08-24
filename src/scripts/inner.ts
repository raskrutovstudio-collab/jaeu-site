/**
 * Интерактив внутренних страниц: мобильное меню, аккордеон FAQ и
 * композиционное появление секций при скролле.
 *
 * Логика повторяет главную осознанно: `scripts/home.ts` выполняет действия
 * при импорте и дополнительно ведёт переключатель языка и lightbox, которых
 * на внутренних страницах нет. Разделение оставляет главную неизменной.
 */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initMobileMenu(): void {
  const toggle = document.getElementById('h-burger');
  const panel = document.getElementById('h-mobile-menu');
  if (!(toggle instanceof HTMLButtonElement) || !panel) return;

  const setState = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    const label = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
    if (label) toggle.setAttribute('aria-label', label);
    panel.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setState(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 1440px)').addEventListener('change', (event) => {
    if (event.matches) setState(false);
  });
}

function initFaq(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-faq-trigger]').forEach((trigger) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls') ?? '');
    if (!panel) return;

    /**
     * Закрытая панель остаётся hidden, поэтому высота анимируется в два шага:
     * чтение offsetHeight фиксирует стартовое значение, иначе переход не
     * запускается. Инлайновая высота снимается по таймеру длительности CSS.
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

/** Однократное появление композиции секции при скролле. */
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
    { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
  );

  targets.forEach((target) => observer.observe(target));
}

initMobileMenu();
initFaq();
initReveal();

/* Файл подключается как модуль: экспорт изолирует его область видимости. */
export {};
