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
  | "header.howWeWillWork"
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
  | "header.howWeWillWork"
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
  | "heroWords";

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
    "header.howWeWillWork": "Як ми будемо працювати",
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
    heroWords: [
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
    "header.howWeWillWork": "Как мы будем работать",
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
    heroWords: [
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
    "header.howWeWillWork": "How we will work",
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
    heroWords: [
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
