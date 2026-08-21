/**
 * Интерактив главной страницы: мобильное меню, аккордеон FAQ,
 * lightbox инфографик и reveal секций при скролле.
 */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initMobileMenu(): void {
  const toggle = document.getElementById('h-burger');
  const panel = document.getElementById('h-mobile-menu');
  if (!(toggle instanceof HTMLButtonElement) || !panel) return;

  const setState = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
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

  const media = window.matchMedia('(min-width: 1360px)');
  media.addEventListener('change', (event) => {
    if (event.matches) setState(false);
  });
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

function initLightbox(): void {
  const dialog = document.getElementById('h-lightbox');
  if (!(dialog instanceof HTMLDialogElement)) return;

  const image = dialog.querySelector<HTMLImageElement>('[data-lightbox-image]');
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]');
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-lightbox-close]');
  let lastTrigger: HTMLElement | null = null;

  document.querySelectorAll<HTMLElement>('[data-lightbox-src]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (!image) return;
      lastTrigger = trigger;
      image.src = trigger.dataset.lightboxSrc ?? '';
      image.alt = trigger.dataset.lightboxAlt ?? '';
      const width = Number(trigger.dataset.lightboxWidth);
      const height = Number(trigger.dataset.lightboxHeight);
      if (width && height) {
        image.width = width;
        image.height = height;
      }
      if (caption) caption.textContent = trigger.dataset.lightboxCaption ?? '';
      dialog.showModal();
      closeButton?.focus();
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  // <dialog> закрывается по Escape нативно; дублируем для предсказуемости.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dialog.open) dialog.close();
  });

  dialog.addEventListener('close', () => {
    lastTrigger?.focus();
    lastTrigger = null;
  });
}

initMobileMenu();
initFaq();
initLightbox();
initReveal();
