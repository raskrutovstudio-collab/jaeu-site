import { org } from './home';

/**
 * Прямое создание письма в Gmail: на Windows `mailto:` открывает системный
 * выбор приложения, поэтому пользовательские почтовые CTA ведут сюда.
 * Тема кодируется через encodeURIComponent и подставляется i18n-словарями.
 */
export function gmailCompose(subject?: string): string {
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(org.email)}`;
  return subject ? `${url}&su=${encodeURIComponent(subject)}` : url;
}
