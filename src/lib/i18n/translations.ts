/**
 * All user-facing copy, keyed by language. Uzbek is the source of truth: its
 * shape defines `Dictionary`, so Russian and English fail to type-check if a
 * key is missing.
 */

/** Groups thousands with a non-breaking space: 1500000 → "1 500 000". */
function groupDigits(n: number, separator = " ") {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const uz = {
  meta: {
    title: "1-UZAPNEA va OTOLOR 4 konferensiyasi — 28–29-noyabr 2026, Toshkent",
    description:
      "O'zbekistonda ilk bor — xurrak va uyqu apnoesiga bag'ishlangan konferensiya, «OTOLOR 4» xalqaro konferensiyasi bilan birga. 28–29-noyabr 2026, EMU University, Toshkent. Ro'yxatdan o'tish davom etmoqda.",
  },
  common: {
    register: "Ro'yxatdan o'tish",
    inPartnershipWith: "Hamkorlikda",
    organizerLogoAlt: "O'zbekiston Apnologlari",
    city: "Toshkent",
    dates: "28–29-noyabr 2026",
    price: (amount: number) => `${groupDigits(amount)} so'm`,
  },
  language: {
    label: "Til",
  },
  header: {
    menu: "Menyu",
    nav: {
      program: "Dastur",
      speakers: "Ma'ruzachilar",
      register: "Narxlar",
      venue: "Manzil",
      sponsors: "Hamkorlar",
      contact: "Aloqa",
    },
  },
  banner: {
    badge: "Muhim",
    items: [
      "RO'YXATDAN O'TISH DAVOM ETMOQDA",
      "Standart ishtirok — 1 100 000 so'm",
      "Joylar CHEKLANGAN — bugun ro'yxatdan o'ting!",
      "Limited seats available — register today!",
      "28–29.11.2026 · EMU University, Toshkent",
    ],
  },
  countdown: {
    days: "Kun",
    hours: "Soat",
    minutes: "Daqiqa",
    seconds: "Soniya",
  },
  hero: {
    titleLine1: "1-UZAPNEA va OTOLOR 4",
    titleLine2: "KONFERENSIYASI",
    lead: "O'zbekistonda ilk bor — xurrak va uyqu apnoesiga bag'ishlangan konferensiya, «OTOLOR 4» xalqaro konferensiyasi bilan birga.",
    seePrices: "Narxlarni ko'rish",
    stats: {
      speakers: "Ma'ruzachilar",
      countries: "Davlatlar",
      attendees: "Ishtirokchilar",
    },
    posterAlt:
      "1-UZAPNEA 2026 — O'zbekistondagi birinchi uyqu tibbiyoti anjumani. OTOLOR 4 konferensiyasi.",
    cmeLabel: "CME Soatlari",
    cmeValue: "8 soat",
  },
  program: {
    eyebrow: "Ilmiy Dastur",
    title: "2 kun, bir maqsad.",
    chips: ["1-kun · UZAPNEA — uyqu apnoesi va xurrak", "2-kun · OTOLOR 4 — xalqaro ma'ruzalar"],
    month: "NOY",
    days: [
      {
        label: "1-kun · Shanba",
        title: "Uyqu apnoesi va xurrak",
        description:
          "O'zbekistonda ilk bor xurrak va uyqu apnoesiga bag'ishlangan konferensiya kuni: diagnostika, jarrohlik va terapiya yechimlari.",
      },
      {
        label: "2-kun · Yakshanba",
        title: "Xalqaro ma'ruzalar",
        description:
          "«OTOLOR 4» xalqaro konferensiyasi: chet ellik mutaxassislarning otorinolaringologiya bo'yicha ma'ruzalari.",
      },
    ],
    // Placeholder agenda, shown blurred behind the "coming soon" overlay.
    sessions: [
      "Ochilish marosimi: Sokin epidemiya",
      "2026-yilda polisomnografiya",
      "Tushlik tanaffusi",
      "Faringeal kollaps mexanikasi",
      "Gipoglossal nerv stimulyatsiyasi",
      "CPAP terapiyasi ustaxonasi",
    ],
    comingSoon: "Tez kunda",
    comingSoonNote: "Dastur tez orada e'lon qilinadi",
  },
  speakers: {
    eyebrow: "Mutaxassislar",
    title: "Konferensiyamiz ma'ruzachilari",
    names: [
      "Tuyg'unxon Muzaffarov",
      "Sherzod Gulyamov",
      "Vladimir Krivitskiy",
      "Roman Buzunov",
      "Maryam Jafarova",
    ],
    moreSoon: "Va boshqalar tez kunda e'lon qilinadi",
  },
  register: {
    eyebrow: "Ro'yxatdan o'tish ochildi",
    title: "Joyingizni band qiling.",
    lead: "Joylar cheklangan — ro'yxatdan o'tishni kechiktirmang.",
    tiers: {
      residents: { name: "Ordinator va magistrlar", note: "ID talab qilinadi" },
      standard: { name: "Standart", note: "Eng mashhur" },
      international: { name: "Chet ellik ishtirokchilar", note: "Xalqaro ishtirokchilar" },
    },
    features: {
      bothDays: "Ikkala kun sessiyalari",
      reception: "Kutib olish marosimi",
      materials: "Konferensiya materiallari",
      certificate: "Sertifikat",
    },
    viaTelegram: "Ro'yxatdan o'tish Telegram bot orqali amalga oshiriladi:",
  },
  venue: {
    eyebrow: "Manzil",
    lead: "Konferensiyaning ikkala kuni ham shu manzilda o'tkaziladi.",
    // Address as listed on the venue's Yandex Maps card.
    street: "Bunyodkor shoh ko'chasi, 42A",
    district: "Chilonzor tumani, Toshkent",
    labels: {
      venue: "Manzil",
      street: "Ko'cha",
      city: "Shahar",
      date: "Sana",
    },
    openMap: "Yandex Xaritada ochish",
    mapTitle: "Yandex Xarita",
    mapLang: "uz_UZ",
  },
  sponsors: {
    eyebrow: "Hamkorlar va Homiylar",
    title: "Global yetakchilar bilan hamkorlikda",
    childrensCenter: "Bolalar Milliy Tibbiyot Markazi",
  },
  footer: {
    about:
      "O'zbekistonda ilk bor — xurrak va uyqu apnoesiga bag'ishlangan konferensiya, «OTOLOR 4» xalqaro konferensiyasi bilan birga. 2 kun, bir maqsad.",
    venue: "Manzil",
    viewOnMap: "Xaritada ko'rish",
    contact: "Aloqa",
    registration: "Ro'yxatdan o'tish:",
    copyright: "© 2026 O'zbekiston apnologlari. Barcha huquqlar himoyalangan.",
  },
  notFound: {
    title: "Sahifa topilmadi",
    description: "Siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.",
    home: "Bosh sahifaga qaytish",
  },
  error: {
    title: "Nimadir xato ketdi",
    description: "Kutilmagan xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
    retry: "Qayta urinish",
    home: "Bosh sahifa",
  },
};

export type Dictionary = typeof uz;

const ru: Dictionary = {
  meta: {
    title: "Конференция 1-UZAPNEA и OTOLOR 4 — 28–29 ноября 2026, Ташкент",
    description:
      "Впервые в Узбекистане — конференция, посвящённая храпу и апноэ сна, совместно с международной конференцией «OTOLOR 4». 28–29 ноября 2026, EMU University, Ташкент. Регистрация продолжается.",
  },
  common: {
    register: "Зарегистрироваться",
    inPartnershipWith: "В партнёрстве",
    organizerLogoAlt: "Апнологи Узбекистана",
    city: "Ташкент",
    dates: "28–29 ноября 2026",
    price: (amount) => `${groupDigits(amount)} сум`,
  },
  language: {
    label: "Язык",
  },
  header: {
    menu: "Меню",
    nav: {
      program: "Программа",
      speakers: "Спикеры",
      register: "Цены",
      venue: "Место",
      sponsors: "Партнёры",
      contact: "Контакты",
    },
  },
  banner: {
    badge: "Важно",
    items: [
      "РЕГИСТРАЦИЯ ПРОДОЛЖАЕТСЯ",
      "Стандартное участие — 1 100 000 сум",
      "Количество мест ОГРАНИЧЕНО — зарегистрируйтесь сегодня!",
      "28–29.11.2026 · EMU University, Ташкент",
    ],
  },
  countdown: {
    days: "Дней",
    hours: "Часов",
    minutes: "Минут",
    seconds: "Секунд",
  },
  hero: {
    titleLine1: "1-UZAPNEA и OTOLOR 4",
    titleLine2: "КОНФЕРЕНЦИЯ",
    lead: "Впервые в Узбекистане — конференция, посвящённая храпу и апноэ сна, совместно с международной конференцией «OTOLOR 4».",
    seePrices: "Посмотреть цены",
    stats: {
      speakers: "Спикеров",
      countries: "Стран",
      attendees: "Участников",
    },
    posterAlt:
      "1-UZAPNEA 2026 — первая в Узбекистане конференция по медицине сна. Конференция OTOLOR 4.",
    cmeLabel: "Часы CME",
    cmeValue: "8 часов",
  },
  program: {
    eyebrow: "Научная программа",
    title: "2 дня, одна цель.",
    chips: ["День 1 · UZAPNEA — апноэ сна и храп", "День 2 · OTOLOR 4 — международные доклады"],
    month: "НОЯ",
    days: [
      {
        label: "День 1 · Суббота",
        title: "Апноэ сна и храп",
        description:
          "Первый в Узбекистане конференц-день, посвящённый храпу и апноэ сна: диагностика, хирургическое лечение и терапия.",
      },
      {
        label: "День 2 · Воскресенье",
        title: "Международные доклады",
        description:
          "Международная конференция «OTOLOR 4»: доклады зарубежных специалистов в области оториноларингологии.",
      },
    ],
    sessions: [
      "Церемония открытия: тихая эпидемия",
      "Полисомнография в 2026 году",
      "Обеденный перерыв",
      "Механика коллапса глотки",
      "Стимуляция подъязычного нерва",
      "Мастер-класс по CPAP-терапии",
    ],
    comingSoon: "Скоро",
    comingSoonNote: "Программа будет опубликована в ближайшее время",
  },
  speakers: {
    eyebrow: "Эксперты",
    title: "Спикеры конференции",
    names: [
      "Туйгунхон Музаффаров",
      "Шерзод Гулямов",
      "Владимир Кривицкий",
      "Роман Бузунов",
      "Марьям Джафарова",
    ],
    moreSoon: "Другие спикеры будут объявлены позже",
  },
  register: {
    eyebrow: "Регистрация открыта",
    title: "Забронируйте своё место.",
    lead: "Количество мест ограничено — не откладывайте регистрацию.",
    tiers: {
      residents: { name: "Ординаторы и магистранты", note: "Нужен подтверждающий документ" },
      standard: { name: "Стандарт", note: "Самый популярный" },
      international: { name: "Иностранные участники", note: "Для гостей из-за рубежа" },
    },
    features: {
      bothDays: "Сессии обоих дней",
      reception: "Приветственный приём",
      materials: "Материалы конференции",
      certificate: "Сертификат",
    },
    viaTelegram: "Регистрация проходит через Telegram-бот:",
  },
  venue: {
    eyebrow: "Место проведения",
    lead: "Оба дня конференции пройдут по этому адресу.",
    street: "проспект Бунёдкор, 42А",
    district: "Чиланзарский район, Ташкент",
    labels: {
      venue: "Площадка",
      street: "Адрес",
      city: "Район",
      date: "Даты",
    },
    openMap: "Открыть в Яндекс Картах",
    mapTitle: "Яндекс Карты",
    mapLang: "ru_RU",
  },
  sponsors: {
    eyebrow: "Партнёры и спонсоры",
    title: "В партнёрстве с ведущими мировыми компаниями",
    childrensCenter: "Национальный детский медицинский центр",
  },
  footer: {
    about:
      "Впервые в Узбекистане — конференция, посвящённая храпу и апноэ сна, совместно с международной конференцией «OTOLOR 4». 2 дня, одна цель.",
    venue: "Место проведения",
    viewOnMap: "Посмотреть на карте",
    contact: "Контакты",
    registration: "Регистрация:",
    copyright: "© 2026 Апнологи Узбекистана. Все права защищены.",
  },
  notFound: {
    title: "Страница не найдена",
    description: "Запрашиваемая страница не существует или была перемещена.",
    home: "На главную",
  },
  error: {
    title: "Что-то пошло не так",
    description: "Произошла непредвиденная ошибка. Пожалуйста, попробуйте ещё раз.",
    retry: "Попробовать снова",
    home: "На главную",
  },
};

const en: Dictionary = {
  meta: {
    title: "1st UZAPNEA & OTOLOR 4 Conference — November 28–29, 2026, Tashkent",
    description:
      "A first for Uzbekistan — a conference dedicated to snoring and sleep apnea, held together with the international OTOLOR 4 conference. November 28–29, 2026, EMU University, Tashkent. Registration is open.",
  },
  common: {
    register: "Register",
    inPartnershipWith: "In partnership with",
    organizerLogoAlt: "Apnologists of Uzbekistan",
    city: "Tashkent",
    dates: "November 28–29, 2026",
    price: (amount) => `${groupDigits(amount, ",")} UZS`,
  },
  language: {
    label: "Language",
  },
  header: {
    menu: "Menu",
    nav: {
      program: "Program",
      speakers: "Speakers",
      register: "Pricing",
      venue: "Venue",
      sponsors: "Partners",
      contact: "Contact",
    },
  },
  banner: {
    badge: "Important",
    items: [
      "REGISTRATION IS OPEN",
      "Standard pass — 1,100,000 UZS",
      "Seats are LIMITED — register today!",
      "28–29.11.2026 · EMU University, Tashkent",
    ],
  },
  countdown: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
  hero: {
    titleLine1: "1st UZAPNEA & OTOLOR 4",
    titleLine2: "CONFERENCE",
    lead: "A first for Uzbekistan — a conference dedicated to snoring and sleep apnea, held together with the international OTOLOR 4 conference.",
    seePrices: "View pricing",
    stats: {
      speakers: "Speakers",
      countries: "Countries",
      attendees: "Attendees",
    },
    posterAlt:
      "1st UZAPNEA 2026 — Uzbekistan's first sleep medicine conference. OTOLOR 4 conference.",
    cmeLabel: "CME Hours",
    cmeValue: "8 hours",
  },
  program: {
    eyebrow: "Scientific Program",
    title: "2 days, one goal.",
    chips: ["Day 1 · UZAPNEA — sleep apnea & snoring", "Day 2 · OTOLOR 4 — international lectures"],
    month: "NOV",
    days: [
      {
        label: "Day 1 · Saturday",
        title: "Sleep apnea & snoring",
        description:
          "Uzbekistan's first-ever conference day devoted to snoring and sleep apnea: diagnostics, surgical options and therapy.",
      },
      {
        label: "Day 2 · Sunday",
        title: "International lectures",
        description:
          "The international OTOLOR 4 conference: lectures on otorhinolaryngology from specialists abroad.",
      },
    ],
    sessions: [
      "Opening ceremony: The silent epidemic",
      "Polysomnography in 2026",
      "Lunch break",
      "The mechanics of pharyngeal collapse",
      "Hypoglossal nerve stimulation",
      "CPAP therapy workshop",
    ],
    comingSoon: "Coming soon",
    comingSoonNote: "The program will be announced shortly",
  },
  speakers: {
    eyebrow: "Experts",
    title: "Conference speakers",
    names: [
      "Tuygunkhon Muzaffarov",
      "Sherzod Gulyamov",
      "Vladimir Krivitskiy",
      "Roman Buzunov",
      "Maryam Jafarova",
    ],
    moreSoon: "More speakers to be announced soon",
  },
  register: {
    eyebrow: "Registration is open",
    title: "Reserve your seat.",
    lead: "Seats are limited — don't leave registration to the last minute.",
    tiers: {
      residents: { name: "Residents & master's students", note: "ID required" },
      standard: { name: "Standard", note: "Most popular" },
      international: { name: "International participants", note: "For delegates from abroad" },
    },
    features: {
      bothDays: "Sessions on both days",
      reception: "Welcome reception",
      materials: "Conference materials",
      certificate: "Certificate",
    },
    viaTelegram: "Registration is handled through our Telegram bot:",
  },
  venue: {
    eyebrow: "Venue",
    lead: "Both days of the conference take place at this venue.",
    street: "42A Bunyodkor Avenue",
    district: "Chilanzar District, Tashkent",
    labels: {
      venue: "Venue",
      street: "Address",
      city: "District",
      date: "Dates",
    },
    openMap: "Open in Yandex Maps",
    mapTitle: "Yandex Maps",
    mapLang: "en_US",
  },
  sponsors: {
    eyebrow: "Partners & Sponsors",
    title: "In partnership with global leaders",
    childrensCenter: "National Children's Medical Center",
  },
  footer: {
    about:
      "A first for Uzbekistan — a conference dedicated to snoring and sleep apnea, held together with the international OTOLOR 4 conference. 2 days, one goal.",
    venue: "Venue",
    viewOnMap: "View on map",
    contact: "Contact",
    registration: "Registration:",
    copyright: "© 2026 Apnologists of Uzbekistan. All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
  error: {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again.",
    retry: "Try again",
    home: "Go home",
  },
};

export const translations = { uz, ru, en } satisfies Record<string, Dictionary>;
