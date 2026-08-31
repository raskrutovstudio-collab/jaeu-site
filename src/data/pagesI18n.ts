import { org } from './home';
import { gmailCompose } from './mail';

/**
 * Локализация внутренних страниц без отдельных URL.
 *
 * Русский текст остаётся серверной разметкой и единственной индексируемой
 * версией: он приходит в HTML и работает без JavaScript. Казахский и
 * английский подставляются на клиенте как перекрытия по ключам `data-i18n`,
 * поэтому русские строки здесь не дублируются.
 *
 * Ключи повторяют путь значения в `data/pages.ts` (`hero.lead`,
 * `faq.items.0.q`), поэтому разметка, контент и словарь сверяются механически.
 * Ключи шапки, подвала и навигации общие для всех страниц и живут в
 * `data/homeI18n.ts`.
 *
 * Что языку не подчиняется и в словарь не входит:
 * - адрес электронной почты, телефон, БИН и почтовый индекс;
 * - полное зарегистрированное наименование Ассоциации: это собственное
 *   наименование юридического лица, его перевод был бы новой юридической
 *   трактовкой, поэтому оно остаётся в исходном виде;
 * - технические значения `datetime`, `href` внутренних ссылок и идентификаторы
 *   якорей.
 *
 * Юридический адрес переводится в той же форме, что уже утверждена на главной
 * (`footer.addressValue`): состав данных не меняется, переводится обёртка.
 */

interface Translation {
  kk: string;
  en: string;
}

const pair = (kk: string, en: string): Translation => ({ kk, en });

/**
 * Тема письма — часть видимого действия, поэтому переводится вместе с
 * подписью кнопки. Адрес и структура Gmail-ссылки не меняются.
 */
const mailto = (subject: string): string => gmailCompose(subject);

const mailtoPair = (kk: string, en: string): Translation => pair(mailto(kk), mailto(en));

/** Одна и та же формулировка встречается на нескольких страницах. */
const shared = {
  becomeMember: pair('Қауымдастық мүшесі болу', 'Become a member of the Association'),
  writeToAssociation: pair('Қауымдастыққа жазу', 'Write to the Association'),
  associationDocuments: pair('Қауымдастық құжаттары', 'Association documents'),
  writeToEmail: pair(`${org.email} мекенжайына жазу`, `Write to ${org.email}`),
  membershipTerms: pair('Мүшелік шарттары', 'Membership terms'),
  expertCouncil: pair('Сарапшылар кеңесі', 'Expert Council'),
  reporting: pair('Есептер', 'Reports'),
  documents: pair('Құжаттар', 'Documents'),
  newsAndEvents: pair('Жаңалықтар мен оқиғалар', 'News and events'),
  fullName: pair('Толық атауы', 'Full name'),
  bin: pair('БСН', 'BIN'),
  registrationDate: pair('Тіркелген күні', 'Date of registration'),
  registeredOn: pair('2016 жылғы 9 қыркүйек', '9 September 2016'),
  address: pair('Мекенжай', 'Address'),
  addressValue: pair(
    'Қазақстан Республикасы, 150010, Солтүстік Қазақстан облысы, Петропавл қ., Интернациональная көшесі, 57',
    'Republic of Kazakhstan, 150010, North Kazakhstan Region, Petropavl, Internatsionalnaya Street, 57'
  )
} as const;

export const aboutI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығы туралы — мәртебесі, мақсаты және саладағы рөлі',
    'About the Association of Jewellers of the EAEU — status, purpose and role in the industry'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығы — Еуразиялық одақ мемлекеттеріндегі зергерлік бизнестің мүддесін білдіретін мемлекеттік емес коммерциялық емес ұйым.',
    'The Association of Jewellers of the EAEU is a non-governmental non-profit organisation representing the interests of the jewellery business in the states of the Eurasian Union.'
  ),
  crumb: pair('Қауымдастық туралы', 'About the Association'),
  'hero.eyebrow': pair('ЕАЭО зергерлер қауымдастығы', 'Association of Jewellers of the EAEU'),
  'hero.h1': pair('Қауымдастық туралы', 'About the Association'),
  'hero.lead': pair(
    'Еуразиялық экономикалық одақ мемлекеттерінің аумағында зергерлік бизнестің мүддесін білдіретін жеке кәсіпкерлер мен заңды тұлғалардың бірлестігі.',
    'An association of sole proprietors and legal entities that represents the interests of the jewellery business across the states of the Eurasian Economic Union.'
  ),
  'hero.note': pair(
    'Қауымдастық — мемлекеттік емес коммерциялық емес ұйым. Ол реттеуші қызметін атқармайды: оның міндеті — салалық мәселелерді жинап, кәсіби талқылауға жеткізу.',
    'The Association is a non-governmental non-profit organisation. It does not act as a regulator: its task is to collect industry questions and bring them to professional discussion.'
  ),
  'hero.imageAlt': pair(
    'Жұмыс үстеліндегі салалық баспа материалдары, металл үлгісі және зергер лупасы',
    'Printed industry materials, a metal sample and a jeweller’s loupe on a desk'
  ),
  'purpose.h2': pair('Қауымдастық не үшін бар', 'Why the Association exists'),
  'purpose.paragraphs.0': pair(
    'Еуразия Экономикалық одағының зергерлер қауымдастығы – ЕАЭО аумағында зергерлік бизнестің мүдделерін білдіретін мемлекеттік емес, коммерциялық емес ұйым. Біз ЕАЭО аумағында зергерлік істі дамытуға немқұрайлы қарамайтын, осы күрделі шаруаға өзінің жеке үлесін қосуға дайын жауапты зергерлер қауымдастығын құрып жатырмыз. Біз заңнаманы жетілдіру, серіктестерді іздеу мақсатында тәжірибелік қадамдарды уақтылы жасауға; ЕАЭО және шетелдік елдердің зергерлік секторын дамытудағы өзекті тенденцияларды айқындауға және енгізуге; Қауымдастық бастамаларын талқылау үшін билік өкілдерімен диалог жүргізуге ұмтыламыз.',
    'The Jewellers Association of the Eurasian Economic Union is a non-governmental, non-profit organization representing the interests of the jewelry business within the EAEU. We are building a community of responsible jewelers who care about the development of the industry in the EAEU and are willing to contribute personally to this challenging endeavor. We aim to take timely practical steps to improve legislation, seek out partnerships, identify and implement current development trends within the jewelry sector in both the EAEU and abroad, and establish dialogue with government authorities to discuss the Association’s initiatives.'
  ),
  'purpose.paragraphs.1': pair(
    'Біздің мақсат – ЕАЭО мемлекеттерінің аумағында зергерлік бизнеске қатысушылардың мүдделерін қорғауға арналған тиімді және құрылымды платформа жасау, сондай-ақ қатысушылары бизнес жүргізуге жауапкершілікпен қарайтын, әділетті бәсекелестік ережелерін ұстанатын және өз беделіне қамқорлықпен қарайтын іскерлік ортаны дамыту. Оған қоса біз бағалы металлдар мен бағалы тастар саласында қоғамдық бақылау жүргізуге арналған тиімді алаң жасауға бағдар ұстап отырмыз.',
    'Our goal is to create an effective and constructive platform for protecting the interests of jewelry business participants across EAEU member states, as well as to develop a business environment rooted in responsibility, fair competition, and strong reputations. We also aim to establish an efficient platform for public oversight in the field of precious metals and gemstones.'
  ),
  'purpose.points.0.title': pair('Ортақ алаң', 'A shared platform'),
  'purpose.points.0.text': pair(
    'Салалық мәселелер қоғамдастықта талқыланады, әрбір компания оларды жалғыз шешпейді.',
    'Industry questions are discussed by the community rather than resolved by each company on its own.'
  ),
  'purpose.points.1.title': pair('Түсінікті қағидалар', 'Clear rules'),
  'purpose.points.1.text': pair(
    'Қауымдастық нарық қатысушылары үшін бірыңғай стандарттар мен ұсынымдарды әзірлеуге және енгізуге жәрдемдеседі.',
    'The Association supports the development and introduction of common standards and recommendations for market participants.'
  ),
  'purpose.points.2.title': pair('Жауапты практика', 'Responsible practice'),
  'purpose.points.2.text': pair(
    'Қоғамдастық әділ бәсеке қағидаларын ұстанатын және беделін бағалайтындардан құралады.',
    'The community is formed of those who follow the rules of fair competition and value their reputation.'
  ),
  'role.h2': pair('Кәсіби қоғамдастықтағы рөлі', 'Role in the professional community'),
  'role.lead': pair('Біздің негізгі қызмет бағыттарымыз:', 'Our core activities:'),
  'role.pillars.0.title': pair('Диалог алаңын ұйымдастыру', 'Establishing a dialogue platform'),
  'role.pillars.0.text': pair(
    'Біз зергерлік бизнеске қатысушылар, мемлекеттік органдар, жергілікті өзін-өзі басқару органдары, ұлттық органдардан жоғары тұратын ұйымдар мен басқа коммерциялық және коммерциялық емес құрылымдардың арасында ашық диалог жасау және қолдау бағытында белсенді жұмыс істеп келеміз. Біздің мақсат – барлық мүдделі тараптар арасында тиімді өзара әрекеттесу және тәжірибе алмасу жолдарын қамтамасыз ету. Осылайша, Қауымдастық басқа мүдделі қатысушылармен бірлесе отырып, Қазақстан Республикасында зергерлік бұйымдарды таңбалау жүйесін енгізу үрдісін оны осындай жүйелерді шетелде қолдану тәжірибесін ескере отырып толықтыру қажеттігін негізге алып, кейінге қалдыра алды.',
    'We actively work to build and maintain open dialogue between jewelry business participants, government agencies, local authorities, supranational organizations, and other commercial and non-profit organizations. Our task is to ensure effective interaction and exchange of experience between all stakeholders. For example, the Association, together with other stakeholders, successfully postponed the implementation of jewelry marking systems in Kazakhstan to allow for adjustments based on international best practices.'
  ),
  'role.pillars.1.title': pair(
    'Бірыңғай ашық нарықты ұйымдастыруға көмек',
    'Assistance in organizing a unified open market'
  ),
  'role.pillars.1.text': pair(
    'Біздің Қауымдастықтың негізгі мақсаттарының бірі – ЕАЭО қатысушы мемлекеттердің арасында зергерлік бизнеске арналған бірыңғай ашық нарықты жасауға көмек көрсету. Біз кедергілерді алып тастап, тауарлар мен қызметтерді еркін алмасуға арналған жағдай жасауға тырысамыз, ол саланы дамытуға және бизнеске арналған мүмкіндіктерді арттыруға септігін тигізеді. Ол үшін біз ЕАЭО мүше мемлекеттердің ұлттық реттеуші органдарымен де, Еуразия экономикалық комиссиясымен де, сондай-ақ бизнес көлеміне тәуелсіз түрде нарыққа қатысушы зергерлермен де тікелей өзара әрекеттесудеміз.',
    'One of our key goals is to promote the creation of a unified open market for the jewelry business among EAEU member states. We strive to remove barriers and enable the free exchange of goods and services, which boosts industry growth and business opportunities. For this purpose, we engage with both the national regulators of the EAEU member states and the Eurasian Economic Commission, as well as directly with jewelers – market participants, regardless of the size of their business.'
  ),
  'role.pillars.2.title': pair('Құқықтық сараптама', 'Legal expertise'),
  'role.pillars.2.text': pair(
    '2021 жылдың наурыз айынан бастап Қауымдастық Солтүстік Қазақстан облысы Әкімдігінің жанындағы Кәсіпкерлік мәселелері жөніндегі сарапшылар кеңесі мүшелерінің қатарына кірген болатын. Сарапшылар кеңесіндегі жұмыс аясында Қауымдастық кәсіпкерлік мүдделерін қозғайтын нормативтік-құқықтық актілердің жобаларын, мемлекеттік жоспарлау жүйелері саласындағы құқықтық актілердің жобаларын, Қазақстан Республикасының халықаралық келісімшарт жобаларын, сондай-ақ Қазақстан Республикасы қатысуды жоспарлап отырған халықаралық келісімшарттарды қарастырумен айналысады. Оған қоса Қауымдастық мемлекеттік органдар әзірлеген және ұсынған реттеушілік саясатқа қатысты консультативтік құжаттарды оларды бұқаралық ақпарат құралдарында, оның ішінде мемлекеттік органдардың ресми интернет-ресурстарында міндетті жариялаудан (таратудан) кейін зерделеп отырады.',
    'The Association has been a member of the Expert Council on Entrepreneurship under the Akimat of the North Kazakhstan Region since March 2021. As part of its work in the Expert Council, the Association reviews draft regulatory legal acts, draft legal acts in the field of the state planning system, draft international treaties of the Republic of Kazakhstan, as well as international treaties to which the Republic of Kazakhstan intends to become a party, affecting the interests of entrepreneurship. The Association also studies advisory regulatory policy documents developed and submitted by government agencies after their mandatory publication (dissemination) in the media, including the official Internet resources of government agencies.'
  ),
  'role.pillars.3.title': pair(
    'Бағалы металлдар мен бағалы тастар нарығына қатысушылармен өзара әрекеттесу',
    'Cooperation with precious metals and gems market participants'
  ),
  'role.pillars.3.text': pair(
    'Қауымдастық ЕАЭО аумағында да, одан тыс жерлерде де бағалы металлдар мен бағалы тастар секторына қатысушылардың басқа бірлестіктерімен ауқымды түрде өзара әрекеттесуге дайын. Біз CIBJO, Зергерлер қауымдастығы, «Аффинажды зауыттар бірлестігі» қауымдастығы, Еділ-Вятка аймағының зергерлер гильдиясы, «Тау-Кен Алтын» ЖШС және басқа қауымдастықтармен белсенді қызметтес болып келеміз.',
    'The Association actively collaborates with other unions and associations in the precious metals and gemstones sector both within and outside the EAEU. Our partners include CIBJO, the Jewellers Association, Refining Plants Association, the Guild of Jewellers of the Volga-Vyatka Region, Tau-Ken Altyn LLP, and others.'
  ),
  'visual.asideTitle': pair('Күн тәртібін практика қалыптастырады', 'Practice shapes the agenda'),
  'visual.asideText': pair(
    'Қарауға арналған тақырыптар нарық қатысушыларынан келеді: бұйымдардың айналымына қойылатын жаңа талаптар, даулы нормалар, құқық қолдану мәселелері. Қауымдастық оларды жеке жағдайдан салалық мәселеге аударады.',
    'Topics for review come from market participants: new requirements for the circulation of goods, disputed provisions, questions of enforcement. The Association turns them from an individual situation into an industry question.'
  ),
  'visual.portraitAlt': pair(
    'Үш маман келіссөз бөлмесіндегі үстелде басып шығарылған құжаттарды талқылап отыр',
    'Three specialists discussing printed documents at a table in a meeting room'
  ),
  'visual.detailAlt': pair(
    'Қымбат металл құймасы және таңба бедері түсірілген жүзік ірі планда, жанында пинцет',
    'A precious metal ingot and a ring with hallmark impressions in close-up, with tweezers beside them'
  ),
  'visual.beltAlt': pair(
    'Мұрағат сөресіндегі салалық құжаттар салынған қалталар қатары',
    'A row of folders with industry documents on an archive shelf'
  ),
  'facts.h2': pair('Ресми мәліметтер', 'Official information'),
  'facts.note': pair(
    'Мәліметтер Қауымдастықтың құрылтай және презентациялық материалдары бойынша келтірілген.',
    'The information is given according to the founding and presentation materials of the Association.'
  ),
  'facts.items.0.term': shared.fullName,
  'facts.items.1.term': pair('Ұйымдық-құқықтық нысаны', 'Legal form'),
  'facts.items.1.value': pair(
    'Мемлекеттік емес коммерциялық емес ұйым — жеке кәсіпкерлер мен заңды тұлғалардың бірлестігі',
    'A non-governmental non-profit organisation — an association of sole proprietors and legal entities'
  ),
  'facts.items.2.term': shared.registrationDate,
  'facts.items.2.value': shared.registeredOn,
  'facts.items.3.term': shared.bin,
  'facts.items.4.term': shared.address,
  'facts.items.4.value': shared.addressValue,
  'faq.h2': pair('Жиі қойылатын сұрақтар', 'Frequently asked questions'),
  'faq.lead': pair(
    'Қауымдастықтың мәртебесі, жұмыс географиясы және басқару органдары туралы.',
    'About the status of the Association, the geography of its work and its governing bodies.'
  ),
  'faq.items.0.q': pair(
    'Қауымдастық мемлекеттік орган ба?',
    'Is the Association a government body?'
  ),
  'faq.items.0.a': pair(
    'Жоқ. Қауымдастық — мемлекеттік емес коммерциялық емес ұйым. Ол реттеуші қызметін атқармайды және сала үшін міндетті шешімдер қабылдамайды, зергерлік бизнес қатысушыларының мүддесін білдіреді және кәсіби диалогты қамтамасыз етеді.',
    'No. The Association is a non-governmental non-profit organisation. It does not act as a regulator and does not take decisions binding on the industry; it represents the interests of jewellery business participants and provides for professional dialogue.'
  ),
  'faq.items.1.q': pair(
    'Қауымдастықтың жұмысы қандай елдерге қатысты?',
    'Which countries does the work of the Association cover?'
  ),
  'faq.items.1.a': pair(
    'Қауымдастық Еуразиялық экономикалық одақ мемлекеттерінің аумағында зергерлік бизнестің мүддесін білдіреді. Ұйымның өзі Қазақстан Республикасында тіркелген.',
    'The Association represents the interests of the jewellery business across the states of the Eurasian Economic Union. The organisation itself is registered in the Republic of Kazakhstan.'
  ),
  'faq.items.2.q': pair(
    'Қауымдастықта шешімдерді кім қабылдайды?',
    'Who takes decisions in the Association?'
  ),
  'faq.items.2.a': pair(
    'Шешімдерді Қауымдастықтың органдары — мүшелердің Жалпы жиналысы және Басқарма қабылдайды. Олардың өкілеттіктері Жарғыда және Қауымдастықтың ішкі құжаттарында айқындалған.',
    'Decisions are taken by the bodies of the Association — the General Meeting of members and the Board. Their powers are defined by the Charter and the internal documents of the Association.'
  ),
  'faq.items.3.q': pair(
    'Қауымдастық нарық қатысушыларына немен көмектеседі?',
    'How does the Association help market participants?'
  ),
  'faq.items.3.a': pair(
    'Қауымдастық салалық талқылаулар ұйымдастырады, өз мүшелерін бейінді алаңдарда білдіреді, зергерлік бизнес, заңнама және стандарттар мәселелері бойынша консультация береді, сондай-ақ геммолог қызметін ұсынады.',
    'The Association organises industry discussions, represents its members at specialist forums, advises on jewellery business, legislation and standards, and provides gemmologist services.'
  ),
  'cta.h2': pair('Қауымдастыққа мүшелік', 'Membership of the Association'),
  'cta.text': pair(
    'Мүшелікке қабылдау тұрақты негізде, өтініш беру мерзімі шектелмей жүзеге асырылады. Қабылдау туралы шешімді Қауымдастықтың Басқармасы қабылдайды.',
    'Admission to membership is open on an ongoing basis, with no deadline for submitting applications. The decision to admit is taken by the Board of the Association.'
  ),
  'cta.primary.label': shared.becomeMember,
  'cta.secondary.label': shared.associationDocuments
} as const satisfies Record<string, Translation>;

export const activitiesI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығының қызметі — жұмыс бағыттары',
    'Activities of the Association of Jewellers of the EAEU — areas of work'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығының жұмыс бағыттары: салалық диалог, құжат жобаларының сараптамасы, мүшелерді қолдау, серіктестік және халықаралық ынтымақтастық.',
    'Areas of work of the Association of Jewellers of the EAEU: industry dialogue, review of draft documents, member support, partnerships and international cooperation.'
  ),
  crumb: pair('Қызмет', 'Activities'),
  'hero.eyebrow': pair('Жұмыс бағыттары', 'Areas of work'),
  'hero.h1': pair('Қызмет', 'Activities'),
  'hero.lead': pair(
    'Қауымдастықтың жұмысы тұрақты міндеттерден құралады: салалық мәселелерді талқылау, құжат жобаларын қарау, өз мүшелерін қолдау және серіктестер шеңберін кеңейту.',
    'The work of the Association consists of continuing tasks: discussing industry questions, reviewing draft documents, supporting its members and widening the circle of partners.'
  ),
  'hero.beltAlt': pair(
    'Жұмыс үстеліндегі құжаттары бар ашық қалта, зергер лупасы, жүзік, металл үлгісі және штангенциркуль',
    'An open folder of documents, a jeweller’s loupe, a ring, a metal sample and a caliper on a desk'
  ),
  'directions.h2': pair('Негізгі бағыттар', 'Main areas'),
  'directions.items.0.title': pair('Диалог алаңын ұйымдастыру', 'Establishing a dialogue platform'),
  'directions.items.0.text': pair(
    'Біз зергерлік бизнеске қатысушылар, мемлекеттік органдар, жергілікті өзін-өзі басқару органдары, ұлттық органдардан жоғары тұратын ұйымдар мен басқа коммерциялық және коммерциялық емес құрылымдардың арасында ашық диалог жасау және қолдау бағытында белсенді жұмыс істеп келеміз. Біздің мақсат – барлық мүдделі тараптар арасында тиімді өзара әрекеттесу және тәжірибе алмасу жолдарын қамтамасыз ету. Осылайша, Қауымдастық басқа мүдделі қатысушылармен бірлесе отырып, Қазақстан Республикасында зергерлік бұйымдарды таңбалау жүйесін енгізу үрдісін оны осындай жүйелерді шетелде қолдану тәжірибесін ескере отырып толықтыру қажеттігін негізге алып, кейінге қалдыра алды.',
    'We actively work to build and maintain open dialogue between jewelry business participants, government agencies, local authorities, supranational organizations, and other commercial and non-profit organizations. Our task is to ensure effective interaction and exchange of experience between all stakeholders. For example, the Association, together with other stakeholders, successfully postponed the implementation of jewelry marking systems in Kazakhstan to allow for adjustments based on international best practices.'
  ),
  'directions.items.0.link.label': pair('Қатысу хроникасы', 'Chronicle of participation'),
  'directions.items.1.title': pair('Құқықтық сараптама', 'Legal expertise'),
  'directions.items.1.text': pair(
    '2021 жылдың наурыз айынан бастап Қауымдастық Солтүстік Қазақстан облысы Әкімдігінің жанындағы Кәсіпкерлік мәселелері жөніндегі сарапшылар кеңесі мүшелерінің қатарына кірген болатын. Сарапшылар кеңесіндегі жұмыс аясында Қауымдастық кәсіпкерлік мүдделерін қозғайтын нормативтік-құқықтық актілердің жобаларын, мемлекеттік жоспарлау жүйелері саласындағы құқықтық актілердің жобаларын, Қазақстан Республикасының халықаралық келісімшарт жобаларын, сондай-ақ Қазақстан Республикасы қатысуды жоспарлап отырған халықаралық келісімшарттарды қарастырумен айналысады. Оған қоса Қауымдастық мемлекеттік органдар әзірлеген және ұсынған реттеушілік саясатқа қатысты консультативтік құжаттарды оларды бұқаралық ақпарат құралдарында, оның ішінде мемлекеттік органдардың ресми интернет-ресурстарында міндетті жариялаудан (таратудан) кейін зерделеп отырады.',
    'The Association has been a member of the Expert Council on Entrepreneurship under the Akimat of the North Kazakhstan Region since March 2021. As part of its work in the Expert Council, the Association reviews draft regulatory legal acts, draft legal acts in the field of the state planning system, draft international treaties of the Republic of Kazakhstan, as well as international treaties to which the Republic of Kazakhstan intends to become a party, affecting the interests of entrepreneurship. The Association also studies advisory regulatory policy documents developed and submitted by government agencies after their mandatory publication (dissemination) in the media, including the official Internet resources of government agencies.'
  ),
  'directions.items.1.link.label': shared.expertCouncil,
  'directions.items.2.title': pair('Қолдау және консультациялар', 'Support and consultation'),
  'directions.items.2.text': pair(
    'Біздің ұйым зергерлік бизнеске, заңнама мен стандарттарға қатысты мәселелер бойынша қолдау көрсетеді және консультациялар береді. Қауымдастық геммолог қызметтерін ұсынады, ол бағалы тасты бағалап, оның табиғи немесе жасанды екенін, оның сәндеуден өткен-өтпегенін анықтауға көмектеседі.',
    'We offer support and consulting services related to the jewelry business, legislation, and standards. We also provide gemmological expertise: our gemmologist can determine whether a stone is natural or synthetic and whether it has been treated.'
  ),
  'directions.items.2.practice': pair(
    'Қауымдастық әр түрлі форматтарда өзара әрекеттесуге арналған алаң қызметін атқарады және өз мүшелерінің арасында тікелей тілдесу мүмкіндігін ұйымдастырады. Біз нарыққа қатысушылар өзекті мәселелерді талқылай алатын, серіктестер тауып, өзара қызметтес бола алатын іс-шаралар ұйымдастырамыз. Қауымдастық өз мүшелерін ЕАЭО алаңдарында ғана емес, шетелде де таныстыруға ұмтылады.',
    'We serve as a space for direct communication and cooperation between our members. We organize events where stakeholders can discuss relevant issues, find partners, and build collaborations. Our goal is to represent our members not only within the EAEU but also internationally.'
  ),
  'directions.items.2.link.label': shared.membershipTerms,
  'directions.items.3.title': pair('Жаңа серіктестерді іздеу', 'Searching for new partners'),
  'directions.items.3.text': pair(
    'Қауымдастық ЕАЭО аумағында да, одан тыс жерлерде де бағалы металлдар мен бағалы тастар секторына қатысушылардың басқа бірлестіктерімен ауқымды түрде өзара әрекеттесуге дайын. Біз CIBJO, Зергерлер қауымдастығы, «Аффинажды зауыттар бірлестігі» қауымдастығы, Еділ-Вятка аймағының зергерлер гильдиясы, «Тау-Кен Алтын» ЖШС және басқа қауымдастықтармен белсенді қызметтес болып келеміз.',
    'The Association actively collaborates with other unions and associations in the precious metals and gemstones sector both within and outside the EAEU. Our partners include CIBJO, the Jewellers Association, Refining Plants Association, the Guild of Jewellers of the Volga-Vyatka Region, Tau-Ken Altyn LLP, and others.'
  ),
  'directions.items.3.practice': pair(
    'Қауымдастық ЕАЭО қатысушы мемлекеттерден, сондай-ақ басқа мемлекеттерден жауапты бизнес жүргізетін, өз беделіне қамқорлықпен қарайтын және бағалы металлдар нарығын дамыту мақсатында белсенді түрде өзара әрекеттесуге дайын серіктестерді тартуға талпынады.',
    'We are constantly seeking new partners from EAEU countries and beyond—those who conduct responsible business, value their reputation, and are open to cooperation in developing the precious metals market.'
  ),
  'directions.items.3.link.label': pair('Жаңалықтар мен материалдар', 'News and materials'),
  'directions.mediaAlt': pair(
    'Үш маман құжаттар жайылған үстелдің қасында тұрып, салалық материалдарды талқылап отыр',
    'Three specialists standing at a table with documents laid out, discussing industry materials'
  ),
  'directions.mediaCaption': pair(
    'Қауымдастық жұмысының көп бөлігі — нақты құжаттарды бейінді мамандармен бірге қарау.',
    'Much of the Association’s work is going through specific documents together with specialists in the field.'
  ),
  'tasks.h2': pair('Тұрақты міндеттер', 'Continuing tasks'),
  'tasks.lead': pair(
    'Қауымдастық жеке іс-шаралардан тыс, үздіксіз жүргізетін бағыттар.',
    'Areas that the Association pursues continuously, outside individual events.'
  ),
  'tasks.imageAlt': pair(
    'Маманның қолдары пинцетпен жүзікті дәл таразының табақшасына қояды, жанында өлшеу сақиналарының жинағы',
    'A specialist’s hands placing a ring on the pan of a precision scale with tweezers, next to a set of measuring rings'
  ),
  'tasks.items.0.title': pair('Стандарттар мен ұсынымдар', 'Standards and recommendations'),
  'tasks.items.0.text': pair(
    'Қымбат металдар мен қымбат тастар нарығына қатысушылар үшін бірыңғай стандарттар мен ұсынымдарды әзірлеу және енгізу.',
    'Developing and introducing common standards and recommendations for participants in the precious metals and precious stones market.'
  ),
  'tasks.items.1.title': pair('Нарықты талдау және бақылау', 'Market analysis and monitoring'),
  'tasks.items.1.text': pair(
    'Нарық жағдайын байқау және салалық талқылаулар үшін материалдар дайындау.',
    'Observing the state of the market and preparing materials for industry discussions.'
  ),
  'tasks.items.2.title': pair('Бірыңғай ашық нарық', 'A single open market'),
  'tasks.items.2.text': pair(
    'ЕАЭО-ға қатысушы мемлекеттер арасында зергерлік бизнес үшін бірыңғай ашық нарық ұйымдастыруға жәрдемдесу.',
    'Supporting the organisation of a single open market for the jewellery business between the EAEU member states.'
  ),
  'flow.h2': pair(
    'Кәсіби диалог қалай қалыптасады',
    'How professional dialogue takes shape'
  ),
  'flow.lead': pair(
    'Қауымдастықтың органдары мен құрылымдарының жұмыс тәртібі оның Жарғысымен және ішкі құжаттарымен айқындалады. Төменде — салалық мәселенің жалпы қозғалыс логикасы.',
    'The way the bodies and structures of the Association work is defined by its Charter and internal documents. Below is the general logic of how an industry question moves.'
  ),
  'flow.steps.0.title': pair('Нарық қатысушыларынан келген мәселе', 'A question from market participants'),
  'flow.steps.0.text': pair(
    'Тақырып практикадан туады: жаңа талаптар, даулы нормалар, құқық қолдану қиындықтары.',
    'A topic arises from practice: new requirements, disputed provisions, difficulties in enforcement.'
  ),
  'flow.steps.1.title': pair('Кәсіби қарау', 'Professional review'),
  'flow.steps.1.text': pair(
    'Мәселе бейінді мамандарды тарта отырып, қажет болған жағдайда Қауымдастықтың сараптамалық және консультативтік құрылымдарында қаралады.',
    'The question is examined with specialists in the field and, where necessary, in the expert and advisory structures of the Association.'
  ),
  'flow.steps.2.title': pair('Ортақ ұстаным', 'A common position'),
  'flow.steps.2.text': pair(
    'Нәтиже — бейінді органдармен және серіктестермен диалогта пайдаланылатын, тұжырымдалған бірлестік ұстанымы.',
    'The result is a formulated position of the association, which is used in dialogue with the relevant authorities and partners.'
  ),
  'flow.imageAlt': pair(
    'Шебер қабырғада құралы бар тыныш шеберханада зергерлік верстак басында жұмыс істеп отыр',
    'A craftsman working at a jeweller’s bench in a quiet workshop with tools on the wall'
  ),
  'cta.h2': pair(
    'Қауымдастық жұмысына қатысуды талқылау',
    'Discuss taking part in the work of the Association'
  ),
  'cta.text': pair(
    'Егер компанияңыздың мәселесі кәсіби қарауды талап етсе, Қауымдастыққа жазыңыз немесе кіру туралы өтініш беріңіз.',
    'If your company’s question requires professional review, write to the Association or submit an application to join.'
  ),
  'cta.primary.label': shared.becomeMember,
  'cta.secondary.label': shared.writeToAssociation
} as const satisfies Record<string, Translation>;

export const expertCouncilI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлік саласының сарапшылар кеңесі — ЕАЭО зергерлер қауымдастығы',
    'Expert Council of the jewellery industry of the EAEU — Association of Jewellers of the EAEU'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығы жанындағы Сараптамалық-консультативтік кеңес: міндеті, жұмыс қағидаттары, қарайтын мәселелер шеңбері және құрамын жасақтау тәртібі.',
    'The Expert and Advisory Council at the Association of Jewellers of the EAEU: its purpose, working principles, the range of questions it considers and how its membership is formed.'
  ),
  crumb: shared.expertCouncil,
  'hero.eyebrow': pair(
    'ЕАЭО зергерлік саласының Сараптамалық-консультативтік кеңесі',
    'Expert and Advisory Council of the jewellery industry of the EAEU'
  ),
  'hero.h1': shared.expertCouncil,
  'hero.lead': pair(
    'Қауымдастық жанындағы тұрақты жұмыс істейтін консультативтік-кеңесші орган: ЕАЭО-ға мүше мемлекеттердің зергерлік саласын дамыту мәселелерін сараптамалық, ғылыми-талдамалық және әдістемелік сүйемелдеу.',
    'A standing consultative and advisory body at the Association: expert, research-analytical and methodological support for questions of developing the jewellery industry of the EAEU member states.'
  ),
  'hero.note': pair(
    'Кеңес ЕАЭО зергерлік саласының Сараптамалық-консультативтік кеңесі туралы ережеге сәйкес жасақталады.',
    'The Council is formed in accordance with the Regulations on the Expert and Advisory Council of the jewellery industry of the EAEU.'
  ),
  'hero.imageAlt': pair(
    'Келіссөз үстелінде отырған төрт маман басып шығарылған материалдарды қарап отыр, біреуі сөйлеп тұр',
    'Four specialists at a negotiating table going through printed materials, one of them speaking'
  ),
  'expertise.h2': pair(
    'Сала мүддесі үшін кәсіби сараптама',
    'Professional expertise in the interests of the industry'
  ),
  'expertise.imageAlt': pair(
    'Ашық түсті табақтың үстінде қырланған тас салынған пинцет, жанында зергер лупасы және тастарға арналған қағаз конверт',
    'Tweezers holding a faceted stone above a light tray, with a jeweller’s loupe and a paper stone envelope beside them'
  ),
  'principles.h2': pair('Жұмыс қағидаттары', 'Working principles'),
  'principles.lead': pair(
    'Қағидаттар Кеңес туралы ережеде тіркелген.',
    'The principles are set out in the Regulations on the Council.'
  ),
  'principles.items.0.title': pair('Заңдылық', 'Legality'),
  'principles.items.0.text': pair(
    'Жұмыс ЕАЭО-ға мүше мемлекеттердің заңнамасы, Одақ органдарының актілері, Қауымдастықтың Жарғысы мен ішкі құжаттары шеңберінде құрылады.',
    'The work is conducted within the legislation of the EAEU member states, the acts of the bodies of the Union, and the Charter and internal documents of the Association.'
  ),
  'principles.items.1.title': pair('Кәсіби дербестік', 'Professional independence'),
  'principles.items.1.text': pair(
    'Баға жеке нарық қатысушысының мүддесінен емес, кәсіби ұстанымнан шыға отырып қалыптасады.',
    'An assessment is formed from a professional position rather than the interests of an individual market participant.'
  ),
  'principles.items.2.title': pair('Объективтілік', 'Objectivity'),
  'principles.items.2.text': pair(
    'Мәселелер ұсынылған материалдарға сүйене отырып, мәні бойынша қаралады.',
    'Questions are considered on their merits, based on the materials submitted.'
  ),
  'principles.items.3.title': pair('Құзыреттілік', 'Competence'),
  'principles.items.3.text': pair(
    'Қарауға саланың бейінді бағыттарының мамандары тартылады.',
    'Specialists from the relevant areas of the industry are involved in the review.'
  ),
  'principles.items.4.title': pair('Ашықтық', 'Openness'),
  'principles.items.4.text': pair(
    'Кеңестің қызметі туралы мәліметтер Қауымдастықтың ресми ресурсында орналастырылуы мүмкін.',
    'Information about the work of the Council may be published on the official resource of the Association.'
  ),
  'principles.items.5.title': pair('Ғылыми негізділік', 'Academic soundness'),
  'principles.items.5.text': pair(
    'Тұжырымдар мәселенің талдамалық және әдістемелік пысықталуына сүйенеді.',
    'Conclusions rely on analytical and methodological study of the question.'
  ),
  'principles.items.6.title': pair('Сала мүддесін ескеру', 'Regard for the industry’s interests'),
  'principles.items.6.text': pair(
    'Қараудың орталығында — зергерлік сала қатысушыларының практикасы.',
    'The practice of jewellery industry participants is at the centre of every review.'
  ),
  'topics.h2': pair(
    'Кеңес қарайтын мәселелер',
    'Questions considered by the Council'
  ),
  'topics.lead': pair(
    'Міндеттер шеңбері Кеңес туралы ережеде айқындалған.',
    'The range of tasks is defined by the Regulations on the Council.'
  ),
  'topics.items.0.title': pair('Құқықтық реттеу', 'Legal regulation'),
  'topics.items.0.text': pair(
    'Нормативтік құқықтық актілердің жобаларына сараптамалық баға беру және саланы реттеуді жетілдіру бойынша ұсыныстар дайындау.',
    'Expert assessment of draft regulatory legal acts and preparation of proposals for improving regulation of the industry.'
  ),
  'topics.items.1.title': pair('Техникалық реттеу', 'Technical regulation'),
  'topics.items.1.text': pair(
    'Зергерлік сала өніміне қойылатын талаптар мен стандарттауға бірыңғай тәсілдер.',
    'Common approaches to standardisation and to requirements for jewellery industry products.'
  ),
  'topics.items.2.title': pair('Кәсіпкерлікті дамыту', 'Development of entrepreneurship'),
  'topics.items.2.text': pair(
    'Сала мен инфрақұрылымды дамыту, шағын және орта кәсіпкерлікті қолдау, экспорт мәселелері.',
    'Questions of developing the industry and its infrastructure, supporting small and medium-sized business, and exports.'
  ),
  'topics.items.3.title': pair('Халықаралық ынтымақтастық', 'International cooperation'),
  'topics.items.3.text': pair(
    'Ұлттық нарықтардан тыс жердегі бейінді ұйымдармен және бірлестіктермен өзара іс-қимыл.',
    'Engagement with relevant organisations and associations beyond national markets.'
  ),
  'topics.items.4.title': pair('Нарықтың адалдығы', 'Integrity of the market'),
  'topics.items.4.text': pair(
    'Саланың жүйелі проблемалары мен кедергілері, оның ішінде заңсыз айналымға қарсы іс-қимыл мәселелері.',
    'Systemic problems and barriers in the industry, including countering illegal circulation.'
  ),
  'topics.items.5.title': pair('Кадрлар және кәсіби даму', 'Skills and professional development'),
  'topics.items.5.text': pair(
    'Зергерлік саладағы мамандарды даярлау және кәсіби даму мәселелері.',
    'Questions of training specialists and professional development in the jewellery industry.'
  ),
  'order.h2': pair('Жұмыс тәртібі', 'How the Council works'),
  'order.note': pair(
    'ЕАЭО зергерлік саласының Сараптамалық-консультативтік кеңесі туралы ереже бойынша келтірілген.',
    'Given according to the Regulations on the Expert and Advisory Council of the jewellery industry of the EAEU.'
  ),
  'order.items.0.term': pair('Құрамды жасақтау', 'Forming the membership'),
  'order.items.0.value': pair(
    'Кеңес Қауымдастық Басқармасының шешімімен жасақталады. Сандық және дербес құрамды Басқарма Төрағасы төрт жыл мерзімге бекітеді.',
    'The Council is formed by a decision of the Board of the Association. Its size and individual membership are approved by the Chair of the Board for a term of four years.'
  ),
  'order.items.1.term': pair('Үміткерлер', 'Candidates'),
  'order.items.1.value': pair(
    'Құрамға енгізу туралы ұсыныстарды Қауымдастық мүшелері, салалық бірлестіктер, сондай-ақ ғылыми, білім беру және сараптамалық ұйымдар енгізеді.',
    'Proposals for inclusion in the membership are made by members of the Association, industry associations, and academic, educational and expert organisations.'
  ),
  'order.items.2.term': pair('Отырыстар', 'Meetings'),
  'order.items.2.value': pair(
    'Отырыстар тоқсанда бір реттен кем емес мерзімділікпен, қатыспалы, қашықтық немесе араласқан форматта өткізіледі.',
    'Meetings are held at least once a quarter, in person, remotely or in a mixed format.'
  ),
  'order.items.3.term': pair('Шешімдер', 'Decisions'),
  'order.items.3.value': pair(
    'Отырыс Кеңес мүшелерінің жартысынан көбі қатысқанда құқылы; шешімдер жай көпшілік дауыспен қабылданады және хаттамамен ресімделеді.',
    'A meeting is valid when more than half of the Council members take part; decisions are taken by a simple majority of votes and recorded in minutes.'
  ),
  'order.items.4.term': pair('Жұмыс нәтижесі', 'Outcome of the work'),
  'order.items.4.value': pair(
    'Кеңестің материалдары, қорытындылары мен ұсынымдары Қауымдастықтың Басқармасына жіберіледі.',
    'The materials, conclusions and recommendations of the Council are sent to the Board of the Association.'
  ),
  'order.tableAlt': pair(
    'Келіссөз бөлмесінің үстелі жоғарыдан: әр орында дайындалған құжаттар жинағы, қаламдар және су құйылған стақандар',
    'A meeting room table from above: prepared sets of documents, pens and glasses of water at each place'
  ),
  'cta.h2': pair('Қауымдастықпен байланысу', 'Contact the Association'),
  'cta.text': pair(
    'Кеңес құрамына мамандарды енгізу туралы ұсыныстарды және бейінді салалық мәселелерді Қауымдастыққа жіберіңіз.',
    'Send proposals for including specialists in the Council and questions specific to the industry to the Association.'
  ),
  'cta.primary.label': shared.writeToAssociation,
  'cta.secondary.label': shared.becomeMember
} as const satisfies Record<string, Translation>;

export const membershipI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығына мүшелік — кіру тәртібі',
    'Membership of the Association of Jewellers of the EAEU — how to join'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығына кім кіре алады, өтінішті қалай жіберу керек, оған қандай құжаттар қоса беріледі және Басқарма өтінішті қандай мерзімде қарайды.',
    'Who is eligible to join the Association of Jewellers of the EAEU, how to send an application, which documents are attached to it and how long the Board takes to review it.'
  ),
  crumb: pair('Мүшелік', 'Membership'),
  'hero.eyebrow': pair('Қауымдастыққа мүшелік', 'Membership of the Association'),
  'hero.h1': pair('Мүшелік', 'Membership'),
  'hero.lead': pair(
    'Мүшелік — кәсіби қоғамдастыққа қатысу: салалық талқылауларға, Қауымдастықтың органдары мен бейінді құрылымдарының жұмысына және оның бірлескен жобаларына.',
    'Membership means taking part in the professional community: in industry discussions, in the work of the bodies and specialist structures of the Association, and in its joint projects.'
  ),
  'hero.action.label': pair('Өтініш жазу', 'Write an application'),
  'hero.action.href': mailtoPair(
    'Қауымдастыққа кіру туралы өтініш',
    'Application to join the Association'
  ),
  'hero.note': pair(
    'Қабылдау мерзім шектелмей жүргізіледі. Толық жинақты қарау — 10 жұмыс күніне дейін.',
    'Applications are accepted with no time limit. A complete set of documents is reviewed within 10 working days.'
  ),
  'hero.imageAlt': pair(
    'Терезе жанындағы жұмыс үстелінде екі маман: біреуі құжаттар салынған қалтаны беріп тұр, екіншісі басып шығарылған беттерді зерделеп отыр',
    'Two specialists at a desk by a window: one is handing over a folder of documents, the other is studying printed pages'
  ),
  'eligibility.h2': pair('Кім кіре алады', 'Who can join'),
  'eligibility.scopeTitle': pair('Қызмет түрлері', 'Types of activity'),
  'eligibility.scope.0': pair('Өндіп алу', 'Extraction'),
  'eligibility.scope.1': pair('Өндіру', 'Production'),
  'eligibility.scope.2': pair('Қайта өңдеу', 'Processing'),
  'eligibility.scope.3': pair('Айналым', 'Circulation'),
  'eligibility.scope.4': pair('Сату', 'Sale'),
  'eligibility.scope.5': pair('Экспорт', 'Export'),
  'eligibility.scope.6': pair('Импорт', 'Import'),
  'eligibility.scope.7': pair('Сараптама', 'Examination'),
  'eligibility.scopeNote': pair(
    'Кіру құқығын қымбат металдарға, қымбат тастарға және олардан жасалған бұйымдарға байланысты өзге қызмет те береді.',
    'Other activity connected with precious metals, precious stones and articles made from them also gives the right to join.'
  ),
  'steps.h2': pair('Өтінішті қалай беруге болады', 'How to submit an application'),
  'steps.lead': pair(
    'Реттілік «ЕАЭО зергерлер қауымдастығына кіру тәртібімен» тіркелген.',
    'The sequence is set out in the “Procedure for joining the Association of Jewellers of the EAEU”.'
  ),
  'steps.items.0.title': pair('Өтініш', 'Application'),
  'steps.items.0.text': pair(
    `Мүдделі тұлға Қауымдастықтың атына кіру туралы жазбаша өтініш жібереді. Өтініш еркін нысанда жасалады және электрондық пошта арқылы ${org.email} ресми мекенжайына жіберіледі.`,
    `An interested party sends a written application to join to the Association. The application is drawn up in free form and sent by email to the official address ${org.email}.`
  ),
  'steps.items.1.title': pair('Өтінішке қоса берілетін құжаттар', 'Attachments to the application'),
  'steps.items.1.text': pair(
    'Өтінішке өтініш берушіні сәйкестендіруге және ол жүзеге асыратын қызметтің сипатын бағалауға мүмкіндік беретін құжаттар қоса беріледі.',
    'The application is accompanied by documents that make it possible to identify the applicant and assess the nature of the activity they carry out.'
  ),
  'steps.items.2.title': pair('Басқарманың қарауы', 'Review by the Board'),
  'steps.items.2.text': pair(
    'Ұсынылған құжаттарды Қауымдастықтың Басқармасы қарайды. Қарау қорытындысы бойынша қабылдау немесе қабылдаудан бас тарту туралы шешім қабылданады. Қарау мерзімі құжаттардың толық жинағы келіп түскен күннен бастап он жұмыс күнінен аспайды.',
    'The documents submitted are reviewed by the Board of the Association. Following the review, a decision is taken to admit the applicant or to decline. The review takes no more than ten working days from the date the complete set of documents is received.'
  ),
  'steps.items.3.title': pair('Кіру жарнасы', 'Entrance fee'),
  'steps.items.3.text': pair(
    'Кіру жарнасының мөлшерін Басқарма өтініш берушінің қызметінің ауқымы мен ерекшеліктерін, сондай-ақ шешім қабылдау үшін маңызы бар өзге де мән-жайларды ескере отырып айқындайды. Шешім үміткерге жазбаша хабарламамен жеткізіледі.',
    'The amount of the entrance fee is determined by the Board, taking into account the scale and specific nature of the applicant’s activity and other circumstances relevant to the decision. The decision is communicated to the candidate by written notification.'
  ),
  'steps.items.4.title': pair('Мүшелікті иелену', 'Acquiring membership'),
  'steps.items.4.text': pair(
    'Қабылдау туралы шешім қабылданғаннан және кіруге байланысты талаптар орындалғаннан кейін жаңа мүше Қауымдастықтың Жарғысында көзделген құқықтар мен міндеттерге ие болады.',
    'Once the decision to admit has been taken and the requirements related to joining have been met, the new member acquires the rights and obligations set out in the Charter of the Association.'
  ),
  'attachments.h2': pair(
    'Өтінішке не қоса беріледі',
    'What is attached to the application'
  ),
  'attachments.lead': pair(
    'Қоса берілетін құжаттардың құрамы «ЕАЭО зергерлер қауымдастығына кіру тәртібімен» тіркелген және өтініштің нысанына байланысты емес.',
    'The set of attachments is defined by the “Procedure for joining the Association of Jewellers of the EAEU” and does not depend on the form of the application.'
  ),
  'attachments.items.0': pair(
    'Заңды тұлғаның немесе жеке кәсіпкердің тіркеу құжаттарының көшірмелері',
    'Copies of the registration documents of the legal entity or sole proprietor'
  ),
  'attachments.items.1': pair(
    'Қызметтің негізгі бағыттары туралы қысқаша ақпарат',
    'Brief information on the main areas of activity'
  ),
  'attachments.items.2': pair(
    'Кіру себептері және өзара іс-қимылдың болжамды бағыттары туралы мәліметтері бар мотивациялық хат',
    'A motivation letter with information on the reasons for joining and the intended areas of cooperation'
  ),
  'attachments.note': pair(
    'Қарау мерзімінің есебі құжаттардың толық жинағы келіп түскен күннен басталады.',
    'The review period starts from the day the complete set of documents is received.'
  ),
  'attachments.imageAlt': pair(
    'Жұмыс үстеліндегі қолдар: жанында басып шығарылған беттер бумасы, мөр, қауырсын қалам және қарапайым металл жүзік',
    'Hands on a desk beside a stack of printed pages, a stamp, a fountain pen and a plain metal ring'
  ),
  'rights.h2': pair('Мүшелік не береді', 'What membership gives'),
  'rights.lead': pair(
    'Қауымдастық мүшесінің құқықтары мен міндеттері оның Жарғысында көзделген.',
    'The rights and obligations of a member of the Association are set out in its Charter.'
  ),
  'rights.items.0.title': pair('Қызметке қатысу', 'Taking part in the work'),
  'rights.items.0.text': pair(
    'Қауымдастық мүшесі оның қызметіне және Қауымдастық органдарының жұмысына қатысады.',
    'A member of the Association takes part in its activities and in the work of the bodies of the Association.'
  ),
  'rights.items.1.title': pair('Бейінді құрылымдардағы жұмыс', 'Work in specialist structures'),
  'rights.items.1.text': pair(
    'Қауымдастықтың комиссияларына, жұмыс топтарына, сараптамалық және консультативтік құрылымдарына қатысу.',
    'Participation in the commissions, working groups, expert and advisory structures of the Association.'
  ),
  'rights.items.2.title': pair('Бірлескен жобалар', 'Joint projects'),
  'rights.items.2.text': pair(
    'Қауымдастықтың бірлескен жобалары мен бастамаларын іске асыруға қатысу.',
    'Participation in carrying out the joint projects and initiatives of the Association.'
  ),
  'rights.items.3.title': pair('Қолдау және консультация', 'Support and advice'),
  'rights.items.3.text': pair(
    'Зергерлік бизнес, заңнама және стандарттар мәселелері бойынша консультация, сондай-ақ геммолог қызметі.',
    'Advice on jewellery business, legislation and standards, and gemmologist services.'
  ),
  'rights.items.4.title': pair('Алаңдарда білдіру', 'Representation at forums'),
  'rights.items.4.text': pair(
    'Қауымдастық өз мүшелерін ЕАЭО мемлекеттеріндегі және олардан тыс жердегі салалық алаңдарда білдіреді.',
    'The Association represents its members at industry forums in the EAEU states and beyond them.'
  ),
  'rights.items.5.title': pair('Салалық диалог', 'Industry dialogue'),
  'rights.items.5.text': pair(
    'Жеке компанияның мәселесі салалық күн тәртібіне аударылып, кәсіби талқылауға шығарылуы мүмкін.',
    'The question of an individual company can be moved onto the industry agenda and brought to professional discussion.'
  ),
  'fees.h2': pair('Жарналар', 'Fees and contributions'),
  'fees.note': pair(
    'Кіру, тұрақты мүшелік және мақсатты жарналарды төлеу тәртібі туралы ереже бойынша келтірілген. Жарналардың мөлшерін Қауымдастықтың органдары айқындайды және өтініш берушіге жазбаша хабарламамен жеткізеді, сондықтан олар мұнда келтірілмейді.',
    'Given according to the Regulations on the payment of entrance, regular membership and targeted contributions. The amounts are determined by the bodies of the Association and communicated to the applicant by written notification, so they are not given here.'
  ),
  'fees.items.0.term': pair('Кіру жарнасы', 'Entrance fee'),
  'fees.items.0.value': pair(
    'Мүшелікті иеленудің шарттарының біріне жататын бір жолғы төлем. Мөлшерін Басқарма жеке тәртіппен айқындайды. Қабылдау туралы хабарлама алынған күннен бастап он жұмыс күні ішінде төленеді, егер Басқарманың шешімімен өзге мерзім белгіленбесе.',
    'A one-off payment that is one of the conditions for acquiring membership. The amount is determined by the Board on an individual basis. It is paid within ten working days of receiving the notification of admission, unless a different period is set by a decision of the Board.'
  ),
  'fees.items.1.term': pair('Тұрақты мүшелік жарналар', 'Regular membership fees'),
  'fees.items.1.value': pair(
    'Қауымдастықтың ағымдағы жарғылық қызметін қамтамасыз ететін міндетті мерзімді төлемдер. Тоқсан сайын, төленетін тоқсанның бірінші айының бірінші күнінен кешіктірілмей төленеді.',
    'Mandatory periodic payments that fund the current statutory activity of the Association. They are paid quarterly, no later than the first day of the first month of the quarter being paid for.'
  ),
  'fees.items.2.term': pair('Мақсатты жарналар', 'Targeted contributions'),
  'fees.items.2.value': pair(
    'Нақты іс-шараларды, бағдарламаларды және жобаларды қаржыландыру үшін Басқарманың немесе Жалпы жиналыстың шешімімен енгізіледі. Тек белгіленген мақсаттарға жұмсалады.',
    'Introduced by a decision of the Board or the General Meeting to finance specific events, programmes and projects. They are spent solely on the purposes for which they were set.'
  ),
  'fees.items.3.term': pair('Ерікті жарналар', 'Voluntary contributions'),
  'fees.items.3.value': pair(
    'Қауымдастық мүшелері өз бастамасымен ерікті мүліктік жарналар енгізуге құқылы. Мұндай жарналар қосымша құқықтар мен артықшылықтар тудырмайды.',
    'Members of the Association may make voluntary contributions of property on their own initiative. Such contributions do not create additional rights or advantages.'
  ),
  'cta.h2': pair('Өтініш жіберу', 'Send an application'),
  'cta.text': pair(
    'Еркін нысандағы өтініш және оған қоса берілетін құжаттар электрондық пошта арқылы Қауымдастықтың ресми мекенжайына жіберіледі.',
    'An application in free form and its attachments are sent by email to the official address of the Association.'
  ),
  'cta.primary.label': shared.writeToEmail,
  'cta.primary.href': mailtoPair(
    'Қауымдастыққа кіру туралы өтініш',
    'Application to join the Association'
  ),
  'cta.secondary.label': shared.associationDocuments
} as const satisfies Record<string, Translation>;

const documentTitles = {
  membershipOrder: pair(
    'ЕАЭО зергерлер қауымдастығына кіру тәртібі',
    'Procedure for joining the Association of Jewellers of the EAEU'
  ),
  feesRegulation: pair(
    'Кіру, тұрақты мүшелік және мақсатты жарналарды төлеу тәртібі туралы ереже',
    'Regulations on the payment of entrance, regular membership and targeted contributions'
  ),
  councilRegulation: pair(
    'ЕАЭО зергерлік саласының Сараптамалық-консультативтік кеңесі туралы ереже',
    'Regulations on the Expert and Advisory Council of the jewellery industry of the EAEU'
  ),
  report2024: pair(
    'Қауымдастықтың 2024 жылғы жұмысы туралы есеп',
    'Report on the work of the Association for 2024'
  ),
  outlook2025: pair(
    '2025 жылға арналған перспективалы қызмет бағыттары',
    'Priority areas of activity for 2025'
  ),
  eventLists: pair(
    '2024 және 2025 жылдардағы іс-шаралар тізбелері',
    'Lists of events for 2024 and 2025'
  ),
  presentation: pair(
    'Қауымдастықтың презентациялық материалы',
    'Presentation material of the Association'
  ),
  privacy: pair(
    'Дербес деректерді өңдеу және құпиялылық саясаты',
    'Personal data processing and privacy policy'
  )
} as const;

/** Тема письма содержит название документа, поэтому строится из перевода. */
const documentRequest = (title: Translation): Translation =>
  mailtoPair(`Құжатты сұрату: ${title.kk}`, `Document request: ${title.en}`);

const documentsBase = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығының құжаттары мен материалдары',
    'Documents and materials of the Association of Jewellers of the EAEU'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығының құжаттар тізбесі: кіру тәртібі, жарналар туралы ереже, Сараптамалық-консультативтік кеңес туралы ереже, есептік және презентациялық материалдар.',
    'List of documents of the Association of Jewellers of the EAEU: the procedure for joining, the regulations on contributions, the regulations on the Expert and Advisory Council, reporting and presentation materials.'
  ),
  crumb: shared.documents,
  'hero.eyebrow': pair('Құжаттар мен материалдар', 'Documents and materials'),
  'hero.h1': shared.documents,
  'hero.lead': pair(
    'Қауымдастықтың құжаттары мен материалдарының тізбесі, әрқайсысына қысқаша түсіндірмесі бар. Көшірмелер сұрау бойынша беріледі.',
    'A list of the Association’s documents and materials with a short note on each. Copies are provided on request.'
  ),
  listNote: pair(
    'Еркін жүктеуге арналған файлдар сайтта орналастырылмаған: көшірме өтінішке жауап ретінде жіберіледі.',
    'Files for free download are not published on the site: a copy is sent in reply to an enquiry.'
  ),
  'list.aria': pair('Құжаттар тізбесі', 'List of documents'),
  'groups.0.title': pair('Кіру және мүшелік', 'Joining and membership'),
  'groups.0.items.0.title': documentTitles.membershipOrder,
  'groups.0.items.0.text': pair(
    'Кім кіруге құқылы, өтініш қалай жіберіледі, оған қандай құжаттар қоса беріледі және Басқарма өтінішті қандай мерзімде қарайды.',
    'Who is eligible to join, how an application is sent, which documents are attached to it and how long the Board takes to review it.'
  ),
  'groups.0.items.0.link.label': shared.membershipTerms,
  'groups.0.items.0.actionHref': documentRequest(documentTitles.membershipOrder),
  'groups.0.items.1.title': documentTitles.feesRegulation,
  'groups.0.items.1.text': pair(
    'Жарна түрлері, мөлшерін айқындау тәртібі, енгізу мерзімдері және қаражатты пайдаланудың құқықтық режимі.',
    'Types of contributions, how the amount is determined, payment deadlines and the legal regime for using the funds.'
  ),
  'groups.0.items.1.actionHref': documentRequest(documentTitles.feesRegulation),
  'groups.1.title': pair('Сараптамалық жұмыс', 'Expert work'),
  'groups.1.items.0.title': documentTitles.councilRegulation,
  'groups.1.items.0.text': pair(
    'Кеңестің мәртебесі мен міндеті, жұмыс қағидаттары, қарайтын мәселелер шеңбері, құрамды жасақтау және отырыстарды өткізу тәртібі.',
    'The status and purpose of the Council, its working principles, the range of questions it considers, and how its membership is formed and meetings are held.'
  ),
  'groups.1.items.0.link.label': shared.expertCouncil,
  'groups.1.items.0.actionHref': documentRequest(documentTitles.councilRegulation),
  'groups.2.title': pair('Қызмет және есептілік', 'Activities and reporting'),
  'groups.2.items.0.title': documentTitles.report2024,
  'groups.2.items.0.text': pair(
    'Салалық талқылауларға қатысу, заңнамалық бастамалар, нормативтік құқықтық актілердің жобалары бойынша сараптамалық жұмыс, жыл қорытындылары мен нәтижелері.',
    'Participation in industry discussions, legislative initiatives, expert work on draft regulatory legal acts, and the conclusions and results of the year.'
  ),
  'groups.2.items.0.link.label': shared.reporting,
  'groups.2.items.0.actionHref': documentRequest(documentTitles.report2024),
  'groups.2.items.1.title': documentTitles.outlook2025,
  'groups.2.items.1.text': pair(
    'Жоспарланған бағыттар: құқықтық реттеу және салық салу, халықаралық ынтымақтастық, білім беру бастамалары, көлеңкелі айналымға қарсы іс-қимыл.',
    'Planned areas: legal regulation and taxation, international cooperation, educational initiatives, countering the shadow market.'
  ),
  'groups.2.items.1.actionHref': documentRequest(documentTitles.outlook2025),
  'groups.2.items.2.title': documentTitles.eventLists,
  'groups.2.items.2.text': pair(
    'Қауымдастық қатысқан іс-шаралардың хронологиялық тізбелері, қаралған мәселелердің құрамы және нәтижелерімен.',
    'Chronological lists of events attended by the Association, with the questions considered and the results.'
  ),
  'groups.2.items.2.link.label': shared.newsAndEvents,
  'groups.2.items.2.actionHref': documentRequest(documentTitles.eventLists),
  'groups.3.title': pair('Материалдар және саясат', 'Materials and policy'),
  'groups.3.items.0.title': documentTitles.presentation,
  'groups.3.items.0.text': pair(
    'Қауымдастық, оның мақсаты, қызмет бағыттары және ұсынылатын мүмкіндіктер туралы мәліметтер. Орыс, қазақ және ағылшын тілдерінде дайындалған.',
    'Information about the Association, its purpose, areas of activity and the opportunities it offers. Prepared in Russian, Kazakh and English.'
  ),
  'groups.3.items.0.actionHref': documentRequest(documentTitles.presentation),
  'groups.3.items.1.title': documentTitles.privacy,
  'groups.3.items.1.text': pair(
    'Сайтқа кірушілердің деректерін өңдеу тәртібі, cookie файлдарын пайдалану, сыртқы ресурстардың ендірілетін мазмұны және пайдаланушылардың құқықтары.',
    'How the data of site visitors is processed, the use of cookies, embedded content from third-party resources and the rights of users.'
  ),
  'groups.3.items.1.actionHref': documentRequest(documentTitles.privacy),
  'action.label': pair('Көшірмесін сұрату', 'Request a copy'),
  'belt.alt': pair(
    'Ашық түсті бетте үш байлауы бар жабық қалта, басып шығарылған беттер бумасы және үстел мөрі, жоғарыдан көрініс',
    'Three closed folders with ties, a stack of printed pages and a desk stamp on a light surface, seen from above'
  ),
  'access.h2': pair('Құжатты қалай алуға болады', 'How to obtain a document'),
  'access.text': pair(
    'Қауымдастықтың ресми мекенжайына өтініш жіберіп, қажет құжатты көрсетіңіз. Жауабында Қауымдастық материалдың қолжетімділігін және оны беру нысанын растайды.',
    'Send an enquiry to the official address of the Association and specify the document you need. In its reply the Association will confirm that the material is available and the form in which it will be provided.'
  ),
  'access.note': pair(
    'Құжаттардың мазмұны және олардың ережелерін қолдану бойынша нақтылайтын сұрақтар да осылай қабылданады.',
    'Clarifying questions about the content of documents and the application of their provisions are accepted in the same way.'
  ),
  'cta.h2': pair('Құжаттарды сұрату', 'Request documents'),
  'cta.text': pair(
    'Көшірмені сұрату, материалдың қолжетімділігін нақтылау және бейінді сұрақтар — ресми мекенжайға.',
    'Requests for a copy, questions about whether a material is available and questions specific to the industry go to the official address.'
  ),
  'cta.primary.label': shared.writeToEmail,
  'cta.primary.href': mailtoPair(
    'Қауымдастық құжаттарын сұрату',
    'Request for Association documents'
  ),
  'cta.secondary.label': shared.reporting
} as const satisfies Record<string, Translation>;

/**
 * Доступное имя кнопки запроса состоит из подписи и названия документа, поэтому
 * собирается из уже переведённых значений, а не пишется отдельной строкой.
 */
const documentActionNames = Object.fromEntries(
  Object.entries(documentsBase)
    .filter(([key]) => /^groups\.\d+\.items\.\d+\.title$/.test(key))
    .map(([key, title]) => [
      key.replace(/\.title$/, '.actionAria'),
      pair(
        `${documentsBase['action.label'].kk} (Gmail): ${title.kk}`,
        `${documentsBase['action.label'].en} in Gmail: ${title.en}`
      )
    ])
);

export const documentsI18n: Record<string, Translation> = {
  ...documentsBase,
  ...documentActionNames
};

export const newsI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығының жаңалықтары мен оқиғалары',
    'News and events of the Association of Jewellers of the EAEU'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығының 2024 және 2025 жылғы салалық іс-шараларға қатысу хроникасы: кеңестер, дөңгелек үстелдер, Қазақстан зергерлерінің Бірінші Конгресі және таңбалауды талқылау.',
    'A chronicle of the Association of Jewellers of the EAEU’s participation in industry events in 2024 and 2025: meetings, round tables, the First Congress of Jewellers of Kazakhstan and discussions of marking.'
  ),
  crumb: pair('Жаңалықтар', 'News'),
  'hero.eyebrow': shared.newsAndEvents,
  'hero.h1': pair('Жаңалықтар', 'News'),
  'hero.lead': pair(
    'Қауымдастықтың салалық іс-шараларға қатысу хроникасы: қандай мәселелер қаралды және қатысушылар неге келді.',
    'A chronicle of the Association’s participation in industry events: which questions were considered and what the participants concluded.'
  ),
  listNote: pair(
    'Материалдар Қауымдастықтың 2024 және 2025 жылғы іс-шаралар тізбелері бойынша дайындалған.',
    'The materials are based on the Association’s lists of events for 2024 and 2025.'
  ),
  'list.aria': pair('Басқа материалдар', 'Other materials'),
  'featured.eyebrow': pair('Басты материал', 'Lead material'),
  'featured.dateLabel': pair('2025 жылғы 5 маусым', '5 June 2025'),
  'featured.title': pair(
    'Қазақстан зергерлерінің Бірінші Конгресі',
    'The First Congress of Jewellers of Kazakhstan'
  ),
  'featured.paragraphs.0': pair(
    'Қауымдастық бизнес, мемлекеттік органдар және халықаралық ұйымдар өкілдерін біріктірген салалық оқиға — Қазақстан зергерлерінің Бірінші Конгресіне қатысты.',
    'The Association took part in the First Congress of Jewellers of Kazakhstan, an industry event that brought together representatives of business, government authorities and international organisations.'
  ),
  'featured.paragraphs.1': pair(
    '«Халықаралық тәжірибе және аффинаж секторы» тақырыптық сессиясында Қауымдастық зергерлік нарықтың заманауи үрдістері мен сын-тегеуріндері және кәсіби бірлестіктер қызметінің мәні туралы баяндама ұсынды. Бөлек таңбалауға, бақыланушылыққа және бұйымдарды сертификаттауға тәсілдерді біріздендіру мәселелері қаралды.',
    'At the themed session “International experience and the refining sector” the Association presented a report on current trends and challenges in the jewellery market and on the role of professional associations. The unification of approaches to marking, traceability and certification of items was considered separately.'
  ),
  'featured.paragraphs.2': pair(
    'Іс-шара қорытындысы бойынша ынтымақтастық туралы екі меморандумға қол қойылды: аффинаж және стандарттау саласында, сондай-ақ зергерлік айналымды заңдастыру және контрафактіге қарсы бастамалар шеңберінде өзара іс-қимыл мәселелері бойынша.',
    'Following the event, two memoranda of cooperation were signed: on refining and standardisation, and on the legalisation of jewellery circulation and cooperation within anti-counterfeiting initiatives.'
  ),
  'featured.imageAlt': pair(
    'Салалық кеңеске қатысушылар келіссөз үстелінде құжаттарды талқылап отыр',
    'Participants in an industry meeting discussing documents at a negotiating table'
  ),
  'items.0.dateLabel': pair('2025 жылғы 9 шілде', '9 July 2025'),
  'items.0.title': pair(
    'Бұйымдарды таңбалау бойынша реттеушілік әсерді талдауды талқылау',
    'Discussion of the regulatory impact assessment for the marking of items'
  ),
  'items.0.text': pair(
    'Қауымдастық зергерлік бұйымдарды міндетті таңбалау және бақылауды енгізу бойынша реттеушілік әсерді талдау нәтижелерін қоғамдық талқылауға қатысты. Талқылау онлайн форматта өтті; ұстанымдарды мемлекеттік органдар және таңбалаудың бірыңғай операторы ұсынды.',
    'The Association took part in the public consultation on the results of the regulatory impact assessment for introducing mandatory marking and traceability of jewellery items. The consultation was held online; positions were presented by government authorities and the single marking operator.'
  ),
  'items.0.detail': pair(
    'Қауымдастық нарық қатысушыларына әкімшілік және қаржылық жүктеменің өсу қаупіне және басқа салаларда ұқсас таңбалауды қолдану тәжірибесіне назар аудартты. Ашық нормативтік құқықтық актілер порталында міндетті таңбалауды енгізуге қарсы 26 пікірдің 25-і айтылды.',
    'The Association drew attention to the risk of a growing administrative and financial burden on market participants and to the experience of applying similar marking in other industries. On the portal of open regulatory legal acts, 25 of the 26 comments opposed the introduction of mandatory marking.'
  ),
  'items.0.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.1.dateLabel': pair('2025 жылғы 2 сәуір', '2 April 2025'),
  'items.1.title': pair(
    'Саланы мемлекеттік реттеу бойынша сараптамалық кеңес',
    'Expert meeting on state regulation of the industry'
  ),
  'items.1.text': pair(
    'Қауымдастық Қазақстан Республикасының зергерлік саласын мемлекеттік реттеуді жетілдіру мәселелері бойынша сараптамалық кеңеске қатысты. Талқылауға мемлекеттік органдардың, салалық бірлестіктердің және бизнестің өкілдері қатысты.',
    'The Association took part in an expert meeting on improving the state regulation of the jewellery industry of the Republic of Kazakhstan. Representatives of government authorities, industry associations and business took part in the discussion.'
  ),
  'items.1.detail': pair(
    'Қатысушылар айналымның ресми есептіліктен тыс елеулі үлесін және субъектілер саны мен тауар айналымы көлемі бойынша дұрыс статистиканың жоқтығын атап өтті. Қауымдастық тіркеу кезінде дұрыс ЭҚЖЖ көрсетуді міндеттеу, өнімді сынау мен сертификаттауды күшейту, айналымның адал қатысушыларын салықтық ынталандыру және саланың бірыңғай үйлестіруші органын құру туралы ұсыныстарды қолдады.',
    'Participants noted the significant share of turnover outside official reporting and the absence of reliable statistics on the number of businesses and the volume of trade. The Association supported proposals to make the correct economic activity code mandatory at registration, to strengthen product testing and certification, to provide tax incentives for honest participants in the market and to create a single coordinating body for the industry.'
  ),
  'items.1.imageAlt': pair(
    'Салалық іс-шара залы: қатысушылар таратылатын материалдар қойылған үстелдерде',
    'A hall at an industry event: participants at tables with handout materials'
  ),
  'items.2.dateLabel': pair('2025 жылғы 23 қаңтар', '23 January 2025'),
  'items.2.title': pair(
    'Жеңіл өнеркәсіптегі міндетті таңбалау және шағын бизнес туралы конференция',
    'Conference on mandatory marking and small business in light industry'
  ),
  'items.2.text': pair(
    'Қауымдастық жеңіл өнеркәсіптегі шағын және микробизнес кәсіпорындарына міндетті таңбалаудың әсерін талдауға арналған конференцияға қатысты. Ұйымдастырушы — «Шағын бизнеске жәрдемдесу» өңірлік қоғамдық ұйымы, кәсіпкерлерге арналған «Свое дело плюс» порталының қолдауымен.',
    'The Association took part in a conference on the impact of mandatory marking on small and micro-businesses in light industry. The organiser was the regional public organisation “Assistance to Small Business”, with support from the “Svoye delo plus” portal for entrepreneurs.'
  ),
  'items.2.detail': pair(
    'Талқылауға Ресей мен Қазақстан кәсіпкерлері, РФ мемлекеттік органдарының өкілдері, үкіметтік емес ұйымдар және БАҚ қатысты. Қатысушылар таңбалауды енгізудің қаржылық және техникалық шығындары, әсіресе микробизнес үшін, және талаптарды шағын бизнестің мүмкіндіктеріне бейімдеу қажеттігі туралы айтты.',
    'Entrepreneurs from Russia and Kazakhstan, representatives of Russian government authorities, non-governmental organisations and the media took part in the discussion. Participants spoke about the financial and technical costs of introducing marking, especially for micro-businesses, and about the need to adapt the requirements to the capacities of small business.'
  ),
  'items.2.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.3.dateLabel': pair('2024 жылғы 26 желтоқсан', '26 December 2024'),
  'items.3.title': pair(
    'Міндетті таңбалау бойынша дөңгелек үстел',
    'Round table on mandatory marking'
  ),
  'items.3.text': pair(
    'Қауымдастық міндетті таңбалау бойынша дөңгелек үстелге қатысты. Ұйымдастырушы — «Республика» партиясы.',
    'The Association took part in a round table on mandatory marking. The organiser was the Republic party.'
  ),
  'items.3.detail': pair(
    'Таңбалаудың пилоттық жобаларының қорытындылары, өнімнің өзіндік құнына әсері және қазақстандық таңбаның мәртебесін арттыру қаралды. Міндетті таңбалауды енгізуге қарсы дәлелдер ұсынылды; реттеу жүйесін пысықтау бойынша келесі қадамдар белгіленді.',
    'The results of pilot marking projects, the effect on production costs and raising the status of the Kazakhstani hallmark were considered. Arguments against introducing mandatory marking were presented; further steps to refine the regulatory system were outlined.'
  ),
  'items.3.imageAlt': pair(
    'Салалық іс-шара залы: қатысушылар таратылатын материалдар қойылған үстелдерде',
    'A hall at an industry event: participants at tables with handout materials'
  ),
  'items.4.dateLabel': pair('2024 жылғы 2 қазан', '2 October 2024'),
  'items.4.title': pair(
    'ҚР Сауда және интеграция министрлігіндегі кеңес',
    'Meeting at the Ministry of Trade and Integration of the Republic of Kazakhstan'
  ),
  'items.4.text': pair(
    'Қауымдастық Қазақстан Республикасының Сауда және интеграция министрлігіндегі кеңеске қатысты. Төрағалық еткен — Премьер-Министрдің орынбасары С. Жұманғарин.',
    'The Association took part in a meeting at the Ministry of Trade and Integration of the Republic of Kazakhstan. It was chaired by Deputy Prime Minister S. Zhumangarin.'
  ),
  'items.4.detail': pair(
    'Әртүрлі тауар топтары үшін таңбалауды енгізу, сауданы цифрландыру және көлеңкелі экономиканы азайту талқыланды. Таңбалау туралы заңнаманы қайта қарау бойынша ұсыныстар дайындалды.',
    'The introduction of marking for various product groups, the digitalisation of trade and the reduction of the shadow economy were discussed. Proposals to revise the legislation on marking were prepared.'
  ),
  'items.4.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.5.dateLabel': pair('2024 жылғы 11 қыркүйек', '11 September 2024'),
  'items.5.title': pair(
    '«Бизнес пен үкімет диалогы» дөңгелек үстелі',
    'Round table “Dialogue of business and government”'
  ),
  'items.5.text': pair(
    'Қауымдастық «Бизнес пен үкімет диалогы» дөңгелек үстеліне қатысты. Ұйымдастырушылар — Қазақстан Республикасының бизнес-қауымдастықтары.',
    'The Association took part in the round table “Dialogue of business and government”. The organisers were business associations of the Republic of Kazakhstan.'
  ),
  'items.5.detail': pair(
    'Таңбалаудың экономикаға және баға өсіміне әсері, мемлекеттің бизнес-процестерге араласуы және ДСҰ мен ЕАЭО халықаралық міндеттемелерін бұзу ықтималдығы қаралды. Бизнес мүддесін қорғау туралы ҚР Президентіне үндеу дайындалды.',
    'The effect of marking on the economy and price growth, state intervention in business processes and possible breaches of WTO and EAEU international commitments were considered. An appeal to the President of the Republic of Kazakhstan asking to protect the interests of business was prepared.'
  ),
  'items.5.imageAlt': pair(
    'Салалық іс-шара залы: қатысушылар таратылатын материалдар қойылған үстелдерде',
    'A hall at an industry event: participants at tables with handout materials'
  ),
  'items.6.dateLabel': pair('2024 жылғы 10 қыркүйек', '10 September 2024'),
  'items.6.title': pair(
    '«Атамекен» ҰКП-дағы кеңес',
    'Meeting at the Atameken National Chamber of Entrepreneurs'
  ),
  'items.6.text': pair(
    'Қауымдастық «Атамекен» ҰКП-дағы кеңеске қатысты. Төрағалық еткен — «Атамекен» ҰКП Төралқасының төрағасы Райымбек Баталов.',
    'The Association took part in a meeting at the Atameken National Chamber of Entrepreneurs. It was chaired by Raimbek Batalov, Chairman of the Presidium of Atameken.'
  ),
  'items.6.detail': pair(
    'Міндетті таңбалаудың зергерлік бизнеске әсері, шағын және орта бизнеске жүктеме және бақылаудың қайталануы талқыланды. Қатысушылардың көпшілігі міндетті таңбалауды енгізуге қарсы шықты; балама шаралар ұсынылды.',
    'The effect of mandatory marking on the jewellery business, the burden on small and medium-sized businesses and the duplication of control were discussed. Most participants opposed the introduction of mandatory marking; alternative measures were proposed.'
  ),
  'items.6.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.7.dateLabel': pair('2024 жылғы 20 маусым', '20 June 2024'),
  'items.7.title': pair(
    'ҚР-ның ЕАЭО мен ДСҰ-ға қатысуы мәселелері бойынша Қоғамдық қабылдау отырысы',
    'Public reception meeting on the participation of Kazakhstan in the EAEU and the WTO'
  ),
  'items.7.text': pair(
    'Қауымдастық Қазақстан Республикасының ЕАЭО мен ДСҰ-ға қатысуы мәселелері бойынша Қоғамдық қабылдау отырысына қатысты. Ұйымдастырушы — ҚР Сауда және интеграция министрлігі, төраға — вице-министр Құшықова Ж.С.',
    'The Association took part in a public reception meeting on the participation of the Republic of Kazakhstan in the EAEU and the WTO. The organiser was the Ministry of Trade and Integration of the Republic of Kazakhstan; the chair was Vice-Minister Kushukova Zh.S.'
  ),
  'items.7.detail': pair(
    'Санкциялардың қазақстандық өнім экспортына әсері, шетелдік өндірушілердің демпингі және тұтынушылардың құқықтарын қорғау саласындағы ЕАЭО заңнамасын біріздендіру қаралды. Қатысушылар мемлекеттік органдармен диалогты жалғастыруға дайын екенін білдірді; сауда кедергілерін жою шаралары ұсынылды.',
    'The effect of sanctions on Kazakhstani exports, dumping by foreign producers and the unification of EAEU legislation on consumer protection were considered. Participants expressed readiness to continue dialogue with government authorities; measures to remove trade barriers were proposed.'
  ),
  'items.7.imageAlt': pair(
    'Салалық іс-шара залы: қатысушылар таратылатын материалдар қойылған үстелдерде',
    'A hall at an industry event: participants at tables with handout materials'
  ),
  'items.8.dateLabel': pair('2024 жылғы 18 маусым', '18 June 2024'),
  'items.8.title': pair(
    'Зергерлік бұйымдарды таңбалау бойынша қоғамдық талқылау',
    'Public consultation on the marking of jewellery items'
  ),
  'items.8.text': pair(
    'Қауымдастық зергерлік бұйымдарды таңбалау бойынша онлайн талқылауға қатысты. Ұйымдастырушы — ҚР ӨҚС Өнеркәсіп комитеті, төраға — төрағаның орынбасары Жолмағамбетов Т.Б.',
    'The Association took part in an online consultation on the marking of jewellery items. The organiser was the Committee for Industry of the Ministry of Industry and Construction of the Republic of Kazakhstan; the chair was Deputy Chairman Zholmagambetov T.B.'
  ),
  'items.8.detail': pair(
    'Таңбалауды енгізудің реттеушілік әсерін талдау және бақылау сәйкестендіру белгілерінің құны қаралды. Талқылау қорытындысы бойынша зергерлік бұйымдарды таңбалау орынсыз деп танылды.',
    'The regulatory impact assessment of introducing marking and the cost of control identification marks were considered. Following the discussion, the marking of jewellery items was found inexpedient.'
  ),
  'items.8.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.9.dateLabel': pair('2024 жылғы 12 маусым', '12 June 2024'),
  'items.9.title': pair(
    '«Атамекен» ҰКП-дағы кеңес',
    'Meeting at the Atameken National Chamber of Entrepreneurs'
  ),
  'items.9.text': pair(
    'Қауымдастық «Атамекен» ҰКП-дағы кеңеске қатысты. Төрағалық еткен — ҚР ҰКП Басқарма төрағасының орынбасары Жаркенов Т.З.',
    'The Association took part in a meeting at the Atameken National Chamber of Entrepreneurs. It was chaired by Zharkenov T.Z., Deputy Chairman of the Management Board of the National Chamber of Entrepreneurs of the Republic of Kazakhstan.'
  ),
  'items.9.detail': pair(
    'Дәрілік заттарды таңбалауды енгізуге дайындық, бизнес-процестерді оңтайландыру және шағын бизнес үшін таңбалау шығындарын азайту талқыланды. Кәсіпкерлерге шығындарды өтеу бойынша ұсыныстар дайындалды.',
    'Readiness to introduce marking of medicines, the optimisation of business processes and reducing marking costs for small business were discussed. Proposals to compensate entrepreneurs for the costs were prepared.'
  ),
  'items.9.imageAlt': pair(
    'Салалық іс-шара залы: қатысушылар таратылатын материалдар қойылған үстелдерде',
    'A hall at an industry event: participants at tables with handout materials'
  ),
  'items.10.dateLabel': pair('2024 жылғы 6 маусым', '6 June 2024'),
  'items.10.title': pair(
    '«Атамекен» ҰКП отырысы',
    'Meeting of the Atameken National Chamber of Entrepreneurs'
  ),
  'items.10.text': pair(
    'Қауымдастық «Атамекен» ҰКП отырысына қатысты. Төрағалық еткен — Премьер-Министрдің орынбасары С. Жұманғарин.',
    'The Association took part in a meeting of the Atameken National Chamber of Entrepreneurs. It was chaired by Deputy Prime Minister S. Zhumangarin.'
  ),
  'items.10.detail': pair(
    'Дәрілік заттар мен тауарларды таңбалауды енгізу, қоймадағы қорларды талдау және таңбалаудың бизнеске әсерін бағалау қаралды. Таңбалау қағидаларына техникалық түзетулер бойынша шешімдер қабылданды.',
    'The introduction of marking for medicines and goods, an analysis of warehouse stocks and an assessment of the effect of marking on business were considered. Decisions were taken on technical adjustments to the marking rules.'
  ),
  'items.10.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.11.dateLabel': pair('2024 жылғы 5 маусым', '5 June 2024'),
  'items.11.title': pair(
    'СҚО «Атамекен» ҰКП жанындағы Қоғамдық қабылдау',
    'Public reception at the Atameken National Chamber of Entrepreneurs of the North Kazakhstan Region'
  ),
  'items.11.text': pair(
    'Қауымдастық Солтүстік Қазақстан облысының «Атамекен» ҰКП жанындағы қоғамдық қабылдауға қатысты. Төрағалық еткен — СҚО прокуроры Ә. Әлиханұлы.',
    'The Association took part in a public reception at the Atameken National Chamber of Entrepreneurs of the North Kazakhstan Region. It was chaired by the prosecutor of the North Kazakhstan Region, A. Alikhanuly.'
  ),
  'items.11.detail': pair(
    'Зергерлік бұйымдарды лицензиялау және сертификаттау проблемалары, мемлекеттік бақылау тетіктерінің кемшіліктері және тұтынушылардың құқықтарын қорғау саласындағы ЕАЭО заңнамасын біріздендіру қажеттігі қаралды. Нормативтік актілерге өзгерістер енгізу ұсыныстары шығарылды; билік органдарымен диалог бастамашылық етілді.',
    'Problems of licensing and certification of jewellery items, shortcomings of state control mechanisms and the need to unify EAEU legislation on consumer protection were considered. Proposals to amend regulatory acts were put forward; a dialogue with the authorities was initiated.'
  ),
  'items.11.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'items.12.dateLabel': pair('2024 жылғы 16 мамыр', '16 May 2024'),
  'items.12.title': pair(
    'Өңірлік деңгейдегі қоғамдық қабылдау',
    'Regional-level public reception'
  ),
  'items.12.text': pair(
    'Қауымдастық өңірлік деңгейдегі қоғамдық қабылдауға қатысты.',
    'The Association took part in a regional-level public reception.'
  ),
  'items.12.detail': pair(
    'Зергерлік бизнестің өңірлік проблемалары, таңбалау мен сертификаттаудағы әкімшілік кедергілер және шағын және орта кәсіпорындардың қаржы құралдарына қолжетімділігі қаралды. Анықталған проблемаларды жою бойынша ұсынымдар ұсынылды; нормативтік актілерді түзету қажеттігі атап өтілді.',
    'Regional problems of the jewellery business, administrative barriers in marking and certification, and access of small and medium-sized enterprises to financial instruments were considered. Recommendations to remove the identified problems were presented; the need to adjust regulatory acts was noted.'
  ),
  'items.12.imageAlt': pair(
    'Салалық іс-шара залы: қатысушылар таратылатын материалдар қойылған үстелдерде',
    'A hall at an industry event: participants at tables with handout materials'
  ),
  'items.13.dateLabel': pair('2024 жылғы 2 мамыр', '2 May 2024'),
  'items.13.title': pair(
    'ҚР Сауда және интеграция министрлігіндегі кеңес',
    'Meeting at the Ministry of Trade and Integration of the Republic of Kazakhstan'
  ),
  'items.13.text': pair(
    'Қауымдастық Қазақстан Республикасының Сауда және интеграция министрлігіндегі кеңеске қатысты. Төрағалық еткен — министр А. Шаққалиев.',
    'The Association took part in a meeting at the Ministry of Trade and Integration of the Republic of Kazakhstan. It was chaired by Minister A. Shakkaliyev.'
  ),
  'items.13.detail': pair(
    'Тауарларды таңбалау жүйесін ТЗТ АЖ-мен интеграциялау, мотор майын таңбалау бойынша пилоттық жоба және зергерлік бұйымдарды таңбалау ұсыныстары қаралды. Интеграцияны аяқтау кестесі бекітілді; бизнестің ұсыныстары қабылданды.',
    'The integration of the goods marking system with the IS MPT, a pilot project on the marking of motor oil and proposals on the marking of jewellery items were considered. A schedule for completing the integration was approved; business proposals were accepted.'
  ),
  'items.13.imageAlt': pair(
    'Ірі план: маман зергерлік жүзікті лупа арқылы қарап тұр',
    'Close-up: a specialist examining a ring through a loupe'
  ),
  'cta.h2': pair('Іс-шаралардың толық материалдары', 'Full materials of the events'),
  'cta.text': pair(
    'Іс-шаралар тізбелерін және есептік материалдарды Қауымдастық ресми мекенжайға сұрау бойынша береді.',
    'The Association provides lists of events and reporting materials on request to its official address.'
  ),
  'cta.primary.label': shared.writeToEmail,
  'cta.primary.href': mailtoPair(
    'Іс-шара материалдарын сұрату',
    'Request for event materials'
  ),
  'cta.secondary.label': shared.reporting
} as const satisfies Record<string, Translation>;

export const contactsI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығының байланыс деректері',
    'Contacts of the Association of Jewellers of the EAEU'
  ),
  'meta.description': pair(
    `ЕАЭО зергерлер қауымдастығының байланыс деректері: электрондық пошта ${org.email}, телефон және өтініштер мен кіру туралы өтініштер үшін Петропавлдағы мекенжай.`,
    `Contacts of the Association of Jewellers of the EAEU: email ${org.email}, telephone and the address in Petropavl for enquiries and applications to join.`
  ),
  crumb: pair('Байланыс', 'Contacts'),
  'hero.eyebrow': pair('Байланыс', 'Contacts'),
  'hero.h1': pair('Байланыс', 'Contacts'),
  'hero.lead': pair(
    'Өтініштерді, кіру туралы өтініштерді және салалық мәселелерді Қауымдастық электрондық пошта, телефон арқылы және Петропавлдағы мекенжай бойынша қабылдайды.',
    'The Association accepts enquiries, applications to join and industry questions by email, by telephone and at its address in Petropavl.'
  ),
  'hero.action.label': shared.writeToAssociation,
  'hero.action.href': mailtoPair('Қауымдастыққа өтініш', 'Enquiry to the Association'),
  'hero.call.label': pair('Қоңырау шалу', 'Call'),
  'hero.call.aria': pair(`Қоңырау шалу ${org.phone}`, `Call ${org.phone}`),
  'hero.imageAlt': pair(
    'Терезе жанындағы жұмыс үстелі: жабық блокнот, қалам, басып шығарылған беттер бумасы, телефон және су құйылған стақан',
    'A desk by a window: a closed notebook, a pen, a stack of printed pages, a telephone and a glass of water'
  ),
  'actions.h2': pair('Қалай байланысуға болады', 'How to get in touch'),
  'actions.items.0.term': pair('Электрондық пошта', 'Email'),
  'actions.items.0.href': mailtoPair('Қауымдастыққа өтініш', 'Enquiry to the Association'),
  'actions.items.0.aria': pair(`Gmail арқылы жазу: ${org.email}`, `Write to ${org.email} in Gmail`),
  'actions.items.0.hint': pair(
    'Негізгі арна: өтініштер, кіру туралы өтініштер және оларға қоса берілетін құжаттар.',
    'The main channel: enquiries, applications to join and their attachments.'
  ),
  'actions.items.1.term': pair('Телефон', 'Telephone'),
  'actions.items.1.aria': pair(`Қоңырау шалу ${org.phone}`, `Call ${org.phone}`),
  'actions.items.1.hint': pair(
    'Жалпы мәселелер бойынша Қауымдастыққа қоңырау.',
    'A call to the Association on general questions.'
  ),
  'actions.items.2.term': shared.address,
  'actions.items.2.value': shared.addressValue,
  'actions.items.2.hint': pair('Хат-хабар үшін мекенжай.', 'Address for correspondence.'),
  'actions.note': pair(
    'Қабылдау сағаттары Қауымдастықтың материалдарында тіркелмеген, сондықтан мұнда көрсетілмеген. Жазбаша өтініш байланыстың ең сенімді тәсілі болып қалады.',
    'Opening hours are not fixed in the Association’s materials, so they are not given here. A written enquiry remains the most reliable way to get in touch.'
  ),
  'requisites.h2': pair('Деректемелер', 'Registration details'),
  'requisites.items.0.term': shared.fullName,
  'requisites.items.1.term': shared.bin,
  'requisites.items.2.term': shared.registrationDate,
  'requisites.items.2.value': shared.registeredOn,
  'requisites.link.label': pair(
    'Қауымдастық туралы ресми мәліметтер',
    'Official information about the Association'
  ),
  'visual.title': pair(
    'Өтініш мәні бойынша қаралады',
    'An enquiry is considered on its merits'
  ),
  'visual.text': pair(
    'Қауымдастық жеке мәселені салалық күн тәртібіне аударады: хат хат алмасу болып қалмай, кәсіби талқылаудың тақырыбына айналуы мүмкін.',
    'The Association moves an individual question onto the industry agenda: a letter can become the subject of professional discussion rather than remaining an exchange of correspondence.'
  ),
  'cta.h2': shared.writeToAssociation,
  'cta.text': pair(
    'Ресми мекенжай — кіру туралы өтініштер, құжаттарды сұрату және салалық мәселелер үшін негізгі арна.',
    'The official address is the main channel for applications to join, requests for documents and industry questions.'
  ),
  'cta.primary.label': shared.writeToEmail,
  'cta.primary.href': mailtoPair('Қауымдастыққа өтініш', 'Enquiry to the Association'),
  'cta.secondary.label': shared.becomeMember
} as const satisfies Record<string, Translation>;

export const knowledgeI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығының білім базасы — материалдар бойынша навигация',
    'Knowledge base of the Association of Jewellers of the EAEU — navigating the materials'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығының материалдары бойынша навигация: қызмет бағыттары, Кеңестің сараптамалық жұмысы, құжаттар, есептік материалдар және салалық іс-шаралар хроникасы.',
    'Navigating the materials of the Association of Jewellers of the EAEU: areas of activity, the expert work of the Council, documents, reporting materials and the chronicle of industry events.'
  ),
  crumb: pair('Білім базасы', 'Knowledge base'),
  'hero.eyebrow': pair('Білім базасы', 'Knowledge base'),
  'hero.h1': pair('Білім базасы', 'Knowledge base'),
  'hero.lead': pair(
    'Қауымдастықтың материалдары бойынша навигация: неден бастау керек, құжаттарды қайдан іздеу керек және бейінді мәселемен қайда жүгіну керек.',
    'Navigating the Association’s materials: where to start, where to look for documents and where to turn with a question specific to the industry.'
  ),
  listNote: pair(
    'Бөлім Қауымдастықтың бұрын жарияланған материалдарын жинайды.',
    'This section brings together materials already published by the Association.'
  ),
  'list.aria': pair('Материалдар бойынша навигация', 'Navigation through the materials'),
  'start.h2': pair('Неден бастау керек', 'Where to start'),
  'start.lead': pair(
    'Қауымдастықтың материалдарын алғаш ашсаңыз — үш қысқа жол.',
    'Three short routes if you are opening the Association’s materials for the first time.'
  ),
  'start.items.0.title': pair('Құжат керек', 'You need a document'),
  'start.items.0.text': pair(
    'Қауымдастықтың ішкі құжаттары мен материалдарының тізбесі, әрқайсысына түсіндірмесі және көшірмесін сұрату мүмкіндігі бар.',
    'A list of the Association’s internal documents and materials, with a note on each and a way to request a copy.'
  ),
  'start.items.0.link.label': shared.documents,
  'start.items.1.title': pair('Контекст керек', 'You need context'),
  'start.items.1.text': pair(
    'Қауымдастық қатысқан салалық талқылаулардың хроникасы: қандай мәселелер қаралды және қатысушылар неге келді.',
    'A chronicle of industry discussions involving the Association: which questions were considered and what the participants concluded.'
  ),
  'start.items.1.link.label': shared.newsAndEvents,
  'start.items.2.title': pair('Сараптамалық баға керек', 'You need an expert assessment'),
  'start.items.2.text': pair(
    'Сараптамалық-консультативтік кеңестің міндеті, жұмыс қағидаттары және қарайтын мәселелер шеңбері.',
    'The purpose of the Expert and Advisory Council, its working principles and the range of questions it considers.'
  ),
  'start.items.2.link.label': shared.expertCouncil,
  'toc.label': pair('Бөлім мазмұны', 'Contents of the section'),
  'toc.items.0.label': pair('Ұйым және бағыттар', 'The organisation and its areas of work'),
  'toc.items.1.label': pair('Құжаттар және есептілік', 'Documents and reporting'),
  'toc.items.2.label': pair('Сала хроникасы', 'Chronicle of the industry'),
  'toc.items.3.label': pair('Бейінді мәселе', 'A question specific to the industry'),
  'groups.0.title': pair('Ұйым және бағыттар', 'The organisation and its areas of work'),
  'groups.0.lead': pair(
    'Қауымдастық өзі не және оның жұмысы неден құралады.',
    'What the Association is and what its work consists of.'
  ),
  'groups.0.items.0.label': pair('Қауымдастық туралы', 'About the Association'),
  'groups.0.items.0.text': pair(
    'Мәртебесі, мақсаты, кәсіби қоғамдастықтағы рөлі және ресми мәліметтер.',
    'Status, purpose, role in the professional community and official information.'
  ),
  'groups.0.items.1.label': pair('Қызмет', 'Activities'),
  'groups.0.items.1.text': pair(
    'Жұмыс бағыттары: салалық диалог, құжат жобаларының сараптамасы, мүшелерді қолдау, серіктестік.',
    'Areas of work: industry dialogue, review of draft documents, member support, partnerships.'
  ),
  'groups.0.items.2.label': shared.expertCouncil,
  'groups.0.items.2.text': pair(
    'Кеңестің міндеті, жұмыс қағидаттары, қарайтын мәселелер шеңбері және құрамды жасақтау тәртібі.',
    'The purpose of the Council, its working principles, the range of questions it considers and how its membership is formed.'
  ),
  'groups.1.title': pair('Құжаттар және есептілік', 'Documents and reporting'),
  'groups.1.lead': pair(
    'Бастапқы дереккөздер: Қауымдастықтың ішкі құжаттары және есептік материалдар.',
    'Primary sources: the internal documents of the Association and its reporting materials.'
  ),
  'groups.1.items.0.label': shared.documents,
  'groups.1.items.0.text': pair(
    'Кіру тәртібі, жарналар туралы ереже, Кеңес туралы ереже, презентациялық материалдар және деректерді өңдеу саясаты.',
    'The procedure for joining, the regulations on contributions, the regulations on the Council, presentation materials and the data processing policy.'
  ),
  'groups.1.items.1.label': shared.reporting,
  'groups.1.items.1.text': pair(
    '2024 жылғы жұмыс туралы есеп, 2025 жылға арналған перспективалы бағыттар және іс-шаралар тізбелері.',
    'The report on the work for 2024, the priority areas for 2025 and the lists of events.'
  ),
  'groups.2.title': pair('Сала хроникасы', 'Chronicle of the industry'),
  'groups.2.lead': pair(
    'Салалық мәселелер Қауымдастық қатысатын талқылаулардан қалай өтеді.',
    'How industry questions pass through discussions involving the Association.'
  ),
  'groups.2.items.0.label': shared.newsAndEvents,
  'groups.2.items.0.text': pair(
    'Қауымдастықтың салалық іс-шараларға қатысуы, қаралған мәселелер және талқылау нәтижелері.',
    'The Association’s participation in industry events, the questions considered and the results of the discussions.'
  ),
  'groups.3.title': pair('Бейінді мәселе', 'A question specific to the industry'),
  'groups.3.lead': pair(
    'Мәселе нақты компанияға қатысты болса, не істеу керек.',
    'What to do if the question concerns a particular company.'
  ),
  'groups.3.items.0.label': pair('Мүшелік', 'Membership'),
  'groups.3.items.0.text': pair(
    'Кіру шарттары мен тәртібі, өтінішке қоса берілетін құжаттардың құрамы, жарна түрлері.',
    'The conditions and procedure for joining, the attachments to the application and the types of contributions.'
  ),
  'groups.3.items.1.label': pair('Байланыс', 'Contacts'),
  'groups.3.items.1.text': pair(
    'Қауымдастыққа өтініш жасау үшін электрондық пошта, телефон және мекенжай.',
    'Email, telephone and address for enquiries to the Association.'
  ),
  'expertise.h2': pair(
    'Қандай мәселемен жүгінуге болады',
    'What you can turn to the Association about'
  ),
  'expertise.lead': pair(
    'Қауымдастық өз мүшелеріне және нарық қатысушыларына консультация беретін бағыттар оның материалдарында тіркелген.',
    'The areas in which the Association advises its members and market participants are set out in its materials.'
  ),
  'expertise.items.0.title': pair('Заңнама және стандарттар', 'Legislation and standards'),
  'expertise.items.0.text': pair(
    'Зергерлік бизнес, заңнама және қолданылатын стандарттар мәселелері бойынша қолдау және консультация.',
    'Support and advice on jewellery business, legislation and the standards that apply.'
  ),
  'expertise.items.1.title': pair('Тасты бағалау', 'Appraisal of a stone'),
  'expertise.items.1.text': pair(
    'Геммолог қызметі: маман қымбат тасты бағалайды, оның табиғи немесе жасанды шығу тегін және өңделу фактісін анықтайды.',
    'Gemmologist services: the specialist appraises a precious stone, determines whether it is of natural or synthetic origin and identifies whether it has been treated.'
  ),
  'expertise.items.2.title': pair('Құжат жобалары', 'Draft documents'),
  'expertise.items.2.text': pair(
    'Кәсіпкерлік мүддесіне қатысты нормативтік құқықтық актілердің жобаларын және реттеу саясатының консультативтік құжаттарын қарау.',
    'Review of draft regulatory legal acts and consultative documents on regulatory policy that affect the interests of business.'
  ),
  'expertise.caption': pair(
    'Қауымдастық бастапқы дереккөзбен жұмыс істейді: құжатпен, бұйыммен, үлгімен — және олардың талаптарға сәйкестігімен.',
    'The Association works with the primary source: the document, the item, the sample — and how they meet the requirements.'
  ),
  'expertise.imageAlt': pair(
    'Жұмыс үстеліндегі ашық құжаттар, лупа және мұрағат қалталары',
    'Open documents, a magnifying glass and archive folders on a desk'
  ),
  'cta.h2': pair('Қажет материалды таппадыңыз ба', 'Haven’t found the material you need'),
  'cta.text': pair(
    'Егер материал жарияланғандар арасында болмаса, сұрау жіберіңіз: Қауымдастық құжаттың қолжетімділігін растайды немесе мәселені мәні бойынша түсіндіреді.',
    'If a material is not among those published, send a request: the Association will confirm that the document is available or address the question on its merits.'
  ),
  'cta.primary.label': shared.writeToEmail,
  'cta.primary.href': mailtoPair(
    'Қауымдастық материалдары бойынша сұрақ',
    'Question about Association materials'
  ),
  'cta.secondary.label': shared.associationDocuments
} as const satisfies Record<string, Translation>;

export const reportsI18n = {
  'meta.title': pair(
    'ЕАЭО зергерлер қауымдастығының есептілігі',
    'Reporting of the Association of Jewellers of the EAEU'
  ),
  'meta.description': pair(
    'ЕАЭО зергерлер қауымдастығының есептік материалдары: 2024 жылғы жұмыс туралы есеп, 2025 жылға арналған перспективалы бағыттар және іс-шаралар тізбелері. Көшірмелер сұрау бойынша беріледі.',
    'Reporting materials of the Association of Jewellers of the EAEU: the report on the work for 2024, the priority areas for 2025 and the lists of events. Copies are provided on request.'
  ),
  crumb: shared.reporting,
  'hero.eyebrow': shared.reporting,
  'hero.h1': shared.reporting,
  'hero.lead': pair(
    'Қауымдастық өз жұмысы туралы есептік материалдар дайындайды. Төменде — олардың құрамы және есепте тіркелген нәтижелер.',
    'The Association prepares reporting materials on its work. Below are their composition and the results recorded in the report.'
  ),
  'hero.action.label': pair(
    'Есептілік бойынша материалдарды сұрату',
    'Request reporting materials'
  ),
  'hero.action.href': mailtoPair(
    'Есептік материалдарды сұрату',
    'Request for reporting materials'
  ),
  'materials.h2': pair('Есептік материалдардың құрамы', 'Composition of the reporting materials'),
  'materials.items.0.term': pair(
    '2024 жылғы жұмыс туралы есеп',
    'Report on the work for 2024'
  ),
  'materials.items.0.value': pair(
    'Салалық талқылауларға қатысу, заңнамалық бастамалар, нормативтік құқықтық актілердің жобалары бойынша сараптамалық жұмыс, жыл қорытындылары мен нәтижелері.',
    'Participation in industry discussions, legislative initiatives, expert work on draft regulatory legal acts, and the conclusions and results of the year.'
  ),
  'materials.items.1.term': pair(
    '2025 жылға арналған перспективалы бағыттар',
    'Priority areas for 2025'
  ),
  'materials.items.1.value': pair(
    'Құқықтық реттеу және салық салу, халықаралық ынтымақтастық және экспортты қолдау, білім беру және ақпараттық бастамалар, көлеңкелі айналымға қарсы іс-қимыл.',
    'Legal regulation and taxation, international cooperation and export support, educational and information initiatives, countering the shadow market.'
  ),
  'materials.items.2.term': pair(
    '2024 жылғы іс-шаралар тізбесі',
    'List of events for 2024'
  ),
  'materials.items.2.value': pair(
    'Ұйымдастырушысы, қаралған мәселелері және әрқайсысы бойынша нәтижесі көрсетілген іс-шаралардың хронологиялық тізбесі. Қысқаша хроника жаңалықтар бөлімінде жарияланған.',
    'A chronological list of events indicating the organiser, the questions considered and the result of each. A short chronicle is published in the news section.'
  ),
  'materials.items.3.term': pair(
    '2025 жылғы іс-шаралар тізбесі',
    'List of events for 2025'
  ),
  'materials.items.3.value': pair(
    'Ағымдағы кезеңдегі іс-шаралардың хронологиялық тізбесі. Қысқаша хроника жаңалықтар бөлімінде жарияланған.',
    'A chronological list of events for the current period. A short chronicle is published in the news section.'
  ),
  'materials.note': pair(
    'Құрам Қауымдастықтың мұрағатындағы есептік материалдары бойынша келтірілген.',
    'The composition is given according to the Association’s reporting materials from its archive.'
  ),
  'outcomes.h2': pair(
    '2024 жылғы есепте тіркелген нәтижелер',
    'Results recorded in the report for 2024'
  ),
  'outcomes.lead': pair(
    'Тұжырымдар Қауымдастықтың 2024 жылғы жұмысы туралы есеп бойынша келтірілген.',
    'The wording is taken from the report on the work of the Association for 2024.'
  ),
  'outcomes.items.0.title': pair(
    'Құжат жобаларының сараптамасы',
    'Review of draft documents'
  ),
  'outcomes.items.1.title': pair('Бұйымдарды таңбалау', 'Marking of items'),
  'outcomes.items.2.title': pair('Тұтынушылардың құқықтарын қорғау', 'Consumer rights protection'),
  'outcomes.items.3.title': pair('Қызмет түрлерінің жіктелуі', 'Classification of types of activity'),
  'access.h2': pair('Материалдарды қалай алуға болады', 'How to obtain the materials'),
  'access.text': pair(
    'Есептік материалдарды Қауымдастық сұрау бойынша береді. Ресми мекенжайға өтініш жіберіп, қажет материалды көрсетіңіз: жауабында Қауымдастық оның қолжетімділігін және беру нысанын растайды.',
    'The Association provides reporting materials on request. Send an enquiry to the official address and specify the material you need: in its reply the Association will confirm that it is available and the form in which it will be provided.'
  ),
  'access.action.label': shared.writeToEmail,
  'access.action.href': mailtoPair(
    'Есептік материалдарды сұрату',
    'Request for reporting materials'
  ),
  'belt.alt': pair(
    'Үстелдегі басып шығарылған есептердің тігінділері және тығыз мәтіні бар ашық том',
    'Bound volumes of printed reports on a table and an open volume with dense text'
  ),
  'cta.h2': pair('Есептік материалдарды сұрату', 'Request reporting materials'),
  'cta.text': pair(
    'Көшірмені сұрату, материалдардың құрамын нақтылау және мазмұны бойынша сұрақтар — ресми мекенжайға.',
    'Requests for a copy, questions about the composition of the materials and questions about their content go to the official address.'
  ),
  'cta.primary.label': shared.writeToEmail,
  'cta.primary.href': mailtoPair(
    'Есептік материалдарды сұрату',
    'Request for reporting materials'
  ),
  'cta.secondary.label': shared.associationDocuments
} as const satisfies Record<string, Translation>;
