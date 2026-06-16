console.log("learn-tests loaded");

const root = document.getElementById("ecoBusinessTest");

if (!root) {
  console.warn("ecoBusinessTest not found");
} else {
  const initialLessonId = Number(root.dataset.lessonId || 1);
  const lesson5CarImage = require("../img/learn/Q-lesson5-car.png");
  const lesson5TextImage = require("../img/learn/Q-lesson5-text.png");
  const lesson6ManImage = require("../img/learn/Q-lesson6-man.png");
  const lesson6MuscleImage = require("../img/learn/Q-lesson6-muscul.png");
  const lesson7AppleImage = require("../img/learn/Q-lesson7-apple.png");
  const lesson7BottleImage = require("../img/learn/Q-lesson7-bottle.png");
  const lesson7BurgerBottomImage = require("../img/learn/Q-lesson7-burger-bottom.png");
  const lesson7BurgerTopImage = require("../img/learn/Q-lesson7-burger-top.png");
  const lesson8BarrelImage = require("../img/learn/Q-lesson8-barrel.png");
  const lesson8KroshImage = require("../img/learn/Q-lesson8-krosh.png");
  const lesson9CupImage = require("../img/learn/Q-lesson9-cup.png");
  const lesson9ManImage = require("../img/learn/Q-lesson9-men.png");
  const lesson9WatermelonImage = require("../img/learn/Q-lesson9-watermellon.png");
  const lesson10CatImage = require("../img/learn/Q-lesson10-cat.png");
  const lesson10CatArmImage = require("../img/learn/Q-lesson10-cat's-arm.png");
  const lesson11DevilImage = require("../img/learn/Q-lesson11-devil-and-trash.png");
  const lesson11SpearImage = require("../img/learn/Q-lesson11-spear.png");
  const lesson11TrashImage = require("../img/learn/Q-lesson11-trash.png");
  const lesson12BottleImage = require("../img/learn/Q-lesson12-bottle.png");
  const lesson12FlowerImage = require("../img/learn/Q-lesson12-flower.png");
  const lesson12WingLeftImage = require("../img/learn/Q-lesson12-wing-left.png");
  const lesson12WingRightImage = require("../img/learn/Q-lesson12-wing-right.png");
  const lesson13CarImage = require("../img/learn/Q-lesson13-car.png");
  const lesson13FactoryImage = require("../img/learn/Q-lesson13-factory.png");
  const lesson13RubImage = require("../img/learn/Q-lesson13-rub.png");
  const lesson14FlowerLilImage = require("../img/learn/Q-lesson14-flower-lil.png");
  const lesson14FlowerRubImage = require("../img/learn/Q-lesson14-flower-rub.png");
  const lesson14RubImage = require("../img/learn/Q-lesson14-rub.png");
  const lesson14ThermometerImage = require("../img/learn/Q-lesson14-ternomiter.png");
  const lesson15BigBottleImage = require("../img/learn/Q-lesson15-big-bottle.png");
  const lesson15CreamImage = require("../img/learn/Q-lesson15-cream.png");
  const lesson15LilBottleImage = require("../img/learn/Q-lesson15-lil-bottle.png");
  const lesson15RabbitImage = require("../img/learn/Q-lesson15-rebbit.png");
  const lesson15TextImage = require("../img/learn/Q-lesson15-text.png");
  const lesson16BagImage = require("../img/learn/Q-lesson16-bag.png");
  const lesson16FlowerImage = require("../img/learn/Q-lesson16-flower.png");
  const lesson16TicketImage = require("../img/learn/Q-lesson16-ticket.png");
  const lesson17MapPointImage = require("../img/learn/Q-lesson17-map-point.png");
  const lesson17MapImage = require("../img/learn/Q-lesson17-map.png");
  const lesson17TrashImage = require("../img/learn/Q-lesson17-trash.png");
  const lesson17TrashbinImage = require("../img/learn/Q-lesson17-trashbin.png");
  const lesson18Image = require("../img/learn/Q-lesson18.png");
  const lesson19BroccoliImage = require("../img/learn/Q-lesson19-broccoli.png");
  const lesson19RadishImage = require("../img/learn/Q-lesson19-radish.png");
  const lesson19SkeletonImage = require("../img/learn/Q-lesson19-sceleton.png");
  const lesson19AsparagusImage = require("../img/learn/Q-lesson19-sparrowgrass.png");
  const lesson20FactoryImage = require("../img/learn/Q-lesson20-factory.png");
  const lesson20PerfumeImage = require("../img/learn/Q-lesson20-perfume.png");

  const lessons = [
    {
      id: 1,
      lessonNumber: "1 урок",
      duration: "3 мин",
      coverTitle: "Псс...это эко-бизнес,<br />хочешь заработать?",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson1-base.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson1-base",
          alt: "База с цветами",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson1-wallet.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson1-wallet",
          alt: "Кошелёк",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson1-flowers-rubles.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson1-rubles",
          alt: "Рубли",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "ЧТО ТАКОЕ ЭКО-БИЗНЕС",
            "НА ЧЕМ ЗАРАБАТЫВАЮТ В «ЗЕЛЕНОМ БИЗНЕСЕ»",
            "РИСКИ И ВОЗМОЖНОСТИ",
            "ГЛАВНЫЙ СЕКРЕТ УСПЕХА",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Эко-бизнес — это бизнес, который зарабатывает на решении экологических проблем.
              </p>
              <p class="A-TestTextParagraph">
                Деньги здесь делают на переработке отходов, чистой энергии, новых материалах и экологичных технологиях.
              </p>
              <p class="A-TestTextParagraph">
                Да, вход может быть дорогим, но спрос на такие решения растёт, а рынок становится сильнее.
              </p>
              <p class="A-TestTextParagraph">
                Выигрывает тот, кто быстрее находит полезное решение и умеет превратить его в устойчивый продукт.
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "НА ЧЕМ ЗАРАБАТЫВАЕТ «ЗЕЛЁНЫЙ БИЗНЕС»?",
          text: "",
          answers: [
            { text: "НА ЗЕЛЁНКЕ", correct: false },
            {
              text: "НА РАЗВИТИИ ЭКО-ТЕХНОЛОГИЙ И ПЕРЕРАБОТКЕ",
              correct: true,
            },
            { text: "НА ЗАГРЯЗНЕНИИ ВОДОХРАНИЛИЩ", correct: false },
            { text: "НА СЖИГАНИИ ПОЛЕЗНЫХ РЕСУРСОВ", correct: false },
          ],
        },
      ],
    },

    {
      id: 2,
      lessonNumber: "2 урок",
      duration: "5 мин",
      coverTitle: "Как поднять денег на «зелёных» темках",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson2-phone-bg.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson2-bg",
          alt: "Фон телефона",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson2-phone-hand.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson2-phone",
          alt: "Телефон в руке",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "Где принимают крышки за деньги",
            "Как собрать и хранить много крышек",
            "Сколько действительно можно заработать",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Поставь коробку под раковиной дома, в офисе/университете и дай пакет друзьям.
                за неделю собери 400 пластиковых крышек, а за два месяца — 3200.
                промой и высуши крышки. Рекомендую сдавать во «Вкусвилл» (1 ₽/крышка),
                в «пятёрочке» (0.5 ₽/крышка), в магните не принимают
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "Где выгоднее сдавать пластиковые крышки?",
          text: "",
          answers: [
            { text: "В пункт «пятёрочка»", correct: false },
            { text: "В пункт «Перекрёсток»", correct: false },
            { text: "В пункт «Вкусвилл»", correct: true },
            { text: "В пункт «магнит»", correct: false },
          ],
        },
      ],
    },

    {
      id: 3,
      lessonNumber: "3 урок",
      duration: "4 мин",
      coverTitle: "эй, Fashion killer, убьём твою бедность?",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson3-man-base.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson3-base",
          alt: "Мужик",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson3-man-hand.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson3-hand",
          alt: "Рука",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "Как правильно устроить фэшн-геноцид",
            "Какие выложить фотографии, чтобы получить деньги",
            "Сколько можно заработать на фэшн-революции",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Проведи геноцид секонд-хенда, отбери брендовую одежду. Дальше постирай,
                отпарь, организуй фэшн-фотосессию, щёлкни лицевую, заднюю сторону вещи,
                бирку. размести своё объявление на авито.
              </p>
              <p class="A-TestTextParagraph">
                Рекомендация: напиши бренд, размер, состояние причину продажи и цену с торгом
                (Только подними сумму на 15–20%) и жди. Если продать позицию в среднем
                за 1 500 ₽ (без наценки), то за 10 вещей выручишь 10 000 ₽ чистыми
                (на закупку и доставку 5 000 ₽)
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "СКОЛЬКО МОЖНО ВЫРУЧИТЬ С ОДНОЙ ВЕЩИ С НАЦЕНКОЙ 10%?",
          text: "",
          answers: [
            { text: "1 000 ₽", correct: false },
            { text: "820 ₽", correct: false },
            { text: "1 650 ₽", correct: true },
            { text: "1 500 ₽", correct: false },
          ],
        },
      ],
    },

    {
      id: 4,
      lessonNumber: "4 урок",
      duration: "4 мин",
      coverTitle: "Пластик. Жизнь. смерть и воскрешение",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson4-grave-base.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson4-base",
          alt: "Надгробие",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson4-branch.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson4-branch",
          alt: "Ветка",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "Что такое эко-бизнес будущего",
            "Лидирующий участник «зеленого рынка» и его стратегия",
            "Показатели и перспективы развития",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Эко-бизнес будущего — это бизнес высоких технологий, яркий пример — CARBIOS. Компания
                изобрела фермент, расщепляющий пластик на мономеры, из которых
                можно сделать новый пластик. Зарабатывает на лицензизиировании
                своей технологии и сотрудничестве.
                Выручка компании составляет около 519 тыс. евро. Сейчас carbios успешно
                запускает заводы и масштабируется, К 2030 прогнозируется рост «зеленого
                рынка» до 1,2 млрд €, где компания займёт лидирующую позицию
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "В чем суть «вечной переработки» carbios?",
          text: "",
          answers: [
            {
              text: "Пластик растирают в порошок, нагревают, из полученного вещества делают новый",
              correct: false,
            },
            {
              text: "ферменты расщепляют пластик, из которых можно синтезировать новый",
              correct: true,
            },
            {
              text: "Пластик сжигают, и делают биомассу для производства",
              correct: false,
            },
          ],
        },
      ],
    },
  ];

  const extraLessonsCount = 16;
  const extraLessonTemplate = lessons[0];

  function createTextContent(paragraphs) {
    return `
      <div class="M-TestTextContent">
        ${paragraphs
          .map(
            (paragraph) => `
              <p class="A-TestTextParagraph">${paragraph}</p>
            `,
          )
          .join("")}
      </div>
    `;
  }

  const customLessonOverrides = {
    5: {
      duration: "6 мин",
      coverTitle: "Гринвошинг:<br />как промыть голову зелёным?",
      coverLayers: [
        {
          src: lesson5CarImage,
          className: "A-CoverLayer A-CoverLayer--lesson5-car",
          alt: "Машина",
        },
        {
          src: lesson5TextImage,
          className: "A-CoverLayer A-CoverLayer--lesson5-text",
          alt: "Эко",
        },
      ],
      stages: [
        {
          type: "learn-list",
          label: "Что вы узнаете",
          question: "",
          text: "",
          items: [
            "Что такое гринвошинг",
            "Как распознать грин-воздуханство?",
            "Приемы зеленого камуфляжа",
            "В чем виновна компания Volkswagen",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: createTextContent([
            "Гринвошинг — это бизнес-воздуханство, когда компания тратит деньги на рекламу своей экологичности, а не на реальное устранение вреда природе.",
            "Обычно могут покрасить упаковку в зеленый цвет, наклеить неопознанные сертификаты, написать размыто о незначительных эко-улучшениях в производстве.",
            "Показателен уголовный пример компании Volkswagen. Машины рекламировались как «Clean Diesel», но в них был встроен код-обманка, скрывающий на тестах выброс оксида азота, превышающий норму в 40 раз.",
            "Что по итогу? После разоблачения агентством США EPA компания понесла штрафы в 30 млрд $, менеджеры и инженеры присели на нары.",
          ]),
        },
        {
          type: "quiz",
          label: "Проверь себя",
          question: "Что такое гринвошинг?",
          text: "",
          answers: [
            {
              text: "Упаковка зеленого цвета, листики, капельки и непонятный сертификат вместо реальных действий",
              correct: true,
            },
            { text: "Цена неоправдано высокая", correct: false },
            { text: "Из открытой упаковки дует", correct: false },
            { text: "Последствия разоблачения", correct: false },
          ],
        },
      ],
    },
    6: {
      duration: "6 мин",
      coverTitle: "3 чит-кода,<br />и ты хакнешь собственное тело",
      coverLayers: [
        {
          src: lesson6ManImage,
          className: "A-CoverLayer A-CoverLayer--lesson6-man",
          alt: "Эко-биохакер",
        },
        {
          src: lesson6MuscleImage,
          className: "A-CoverLayer A-CoverLayer--lesson6-arm",
          alt: "Рука",
        },
      ],
      stages: [
        {
          type: "learn-list",
          label: "Что вы узнаете",
          question: "",
          text: "",
          items: [
            "Что такое эко-биохакинг",
            "Что бы сделал настоящий эко-биохакер?",
            "Сейчас будем приземляться",
            "Правило «холодрыыггаа»",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: createTextContent([
            "Эко-биохакинг — это взлом организма для максимальной энергии и долголетия без вреда для природы.",
            "Рекомендую начать с правила «заземления». Как проснешься, 10–20 минут пройдись босиком по траве, земле или песку, чтобы улучшить кровоток.",
            "Также ты можешь в течение 30–60 секунд поднимать ледяную воду от стоп к ногам, а затем к спине — это укрепит иммунитет.",
            "В завершение дня откажись от гаджетов и искусственного света после 21:00. Будешь спать как младенец. Надеемся, наши советы помогут обрести энергию и сохранить фокус в течение дня.",
          ]),
        },
        {
          type: "quiz",
          label: "Проверь себя",
          question: "Что бы сделал настоящий эко-биохакер?",
          text: "",
          answers: [
            { text: "Прошелся в шлепках по траве", correct: false },
            {
              text: "Помылся теплой водой, в конце 30–60 секунд ледяной",
              correct: true,
            },
            { text: "Отказался от гаджетов после полуночи", correct: false },
            { text: "Циркадный детокс отложил на выходные", correct: false },
          ],
        },
      ],
    },
    7: {
      duration: "6 мин",
      coverTitle: "Junkfood нового<br />поколения: плюсы<br />мусорной диеты",
      coverLayers: [
        {
          src: lesson7BottleImage,
          className: "A-CoverLayer A-CoverLayer--lesson7-bottle",
          alt: "Бутылка",
        },
        {
          src: lesson7AppleImage,
          className: "A-CoverLayer A-CoverLayer--lesson7-apple",
          alt: "Огрызок яблока",
        },
        {
          src: lesson7BurgerBottomImage,
          className: "A-CoverLayer A-CoverLayer--lesson7-burger-bottom",
          alt: "Нижняя часть бургера",
        },
        {
          src: lesson7BurgerTopImage,
          className: "A-CoverLayer A-CoverLayer--lesson7-burger-top",
          alt: "Верхняя часть бургера",
        },
      ],
    },
    8: {
      duration: "6 мин",
      coverTitle: "Смешарики предсказали:<br />теперь действительно<br />черное море",
      coverLayers: [
        {
          src: lesson8KroshImage,
          className: "A-CoverLayer A-CoverLayer--lesson8-krosh",
          alt: "Крош",
        },
        {
          src: lesson8BarrelImage,
          className: "A-CoverLayer A-CoverLayer--lesson8-barrel",
          alt: "Бочка",
        },
      ],
    },
    9: {
      duration: "6 мин",
      coverTitle: "Треш-арт: как из мусора<br />создать шедевр и продать<br />его на авито",
      coverLayers: [
        {
          src: lesson9CupImage,
          className: "A-CoverLayer A-CoverLayer--lesson9-cup",
          alt: "Стакан",
        },
        {
          src: lesson9WatermelonImage,
          className: "A-CoverLayer A-CoverLayer--lesson9-watermelon",
          alt: "Арбузная корка",
        },
        {
          src: lesson9ManImage,
          className: "A-CoverLayer A-CoverLayer--lesson9-man",
          alt: "Скульптура",
        },
      ],
    },
    10: {
      duration: "6 мин",
      coverTitle: "Экология по-японски<br />экстремальный ноль",
      coverLayers: [
        {
          src: lesson10CatImage,
          className: "A-CoverLayer A-CoverLayer--lesson10-cat",
          alt: "Кот",
        },
        {
          src: lesson10CatArmImage,
          className: "A-CoverLayer A-CoverLayer--lesson10-arm",
          alt: "Лапа кота",
        },
      ],
    },
    11: {
      duration: "6 мин",
      coverTitle: "Зеленая истерия. как эко-<br />движение становится<br />сектой?",
      coverLayers: [
        {
          src: lesson11DevilImage,
          className: "A-CoverLayer A-CoverLayer--lesson11-devil",
          alt: "Эко-черт",
        },
        {
          src: lesson11TrashImage,
          className: "A-CoverLayer A-CoverLayer--lesson11-trash",
          alt: "Мусор",
        },
        {
          src: lesson11SpearImage,
          className: "A-CoverLayer A-CoverLayer--lesson11-spear",
          alt: "Копье",
        },
      ],
    },
    12: {
      duration: "6 мин",
      coverTitle: "Делать деньги из воздуха:<br />заработок на углеродных<br />кредитах",
      coverLayers: [
        {
          src: lesson12WingLeftImage,
          className: "A-CoverLayer A-CoverLayer--lesson12-wing-left",
          alt: "Левое крыло",
        },
        {
          src: lesson12WingRightImage,
          className: "A-CoverLayer A-CoverLayer--lesson12-wing-right",
          alt: "Правое крыло",
        },
        {
          src: lesson12BottleImage,
          className: "A-CoverLayer A-CoverLayer--lesson12-bottle",
          alt: "Банка",
        },
        {
          src: lesson12FlowerImage,
          className: "A-CoverLayer A-CoverLayer--lesson12-flower",
          alt: "Цветок",
        },
      ],
    },
    13: {
      duration: "6 мин",
      coverTitle: "Где деньги в условиях<br />низкоуглеродной<br />экономики?",
      coverLayers: [
        {
          src: lesson13RubImage,
          className: "A-CoverLayer A-CoverLayer--lesson13-rub",
          alt: "Рубль",
        },
        {
          src: lesson13FactoryImage,
          className: "A-CoverLayer A-CoverLayer--lesson13-factory",
          alt: "Завод",
        },
        {
          src: lesson13CarImage,
          className: "A-CoverLayer A-CoverLayer--lesson13-car",
          alt: "Машина",
        },
      ],
    },
    14: {
      duration: "6 мин",
      coverTitle: "Какие инвестиции умрут<br />из-за изменяющегося<br />климата?",
      coverLayers: [
        {
          src: lesson14ThermometerImage,
          className: "A-CoverLayer A-CoverLayer--lesson14-thermometer",
          alt: "Термометр",
        },
        {
          src: lesson14FlowerLilImage,
          className: "A-CoverLayer A-CoverLayer--lesson14-flower-lil",
          alt: "Маленький цветок",
        },
        {
          src: lesson14FlowerRubImage,
          className: "A-CoverLayer A-CoverLayer--lesson14-flower-rub",
          alt: "Цветок с рублем",
        },
        {
          src: lesson14RubImage,
          className: "A-CoverLayer A-CoverLayer--lesson14-rub",
          alt: "Рубль",
        },
      ],
    },
    15: {
      duration: "6 мин",
      coverTitle: "Трушная сертификация<br />органической косметики",
      coverLayers: [
        {
          src: lesson15CreamImage,
          className: "A-CoverLayer A-CoverLayer--lesson15-cream",
          alt: "Крем",
        },
        {
          src: lesson15TextImage,
          className: "A-CoverLayer A-CoverLayer--lesson15-text",
          alt: "Эко",
        },
        {
          src: lesson15RabbitImage,
          className: "A-CoverLayer A-CoverLayer--lesson15-rabbit",
          alt: "Кролик",
        },
        {
          src: lesson15BigBottleImage,
          className: "A-CoverLayer A-CoverLayer--lesson15-big-bottle",
          alt: "Большой флакон",
        },
        {
          src: lesson15LilBottleImage,
          className: "A-CoverLayer A-CoverLayer--lesson15-lil-bottle",
          alt: "Маленький флакон",
        },
      ],
    },
    16: {
      duration: "6 мин",
      coverTitle: "Эко-туризм: с чистой<br />совестью на чистом<br />воздухе",
      coverLayers: [
        {
          src: lesson16BagImage,
          className: "A-CoverLayer A-CoverLayer--lesson16-bag",
          alt: "Чемодан",
        },
        {
          src: lesson16TicketImage,
          className: "A-CoverLayer A-CoverLayer--lesson16-ticket",
          alt: "Билет",
        },
        {
          src: lesson16FlowerImage,
          className: "A-CoverLayer A-CoverLayer--lesson16-flower",
          alt: "Цветок",
        },
      ],
    },
    17: {
      duration: "6 мин",
      coverTitle: "Где находится самый<br />дорогой мусор в России?",
      coverLayers: [
        {
          src: lesson17MapImage,
          className: "A-CoverLayer A-CoverLayer--lesson17-map",
          alt: "Карта",
        },
        {
          src: lesson17TrashbinImage,
          className: "A-CoverLayer A-CoverLayer--lesson17-trashbin",
          alt: "Контейнер",
        },
        {
          src: lesson17TrashImage,
          className: "A-CoverLayer A-CoverLayer--lesson17-trash",
          alt: "Мусор",
        },
        {
          src: lesson17MapPointImage,
          className: "A-CoverLayer A-CoverLayer--lesson17-map-point",
          alt: "Точка на карте",
        },
      ],
    },
    18: {
      duration: "6 мин",
      coverTitle: "Новый урок 18<br />скоро настроим отдельно",
      coverLayers: [
        {
          src: lesson18Image,
          className: "A-CoverLayer A-CoverLayer--lesson18-main",
          alt: "Обложка урока",
        },
      ],
    },
    19: {
      duration: "6 мин",
      coverTitle: "Как «зеленая» еда<br />нас убивает?",
      coverLayers: [
        {
          src: lesson19SkeletonImage,
          className: "A-CoverLayer A-CoverLayer--lesson19-skeleton",
          alt: "Череп",
        },
        {
          src: lesson19AsparagusImage,
          className: "A-CoverLayer A-CoverLayer--lesson19-asparagus",
          alt: "Спаржа",
        },
        {
          src: lesson19BroccoliImage,
          className: "A-CoverLayer A-CoverLayer--lesson19-broccoli",
          alt: "Брокколи",
        },
        {
          src: lesson19RadishImage,
          className: "A-CoverLayer A-CoverLayer--lesson19-radish",
          alt: "Редис",
        },
      ],
    },
    20: {
      duration: "6 мин",
      coverTitle: "Осторожно, пахнет<br />переработкой!",
      coverLayers: [
        {
          src: lesson20FactoryImage,
          className: "A-CoverLayer A-CoverLayer--lesson20-factory",
          alt: "Завод",
        },
        {
          src: lesson20PerfumeImage,
          className: "A-CoverLayer A-CoverLayer--lesson20-perfume",
          alt: "Духи",
        },
      ],
    },
  };

  function cloneLesson(source, id) {
    const lesson = {
      ...source,
      id,
      lessonNumber: `${id} урок`,
      coverTitle: `Новый урок ${id}<br />скоро настроим отдельно`,
      coverLayers: source.coverLayers.map((layer) => ({ ...layer })),
      stages: source.stages.map((stage) => ({
        ...stage,
        items: stage.items ? [...stage.items] : undefined,
        answers: stage.answers
          ? stage.answers.map((answer) => ({ ...answer }))
          : undefined,
      })),
      passed: false,
    };

    const override = customLessonOverrides[id];

    if (!override) return lesson;

    return {
      ...lesson,
      ...override,
      lessonNumber: `${id} урок`,
      passed: false,
    };
  }

  for (let i = 0; i < extraLessonsCount; i += 1) {
    const nextId = lessons.length + 1;
    lessons.push(cloneLesson(extraLessonTemplate, nextId));
  }

  const coverScreen = document.getElementById("coverScreen");
  const testCard = document.getElementById("testCard");
  const winCard = document.getElementById("winCard");
  const loseCard = document.getElementById("loseCard");

  const coverTitle = document.getElementById("coverTitle");
  const coverLessonNumber = document.getElementById("coverLessonNumber");
  const coverDuration = document.getElementById("coverDuration");
  const coverImage = document.getElementById("coverImage");

  const startTestBtn = document.getElementById("startTestBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  const continueBtn = document.getElementById("continueBtn");

  const testLabel = document.getElementById("testLabel");
  const testQuestion = document.getElementById("testQuestion");
  const testText = document.getElementById("testText");
  const learnList = document.getElementById("learnList");
  const answersRoot = document.getElementById("answers");
  const progressLine = document.getElementById("testProgressLine");

  const awardsRoot = root.querySelector(".W-Card-Swipe-Left");
  const awardPlaceholderDefault =
    "https://github.com/HSEADC/Trace/blob/main/src/img/learn/A-Award-Zelenka-disable.png?raw=true";
  const awardPlaceholderComplete =
    "https://github.com/HSEADC/Trace/blob/main/src/img/learn/A-Award-Zelenka-active.png?raw=true";

  function createAwardSlot(index) {
    const slot = document.createElement("div");
    slot.className = "M-AwardSlot";
    slot.dataset.awardIndex = String(index);

    const line = document.createElement("div");
    line.className = "A-Award-Line";

    const img = document.createElement("img");
    img.className = "A-Award-Img";
    img.id = `awardImg${index}`;
    img.src = awardPlaceholderDefault;
    img.alt = `Медаль урока ${index}`;
    img.dataset.default = awardPlaceholderDefault;
    img.dataset.complete = awardPlaceholderComplete;

    slot.appendChild(line);
    slot.appendChild(img);
    return slot;
  }

  if (awardsRoot) {
    for (
      let index = awardsRoot.children.length + 1;
      index <= lessons.length;
      index += 1
    ) {
      awardsRoot.appendChild(createAwardSlot(index));
    }
  }

  const awardSlots = [...root.querySelectorAll(".M-AwardSlot")];

  let currentLessonIndex = Math.min(
    Math.max(initialLessonId - 1, 0),
    lessons.length - 1,
  );
  let step = 0;
  let score = 0;
  let started = false;
  let picks = [];

  function getCurrentLesson() {
    return lessons[currentLessonIndex];
  }

  function resetLessonState() {
    step = 0;
    score = 0;
    started = false;
    picks = getCurrentLesson().stages.map(() => null);
  }

  function updateAwards() {
    awardSlots.forEach((slot, index) => {
      const lesson = lessons[index];
      const img = slot.querySelector(".A-Award-Img");

      slot.classList.remove("isCurrent", "isCompleted");

      if (!lesson || !img) return;

      if (img.dataset.default) {
        img.src = lesson.passed ? img.dataset.complete : img.dataset.default;
      }

      if (lesson.passed) {
        slot.classList.add("isCompleted");
      }

      if (index === currentLessonIndex && started) {
        slot.classList.add("isCurrent");
      }
    });
  }

  function updateProgress() {
    const stages = getCurrentLesson().stages;
    const percent = ((step + 1) / stages.length) * 100;
    progressLine.style.width = `${percent}%`;
  }

  function renderCoverLayers(lesson) {
    if (!coverImage) return;

    coverImage.innerHTML = "";

    if (!lesson.coverLayers || !lesson.coverLayers.length) return;

    lesson.coverLayers.forEach((layer) => {
      const img = document.createElement("img");
      img.src = layer.src;
      img.alt = layer.alt || "";
      img.className = layer.className || "A-CoverLayer";
      coverImage.appendChild(img);
    });
  }

  function renderCover() {
    const lesson = getCurrentLesson();

    coverTitle.innerHTML = lesson.coverTitle;
    coverLessonNumber.textContent = lesson.lessonNumber;
    coverDuration.textContent = lesson.duration;

    renderCoverLayers(lesson);

    coverScreen.classList.remove("isHidden");
    testCard.classList.add("isHidden");
    winCard.classList.add("isHidden");
    loseCard.classList.add("isHidden");

    progressLine.style.width = "0%";
    updateAwards();
  }

  function renderStep() {
    const stage = getCurrentLesson().stages[step];

    testLabel.textContent = stage.label || "";
    testQuestion.textContent = stage.question || "";
    testText.innerHTML = stage.text || "";

    learnList.innerHTML = "";
    answersRoot.innerHTML = "";

    learnList.classList.add("isHidden");
    answersRoot.classList.add("isHidden");

    if (stage.type === "learn-list") {
      learnList.classList.remove("isHidden");

      stage.items.forEach((item) => {
        const row = document.createElement("div");
        row.className = "M-TestLearnRow";

        const icon = document.createElement("img");
        icon.className = "A-TestLeafIcon";
        icon.src =
          "https://github.com/HSEADC/Trace/blob/main/src/img/learn/A-Leaf-Icon.png?raw=true";
        icon.alt = "";

        const text = document.createElement("div");
        text.className = "A-TestLearnText";
        text.textContent = item;

        row.appendChild(icon);
        row.appendChild(text);
        learnList.appendChild(row);
      });
    }

    if (stage.type === "quiz") {
      answersRoot.classList.remove("isHidden");

      stage.answers.forEach((ans, idx) => {
        const row = document.createElement("label");
        row.className = "M-TestAnswer";

        const fake = document.createElement("span");
        fake.className = "A-TestBox";

        const text = document.createElement("span");
        text.className = "A-TestAnswerText";
        text.textContent = ans.text;

        if (picks[step] === idx) {
          row.classList.add("isActive");
        }

        row.addEventListener("click", () => {
          picks[step] = idx;
          renderStep();
        });

        row.appendChild(fake);
        row.appendChild(text);
        answersRoot.appendChild(row);
      });
    }

    prevBtn.disabled = step === 0;
    nextBtn.disabled = stage.type === "quiz" ? picks[step] === null : false;

    updateProgress();
    updateAwards();
  }

  function showTest() {
    coverScreen.classList.add("isHidden");
    winCard.classList.add("isHidden");
    loseCard.classList.add("isHidden");
    testCard.classList.remove("isHidden");
    renderStep();
  }

  function showResult() {
    score = 0;

    getCurrentLesson().stages.forEach((stage, i) => {
      if (stage.type !== "quiz") return;
      const pick = picks[i];
      if (pick === null) return;
      if (stage.answers[pick]?.correct) score += 1;
    });

    testCard.classList.add("isHidden");

    if (score >= getCurrentLesson().passScore) {
      getCurrentLesson().passed = true;
      winCard.classList.remove("isHidden");
      loseCard.classList.add("isHidden");
    } else {
      winCard.classList.add("isHidden");
      loseCard.classList.remove("isHidden");
    }

    started = false;
    updateAwards();
  }

  function switchLesson(index) {
    currentLessonIndex = index;
    resetLessonState();
    renderCover();
  }

  startTestBtn?.addEventListener("click", () => {
    started = true;
    step = 0;
    updateAwards();
    showTest();
  });

  prevBtn?.addEventListener("click", () => {
    if (step === 0) return;
    step -= 1;
    renderStep();
  });

  nextBtn?.addEventListener("click", () => {
    const stages = getCurrentLesson().stages;
    const stage = stages[step];

    if (stage.type === "quiz" && picks[step] === null) return;

    if (step < stages.length - 1) {
      step += 1;
      renderStep();
    } else {
      showResult();
    }
  });

  restartBtn?.addEventListener("click", () => {
    step = 0;
    score = 0;
    picks = getCurrentLesson().stages.map(() => null);
    started = true;
    showTest();
  });

  continueBtn?.addEventListener("click", () => {
    const nextIndex = currentLessonIndex + 1;

    if (nextIndex < lessons.length) {
      switchLesson(nextIndex);
    } else {
      switchLesson(0);
    }
  });

  awardSlots.forEach((slot, index) => {
    slot.addEventListener("click", () => {
      switchLesson(index);
    });
  });

  resetLessonState();
  renderCover();
}
