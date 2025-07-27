type TranslationKeys =
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "footer.copyright"
  | "footer.subtitle"
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "footer.copyright"
  | "footer.subtitle"
  | "header.home"
  | "header.about"
  | "header.WorkInfoSection"
  | "header.contacts"
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "button.bookAppointment"
  | "footer.copyright"
  | "footer.subtitle"
  | "header.home"
  | "header.about"
  | "header.WorkInfoSection"
  | "header.contacts"
  | "hero.name"
  | "hero.subtitle"
  | "hero.ability.psychiatrist"
  | "hero.ability.psychotherapist"
  | "hero.ability.narcologist"
  | "hero.ability.hypnologist"
  | "meta.title"
  | "meta.description"
  | "servicesList.title"
  | "servicesList.personalProblems"
  | "servicesList.relationshipProblems"
  | "servicesList.mentalDisorders"
  | "servicesList.button"
  | "servicesList.personal.item1"
  | "servicesList.personal.item2"
  | "servicesList.personal.item3"
  | "servicesList.personal.item4"
  | "servicesList.personal.item5"
  | "servicesList.personal.item6"
  | "servicesList.personal.item7"
  | "servicesList.relationship.item1"
  | "servicesList.relationship.item2"
  | "servicesList.relationship.item3"
  | "servicesList.relationship.item4"
  | "servicesList.relationship.item5"
  | "servicesList.relationship.item6"
  | "servicesList.relationship.item7"
  | "servicesList.mental.item1"
  | "servicesList.mental.item2"
  | "servicesList.mental.item3"
  | "servicesList.mental.item4"
  | "servicesList.mental.item5"
  | "servicesList.mental.item6"
  | "workFormat.title"
  | "workFormat.paragraph1"
  | "workFormat.paragraph2"
  | "workFormat.individualTitle"
  | "workFormat.individualDescription"
  | "workFormat.individualPrice"
  | "workFormat.familyTitle"
  | "workFormat.familyDescription1"
  | "workFormat.familyDescription2"
  | "workFormat.familyPrice"
  | "workFormat.button"
  | "heroWords"
  | "errorTitle"
  | "errorMessage"
  | "backHome"
 | "titleNotFound"
| "descriptionNotFound"
|"homeButtonNotFound"
| "backButtonNotFound"
| "metaTitleNotFound"
| "metaDescriptionNotFound"
| "chargingTheDayForSuccess"
| "workStartTitle"
| "workStartDescription"
| "workFormatsTitle"
| "workFormatsDescription"
| "workOrganizationalTitle"
| "workOrganizationalDescription"
| "workSimpleTitle"
| "workSimpleDescription"
| "workStartTitle"
| "workStartDescription"
| "workFormatsTitle"
| "workFormatsDescription"
| "workOrganizationalTitle"
| "workOrganizationalDescription"
| "workSimpleTitle"
| "workSimpleDescription"
|"footerSubtitle"
| "footerContactTitle"

type Translations = {
  [key in TranslationKeys]: string | Array<string>;
};

export const translations: Record<"UA" | "RU" | "EN", Translations> = {
  UA: {
    "aboutMini.title":
      "Психологічна допомога для тих, хто хоче вирішити свою проблему",
    "aboutMini.paragraph1":
      "Кожен з нас у різні періоди життя стикається з труднощами. Іноді ми опиняємося у глухому куті, втрачаємо внутрішні сили, впадаємо у депресивний стан або зависаємо в сірій смузі, не бачачи виходу. У такі моменти звернення за професійною допомогою — це зважене та розумне рішення.",
    "aboutMini.paragraph2":
      "Мене звати Борисенко Володимир Васильович. Я лікар-психіатр, психотерапевт, кандидат наук з вищою медичною освітою та понад 30-річним досвідом практичної роботи. За роки професійної діяльності я допоміг багатьом пацієнтам впоратися з широким спектром психічних та емоційних станів — від тривожних та депресивних розладів до залежностей та складних кризових ситуацій.",
    "aboutMini.paragraph3":
      "Я пропоную індивідуальні та сімейні консультації в офлайн та онлайн-форматі. У своїй роботі я спираюся на методи доказової психотерапії та медичні знання, що дозволяє комплексно підходити до вирішення проблем.",
    "aboutMini.paragraph4":
      "Разом ми зможемо вибудувати шлях до стабільності, внутрішнього спокою та повернути відчуття контролю над своїм життям.",
    "button.learnMore": "Дізнатися більше",
    "footer.copyright": "© {year} Борисенко Володимир Васильович",
    "footer.subtitle": "Лікар-психіатр, психотерапевт",
    "header.home": "Головна",
    "header.about": "Про мене",
    "header.WorkInfoSection": "Як ми будемо працювати",
    "header.contacts": "Контакти",
    "hero.name": "Борисенко Володимир Васильович",
    "hero.subtitle":
      "Понад 30 років практики в галузі психіатрії та психотерапії",
    "hero.ability.psychiatrist": "Психіатр",
    "hero.ability.psychotherapist": "Психотерапевт",
    "hero.ability.narcologist": "Нарколог",
    "hero.ability.hypnologist": "Гіпнолог",
    "button.bookAppointment": "Записатися на консультацію",
    "meta.title": "Психіатр Борисенко — приватна практика",
    "meta.description":
      "Досвідчений психіатр з понад 30-річним стажем, приватна практика у Полтаві.",
    "servicesList.title": "Консультації допомагають вирішити",
    "servicesList.personalProblems": "Особистісні проблеми",
    "servicesList.relationshipProblems": "Проблеми у відносинах",
    "servicesList.mentalDisorders": "Психічні розлади",
    "servicesList.button": "Дізнатись про напрямки роботи",
    "servicesList.personal.item1": "Кризові, стресові стани на тлі воєнних дій",
    "servicesList.personal.item2": "Мотивація, цілі, бажання",
    "servicesList.personal.item3":
      "Самопізнання (сильні, слабкі сторони, помилки поведінки)",
    "servicesList.personal.item4": "Впевненість у собі",
    "servicesList.personal.item5":
      "Відчуття самотності, порожнечі, безпорадності",
    "servicesList.personal.item6":
      "Надмірний емоційний вибух або його відсутність",
    "servicesList.personal.item7":
      "Самооцінка, самореалізація (творчість, кар'єра)",
    "servicesList.relationship.item1": "Створення міцних, якісних відносин",
    "servicesList.relationship.item2": "Безпечне завершення відносин",
    "servicesList.relationship.item3": "Сімейні кризи, розлучення, розрив",
    "servicesList.relationship.item4": "Конфлікти, відновлення довіри",
    "servicesList.relationship.item5": "Пошук та збереження дружби",
    "servicesList.relationship.item6": "Вирішення конфліктних ситуацій",
    "servicesList.relationship.item7":
      "Емоційна залежність, психологічне насильство",
    "servicesList.mental.item1":
      "Панічні атаки, нав'язливі думки (ОКР), іпохондрія",
    "servicesList.mental.item2": "Прикордонні особистісні розлади, ПТСР, ГТР",
    "servicesList.mental.item3": "Неврози, депресія",
    "servicesList.mental.item4": "Апатичні стани",
    "servicesList.mental.item5": "Страхи, фобії, тривожність",
    "servicesList.mental.item6": "Психосоматичні розлади",
    "workFormat.title": "Формат нашої роботи",
    "workFormat.paragraph1":
      "Консультування проводиться у форматі взаємного спілкування, під час якого я використовую свої знання, щоб допомогти вам усвідомити та змінити малоефективні способи поведінки, усунути життєві труднощі, впоратися із залежностями, прийняти рішення або досягти бажаної мети.",
    "workFormat.paragraph2":
      "Онлайн-консультації здійснюються через Skype, Zoom, Viber, Whatsapp, Telegram, FaceTime. Онлайн-допомога є такою ж ефективною, як і особисті зустрічі.",
    "workFormat.individualTitle": "Індивідуальна консультація",
    "workFormat.individualDescription":
      "Психологічна консультація та психотерапія онлайн.",
    "workFormat.individualPrice": "40 € — 50 хвилин",
    "workFormat.familyTitle": "Сімейне консультування",
    "workFormat.familyDescription1":
      "Сімейне консультування та психотерапія пар спрямовані на корекцію стосунків та усунення емоційних труднощів у родині.",
    "workFormat.familyDescription2":
      "Робота ведеться з усіма членами родини, які відчувають труднощі в спілкуванні. Найчастіше пари звертаються для відновлення, реабілітації та оновлення стосунків.",
    "workFormat.familyPrice": "60 € — 75 хвилин",
    "workFormat.button": "Записатися на консультацію",
    "errorTitle": "Щось пішло не так...",
    "errorMessage":
      "Вибачте, сталася помилка. Будь ласка, спробуйте перезавантажити сторінку або поверніться на головну.",
    "backHome": "Повернутись на головну",
      "titleNotFound": "404",
    "descriptionNotFound": "Інколи нам важко знайти навіть себе. Що вже казати про цю сторінку?..",
    "homeButtonNotFound": "Повернутися на головну",
    "backButtonNotFound": "Назад",
    "metaTitleNotFound": "404 — Сторінка не знайдена",
    "metaDescriptionNotFound": "Вибачте, запитувана сторінка не існує.",
  "chargingTheDayForSuccess": "Заряджаємо день на успіх...",
    "workStartTitle": "Як ми почнемо працювати?",
  "workStartDescription": "Наше знайомство завжди починається з попереднього запису. Ви можете написати мені повідомлення або залишити заявку на сайті — ми підберемо зручний для вас час.\n\nНа першій консультації ми спокійно обговоримо, що привело вас до мене. Неважливо, чи є у вас готова тема для розмови, чи просто є відчуття, що «щось не так» — моя задача допомогти розібратись.\n\nПерша зустріч триває 50 хвилин.",
  "workFormatsTitle": "Як проходять консультації?",
  "workFormatsDescription": "Існує два формати роботи:\n\nКороткострокові консультації (5-10 зустрічей) — якщо ви хочете вирішити конкретне питання або ситуацію.\n\nДовготривала терапія (від 10 зустрічей) — якщо важливо глибше пропрацювати внутрішні причини, змінити звичні сценарії та стосунки.\n\nРазом ми визначимо, який шлях підійде саме вам.",
  "workOrganizationalTitle": "Кілька організаційних моментів",
  "workOrganizationalDescription": "Щоб наша співпраця була комфортною:\n\nКонсультація триває 50 хвилин.\nРекомендована частота зустрічей — 1 раз на тиждень.\nОнлайн-сесії проходять по передоплаті.\n\nЯкщо не виходить прийти — прошу попередити не пізніше, ніж за 24 години. Інакше, сесія вважається проведеною.\n\nЯкщо ви запізнюєтесь — ми працюємо залишений час.\n\nВажливо: я не даю порад «як правильно жити». Замість цього — допомагаю вам почути себе і прийняти власні рішення.",
  "workSimpleTitle": "Простими словами",
  "workSimpleDescription": "Ви можете прийти до мене, навіть якщо не знаєте, з чого почати.\nВаше завдання — просто прийти, моє — допомогти вам знайти відповіді.",
"footerContactTitle": "Контактна інформація:",
"footerSubtitle": "Психологічна допомога онлайн",

    "heroWords": [
      "Натхнення",
      "Впевненість",
      "Сила",
      "Спокій",
      "Гармонія",
      "Цілі",
      "Рівновага",
      "Самопізнання",
      "Підтримка",
      "Розвиток",
      "Досягнення",
      "Усвідомленість",
      "Довіра",
      "Самооцінка",
      "Мудрість",
    ],
  },
  RU: {
    "aboutMini.title":
      "Психологическая помощь для тех, кто хочет решить свою проблему",
    "aboutMini.paragraph1":
      "Каждый из нас в разные периоды жизни сталкивается с трудностями. Порой мы оказываемся в тупике, теряем внутренние силы, попадаем в депрессивное состояние или зависаем в серой полосе, не видя выхода. В такие моменты обратиться за профессиональной помощью — это взвешенное и разумное решение.",
    "aboutMini.paragraph2":
      "Меня зовут Борисенко Владимир Васильевич. Я врач-психиатр, психотерапевт, кандидат наук с высшим медицинским образованием и более чем 30-летним опытом практической работы. За годы своей профессиональной деятельности я помог многим пациентам справиться с широким спектром психических и эмоциональных состояний — от тревожных и депрессивных расстройств до зависимости и сложных кризисных ситуаций.",
    "aboutMini.paragraph3":
      "Я предлагаю индивидуальные и семейные консультации в офлайн и онлайн-формате. В своей работе я опираюсь на методы доказательной психотерапии и медицинские знания, что позволяет комплексно подходить к решению проблем.",
    "aboutMini.paragraph4":
      "Совместно мы сможем выстроить путь к стабильности, внутреннему спокойствию и вернуть ощущение контроля над своей жизнью.",
    "button.learnMore": "Узнать больше",
    "footer.copyright": "© {year} Борисенко Владимир Васильевич",
    "footer.subtitle": "Врач-психиатр, психотерапевт",
    "header.home": "Главная",
    "header.about": "Обо мне",
    "header.WorkInfoSection": "Как мы будем работать",
    "header.contacts": "Контакты",
    "hero.name": "Борисенко Владимир Васильевич",
    "hero.subtitle":
      "Более 30 лет практики в области психиатрии и психотерапии",
    "hero.ability.psychiatrist": "Психиатр",
    "hero.ability.psychotherapist": "Психотерапевт",
    "hero.ability.narcologist": "Нарколог",
    "hero.ability.hypnologist": "Гипнолог",
    "button.bookAppointment": "Записаться на консультацию",
    "meta.title": "Психиатр Борисенко — частная практика",
    "meta.description":
      "Опытный психиатр с более 30-летним стажем, частная практика в Полтаве.",
    "servicesList.title": "Консультации помогают решить",
    "servicesList.personalProblems": "Личностные проблемы",
    "servicesList.relationshipProblems": "Проблемы в отношениях",
    "servicesList.mentalDisorders": "Психические расстройства",
    "servicesList.button": "Узнать о направлениях работы",
    "servicesList.personal.item1":
      "Кризисные, стрессовые состояния на фоне военных действий",
    "servicesList.personal.item2": "Мотивация, цели, желания",
    "servicesList.personal.item3":
      "Самопознание (сильные, слабые стороны, поведенческие ошибки)",
    "servicesList.personal.item4": "Уверенность в себе",
    "servicesList.personal.item5":
      "Чувство одиночества, пустоты, беспомощности",
    "servicesList.personal.item6":
      "Чрезмерный выплеск эмоций или их недостаток",
    "servicesList.personal.item7":
      "Самооценка, самореализация (творчество, карьера)",
    "servicesList.relationship.item1":
      "Создание крепких, качественных отношений",
    "servicesList.relationship.item2": "Безопасное завершение отношений",
    "servicesList.relationship.item3": "Семейные кризисы, развод, разрыв",
    "servicesList.relationship.item4": "Конфликты, восстановление доверия",
    "servicesList.relationship.item5": "Поиск и сохранение дружеских отношений",
    "servicesList.relationship.item6": "Разрешение конфликтных ситуаций",
    "servicesList.relationship.item7":
      "Эмоциональная зависимость, психологическое насилие",
    "servicesList.mental.item1":
      "Панические атаки, навязчивые мысли (ОКР), ипохондрия",
    "servicesList.mental.item2":
      "Пограничные личностные расстройства, ПТСР, ГТР",
    "servicesList.mental.item3": "Неврозы, депрессия",
    "servicesList.mental.item4": "Апатичные состояния",
    "servicesList.mental.item5": "Страхи, фобии, тревожность",
    "servicesList.mental.item6": "Психосоматические расстройства",
    "workFormat.title": "Формат нашей работы",
    "workFormat.paragraph1":
      "Консультирование проводится в формате взаимного общения, в процессе которого я использую свои знания, чтобы помочь вам осознать и изменить малоэффективные способы поведения, устранить жизненные сложности, справиться с зависимостями, принять решения или достичь желаемой цели.",
    "workFormat.paragraph2":
      "Онлайн-консультации осуществляются через Skype, Zoom, Viber, Whatsapp, Telegram, FaceTime. Помощь онлайн является столь же эффективной, как и личные встречи.",
    "workFormat.individualTitle": "Индивидуальная консультация",
    "workFormat.individualDescription":
      "Психологическая консультация и психотерапия онлайн.",
    "workFormat.individualPrice": "40 € — 50 минут",
    "workFormat.familyTitle": "Семейное консультирование",
    "workFormat.familyDescription1":
      "Семейное консультирование и психотерапия пар направлены на коррекцию отношений и устранение эмоциональных трудностей в семье.",
    "workFormat.familyDescription2":
      "Работа ведётся со всеми членами семьи, которые испытывают трудности в общении. Чаще всего пары приходят для восстановления, реабилитации и обновления отношений.",
    "workFormat.familyPrice": "60 € — 75 минут",
    "workFormat.button": "Записаться на консультацию",
    "errorTitle": "Что-то пошло не так...",
    "errorMessage":
      "Извините, произошла ошибка. Пожалуйста, попробуйте перезагрузить страницу или вернитесь на главную.",
    "backHome": "Вернуться на главную",
      "titleNotFound": "404",
    "descriptionNotFound": "Иногда нам сложно найти даже себя. Что уже говорить об этой странице?..",
    "homeButtonNotFound": "Вернуться на главную",
    "backButtonNotFound": "Назад",
    "metaTitleNotFound": "404 — Страница не найдена",
    "metaDescriptionNotFound": "Извините, запрашиваемая страница не существует.",
 "chargingTheDayForSuccess": "Заряжаем день на успех...",
   "workStartTitle": "Как мы начнем работать?",
  "workStartDescription": "Наше знакомство всегда начинается с предварительной записи. Вы можете написать мне сообщение или оставить заявку на сайте — мы подберем удобное для вас время.\n\nНа первой консультации мы спокойно обсудим, что вас привело ко мне. Неважно, есть ли у вас готовая тема для разговора или просто ощущение, что «что-то не так» — моя задача помочь разобраться.\n\nПервая встреча длится 50 минут.",
  "workFormatsTitle": "Как проходят консультации?",
  "workFormatsDescription": "Существует два формата работы:\n\nКраткосрочные консультации (5-10 встреч) — если вы хотите решить конкретный вопрос или ситуацию.\n\nДлительная терапия (от 10 встреч) — если важно глубже проработать внутренние причины, изменить привычные сценарии и отношения.\n\nВместе мы определим, какой путь подойдет именно вам.",
  "workOrganizationalTitle": "Несколько организационных моментов",
  "workOrganizationalDescription": "Чтобы наше сотрудничество было комфортным:\n\nКонсультация длится 50 минут.\nРекомендуемая частота встреч — 1 раз в неделю.\nОнлайн-сессии проходят по предоплате.\n\nЕсли не получается прийти — прошу предупредить минимум за 24 часа. В противном случае, сессия считается проведенной.\n\nЕсли вы опаздываете — мы работаем оставшееся время.\n\nВажно: я не даю советов «как правильно жить». Вместо этого — помогаю вам услышать себя и принять собственные решения.",
  "workSimpleTitle": "Простыми словами",
  "workSimpleDescription": "Вы можете прийти ко мне, даже если не знаете, с чего начать.\nВаша задача — просто прийти, моя — помочь вам найти ответы.",
"footerContactTitle": "Контактная информация:",
"footerSubtitle": "Психологеская помощь онлайн",
    "heroWords": [
      "Вдохновение",
      "Уверенность",
      "Сила",
      "Спокойствие",
      "Гармония",
      "Цели",
      "Равновесие",
      "Самопознание",
      "Поддержка",
      "Развитие",
      "Достижения",
      "Осознанность",
      "Доверие",
      "Самооценка",
      "Мудрость",
    ],
  },
  EN: {
    "aboutMini.title":
      "Psychological help for those who want to solve their problem",
    "aboutMini.paragraph1":
      "Each of us faces difficulties at different stages of life. Sometimes we find ourselves stuck, lose inner strength, fall into a depressive state or remain in a gray stripe, not seeing a way out. In such moments, seeking professional help is a balanced and reasonable decision.",
    "aboutMini.paragraph2":
      "My name is Borysenko Volodymyr Vasylovych. I am a psychiatrist, psychotherapist, PhD with a higher medical education and over 30 years of practical experience. Over the years of my professional activity, I have helped many patients cope with a wide range of mental and emotional conditions — from anxiety and depressive disorders to addictions and complex crisis situations.",
    "aboutMini.paragraph3":
      "I offer individual and family consultations in offline and online formats. In my work, I rely on evidence-based psychotherapy methods and medical knowledge, which allows for a comprehensive approach to problem-solving.",
    "aboutMini.paragraph4":
      "Together we can build a path to stability, inner peace, and regain a sense of control over your life.",
    "button.learnMore": "Learn more",
    "footer.copyright": "© {year} Borysenko Volodymyr Vasylovych",
    "footer.subtitle": "Psychiatrist, Psychotherapist",
    "header.home": "Home",
    "header.about": "About me",
    "header.WorkInfoSection": "How we will work",
    "header.contacts": "Contacts",
    "hero.name": "Borysenko Volodymyr Vasylovych",
    "hero.subtitle":
      "Over 30 years of practice in psychiatry and psychotherapy",
    "hero.ability.psychiatrist": "Psychiatrist",
    "hero.ability.psychotherapist": "Psychotherapist",
    "hero.ability.narcologist": "Addiction Specialist",
    "hero.ability.hypnologist": "Hypnologist",
    "button.bookAppointment": "Book an appointment",
    "meta.title": "Psychiatrist Borysenko — private practice",
    "meta.description":
      "Experienced psychiatrist with over 30 years of practice, private practice in Poltava.",
    "servicesList.title": "Consultations help to solve",
    "servicesList.personalProblems": "Personal issues",
    "servicesList.relationshipProblems": "Relationship problems",
    "servicesList.mentalDisorders": "Mental disorders",
    "servicesList.button": "Learn about areas of work",
    "servicesList.personal.item1":
      "Crisis, stress conditions due to war actions",
    "servicesList.personal.item2": "Motivation, goals, desires",
    "servicesList.personal.item3":
      "Self-awareness (strengths, weaknesses, behavioral mistakes)",
    "servicesList.personal.item4": "Self-confidence",
    "servicesList.personal.item5":
      "Feelings of loneliness, emptiness, helplessness",
    "servicesList.personal.item6":
      "Excessive emotional outbursts or lack of emotion",
    "servicesList.personal.item7":
      "Self-esteem, self-realization (creativity, career)",
    "servicesList.relationship.item1": "Building strong, quality relationships",
    "servicesList.relationship.item2": "Safely ending relationships",
    "servicesList.relationship.item3": "Family crises, divorce, breakup",
    "servicesList.relationship.item4": "Conflicts, restoring trust",
    "servicesList.relationship.item5": "Finding and maintaining friendships",
    "servicesList.relationship.item6": "Resolving conflict situations",
    "servicesList.relationship.item7":
      "Emotional dependence, psychological abuse",
    "servicesList.mental.item1":
      "Panic attacks, obsessive thoughts (OCD), hypochondria",
    "servicesList.mental.item2": "Borderline personality disorders, PTSD, GAD",
    "servicesList.mental.item3": "Neuroses, depression",
    "servicesList.mental.item4": "Apathetic states",
    "servicesList.mental.item5": "Fears, phobias, anxiety",
    "servicesList.mental.item6": "Psychosomatic disorders",
    "workFormat.title": "Work Format",
    "workFormat.paragraph1":
      "Consultations are conducted in a conversational format, where I use my knowledge to help you become aware of and change ineffective behavioral patterns, overcome life difficulties, cope with dependencies, make decisions, or achieve your desired goal.",
    "workFormat.paragraph2":
      "Online consultations are conducted via Skype, Zoom, Viber, Whatsapp, Telegram, FaceTime. Online help is just as effective as in-person meetings.",
    "workFormat.individualTitle": "Individual Consultation",
    "workFormat.individualDescription":
      "Psychological consultation and psychotherapy online.",
    "workFormat.individualPrice": "40 € — 50 minutes",
    "workFormat.familyTitle": "Family Counseling",
    "workFormat.familyDescription1":
      "Family counseling and couples therapy aimed at correcting relationships and resolving emotional difficulties within the family.",
    "workFormat.familyDescription2":
      "Work is carried out with all family members who experience communication difficulties. Most often, couples come for restoration, rehabilitation, and relationship renewal.",
    "workFormat.familyPrice": "60 € — 75 minutes",
    "workFormat.button": "Book an appointment",
    "errorTitle": "Something went wrong...",
    "errorMessage":
      "Sorry, an error occurred. Please try refreshing the page or go back to the homepage.",
    "backHome": "Go back home",
       "titleNotFound": "404",
    "descriptionNotFound": "Sometimes it's hard to find even ourselves. Let alone this page...",
    "homeButtonNotFound": "Go to Homepage",
    "backButtonNotFound": "Back",
    "metaTitleNotFound": "404 — Page Not Found",
    "metaDescriptionNotFound": "Sorry, the requested page does not exist.",
  "chargingTheDayForSuccess": "Charging the day for success...",
  "workStartTitle": "How Will We Start Working Together?",
  "workStartDescription": "Our acquaintance always begins with a scheduled appointment. You can send me a message or leave a request on the website — we’ll find a convenient time for you.\n\nDuring the first consultation, we will calmly discuss what brought you to me. It doesn’t matter if you have a clear topic to discuss or just a feeling that 'something’s not right' — my task is to help you figure it out.\n\nThe first meeting lasts 50 minutes.",
  "workFormatsTitle": "How Do Consultations Work?",
  "workFormatsDescription": "There are two formats of work:\n\nShort-term consultations (5-10 sessions) — if you want to resolve a specific issue or situation.\n\nLong-term therapy (from 10 sessions) — if it’s important to deeply work through internal causes, change habitual patterns and relationships.\n\nTogether we will determine which path suits you best.",
  "workOrganizationalTitle": "A Few Organizational Points",
  "workOrganizationalDescription": "To make our collaboration comfortable:\n\nA consultation lasts 50 minutes.\nRecommended frequency — once a week.\nOnline sessions are prepaid.\n\nIf you can’t attend — please notify me at least 24 hours in advance. Otherwise, the session is considered held.\n\nIf you’re late — we work for the remaining time.\n\nImportant: I don’t give advice on 'how to live correctly.' Instead, I help you hear yourself and make your own decisions.",
  "workSimpleTitle": "In Simple Terms",
  "workSimpleDescription": "You can come to me even if you don’t know where to start.\nYour task is simply to come, and mine — to help you find the answers.",
"footerContactTitle": "Contact Information:",
"footerSubtitle": "Online Psychological Support",

    "heroWords": [
      "Inspiration",
      "Confidence",
      "Strength",
      "Calmness",
      "Harmony",
      "Goals",
      "Balance",
      "Self-discovery",
      "Support",
      "Growth",
      "Achievements",
      "Awareness",
      "Trust",
      "Self-esteem",
      "Wisdom",
    ],
  },
};

export type { TranslationKeys };
