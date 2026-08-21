const placeholder = {
  material: {
    ru: 'Материал будет добавлен после публикации',
    kz: 'Материал жарияланғаннан кейін қосылады',
    en: 'The material will be added after publication'
  },
  document: {
    ru: 'Документ будет добавлен после утверждения',
    kz: 'Құжат бекітілгеннен кейін қосылады',
    en: 'The document will be added after approval'
  },
  info: {
    ru: 'Информация будет добавлена после подтверждения',
    kz: 'Ақпарат расталғаннан кейін қосылады',
    en: 'The information will be added after confirmation'
  },
  composition: {
    ru: 'Состав будет опубликован после утверждения',
    kz: 'Құрам бекітілгеннен кейін жарияланады',
    en: 'The composition will be published after approval'
  },
  contacts: {
    ru: 'Контактные данные будут добавлены после подтверждения',
    kz: 'Байланыс деректері расталғаннан кейін қосылады',
    en: 'Contact details will be added after confirmation'
  },
  formNotice: {
    ru: 'Демонстрационная форма. В production-версии заявка будет направляться в Ассоциацию',
    kz: 'Демонстрациялық нысан. Production-нұсқада өтінім Қауымдастыққа жіберіледі',
    en: 'Demonstration form. In the production version the request will be sent to the Association'
  },
  formNotSent: {
    ru: 'Данные никуда не отправлены.',
    kz: 'Деректер ешқайда жіберілген жоқ.',
    en: 'The data has not been sent anywhere.'
  },
  image: {
    ru: 'Изображение будет добавлено после публикации',
    kz: 'Сурет жарияланғаннан кейін қосылады',
    en: 'The image will be added after publication'
  },
  emptySearch: {
    ru: 'По запросу ничего не найдено.',
    kz: 'Сұраныс бойынша ештеңе табылмады.',
    en: 'Nothing was found for this query.'
  }
} as const;

function placeholdersFor(locale: 'ru' | 'kz' | 'en') {
  return {
    material: placeholder.material[locale],
    document: placeholder.document[locale],
    info: placeholder.info[locale],
    composition: placeholder.composition[locale],
    contacts: placeholder.contacts[locale],
    formNotice: placeholder.formNotice[locale],
    formNotSent: placeholder.formNotSent[locale],
    image: placeholder.image[locale],
    emptySearch: placeholder.emptySearch[locale]
  };
}

export const ui = {
  ru: {
    brandName: 'JAEU',
    brandSub: 'Ассоциация ювелиров ЕАЭС',
    skip: 'Перейти к содержимому',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    navLabel: 'Основная навигация',
    langLabel: 'Выбор языка',
    nav: {
      about: 'Об Ассоциации',
      activities: 'Деятельность',
      experts: 'Экспертный совет',
      membership: 'Членство',
      knowledge: 'Центр знаний',
      news: 'Новости',
      documents: 'Документы',
      reports: 'Отчёты',
      contacts: 'Контакты',
      join: 'Вступить в Ассоциацию'
    },
    footer: {
      blurb: 'Ассоциация ювелиров Евразийского экономического союза.',
      organisation: 'Организация',
      membership: 'Членство и материалы',
      press: 'Пресс-центр',
      rights: 'Все права защищены.',
      apply: 'Подать заявку'
    },
    home: 'Главная',
    search: 'Поиск',
    filter: 'Фильтры',
    all: 'Все',
    readMore: 'Подробнее',
    allNews: 'Все новости',
    allDocuments: 'Все документы',
    placeholders: placeholdersFor('ru')
  },
  kz: {
    brandName: 'JAEU',
    brandSub: 'ЕАЭО зергерлер қауымдастығы',
    skip: 'Мазмұнға өту',
    menuOpen: 'Мәзірді ашу',
    menuClose: 'Мәзірді жабу',
    navLabel: 'Негізгі навигация',
    langLabel: 'Тілді таңдау',
    nav: {
      about: 'Қауымдастық туралы',
      activities: 'Қызмет',
      experts: 'Сарапшылар кеңесі',
      membership: 'Мүшелік',
      knowledge: 'Білім орталығы',
      news: 'Жаңалықтар',
      documents: 'Құжаттар',
      reports: 'Есептер',
      contacts: 'Байланыс',
      join: 'Қауымдастыққа кіру'
    },
    footer: {
      blurb: 'Еуразиялық экономикалық одақ зергерлерінің қауымдастығы.',
      organisation: 'Ұйым',
      membership: 'Мүшелік және материалдар',
      press: 'Баспасөз орталығы',
      rights: 'Барлық құқықтар қорғалған.',
      apply: 'Өтінім беру'
    },
    home: 'Басты бет',
    search: 'Іздеу',
    filter: 'Сүзгілер',
    all: 'Барлығы',
    readMore: 'Толығырақ',
    allNews: 'Барлық жаңалықтар',
    allDocuments: 'Барлық құжаттар',
    placeholders: placeholdersFor('kz')
  },
  en: {
    brandName: 'JAEU',
    brandSub: 'Association of Jewellers of the EAEU',
    skip: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navLabel: 'Primary navigation',
    langLabel: 'Language selection',
    nav: {
      about: 'About the Association',
      activities: 'Activities',
      experts: 'Expert Council',
      membership: 'Membership',
      knowledge: 'Knowledge Centre',
      news: 'News',
      documents: 'Documents',
      reports: 'Reports',
      contacts: 'Contacts',
      join: 'Join the Association'
    },
    footer: {
      blurb: 'Association of Jewellers of the Eurasian Economic Union.',
      organisation: 'Organisation',
      membership: 'Membership and materials',
      press: 'Press centre',
      rights: 'All rights reserved.',
      apply: 'Submit an application'
    },
    home: 'Home',
    search: 'Search',
    filter: 'Filters',
    all: 'All',
    readMore: 'Read more',
    allNews: 'All news',
    allDocuments: 'All documents',
    placeholders: placeholdersFor('en')
  }
} as const;

export const homeCopy = {
  ru: {
    title: 'Ассоциация ювелиров ЕАЭС — JAEU',
    description: 'Официальный сайт Ассоциации ювелиров Евразийского экономического союза. Сведения о деятельности, членстве и материалах Ассоциации.',
    h1: 'Объединяем ювелирную отрасль ЕАЭС',
    lead: 'Ассоциация развивает профессиональный диалог, поддерживает участников отрасли и формирует пространство для совместных инициатив.',
    join: 'Стать членом',
    aboutActivities: 'О деятельности',
    trust: ['Профессиональное сообщество', 'Диалог с отраслью', 'Совместные инициативы'],
    aboutTitle: 'Об Ассоциации',
    aboutText: 'Ассоциация объединяет участников ювелирной отрасли ЕАЭС для профессионального диалога и совместной работы. Подробные сведения публикуются после подтверждения.',
    aboutLink: 'Подробнее об Ассоциации',
    activitiesTitle: 'Направления деятельности',
    activitiesLead: 'Основные направления работы Ассоциации. Подробности публикуются после подтверждения.',
    membershipTitle: 'Членство в Ассоциации',
    membershipText: 'Информация о порядке вступления будет добавлена после подтверждения.',
    membershipCta: 'Узнать о членстве',
    newsTitle: 'Новости и события',
    documentsTitle: 'Документы',
    documentsLead: 'Официальные материалы Ассоциации публикуются после утверждения.',
    ctaTitle: 'Стать членом Ассоциации',
    ctaText: 'Информация о членстве будет добавлена после подтверждения.'
  },
  kz: {
    title: 'ЕАЭО зергерлер қауымдастығы — JAEU',
    description: 'Еуразиялық экономикалық одақ зергерлері қауымдастығының ресми сайты. Қызмет, мүшелік және материалдар туралы мәліметтер.',
    h1: 'ЕАЭО зергерлік саласын біріктіреміз',
    lead: 'Қауымдастық кәсіби диалогты дамытады, сала қатысушыларын қолдайды және бірлескен бастамалар үшін кеңістік қалыптастырады.',
    join: 'Мүше болу',
    aboutActivities: 'Қызмет туралы',
    trust: ['Кәсіби қоғамдастық', 'Саламен диалог', 'Бірлескен бастамалар'],
    aboutTitle: 'Қауымдастық туралы',
    aboutText: 'Қауымдастық кәсіби диалог және бірлескен жұмыс үшін ЕАЭО зергерлік саласының қатысушыларын біріктіреді. Толық мәліметтер расталғаннан кейін жарияланады.',
    aboutLink: 'Қауымдастық туралы толығырақ',
    activitiesTitle: 'Қызмет бағыттары',
    activitiesLead: 'Қауымдастық жұмысының негізгі бағыттары. Толық мәліметтер расталғаннан кейін жарияланады.',
    membershipTitle: 'Қауымдастыққа мүшелік',
    membershipText: 'Кіру тәртібі туралы ақпарат расталғаннан кейін қосылады.',
    membershipCta: 'Мүшелік туралы білу',
    newsTitle: 'Жаңалықтар мен оқиғалар',
    documentsTitle: 'Құжаттар',
    documentsLead: 'Қауымдастықтың ресми материалдары бекітілгеннен кейін жарияланады.',
    ctaTitle: 'Қауымдастық мүшесі болу',
    ctaText: 'Мүшелік туралы ақпарат расталғаннан кейін қосылады.'
  },
  en: {
    title: 'Association of Jewellers of the EAEU — JAEU',
    description: 'Official website of the Association of Jewellers of the Eurasian Economic Union. Information about activities, membership and Association materials.',
    h1: 'Uniting the jewellery industry of the EAEU',
    lead: 'The Association develops professional dialogue, supports industry participants and creates space for joint initiatives.',
    join: 'Become a member',
    aboutActivities: 'About activities',
    trust: ['Professional community', 'Dialogue with the industry', 'Joint initiatives'],
    aboutTitle: 'About the Association',
    aboutText: 'The Association brings together jewellery industry participants of the EAEU for professional dialogue and joint work. Detailed information is published after confirmation.',
    aboutLink: 'More about the Association',
    activitiesTitle: 'Areas of activity',
    activitiesLead: 'The Association’s main areas of work. Details are published after confirmation.',
    membershipTitle: 'Membership in the Association',
    membershipText: 'Information about the joining process will be added after confirmation.',
    membershipCta: 'Learn about membership',
    newsTitle: 'News and events',
    documentsTitle: 'Documents',
    documentsLead: 'Official Association materials are published after approval.',
    ctaTitle: 'Become a member of the Association',
    ctaText: 'Information about membership will be added after confirmation.'
  }
} as const;

export const pageCopy = {
  about: {
    title: 'Об Ассоциации — JAEU',
    description: 'Страница об Ассоциации ювелиров ЕАЭС. Подробные сведения публикуются после подтверждения.',
    h1: 'Об Ассоциации',
    lead: 'Информация будет добавлена после подтверждения.',
    sections: [
      {
        title: 'Профиль организации',
        text: 'Материал будет добавлен после публикации.'
      },
      {
        title: 'Цели и направления',
        text: 'Информация будет добавлена после подтверждения.'
      }
    ]
  },
  activities: {
    title: 'Деятельность — JAEU',
    description: 'Направления деятельности Ассоциации ювелиров ЕАЭС. Подробности публикуются после подтверждения.',
    h1: 'Деятельность',
    lead: 'Информация будет добавлена после подтверждения.'
  },
  expertCouncil: {
    title: 'Экспертный совет — JAEU',
    description: 'Страница Экспертного совета Ассоциации ювелиров ЕАЭС. Состав публикуется после утверждения.',
    h1: 'Экспертный совет',
    lead: 'Информация будет добавлена после подтверждения.',
    compositionTitle: 'Состав совета'
  },
  membership: {
    title: 'Членство — JAEU',
    description: 'Сведения о членстве в Ассоциации ювелиров ЕАЭС. Порядок вступления публикуется после подтверждения.',
    h1: 'Членство',
    lead: 'Информация будет добавлена после подтверждения.',
    formTitle: 'Заявка на членство',
    pathTitle: 'Порядок вступления',
    pathText: 'Материал будет добавлен после публикации.'
  },
  knowledge: {
    title: 'Центр знаний — JAEU',
    description: 'Центр знаний Ассоциации ювелиров ЕАЭС. Материалы публикуются после утверждения.',
    h1: 'Центр знаний',
    lead: 'Материал будет добавлен после публикации.'
  },
  documents: {
    title: 'Документы — JAEU',
    description: 'Документы Ассоциации ювелиров ЕАЭС. Файлы публикуются после утверждения.',
    h1: 'Документы',
    lead: 'Документ будет добавлен после утверждения.'
  },
  reports: {
    title: 'Отчёты — JAEU',
    description: 'Отчёты Ассоциации ювелиров ЕАЭС. Материалы публикуются после утверждения.',
    h1: 'Отчёты',
    lead: 'Документ будет добавлен после утверждения.'
  },
  news: {
    title: 'Новости и события — JAEU',
    description: 'Новости и события Ассоциации ювелиров ЕАЭС. Материалы публикуются после подтверждения.',
    h1: 'Новости и события',
    lead: 'Материал будет добавлен после публикации.'
  },
  contacts: {
    title: 'Контакты — JAEU',
    description: 'Контакты Ассоциации ювелиров ЕАЭС. Актуальные данные публикуются после подтверждения.',
    h1: 'Контакты',
    lead: 'Контактные данные будут добавлены после подтверждения.',
    formTitle: 'Направить обращение'
  }
} as const;

export const formCopy = {
  ru: {
    organisation: 'Наименование организации',
    name: 'Контактное лицо',
    email: 'Электронная почта',
    message: 'Сообщение',
    required: 'Обязательное поле',
    emailInvalid: 'Укажите корректный адрес электронной почты',
    submitMembership: 'Отправить заявку',
    submitContact: 'Отправить обращение',
    notice: placeholder.formNotice.ru,
    success: placeholder.formNotSent.ru
  },
  kz: {
    organisation: 'Ұйым атауы',
    name: 'Байланыс тұлғасы',
    email: 'Электрондық пошта',
    message: 'Хабарлама',
    required: 'Міндетті өріс',
    emailInvalid: 'Жарамды электрондық пошта мекенжайын көрсетіңіз',
    submitMembership: 'Өтінім жіберу',
    submitContact: 'Өтініш жіберу',
    notice: placeholder.formNotice.kz,
    success: placeholder.formNotSent.kz
  },
  en: {
    organisation: 'Organisation name',
    name: 'Contact person',
    email: 'Email',
    message: 'Message',
    required: 'This field is required',
    emailInvalid: 'Enter a valid email address',
    submitMembership: 'Submit application',
    submitContact: 'Send message',
    notice: placeholder.formNotice.en,
    success: placeholder.formNotSent.en
  }
} as const;

export const faqCopy = {
  about: [
    { q: 'Где опубликованы сведения об Ассоциации?', a: 'Информация будет добавлена после подтверждения.' },
    { q: 'Как связаться с Ассоциацией?', a: 'Контактные данные будут добавлены после подтверждения.' }
  ],
  activities: [
    { q: 'Какие направления деятельности уже описаны?', a: 'Материал будет добавлен после публикации.' },
    { q: 'Как принять участие в работе Ассоциации?', a: 'Информация будет добавлена после подтверждения.' }
  ],
  expertCouncil: [
    { q: 'Кто входит в Экспертный совет?', a: 'Состав будет опубликован после утверждения.' },
    { q: 'Как направляются вопросы совету?', a: 'Информация будет добавлена после подтверждения.' }
  ],
  membership: [
    { q: 'Как подать заявку на членство?', a: 'Информация будет добавлена после подтверждения. Форма на этой странице демонстрационная и никуда не отправляет данные.' },
    { q: 'Какие документы потребуются?', a: 'Документ будет добавлен после утверждения.' }
  ],
  knowledge: [
    { q: 'Когда появятся материалы центра знаний?', a: 'Материал будет добавлен после публикации.' },
    { q: 'Можно ли скачать файлы сейчас?', a: 'Документ будет добавлен после утверждения. Скачивание файлов недоступно.' }
  ],
  documents: [
    { q: 'Почему документы нельзя скачать?', a: 'Документ будет добавлен после утверждения. На сайте нет файлов для загрузки.' },
    { q: 'Где смотреть отчёты?', a: 'Раздел отчётов содержит нейтральные заглушки до публикации утверждённых материалов.' }
  ],
  reports: [
    { q: 'Есть ли опубликованные отчёты?', a: 'Документ будет добавлен после утверждения.' },
    { q: 'Как будут размещаться отчёты?', a: 'Материал будет добавлен после публикации.' }
  ],
  news: [
    { q: 'Почему в ленте нет дат и событий?', a: 'Материал будет добавлен после публикации. Даты и названия мероприятий не выводятся до подтверждения.' },
    { q: 'Как пользоваться поиском?', a: 'Поиск работает по демонстрационным заглушкам. Если совпадений нет, показывается пустое состояние.' }
  ],
  contacts: [
    { q: 'Где указаны телефон и адрес?', a: 'Контактные данные будут добавлены после подтверждения.' },
    { q: 'Отправляется ли форма обращения?', a: 'Демонстрационная форма. В production-версии заявка будет направляться в Ассоциацию. Сейчас данные никуда не отправлены.' }
  ]
} as const;

export const filterLabels = {
  news: [
    { id: 'all', label: 'Все материалы' },
    { id: 'publication', label: 'Публикации' },
    { id: 'event', label: 'События' }
  ],
  knowledge: [
    { id: 'all', label: 'Все материалы' },
    { id: 'guide', label: 'Материалы' },
    { id: 'note', label: 'Заметки' }
  ],
  documents: [
    { id: 'all', label: 'Все документы' },
    { id: 'document', label: 'Документы' },
    { id: 'report', label: 'Отчёты' }
  ]
} as const;
