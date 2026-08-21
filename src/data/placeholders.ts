import { ui } from './copy';
import type { Locale } from './site';

export const activityItems = [
  {
    id: 'dialogue',
    span: 'wide',
    tone: 'white',
    title: {
      ru: 'Развитие отраслевого диалога',
      kz: 'Салалық диалогты дамыту',
      en: 'Development of industry dialogue'
    }
  },
  {
    id: 'expertise',
    span: 'narrow',
    tone: 'muted',
    title: {
      ru: 'Экспертная и консультационная работа',
      kz: 'Сараптамалық және консультациялық жұмыс',
      en: 'Expert and advisory work'
    }
  },
  {
    id: 'members',
    span: 'narrow',
    tone: 'muted',
    title: {
      ru: 'Поддержка членов Ассоциации',
      kz: 'Қауымдастық мүшелерін қолдау',
      en: 'Support for Association members'
    }
  },
  {
    id: 'partners',
    span: 'wide',
    tone: 'white',
    title: {
      ru: 'Партнёрства и международное сотрудничество',
      kz: 'Серіктестік және халықаралық ынтымақтастық',
      en: 'Partnerships and international cooperation'
    }
  }
] as const;

export function newsPlaceholders(locale: Locale) {
  const text = ui[locale].placeholders.material;
  return [
    { id: 'news-1', category: 'publication', size: 'large' as const, title: text, text },
    { id: 'news-2', category: 'publication', size: 'medium' as const, title: text, text },
    { id: 'news-3', category: 'publication', size: 'small' as const, title: text, text }
  ];
}

export function documentPlaceholders(locale: Locale, count = 3) {
  const text = ui[locale].placeholders.document;
  return Array.from({ length: count }, (_, index) => ({
    id: `doc-${index + 1}`,
    category: 'document',
    title: text,
    text
  }));
}

export function reportPlaceholders(locale: Locale) {
  const text = ui[locale].placeholders.document;
  return [
    { id: 'report-1', category: 'report', title: text, text },
    { id: 'report-2', category: 'report', title: text, text },
    { id: 'report-3', category: 'report', title: text, text }
  ];
}

export function knowledgePlaceholders(locale: Locale) {
  const text = ui[locale].placeholders.material;
  return [
    { id: 'knowledge-1', category: 'guide', title: text, text },
    { id: 'knowledge-2', category: 'guide', title: text, text },
    { id: 'knowledge-3', category: 'guide', title: text, text }
  ];
}

export function placeholderText(locale: Locale) {
  return ui[locale].placeholders.info;
}
