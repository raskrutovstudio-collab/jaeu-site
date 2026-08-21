function initMobileMenu() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const toggle = header.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = header.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return;

  const openLabel = toggle.dataset.labelOpen ?? 'Open menu';
  const closeLabel = toggle.dataset.labelClose ?? 'Close menu';

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
    panel.classList.toggle('is-open', open);
    header.classList.toggle('is-menu-open', open);
    panel.hidden = !open;
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initFaq() {
  document.querySelectorAll<HTMLButtonElement>('[data-faq-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const item = button.closest('.faq__item');
      const panelId = button.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      button.setAttribute('aria-expanded', String(!expanded));
      item?.classList.toggle('is-open', !expanded);
      if (panel) panel.hidden = expanded;
    });
  });
}

function initSearchFilters() {
  document.querySelectorAll<HTMLElement>('[data-search-filter]').forEach((root) => {
    const input = root.querySelector<HTMLInputElement>('[data-search-input]');
    const empty = root.querySelector<HTMLElement>('[data-empty]');
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-item]'));
    let category = 'all';

    const apply = () => {
      const query = (input?.value ?? '').trim().toLowerCase();
      let visible = 0;

      items.forEach((item) => {
        const haystack = (item.dataset.search ?? '').toLowerCase();
        const itemCategory = item.dataset.category ?? '';
        const matchesCategory = category === 'all' || itemCategory === category;
        const matchesQuery = query.length === 0 || haystack.includes(query);
        const show = matchesCategory && matchesQuery;
        item.hidden = !show;
        if (show) visible += 1;
      });

      empty?.classList.toggle('is-visible', visible === 0);
    };

    root.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        category = button.dataset.filter ?? 'all';
        root.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((node) => {
          const active = node === button;
          node.classList.toggle('is-active', active);
          node.setAttribute('aria-pressed', String(active));
        });
        apply();
      });
    });

    input?.addEventListener('input', apply);
  });
}

function initDemoForms() {
  document.querySelectorAll<HTMLFormElement>('[data-demo-form]').forEach((form) => {
    const root = form.closest('.demo-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let valid = true;

      form.querySelectorAll<HTMLElement>('.form-field').forEach((field) => {
        const input = field.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
        if (!input) return;

        const value = input.value.trim();
        const required = input.hasAttribute('required');
        const email = input.type === 'email';
        const emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const ok = (!required || value.length > 0) && emailOk;

        field.classList.toggle('is-invalid', !ok);
        if (!ok) valid = false;
      });

      if (valid) {
        root?.classList.add('is-sent');
        form.reset();
      }
    });
  });
}

export function initUi() {
  initMobileMenu();
  initFaq();
  initSearchFilters();
  initDemoForms();
}

initUi();
