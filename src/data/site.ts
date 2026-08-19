export type Locale = 'ru' | 'kz' | 'en';

export const localeMeta = {
  ru: { lang: 'ru-KZ', path: '/', label: 'RU' },
  kz: { lang: 'kk-KZ', path: '/kz/', label: 'KZ' },
  en: { lang: 'en', path: '/en/', label: 'EN' }
} as const;

export const homeCopy = {
  ru: {
    title: 'Ассоциация ювелиров Евразийского экономического союза',
    description: 'Отраслевая площадка для защиты интересов ювелирного бизнеса, экспертного диалога и развития единого рынка ЕАЭС.',
    eyebrow: 'Отраслевая ассоциация ЕАЭС',
    heading: 'Объединяем ювелирную отрасль для системных изменений',
    lead: 'Создаём площадку для диалога бизнеса, экспертов и государственных органов, защищаем интересы участников рынка и поддерживаем развитие прозрачной конкурентной среды.',
    primary: 'Вступить в Ассоциацию',
    secondary: 'Направить обращение',
    aboutTitle: 'Ассоциация как рабочая площадка отрасли',
    aboutText: 'Негосударственная некоммерческая организация, представляющая интересы участников ювелирного рынка на территории Евразийского экономического союза.',
    activityTitle: 'Направления деятельности',
    activities: ['Регуляторный диалог', 'Правовая экспертиза', 'Единый рынок ЕАЭС', 'Отраслевые стандарты', 'Аналитика и мониторинг', 'Международное сотрудничество'],
    note: 'Стартовый каркас. Финальная структура будет утверждена после семантического исследования.'
  },
  kz: {
    title: 'Еуразиялық экономикалық одақ зергерлерінің қауымдастығы',
    description: 'Зергерлік бизнес мүдделерін қорғауға, сараптамалық диалогқа және ЕАЭО ортақ нарығын дамытуға арналған салалық алаң.',
    eyebrow: 'ЕАЭО салалық қауымдастығы',
    heading: 'Жүйелі өзгерістер үшін зергерлік саланы біріктіреміз',
    lead: 'Бизнес, сарапшылар және мемлекеттік органдар арасында диалог алаңын қалыптастырамыз, нарық қатысушыларының мүдделерін қорғаймыз.',
    primary: 'Қауымдастыққа кіру',
    secondary: 'Өтініш жолдау',
    aboutTitle: 'Саланың жұмыс алаңы',
    aboutText: 'Еуразиялық экономикалық одақ аумағындағы зергерлік нарық қатысушыларының мүдделерін білдіретін мемлекеттік емес коммерциялық емес ұйым.',
    activityTitle: 'Қызмет бағыттары',
    activities: ['Реттеушілік диалог', 'Құқықтық сараптама', 'ЕАЭО ортақ нарығы', 'Салалық стандарттар', 'Талдау және мониторинг', 'Халықаралық ынтымақтастық'],
    note: 'Бастапқы қаңқа. Соңғы құрылым семантикалық зерттеуден кейін бекітіледі.'
  },
  en: {
    title: 'Association of Jewellers of the Eurasian Economic Union',
    description: 'An industry platform for protecting jewellery businesses, expert dialogue and development of the EAEU common market.',
    eyebrow: 'EAEU industry association',
    heading: 'Uniting the jewellery industry for systemic progress',
    lead: 'We create a platform for dialogue between businesses, experts and public authorities, represent market participants and support fair competition.',
    primary: 'Join the Association',
    secondary: 'Submit an enquiry',
    aboutTitle: 'A working platform for the industry',
    aboutText: 'A non-governmental non-profit organisation representing jewellery market participants across the Eurasian Economic Union.',
    activityTitle: 'Areas of activity',
    activities: ['Regulatory dialogue', 'Legal expertise', 'EAEU common market', 'Industry standards', 'Analysis and monitoring', 'International cooperation'],
    note: 'Initial scaffold. The final structure will be approved after semantic research.'
  }
} as const;
