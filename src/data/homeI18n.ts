import { homeCopy, ui } from './copy';

/**
 * Локализация главной страницы без отдельных URL.
 *
 * Русский остаётся серверным языком разметки и единственной индексируемой
 * версией: он приходит в HTML и работает без JavaScript. Казахский и
 * английский подставляются на клиенте как перекрытия по ключам, поэтому
 * русские строки здесь не дублируются — их снимает сам скрипт из уже
 * отрендеренной разметки.
 *
 * Провенанс значений:
 * - `reuse(...)` — строка уже существовала в `src/data/copy.ts` с точно таким
 *   же русским источником, на ней работают маршруты `/kz/` и `/en/`;
 * - `pair(...)` — перевод текущего текста главной, выполненный для этой
 *   страницы, потому что в `copy.ts` совпадающего русского источника нет.
 *
 * Телефон, email и почтовый индекс языку не подчиняются и в словарь не входят.
 * Юридический адрес локализован по формулировкам, согласованным владельцем:
 * состав данных не меняется, переводится только их обёртка.
 */

export type HomeLocale = 'ru' | 'kk' | 'en';

/** Ключ в localStorage. Домен один, поэтому префикс проекта обязателен. */
export const langStorageKey = 'jaeu:home-lang';

export const homeLocales = [
  { id: 'ru', code: 'RU', lang: 'ru' },
  { id: 'kk', code: 'KZ', lang: 'kk' },
  { id: 'en', code: 'EN', lang: 'en' }
] as const satisfies readonly { id: HomeLocale; code: string; lang: string }[];

interface Translation {
  kk: string;
  en: string;
}

const pair = (kk: string, en: string): Translation => ({ kk, en });

/** `copy.ts` использует код локали `kz`; в разметке нужен корректный `kk`. */
const reuse = (kk: string, en: string): Translation => ({ kk, en });

export const homeTranslations = {
  // ---------- Метаданные ----------
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығы — Еуразиялық экономикалық одақтың зергерлік саласын біріктіру',
    'Association of Jewellers of the EAEU — uniting the jewellery industry of the Eurasian Economic Union'
  ),
  'meta.description': pair(
    'Еуразиялық экономикалық одақ зергерлер қауымдастығы ЕАЭО елдерінің зергерлік бизнесін біріктіреді: салалық диалог, сараптама, мүшелерді қолдау және серіктестік.',
    'The Association of Jewellers of the Eurasian Economic Union brings together the jewellery business of the EAEU countries: industry dialogue, expertise, member support and partnerships.'
  ),

  // ---------- Общие элементы интерфейса ----------
  'ui.skip': reuse(ui.kz.skip, ui.en.skip),
  'ui.navLabel': reuse(ui.kz.navLabel, ui.en.navLabel),
  'ui.navLabelMobile': pair('Мобильді навигация', 'Mobile navigation'),
  'ui.langLabel': reuse(ui.kz.langLabel, ui.en.langLabel),
  'ui.menuOpen': reuse(ui.kz.menuOpen, ui.en.menuOpen),
  'ui.menuClose': reuse(ui.kz.menuClose, ui.en.menuClose),
  'ui.readMore': reuse(ui.kz.readMore, ui.en.readMore),
  'ui.becomeMember': reuse(homeCopy.kz.ctaTitle, homeCopy.en.ctaTitle),
  'ui.lightboxClose': pair('Қарауды жабу', 'Close the viewer'),
  'ui.orgShortName': reuse(ui.kz.brandSub, ui.en.brandSub),
  'ui.logoAria': pair(
    'ЕАЭО зергерлер қауымдастығы — басты бетке',
    'Association of Jewellers of the EAEU — to the homepage'
  ),
  'ui.logoAlt': pair(
    'Еуразиялық экономикалық одақ зергерлер қауымдастығы',
    'Association of Jewellers of the Eurasian Economic Union'
  ),

  // ---------- Навигация: шапка, мобильное меню, подвал ----------
  'nav.about': reuse(ui.kz.nav.about, ui.en.nav.about),
  'nav.activities': reuse(ui.kz.nav.activities, ui.en.nav.activities),
  'nav.experts': reuse(ui.kz.nav.experts, ui.en.nav.experts),
  'nav.membership': reuse(ui.kz.nav.membership, ui.en.nav.membership),
  'nav.knowledge': reuse(ui.kz.nav.knowledge, ui.en.nav.knowledge),
  'nav.news': reuse(ui.kz.nav.news, ui.en.nav.news),
  'nav.documents': reuse(ui.kz.nav.documents, ui.en.nav.documents),
  'nav.reports': reuse(ui.kz.nav.reports, ui.en.nav.reports),
  'nav.contacts': reuse(ui.kz.nav.contacts, ui.en.nav.contacts),

  // ---------- Hero ----------
  'hero.eyebrow': reuse(ui.kz.brandSub, ui.en.brandSub),
  'hero.h1': reuse(homeCopy.kz.h1, homeCopy.en.h1),
  'hero.lead': pair(
    'Еуразиялық экономикалық одақ аумағында зергерлік бизнестің мүддесін білдіретін және жауапты зергерлер қоғамдастығын қалыптастыратын мемлекеттік емес коммерциялық емес ұйым.',
    'A non-governmental non-profit organisation that represents the interests of the jewellery business across the Eurasian Economic Union and builds a community of responsible jewellers.'
  ),
  'hero.secondaryCta': reuse(homeCopy.kz.aboutActivities, homeCopy.en.aboutActivities),
  'hero.imageAlt': pair(
    'Зергерлік сала өкілдері конференц-залдағы дөңгелек үстелде салалық құжаттарды талқылап отыр',
    'Representatives of the jewellery industry discussing industry documents at a round table in a conference hall'
  ),

  // ---------- Trust-bar ----------
  'trust.0': reuse(homeCopy.kz.trust[0], homeCopy.en.trust[0]),
  /*
    Казахская подпись совпадает с маршрутом /kz/. Английская сокращена
    относительно /en/: полная формулировка переносилась на две строки и
    ломала ровный ритм trust-bar.
  */
  'trust.1': pair(homeCopy.kz.trust[1], 'Industry dialogue'),
  'trust.2': reuse(homeCopy.kz.trust[2], homeCopy.en.trust[2]),

  // ---------- Об Ассоциации ----------
  'about.h2': reuse(homeCopy.kz.aboutTitle, homeCopy.en.aboutTitle),
  'about.lead': pair(
    'Еуразиялық экономикалық одақ зергерлер қауымдастығы — ЕАЭО аумағында зергерлік бизнестің мүддесін білдіретін мемлекеттік емес коммерциялық емес ұйым.',
    'The Association of Jewellers of the Eurasian Economic Union is a non-governmental non-profit organisation representing the interests of the jewellery business across the EAEU.'
  ),
  'about.text': pair(
    'Біздің мақсатымыз — ЕАЭО мемлекеттеріндегі зергерлік бизнес қатысушыларының мүддесін қорғау үшін тиімді және сындарлы алаң құру, сондай-ақ қатысушылары бизнесті жауапкершілікпен жүргізетін, әділ бәсеке қағидаларын ұстанатын және өз беделін бағалайтын іскерлік ортаны дамыту.',
    'Our aim is to create an effective and constructive platform for protecting the interests of jewellery business participants in the EAEU states, and to develop a business environment whose participants conduct business responsibly, follow the rules of fair competition and value their reputation.'
  ),
  'about.registered': pair('2016 жылғы 9 қыркүйекте тіркелген', 'Registered on 9 September 2016'),
  'about.link': reuse(homeCopy.kz.aboutLink, homeCopy.en.aboutLink),
  'about.points.0.title': pair('Мүдделерді білдіру', 'Representing interests'),
  'about.points.0.text': pair(
    'Зергерлік бизнес қатысушылары, мемлекеттік органдар және ұлттан жоғары ұйымдар арасында диалог құрамыз.',
    'We build dialogue between jewellery business participants, government authorities and supranational organisations.'
  ),
  'about.points.1.title': pair('Бірыңғай ашық нарық', 'A single open market'),
  'about.points.1.text': pair(
    'ЕАЭО-ға қатысушы мемлекеттер арасында қымбат металдар мен тастардың бірыңғай ашық нарығын құруға жәрдемдесеміз.',
    'We support the creation of a single open market for precious metals and stones between the EAEU member states.'
  ),
  'about.points.2.title': pair('Жауапты іскерлік орта', 'A responsible business environment'),
  'about.points.2.text': pair(
    'Нарық қатысушылары ортақ, түсінікті және ашық қағидалар бойынша жұмыс істейтін ортаны дамытамыз.',
    'We develop an environment in which market participants operate under common, clear and transparent rules.'
  ),
  'about.imageAlt': pair(
    'Салалық құжаттар бумасының жанындағы таңбалары бар қымбат металл құймасы',
    'A hallmarked precious metal ingot beside a stack of industry documents'
  ),
  'about.portraitAlt': pair(
    'Саланың төрт маманы келіссөз бөлмесіндегі үстелде басып шығарылған құжаттарды бірге зерделеп отыр',
    'Four industry specialists reviewing printed documents together at a table in a meeting room'
  ),

  // ---------- Отраслевой контур ----------
  'contour.eyebrow': pair('Институционалдық өзара іс-қимыл', 'Institutional engagement'),
  'contour.h2': pair('Салалық контур', 'The industry framework'),
  'contour.text': pair(
    'Қауымдастықтың жұмысы қымбат металдар мен қымбат тастар нарығын реттеуді айқындайтын институттар мен ведомстволармен өзара іс-қимылда құрылады. Қауымдастық материалдарындағы инфографика осы өзара іс-қимылдың институционалдық контурын көрсетеді.',
    'The work of the Association is built on engagement with the institutions and authorities that shape the regulation of the market for precious metals and precious stones. An infographic from the Association’s materials shows the institutional framework of this engagement.'
  ),
  'contour.link': pair('Толық өлшемде ашу', 'Open at full size'),
  'contour.caption': pair(
    'Қауымдастық материалдарынан алынған инфографика',
    'Infographic from the Association’s materials'
  ),
  'contour.figureAria': pair(
    'Институционалдық контур инфографикасын толық өлшемде ашу',
    'Open the institutional framework infographic at full size'
  ),
  'contour.imageAlt': pair(
    'ЕАЭО зергерлер қауымдастығының институционалдық контур инфографикасы: ортада Қауымдастық логотипі және онымен байланысты ведомстволар мен институттар',
    'Infographic of the institutional framework of the Association of Jewellers of the EAEU: the Association’s logo at the centre with the related authorities and institutions'
  ),
  'contour.contextAlt': pair(
    'Маманның қолдары құжаттар жатқан жұмыс үстелінің үстінде лупа арқылы тасы бар зергерлік жүзікті қарап тұр',
    'A specialist’s hands examining a gemstone ring through a loupe above a desk with documents'
  ),

  // ---------- Направления деятельности ----------
  'directions.h2': reuse(homeCopy.kz.activitiesTitle, homeCopy.en.activitiesTitle),
  'directions.lead': pair(
    'Қауымдастық жұмысының негізгі бағыттары',
    'The Association’s key areas of work'
  ),
  'directions.items.0.title': pair('Салалық диалогты дамыту', 'Developing industry dialogue'),
  'directions.items.0.text': pair(
    'Зергерлік бизнес қатысушылары, мемлекеттік органдар, ұлттан жоғары ұйымдар және басқа бірлестіктер арасында ашық диалог құрамыз және оны қолдаймыз.',
    'We create and maintain open dialogue between jewellery business participants, government authorities, supranational organisations and other associations.'
  ),
  'directions.items.1.title': pair(
    'Сараптамалық және консультациялық жұмыс',
    'Expert and advisory work'
  ),
  'directions.items.1.text': pair(
    'Нормативтік құқықтық актілердің жобаларын және реттеу саясатының консультативтік құжаттарын қараймыз, заңнама мен стандарттар мәселелері бойынша консультация береміз.',
    'We review draft regulatory legal acts and consultative documents on regulatory policy, and advise on legislation and standards.'
  ),
  'directions.items.2.title': pair(
    'Қауымдастық мүшелерін қолдау',
    'Support for members of the Association'
  ),
  'directions.items.2.text': pair(
    'Зергерлік бизнес мәселелері бойынша қолдау және консультация көрсетеміз, оның ішінде қымбат тастарды бағалау үшін геммолог қызметін ұсынамыз.',
    'We provide support and advice on jewellery business matters, including gemmologist services for the appraisal of precious stones.'
  ),
  'directions.items.3.title': pair(
    'Серіктестік және халықаралық ынтымақтастық',
    'Partnerships and international cooperation'
  ),
  'directions.items.3.text': pair(
    'ЕАЭО ішінде және одан тыс жерлерде қымбат металдар мен тастар нарығына қатысушылардың бірлестіктерімен өзара іс-қимыл жасаймыз, жаңа серіктестер тартамыз.',
    'We engage with associations of participants in the precious metals and stones market inside and beyond the EAEU, and attract new partners.'
  ),
  'directions.reviewAlt': pair(
    'Екі маман үстел басында басып шығарылған нормативтік құжатты бет-беттеп қарап отыр',
    'Two specialists going through a printed regulatory document page by page at a table'
  ),
  'directions.craftAlt': pair(
    'Шебердің қолдары верстактағы өлшеу құралымен зергерлік жүзіктің өлшемін тексеріп тұр',
    'A craftsman’s hands checking the size of a ring against a measuring tool on a workbench'
  ),

  // ---------- Профессиональное сообщество ----------
  'community.eyebrow': reuse(homeCopy.kz.trust[0], homeCopy.en.trust[0]),
  'community.h2': pair(
    'Ортақ мақсат біріктірген қоғамдастық',
    'A community united by a common goal'
  ),
  'community.text': pair(
    'Қауымдастық бөлшек сауда желілерін, зергерлік бұйым өндірушілерін және салалық бірлестіктерді біріктіреді. Қоғамдастықтың құрамы Қауымдастық материалдарындағы схемада берілген.',
    'The Association brings together retail chains, jewellery manufacturers and industry associations. The composition of the community is shown in a diagram from the Association’s materials.'
  ),
  'community.cta': pair('Схеманы ашу', 'Open the diagram'),
  'community.caption': pair(
    'Қауымдастық материалдарынан алынған инфографика',
    'Infographic from the Association’s materials'
  ),
  'community.figureAria': pair(
    'Қауымдастық құрамының схемасын толық өлшемде ашу',
    'Open the diagram of the Association’s composition at full size'
  ),
  'community.imageAlt': pair(
    'ЕАЭО зергерлер қауымдастығының құрамы туралы инфографика: бөлшек сауда желілері, өндірушілер және салалық бірлестіктер',
    'Infographic of the composition of the Association of Jewellers of the EAEU: retail chains, manufacturers and industry associations'
  ),
  'community.band.title': pair('Сараптама және бағалау', 'Expertise and appraisal'),
  'community.band.text': pair(
    'Қауымдастық геммолог қызметін ұсынады: ол қымбат тасты бағалайды, оның табиғи немесе жасанды шығу тегін және өңделу фактісін анықтайды.',
    'The Association provides gemmologist services: appraising a precious stone, determining whether it is of natural or synthetic origin, and identifying whether it has been treated.'
  ),
  'community.band.imageAlt': pair(
    'Үш маман зергерлік бұйымды зерделеп отыр: зергер лупасы, өлшеу құралы және жұмыс жазбалары',
    'Three specialists examining a piece of jewellery: a jeweller’s loupe, a measuring tool and working notes'
  ),

  // ---------- CTA членства ----------
  'membership.h2': pair(
    'Кәсіби қоғамдастықтың бір бөлігі болыңыз',
    'Become part of the professional community'
  ),
  'membership.text': pair(
    'Қауымдастыққа мүшелікке қабылдау тұрақты негізде, өтініш беру мерзімі шектелмей жүзеге асырылады.',
    'Admission to membership of the Association is open on an ongoing basis, with no deadline for submitting applications.'
  ),

  // ---------- Новости ----------
  'news.h2': pair('Жаңалықтар мен материалдар', 'News and materials'),
  'news.allLink': reuse(ui.kz.allNews, ui.en.allNews),
  'news.featured.dateLabel': pair('2025 жылғы 5 маусым', '5 June 2025'),
  'news.featured.title': pair(
    'Қазақстан зергерлерінің Бірінші Конгресі: ынтымақтастық туралы екі меморандумға қол қойылды',
    'The First Congress of Jewellers of Kazakhstan: two memoranda of cooperation signed'
  ),
  'news.featured.text': pair(
    'Қауымдастық Қазақстан зергерлерінің Бірінші Конгресіне қатысты және іс-шара қорытындысы бойынша аффинаж және стандарттау саласындағы, сондай-ақ зергерлік айналымды заңдастыру мәселелері бойынша ынтымақтастық туралы меморандумдарға қол қойды.',
    'The Association took part in the First Congress of Jewellers of Kazakhstan and, following the event, signed memoranda of cooperation on refining and standardisation, as well as on the legalisation of jewellery circulation.'
  ),
  'news.featured.imageAlt': pair(
    'Салалық кеңеске қатысушылар дөңгелек үстелде құжаттарды талқылап отыр',
    'Participants in an industry meeting discussing documents at a round table'
  ),
  'news.items.0.dateLabel': pair('2025 жылғы 9 шілде', '9 July 2025'),
  'news.items.0.title': pair(
    'Бұйымдарды таңбалау бойынша реттеушілік әсерді талдауды қоғамдық талқылау',
    'Public consultation on the regulatory impact assessment for the marking of jewellery items'
  ),
  'news.items.0.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'news.items.1.dateLabel': pair('2025 жылғы 2 сәуір', '2 April 2025'),
  'news.items.1.title': pair(
    'Саланы мемлекеттік реттеуді жетілдіру жөніндегі сараптамалық кеңес',
    'Expert meeting on improving state regulation of the industry'
  ),
  'news.items.1.imageAlt': pair(
    'Қатысушылар мен таратылатын материалдар қойылған салалық іс-шара залы',
    'A hall at an industry event with participants and handout materials'
  ),

  // ---------- Документы ----------
  'documents.h2': pair('Құжаттар мен материалдар', 'Documents and materials'),
  'documents.allLink': reuse(ui.kz.allDocuments, ui.en.allDocuments),
  'documents.hint': pair('Құжаттар бөлімі', 'Documents section'),
  'documents.items.0': pair(
    'ЕАЭО зергерлер қауымдастығына кіру тәртібі',
    'Procedure for joining the Association of Jewellers of the EAEU'
  ),
  'documents.items.1': pair(
    'Мүшелік жарналарды төлеу туралы ереже',
    'Regulations on the payment of membership fees'
  ),
  'documents.items.2': pair(
    'ЕАЭО зергерлік саласының Сараптамалық-консультативтік кеңесі туралы ереже',
    'Regulations on the Expert and Advisory Council of the jewellery industry of the EAEU'
  ),
  'documents.items.3': pair('Құпиялылық саясаты', 'Privacy policy'),

  // ---------- Частые вопросы ----------
  'faq.h2': pair('Жиі қойылатын сұрақтар', 'Frequently asked questions'),
  'faq.lead': pair(
    'Қауымдастыққа кіру тәртібі туралы',
    'About the procedure for joining the Association'
  ),
  'faq.items.0.q': pair(
    'Кім Қауымдастық мүшесі бола алады?',
    'Who can become a member of the Association?'
  ),
  'faq.items.0.a': pair(
    'Кіру құқығына қымбат металдарды, қымбат тастарды және олардан жасалған бұйымдарды өндіп алу, дайындау, қайта өңдеу, айналымға шығару, сату, экспорттау, импорттау және сараптау саласында қызмет ететін заңды тұлғалар мен жеке кәсіпкерлер, олар Қауымдастық Жарғысы мен оның ішкі құжаттарының талаптарына сәйкес келген жағдайда, ие болады.',
    'Legal entities and sole proprietors engaged in the extraction, production, processing, circulation, sale, export, import and examination of precious metals, precious stones and articles made from them are eligible to join, provided they meet the requirements of the Association’s Charter and its internal documents.'
  ),
  'faq.items.1.q': pair(
    'Кіру туралы өтінішті қалай беруге болады?',
    'How do I submit an application to join?'
  ),
  'faq.items.1.a': pair(
    'Мүдделі тұлға Қауымдастықтың ресми мекенжайына еркін нысанда жазбаша өтініш жібереді. Өтінішке тіркеу құжаттарының көшірмелері, қызметтің негізгі бағыттары туралы қысқаша ақпарат және мотивациялық хат қоса беріледі.',
    'An interested party sends a written application in free form to the Association’s official address. The application is accompanied by copies of registration documents, brief information on the main areas of activity and a motivation letter.'
  ),
  'faq.items.2.q': pair(
    'Өтініш қанша уақыт қаралады?',
    'How long does it take to review an application?'
  ),
  'faq.items.2.a': pair(
    'Қарау мерзімі құжаттардың толық жинағы келіп түскен күннен бастап он жұмыс күнінен аспайды. Қабылдау немесе қабылдамау туралы шешімді Қауымдастықтың Басқармасы қабылдайды.',
    'The review takes no more than ten working days from the date the complete set of documents is received. The decision to admit or to decline is taken by the Board of the Association.'
  ),
  'faq.items.3.q': pair(
    'Кіру жарнасының мөлшері қандай?',
    'What is the amount of the entrance fee?'
  ),
  'faq.items.3.a': pair(
    'Кіру жарнасының мөлшерін Қауымдастықтың Басқармасы өтініш берушінің қызметінің ауқымы мен ерекшеліктерін, сондай-ақ шешім қабылдау үшін маңызы бар өзге де мән-жайларды ескере отырып айқындайды.',
    'The amount of the entrance fee is determined by the Board of the Association, taking into account the scale and specific nature of the applicant’s activity, as well as other circumstances relevant to the decision.'
  ),
  'faq.items.4.q': pair(
    'Мүшелік қандай мүмкіндіктер береді?',
    'What opportunities does membership provide?'
  ),
  'faq.items.4.a': pair(
    'Қауымдастық мүшесі Жарғыда көзделген құқықтар мен міндеттерге ие болады, оның ішінде Қауымдастықтың қызметіне, оның органдарының, комиссияларының, жұмыс топтарының, сараптамалық және консультативтік құрылымдарының жұмысына, сондай-ақ бірлескен жобалар мен бастамаларға қатысу құқығы.',
    'A member of the Association acquires the rights and obligations set out in the Charter, including the right to take part in the Association’s activities, in the work of its bodies, commissions, working groups, expert and advisory structures, and in joint projects and initiatives.'
  ),

  // ---------- Финальный CTA ----------
  'finalCta.h2': pair('Кәсіби қоғамдастыққа қосылыңыз', 'Join the professional community'),
  'finalCta.text': pair(
    'Кіру туралы өтініштер тұрақты негізде қабылданады. Қауымдастық жұмысына қатысуды талқылау үшін бізге жазыңыз.',
    'Applications to join are accepted on an ongoing basis. Write to us to discuss taking part in the Association’s work.'
  ),
  'finalCta.secondary': pair('Қауымдастыққа жазу', 'Write to the Association'),

  // ---------- Подвал ----------
  'footer.blurb': pair(
    'Еуразиялық экономикалық одақ аумағында зергерлік бизнестің мүддесін білдіретін мемлекеттік емес коммерциялық емес ұйым.',
    'A non-governmental non-profit organisation representing the interests of the jewellery business across the Eurasian Economic Union.'
  ),
  'footer.columns.0.heading': pair('Қауымдастық', 'The Association'),
  'footer.columns.1.heading': pair('Қауымдастық мүшелеріне', 'For members'),
  'footer.columns.2.heading': pair('Материалдар', 'Materials'),
  'footer.emailLabel': pair('Электрондық пошта', 'Email'),
  'footer.phoneLabel': pair('Телефон', 'Telephone'),
  'footer.addressLabel': pair('Мекенжай', 'Address'),
  'footer.addressValue': pair(
    'Қазақстан Республикасы, 150010, Солтүстік Қазақстан облысы, Петропавл қ., Интернациональная көшесі, 57',
    'Republic of Kazakhstan, 150010, North Kazakhstan Region, Petropavl, Internatsionalnaya Street, 57'
  ),
  'footer.rights': reuse(ui.kz.footer.rights, ui.en.footer.rights)
} as const satisfies Record<string, Translation>;

export type HomeI18nKey = keyof typeof homeTranslations;

/**
 * Полезная нагрузка для клиента: только перекрытия. Русский не передаётся,
 * потому что уже присутствует в разметке.
 */
export const homeI18nPayload = {
  storageKey: langStorageKey,
  locales: homeLocales.map((item) => ({ id: item.id, lang: item.lang })),
  overrides: {
    kk: Object.fromEntries(
      Object.entries(homeTranslations).map(([key, value]) => [key, value.kk])
    ),
    en: Object.fromEntries(
      Object.entries(homeTranslations).map(([key, value]) => [key, value.en])
    )
  }
} as const;
